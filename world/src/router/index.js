import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import tidings from '@/components/tidings'
import teachers from '@/components/teachers'
import courses from '@/components/courses'
import curricula from '@/components/curricula'
import careers from '@/components/careers'
import aboutus from '@/components/aboutus'
import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'
import page3 from '@/components/page3.vue'
// import page4 from '@/components/page4.vue'
// import page5 from '@/components/page5.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/tidings',
      component: tidings,
      children:[
      {path: '/',
      component: page1},
      {path: '/tidings/page2',
      component: page2},
      {path: '/tidings/page3',
      component: page3},
      // {path: '/tidings/page4',
      // component: page4},
      // {path: '/tidings/page5',
      // component: page5},
      ]
    },
    {
      path: '/teachers',
      component: teachers
    },
    {
      path: '/courses',
      component: courses
    },
    {
      path: '/curricula',
      component: curricula
    },
    {
      path: '/careers',
      component: careers
    },
    {
      path: '/aboutus',
      component: aboutus
    }
  ]
})
