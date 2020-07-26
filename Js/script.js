$(function() {
    let buscar = document.getElementById('buscar');

    buscar.addEventListener('click', function() {
        if (buscar.value == "nombre") {
            document.getElementById("nombre").style.display = "inherit";
            document.getElementById("precio").style.display = "none";
            document.getElementById("fecha").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("servicios").style.display = "none";
            document.getElementById("capacidad").style.display = "none";
        }
        if (buscar.value == "precio") {
            document.getElementById("precio").style.display = "inherit";
            document.getElementById("nombre").style.display = "none";
            document.getElementById("fecha").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("servicios").style.display = "none";
            document.getElementById("capacidad").style.display = "none";
        }
        if (buscar.value == "fechas") {
            document.getElementById("fecha").style.display = "inherit";
            document.getElementById("precio").style.display = "none";
            document.getElementById("nombre").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("servicios").style.display = "none";
            document.getElementById("capacidad").style.display = "none";
        }
        if (buscar.value == "ubicacion") {
            document.getElementById("ubicacion").style.display = "inherit";
            document.getElementById("fecha").style.display = "none";
            document.getElementById("precio").style.display = "none";
            document.getElementById("nombre").style.display = "none";
            document.getElementById("servicios").style.display = "none";
            document.getElementById("capacidad").style.display = "none";
        }
        if (buscar.value == "servicios") {
            document.getElementById("servicios").style.display = "inherit";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("fecha").style.display = "none";
            document.getElementById("precio").style.display = "none";
            document.getElementById("nombre").style.display = "none";
            document.getElementById("capacidad").style.display = "none";
        }
        if (buscar.value == "capacidad") {
            document.getElementById("capacidad").style.display = "inherit";
            document.getElementById("servicios").style.display = "none";
            document.getElementById("ubicacion").style.display = "none";
            document.getElementById("fecha").style.display = "none";
            document.getElementById("precio").style.display = "none";
            document.getElementById("nombre").style.display = "none";
        }
    });

    let latitud = document.getElementById('latitud');
    let longitud = document.getElementById('longitud');

    var map = L.map('map').setView([parseFloat(latitud.value), parseFloat(longitud.value)], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .openPopup();

});