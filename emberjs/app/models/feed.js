import DS from 'ember-data';
import ValidationMixin from 'ember-validate-js/mixins/validation';
 
export default DS.Model.extend(ValidationMixin, {
  url: attr('string'),
  constraints: Ember.computed(function() {
    return {
      url: {
        email: true,
        length: {minimum: 5}
      }
    };
  })
});