const newUser = (users = {}) => {
  let highest = 0;

  for (let key in users) {
    highest = highest > users[key].id ? highest : users[key].id;
  }

  return {
    id: highest + 1,
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    fecha_de_nacimiento: '',
    ciudad_de_nacimiento: '',
    estado_de_nacimiento: '',
    sexo: '',
  };
};

export default newUser;