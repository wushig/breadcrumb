<template>
  <div>
    <button @click="back">返回</button>
<!--    <span>鸽子飞走了</span>-->
  </div>
</template>

<script>
    export default {
        name: "gezi2",
      data:function(){
          return{
          }
      },
      created:function(){
        // console.log(this.queryData);
      },
      methods:{
        back:function () {
          this.$router.push({path:'/'});
          // this.$router.back(-1);
          // window.history.back();
        }
      }
    }
</script>

<style scoped>

</style>
