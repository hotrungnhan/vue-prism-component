<template>
  <Prism lang="javascript" :code="code" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    var code = ref(`function (){
    let i=0
    let z=1 
  return i+z
  }`);
    return { code };
  },
});
</script>

