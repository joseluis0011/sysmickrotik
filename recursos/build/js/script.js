
function registro() {
    $("#registrar1").click(function () {

        var nombre = $("#nombre").val();
        var apellidoP = $("#apellidoP").val();
        var apellidoM = $("#apellidoM").val();
        var fecha = $("#single_cal1").val();
        var dni = $("#dni").val();
        var telefono = $("#telefono").val();
        var correo = $("#correo").val();
        var user = $("#user").val();
        var password = $("#pass").val();
        var rol = $("#rol").val();
        var depa = $("#depar").val();
        var sexo = $("#sexo").val();

        if ($("#nombre").val().length !== 0 && $("#rol").val().length !== 0 && $("#depar").val().length !== 0) {

            var opc = "1";
            $.ajax({
                url: "guardar",
                type: 'POST',

                data: {
                    'nombre': nombre,
                    'apellidoP': apellidoP,
                    'apellidoM': apellidoM,
                    'fecha': fecha,
                    'dni': dni,
                    'telefono': telefono,
                    'correo': correo,
                    'user': user,
                    'password': password,
                    'rol': rol,
                    'depa': depa,
                    'sexo': sexo,
                    'opc': opc


                },
                success: function (data) {


                }
            });

            swal(
                    'Registrado!',
                    'Los datos han sido registrado correctamente!',
                    'success'
                    );

        } else {
            swal(
                    'Oops...',
                    'Por favor rellene y seleccione todos los campos !',
                    'error'
                    );
            console.log(nombre, apellidoM, apellidoP, fecha, rol, depa);
        }
        $("#nombre").val("");
        $("#apellidoP").val("");
        $("#apellidoM").val("");
        $("#single_cal1").val("");
        $("#dni").val("");
        $("#telefono").val("");
        $("#correo").val("");
        $("#user").val("");
        $("#pass").val("");
        $("#rol").val("");
        $("#depar").val("");
        $("#sexo").val("");
    });



}





$(document).ready(function () {

    registro();


});

