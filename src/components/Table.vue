<template>
  <v-simple-table >
    <template v-slot:default>
      <tbody>
        <tr v-for="item in data" :key="item.name" >
          <td class="display-1 text-left">{{ item.name }}</td>
          <td class="display-1 text-right">{{ item.value }} rfBTC</td>
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
