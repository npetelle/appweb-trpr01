<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import type { Product } from "../scripts/interfaces";
import { validateProduct, type ValidationErrors } from "../scripts/validation";

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

const errors = ref<ValidationErrors>({});
const touched = ref<Record<string, boolean>>({});

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
        errors.value = {};
        touched.value = {};
    },
    { immediate: true },
);

const handleSubmit = (event: Event) => {
    event.preventDefault();

    Object.keys(formData.value).forEach((field) => {
        touched.value[field] = true;
    });

    const validationErrors = validateProduct(formData.value);
    errors.value = validationErrors;

    if (Object.keys(validationErrors).length === 0) {
        emit("submit", formData.value);
    }
};

const handleBlur = (field: string) => {
    touched.value[field] = true;
    errors.value = validateProduct(formData.value);
};
</script>

<template>
    <div class="card mb-4">
        <div class="card-header">
            <h3>{{ product?.id ? "Modifier" : "Ajouter" }} un maillot</h3>
        </div>
        <div class="card-body">
            <form @submit="handleSubmit" novalidate>
                <div class="mb-3">
                    <label for="name" class="form-label">Nom du maillot</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{
                            'is-invalid': touched.name && errors.name,
                            'is-valid': touched.name && !errors.name,
                        }"
                        id="name"
                        v-model="formData.name"
                        @blur="handleBlur('name')"
                        required
                    />
                    <div class="invalid-feedback" v-if="errors.name">
                        {{ errors.name[0] }}
                    </div>
                </div>

                <div class="mb-3">
                    <label for="team" class="form-label">Équipe</label>
                    <input
                        type="text"
                        class="form-control"
                        :class="{
                            'is-invalid': touched.team && errors.team,
                            'is-valid': touched.team && !errors.team,
                        }"
                        id="team"
                        v-model="formData.team"
                        @blur="handleBlur('team')"
                        required
                    />
                    <div class="invalid-feedback" v-if="errors.team">
                        {{ errors.team[0] }}
                    </div>
                </div>

                <div class="mb-3">
                    <label for="price" class="form-label">Prix $</label>
                    <input
                        type="number"
                        class="form-control"
                        :class="{
                            'is-invalid': touched.price && errors.price,
                            'is-valid': touched.price && !errors.price,
                        }"
                        id="price"
                        v-model.number="formData.price"
                        @blur="handleBlur('price')"
                        min="0"
                        step="0.01"
                        required
                    />
                    <div class="invalid-feedback" v-if="errors.price">
                        {{ errors.price[0] }}
                    </div>
                </div>

                <div class="mb-3">
                    <label for="stock" class="form-label">Stock</label>
                    <input
                        type="number"
                        class="form-control"
                        :class="{
                            'is-invalid': touched.stock && errors.stock,
                            'is-valid': touched.stock && !errors.stock,
                        }"
                        id="stock"
                        v-model.number="formData.stock"
                        @blur="handleBlur('stock')"
                        min="0"
                        required
                    />
                    <div class="invalid-feedback" v-if="errors.stock">
                        {{ errors.stock[0] }}
                    </div>
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
