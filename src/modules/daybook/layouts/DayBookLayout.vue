<template>
  <NavBar />

  <div class="d-flex">
    <div class="col-4">
      <EntryList/>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import {defineAsyncComponent} from "vue";
//import { defineAsyncComponent } from 'vue'
export default {
  components: {
    NavBar,
    //NavBar: defineAsyncComponent(() => import('../components/NavBar.vue'))
    EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
  }
}
</script>
