<template>
    <div>
      <Button type="primary" @click="toDetail">详情</Button>
      <Table width="100%" border :columns="columns2" :data="data3"></Table>
    </div>
</template>

<script>
    export default {
        name: "gezi_luyou2",
        data () {
          return {
            columns2: [
              {
                title: 'Name',
                key: 'name',
                width: 100,
                fixed: 'left'
              },
              {
                title: 'Age',
                key: 'age',
                width: 100
              },
              {
                title: 'Province',
                key: 'province',
                width: 100
              },
              {
                title: 'City',
                key: 'city',
                width: 100
              },
              {
                title: 'Address',
                key: 'address',
                width: 200
              },
              {
                title: 'Postcode',
                key: 'zip',
                width: 100
              },
              {
                title: 'Action',
                key: 'action',
                fixed: 'right',
                width: 120,
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'info',
                        size: 'small'
                      }
                    }, 'View'),
                    h('Button', {
                      props: {
                        type: 'info',
                        size: 'small'
                      }
                    }, 'Edit')
                  ]);
                }
              }
            ],
            data3: [
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                province: 'America',
                city: 'New York',
                zip: 100000
              },
              {
                name: 'Jim Green',
                age: 24,
                address: 'Washington, D.C. No. 1 Lake Park',
                province: 'America',
                city: 'Washington, D.C.',
                zip: 100000
              },
              {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                province: 'Australian',
                city: 'Sydney',
                zip: 100000
              },
              {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                province: 'Canada',
                city: 'Ottawa',
                zip: 100000
              }
            ]
          }
        },
      methods:{
        toDetail:function () {
          this.$router.push({path:"/g/e/m"})
        }
      }


    }
</script>

<style scoped>

</style>
