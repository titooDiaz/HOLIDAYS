function mostrarActividadActual() {
    const ahora = new Date();
    const horaActual = ahora.getHours().toString().padStart(2, '0') + ":" +
                    ahora.getMinutes().toString().padStart(2, '0');

    let mensaje = "Ahora es un buen momento para relajarte o revisar tu horario.";
    for (let actividad of actividades) {
    if (horaActual >= actividad.horaInicio && horaActual < actividad.horaFin) {
        mensaje = actividad.mensaje;
        break;
    }
    }

    document.getElementById("mensaje").innerText = mensaje;
    document.getElementById("modal").style.display = "block";
}

window.onload = mostrarActividadActual;

// Cierre del modal
document.querySelector(".close").onclick = () => {
    document.getElementById("modal").style.display = "none";
};
window.onclick = (e) => {
    if (e.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
    }
};