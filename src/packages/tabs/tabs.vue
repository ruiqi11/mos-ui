<template>
  <!-- 父盒子，包裹组件，包括切换标题和项目 -->
  <div class="tabs" :class="direction">
    <component :is="currentTab" :key="selected"/>
  </div>
</template>
<script>
  import {ref, onMounted, provide} from 'vue'
  export default {
    name: 'MosTabs',
    props: {
      selected: { // 选择
        type: String,
        required: true
      },
      direction: { // 排列方式,未定义样式
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    setup(props, context){
      // 判断插槽位置是否为tabs-item
      const defaults = context.slots.default()
      defaults.forEach(pane => {
        if (pane.type.name !== 'mos-tabs-item'){
          throw new Error('Tabs 子标签必须是Tab组件')
        }
      })
      // 计算属性拿到当前选中的组件，再通过动态组件渲染
      const currentTab = computed(() => {
        return defaults.filter(pane => pane.props.name === props.selected)[0]
      })
      return {currentTab}

    }
  }
</script>
<style scoped>
  /* .tabs {
  } */
  .vertical{
    display: flex;
  }
</style>
