// Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos
document.addEventListener('DOMContentLoaded', function() {
const terms = document.querySelector('#terminos')
const checkTerms = document.querySelector('#defaultCheck1')
const termsLink = document.querySelector('#error')
const termsBtn = document.querySelector('#termsBtn')
const password = document.querySelector('#contraseña1')
const confirmPassword = document.querySelector('#contraseña2')


console.log(checkTerms)

password.addEventListener('input', function() {
  if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Las contraseñas no coinciden')
  } else {
      confirmPassword.setCustomValidity('')
  }
});

confirmPassword.addEventListener('input', function() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Las contraseñas no coinciden')
        
    } else {
        confirmPassword.setCustomValidity('')
    }
});

checkTerms.addEventListener('change', function() {
    if (checkTerms.checked) {
      termsLink.innerText = '';
      termsBtn.classList.remove('text-danger')
    }
    else {
      termsLink.innerText = 'Debe aceptar los términos y condiciones';
      termsBtn.classList.add('text-danger')
    }
});


// Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
var forms = document.querySelectorAll('.needs-validation')

// Bucle sobre ellos y evitar el envío
Array.prototype.slice.call(forms)
  .forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!validarContrasena(password, confirmPassword) || !form.checkValidity()){       
        event.preventDefault()
        event.stopPropagation()
      }

      if(!checkTerms.checked){
        console.log(termsLink)
        termsBtn.classList.add('text-danger')
        termsLink.innerText = `Debe aceptar los términos del servicio.`
      }

      form.classList.add('was-validated')
    }, false)
  })



  // funcion para validar contraseñas
  function validarContrasena(pwd1, pwd2) {
  
    // si no coinciden, se muestra un error en el customValidity
    if (pwd1.value != pwd2.value) {
      pwd2.setCustomValidity('Las contraseñas deben ser iguales');
      return false;
    }
    // si coinciden, se quita el error
    pwd2.setCustomValidity('');
    return true;
  }
});