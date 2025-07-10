module.exports = {
  // Pastikan webpack-dev-server menggunakan port yang sama dengan yang Anda gunakan
  devServer: {
    port: 8080 // Sesuaikan dengan port Vue.js Anda
  },
  // Menonaktifkan linting pada saat development server
  // Ini akan mencegah eslint-loader berjalan dan menyebabkan masalah
  lintOnSave: false,

  chainWebpack: config => {
    // Hapus atau nonaktifkan eslint-loader jika masih terdeteksi
    // Ini adalah cara paling efektif untuk memastikan eslint-loader tidak aktif
    config.module.rule('eslint').uses.clear();
    
    // Atau, jika Anda ingin menggunakan eslint-webpack-plugin, pastikan konfigurasinya benar.
    // Vue CLI 5 seharusnya sudah mengaturnya secara default jika eslint-webpack-plugin ada di package.json
    // Anda sudah punya "eslint-webpack-plugin": "^3.1.1", jadi ini seharusnya bekerja.
  }
}; 