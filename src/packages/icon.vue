<template>
	<svg class="mos-icon" aria-hidden="true">
    <use v-bind:xlink:href="icontype" />
  </svg>
</template>
<script>
  import './../styles/icon'
  import { computed } from 'vue'
  export default {
    name: 'MosIcon', // 定义组件名
    props:{
      icon:{
        type: String,
        require: true // 设置必传
      }
    },
    setup(props) {
      const icontype = computed(() => {
        return props.icon? '#' + props.icon: ''
      })
      return {icontype}
    }
  }
</script>
<style>
  .mos-icon {
    width: 30px;
    height: 30px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
