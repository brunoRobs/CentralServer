import api from './api';
import settings from '../settings.json';

class ConfigsAPI {
    async create(object) {
        const response = api.post(settings.api.configs.create, object).then(response => {
            return response;
        });
        return response;
    }

    async get(id) {
        const response = api.get(settings.api.configs.get.replace('id', id)).then(response => {
            return response;
        });
        return response;
    }

    async update(id, object) {
        const response = api.put(settings.api.configs.update.replace('id', id), object).then(response => {
            return response;
        });
        return response;
    }

    async delete(id) {
        const response = api.delete(settings.api.configs.delete.replace('id', id)).then(response => {
            return response;
        });
        return response;
    }

    async getAll() {
        const response = api.get(settings.api.configs.getAll).then(response => {
            return response;
        });
        return response;
    }
}

export const configsAPI = new ConfigsAPI();