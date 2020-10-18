import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @belongsTo post;

  @attr('string') title;
  @attr('string') body;
}
