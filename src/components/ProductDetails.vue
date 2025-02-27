<script setup lang="ts">
import type { Product } from "../scripts/interfaces.ts";

defineProps<{
    product: Product;
}>();

defineEmits<{
    (e: "close"): void;
}>();
</script>

<template>
    <div class="card mb-4">
        <div
            class="card-header d-flex justify-content-between align-items-center"
        >
            <h3 class="mb-0">Détails du produit</h3>
            <button class="btn btn-close" @click="$emit('close')"></button>
        </div>
        <div class="card-body">
            <h4>{{ product.name }}</h4>
            <h5 class="text-muted">{{ product.team }}</h5>
            <p class="mt-3">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center mt-4">
                <div class="h4 mb-0">Prix: {{ product.price }}€</div>
                <span
                    class="badge"
                    :class="{
                        'bg-success': product.stock > 10,
                        'bg-warning': product.stock <= 10 && product.stock > 0,
                        'bg-danger': product.stock === 0,
                    }"
                >
                    Stock: {{ product.stock }}
                </span>
            </div>
        </div>
    </div>
</template>
