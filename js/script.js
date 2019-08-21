document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var tinggi = window.screen.availHeight - 128;
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        indicators : false,
        height : tinggi
    });
});
