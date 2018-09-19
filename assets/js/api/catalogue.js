import {BASE_URL, config} from './api.config';
import axios from '~/plugins/axios';

export default {
    catalogue(data) {
        return axios.get(`${BASE_URL}/projects/` + data.projectId + "/catalogue", config(data.token));
    },
    addRoom(data) {
        return axios.post(`${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + "/rooms", data.data, config(data.token));
    },
    deleteRoom(data) {
        return axios.delete(`${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + /rooms/ + data.roomId, config(data.token));
    },
    addCategory(data) {
        return axios.post(
            `${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + /rooms/ + data.roomId + "/categories",
            data.data,
            config(data.token)
        );
    },
    deleteCategory(data) {
        return axios.delete(
            `${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + /rooms/ + data.roomId + "/categories/" + data.categoryId,
            config(data.token)
        );
    },
    addItem(data) {
        return axios.post(
            `${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + /rooms/ + data.roomId + "/categories/" + data.categoryId + "/items",
            data.data,
            config(data.token)
        );
    },
    deleteItem(data) {
        return axios.delete(
            `${BASE_URL}/projects/` + data.projectId + "/catalogue/" + data.catalogueId + /rooms/ + data.roomId + "/categories/" + data.categoryId + "/items/" + data.itemId,
            config(data.token)
        );
    },

};
