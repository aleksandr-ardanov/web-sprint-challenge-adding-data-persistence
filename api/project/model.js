const db = require('../../data/dbConfig')
const {toBool} = require('../../data/helpers/helper')

function getProjects(project_id){
   if(project_id){
    return db('projects')
    .where({project_id}).first()
    .then(prj => {
       return {...prj, project_completed: toBool(prj.project_completed)}
    })
   }
   else{
      return db('projects')
      .then(data => data.map(prj => {
           return {...prj, project_completed: toBool(prj.project_completed)}
        })
      )
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