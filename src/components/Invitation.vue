<template>
  <v-app>
    <v-app-bar
        app
        color="light-grey"
        height="80"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-spacer/>
      <Countdown/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-avatar
                class="mr-1"
                color="grey lighten-5"
                size="70"
            >
              <v-img
                  contain
                  max-height="100%"
                  src="https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/shortcut.png?raw=true"
              />
            </v-avatar>

            <v-toolbar-title class="font-weight-black headline">
              주혁이 생일잔치 초대장
            </v-toolbar-title>
          </v-list-item-title>
          <v-list-item-subtitle>
            2020년 10월 9일
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider/>
      <Menu/>
    </v-navigation-drawer>

    <v-main>
      <section id="carousel">
        <v-carousel id="home">
          <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </section>
      <section id="greeting">
        <v-container fill-height>
          <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
          >
            <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
            >
                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-black indigo--text mb-2"
                    >
                      주혁이의 돌잔치에
                    </span>

              <br>

              <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black indigo--text mt-2"
              >
                      초대합니다
                    </span>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="text-center">

          <v-responsive
              class="mx-auto mb-8"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
              class="mx-auto title font-weight-light mb-8"
              max-width="100%"
          >

            <v-avatar
                class="elevation-2"
                size="234"
            >
              <v-img
                  src="https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/avatar.jpg?raw=true"></v-img>
            </v-avatar>
            <v-divider class="mb-2 mt-10"></v-divider>
            <div class="text-center font-weight-bold">주혁이가 첫번째 생일을 맞습니다!</div>
            <v-divider class="mt-2 mb-10"></v-divider>
            <p class="text-center">
              안녕하세요, 귀하와 귀댁에 행복과 건강이 늘 함게하시길 기원합니다.<br/>
              항상 저희를 아껴주시고, 응원해 주시는 분들께 감사의 말씀을 드립니다.<br/>
              코로나 라는 어려운 상황속에 있지만, <br/>
              좋은날 소중한분들과 함께 하고 싶은 마음에<br/>
              무겁고 죄송한 마음으로 초대장을 보내드립니다.<br/>
              주혁이가 지혜롭고 따뜻한 아이로 자랄 수 있도록 <br/>
              부디 함께 자리하셔서 사랑과 축복을 나누어 주시기 바랍니다.</p>
          </v-responsive>
        </v-container>
      </section>
      <section
          id="features"
          class="grey lighten-3"
      >
        <v-container class="text-center">
          <v-row>
            <v-col
                v-for="({ icon, title, text }, i) in features"
                :key="i"
                cols="12"
                md="4"
            >
              <v-card
                  class="py-12 px-4"
                  color="grey lighten-5"
                  flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                        color="primary"
                        size="88"
                    >
                      <v-icon
                          large
                          v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                    class="justify-center font-weight-black"
                    v-text="title"
                ></v-card-title>

                <v-card-text
                    class="subtitle-1"
                    v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="map">
        <v-divider class="mt-5 mb-5"/>
        <h2 class="display-2 font-weight-bold mb-3 text-center">오시는 길</h2>
        <v-divider class="mt-5 mb-5"/>
        <Map/>
      </section>
      <div class="py-6"></div>
      <section id="attend">
        <v-container>
          <h1 class="display-1 font-weight-black mb-3 text-center">축하글 및 참석여부</h1>
          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"/>
            <v-divider/>
          </v-responsive>
          <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                  <v-text-field
                      v-model="name"
                      :rules="nameRules"
                      :counter="5"
                      label="*성함"
                      required
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                  <v-text-field
                      v-model="message"
                      :rules="messageRules"
                      :counter="50"
                      label="*축하메시지"
                      required
                  ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                  <v-checkbox
                      v-model="attend"
                      label="참석"
                      class="float-right"
                      required
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
            <v-btn
                class="mr-2 ml-16"
                @click="submit"
            >
              등록하기
            </v-btn>
            <v-btn @click="clear" class="ml-4">
              지우기
            </v-btn>
          </v-form>
        </v-container>
      </section>
      <div class="py-3"></div>
      <section id="messages">
        <Message/>
      </section>
      <div class="py-3"></div>
    </v-main>
    <v-footer
        class="justify-center"
        color="#292929"
        height="80"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        <Footer/>
      </div>

    </v-footer>
  </v-app>
</template>
<script>
import Map from '@/components/Map';
import Footer from "@/components/Footer";
import Countdown from "@/components/countdownTimer";
import Menu from "@/views/Menu";
import Message from "@/components/Message"

import * as firebase from "firebase";


export default {
  components: {
    Map,
    Footer,
    Countdown,
    Menu,
    Message
  },
  data() {
    return {
      beforeId: 0,
      id: 0,
      valid: false,
      name: '',
      message: '',
      nameRules: [
        v => !!v || '성함은 반드시 남겨주세요!',
        v => v.length <= 10 || '이름은 5글자 이내로 입력해주세요!',
      ],
      attend: '',
      messageRules: [
        v => !!v || '메시지 한줄 부탁드립니다 ^^',
        v => v.length <= 50 || '길게 남겨주셔서 감사하지만, 50글자 이내로 입력해주세요!',
      ],
      drawer: false,
      visitors: [],
      features: [
        {
          icon: 'mdi-calendar-month-outline',
          title: '일시',
          text: '2020년 10월 9일 (금)',
        },
        {
          icon: 'mdi-map-marker',
          title: '장소',
          text: '베스트웨스턴 아리랑힐 호텔 지하1층',
        }
      ],
      items: [
        {
          src: 'https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/slide_01.jpg?raw=true',
        },
        {
          src: 'https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/slide_02.jpg?raw=true',
        },
        {
          src: 'https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/slide_03.jpg?raw=true',
        },
        {
          src: 'https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/slide_04.jpg?raw=true',
        },
        {
          src: 'https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/slide_05.jpg?raw=true'
        }
      ]
    }
  },
  methods: {
    submit() {
      if (this.valid) {
        this.beforeId = this.beforeId + 1
        firebase.default.firestore().collection('visitor').add({
          id: this.beforeId,
          name: this.name,
          message: this.message,
          attend: this.attend,
          time: new Date().getTime()
        })
            .then(() => {
                  window.alert("등록되었습니다!")
                }
            ).finally(() => {
          location.reload();
        })
      }
    },
    clear() {
      this.name = ''
      this.message = ''
      this.attend = ''
    }
  }
};
</script>
