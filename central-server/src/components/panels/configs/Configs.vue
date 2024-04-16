<script setup>
    import { useConfigsStore } from '@/stores/configs_store';

    const store = useConfigsStore();
</script>

<template>
    <div class="configs">
        <Modal :showModal="createModal" :component="createConfig" @close="create(false)" />
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(key, index) in store.getKeys()" :key="`${key}:${index}`">
                        {{ key }}
                    </th>
                    <th></th>
                    <th><i title="Create config" class="icon bi-send-plus-fill" @click="create(true)" /></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(config, index) in store.getConfigs(1)" :key="`${config}:${index}`">
                    <ConfigsRow :config="config" />
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    import Modal from '@/components/Modal.vue';
    import CreateConfig from './CreateConfig.vue';
    import ConfigsRow from './ConfigsRow.vue';
    import { configsManager } from '@/managers/configs_manager';

    export default {
        async beforeMount() {
            try {
                await configsManager.updateStore();
            } catch (err) {
                this.$emit('error', err.response.data);
            }
        },
        components: { Modal },
        data() {
            return {
                createModal: false,
                createConfig: CreateConfig,
            }
        },
        methods: {
            create(state) {
                this.createModal = state;
            },
            errorHandler(err) {
                this.$emit('error', err.response.data);
            }
        },
        emits: ['error']
    }
</script>

<style scoped>
    .configs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .table {
        margin: 18px;
        border-radius: 12px;
        text-align: center;
        overflow: hidden;
    }

    .icon {
        color: black;
    }

    .icon:hover {
        color: rgb(85, 169, 56);
    }
</style>