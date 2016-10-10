$(document).ready(function() {
  $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=parseQuote',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'jsonp'
    });
      
  $(".nq-btn").click(function() {
      $.ajax({
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=parseQuote',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'jsonp'
    });
  });
});

function parseQuote(response)
{
    response = response[0];
    var node = document.getElementById('quote-id');
    node.insertAdjacentHTML('beforeend', (response).content);
    node.insertAdjacentHTML('beforeend', '<br>');
    node.insertAdjacentHTML('beforeend', '<br>');
    node.insertAdjacentHTML('beforeend', '<p>'+(response).title+'</p>');
    //$(".quote-1").text((response).content);
    //$(".quote-1").append('<br>');
    //$(".quote-1").append('<br>');
    //$(".quote-1").append((response).title);
}
