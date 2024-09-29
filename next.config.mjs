/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: "/home",
        permanent: false
      },
      {
        source: '/dashboard',
        destination: '/private/dashboard',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
