// Adicionando evento de hover ao footer
document.getElementById('footer').addEventListener('mouseover', () => {
    document.getElementById('footer').style.bottom = '0';
  });
  
  document.getElementById('footer').addEventListener('mouseout', () => {
    document.getElementById('footer').style.bottom = '-50px';
  });
  // Adicionando evento de hover ao footer
  document.getElementById('menu').addEventListener('mouseover', () => {
    document.getElementById('menu').style.top = '0'; // Faz o menu aparecer
  });
  
  document.getElementById('menu').addEventListener('mouseout', () => {
    document.getElementById('menu').style.top = '-50px'; // Esconde o menu acima
  });