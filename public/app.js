require('ui/chrome')
require('ui/autoload/all');

require('plugins/kibana-keynote/less/main.less');
require('plugins/kibana-keynote/directives/slides');

require('ui/routes').enable();
require('ui/routes')
  .when('/', {
    template: require('plugins/kibana-keynote/templates/index.html')
  });
