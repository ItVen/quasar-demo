<template>
  <div>
    <div class="lay2btn" @click="$emit('send')">
      <q-icon :color="color" :name="icon" />
      <span>{{ text }}</span>
      <q-knob
        :class="show"
        v-model="progress"
        size="20px"
        :thickness="0.22"
        color="info"
        track-color="grey-3"
      />
      <q-icon :class="showEnd" :color="colorEnd" :name="icon_end" size="20px" />
    </div>
  </div>
</template>
<script>
import { getData } from 'src/composition/buttom';
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  name: 'compostion-button',
  props: {
    contexst: String,
    state: String,
    progress: Number
  },
  setup(props) {
    return {
      ...getData(props.value, props.state, props.contexst)
    };
  }
});
</script>
<style lang="scss">
.lay2btn {
  display: flex;
  height: 40px;
  min-width: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px;
  color: $primary;
  padding-left: 5px;
  padding-right: 5px;
  border: 2px solid $primary;
  border-radius: 30px;
}
</style>
