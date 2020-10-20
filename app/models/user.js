import Model, { attr, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @hasMany('post') posts;

  @attr('string') name;
  @attr('string') email;
}
