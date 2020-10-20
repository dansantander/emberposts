import Controller from '@ember/controller';
import { action } from '@ember/object'
import faker from 'faker'

export default class CreateController extends Controller {
  @action
  createPost(event) { /* event is always the last argument on the action */
    event.preventDefault();
    //step 1: read the inputs
    console.log(this.title, this.body)
    //step 2: save the post

    let post = this.store.createRecord('post', {
      image: faker.random.image(),
      title: this.title,
      body: this.body,
      description: this.description
    });
    //remember: the controller also has access to the store
    //the first argument is the model name (like saying new instance of the post model)
    //the second argument is the data
    //and now we save the record to the server and redirect
    post.save().then(()=> {
      //this.transitionToRoute('index');
      this.transitionToRoute('post', post.id);
    })
  }
}
