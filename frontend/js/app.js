// Cliente simple para demo (no seguro)
console.log('CyberSecure Pro - frontend loaded');

// Simple helper para mostrar resultados de búsqueda (se refleja la consulta en el backend sin sanitizar)
if(location.pathname.endsWith('/search.html') || location.pathname === '/search'){
  // nada aquí: el backend devuelve una página simple
}

// funcionalidad mínima añadida en páginas estáticas
document.addEventListener('submit', e=>{
  // dejar enviar normalmente para demostrar CSRF y falta de tokens
});