<script lang="ts" >
import ProductCard from './ProductCard.vue';

import { mapState } from 'pinia';
import { useProductsStore } from '@/stores/products'

export default {
    components:{
        ProductCard,
    },
    computed: {
        ...mapState(useProductsStore, ['products'])
    }
}
</script>

<template>
    <v-row>
        <v-col v-for="product in products" :key="product.id" cols="4" >
            <ProductCard :product="product"  />
        </v-col>
    </v-row>
 
</template>