<script setup lang="ts">
defineProps<{
    modelValue: string;
}>();

defineEmits<{
    (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
    <div class="search-bar">
        <input
            type="text"
            class="form-control"
            placeholder="Rechercher un maillot..."
            :value="modelValue"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value,
                )
            "
        />
    </div>
</template>
