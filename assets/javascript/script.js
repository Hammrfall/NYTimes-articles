$(document).ready(function () {
  var currentYear = (new Date).getFullYear();
  $("#endyear").attr("placeholder", "<= " + currentYear)


});

function getArticles() {

  if ($("#topic").val() !== "") {
    var baseurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var topicString = "&q=" +  $("#topic").val();
    var apiKey = "?api-key=f557c6f93dfb40b7979b9966088ec396"
    var beginDateString = ""
    var endDateString = ""

    var checkBegin = $("#startyear").val();
    if (checkBegin.length == 4 && parseInt(checkBegin) ){
      beginDateString = "&begin_date=" + checkBegin + "0101"
    }

    var checkEnd = $("#endyear").val();
    if (checkEnd.length == 4 && parseInt(checkEnd)){
      endDateString = "&end_date=" + checkEnd + "1231";
    }
    var searchString = baseurl + apiKey + topicString + beginDateString + endDateString;
    console.log(searchString);
    $.ajax({
      url: searchString,
      method: 'GET',

    }).done(function (result) {
      console.log(result);

    }).fail(function (err) {
      throw err;
    });
  }
}


$("#pullarticlesbutton").click ("click",function(event){
  getArticles()
});
