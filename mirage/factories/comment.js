import { Factory } from 'ember-cli-mirage';
import faker from 'faker'

export default Factory.extend({
  title(i) {
    return `Comment ${i+1}`;
  },
  body() {
    return faker.lorem.paragraph();
  },
});
