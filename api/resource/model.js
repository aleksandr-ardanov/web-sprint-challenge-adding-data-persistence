// build your `Resource` model here
const db = require('../../data/dbConfig') //database access

function getResources(resource_id){    //search by id or all resources
   if(resource_id){
      return db('resources').where({resource_id}).first()
   }
   else{
      return db('resources')
   }
}

async function addResource(newRes){ // add a resource
   const [resource_id] = await db('resources').insert(newRes);
   return getResources(resource_id)
}

module.exports = {
    getResources,
    addResource
}