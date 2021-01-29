<template>
  <v-simple-table >
    <template v-slot:default>
      <tbody>
        <tr v-for="item in data" :key="item.name" >
          <td style="font-size: 2.5vw" class="vw-text text-left">{{ item.name }}</td>
          <td style="font-size: 2.5vw" class="vw-text text-right">{{ item.value }} rfBTC</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
  export default {
    props: ["data"],
}
</script>
<style>
.vw-text {
  font-family: ubuntu;
  font-size: 3vw;
}

</style>
