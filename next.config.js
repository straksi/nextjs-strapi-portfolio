/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
		appDir: true,
	},
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'https://strapi-production-f7f6.up.railway.app'],
  },
}

module.exports = nextConfig
