export default {
    // other configurations...
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        },
        // other rules...
      ]
    }
    // other configurations...
  };
  