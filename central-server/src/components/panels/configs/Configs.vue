<script setup>
    import { useConfigsStore } from '@/stores/configs_store';

    const store = useConfigsStore();
</script>

<template>
    <Modal :showModal="showModal" @close="showModal = false" :component="component" />
    <table>
        <thead>
            <tr>
                <th v-for="(key, index) in store.getKeys()" :key="`${key}:${index}`">
                    {{ key }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(config, index) in store.getConfigs(1)" :key="`${config}:${index}`">
                <ConfigsRow :config="config" />
            </tr>
        </tbody>
    </table>
</template>

<script>
    import ConfigsRow from './ConfigsRow.vue';
    import Modal from '../../Modal.vue';
    import Agents from '../Agents.vue';

    export default {
        components: { ConfigsRow, Modal },
        data() {
            return {
                showModal: false,
                component: Agents
            }
        }
    }
</script>