import Ember from 'ember';
const {
	Service,
	set,
	get,
} = Ember;
export default Service.extend({
	attemptedTranstion: null,
	setTranstion(transition) {
		set(this, 'attemptedTranstion', transition)
	},
	getTranstion() {
		return get(this, 'attemptedTranstion');
	}
});