//Creamos la función para el primer boton
function login() {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    if (user === "carlos34" && password == "12345") {
        Swal.fire({
            title: "Aprobado",
            icon: "success",
            text: "Su pago se ha efectuado exitosamente, Gracias por su compra",
            color: '#090908',
            background: '#f4f60d',
            width: '80vh',
            confirmButtonColor: '#090908',
            confirmButtonText: 'Inicio',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            };
        });

    } else {
        Swal.fire({
            title: "Error",
            icon: "error",
            text: "Usuario o contraseña incorrecto",
            color: '#090908',
            background: '#f4f60d',
            width: '80vh',
            confirmButtonColor: '#090908',
            confirmButtonText: 'Aceptar',
        });
    };
};

//Creamos la segunda función para el otro boton
function pay() {
    const nameCard = document.getElementById("nameCard").value;
    const numberCard = document.getElementById("numberCard").value;
    const expiration = document.getElementById("expiration").value;
    const cvv = document.getElementById("cvv").value;
    if (nameCard === "platino" && numberCard == "12345" && expiration === "102025" && cvv == "123") {
        Swal.fire({
            title: "Aprobado",
            icon: "success",
            text: "Su pago se ha efectuado exitosamente, Gracias por su compra",
            color: '#3A207E ',
            background: '#f4f60d',
            width: '80vh',
            confirmButtonColor: '#090908',
            confirmButtonText: 'Inicio',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'index.html';
            };
        });
    } else {
        Swal.fire({
            title: "Error",
            icon: "error",
            text: "Validación incorrecta, por favor verifique",
            color: '#3A207E ',
            background: '#f4f60d',
            width: '80vh',
            confirmButtonColor: '#090908',
            confirmButtonText: 'Aceptar',
        });
    };
};