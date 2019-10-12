const path = require('path');

module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'CoCraft',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  //   questhome: {
  //     entry: 'src/quest/home/main_questhome.js',
  //     template: 'public/quest/home.html',
  //     filename: 'home.html',
  //     title: 'Quest Marketplace | SUTDQuest',
  //     chunks: ['chunk-vendors', 'chunk-common', 'questhome']  //TODO: make sure we know what chunks we're supposed to import
  //   }
  //   // when using the entry-only string format,
  //   // template is inferred to be `public/subpage.html`
  //   // and falls back to `public/index.html` if not found.
  //   // Output filename is inferred to be `subpage.html`.
  //   //subpage: 'src/subpage/main.js'
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@": path.resolve(__dirname, 'src')
  //     }
  //   }
  // }
  chainWebpack: config => {
    config.module.rule('vue').uses.delete('cache-loader');
  }
}
