<template>
    <textarea class="deleteConfig" cols="40" rows="12" readonly v-model="object" />
    <i class="icon bi-trash-fill" @click="del()" />
</template>

<script>
    import { configsManager } from '@/managers/configs_manager';
    import { useConfigsStore } from '@/stores/configs_store';

    export default {
        async beforeMount() {
            this.id = useConfigsStore().getId();
            const json = await configsManager.get(this.id).then(response => {
                return response;
            });
            delete json.id;
            this.object = JSON.stringify(json, null, '\t');
        },
        data() {
            return {
                object: '',
                id: ''
            }
        },
        methods: {
            async del() {
                try {
                    const json = JSON.parse(this.object);
                    json.id = this.id;
                    await configsManager.delete(this.id);
                    this.$toast.success('Configuration deleted', this.$toast.settings);
                } catch (err) {
                    this.$toast.error(err.response.data, this.$toast.settings);
                }
            }
        }
    }
</script>

<style scoped>
    .deleteConfig {
        border: 3px solid rgb(0, 0, 0);
        border-radius: 12px;
        padding: 10px;
        resize: none;
        outline: none;
    }

    .icon {
        color: rgb(244, 84, 84);
    }
</style>