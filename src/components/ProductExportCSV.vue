<script setup lang="ts">
import type { Product } from "../scripts/interfaces";

const props = defineProps<{
    products: Product[];
}>();

// https://www.clearpeople.com/blog/export-data-to-csv-with-typescript-without-format-issues
const exportCSVData = () => {
    const headers = ["Nom", "Équipe", "Prix", "Stock", "Description"];

    const headerRow = headers.join(",");

    const productRows = props.products.map((product) =>
        [
            product.name,
            product.team,
            product.price,
            product.stock,
            product.description,
        ].join(","),
    );

    const csvContent = [headerRow, ...productRows].join("\n");

    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8",
    });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "inventaire_maillots.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<template>
    <div>
        <button class="btn btn-primary" @click="exportCSVData">
            Exporter l'inventaire
        </button>
    </div>
</template>
