<template>
  <div
    :style="{
      position:position,
      'z-index':zIndex,
      'background-color':bgColor,
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
      bgColor:{
        type:String,
        default:'#000'
      },
      visible:{
        type:Boolean,
        default:false
      },
      zIndex:{
        type:Number,
        default:1
      },
      position:{
        type:String,
        default:'fixed'
      },
      opacity:{
        type:Number,
        default:0.6
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
