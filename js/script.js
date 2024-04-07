document.addEventListener('DOMContentLoaded', function() {
    
    new Splide(".splide-header",{
            type       : 'loop',
            pagination : true,
            arrows     : false,
            height     : '30vh',
            autoWidth  : false,
            autoHeight : true,
            autoplay   : true,
        } ).mount();


    var splideElements = document.querySelectorAll('.splide-rooms');
        splideElements.forEach(function(splideElement) {
            new Splide(splideElement,{
                type       : 'loop',
                pagination : true,
                arrows     : true,
                height     : '30vh',
                autoWidth  : false,
                autoHeight : true,
                autoplay   : false,
            } ).mount();
    });

    let map;

    async function initMap() {
        var customMapStyles =[
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#202c3e"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "gamma": 0.01
                    },
                    {
                        "lightness": 20
                    },
                    {
                        "weight": "1.39"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "weight": "0.96"
                    },
                    {
                        "saturation": "9"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 30
                    },
                    {
                        "saturation": "9"
                    },
                    {
                        "color": "#29446b"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": 20
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    },
                    {
                        "saturation": -20
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 10
                    },
                    {
                        "saturation": -30
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#193a55"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": 25
                    },
                    {
                        "lightness": 25
                    },
                    {
                        "weight": "0.01"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": -20
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


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    // tablinks = document.getElementsByClassName("tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //     tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    // evt.currentTarget.className += " active";
}