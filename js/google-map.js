//    google map start
    (function($) {
        "use strict";

        google.maps.event.addDomListener(window, 'load', init);

        var map;

        function init() {
            var mapOptions = {
                center: new google.maps.LatLng(19.252366, 73.142591),
                zoom: 15,
                zoomControl: false,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.DEFAULT,
                },
                disableDoubleClickZoom: false,
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                },
                scaleControl: true,
                scrollwheel: false,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [ 
                    { featureType: "administrative", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 20 } ] },
                    { featureType: "road", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -100 }, { lightness: 40 } ] },
                    { featureType: "water", elementType: "all", stylers: [ { visibility: "on" }, { saturation: -10 }, { lightness: 30 } ] },
                    { featureType: "landscape.man_made", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 10 } ] },
                    { featureType: "landscape.natural", elementType: "all", stylers: [ { visibility: "simplified" }, { saturation: -60 }, { lightness: 60 } ] },
                    { featureType: "poi", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }, 
                    { featureType: "transit", elementType: "all", stylers: [ { visibility: "off" }, { saturation: -100 }, { lightness: 60 } ] }
                ]

            }

            var mapElement = document.getElementById('mapBox');
            var map = new google.maps.Map(mapElement, mapOptions);
            var locations = [
                ['', 19.252366, 73.142591]
            ]
			var pinColor = "FE7569";
			var pinImage = new google.maps.MarkerImage("favicon/googlemap-marker.gif",
			new google.maps.Size(32, 32),
			new google.maps.Point(0,0),
			new google.maps.Point(10, 34));
			var marker = new google.maps.Marker({
			position: new google.maps.LatLng(19.252366, 73.142591),
			title: 'Aarushee',
			map: map,
			draggable: false,
			icon: pinImage
		});
        }    
    })(jQuery);
//    google map end