<script setup lang="ts">
import type { Product } from "../scripts/interfaces";

defineProps<{
    products: Product[];
}>();
</script>

<template>
    <div v-if="products.some((product) => product.stock === 0)" class="mb-4">
        <div
            v-for="product in products.filter((p) => p.stock === 0)"
            :key="product.id"
            class="alert alert-danger"
            role="alert"
        >
            Le produit "{{ product.name }}" est en rupture de stock !
        </div>
    </div>
</template>
