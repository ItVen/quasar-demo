<template>
  <div class="column justify-between">
    <div class="row justify-between">
      <q-btn flat to="test1" icon="ion-arrow-back" />
      <q-btn outline rounded color="primary" label="Outline Rounded" />
    </div>

    <div>欢迎来到Unipass</div>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="email" stack-label :dense="dense" />
    </div>
    <div class="column reverse">
      <q-btn
        class="q-gutter-md"
        style="max-width: 300px"
        color="primary"
        label="登录"
        to="test2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Test1',
  setup() {
    return {
      text: '',
      ph: '',
      dense: false
    };
  }
});
</script>
