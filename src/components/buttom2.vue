<template>
  <div>
    <div class="lay2btn" @click="$emit('send')">
      <q-icon :color="color" :name="icon" />
      <span>{{ text }}</span>
      <q-knob
        :class="show"
        v-model="value"
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
import { ref } from '@vue/composition-api';
let online = 'ion-radio-button-on';
let offline = 'ion-radio-button-off';
let online_color = 'info';
let offline_color = 'primary';
let pro_show = null;
let pro_hinden = 'invisible';
let end_hinden = 'hidden';
let end_icon_success = 'ion-checkmark-circle-outline';
let end_icon_fiale = 'ion-close-circle-outline';

function userState(todo) {
  const state = todo.value;
  let icon = offline;
  let color = offline_color;
  let show = pro_hinden;
  let showEnd = end_hinden;
  if (state) icon = online;
  if (state) show = pro_show;
  if (state) color = online_color;
  return {
    icon,
    color,
    show,
    showEnd
  };
}

function getReslut(todo) {
  const value = todo.value.value;
  let icon = offline;
  let icon_end = end_icon_success;
  let color = offline_color;
  let show = pro_hinden;
  let showEnd = end_hinden;
  if (value > 0) icon = online;
  if (value > 0) show = pro_show;
  if (value > 0) color = online_color;
  let colorEnd = color;
  //todo 设置状态
  if (value == 100) {
    showEnd = pro_show;
    show = end_hinden;
    if (todo.value.state) {
      // success
    } else {
      // 失败
      colorEnd = 'negative';
      icon_end = end_icon_fiale;
    }
  }
  return {
    icon,
    color,
    show,
    showEnd,
    icon_end,
    colorEnd
  };
}

export default {
  name: 'compostion-button',
  props: {
    contexst: String,
    state: String,
    value: Number
  },

  setup(props) {
    const todo = ref(props.state);
    const value = ref(props);
    // todo 数据拼接
    let txt = value.value.contexst;
    console.log(txt);
    txt = txt.split('@');
    let text = txt[0].substr(0, 4);
    console.log(('text', text));
    if (txt[1]) {
      text = text + '...@' + txt[1];
    } else {
      text = value.value.contexst;
    }
    return {
      text,
      ...userState(todo),
      ...getReslut(value)
    };
  }
};
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
