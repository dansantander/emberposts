import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditController extends Controller {
  @action
  editPost(event) {
    event.preventDefault();

    let post = this.model;
    post.save().then(()=>{
      this.transitionToRoute('post', post.id)
    })
  }
}
