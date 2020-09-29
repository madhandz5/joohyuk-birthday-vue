<template>
  <div class="home">
    <Invitation/>
  </div>
</template>

<script>
// @ is an alias to /src
import Invitation from '@/components/Invitation.vue'

export default {
  name: 'App',
  components: {
    Invitation
  },
  mounted() {
  }
}
</script>
