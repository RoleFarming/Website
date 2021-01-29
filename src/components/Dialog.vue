<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >


      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br>
          {{bal}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
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
        bal: 'ham',
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
