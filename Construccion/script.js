document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío por defecto

  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;

  // Validar correo vacío
  if (correo.trim() === "") {
    alert("El correo no puede estar vacío");
    return;
  }

  // Validar formato correo (regex básica)
  let correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    alert("Ingrese un correo válido (ejemplo@correo.com)");
    return;
  }

  // Validar longitud de contraseña
  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres");
    return;
  }

  // Si pasa todas las validaciones
  alert("Registro exitoso 🎉");
});
