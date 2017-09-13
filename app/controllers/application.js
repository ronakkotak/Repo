import Ember from 'ember';
const {
	Controller,
	inject: {
		service
	},
	computed,
	get,
} = Ember;

export default Controller.extend({
	session: service(),
	isAuthenticated: computed('session.authenticatedUser', function() {
		return get(this,'session').isAuthenticatedUser();
	}),
});
