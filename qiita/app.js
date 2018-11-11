$(function() {
  $('#btn').on('click', function(){
    ajaxRequest();
  });

  function ajaxRequest() {
    let tag = $('#name').val();
    let url = 'https://qiita.com/api/v2/tags/'+ tag +'/items?page=1&per_page=10';

    $.ajax({
      url: url,
      type: 'GET',
    })
    .done(function(data) {
      renderResult(data);
    })
    .fail(function(error) {

    })
  }

  function renderResult(data) {
    $('#result').text('');
    for (item of data) {
      let ancher = $('<a>').text(item.title).attr('href', item.url);
      $('#result').append(ancher).append($('<br>'));
    }
  }
});