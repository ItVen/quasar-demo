<template>
  <q-page class="flex column">
    <top-bar
      :showL="true"
      :showR="true"
      :right="'sign up'"
      :rightUrl="'signup'"
      :leftUrl="'/'"
    ></top-bar>
    <span class="fixed-center">Welcome to Unipass</span>
    <div class="div1 fixed-bottom">
      <q-input
        v-model="email"
        style="width: 300px"
        label="Enter Your Email"
        stack-label
        :dense="dense"
      />
      <q-btn style="width: 300px" color="info" label="Login" @click="canNext" />
    </div>
    <q-dialog v-model="dialog" :position="position">
      <div>email error</div>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import TopBar from 'src/components/topBar.vue';
import { isEmail } from 'src/composition/login';
export default defineComponent({
  name: 'Login',
  components: { TopBar },
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      email: ref(''),
      position: ref('bottom'),
      dialog: false,
      dense: false
    };
  },
  methods: {
    canNext() {
      console.log(this.email);
      if (!this.email) {
        this.dialog = true;
        return;
      }
      if (!isEmail(this.email)) {
        this.dialog = true;
        return;
      }
      return this.$router.push('/pwcore');
    }
  }
});
</script>
<style lang="scss" scoped>
.div1 {
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
span {
  font-size: 30pt;
}
</style>
