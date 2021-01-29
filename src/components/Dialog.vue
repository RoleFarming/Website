<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >


      <v-card>
        <v-card-title class="headline grey lighten-2">
        Nearly There
        </v-card-title>

        <v-card-text>
        HODL on for just a little bit longer. It'll be worth it.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = true"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import getWeb3 from '../web3.js';
  export default {
    data () {
      return {
        bal: '',
        dialog: true,
      }
    },
    async created() {
      const {rfBTC, staking, web3} = await getWeb3();
      let fmt_rfbtc = (val) => web3.utils.fromWei(val, 'rfbtc');
      console.log(web3);
      this.bal = fmt_rfbtc(await rfBTC.methods.balanceOf(staking.options.address).call());
    }
  }
</script>
