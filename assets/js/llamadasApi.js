//  NO TOCAR NADA DEL ARCHIVO

// Bloque de funciones "públicas"
const hostName = 'http://143.198.170.155'

async function listadoAsistencias(token) {
  return await apiGetCall(hostName+'/listadoAsistencias',token);
};

async function registrarAsistencia(token, data = {}) {
  return await apiPostCall(hostName+'/registrarAsistencia' ,token,data);
};

async function listadoTareas(token) {
  return await apiGetCall(hostName+'/listadoTareas' ,token);
};

async function crearTarea(token, data = {}) {
  return await apiPostCall(hostName+'/crearTarea' ,token,data);
};

async function completarTarea(token, data = {}) {
  return await apiPutCall(hostName+'/completarTarea' ,token,data);
};

async function borrarTarea(token, data = {}) {
  return await apiDeleteCall(hostName+'/borrarTarea' ,token,data);
};

async function listadoPildoras(token, data = 0) {
  return await apiGetCall(hostName+'/listadoPildoras' ,token);
};

async function crearPildora(token, data = {}) {
  return await apiPostCall(hostName+'/crearPildora' ,token,data);
};

async function borrarPildora(token, data = {}) {
  return await apiDeleteCall(hostName+'/borrarPildora' ,token,data);
};

async function actualizarPildora(token, data = {}) {
  return await apiPutCall(hostName+'/actualizarPildora',token,data);
};

// Bloque de funciones de llamadas por métodos

const apiGetCall = async (url, token = '') => {
    return simpleFetch('GET', url, token);
};

const apiPostCall = async (url, token, data = {}) => {
  return dataFetch('POST', url, token, data);
};

const apiPutCall = async (url, token, data = {}) => {
  return simpleFetch('PUT', url, token, data);
};

const apiDeleteCall = (url, token) => {
  return simpleFetch('DELETE', url, token);
};

const simpleFetch = async (method, url, token, data = null) => {
  let obj = { method: method, headers: { Authorization: `Bearer ${token}`,  'Content-Type': 'application/json' } };
  if (data !== null) {
    obj.body = JSON.stringify(data);
  };
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
  actualizarPildora
}