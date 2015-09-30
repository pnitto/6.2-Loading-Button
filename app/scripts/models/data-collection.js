var Data = require('models/data');

var DataCollection = Backbone.Collection.extend({
  model: Data,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/things",
});


module.exports = DataCollection;
