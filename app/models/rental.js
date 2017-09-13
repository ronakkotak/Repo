import DS from 'ember-data';
import modelValidator from 'super-rentals/mixins/model-validator';
export default DS.Model.extend(modelValidator, {
	title: DS.attr(),
	owner: DS.attr(),
	city: DS.attr(),
	propertyType: DS.attr(),
	image: DS.attr(),
	bedrooms: DS.attr(),
	description: DS.attr(),
	validations: {
        title: {
            presence: {
                message: 'Please enter a title.',
            },
            length: {
                maximum: {
                    value: 100,
                    message: 'Title should be less than 100 characters.',
                },
            },
        },
        owner: {
            presence: {
                message: 'Please enter a owner name.',
            },
            length: {
                maximum: {
                    value: 100,
                    message: 'Owner name should be less than 100 characters.',
                },
            },
        },
        city: {
            presence: {
                message: 'Please select a city.',
            },
        },
        propertyType: {
            presence: {
                message: 'Please select a property type.',
            },
        },
    },
});