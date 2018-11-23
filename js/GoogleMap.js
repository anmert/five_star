$(document).ready(function () {
  /* Google Map */
  function mapInitialize() {
    //var mapStyle =  [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#f7d991"},{"visibility":"on"}]}];
    
    var points = $('.map_control_items').find('.map_control_item:not(".active")');

    var active_id = $('.map_control_items .active').index();

    var yourLatitude = parseFloat($('.map_control_items .active').attr('data-lat'));
    var yourLongitude = parseFloat($('.map_control_items .active').attr('data-lon'));
    var myOptions = {
      zoom: 14,
      center: new google.maps.LatLng(yourLatitude,yourLongitude),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      streetViewControl: false,
      scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById('google-map'), myOptions);
    var image = new google.maps.MarkerImage('img/map-location.png');
    var myLatLng = new google.maps.LatLng(yourLatitude,yourLongitude);

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image,
      url: active_id
    });
    marker.setMap(map);

    $(points).each(function() {
      var yourLatitude2 = parseFloat($(this).attr('data-lat'));
      var yourLongitude2 = parseFloat($(this).attr('data-lon'));
      var point_id = $(this).index();
      var image2 = new google.maps.MarkerImage('img/map-location.png');
      var myLatLng2 = new google.maps.LatLng(yourLatitude2,yourLongitude2);
      var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        icon: image2,
        url: point_id
      });
      marker2.setMap(map);
      google.maps.event.addListener(marker2, 'click', function () {
        $('.map_control_items .map_control_item').removeClass('active');
        $('.map_control_items .map_control_item').eq(marker2.url).addClass('active');
        mapInitialize();
      });
    });
  }

  if( $('#google-map').length > 0 ) {
    google.maps.event.addDomListener(window, 'load', mapInitialize);
  }

  $('.map_control_item').click(function(e) {
    e.preventDefault();
    $('.map_control_items .map_control_item').removeClass('active');
    var num = $(this).index();
    $('.map_control_items .map_control_item').eq(num).addClass('active');
    mapInitialize();
  });

});