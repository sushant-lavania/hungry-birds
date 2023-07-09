/** @type {import('next').NextConfig} */


module.exports = {
  images: {
    reactStrictMode: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        
      },
    ],
  },
}

