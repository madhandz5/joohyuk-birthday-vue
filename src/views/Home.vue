<template>
  <div class="home">
    <Invitation msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Invitation from '@/components/Invitation.vue'

export default {
  name: 'Home',
  components: {
    Invitation
  }
}
</script>
