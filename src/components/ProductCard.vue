<script lang= ts>
import type { PropType } from 'vue';
import type { Product } from '@/model/types';
import { useCartStore } from '@/stores/cart';

export default {
    props: {
        product: {
            type: Object as PropType<Product>,
            required: true
        }
    },
    methods: {
        onAddButtonCLick(){
            const cartStore = useCartStore();
            cartStore.onAddProduct(this.product)
        }
    },
    computed: {
        imageShopping(){
            return this.product.image            
        }
    }
}
</script>
<template>
    <v-card>
        <v-card-text>
            <v-img :src="imageShopping" cover height="300px" />
            <v-card-title>
                <p>{{ product.name }}</p>
            </v-card-title>
            <v-chip class="ml-4" >
                <p>${{ product.price }}</p>
            </v-chip>
            <v-card-actions>
                <v-btn block @click="onAddButtonCLick" >
                    Agregar al Carrito
                </v-btn>
            </v-card-actions>
    </v-card-text>
    </v-card>
  
</template>