<template>
      <v-container class="rounded-lg mt-5 justify-center secondary soft">
        <v-row>
          <v-spacer/>
          <v-col class="col-md-10 col-sm-12">
            <v-sheet class="mt-2" rounded="lg" jusitfy-center>
              <v-container pb-2 align-center text-center style="color:black"  accent--text class="swirly">
              <span style="color:#862C5A;">ROLE</span><span style="color:#309167;">FARM</span><span>btc</span>
              </v-container>
              <v-divider class="mb-2"></v-divider>

              <v-container ma-auto col-10 text-center>
              <v-btn rounded class="my-10"  primary>Approve</v-btn>
              <Table :data=tab />
              </v-container>

              <v-container ma-auto col-8 text-center>
              <v-row ma-auto text-center>
              <v-col> <v-text-field  solo suffix="rfBTC" label="Stake" :value=stake_amt>
                <v-tooltip slot="append"  top>
                  <template v-slot:activator="{ on }"> <v-icon v-on="on" color="primary" dark @click=maxStake> mdi-rocket-launch </v-icon> </template>
                  <span top>Max Stake</span>
                </v-tooltip>
              </v-text-field></v-col>
              <v-col> <v-text-field solo suffix="rfBTC" label="Unstake" append-icon="mdi-moon-full" :value=unstake_amt>
                <v-tooltip slot="append"  top>
                  <template v-slot:activator="{ on }"> <v-icon v-on="on" @click=maxUnstake> mdi-moon-full </v-icon> </template>
                  <span top>Max Unstake</span>
                </v-tooltip>
              </v-text-field></v-col>
              <v-col class="vw-text  mt-5"> {{pending}} rfBTC</v-col>
              </v-row>
              <v-row ma-auto text-center>
              <v-col><v-btn rounded primary @click=this.stake>Stake</v-btn></v-col>
              <v-col><v-btn rounded primary @click=this.unstake>Unstake</v-btn></v-col>
              <v-col><v-btn rounded primary @click=this.claim>Claim</v-btn></v-col>
              </v-row>
              <v-row ma-auto text-center>
              <v-col><v-subheader class="my-5 justify-center text-center">{{fees[0]}}% fee to stake</v-subheader></v-col>
              <v-col><v-subheader class="my-5 justify-center text-center">{{fees[1]}}% fee to unstake</v-subheader></v-col>
              <v-col><v-subheader class="my-5 justify-center text-center">{{fees[0]}}% fee to claim</v-subheader></v-col>
              </v-row>
              </v-container>
        <v-container class="col-4" style="min-width: 15em"  pb-10 align-center text-center>
          <v-row class="vw-text justify-center text-center">Staking APR</v-row>
          <v-row v-for="item in apr" :key="item.name" >
            <v-col class="body-1 text-left">{{ item.name }}</v-col>
            <v-col class="body-1 text-right">{{ item.value }}%</v-col>
          </v-row>
        </v-container>
        <v-spacer/>
            </v-sheet>
          </v-col>
          <v-spacer/>
        </v-row>
        <v-spacer/>

      </v-container>
</template>
<script>
  import Table from '@/components/Table.vue'
  import getWeb3 from '../web3.js';
  function aprConvert(rewardRate, years) {
    let ratio = Number(rewardRate) / 10000 + 1;
    let res = ((ratio**years) - 1) * (100);
    return res.toFixed(2); 
  }

  export default {
    components: {
      Table
    },
    data: () => ({
      web3: undefined,
      bal: 0,
      staked: 0,
      tab: [{name: "Balance", value: '0'},
            {name: "Staked", value: '0'},
            {name: "Total Earned", value: '0'}],
      fees: ['0', '0', '0'],
      pending: 0,
      apr: [{name: "Yearly", value: '0'},
            {name: "Monthly", value: '0'},
            {name: "Weekly", value: '0'}],
      stake_amt: 0,
      unstake_amt: 0,
      allowance: 0,
    }),
    methods: {
      async refresh_data() {
        const {rfBTC, staking, web3} = await getWeb3();
        this.web3 = web3;
        let fmt_rfbtc = (val) => web3.utils.fromWei(val, 'rfbtc');
        let m = staking.methods;
        let address = (await web3.currentProvider)["selectedAddress"];
        this.bal = await rfBTC.methods.balanceOf(address).call();
        this.staked = await m.depositedTokens(address).call();
        this.allowance = await rfBTC.methods.allowance(address, staking.options.address).call();
        console.log(this.allowance);
        let pending = m.getPendingDivs(address).call();
        let earned = m.totalEarnedTokens(address).call();
        this.tab = [{name: "Balance", value: fmt_rfbtc(this.bal)},
                    {name: "Staked", value: fmt_rfbtc(this.staked)},
                    {name: "Total Earned", value: fmt_rfbtc(await earned)},
        ];
        this.fees = await Promise.all([m.stakingFeeRate().call(), m.unstakingFeeRate().call(), 0])
        let rewardRate = await m.rewardRate().call();
        this.apr[0]['value'] = aprConvert(rewardRate, 1);
        this.apr[1]['value'] = aprConvert(rewardRate, 1/365.25*30);
        this.apr[2]['value'] = aprConvert(rewardRate, 1/365.25*7);
        this.pending = await pending;
        //web3.eth.subscribe('logs', {address: staking.options.address}, (error, result) => console.log(result));
        console.log(await staking.methods.depositedTokens(address).call());
      },
      async stake() {
        console.log(this.stake_amt);
      },
      async unstake() {
        console.log(this.unstake_amt);
      },
      async claim() {
        console.log(this.pending);
      },
      async maxUnstake() {
        this.unstake_amt = this.web3.utils.fromWei(this.staked, 'rfbtc');
        console.log("moo" + this.pending);
      },
      async maxStake() {
        this.stake_amt = this.web3.utils.fromWei(this.bal, 'rfbtc');
        console.log("moo" + this.pending);
      }



    },
    async created() {
      this.refresh_data();
    },
  }
</script>
<style>
.vw-text {
  font-family: ubuntu;
  font-size: 3vw;
}
</style>
