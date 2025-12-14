const pagina = document.querySelectorAll(".pagina");
const btnSiguiente = document.getElementById("siguiente");
const btnAnterior = document.getElementById("anterior");

// Abrir modal usando data-modal
document.querySelectorAll("[data-modal]").forEach(boton => {
  boton.addEventListener("click", () => {
    const idModal = boton.dataset.modal;
    const modal = document.getElementById(idModal);
    modal.style.display = "flex";

    // Reset paginación
    paginas.forEach(p => p.classList.remove("activo"));
    paginas[0].classList.add("activo");
    paginaActual = 0;
  });
});

// Cerrar modal
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("cerrar")
    ) {
      modal.style.display = "none";
    }
  });
});

// Paginación
let paginaActual = 0;

function mostrarPagina(index) {
  pagina.forEach(p => p.classList.remove("activo"));
  pagina[index].classList.add("activo");

  btnAnterior.classList.toggle("oculto", index === 0);
  btnSiguiente.classList.toggle("oculto",
    index === pagina.length - 1
)};

btnSiguiente.addEventListener("click", () => {
  if (paginaActual < pagina.length - 1) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
});

btnAnterior.addEventListener("click", () => {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
});

const formulario = document.getElementById("formEnvioInfo");
formulario.addEventListener('submit',function(e){
e.preventDefault();
Swal.fire({
  title: "¡Gracias por tu mensaje!",
  text: "Me pondré en contacto muy pronto",
  icon: "success",
  
  // Cambiar colores de fondo y texto
  background: "#8ba3bdff", // color de fondo del popup
  color: "bisque",      // color del texto
  iconColor: "rgb(36, 76, 86)",  // color del icono
  
  // Personalizar botón
  confirmButtonText: "Aceptar",
  confirmButtonColor: "rgb(36, 76, 86)", // color de fondo del botón

    customClass: {
    title: 'sin-fondo-title'},
  
  // Opcional: draggable
  draggable: true
});
});


const ctx = document.getElementById('miGraficoBarras').getContext('2d');

const miGrafico = new Chart(ctx, {
    type: 'bar', // tipo de gráfico
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','SweetAlert', 'java','MySQL','MongoDB'], // etiquetas
        datasets: [{
            label: 'Nivel de dominio',
            data: [90, 85, 80, 60, 60, 70, 70, 70], // valores
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(192, 75, 186, 0.7)',
                'rgba(93, 117, 92, 0.7)',
                'rgba(196, 168, 155, 0.7)',
                'rgba(243, 148, 104, 0.7)',
                'rgba(69, 71, 71, 0.7)',
                'rgba(236, 156, 156, 0.7)',
            ],
        }]
    },
    options: {
        plugins:{
          legend:{
            labels:{
              color: 'bisque',
            }
          }
        },
        scales: {
            x: {
              ticks:{
                color:'bisque',
              }
            },
            y: {
              ticks:{
                color:'bisque',
              },
              beginAtZero: true // empezar el eje Y desde cero
            }
        }
    }
});
