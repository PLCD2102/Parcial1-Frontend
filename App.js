fetch('http://54.89.215.36:5000/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
  if (data.message) {
    alert('Usuario registrado exitosamente');
  } else {
    alert('Error al registrar usuario: ' + data.error);
  }
})
.catch((error) => {
  console.error('Error:', error);
});
