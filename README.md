# Boutique de Maillots de Rugby

## Description
À faire...

## URLs
[Repository GitHub](https://github.com/npetelle/appweb-trpr01)

[GitHub Page](https://npetelle.github.io/appweb-trpr01)

## Utilisation de l'IA
J'ai utilisé Le Chat de Mistral AI afin de générer ma liste de produits de base.
Voici le prompt:
```
voici une lite de produits typescrpt :
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


voici l'interface Product:
export interface Product {
  id: number;
  name: string;
  team: string;
  price: number;
  stock: number;
  description: string;
}

peuple products avec plus de maillots de rugby. comme tu peux le voire je veux des maillots internationnaux, donc pas de clubs
```
Voici l'output de Le Chat :
```
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
    {
        id: 4,
        name: "Maillot Wallabies Domicile",
        team: "Australie",
        price: 82.99,
        stock: 12,
        description: "Maillot officiel des Wallabies - Domicile 2024",
    },
    {
        id: 5,
        name: "Maillot Pumas Extérieur",
        team: "Argentine",
        price: 77.99,
        stock: 5,
        description: "Maillot officiel des Pumas - Extérieur 2024",
    },
    {
        id: 6,
        name: "Maillot Écosse Domicile",
        team: "Écosse",
        price: 81.99,
        stock: 9,
        description: "Maillot officiel de l'Écosse - Domicile 2024",
    },
    {
        id: 7,
        name: "Maillot Irlande Extérieur",
        team: "Irlande",
        price: 85.99,
        stock: 10,
        description: "Maillot officiel de l'Irlande - Extérieur 2024",
    },
    {
        id: 8,
        name: "Maillot Pays de Galles Domicile",
        team: "Pays de Galles",
        price: 83.99,
        stock: 7,
        description: "Maillot officiel du Pays de Galles - Domicile 2024",
    },
    {
        id: 9,
        name: "Maillot Italie Extérieur",
        team: "Italie",
        price: 78.99,
        stock: 6,
        description: "Maillot officiel de l'Italie - Extérieur 2024",
    },
    {
        id: 10,
        name: "Maillot Japon Domicile",
        team: "Japon",
        price: 80.99,
        stock: 11,
        description: "Maillot officiel du Japon - Domicile 2024",
    },
]);
```
