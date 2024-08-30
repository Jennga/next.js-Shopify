import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig}

/*const path = require('path')*/

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "_variables.sass"`
      },
      images: {
        remotePatterns: [
          {
            hostname: 'cdn.shopify.com',
            protocol: 'https',
        }
      ]
      }
}

export default nextConfig;
