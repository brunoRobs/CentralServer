<template>
    <textarea class="createConfig" :class="isCorrect ? 'rightFormat' : 'wrongFormat'" cols="40" rows="12"
        v-model="object" />
    <i class="icon bi-send-plus-fill" :class="isCorrect ? 'rightFormat' : 'wrongFormat'" @click="create()" />
</template>

<script>
    import { configsManager } from '@/managers/configs_manager';

    export default {
        data() {
            return {
                object: ''
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
            async create() {
                try {
                    const json = JSON.parse(this.object);
                    await configsManager.create(json);
                } catch (err) {
                    this.$toast.error(err.response.data, this.$toast.settings);
                }
            }
        }
    }
</script>

<style scoped>
    .createConfig {
        border: 3px solid;
        border-radius: 12px;
        padding: 10px;
        resize: none;
        outline: none;
    }

    .rightFormat {
        border-color: rgb(115, 220, 80);
    }

    .wrongFormat {
        border-color: rgb(220, 80, 80);
    }

    .icon.rightFormat {
        color: rgb(115, 220, 80);
    }

    .icon.wrongFormat {
        color: rgb(220, 80, 80);
        cursor: default;
        pointer-events: none;
    }
</style>