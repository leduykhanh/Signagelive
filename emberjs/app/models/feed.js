import DS from 'ember-data';
import ValidationMixin from 'ember-validate-js/mixins/validation';
 
export default DS.Model.extend(ValidationMixin, {
  url: DS.attr('string'),
  email: DS.attr('string'),
  constraints: Ember.computed(function() {
    return {
      url: {
        url: true,
        length: {minimum: 5}
      },
      email: {
        email: true,
        length: {minimum: 5}
      }
    };
  })
});