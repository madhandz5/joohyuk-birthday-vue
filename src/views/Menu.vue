<template>
  <div>
    <v-list-item v-for="(item,i) in items" :key="i" :to="item.to">
      <v-list-item-content>
        <v-divider class="mb-5"/>
        <v-icon>{{item.icon }}</v-icon>
        <span class="text-center text-h5 font-weight-black" @click="$vuetify.goTo(`${item.to}`)">{{ item.title }}</span>
        <v-divider class="mt-5"/>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:
          [
            {
              title: '홈',
              icon: 'mdi-home',
              to: '#home'
            },
            {
              title: '모시는글',
              icon: 'mdi-email',
              to: '#greeting'
            }
            ,
            {
              title: '오시는길',
              icon: 'mdi-car-side',
              to: '#map'
            }
            ,
            {
              title: '참석여부',
              icon: 'mdi-card-bulleted-outline',
              to: '#attend'
            }
          ]
    }
  }
}
</script>