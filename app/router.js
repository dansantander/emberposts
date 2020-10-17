import EmberRouter from '@ember/routing/router';
import config from 'emberposts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('post', { path: '/posts/:id'});
  this.route('create', { path: '/posts/new'});
});
