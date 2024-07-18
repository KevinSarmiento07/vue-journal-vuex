<template>
  <div class="entry-title d-flex justify-content-between">
    <div>
      <span class="text-success fs-3 fw-bold" >15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2021, Jueves</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">Borrar <i class="fa fa-trash-alt"></i></button>
      <button  class="btn btn-primary mx2">Subir Foto  <i class="fa fa-upload"></i></button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <FabComponent icon="fa-save" />

  <img src="https://www.fayerwayer.com/resizer/v2/AGAR54Y7SFFQFJBNI5DR7QYJQA.jpg?auth=0e4446cc2dfbb61f622fd87c8e5241db19af72700e6df5ac03d5982105d24185&width=1200&height=675&smart=true"
       alt="entry-pciture" class="img-thumbnail">
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
textarea{
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus{
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>