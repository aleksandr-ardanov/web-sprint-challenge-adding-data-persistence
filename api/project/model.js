const db = require('../../data/dbConfig')

function getProjects(project_id){
   if(project_id){
    return db('projects')
    .where({project_id})
      .then(data => {
         data.forEach(project => {
           if (project.project_completed === 1){
              project.project_completed = true
           }
           else if (project.project_completed === 0){
            project.project_completed = false
           }
         })
         return data[0]
      })
   }
   else{
      return db('projects')
      .then(data => {
         data.forEach(project => {
           if (project.project_completed === 1){
              project.project_completed = true
           }
           else if (project.project_completed === 0){
            project.project_completed = false
           }
         })
         return data
      })
   }
 }


 async function addProject(newProj){
    const [project_id] = await db('projects').insert(newProj);
    return getProjects(project_id)
    
 }


module.exports = {
    getProjects,
    addProject
}