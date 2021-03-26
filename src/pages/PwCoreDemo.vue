<template>
  <div>
    <top-bar :showL="true" :showR="false" :leftUrl="'/'"></top-bar>
    <q-btn label="初始化pw" @click="init()"></q-btn>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { init } from 'src/composition/PwCoreDemo';
import TopBar from 'src/components/topBar.vue';
export default defineComponent({
  components: { TopBar },
  setup() {
    return { init };
  }
});
</script>
