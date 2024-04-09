import { defineStore } from "pinia";
import { chunk } from "lodash";

export const useConfigsStore = defineStore("configsStore", {
    state: () => ({
        configs: []
    }),
    actions: {
        updateStore(configs) {
            this.$reset();
            this.configs = chunk(configs, 5);
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