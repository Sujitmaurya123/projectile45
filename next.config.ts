import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // output: 'export',
//   // distDir: 'dist'
// };

// export default nextConfig;

// import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'projectile45.info', // Match requests from projectile45.info
          },
        ],
        destination: 'https://www.p45.in/:path*', // Redirect to the main domain
        permanent: true, // Use a 301 redirect for SEO
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'projectile45.in', // Match requests from projectile45.in
          },
        ],
        destination: 'https://www.p45.in/:path*', // Redirect to the main domain
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'projectile45.com', // Match requests from projectile45.com
          },
        ],
        destination: 'https://www.p45.in/:path*', // Redirect to the main domain
        permanent: true,
      },
    ];
  },
  output: 'export',
  distDir: 'dist'
};

export default nextConfig;
