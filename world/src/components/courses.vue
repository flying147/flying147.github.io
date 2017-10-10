<template>
  <div class="courses">
  	<div class="other-tips">
      <p>课程介绍</p>
      <span>courses</span>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 new" v-for="item in courses">
          <div class="thumbnail">
            <a href="#">
              <div class="bottom-tips" :style="'background-image: url('+item.imgSrc+');'">
                <p>{{item.title}}</p>
              </div>
            </a>
            <div class="caption">
              <h4>{{item.pro}}</h4>
              <p>{{item.info}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'courses',
  data () {
    return {
     courses:[
     {imgSrc:require("../assets/img/jisu.png"),title:"内训现场实操出货",pro:"讲师：微世界新零售商学院讲师团",info:"微商团队首选内训"},
     {imgSrc:require("../assets/img/weishang.png"),title:"微商人性三系统",pro:"讲师：微世界新零售商学院讲师团",info:"人性盈利系统、人性执行系统、人性团队密训"},
     {imgSrc:require("../assets/img/baiwang.png"),title:"最落地的闪电招商会",pro:"讲师：黄阳明",info:"闪电收人、收钱的密码"},
     {imgSrc:require("../assets/img/renxing.png"),title:"让你业绩倍增的一堂课",pro:"讲师：亚洲人性营销第一人黄佰胜",info:"一堂缔造12位世界吉尼斯销售冠军的课程"},
     {imgSrc:require("../assets/img/shuofu.png"),title:"人性说服力演说",pro:"讲师：亚洲人性营销第一人黄佰胜",info:"一对多批发式成交、改变人生的课程"},
     {imgSrc:require("../assets/img/weilai.png"),title:"未来力量世界榜样",pro:"讲师：好未来讲师团",info:"青少年特色教育班"}
     ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
