import Ember from 'ember';
const {
	Controller,
	inject: {
		service
	},
	get,
	computed,
} = Ember
export default Controller.extend({
	session: service(),
	toast: service(),
	defferedTransition: service(),
	toastrOptions: function() {
		let toastrOptions = {
			closeButton: true,
			debug: false,
			newestOnTop: true,
			progressBar: true,
			positionClass: 'toast-bottom-right',
			preventDuplicates: true,
			onclick: null,
			showDuration: '300',
			hideDuration: '1000',
			timeOut: '4000',
			extendedTimeOut: '1000',
			showEasing: 'swing',
			hideEasing: 'linear',
			showMethod: 'fadeIn',
			hideMethod: 'fadeOut',
		};
		return toastrOptions;
	},
	isAuthenticated: computed('session.authenticatedUser', function() {
		return get(this, 'session').isAuthenticatedUser();
	}),
	actions: {
		onLoginClick() {
			let toast = get(this,'toast');
			let userName = get(this, 'userName');
			let password = get(this, 'password');
			get(this, 'session').login(userName, password).then(() => {
				let attemptedTransition = get(this, 'defferedTransition').getTranstion();
				if (attemptedTransition) {
					attemptedTransition.retry();
				} else {
					this.transitionToRoute('rentals')
				}
			}).catch(() => {
				toast.error("UserName or password incorrect,Please try again, hint(username='admin'and password='admin')", '', get(this,'toastrOptions'));
			});
			
		},
		onLogoutClick() {
			get(this, 'session').logout();
		}
	}
});