const hostName = 'http://143.198.170.155';
// Login / Logout
async function login(data = {}) {
  return await apiCall('POST', hostName + '/api/login', null, data);
};

async function logout(token) {
  return await apiCall('POST', hostName + '/api/logout', token, null);
};

// Asistencias
async function listadoFirmas(token) {
  return await apiCall('GET', hostName + '/api/listadoFirmas', token, null);
};

async function firmar(token, data = {}) {
  return await apiCall('POST', hostName + '/api/firmar',token, data);
};

async function getNumFirmasHoy(token) {
  return await apiCall('POST', hostName + '/api/numeroFirmasHoy', token, null);
};

// Pildoras
async function listadoPildoras(token) {
  return await apiCall('GET', hostName + '/api/listadoPildoras', token, null);
};

async function crearPildora(token, data={}) {
  return await apiCall('POST', hostName + '/api/crearPildora', token, data);
};

async function marcarPildora(token, data, pildoraId) {
  return await apiCall('PUT', hostName + '/api/marcarPildora/' + pildoraId, token, data);
};

async function borrarPildora(token, pildoraId) {
  return await apiCall('DELETE', hostName + '/api/borrarPildora/' + pildoraId, token, null);
};

// Tareas
async function listadoTareas(token) {
  return await apiCall('GET', hostName + '/api/listadoTareas', token, null);
};

async function crearTarea(token, data={}) {
  return await apiCall('POST', hostName + '/api/crearTarea', token, data);
};

async function marcarTarea(token, data={}, tareaId) {
  return await apiCall('PUT', hostName + '/api/marcarTarea/' + tareaId, token, data);
};

async function borrarTarea(token, tareaId) {
  return await apiCall('DELETE', hostName + '/api/borrarTarea/' + tareaId, token, null);
};
// Categoria
async function listadoCategorias(token) {
  return await apiCall('GET', hostName + '/api/listadoCategorias', token, null);
};

const apiCall = async (method, url, token = null, data = null) => {
  let config = {
    method: method,
    url: url,
  }

  if (token !== null) {
    config['headers'] = {'Authorization': `Bearer ${token}`};
  }

  if (data !== null) {
    config['data'] = data;
  }

  const response = await axios(config);

  return response.data;
}

// Exportación de las funciones

export {
  login,
  logout,
  listadoFirmas,
  firmar,
  getNumFirmasHoy,
  listadoPildoras,
  crearPildora,
  marcarPildora,
  borrarPildora,
  listadoTareas,
  crearTarea,
  marcarTarea,
  borrarTarea,
  listadoCategorias,
}