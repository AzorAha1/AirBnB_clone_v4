$(document).ready(function () {
  const amenities = [];
  $('li input[type=checkbox]').change(function () {
    var id = $(this).data('id');
    var name = $(this).data('name');
    if ($(this).is(':checked')) {
      amenities.push(name)
    } else {
      amenities = amenities.filter(function (params) {
        return params !== name;
        
      })
    }
    $('.amenities h4').text(amenities.join(', '))
  });
});
