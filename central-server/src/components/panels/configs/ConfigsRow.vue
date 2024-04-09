<template>
    <td v-for="(data, index) in config" :key="`${data}:${index}`">
        {{ data }}
    </td>
    <td>
        <i class="icon bi-pencil-fill" @click="edit()" />
    </td>
    <td>
        <i class="icon bi-trash-fill" @click="del()" />
    </td>
</template>

<script>
    export default {
        props: {
            config: {
                type: Object,
                required: true
            }
        },
        methods: {
            edit() {
                this.$emits('edit', this.$props.config.id)
            },
            del() {
                this.$emit('delete', this.$props.config.id)
            }
        },
        emits: ['edit', 'delete']
    }
</script>

<style scoped>
    .icon.bi-pencil-fill:hover {
        color: rgb(115, 220, 80);
    }

    .icon.bi-trash-fill:hover {
        color: rgb(220, 80, 80);
    }
</style>