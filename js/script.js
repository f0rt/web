document.addEventListener('DOMContentLoaded', function() {


   // Get all buttons with the class 'cta-button'
    var buttons = document.getElementsByClassName('cta-button');

    // Convert HTMLCollection to an array to use forEach (or use a for loop)
    Array.from(buttons).forEach(function(button) {
        // Attach click event listener to each button
        if (button.id != "map_button"){
            button.addEventListener('click', function() {
                if (/Mobi|Android/i.test(navigator.userAgent)) {
                    // Mobile device detected, initiate a call
                    window.location.href = 'tel:0898 271 010'; // Replace +1234567890 with your phone number
                } else {
                    // Scroll to the element with ID 'dd'
                    document.getElementById('dd').scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                
                // Track the event with Google Analytics
                gtag('event', 'cta', {'event_category': 'CTA', 'event_label': 'CTA'});
            });
        }
    });

    document.getElementById('map_button').addEventListener('click', function() {
        document.getElementById('map').scrollIntoView({
            behavior: 'smooth'
        });
        gtag('event', 'view_map', {'event_category': 'Map', 'event_label': 'View-Map'});
    });

      

    new Splide(".splide-header",{
            type       : 'loop',
            pagination : true,
            arrows     : false,
            height     : '30vh',
            autoWidth  : false,
            autoHeight : true,
            autoplay   : true,
        } ).mount();


        new Splide(".splide-rooms",{
            type       : 'loop',
            pagination : true,
            arrows     : true,
            height     : '30vh',
            autoWidth  : false,
            autoHeight : true,
            autoplay   : false,
        } ).mount();

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
                url: '/img/icon/marker-home.svg',
                // Size of the image
                size: new google.maps.Size(60, 60),
                // Specifies the point within the icon image that is anchored to the marker's position
                anchor: new google.maps.Point(30, 60),
                // Specifies the image's origin point (top-left corner of the image portion to use)
                origin: new google.maps.Point(0, 0),
                // Scales the icon size
                scaledSize: new google.maps.Size(60, 60)
              },
        });
    }

    initMap();
});

let splides = {};
splides["Tab1"] = true;
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
    let tab = document.getElementById(tabName)
    tab.style.display = "flex";

    if(!splides[tabName]){
        splides[tabName] = true;
        new Splide(tab.getElementsByClassName("splide-rooms")[0],{
            type       : 'loop',
            pagination : true,
            arrows     : true,
            height     : '30vh',
            autoWidth  : false,
            autoHeight : true,
            autoplay   : false,
        } ).mount();
    }
    // evt.currentTarget.className += " active";

    gtag('event', 'room_tab', {'event_category': 'Room-Interaction', 'event_label': 'Send-Message'});
}