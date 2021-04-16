// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources(resource_id){
   if(resource_id){
      return db('resources').where({resource_id}).first()
   }
   else{
      return db('resources')
   }
}

async function addResource(newRes){
   const [resource_id] = await db('resources').insert(newRes);
   return getResources(resource_id)
}

module.exports = {
    getResources,
    addResource
}