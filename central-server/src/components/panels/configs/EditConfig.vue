<template>
    <textarea class="editConfig" :class="isCorrect ? 'rightFormat' : 'wrongFormat'" cols="40" rows="12"
        v-model="object" />
    <i class="icon bi-pencil-fill" :class="isCorrect ? 'rightFormat' : 'wrongFormat'" @click="edit()" />
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
        computed: {
            isCorrect() {
                try {
                    if (this.object != '') {
                        const json = JSON.parse(this.object)
                        this.object = JSON.stringify(json, null, '\t');
                        return true;
                    }
                    return false;
                } catch {
                    return false;
                }
            }
        },
        methods: {
            async edit() {
                try {
                    const json = JSON.parse(this.object);
                    json.id = this.id;
                    await configsManager.update(this.id, json);
                    this.$toast.success('Configuration updated', this.$toast.settings);
                } catch (err) {
                    this.$toast.error(err.response.data, this.$toast.settings);
                }
            }
        }
    }
</script>

<style scoped>
    .editConfig {
        border: 3px solid;
        border-radius: 12px;
        padding: 10px;
        resize: none;
        outline: none;
    }

    .rightFormat {
        border-color: rgb(85, 169, 56);
    }

    .wrongFormat {
        border-color: rgb(244, 84, 84);
    }

    .icon.rightFormat {
        color: rgb(85, 169, 56);
    }

    .icon.wrongFormat {
        color: rgb(244, 84, 84);
        cursor: default;
        pointer-events: none;
    }
</style>