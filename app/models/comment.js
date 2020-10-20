import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @belongsTo post;

  @attr('string') name;
  @attr('string') body;
}
