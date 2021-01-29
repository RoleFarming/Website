<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" height=100px accent--text flat >
      <v-container class="py-0 fill-height justify-left text-left" accent--text>
      <v-img class="" src="/gold_logo.png" max-width=160px height=90% contain  />
        <v-btn
          class="text-left justify-left"
          style="font-size: 1.5rem"
          color="accent"
          v-for="link in links"
          :key="link"
          :to="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

      </v-container>
    </v-app-bar>
    <v-main class="secondary fade">
    <router-view />
    </v-main>
  </v-app>
</template>

<script>
import getWeb3 from './web3.js';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    web3: getWeb3,
      links: [
        'Home',
        'Staking',
      ],

    })
};
</script>
<style>
.fade {
  background: linear-gradient( #ffecfa, #ffbcf4);
}
</style>
