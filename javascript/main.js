

let celdas = document.querySelectorAll("td");

celdas.forEach(function (td) {
    td.addEventListener('click', function () {
        console.log(this);

    })


});


let links = document.querySelectorAll(".close");

links.forEach(function (link) {

    link.addEventListener('click', function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove('animate__fadeInDown');
        /* content.classList.remove('animated');*/

        content.classList.add('animate__fadeOutUp');
        /* content.classList.add('animated');*/


        setTimeout(function () {
            location.href = "/boletines";
        }, 600);

        return false;

    });

});