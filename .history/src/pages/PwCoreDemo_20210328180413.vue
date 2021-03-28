<template>
  <div>
    <top-bar :showL="true" :showR="false" :leftUrl="'/'"></top-bar>
    <div class="fullscreen  flex flex-center">
      <div class="fixed-center column">
        <q-card class="my-card column">
          <q-btn label="初始化pw" @click="initPw()"></q-btn>
          <q-spinner-ios class="hidden" color="secondary" />
          <div>CKB_Adrress：{{ address }}</div>
          <div v-show="ckbBalance" style="width: 60vw">
            CKB_Balance：{{ ckbBalance }} ckb
          </div>
        </q-card>

        <h3 label="发起交易"></h3>
        <q-input outlined v-model="toAddress" label="交易目标地址" />
        <br />
        <q-input outlined v-model="amount" label="交易金额" />
        <br />
        <q-btn label="发起交易"></q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { test } from 'src/composition/PwCoreDemo';
import TopBar from 'src/components/topBar.vue';
export default defineComponent({
  components: { TopBar },
  setup() {
    const address = ref('');
    const ckbBalance = ref('');
    const toAddress = ref('');
    const amount = ref('');
    return { show: false, test, address, ckbBalance, toAddress, amount };
  },
  methods: {
    initPw: async function init() {
      const data = await test();
      if (data && data.address) {
        this.address = data.address;
        this.ckbBalance = data.ckbBalance.toString();
      }
      console.log(this.address, this.ckbBalance);
    }
  }
});
</script>
