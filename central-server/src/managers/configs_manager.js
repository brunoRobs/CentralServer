import { configsAPI } from "@/api/configs_api.js";
import { useConfigsStore } from "@/stores/configs_store.js";

class ConfigsManager {
    async create(object) {
        const response = await configsAPI.create(object).then(async (response) => {
            await this.updateStore();
            return response.status === 200;
        });
        return response;
    }

    async get(id) {
        const response = await configsAPI.get(id).then(async (response) => {
            await this.updateStore();
            return response.data;
        });
        return response;
    }

    async update(id, object) {
        const response = await configsAPI.update(id, object).then(async (response) => {
            await this.updateStore();
            return response.status === 200;
        });
        return response;
    }

    async delete(id) {
        const response = await configsAPI.delete(id).then(async (response) => {
            await this.updateStore();
            return response.status === 200;
        });
        return response;
    }

    async updateStore() {
        await configsAPI.getAll().then(response => {
            useConfigsStore().updateStore(response.data);
        });
    }
}

export const configsManager = new ConfigsManager();