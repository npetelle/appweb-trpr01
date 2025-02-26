<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { Product } from "../scripts/interfaces.ts";

const props = defineProps<{
    product: Product | null;
}>();

const emit = defineEmits<{
    (e: "submit", product: Product): void;
    (e: "cancel"): void;
}>();

const formData = ref<Product>({
    id: 0,
    name: "",
    team: "",
    price: 0,
    stock: 0,
    description: "",
});

onMounted(() => {
    if (props.product) {
        formData.value = { ...props.product };
    }
});

watch(
    () => props.product,
    (newProduct) => {
        if (newProduct) {
            formData.value = { ...newProduct };
        } else {
            formData.value = {
                id: 0,
                name: "",
                team: "",
                price: 0,
                stock: 0,
                description: "",
            };
        }
    },
    { immediate: true },
);

const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (formData.value.name && formData.value.team) {
        emit("submit", formData.value);
    }
};
</script>

<template>
    <div class="card mb-4">
        <div class="card-header">
            <h3>{{ product?.id ? "Modifier" : "Ajouter" }} un maillot</h3>
        </div>
        <div class="card-body">
            <form @submit="handleSubmit">
                <div class="mb-3">
                    <label for="name" class="form-label">Nom du maillot</label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="formData.name"
                        required
                    />
                </div>

                <div class="mb-3">
                    <label for="team" class="form-label">Équipe</label>
                    <input
                        type="text"
                        class="form-control"
                        id="team"
                        v-model="formData.team"
                        required
                    />
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Prix (€)</label>
                    <input
                        type="number"
                        class="form-control"
                        id="price"
                        v-model.number="formData.price"
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <div class="mb-3">
                    <label for="stock" class="form-label">Stock</label>
                    <input
                        type="number"
                        class="form-control"
                        id="stock"
                        v-model.number="formData.stock"
                        min="0"
                        required
                    />
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label"
                        >Description</label
                    >
                    <textarea
                        class="form-control"
                        id="description"
                        v-model="formData.description"
                        rows="3"
                    ></textarea>
                </div>

                <div class="d-flex gap-2">
                    <button type="submit" class="btn btn-primary">
                        {{ product?.id ? "Modifier" : "Ajouter" }}
                    </button>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        @click="$emit('cancel')"
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
