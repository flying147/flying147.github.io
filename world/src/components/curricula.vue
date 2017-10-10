<template>
  <div class="curricula">
  	<div class="other-tips">
      <p>开课咨询</p>
      <span>curricula</span>
    </div>
    <div class="container">
      <div class="row">
          <div class="col-md-12 new con" v-for="item in curri">
            <div class="col-md-3 consultation">
              <img :src="item.curImg" alt="" width="100%" height="100%">
            </div>
            <div class="col-md-6">
              <div class="consultation-text">
                <h3 style="color: #333333">{{item.title}}</h3>
                <h4 style="color: #31b069">{{item.tech}}</h4>
                <h4 style="color: #aaaaaa">{{item.curTime}}</h4>
              </div>
            </div>
            <div class="col-md-3 consultation-desc">
              <a href="/curricula/4">查看详情</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'curricula',
  data () {
    return {
     curri:[
     {curImg:require("../assets/img/fabuhui.jpg"),title:"微世界新零售商学院——10月9-11日香仁堂内训",tech:"讲师：胡海林、周伟",curTime:"开课时间：2017-09-20 22:36:51"},
     {curImg:require("../assets/img/f1.jpg"),title:"微世界新零售商学院——10月14-16日福瑞达F1团队总裁密训营",tech:"讲师：黄阳明、周伟",curTime:"开课时间：2017-09-20 22:36:56"},
     {curImg:require("../assets/img/class.jpg"),title:"【十一开课通知单】第17期《未来力量·领袖班》长沙站，即将盛大起航.....",tech:"讲师：胡海林 黄佰胜",curTime:"开课时间：2017-10-03 21:15:49"},
     {curImg:require("../assets/img/parent.jpg"),title:"【开课通知】第2期·《父母导师班》· 长沙站，即将开启你的导师之旅！",tech:"讲师：李沐珊  胡海林",curTime:"开课时间：2017-09-15 00:00:00"},
     {curImg:require("../assets/img/yaren.jpg"),title:"【最新开课】超级火爆第79届《人性销售·比神更会卖》9月14~17日四天三晚密训班强势登陆陕西西安",tech:"讲师：黄佰胜、范国平、唐俊华",curTime:"开课时间：2017-09-20 21:41:45"},
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
