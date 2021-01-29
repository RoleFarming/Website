<template>
      <v-container class="justify-center">
        <v-row>
          <v-spacer/>
          <v-col cols=10>
            <v-sheet min-height="70vh" rounded="lg" jusitfy-center>
              <v-container pb-10 align-center text-center text-h1>
                RoleFarm 
              </v-container>
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
        <v-container fluid grid-list-md class="align-center text-center justify-center col-8">

        <v-row wrap >
         <v-flex md6 v-for="item in images" :key="item" class="align-center text-center justify-center col-8">
         <img width=450px :src=item />
        </v-flex>
        </v-row>

        </v-container>
      </v-container>
</template>
<script>




  export default {
    props: ['web3'],
    data: () => ({
      images: ['/Inner_Sanctum.webp',
                '/Return_to_the_Source.webp',
                '/Roadway_to_Awe.webp',
                '/Stairway_to_Heaven.webp'],
      async foo() {console.log(await this.web3())},
    }),
  }
</script>


