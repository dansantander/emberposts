import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @belongsTo('user') user;

  @attr('string') title;
  @attr('string') body;
}
 