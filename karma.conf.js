module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'mocha'],
    files: [
      'src/main.js',
      'test/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/main.js': ['browserify'],
      'test/*.js': ['browserify']
    },
    browserify: {
      debug: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};