<template>
  <div class="projects">
    <h1 class="page-title">
      Animation Test
    </h1>
    <div>
      <div ref="nameRef" class="name_box">
        <div class="box">
          1
        </div>
        <div class="box">
          2
        </div>
        <div class="box">
          3
        </div>
        <div class="box">
          4
        </div>
      </div>
      <button @click="startAnimation">
        Reset Input
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
// import { ref, onMounted } from 'vue'

export default {
  name: 'AnimationTest1',
  mounted () {
    const q = gsap.utils.selector(this.$refs.nameRef)
    gsap.to(q('.box'), {
      y: 0,
      opacity: 1,
      stagger: 0.33
    })
  },
  methods: {
    startAnimation (e) {
      e.preventDefault()
      // console.log(this.$refs.nameRef)
    }
  }
}
</script>

<style lang="scss" scoped>
  .name_box {
    display: flex;
  }

  .box {
    display: flex;
    width: 23%;
    margin: 1%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: #d3d3d3;
    transform: translate(0, -20%);
    opacity: 0;
  }
</style>
