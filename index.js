var path = require('path');

module.exports = function (kibana) {
  return new kibana.Plugin({

    name: 'kibana-keynote',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'Keynote',
        description: 'Weeeeee',
        icon: 'plugins/kibana-keynote/icon.svg',
        main: 'plugins/kibana-keynote/app',
        injectVars: function (server, options) {
          var config = server.config();
          return {
            kbnIndex: config.get('kibana.index'),
            esShardTimeout: config.get('elasticsearch.shardTimeout'),
            esApiVersion: config.get('elasticsearch.apiVersion')
          };
        }
      }
    },

    config: function (Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init: function (server, options) {
      // Add server routes and initalize the plugin here

    }

  });
};
