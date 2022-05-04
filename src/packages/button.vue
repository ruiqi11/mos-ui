<template>
  <button class="mos-button" :class="btnClass">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { computed } from "vue"
export default {
  name: "MosButton",
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
    }
  },
  setup(props) {
    let btnClass = computed(() => {
      let classes = []
      if (props.type) {
        classes.push(`mos-button-${props.type}`)
      } else {
        return
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
}
</style>
