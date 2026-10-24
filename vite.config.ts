import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

function apiInquiryPlugin(): Plugin {
  return {
    name: 'api-inquiry-middleware',
    configureServer(server) {
      server.middlewares.use('/api/inquiry', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json');
          try {
            const data = JSON.parse(body || '{}');
            const resendApiKey = process.env.RESEND_API_KEY;
            const notificationEmail =
              process.env.NOTIFICATION_EMAIL || 'othmarphilip@gmail.com';
            const fromEmail =
              process.env.FROM_EMAIL || 'Othmar Studio Inquiries <onboarding@resend.dev>';

            if (!resendApiKey) {
              // Return unconfigured response honestly — never simulate success
              res.statusCode = 501;
              res.end(
                JSON.stringify({
                  success: false,
                  unconfigured: true,
                  message:
                    'Transactional email provider (RESEND_API_KEY) is not configured in server environment variables. Inquiry preserved for direct client communication.',
                })
              );
              return;
            }

            // Direct Resend invocation if key is configured
            const textContent =
              `New project inquiry received via Othmar Creative Studio:\n\n` +
              `Client Name: ${data.fullName}\n` +
              `Company: ${data.companyName || 'Not specified'}\n` +
              `Email: ${data.email}\n` +
              `Service: ${data.service || 'General'}\n` +
              `Budget: ${data.budget || 'Not specified'}\n` +
              `Timeline: ${data.timeline || 'Not specified'}\n\n` +
              `Scope:\n${data.projectDescription}`;

            const resendRes = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: fromEmail,
                to: [notificationEmail],
                reply_to: data.email,
                subject: 'New Project Inquiry — Othmar Creative Studio',
                text: textContent,
              }),
            });

            if (resendRes.ok) {
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Inquiry transmitted successfully via Resend.',
                })
              );
              return;
            } else {
              const err = await resendRes.text();
              console.error('Dev Resend delivery failure:', err);
              res.statusCode = 502;
              res.end(
                JSON.stringify({
                  success: false,
                  error: 'Resend rejected email transmission. Please check RESEND_API_KEY.',
                })
              );
              return;
            }
          } catch {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid JSON request body.' }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), apiInquiryPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
