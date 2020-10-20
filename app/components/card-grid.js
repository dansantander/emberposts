import Component from '@ember/component';
import { filter, filterBy } from '@ember/object/computed';

export default Component.extend({
  filter: filter('list', function(item){
    return item.date === this.date
  }),
  filterBy: filterBy('list', 'date', 'September'),
});