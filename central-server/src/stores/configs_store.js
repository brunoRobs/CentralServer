import { defineStore } from "pinia";
import { chunk } from "lodash";

export const useConfigsStore = defineStore("configsStore", {
    state: () => ({
        configs: [],
        id: ''
    }),
    actions: {
        updateStore(configs) {
            this.$reset();
            this.configs = chunk(configs, 5);
        },
        setId(id) {
            this.id = id;
        },
        getId() {
            return this.id;
        },
        getConfigs(page) {
            return this.configs[page - 1];
        },
        getKeys() {
            if (this.configs.length) return Object.keys(this.configs[0][0]);
        },
        getPages() {
            return this.configs.length;
        }
    }
});