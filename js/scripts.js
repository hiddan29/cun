
$(document).ready(function () {
    // Oculta todos los sections excepto #home al inicio
    $("main section").hide();
    $("#home").show();

    // Navegación dinámica
    $("nav a").click(function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        $("main section").hide();
        $(target).fadeIn("fast");
    });

    // Estilo de botón al pasar mouse
    $("button").on("mouseenter", function () {
        $(this).css("background-color", "#ba68c8");
    }).on("mouseleave", function () {
        $(this).css("background-color", "");
    });
});

$('#appointmentForm').on('submit', function(e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const pet = $('#pet').val().trim();
    const date = $('#date').val();
    const phone = $('#phone').val().trim();
    const email = $('#email').val().trim();

    if (name && pet && date && phone && email) {
        $('#successDialog').dialog({
            modal: true,
            buttons: {
                Ok: function () {
                    $(this).dialog("close");
                }
            }
        });
        this.reset();
    } else {
        alert('Por favor, complete todos los campos del formulario.');
    }
});
