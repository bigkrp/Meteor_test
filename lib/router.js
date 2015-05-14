var emptyDb = true;
// if (emptyDb) {
// 	Router.route('enter');
// } else{
// 	Router.route('home');
// }

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {path: '/'});
});