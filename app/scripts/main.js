var DataCollection = require('models/data-collection');
var PostData = require('models/post-delete-data');

$(document).ready(function(){
  $('#container').prepend(JST.application());

var allData = new DataCollection();


$('.js-submit-button').on('click', function(){
  allData.on('request', function(){
    $('.js-submit-button').text("Loading...");
  });


  console.log(allData.fetch());
  allData.on('add', MovieData);


  allData.on('sync',function(){
    setTimeout(function(){
      $('.js-submit-button').text("Submit");
    },2000);
  });
});

function MovieData(output){
  setTimeout(function(){
  var context = output.toJSON();
  //console.log(context)
  var li = $(JST.data(context));
  $('.data').append(li);
  },2000);
 }
});
