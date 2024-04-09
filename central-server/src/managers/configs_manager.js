import { useConfigsStore } from "@/stores/configs_store.js";
import { configsAPI } from "@/api/configs_api.js";

const store = useConfigsStore();

class ConfigsManager {
    async create(object) {
        const response = await configsAPI.create(object).then(async (response) => {
            await this.updateStore().then(() => {
                return response;
            });
        });
        return response;
    }

    async get(id) {
        const response = await configsAPI.get(id).then(async (response) => {
            await this.updateStore().then(() => {
                return response;
            });
        });
        return response;
    }

    async update(id, object) {
        const response = await configsAPI.update(id, object).then(async (response) => {
            await this.updateStore().then(() => {
                return response;
            });
        });
        return response;
    }

    async delete(id) {
        const response = await configsAPI.delete(id).then(async (response) => {
            await this.updateStore().then(() => {
                return response;
            });
        });
        return response;
    }

    async updateStore() {
        await configsAPI.getAll().then(response => {
            store.updateStore(response);
        });
    }
}

export const configsManager = new ConfigsManager();