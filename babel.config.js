module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // add begin
  plugins: [
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: name => `${name}/style/less` },
      'vant'
    ]
  ]
  // add end
};
