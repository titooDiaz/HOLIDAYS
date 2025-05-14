const actividades = [
    { horaInicio: "05:30", horaFin: "06:00", mensaje: "Deberías estar despertándote y alistándote." },
    { horaInicio: "06:00", horaFin: "07:00", mensaje: "¡Es hora de hacer deporte! 🏃‍♂️" },
    { horaInicio: "07:00", horaFin: "08:00", mensaje: "Hora de descansar 😌" },
    { horaInicio: "08:00", horaFin: "09:30", mensaje: "Momento de estudiar Física 📘" },
    { horaInicio: "09:30", horaFin: "11:00", mensaje: "En este momento deberías estar viendo Cálculo 🧮" },
    { horaInicio: "11:00", horaFin: "12:30", mensaje: "Es turno de Matemáticas Discretas 📐" },
    { horaInicio: "12:30", horaFin: "13:00", mensaje: "¡Almuerzo rico! 🍽️" },
    { horaInicio: "13:00", horaFin: "14:00", mensaje: "Revisa lo que tengas atrasado 📚" },
    { horaInicio: "14:00", horaFin: "18:00", mensaje: "¡Es hora de programar! 👨‍💻" },
    { horaInicio: "18:30", horaFin: "19:30", mensaje: "Disfruta tu cita con Zharito ❤️" },
    { horaInicio: "19:30", horaFin: "20:00", mensaje: "Tómate un ratito para ti 🌱" },
    { horaInicio: "20:00", horaFin: "20:30", mensaje: "Despedida con Zharito 🫂" },
    { horaInicio: "20:30", horaFin: "21:00", mensaje: "Reflexiona y prepárate para dormir 🌙" }
];

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