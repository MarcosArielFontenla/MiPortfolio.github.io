$(document).ready(function() {
    $(".formulario-contacto").bind("submit", function() {
        $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            succes: function() {
                alert("Enviado correctamente!");
            },
            error: function() {
                alert("Error");
            }
        });
    });
});