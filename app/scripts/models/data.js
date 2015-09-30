
var Data = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    name: "Tony Stark",
    movie: "Avengers",
  },
  initialize: function(){
    console.log("This model has been initialized");
    this.on('change', function(){
      console.log("Attributes on this model have changed.");
    });
}

});


module.exports = Data;
