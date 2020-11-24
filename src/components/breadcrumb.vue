<template>
  <div>
    <Breadcrumb style="text-align: left;margin: 10px 20px">
      <BreadcrumbItem :to="router.path" v-for="(router, index) in routerList" :key="index">
        {{router.meta.title}}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "naviBar",
    data: function () {
      return {
        routerList: []
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb();
      }
    },
    methods: {
      getBreadcrumb() {
        this.routerList = this.$route.matched;
      }
    },
  }
</script>

<style scoped>

</style>
