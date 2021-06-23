const listadoAsistencias = async (token, data = {}) => {
  return await apiGetCall('http://163.172.135.235:3000/api/v1/events',token,data);
};

const registrarAsistencia = (token, data = {}) => {
  return await apiPostCall('url al create',token,data);
};

const listadoTareas = (token, data = {}) => {
  return await apiGetCall('url al listado',token,data);
};

const crearTarea = (token, data = {}) => {
  return await apiPostCall('url al create',token,data);
};

const completarTarea = (token, data = {}) => {
  return await apiPutCall('url al update',token,data);
};

const borrarTarea = (token, data = {}) => {
  return await apiDeleteCall('url al delete',token,data);
};

const listadoPildoras = (token, data = {}) => {
  return await apiGetCall('url al listado',token,data);
};

const crearPildora = (token, data = {}) => {
  return await apiPostCall('url al create',token,data);
};

const borrarPildora = (token, data = {}) => {
  return await apiDeleteCall('url al delete',token,data);
};

const actualizarPildora = (token, data = {}) => {
  return await apiPutCall('url al update',token,data);
};

const apiGetCall = async (url, token, data = {}) => {
  let res;
  axios.get(url, {
    responseType: 'json',
    data
  }, {
    headers: {
        token: token
    }
  })
  .then(function(res) {
    if (res.status == 200) {
      res = res.data;
    }
  })
  .catch(function(err) {
    console.log(err);
  });

  return res;
};

const apiPostCall = async (url, token, data = {}) => {
  let res;
  axios.post(url, {
    responseType: 'json',
    data
  }, {
    headers: {
        token: token
    }
  })
  .then(function(res) {
    if (res.status == 201) {
      res = res.data;
    }
  })
  .catch(function(err) {
    console.log(err);
  });

  return res;
};

const apiPutCall = async (url, token, data = {}) => {
  let res;
  axios.put(url, {
    responseType: 'json',
    data
  }, {
    headers: {
        token: token
    }
  })
  .then(function(res) {
    if (res.status == 201) {
      res = res.data;
    }
  })
  .catch(function(err) {
    console.log(err);
  });

  return res;
};

const apiDeleteCall = (url, token, data = {}) => {
  let res;
  axios.delete(url, {
    responseType: 'json',
    data
  }, {
    headers: {
        token: token
    }
  })
  .then(function(res) {
    if (res.status == 200) {
      res = res.data;
    }
  })
  .catch(function(err) {
    console.log(err);
  });

  return res;
};

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