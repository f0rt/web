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
});