// build your `Resource` model here
const db = require('../../data/dbConfig')

 function getResources(){
    return db('resources')
 }

 async function addResource(newRes){
    const [resource_id] = await db('resources').insert(newRes);
    return getResources().where({resource_id}).first()
 }


module.exports = {
    getResources,
    addResource
}