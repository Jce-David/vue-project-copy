<script lang="ts">
import { useProductsStore } from '@/stores/products';
import { useCategoriesStore } from '@/stores/categories';
import ProductList from '../components/ProductList.vue'
import CategoryList from '@/components/left/CategoryList.vue';

function beforeRouteToParams (toParamsCategoryId : string | string[]){
  const productsStore = useProductsStore();
  const categoryIdNumber = Number(toParamsCategoryId)
  productsStore.selectCategory(categoryIdNumber)
}

export default {
  components: {
    ProductList,
    CategoryList
  },
  beforeRouteEnter(to){
    return beforeRouteToParams(to.params.categoryId)
  },
  beforeRouteUpdate(to){
    return beforeRouteToParams(to.params.categoryId)
  },
  mounted(){
    const productsStore = useProductsStore();
    productsStore.fetchProducts();

    const categoriesStore = useCategoriesStore();
    categoriesStore.fetchCategories();
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <CategoryList />
      </v-col>
      <v-col cols="10" >
    <ProductList />
      </v-col>
    </v-row>
  </v-container>
 

</template>
