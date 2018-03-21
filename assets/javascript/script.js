
$(document).ready(function () {
  var currentYear = (new Date).getFullYear();
   $("#endyear").attr("placeholder", "-= " + currentYear)


});






//Pull code (tested)

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// var topicString = "&q=Def Leppard"
// var beginDateString = "&begin_date=19830101"
// var endDateString = "&end_date=19871231"
// var apiKey = "?api-key=f557c6f93dfb40b7979b9966088ec396"
// var searchString = url + apiKey + topicString   + beginDateString + endDateString ;
// $.ajax({
//   url: searchString,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });