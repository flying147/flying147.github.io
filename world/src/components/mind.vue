<template>
  <div class="mind">
    <nav class="navbar navbar-inverse navbar-static-top navbar-left">
            <div class="container">
                <div class="navbar-header">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Branding Image -->
                    <a class="navbar-brand" @click="$router.push('/')">
                        <img src="../assets/img/logo.png" width="50">
                        <p>
                          <span>微世界</span>
                          <span>新零售商学院</span>
                        </p>
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        <li><a @click="$router.push('/')">公司首页</a></li>
                        <li><a @click="$router.push('/tidings')">公司时事</a></li>
                        <li><a @click="$router.push('/teachers')">师资力量</a></li>
                        <li><a @click="$router.push('/courses')">课程介绍</a></li>
                        <li><a @click="$router.push('/curricula')">开课咨询</a></li>
                        <li><a href="#">案例见证</a></li>
                        <li><a @click="$router.push('/careers')">招贤纳士</a></li>
                        <li><a @click="$router.push('/aboutus')">关于我们</a></li>
                    </ul>
                    <!-- Right Side Of Navbar -->
                </div>
            </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'mind',
  data () {
    return {
      
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
