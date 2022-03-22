<template>
  <div>
    {{ msg1 }}{{ who }}{{msg2}}
  </div>
  <div class="div1" v-cloak>
    <router-link to="/person">人员信息</router-link>
    <!-- 头部 -->
    <div class="my-canvas" >
      <!-- canvas背景 -->
      <canvas id="personCanvas"></canvas>
    </div>
  </div>
  <div class="div2" v-cloak>
    <router-link to="/building">建筑信息</router-link>
    <!-- 头部 -->
    <div class="my-canvas" >
      <!-- canvas背景 -->
      <canvas id="buildingCanvas"></canvas>
    </div>
  </div>
  <div class="div3" v-cloak>
    <router-link to="/screen">大屏展示</router-link>
    <!-- 头部 -->
    <div class="my-canvas" >
      <!-- canvas背景 -->
      <canvas id="screenCanvas"></canvas>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, nextTick, onMounted} from 'vue';

export default defineComponent({
  props: {
    name: String,
    msg1: { type: String, required: true, default: "This is"}
  },
  data() {
    return {
      msg2: 'first page!',
      who: ' my '
    }
  },
  setup() {
    // 创建canvas动画
    const oninitCanvas = () => {
      nextTick(() => {
        const personCanvas: any = document.getElementById('personCanvas'),
            pctx = personCanvas.getContext('2d')
        const buildingCanvas: any = document.getElementById('buildingCanvas'),
            bctx = buildingCanvas.getContext('2d')
        const screenCanvas: any = document.getElementById('screenCanvas'),
            sctx = screenCanvas.getContext('2d')
        const ctxs: any[] = [pctx, bctx, sctx]
        const canvas: any = document.getElementById('personCanvas'),
            ctx = canvas.getContext('2d'),
            height: number = canvas.offsetHeight,
            width: number = canvas.offsetWidth,
            lines: string[] = ["rgba(248, 248, 248, .4)", "rgba(248, 248, 248, .5)", "rgba(248, 248, 248, .6)"],
            boHeight: number = height / 10,
            posHeight: number = height / 1.8,       // 波浪高度
            canvasAny: any = { width: width, height: height },
            requestAnimFrame = (function(ctxs) {        // 波浪自执行函数
              return function(callback: any) {
                setTimeout(callback, 100 / 6)
              }
            })()
        let step = 0
        // 动起来
        const loop = function() {
          let i: any
          for (i in ctxs) {
            ctxs[i].clearRect(0, 0, canvasAny.width, canvasAny.height)
            step++
            // 画三个不同颜色的矩阵
            for(let j = lines.length - 1; j >= 0; j--) {
              // 每个矩阵的角度都不同，每个之间相差100度
              const angle: number = (step + j * 100) * Math.PI / 180,
                  deltaHeight: number = Math.sin(angle) * boHeight,
                  deltaHeightRight: number = Math.cos(angle) * boHeight
              ctxs[i].fillStyle = lines[j]
              ctxs[i].beginPath()   // 开始绘制
              ctxs[i].moveTo(0, posHeight + deltaHeight)
              ctxs[i].bezierCurveTo(canvasAny.width / 2, posHeight + deltaHeight - boHeight, canvasAny.width / 2, posHeight + deltaHeightRight - boHeight, canvasAny.width, posHeight + deltaHeightRight)
              ctxs[i].lineTo(canvasAny.width, canvasAny.height)
              ctxs[i].lineTo(0, canvasAny.height)
              ctxs[i].lineTo(0, posHeight + deltaHeight)
              ctxs[i].fill()      // 上色
              ctxs[i].closePath() // 结束绘制
            }
          }
          requestAnimFrame(loop)    // 启动函数
        }
        // 随机数
        const random = function(min: number, max: number) {
          return Math.floor(Math.random() * (max - min) + min)
        }
        loop()
      })
    }

    onMounted(() => {
      oninitCanvas()
    })
  }

});



</script>


<style scoped>
.div1 {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* 红色 */
  border-radius: 8px;
  height: 500px;
  width: 300px;
  margin: 100px 300px;
  /*background:  url("../assets/bg02.png");*/
  background-color: #6689e2;
  background-size: 100% 100%;
  position: absolute;
}

.div2 {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* 红色 */
  border-radius: 8px;
  height: 500px;
  width: 300px;
  margin: 100px 700px;
  /*background:  url("../assets/bg02.png");*/
  background-color: #6689e2;
  background-size: 100% 100%;
  position: absolute;
}

.div3 {
  border-style: solid;
  border-color: rgb(255, 0, 0); /* 红色 */
  border-radius: 8px;
  height: 500px;
  width: 300px;
  margin: 100px 1100px;
  /*background:  url("../assets/bg02.png");*/
  background-color: #6689e2;
  background-size: 100% 100%;
  position: absolute;
}

.my-header{
  border-style: solid;
  border-color: rgb(255, 0, 0); /* 红色 */
  border-radius: 8px;
  height: 500px;
  width: 300px;
  margin: 100px 300px;
  background-size: 100% 100%;
  background-color: #6689e2;
  position: relative;
}
.my-canvas {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 300px;
}

</style>
