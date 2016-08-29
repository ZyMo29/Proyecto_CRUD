import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function() {
    this.route('show', {
      path: ':friend_id'
    });
    this.route('new');

    this.route('edir', {
      path: ':friend_id/edit'
    });
  });
  this.route('new');
});

export default Router;
