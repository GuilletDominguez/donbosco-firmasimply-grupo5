const hostName = 'http://143.198.170.155';

async function login(token, data = {}) {
  // con los datos como raw json
  data = {
    email: 'john@doe.com',
    password: 'password',
    _token: token
  }

  return await apiPostCall(hostName + '/api/login',token,data);
};

async function listadoAsistencias(token) {
  console.log(token);
  return await apiGetCall(hostName + '/api/listadoFirmas',token);
};

async function registrarAsistencia(token, data = {}) {
  return await apiPostCall(hostName + '/api/firmar',token,data);
};

async function listadoTareas(token) {
  return await apiGetCall(hostName + '/api/listadoTareas',token);
};

async function crearTarea(token, data = {}) {
  // los datos en x-form-www-encoded
  const sendData = new URLSearchParams();
  sendData.append('titulo', 'john@doe.com');
  sendData.append('descripcion', 'password');
  sendData.append('estado', 1);
  sendData.append('user_id', 1);
  sendData.append('categoria_id', 1);
  sendData.append('_token', token);

  return await apiPostCall(hostName + '/api/crearTarea',token,sendData);
};

async function completarTarea(tarea, token, data = {}) {
  return await apiPutCall(hostName + '/api/marcarTarea/' + tarea, token, data);
};

async function borrarTarea(tarea, token, data = {}) {
  return await apiDeleteCall(hostName + '/api/borrarTarea/' + tarea,token,data);
};

async function listadoPildoras(token, data = 0) {
  return await apiGetCall(hostName + '/api/listadoPildoras',token);
};

async function crearPildora(token, data = {}) {
  return await apiPostCall(hostName + '/api/crearPildora',token,data);
};

async function borrarPildora(pildora, token, data = {}) {
  return await apiDeleteCall(hostName + '/api/borrarPildora/' + pildora,token,data);
};

async function actualizarPildora(pildora, token, data = {}) {
  return await apiPutCall(hostName + '/api/marcarPildora/' + pildora,token,data);
};

// Bloque de funciones de llamadas por métodos

const apiGetCall = async (url, token = '') => {
    return simpleFetch('GET', url, token);
};

const apiPostCall = async (url, token, data = {}) => {
  return simpleFetch('POST', url, token, data);
};

const apiPutCall = async (url, token, data = {}) => {
  return simpleFetch('PUT', url, token, data);
};

const apiDeleteCall = (url, token) => {
  return simpleFetch('DELETE', url, token);
};

const simpleFetch = async (method, url, token, data = null) => {
  let obj = { method: method, headers: {  Authorization: `Bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' } };
  if (data !== null) {
    obj.body =  data ;
  };
  console.log(obj);
  const response = await fetch(url, obj);
  const res = response.json();

  return res;
}

// Exportación de las funciones

export {
  listadoAsistencias,
  registrarAsistencia,
  listadoTareas,
  crearTarea,
  completarTarea,
  borrarTarea,
  listadoPildoras,
  crearPildora,
  borrarPildora,
  actualizarPildora,
  login
}