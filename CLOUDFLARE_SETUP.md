# Cloudflare Setup

## Obtaining your Cloudflare Account ID

To complete the `wrangler.toml` configuration, you'll need to obtain your Cloudflare account ID:

1. **Log in to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in with your Cloudflare account

2. **Find your Account ID**
   - On the right sidebar of the dashboard, look for the **Account ID** section
   - It will be displayed as a string of characters (e.g., `abcd1234efgh5678ijkl9012mnop3456`)
   - Click the copy button next to it to copy the ID

3. **Update wrangler.toml**
   - Replace `<YOUR_CF_ACCOUNT_ID>` in the `wrangler.toml` file with your actual account ID
   - Example: `account_id = "abcd1234efgh5678ijkl9012mnop3456"`

## Configuration Explanation

The `wrangler.toml` file contains:

- **name**: The name of your Workers project (`fringe-slingshot`)
- **account_id**: Your Cloudflare account identifier
- **compatibility_date**: Ensures consistent behavior with Cloudflare Workers runtime
- **main**: Entry point for the Worker script (will be created in the next step)
- **[site] bucket**: Tells Workers to serve static files from the `./dist` directory (Vite build output)

The `[site]` configuration enables Cloudflare Workers Sites, which allows your Worker to serve static assets alongside dynamic functionality.
