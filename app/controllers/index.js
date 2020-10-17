import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  deletePost(post) {
    let confirmed =  window.confirm('Are you sure you want to delete this post?');
    if(confirmed){
      post.destroyRecord();
    }
  }
}
