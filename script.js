// script.js
document.getElementById('code-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const code = document.getElementById('code').value;
  
    // Le code secret à trouver
    const secretCode = "LABOARMECAYO"; // Changez ce code selon vos préférences
  
    // Vérification du code
    if (code.toUpperCase() === secretCode) {
      document.getElementById('puzzle').style.display = 'none';
      document.getElementById('message').style.display = 'block';
    } else {
      alert("Le code est incorrect. Essayez à nouveau !");
    }
  });
  