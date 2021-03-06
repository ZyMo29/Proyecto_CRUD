import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		guardar(model){
			this.get('model').save();
			this.transitionToRoute('friends.show',model);
		},
		cancel(model){
			this.transitionToRoute('friends.show',model);
		}
	}
});
