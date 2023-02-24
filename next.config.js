const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: isProd,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: isProd
                ? '/imkazte/_next/static/videos/'
                : '/static/videos/',
              outputPath: path.join(__dirname, 'public', 'static', 'videos'),
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
              publicPath: isProd
                ? '/imkazte/_next/static/files/'
                : '/static/files/',
              outputPath: path.join(__dirname, 'public', 'static', 'files'),
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