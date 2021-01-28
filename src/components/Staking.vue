<template>
    <v-main class="secondary lighten-5">
      <v-container>
        <v-row>
          <v-spacer/>
          <v-col cols=10>
            <v-sheet min-height="70vh" rounded="lg" jusitfy-center>
              <v-container pb-10 accent--text align-center text-center text-h1>
                RoleFarm 
              </v-container>
              <v-container text-justify text-h4>
              <p>Role Farm is an Ongoing Community Lead Mixed Reality Web3 Live Action Role Playing Game and is currently in beta.</p>
              <p>These contracts have been internally audited and await further audit. </p>
              <p>More purpose to come. The internal development team is working on 11 days sprints.</p>
              <p>We welcome you to our realm and hope you enjoy the experience as we grow as a a community lead and funded LARPG. </p>
              <p>Welcome to "placeholder"</p>
              </v-container>
            </v-sheet>
          </v-col>
          <v-spacer/>
        </v-row>
      </v-container>
    </v-main>
</template>
<script>
  export default {
    props: ['web3'],
    data: () => ({
      async foo() {console.log(await this.web3())},
    }),
  }
</script>
