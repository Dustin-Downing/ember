import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  message: '',
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isMessageValid: Ember.computed.gte('yourProperty', 5),
  isFormValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
  isDisabled: Ember.computed.not('isFormValid'),
  actions: {
    saveMessage() {
      this.set('responseMessage', `Thank you for your message! I'll be sending my responds to ${this.get('emailAddress')} ASAP`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
