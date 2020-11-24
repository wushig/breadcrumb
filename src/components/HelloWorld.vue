<template>
  <div>
      <gezi1/>
  </div>
</template>

<script>
  import gezi1 from './gezi1.vue'
export default {
  name: 'HelloWorld',
  components:{gezi1},
  created:function(){
    // alert(JSON.stringify(this.$route.query));
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
