<template>
  <div id="app">
    <mind></mind>   
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import mind from './components/mind.vue'
import foot from './components/foot.vue'
export default {
  name: 'app',
  components:{mind,foot}
}
</script>

<style>
a:hover {cursor: pointer;}
</style>
