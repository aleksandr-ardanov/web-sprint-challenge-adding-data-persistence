const db = require('../../data/dbConfig')

function getTasks(task_id){
   if(task_id){
    return db('tasks')
    .where({task_id})
      .then(data => {
         data.forEach(task => {
           if (task.task_completed === 1){
              task.task_completed = true
           }
           else if (task.task_completed === 0){
            task.task_completed = false
           }
         })
         return data[0]
      })
   }
   else{
      return db('tasks as t')
      .join('projects as p','t.project_id','p.project_id')
      .select('t.*','p.project_name','p.project_description')
      .then(data => {
         data.forEach(task => {
           if (task.task_completed === 1){
              task.task_completed = true
           }
           else if (task.task_completed === 0){
            task.task_completed = false
           }
         })
         return data
      })
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