<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">
      No hay nada seleccionado
    </h1>
  </div>

  <FabComponent/>
</template>

<script>
import FabComponent from "@/modules/daybook/components/FabComponent.vue";

export default {
  components:{
    FabComponent: FabComponent
  }
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>