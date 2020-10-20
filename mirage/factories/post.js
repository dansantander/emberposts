import { Factory } from 'ember-cli-mirage';
import faker from 'faker'

export default Factory.extend({
  image() {
    return faker.random.image();
  },
  title() {
    return faker.random.words();
  },
  body() {
    return faker.lorem.paragraph(50);
  },
  description() {
    return faker.lorem.sentence(10);
  },
  date() {
    return faker.date.month();
  },
  views() {
    let amount =Math.floor(Math.random() * 4000);
    return amount;
  },
  afterCreate(post, server) {
    let amount =Math.floor(Math.random() * 6); 
    server.createList('comment', amount  ,{ post });
  }
});
