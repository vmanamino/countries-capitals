// Karma configuration
// Generated on Sun May 15 2016 19:43:10 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/bower_components/angular-animate/angular-animate.js',
      './app/bower_components/angular/angular-mocks.js',
      './app/cc-app.js',
      './app/cc-appSpec.js',
      './app/librarySpec.js',
      './app/library.js',
      './app/home/homeSpec.js',
      './app/home/home.js',
      './app/countries/countries.js',
      './app/countries/countriesSpec.js',
      './app/country/countrySpec.js',
      './app/country/country.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    // port: 9876,
    hostname: process.env.IP,
    port: process.env.PORT,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
