<template>
  <div class="column">
    <top-bar
      :showL="true"
      :showR="true"
      :right="'Login'"
      :rightUrl="'login'"
      :leftUrl="'login'"
    ></top-bar>
    <div class="fixed-center column">
      <span class="span">Create Account</span>
      <span
        >Your Email is Your Universal Passport in
        <a href=""> Unipass.me</a></span
      >
    </div>

    <div class="div1 fixed-bottom">
      <q-input
        v-model="email"
        style="width: 300px"
        label="Enter Your Email"
        stack-label
        :dense="dense"
      />
      <q-btn
        no-caps
        style="width: 300px"
        color="info"
        label="Sign up"
        to="test2"
      />
    </div>
    <q-dialog v-model="dialog" :position="position">
      <div>email error</div>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import TopBar from 'src/components/TopBar.vue';
import { isEmail } from 'src/composition/login';
export default defineComponent({
  name: 'SignUp',
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
    canNext: function() {
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
.span {
  font-size: 30pt;
}
</style>
