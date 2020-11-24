<!--suppress HtmlDeprecatedTag -->
<template>
  <div style="width: 80%;margin: 0 auto">
    <Row>
      <Col span="4">
        <Menu :theme="theme2" @on-select = "" style="width: 100%">
          <Submenu name="1" to="/d/g">
            <template slot="title">
              <Icon type="ios-paper"/>
              内容管理
            </template>
            <MenuItem name="1-1" to="/d/g/e" :replace="true">文章管理</MenuItem>
            <MenuItem name="1-2" to="/d/g/f" :replace="true">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>
              用户管理
            </template>
            <MenuItem name="2-1" to="/d/h/j">新增用户</MenuItem>
            <MenuItem name="2-2" to="/d/h/k">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Col>
      <Col span="20">
        <div style="">
            <naviBar/>
            <router-view/>
        </div>
      </Col>
    </Row>
  </div>

</template>
<script>
  import naviBar from "./Breadcrumb.vue"

  export default {
    components: {naviBar},
    data() {
      return {
        theme2: 'dark'
      }
    },
    methods: {
      navigateTo:function (name) {
        this.$router.push(name)
      }
    }
  }
</script>
