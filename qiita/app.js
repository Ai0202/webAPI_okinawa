$(function() {
  $('#btn').on('click', function(){
    ajaxRequest();
  });

  function ajaxRequest() {
    console.log(1);
    $.ajax({

    })
    .done(function(data) {

    })
    .fail(function(error) {

    })
  }
});