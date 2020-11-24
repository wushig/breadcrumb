<template>
  <keep-alive>
    <div>
      <button @click="jump">详情</button>
      <button @click="jump1">其他页面</button>
      <label>
        <input type="text" v-model="queryData.v1">
      </label>
      <label>
        <input type="text" v-model="queryData.v2">
      </label>
      <label>
        <input type="text" v-model="queryData.v3">
      </label>
      <br>
<!--      <span>{{name}}</span>-->
    </div>
  </keep-alive>
</template>


<script>
  export default {
    name: "gezi1",
    data: function () {
      return {
        name: '王鸽子1',
        queryData: {
          v1:"",
          v2:"",
          v3:"",
        }
      }
    },
    mounted: function () {
      this.name = "王鸽子1";
      this.queryData = this.$route.query.queryData?JSON.parse(this.$route.query.queryData):{};
    },
    methods: {
      change: function () {
        this.name = "王鸽子被打死了！！！";
      },
      change1: function () {
        this.name = "王鸽子又被打死了！！！！！！！！";
      },
      jump:function () {
        this.$router.push({path:'/a',query:{queryData:this.queryData}});
      },
      jump1:function () {
        this.$router.push({path:'/c',query:{queryData:this.queryData}});
      }
    }
  }
</script>

<style scoped>

</style>
