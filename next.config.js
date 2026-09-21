/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about-clinic',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#treatments',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/orthodontics',
        destination: '/services/braces-noida',
        permanent: true,
      },
      {
        source: '/clear-aligners',
        destination: '/services/clear-aligners-noida',
        permanent: true,
      },
      {
        source: '/root-canal',
        destination: '/services/root-canal-treatment-noida',
        permanent: true,
      },
      {
        source: '/dental-implants',
        destination: '/services/dental-implants-noida',
        permanent: true,
      },
      {
        source: '/smile-designing',
        destination: '/services/smile-designing-noida',
        permanent: true,
      },
      {
        source: '/doctor-profile',
        destination: '/meet-dr-jyoti-chauhan',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
