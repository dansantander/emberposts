import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    return this.store.findAll('post'); /* this is an array aware of operations like destroy record */
  }
}
/* 
entries: this.store.filter("month", function(month) {
  return month.get("date") === post.date; }) */