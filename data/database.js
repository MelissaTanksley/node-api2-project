{
    title: "The post title" // String, required
    contents: "The post contents" // String, required
    //created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
    //updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  }

  {
    text: "The text of the comment" // String, required
    post_id: "The id of the associated post" // Integer, required, must match the id of a post entry in the database
    //created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
    //updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
  }

/////////////////
//const postRoutes = require("./postRoutes")


function getPostRoutes() {
    return users
  }
  
  function getPostRoutesById(id) {
    return postRoutes.find((u) => u.id === id);
  }
  
  function createPostRoutes(data) {
    const payload = {
      id: String(postRoutes.length + 1),
      ...data,
    };
    postRoutes.push(payload);
    return payload;
  }
  
  function updatePostRoutes(id, data) {
    const index = postRoutes.findIndex((u) => u.id === id);
    postRoutes[index] = {
      ...postRoutes[index],
      ...data,
    };
    return postRoutes[index];
  }
  
  function deletePostRoutes(id) {
    postRoutes = postRoutes.filter((u) => u.id !== id);
    if(postRoutes.find(u=> u.id === id)){
      return res.status(500).json()
    }
  }
  
  module.exports = {getPostRoutes, getPostRoutessById, createPostRoutes, updatePostRoutes, deletePostRoute}