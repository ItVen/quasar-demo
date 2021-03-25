<template>
  <div class="fullscreen  flex flex-center">
    <div class="colum">
      <compostion-button
        @send="click1"
        contexst="Connect To Unipass"
        :state="false"
        to="test1"
        :value="0"
      />
      <compostion-button
        @send="click2"
        contexst="pw-core"
        :state="false"
        :value="10"
      />
      <compostion-button
        @send="click3"
        contexst="aven9241@gmail.com"
        :state="true"
        :value="100"
      />
      <compostion-button
        @send="click4"
        contexst="6696669@qq.com"
        :state="false"
        :value="100"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import compostionButton from 'src/components/buttom2.vue';

export default defineComponent({
  components: { compostionButton },
  name: 'Index',
  setup() {
    return { compostionButton };
  },
  methods: {
    click1() {
      console.log('click1');
      return this.$router.push('/test1');
    },
    click2: function () {
      return this.$router.push('/pwcore');
    },
    click3() {
      console.log('click3');
    },
    click4() {
      console.log('click4');
    }
  }
});
</script>
