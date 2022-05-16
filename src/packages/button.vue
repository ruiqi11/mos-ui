<template>
  <button class="mos-button" :disabled='loading' :class="btnClass">
    <!-- 字体图标 -->
    <mos-icon :icon="icon" v-if="icon" class="icon"></mos-icon>
    <!-- 加载状态 -->
    <mos-icon icon="icon-jiazai" v-if="loading" class="icon"></mos-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { computed } from "vue"
import MosIcon from './icon.vue'
export default {
  name: "MosButton",
  components: {MosIcon},
  props: {
    type: {
      type: String,
      default: '',
      validator: value => {
        if(value&&!['primary','warning','danger','success','info'].includes(value)){
          console.error('type的类型必须为primary,warning,danger,success,info')
        }
        return true
      }
    },
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (data) {
        let Arr = ['left', 'right']
        if (data && Arr.indexOf(data) == -1) {
          console.error('iconPosition类型必须为left,right')
          return true
        }
        return true
      }
    },
    loading: {
      type: Boolean, // 布尔类型在传值的时候可以直接写不用赋值
      default: false
    }
  },
  setup(props) {
    // 按钮类型
    const btnClass = computed(() => {
      let classes = []
      if (props.type) {
        classes.push(`mos-button-${props.type}`)
      } else {
        return
      }
      if (props.iconPosition) {
        classes.push(`icon-${props.iconPosition}`)
      }
      return classes
    })

    return {
      btnClass
    }
  }
}
</script>
<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.mos-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,&:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  $color-list: ( 
    primary: $primary,
    success: $success,
    info: $info,
    warning: $warning,
    danger: $danger
  );
  @each $type,$color in $color-list {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,$color in (primary:$primary-hover, success:$success-hover, info:$info-hover, warning:$warning-hover, danger:$danger-hover) {
    &-#{$type}:hover {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
    }
  }
  // 点击
  @each $type,$color in (primary:$primary-active, success:$success-active, info:$info-active, warning:$warning-active, danger:$danger-active) {
    &-#{$type}:active, &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  .icon {
    width: 16px;
    height: 16px;
  }
  // loading 状态
  &[disabled]{ // 属性选择器
    cursor: not-allowed; // 禁止点击
    .icon {
      @include spin; // 旋转
    }
  }
}
.icon-left {
  .icon {
    order: 1; // 顺序排第一
    margin-right: 5px;
  }
  span {
    order: 2; // 顺序排第二
  }
}
.icon-right {
  .icon {
    margin-left: 5px;
    order: 2;
  }
  span {
    order: 1;
  }
}
</style>
