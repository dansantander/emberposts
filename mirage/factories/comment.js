import { Factory } from 'ember-cli-mirage';
import faker from 'faker'

export default Factory.extend({
  name() {
    return faker.name.firstName();
  },
  body() {
    return faker.lorem.paragraph();
  },
});
