import Ember from 'ember';
import idGenerator from 'super-rentals/mixins/id-generator'
const {
	set,
	get,
	Controller,
} = Ember;
export default Controller.extend(idGenerator, {
	cities: ['Chicago', 'San Francisco', 'Seattle', 'Portland', 'Houston', 'Boston', 'Miami', 'New Orleans', 'Austin', 'Detroit'],
	selectedCity: '',
	propertyTypes: ['Condo', 'Townhouse', 'Apartment', 'Estate', 'Bunglow', 'Farmhouse', 'Other'],
	selectedPropertyType: '',
	displayErrors: false,
	resetForm() {
		set(this, 'model.title', '');
		set(this, 'model.owner', '');
		set(this, 'selectedCity', '');
		set(this, 'selectedPropertyType', '');
		set(this, 'model.bedrooms', '');
		set(this, 'model.description', '');
		set(this, 'displayErrors', false);
	},
	actions: {
		saveRental() {
			set(this, 'model.city', get(this, 'selectedCity'));
			set(this, 'model.propertyType', get(this, 'selectedPropertyType'));
			set(this, 'model.id', this.generateIdForRecord());
			if (get(this, 'model').validate()) {
				get(this, 'model').save().then(() => {
					this.transitionToRoute('rentals');
				});
			} else {
				set(this, 'displayErrors', true);
			}
		},
		discardRental() {
			this.resetForm();
		},
		onCitySelect(city) {
			set(this, 'selectedCity', city);
		},
		onPropertyTypeSelect(propertyType) {
			set(this, 'selectedPropertyType', propertyType);
		}
	},
});