$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/',
    function (data, textStatus, jqXHR) {
      if (textStatus === 'success') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }
  );
});
