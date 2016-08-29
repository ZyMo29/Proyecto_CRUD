import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		guardar(){
			this.guardar(this.get('model'));
		},
		cancel(){
			this.cancel(this.get('model'));

		}
	}
});
