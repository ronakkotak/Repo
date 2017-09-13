import Ember from 'ember';
const {
	inject: {
		service,
	},
	Route,
	get,
} = Ember;

export default Route.extend({
	session:service(),
	defferedTransition:service(),
	beforeModel(transition) {
		let session = get(this , 'session');
		let defferedTransition = get(this , 'defferedTransition');
		if(!session.isAuthenticatedUser()){
			defferedTransition.setTranstion(transition);
			this.transitionTo('access-denied');
		}
		this._super(...arguments);
	}
});
