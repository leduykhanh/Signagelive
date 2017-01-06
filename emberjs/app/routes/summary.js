import Ember from 'ember';

export default Ember.Route.extend({
	ifttt: Ember.inject.service('ifttt'),
	model(){
		return Ember.RSVP.hash({
		url : this.get("ifttt").items[0].url,
		email : this.get("ifttt").items[1].email,
		headerItem: {title: 'Review and finish', step:6}
	});
	}
});
