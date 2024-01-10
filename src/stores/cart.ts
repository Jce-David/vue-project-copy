
import { defineStore } from 'pinia'
import type { CartDetail, Product } from '@/model/types'

export const useCartStore = defineStore('cart', {
  state : () => ({
    details: [] as CartDetail []
  }),
  getters: {
    
  },
  actions: {
    onAddProduct(product: Product) {
      const detailFound = this.details.find(detail => detail.product.id === product.id)

      if(detailFound){
        detailFound.quantity += 1;
      } else {
        this.details.push({
          product,
          quantity: 1
        })
      }
    }
  }
} )