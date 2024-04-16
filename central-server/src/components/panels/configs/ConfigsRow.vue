<template>
    <Modal :showModal="editModal" :component="editConfig" @close="edit(false)" />
    <Modal :showModal="deleteModal" :component="deleteConfig" @close="del(false)" />
    <td v-for="(data, index) in config" :key="`${data}:${index}`">
        {{ data }}
    </td>
    <td>
        <i title="Edit config" class="icon bi-pencil-fill" @click="edit(true)" />
    </td>
    <td>
        <i title="Delete config" class="icon bi-trash-fill" @click="del(true)" />
    </td>
</template>

<script>
    import Modal from '@/components/Modal.vue';
    import EditConfig from './EditConfig.vue';
    import DeleteConfig from './DeleteConfig.vue';
    import { useConfigsStore } from '@/stores/configs_store';

    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        components: { Modal },
        data() {
            return {
                editModal: false,
                deleteModal: false,
                editConfig: EditConfig,
                deleteConfig: DeleteConfig
            }
        },
        methods: {
            edit(state) {
                useConfigsStore().setId(this.$props.config.id);
                this.editModal = state;
            },
            del(state) {
                useConfigsStore().setId(this.$props.config.id);
                this.deleteModal = state;
            }
        }
    }
</script>

<style scoped>
    .icon {
        color: black;
    }

    .icon:hover {
        color: rgb(85, 169, 56);
    }

    .icon.bi-trash-fill:hover {
        color: rgb(244, 84, 84);
    }
</style>