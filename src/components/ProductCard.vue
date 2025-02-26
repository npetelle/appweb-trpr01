<script setup lang="ts">
import type { Product } from "../scripts/interfaces.ts";

defineProps<{
    product: Product;
}>();
</script>

<template>
    <div class="card h-100">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ product.team }}</h6>
            <p class="card-text">{{ product.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <span class="h5 mb-0">{{ product.price }}€</span>
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
