import Ember from 'ember';
const {
	Service,
	set,
	get,
} = Ember;
export default Service.extend({
	authenticatedUser: false,
	init(){
		let userId = Cookies.get('userId');
		if(userId){
			set(this, 'authenticatedUser', true);
		}
	},
	login(userName , password) {
		//from backend cookie based send to mirage
		return new Promise((resolve , reject)=>{
			Ember.$.ajax({
				method: "POST",
				url: 'api/sessions',
				
				data: JSON.stringify({
					"data": {
						"userName": userName,
						"password": password,
					}
				})
			}).then((data) => {
				if(data.data && data.data.type === "user"){
					resolve();
					set(this, 'authenticatedUser', true);
					Cookies.set('userId',data.data.id);
				}
				else{
					reject('Username and password did not match');
				}
			}, (fail) => {
				reject('Username and password did not match' ,fail);
			});


		});
		
	},
	logout() {
		set(this, 'authenticatedUser', false);
		Cookies.remove('userId')
	},
	isAuthenticatedUser() {
		return get(this,'authenticatedUser');
	}
});