import Model from '@ember-data/model';
import DS from 'ember-data';

//export default class TaskModel extends Model { }





export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  created:   DS.attr('string', {defaultValue: function(){
      return new Data();
  }})
});
