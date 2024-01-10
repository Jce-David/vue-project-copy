<script lang="ts">
import { useCartStore } from '@/stores/cart';


export default {
    computed: {
        details(){
            const cartStore = useCartStore();
            return cartStore.details
        }
    }
}

</script>

<template>
    <v-list v-for="detail in details" :key="detail.product.id" details:details>
        {{ detail.product.price }}
        {{ detail.product.name }}
        {{ detail.quantity }}
    </v-list>

    
</template>