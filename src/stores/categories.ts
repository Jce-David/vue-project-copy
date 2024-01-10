
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('cart', {
  state : () => ({
    categories: [] as Category []
  }),
  getters: {
  },
  actions: {
    fetchCategories(){
      fetch('/data/categories.json')
      .then(response => response.json())
      .then((data) => {
        this.categories = data
      })
    }
  }
} )