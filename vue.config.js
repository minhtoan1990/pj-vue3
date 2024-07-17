module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/your-sub-path/'
      : '/',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5173',
          changeOrigin: true
        }
      }
    }
  }
  