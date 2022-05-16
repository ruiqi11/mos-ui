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
  </div>
</template>


