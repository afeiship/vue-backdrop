<template>
  <div
    :style="{
      position:position,
      'z-index':zIndex,
      opacity:opacity
    }"
   :class="['vue-backdrop',cssClass]"
    v-show="visible">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'vue-backdrop',
    props:{
      cssClass:String,
      visible:Boolean,
      zIndex:{
        type:Number,
        default:1
      },
      position:{
        type:String,
        default:'fixed'
      },
      opacity:{
        type:String,
        default:'0.9'
      }
    }
  };
</script>

<style lang="scss">
  .vue-backdrop{
    left:0;top:0;
    right:0;bottom:0;
  }
</style>
