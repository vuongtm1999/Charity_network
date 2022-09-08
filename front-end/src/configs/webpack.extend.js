module.exports = {
    dev: (config) => {
      //override webpack configuration
      config.externals =[..];
      return config;
    },
    prod: (config) => {
      //override webpack configuration
      config.externals =[..];
      return config;
    }
  };