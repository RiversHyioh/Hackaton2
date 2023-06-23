var text = document.getElementById('animated-text'); // Obtener el elemento del texto

text.addEventListener('mouseenter', function() { // Evento al colocar el mouse sobre el texto
  text.classList.add('hovered'); // Agregar la clase 'hovered' al elemento
});

text.addEventListener('mouseleave', function() { // Evento al retirar el mouse del texto
  text.classList.remove('hovered'); // Remover la clase 'hovered' del elemento
});
