import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true, // Disables linting during builds
	},
	webpack: function (config, options) {
		config.experiments = {
			asyncWebAssembly: true,
			layers: true,
		};
		return config;
	},
};

export default nextConfig;
