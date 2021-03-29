<template>
  <div>
    <top-bar :showL="true" :showR="false" :leftUrl="'/'"></top-bar>
    <div class="fullscreen  flex flex-center">
      <div class="fixed-center column">
        <q-card class="my-card column">
          <q-btn label="连接钱包" @click="initPw()"></q-btn>
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
        <q-btn label="发起交易" @click="sendCkb()"></q-btn>
        <span>{{ this.txHash }}</span>
        <br />

        <div>
          <q-btn no-caps label="clone Cell"></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { initPWCore, send } from 'src/composition/PwCoreDemo';
import TopBar from 'src/components/topBar.vue';
export default defineComponent({
  components: { TopBar },
  setup() {
    return {
      show: false,
      initPWCore,
      address: '',
      ckbBalance: '',
      toAddress: '',
      amount: '',
      send,
      txHash: []
    };
  },
  methods: {
    async initPw() {
      const data = await initPWCore();
      if (data.address) {
        this.address = data.address;
        this.ckbBalance = data.ckbBalance.toString();
      }
      console.log(this.address, this.ckbBalance);
    },
    async sendCkb() {
      if (!this.toAddress) return;
      if (!this.amount) return;
      const data = await send(this.toAddress, this.amount);
      this.txHash.push(data);
      await this.initPw();
    }
  }
});
</script>
