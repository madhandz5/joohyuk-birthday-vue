<template>
  <div>
    <v-flex v-for="visitor in this.visitors" :key="visitor.id">
      <div class="py-1"></div>
      <div v-if="visitor.attend">
        <v-card
            class="mx-auto"
            color="#ebc634"
            dark
        >
          <v-card-title>
            <v-icon
                large
                left
            >
              mdi-clipboard-account
            </v-icon>
            <span class="title font-weight-light">{{ visitor.name }}</span>
          </v-card-title>
          {{ visitor.message }}
          <v-card-text class="headline font-weight-bold">
          </v-card-text>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row
                  align="center"
                  justify="end"
              >
                <v-icon class="mr-1">
                  mdi-clock-time-two-outline
                </v-icon>
                <span class="subheading mr-2">{{ new Date(visitor.time).toLocaleTimeString() }}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
      <div v-else>
        <v-card
            class="mx-auto"
            color="blue"
            dark
        >
          <v-card-title>
            <v-icon
                large
                left
            >
              mdi-clipboard-account
            </v-icon>
            <span class="title font-weight-light">{{ visitor.name }}</span>
          </v-card-title>
          {{ visitor.message }}
          <v-card-text class="headline font-weight-bold">
          </v-card-text>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row
                  align="center"
                  justify="end"
              >
                <v-icon class="mr-1">
                  mdi-clock-time-two-outline
                </v-icon>
                <span class="subheading mr-2">{{ new Date(visitor.time).toLocaleTimeString() }}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>
    <p :v-model="count" class="text-center">총 참석인원 : {{ this.count }}</p>
  </div>
</template>
<script>
import * as firebase from "firebase";

export default {
  data: () => ({
    name: '',
    message: '',
    attend: '',
    count: 0,
    visitors: []
  }),
  created() {
    this.read()
  },
  methods: {
    async read() {
      const sn = await firebase.default.firestore().collection('visitor').get();
      this.visitors = sn.docs.map(v => {
        const visitor = v.data();
        return {
          id: visitor.id,
          name: visitor.name,
          message: visitor.message,
          attend: visitor.attend,
          time: visitor.time
        }
      });
      this.visitors.forEach(v => {
        if (v.attend) {
          this.count = this.count + 1
        }
      })
    }
  }
}
</script>