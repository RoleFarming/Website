<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" flat >
      <v-container class="py-0 fill-height">
        <v-btn
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

    <router-view />
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
        'Rewards',
        'About',
      ],

    })
};
</script>
