<template>
  <main>
    <Staking/>
    <Dialog/>
  </main>
</template>

<script>
import Staking from '@/components/Staking.vue'
import Dialog from '@/components/Dialog.vue'

export default {
  name: 'Home',
  components: {
    Staking,
    Dialog
  },
  created() {
    this.$dialog.show(Dialog);
  }

}
</script>
