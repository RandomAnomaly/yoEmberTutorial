import Ember from 'ember';

export default Ember.Controller.extend({
	
	message: '',
	emailAddress: '',
	
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidMessage: Ember.computed.gte('message.length',5),
	
	isValid: Ember.computed.and('isValidEmail','isValidMessage'),
	
	isDisabled: Ember.computed.not('isValid'),
	
	
	emailValidation: Ember.computed('isValidEmail', function(){
		return (this.get('isValidEmail') ? 'form-group has-success has-feedback' : 'form-group');
	}),
	
	messageValidation: Ember.computed('isValidMessage', function(){
		return (this.get('isValidMessage') ? 'form-group has-success has-feedback' : 'form-group');
	}),
	
	actions: {
		saveMessage(){
			const email = this.get('emailAddress');
			const messageText = this.get('message');

			const newMessage = this.store.createRecord('message', {
				email: email,
				message: messageText
			});

			newMessage.save().then((response) => {
				this.set('responseMessage', `Thank you! We saved your message with the following id: ${response.get('id')}`);
				this.set('emailAddress', '');
				this.set('message', '');

			});

		}
	}
	
	
});
