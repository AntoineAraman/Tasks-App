import Controller from '@ember/controller';

export default class TasksNewController extends Controller {
    actions={
        AddTask: function(){
          var title =  this.get('title');
          var date = this.get('date');
          var description = this.get('description');


          //Create a new task
         var newTask = this.store.createRecord('task', {
              title: title,
              description: description,
              date: new Date(date)
          });
          //alert("Created task" {{title}});
          //Save to Database
          newTask.save();

          //Clear Form
          this.setProperties({title: '', description: '', date:''});    
        }
    } 
}
