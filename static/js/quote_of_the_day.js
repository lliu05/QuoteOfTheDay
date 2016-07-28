$(document).ready(function() {
  $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'jsonp'
    });
      
  $(".nq-btn").click(function() {
      $.ajax({
      url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'jsonp'
    });
  });
});

function parseQuote(response)
{
    $(".quote-1").text((response).quoteText);
    $(".quote-1").append('<br>');
    $(".quote-1").append('<br>');
    $(".quote-1").append((response).quoteAuthor);
};
