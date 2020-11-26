<template>
  <div>
    <Button type="primary" @click="toUpdate">修改</Button>
    <span>详情页</span>
  </div>
</template>

<script>
  export default {
    name: "gezi_luyou3",
    methods: {
      toUpdate: function () {
        this.$router.push("/g/e/m/p");
      }
    }
  }
</script>

<style scoped>

</style>
