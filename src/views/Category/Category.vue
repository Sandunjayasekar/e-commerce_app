<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float: right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div v-for="category of categories" :key="category.id" class="col-xl-4 col-md-6 col-12 pt-3 d-flex">
        <CategoryBox v-on:clickParent="clickParent" :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "@/components/Category/CategoryBox.vue";
import category from '@/apis/category'

export default {
  name: "CategoryC",
  components: {
    CategoryBox,
  },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      try {
        const { data } = await category.fetchCategoryList()
        this.categories = data
      } catch (error) {
        console.log(error);
      }
    },
    clickParent(data) {
      alert(data)
    }
  },
  mounted() {
    this.getCategories();
  },
};
</script>
<style scoped></style>
