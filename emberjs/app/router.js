import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('feed');
  this.route('feed-new');
  this.route('email');
  this.route('email-new');
  this.route('summary');
});

export default Router;
