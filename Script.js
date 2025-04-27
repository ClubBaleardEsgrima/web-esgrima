// Mensaje de agradecimiento al enviar el formulario
document.getElementById('contacto-form').addEventListener('submit', function(event) {
  setTimeout(() => {
    alert("¡Gracias por tu mensaje! Tu formulario ha sido enviado correctamente.");
  }, 500);
});

// Noticias del club
const noticias = [
  {
    titulo: "¡Victoria en el torneo insular!",
    fecha: "20 de abril de 2025",
    resumen: "Nuestros tiradores logran el primer puesto en las tres categorías."
  },
  {
    titulo: "Clase abierta de esgrima",
    fecha: "10 de mayo de 2025",
    resumen: "Invitamos a todos los curiosos a probar la esgrima en nuestras instalaciones."
  }
];

// Insertar noticias dinámicamente
const contenedorNoticias = document.getElementById("lista-noticias");

noticias.forEach(({ titulo, fecha, resumen }) => {
  const noticia = document.createElement("div");
  noticia.classList.add("noticia");
  noticia.innerHTML = `
    <h3>${titulo}</h3>
    <p><small>${fecha}</small></p>
    <p>${resumen}</p>
  `;
  contenedorNoticias.appendChild(noticia);
});
