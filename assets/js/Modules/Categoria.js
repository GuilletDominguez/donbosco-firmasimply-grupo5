import {
  listadoCategorias
 } from './API/llamadasApi.js';

const TOKEN = JSON.parse(localStorage.getItem('token'));

export default class Categoria {

    /**
     *  Devuelve el listado de categorias
     * @returns
     */
    static async getListadoCategorias() {
        return await listadoCategorias(TOKEN);
    }
}