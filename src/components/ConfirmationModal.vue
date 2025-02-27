<script setup lang="ts">
defineProps<{
    show: boolean;
    title: string;
    message: string;
}>();

defineEmits<{
    (e: "confirm"): void;
    (e: "cancel"): void;
}>();
</script>

<template>
    <Teleport to="body">
        <div v-if="show" class="modal-overlay">
            <div class="modal d-block" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ title }}</h5>
                            <button
                                type="button"
                                class="btn-close"
                                @click="$emit('cancel')"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <p>{{ message }}</p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                @click="$emit('cancel')"
                            >
                                Annuler
                            </button>
                            <button
                                type="button"
                                class="btn btn-danger"
                                @click="$emit('confirm')"
                            >
                                Confirmer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>
