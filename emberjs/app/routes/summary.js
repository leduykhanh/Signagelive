import Ember from 'ember';

export default Ember.Route.extend({
	ifttt: Ember.inject.service('ifttt'),
	model(){
		url : this.get("ifttt").items[0].url
	}
});
