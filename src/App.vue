<template>
  <div>
    <!-- 默认按钮 --> 	
    <mos-button>默认按钮</mos-button>
    <br>
      <!-- 带类型的按钮 -->
    <mos-button type='primary'>主要按钮</mos-button>
    <mos-button type='warning'>警告按钮</mos-button>
    <mos-button type='danger'>危险按钮</mos-button>
    <mos-button type='success'>成功按钮</mos-button>
    <mos-button type='info'>信息按钮</mos-button>
    <!-- <mos-icon icon="icon-back"></mos-icon> -->
    <!-- 带图标的按钮 -->
    <br>
    <mos-button type="primary" icon='icon-shezhi'>设置</mos-button>
    <mos-button type="primary" icon='icon-shezhi' iconPosition="right">设置</mos-button>
    <br>
    <mos-button type="primary" loading>加载中</mos-button>
    <br>
    <!-- 按钮组 -->
    <mos-button-group>
      <mos-button icon='icon-back' type="primary" >上一页</mos-button>
      <mos-button icon='icon-more' type="primary" icon-position='right'>下一页</mos-button>
    </mos-button-group>
    <br>
    <!-- 输入框 -->
    <mos-input value="默认样式"></mos-input>
    <mos-input value="内容提示" title="内容提示"></mos-input>
    <mos-input value="禁止输入" disabled></mos-input>
    <mos-input value="只读" readonly></mos-input>
    <mos-input value="值" error="错误"></mos-input>
    <br>
    <!-- 双向绑定（Vue自有的） -->
    <mos-input v-model="value"></mos-input>
    <div>
      value: {{value}}
    </div>
    <br>
    <br>
    <!-- tabs -->
    <mos-tabs :selected="selected">
      <mos-tabs v-model:selected="selectTab">
        <mos-tabs-item label="星星" name="star">一颗小星星</mos-tabs-item>
        <mos-tabs-item label="羊" name="sheep">羊羊羊</mos-tabs-item>
        <mos-tabs-item label="咩咩" name="mie">咩咩是全世界最可爱的猫咪</mos-tabs-item>
      </mos-tabs>
    </mos-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>

