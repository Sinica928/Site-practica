function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
      sec.classList.add('hidden');
    });
  
    const activeSection = document.getElementById(`${section}-section`);
    if (activeSection) {
      activeSection.classList.add('active');
      activeSection.classList.remove('hidden');
    }
  }
  
  function login(event) {
    event.preventDefault();
    alert("Autentificare reușită!");
    showSection('home');
  }
  
  function register(event) {
    event.preventDefault();
    alert("Cont creat cu succes!");
    showSection('login');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
  });
  
