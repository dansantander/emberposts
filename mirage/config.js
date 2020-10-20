export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing


    this.get('/posts');
/*     this.get('/posts/:id/comments', (schema, request) => {
      let post = schema.posts.find(request.params.id);
    
      return post.comments;
    }); */
    this.post('/posts');
    this.get('/posts/:id');
    this.patch('/posts/:id'); // or this.patch
    this.del('/posts/:id');
}
