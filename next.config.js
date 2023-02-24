const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/videos',
              outputPath: 'static/videos',
              name: '[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files/',
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      }
    );

    return config;
  },
};

module.exports = nextConfig;