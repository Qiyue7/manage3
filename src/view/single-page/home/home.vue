<template>
  <div>
      <ul class="c_top">
        <li>导入模板<span>(必须使用微软的office Excel否则不能导入)</span></li>
        <li>模板名称 <span class="c_right" href="#">下载</span></li>
      </ul>
      <Row v-for="(infor, i) in inforCardData" :key="`infor-${i}`" style="height:35spx;border-bottom:1px solid #ccc;background:#ffffff;">
        <p class="c_left">{{ infor.title }}</p>
        <a class="c_right" href="#">下载</a>
      </Row>
  </div>
</template>
<script>
import InforCard from '_c/info-card'
import CountTo from '_c/count-to'
import { ChartPie, ChartBar } from '_c/charts'
import Example from './example.vue'
export default {
  name: 'home',
  components: {
    InforCard,
    CountTo,
    ChartPie,
    ChartBar,
    Example
  },
  data () {
    return {
      inforCardData: [
        { title: '单片模板下载' },
        { title: '剧集模板下载' },
        { title: '章节模板下载' },
        { title: '纸书模板下载' },
        { title: '听书模板下载' },
        { title: '文本电子书下载' },
        { title: '选择题模板下载' },
        { title: '判断题模板下载' },
        { title: '问卷题模板下载' },
        { title: 'EPUB电子书工具(Sigil-0.9.9-Windows-x64-Setup.exe)' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  mounted () {
    //
  }
}
</script>

<style lang="less">
.c_left{
  line-height: 35px;
  margin-left: 10px;
  color:#000000;
  float: left;
}
.c_right{
  float: right;
  margin-right: 40px;
  line-height: 35px;
}
.c_top{
  list-style:none;
}
.c_top li{
  border-bottom:1px solid #ccc;
  height:35px;
  line-height: 35px;
  padding-left: 10px;
}
.c_top li:first-child{
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #000000;
}
.c_top li:first-child span{
  color:#ff0000;
}
.c_top li:nth-child(2){
  background: #ffffff;
   font-size: 14px;
   color: #000000;
   font-weight: 700;
}
</style>
