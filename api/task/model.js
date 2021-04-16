const db = require('../../data/dbConfig')
const {toBool} = require('../../data/helpers/helper')    //translates integer to boolean

function getTasks(task_id){      //search by id or all tasks
   if(task_id){
    return db('tasks')
    .where({task_id}).first()
      .then(task =>{
         return {...task, task_completed: toBool(task.task_completed)}})
   }
   else{
      return db('tasks as t')       // aliases help us type less
      .join('projects as p','t.project_id','p.project_id')    //connects second table with foreign key
      .select('t.*','p.project_name','p.project_description')  //we can choose tables we want to display
        .then(data => data.map(task => {
            return {...task, task_completed: toBool(task.task_completed)}
            })
        )
   }
 }

 async function addTask(newTask){
    const [task_id] = await db('tasks').insert(newTask);    //adds a new task to all tasks
    return getTasks(task_id)
 }

module.exports = {
    getTasks,
    addTask
}