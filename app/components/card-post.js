import Component from '@ember/component';

export default Component.extend({
  actions: {
    deletePost(post) {
      let confirmed =  window.confirm('Are you sure you want to delete this post?');
      if(confirmed){
        post.destroyRecord();
      }
    }
  }
});