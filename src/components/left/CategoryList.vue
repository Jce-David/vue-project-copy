<script lang="ts" >

import { useCategoriesStore } from '@/stores/categories';
import { useProductsStore } from '@/stores/products';
import { mapActions } from 'pinia';
import { mapState } from 'pinia';

export default {

    methods: {
        goToCategory(categoryId: number){
            this.$router.push({
                name: 'category',
                params: { categoryId}
            })
        },
        clearCategory(){
            this.$router.push({
                name: 'home',

            })
        },
        ...mapActions(useProductsStore, ['orderByPrice', 'orderByName', 'orderByNameDesc', 'orderByPriceDesc'])
    },
    computed: {

        ...mapState(useProductsStore, ['order']),
        ...mapState(useCategoriesStore, ['categories'])
    }

}
</script>

<template>
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-subheader>
                CATEGORIAS
            </v-list-subheader>
            <v-list-item link @click="clearCategory" :active="$route.name === 'home'"  >
                TODAS
            </v-list-item>

            <v-list-item v-for="category in categories" :key="category.id" link
            @click = goToCategory(category.id)
            :active="$route.name === 'category' && Number($route.params.categoryId) === category.id "
            >
                {{ category.name }}
            </v-list-item>

            <v-divider class="my-2"></v-divider>
            <v-list-subheader>
                ORDEN
            </v-list-subheader>
            <v-list-item link @click="orderByPrice" :active="order === 'price'"  >
                Más costoso
            </v-list-item>
            <v-list-item link @click="orderByPriceDesc" :active="order === 'priceDesc'"  >
                Más más económico
            </v-list-item>
            <v-list-item link @click="orderByName" :active="order === 'name'"  >
                de A-Z
            </v-list-item>
            <v-list-item link @click="orderByNameDesc" :active="order === 'nameDesc'"  >
                de Z-A
            </v-list-item>
        </v-list>
    </v-sheet>
</template>