<template>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <i class="icon bi-x-lg" @click="closeModal()" />
            <component :is="component" />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            component: {
                type: Object,
                required: true
            },
            showModal: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            }
        },
        emits: ['close']
    };
</script>

<style scoped>
    .modal {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-content {
        background-color: white;
        padding: 20px;
        display: flex;
        align-items: flex-end;
        border-radius: 5px;
        width: fit-content;
    }

    .icon {
        color: rgb(244, 84, 84);
    }
</style>