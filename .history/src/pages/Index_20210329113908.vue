<template>
  <div class="fullscreen  flex flex-center">
    <div class="colum">
      <state-button
        @send="clickToLogin"
        contexst="Connect To Unipass"
        :state="false"
        to="test1"
        :value="0"
      />
      <state-button
        @send="clickToPw"
        contexst="pw-core"
        :state="false"
        :value="10"
      />
      <state-button
        @send="click3"
        contexst="aven9241@gmail.com"
        :state="true"
        :value="100"
      />
      <state-button
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
import StateButton from 'src/components/StateButton.vue';

export default defineComponent({
  components: { StateButton },
  name: 'Index',
  setup() {
    return { StateButton };
  },
  methods: {
    clickToLogin() {
      console.log('clickToLogin');
      return this.$router.push('/login');
    },
    clickToPw: function() {
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
