document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('[aria-controls^="faq-"]');
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        const content = document.getElementById(button.getAttribute('aria-controls'));
        content.classList.toggle('hidden');
        const svgIcon = button.querySelector('svg');
        svgIcon.classList.toggle('rotate-180');
      });
    });
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar mais lógica, como limpar o formulário após o envio
    this.reset();
  });
  