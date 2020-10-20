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

  @action
  setSelection(selected) {
    this.set('selectedOption', selected)
    console.log(this.selectedOption)
  }

  @action
  submitOption(){
    // code to save or sendAction
    //let selectedOption = this.selectedOption
    //this.sendAction('submit', selectedOption)
   }
}
