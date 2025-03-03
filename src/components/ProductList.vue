<script setup lang="ts">
import type { Product } from "../scripts/interfaces.ts";

defineProps<{
    products: Product[];
}>();

defineEmits<{
    (e: "edit", product: Product): void;
    (e: "duplicate", product: Product): void;
    (e: "delete", product: Product): void;
    (e: "selectProduct", product: Product): void;
}>();
</script>

<template>
    <div class="product-list">
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Équipe</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="product in products"
                        :key="product.id"
                        @click="$emit('selectProduct', product)"
                        style="cursor: pointer"
                    >
                        <td>{{ product.name }}</td>
                        <td>{{ product.team }}</td>
                        <td>{{ product.price }}$</td>
                        <td>
                            <span
                                class="badge"
                                :class="{
                                    'bg-success': product.stock > 10,
                                    'bg-warning':
                                        product.stock <= 10 &&
                                        product.stock > 0,
                                    'bg-danger': product.stock === 0,
                                }"
                            >
                                {{ product.stock }}
                            </span>
                        </td>
                        <td>
                            <div class="btn-group">
                                <button
                                    class="btn btn-sm btn-info"
                                    @click.stop="$emit('edit', product)"
                                >
                                    Modifier
                                </button>
                                <button
                                    class="btn btn-sm btn-success"
                                    @click.stop="$emit('duplicate', product)"
                                >
                                    Dupliquer
                                </button>
                                <button
                                    class="btn btn-sm btn-danger"
                                    @click.stop="$emit('delete', product)"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
