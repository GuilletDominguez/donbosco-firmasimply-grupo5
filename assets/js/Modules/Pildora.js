import {
  listadoPildoras,
  crearPildora,
  borrarPildora,
  marcarPildora,
 } from './API/llamadasApi.js';

const TOKEN = JSON.parse(localStorage.getItem('token'));

export default class Pildora {

    /**
     * Devuelve el listado de Pildoras
     * @returns
     */
    static async getListadoPildoras() {
        return await listadoPildoras(TOKEN);
    }

    /**
     * Crear una Pildora nueva
     * @param {*} pildora
     * @returns
     */
    static async crearPildora(pildora) {
        return await crearPildora(TOKEN, pildora);
    }

    /**
     * Borrar una Pildora pasando su id
     * @param {*} pildoraId
     * @returns
     */
    static async borrarPildora(pildoraId) {
        return await borrarPildora(TOKEN, pildoraId);
    }

    /**
     * Marcar una Píldora como presentada o pendiente pasando
     * data = { estado: (1 para presentada, 0 para pendiente) }
     * tareaId = id de la Píldora
     * @param {*} data
     * @param {*} pildoraId
     * @returns
     */
    static async marcarPildora(data, pildoraId) {
        return await marcarPildora (TOKEN, data, pildoraId);
    }
}