import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('friend');
	}
	// actions:{
	// 	delete(model){
	// 		// this.get('model').detro
	// 	}
	// }
});
