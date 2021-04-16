const db = require('../../data/dbConfig')
const {toBool} = require('../../data/helpers/helper')

function getTasks(task_id){
   if(task_id){
    return db('tasks')
    .where({task_id}).first()
      .then(task =>{
         return {...task, task_completed: toBool(task.task_completed)}})
   }
   else{
      return db('tasks as t')
      .join('projects as p','t.project_id','p.project_id')
      .select('t.*','p.project_name','p.project_description')
        .then(data => data.map(task => {
            return {...task, task_completed: toBool(task.task_completed)}
            })
        )
   }
 }

 async function addTask(newTask){
    const [task_id] = await db('tasks').insert(newTask);
    return getTasks(task_id)
 }

module.exports = {
    getTasks,
    addTask
}