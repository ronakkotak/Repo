import DS from 'ember-data';
export default DS.Model.extend({
	type: DS.attr('string', {
		defaultValue: 'user',
	}),
	name: DS.attr('string'),
	email: DS.attr('string'),
	password: DS.attr(),
});