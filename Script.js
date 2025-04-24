document.getElementById('contacto-form').addEventListener('submit', function() {
  setTimeout(() => {
    alert("¡Gracias por tu mensaje! Tu formulario ha sido enviado correctamente.");
  }, 500);
});

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

const contenedorNoticias = document.getElementById("lista-noticias");

noticias.forEach(noticia => {
  const item = document.createElement("li");
  item.innerHTML = `<strong>${noticia.titulo}</strong><br><small>${noticia.fecha}</small><p>${noticia.resumen}</p>`;
  contenedorNoticias.appendChild(item);
});