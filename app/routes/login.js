import Ember from 'ember';
const {
	Route,
	set,
} = Ember;
export default Route.extend({
	resetController(controller, isExiting) {
		if (isExiting) {
			set(controller, 'userName', '');
			set(controller, 'password', '');
		}
	},
});