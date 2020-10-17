export default function(server) {
/*   server.db.loadData({
    post: [
      {title: '1st Post' , body:'This is the first post'},
      {title: '2nd Post' , body:'This is the second post'},
      {title: '3rd Post' , body:'This is the third post'},
      {title: '4th Post' , body:'This is the fourth post'},
      {title: '5th Post' , body:'This is the fifth post'}
    ]
  }) */
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('post', 10);
}
