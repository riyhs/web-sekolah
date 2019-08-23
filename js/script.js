document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var tinggi = document.documentElement.clientHeight - 64;
    var elems = document.querySelectorAll('.slider')[0];
    var instances = M.Slider.init(elems,{
        indicators : false,
        height : tinggi
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider')[1];
    var instances = M.Slider.init(elems,{
        indicators : false,
        height : 300,
        duration : 400,
        interval : 2500
    });
});

