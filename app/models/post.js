import Model, { attr, belongsTo, hasMany  } from '@ember-data/model';

export default class PostModel extends Model {
  @hasMany comments;

  @belongsTo('user') user;
  @attr ('string') image;
  @attr('string') title;
  @attr('string') body;
  @attr('number') views;
  @attr('string') description;
  @attr('string') date;
}
 