/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: "/home",
        permanent: true
      },
      {
        source: '/dashboard',
        destination: '/private/dashboard',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
