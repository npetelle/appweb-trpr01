<script setup lang="ts">
import { ref } from "vue";
import type { Product } from "./scripts/interfaces.ts";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ProductList from "./components/ProductList.vue";
import ProductDetails from "./components/ProductDetails.vue";
import ProductForm from "./components/ProductForm.vue";
import SearchBar from "./components/SearchBar.vue";

const products = ref<Product[]>([
    {
        id: 1,
        name: "Maillot All Blacks Domicile",
        team: "Nouvelle-Zélande",
        price: 89.99,
        stock: 15,
        description: "Maillot officiel des All Blacks - Domicile 2024",
    },
    {
        id: 2,
        name: "Maillot XV de France Domicile",
        team: "France",
        price: 84.99,
        stock: 8,
        description: "Maillot officiel du XV de France - Domicile 2024",
    },
    {
        id: 3,
        name: "Maillot Springboks Extérieur",
        team: "Afrique du Sud",
        price: 79.99,
        stock: 0,
        description: "Maillot officiel des Springboks - Extérieur 2024",
    },
]);

const showForm = ref(false);
const editingProduct = ref<Product | null>(null);
const searchQuery = ref("");
const selectedProduct = ref<Product | null>(null);

const filterProducts = () => {
    return products.value.filter(
        (product: Product) =>
            product.name
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()) ||
            product.team
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()),
    );
};

const addProduct = (product: Product) => {
    const maxId = Math.max(...products.value.map((p: Product) => p.id), 0);
    product.id = maxId + 1;
    products.value.push({ ...product });
};

const editProduct = (product: Product) => {
    const index = products.value.findIndex((p: Product) => p.id === product.id);
    if (index !== -1) {
        products.value[index] = product;
    }
    editingProduct.value = null;
    showForm.value = false;
};

const deleteProduct = (id: number) => {
    const index = products.value.findIndex((p: Product) => p.id === id);
    if (index !== -1) {
        products.value.splice(index, 1);
    }
};

const duplicateProduct = (product: Product) => {
    const duplicatedProduct = {
        ...product,
        id: 0,
        name: `${product.name}`,
    };
    editingProduct.value = { ...duplicatedProduct };
    showForm.value = true;
};

const handleSubmit = (product: Product) => {
    if (product.id !== 0) {
        editProduct(product);
    } else {
        addProduct(product);
    }
    editingProduct.value = null;
    showForm.value = false;
};
</script>

<template>
    <div class="app-container">
        <Header />

        <main class="container py-4">
            <div class="row mb-4">
                <div class="col">
                    <button
                        class="btn btn-primary"
                        @click="
                            showForm = true;
                            editingProduct = null;
                        "
                    >
                        Ajouter un maillot
                    </button>
                </div>
                <div class="col">
                    <SearchBar v-model="searchQuery" />
                </div>
            </div>

            <ProductForm
                v-if="showForm"
                :product="editingProduct"
                @submit="handleSubmit"
                @cancel="showForm = false"
            />

            <ProductDetails
                v-if="selectedProduct"
                :product="selectedProduct"
                @close="selectedProduct = null"
            />

            <ProductList
                :products="filterProducts()"
                @edit="
                    (product) => {
                        editingProduct = product;
                        showForm = true;
                    }
                "
                @duplicate="duplicateProduct"
                @delete="deleteProduct"
                @selectProduct="selectedProduct = $event"
            />
        </main>

        <Footer />
    </div>
</template>

<style scoped>
.app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
</style>
