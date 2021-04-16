const db = require('../../data/dbConfig')    //access to database
const {toBool} = require('../../data/helpers/helper')    // translates integer to boolean

function getProjects(project_id){    // get all projects or project by id depends on id(if it entered or not)
   if(project_id){
    return db('projects')
    .where({project_id}).first()    //this helps receive an object instead of array with 1 object
    .then(prj => {
       return {...prj, project_completed: toBool(prj.project_completed)}  //returns an object with true or false instead of 1 or 0 
    })
   }
   else{
      return db('projects')
      .then(data => data.map(prj => {
           return {...prj, project_completed: toBool(prj.project_completed)} //returns objects with true or false instead of 1 or 0 
        })
      )
   }
 }

 async function addProject(newProj){
    const [project_id] = await db('projects').insert(newProj);    // adds a new project to projects and receives an id
    return getProjects(project_id) //gets projects by id
 }

module.exports = {
    getProjects,
    addProject
}