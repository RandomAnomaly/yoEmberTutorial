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
	
	}
	
	
});
