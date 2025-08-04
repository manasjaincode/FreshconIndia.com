// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cl85-next.s3.ap-south-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'freshcon.net',
          },
        ],
        destination: 'https://www.freshconindia.com/:path*',
        permanent: true,
      },
    ];
  },
};
