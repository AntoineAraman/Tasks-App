'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'tasks-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyDD7E0J5AZDNtEZOx0z_zM2xuFTN0JX6B8",
      authDomain: "tasksapp-dc541.firebaseapp.com",
      databaseURL: "https://tasksapp-dc541-default-rtdb.firebaseio.com",
      projectId: "tasksapp-dc541",
      storageBucket: "tasksapp-dc541.appspot.com",
      messagingSenderId: "1001129757484",
      appId: "1:1001129757484:web:67f8bea7cfc2fe0a0b7a89",
      measurementId: "G-BXD2CD2KCX"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
