<template>
  <div class="column">
    <q-btn flat to="/" icon="ion-arrow-back" />
    <div class="row reverse">
      <q-btn outline rounded color="primary" label="Outline Rounded" />
    </div>

    <div>Welcome to Sourly Cat</div>
    <div style="font-style:oblique">
      get your sourly cat and join the battleground
    </div>
    <q-btn no-caps color="primary" style="width: 200px" to="test2">
      <div class="ellipsis">
        Connect To Unipass
      </div>
    </q-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Test2'
});
</script>
<style lang="sass">
div
 margin: 10px
</style>
