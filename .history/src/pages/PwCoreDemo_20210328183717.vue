<template>
  <div>
    <top-bar :showL="true" :showR="false" :leftUrl="'/'"></top-bar>
    <div class="fullscreen  flex flex-center">
      <div class="fixed-center column">
        <q-card class="my-card column">
          <q-btn label="连接钱包" @click="test(web3Modal)"></q-btn>
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
        <q-btn label="发起交易"></q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { test } from 'src/composition/PwCoreDemo';
import Web3Modal from 'web3modal';
import TopBar from 'src/components/topBar.vue';
export default defineComponent({
  components: { TopBar },
  setup(props, context) {
    const address = ref('');
    const ckbBalance = ref('');
    const toAddress = ref('');
    const amount = ref('');
    const web3Modal = ref(null);
    onMounted(() => {
      console.log('onMounted');
      context.web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: true
      });
    });
    return {
      show: false,
      test,
      address,
      ckbBalance,
      toAddress,
      amount,
      web3Modal
    };
  },
  methods: {
    initPw: async function init() {
      const data = await test(this.web3Modal);
      if (data && data.address) {
        this.address = data.address;
        this.ckbBalance = data.ckbBalance.toString();
      }
      console.log(this.address, this.ckbBalance);
    }
  }
});
</script>
