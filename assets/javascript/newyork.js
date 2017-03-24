// var userInput = $("#userInput").val();
// var numRecords = $("#numRecords").val();
// var startYear = $("#startYear").val();
// var stopYear = $("#stopYear").val();

$("#start").on("click", function(event) { 
    event.preventDefault();
    var userInput = $("#userInput").val();
    var numRecords = $("#numRecords").val();
    var startYear = $("#startYear").val();
    var stopYear = $("#stopYear").val();
    console.log(userInput)
    console.log(numRecords)
    console.log(startYear)
    console.log(stopYear)

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "7700f817c7cd4e78be4d5c94dadbf8c0",
      'q': userInput,
      'begin_date': startYear + "0101",
      'end_date': stopYear + "1231"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    for(i = 0; i < numRecords; i++) {
    console.log(i);
    console.log("title " + result.response.docs[i].headline.main);
    console.log("byline " + result.response.docs[i].byline.original);
    console.log("section " + result.response.docs[i].section_name);
    console.log("date " + result.response.docs[i].pub_date);
    console.log("url " + result.response.docs[i].web_url);
    $("#results").append(
        "<p>title " + result.response.docs[i].headline.main + "</p>" +
        "<p>byline " + result.response.docs[i].byline.original + "</p>" +
        "<p>section " + result.response.docs[i].section_name + "</p>" +
        "<p>date " + result.response.docs[i].pub_date + "</p>" +
        "<p>url " + result.response.docs[i].web_url + "</p><br><br>");
    }
    }).fail(function(err) {
      throw err;
    });
});
