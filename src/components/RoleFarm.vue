<template>
      <v-container class="rounded-lg mt-5 justify-center secondary soft">
        <v-row>
          <v-spacer/>
          <v-col class="col-md-10 col-sm-12">
            <v-sheet class="mt-2 mx-auto" rounded="lg" jusitfy-center>
              <v-container pb-2 align-center text-center style="font-size: 2vw color:black"  accent--text class="swirly">
              <span style="color:#862C5A;">ROLE</span><span style="color:#309167;">FARM</span><span>btc</span>
              </v-container>
              <v-divider class="mb-2"></v-divider>
              <v-container body-1 text-center>
              <p>Role Farm is an Ongoing Community Lead Mixed Reality Web3 Live Action Role Playing Game and is currently preparing alpha launch.</p>
              <p>These contracts have been internally audited and await further audit. </p>
              <p>More purpose to come. The internal development team is working on 11 days sprints.</p>
              <p>We welcome you to our realm and hope you enjoy the experience as we grow as a a community lead and funded LARPG. </p>
              <p>Welcome to Agurus</p>
              </v-container>
           </v-sheet>
            <v-container style="min-width:50%;min-width:400px"  body-1 text-center>
            <v-carousel style="width:auto;height:auto !important;"
            dark
            hide-delimiter-background
            delimiter-icon="mdi-shield"
            >
            <v-carousel-item style="max-width:100%;height:130%;" v-for="(item) in images" :key="item.src" >
            <img style="object-fit: contain; max-width: 100%;width:auto;height:85%; filter: drop-shadow(5px 5px 15px #222222); " :src="item.src" :alt="blah"/>
            <div class="ma-3">{{item.title}}: {{item.text}}</div>
            </v-carousel-item>
            </v-carousel>
            </v-container>

            <v-sheet class="mt-2" rounded="lg" jusitfy-center>
            <v-container mx-auto body-1 class="text-center justify-center align-center">
            This is just a preview of what the team is up to. Exciting things await in the following week.
            <v-img class=mx-auto width=50% src="/feeling.gif" />
            You can start your journey early, and join the community at <a href="https://t.me/rfbtctech">the RFbtc Telegram </a>
            </v-container>
            </v-sheet>
          </v-col>
          <v-spacer/>
        </v-row>
        </v-container>
</template>
<script>
  export default {
    data: () => ({
      images: [{src: '/Stairway_to_Heaven.webp', text: '10,000 RFbtc Donated to the Staking Contract ', title: 'Stairway to Heaven'},
               {src: '/Roadway_to_Awe.webp', text: '50,000 Donated to the staking contract ', title: 'Roadway to Awe'},
               {src: '/Inner_Sanctum.webp', text: '100,000 RFbtc donated to the staking contract', title: 'Inner Sanctum'},
               {src: '/Return_to_the_Source.webp', text: '160,000 RFbtc donated to the staking contract', title: 'Return to the Source'},],
      async foo() {console.log(await this.web3())},
    }),
  }
</script>


<style>
.swirly {
  font-size: 6vw;
  line-height: 6rem;
  letter-spacing: -.015625em;
  text-transform: false;
  font-family: "Ubuntu" !important;
}
.soft {
  background: radial-gradient(#A0336D, #862C5A,#862C5A);
}
</style>
