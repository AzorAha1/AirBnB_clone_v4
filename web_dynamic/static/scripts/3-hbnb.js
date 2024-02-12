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


// get the status of the API
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

// fetches data about places
$.post({
  url: 'http://0.0.0.0:5001/api/v1/places_search',
  data: JSON.stringify({}),
  headers: {
    'Content-Type': 'application/json'
  },
  success: (data) => {
    data.forEach((place) =>
      $('section.places').append(
            `<article>
        <div class="title_box">
        <h2>${place.name}</h2>
        <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
        <div class="max_guest">${place.max_guest} Guest${
                    place.max_guest !== 1 ? 's' : ''
                }</div>
        <div class="number_rooms">${place.number_rooms} Bedroom${
                    place.number_rooms !== 1 ? 's' : ''
                }</div>
        <div class="number_bathrooms">${place.number_bathrooms} Bathroom${
                    place.number_bathrooms !== 1 ? 's' : ''
                }</div>
        </div> 
        <div class="description">
        ${place.description}
        </div>
            </article>`
      )
    );
  },
  dataType: 'json'
});
