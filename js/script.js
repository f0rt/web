document.addEventListener('DOMContentLoaded', function() {
    var splideElements = document.querySelectorAll('.splide');
    
    splideElements.forEach(function(splideElement) {
        new Splide(splideElement,{
                        type       : 'loop',
                        pagination : true,
                        arrows     : false,
                        height     : '30vh',
                        autoWidth  : false,
                        autoHeight : true,
                    } ).mount();
                }
    );
    let map;

    async function initMap() {
        var customMapStyles = [
            {
                "featureType": "all",
                "stylers": [
                    {
                        "saturation": 0
                    },
                    {
                        "hue": "#e7ecf0"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "saturation": -70
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  { "visibility": "on" }
                ]
            },
            {
                "featureType": "water",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -60
                    }
                ]
            }
        ];
        // Specify the location for the center of the map
        var myLocation = {lat: 42.638845, lng: 23.313585};
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            center: myLocation,
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            styles: customMapStyles,
        });

        var marker = new google.maps.Marker({
            map: map,
            position: myLocation,
            title: 'Апартамент',
            icon: {
                url: 'https://mydream.estate/img/icon/marker-home.svg',
                // Size of the image
                size: new google.maps.Size(40, 40),
                // Specifies the point within the icon image that is anchored to the marker's position
                anchor: new google.maps.Point(20, 40),
                // Specifies the image's origin point (top-left corner of the image portion to use)
                origin: new google.maps.Point(0, 0),
                // Scales the icon size
                scaledSize: new google.maps.Size(40, 40)
              },
        });
    }

    initMap();
});