if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js");
}

let principal = $('#principal')
let notice = $('#notice')

$(".btn-seguir").on("click", (e) => {
    e.preventDefault();
    console.log("Pulsaste un boton");
    principal.fadeOut("slow", function() {
        notice.slideDown(1000);
    });
});

$(".btn-regresar").on("click", (e) => {
    e.preventDefault();
    notice.fadeOut(() => {
        principal.slideDown(1000);
    });
})

$('.btn-follow').on('click', function(e) {
    e.preventDefault();
    console.log("push btn")
    principal.fadeOut(function() {
        notice.slideDown(1000)
    })

})

$('.btn-back').on('click', function(e) {
    e.preventDefault();

    notice.fadeOut(function() {
        principal.slideDown(1000);
    })
})