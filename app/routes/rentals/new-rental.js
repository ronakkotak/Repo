import Ember from 'ember';
import authenticatedRoute from 'super-rentals/routes/authenticated'
const {
	
	get,
	set,
} = Ember;
export default authenticatedRoute.extend({
	model() {
		return this.createNewRental();
	},
	resetController(controller, isExiting) {
		if (isExiting) {
			set(controller, 'selectedCity', '');
			set(controller, 'selectedPropertyType', '');
			set(controller, 'displayErrors', false);
		}
	},
	createNewRental() {
		return get(this, 'store').createRecord('rental', {
			title: '',
			owner: '',
			city: '',
			propertyType: '',
			image:'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
			bedrooms: '',
			description: ''
		});
	},
	actions: {
		willTransition: function() {
			let model = get(this.controller, 'model');
			if (model && !get(model, 'id')) {
				model.unloadRecord();
			}
		},
	},
});