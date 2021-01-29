<template>
      <v-container class="rounded-lg mt-5 justify-center secondary soft">
        <v-row>
          <v-spacer/>
          <v-col cols=10>
            <v-sheet class="mt-2" rounded="lg" jusitfy-center>
              <v-container pb-2 align-center text-center style="color:black"  accent--text class="swirly">
              <span style="color:#862C5A;">ROLE</span><span style="color:#309167;">FARM</span><span>btc</span>
              </v-container>
              <v-divider class="mb-2"></v-divider>
              <v-container body-1 text-center>
              <p>Role Farm is an Ongoing Community Lead Mixed Reality Web3 Live Action Role Playing Game and is currently preparing alpha launch.</p>
              <p>These contracts have been internally audited and await further audit. </p>
              <p>More purpose to come. The internal development team is working on 11 days sprints.</p>
              <p>We welcome you to our realm and hope you enjoy the experience as we grow as a a community lead and funded LARPG. </p>
              <p>Welcome to "placeholder"</p>
              </v-container>
           </v-sheet>
          </v-col>
          <v-spacer/>
        </v-row>
            <v-container style="width:50%"  body-1 text-center>
            <v-carousel style="width:auto;height:33em !important;"
            dark
            hide-delimiter-background
            delimiter-icon="mdi-shield"
            >
            <v-carousel-item style="height:130%;" v-for="(item) in images" :key="item.src" >
            <img style="width:auto;height:85%; filter: drop-shadow(5px 5px 15px #222222); " :src="item.src" :alt="blah"/>
            <div class="ma-3">{{item.title}}: {{item.text}}</div>
            </v-carousel-item>
            </v-carousel>
            </v-container>

 
        </v-container>
</template>
<script>




  export default {
    props: ['web3'],
    data: () => ({
      images: [{src: '/Stairway_to_Heaven.webp', text: '10,000 RFbtc Donated to the Staking Contract ', title: 'Stairway to Heaven'},
               {src: '/Roadway_to_Awe.webp', text: '50,000 Donated ot the staking contract ', title: 'Roadway to Awe'},
               {src: '/Inner_Sanctum.webp', text: '100,000 RFbtc donated to the staking contract', title: 'Inner Sanctum'},
               {src: '/Return_to_the_Source.webp', text: '160,000 RFbtc donated to the staking contract', title: 'Return to the Source'},],
      async foo() {console.log(await this.web3())},
    }),
  }
</script>


<style>
.swirly {
  font-size: 6rem;
  line-height: 6rem;
  letter-spacing: -.015625em;
  text-transform: false;
  font-family: "Ubuntu" !important;
}
.soft {
  background: radial-gradient(#A0336D, #862C5A,#862C5A);
}
</style>
