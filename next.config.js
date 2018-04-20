const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const nextConfig = {
	poweredByHeader: false,
	useFileSystemPublicRoutes: true,
	webpack: (config, { dev }) => {
		config.node = {
			fs: 'empty'
		}
		config.devtool = dev ? 'inline-source-map' : 'source-map'

		return config
	}
}

module.exports = withPlugins([
	withSass
], nextConfig)
