var map;

function initMap() {
  var myLatLng = {
    lat: 33.748997,
    lng: -84.387985
  };

  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}



// Sticky menu background
window.addEventListener('scroll', function () {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
}); // Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});