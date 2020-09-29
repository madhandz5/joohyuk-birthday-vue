<template>
  <v-app>
    <v-app-bar
        app
        color="white"
        height="100"
    >
      <v-avatar
          class="mr-3"
          color="grey lighten-5"
          size="70"
      >
        <v-img
            contain
            max-height="100%"
            src="https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/shortcut.png?raw=true"
        ></v-img>
      </v-avatar>

      <v-toolbar-title class="font-weight-black headline">
        주혁이 첫번째 생일 초대장
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-carousel>
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
            <v-theme-provider dark>
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
                        class="font-weight-black indigo--text"
                    >
                      주혁이의 돌잔치에
                    </span>

                    <br>

                    <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                        class="font-weight-black indigo--text"
                    >
                      초대합니다.
                    </span>
                  </v-col>

<!--                  <v-btn-->
<!--                      class="align-self-end indigo"-->
<!--                      fab-->
<!--                      outlined-->
<!--                      @click="$vuetify.goTo('#about-me')"-->
<!--                  >-->
<!--                    <v-icon>mdi-chevron-double-down</v-icon>-->
<!--                  </v-btn>-->
                </v-row>
              </v-container>
            </v-theme-provider>
        </v-row>
      </section>
      <section id="about-me">
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
              <v-img src="https://github.com/madhandz5/joohyuk-birthday-vue/blob/master/src/assets/images/avatar.jpg?raw=true"></v-img>
            </v-avatar>

            <div>
            <span>
                <img alt="icon finder free icon"
                     src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/Party-Poppers-64.png"/>
              <span class="text-center font-weight-bold">주혁이가 첫번째 생일을 맞습니다!</span>
                <img alt="icon finder free icon"
                     src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack/110/Party-Poppers-64.png"/>
            </span>
            </div>
            <br>
            <hr>
            <br>
            <p class="text-left">
              안녕하세요, 귀하와 귀댁에 행복과 건강이 늘 함게하시길 기원합니다.<br/>
              항상 저희를 아껴주시고, 응원해 주시는 분들께 감사의 말씀을 드립니다.<br/>
              코로나 라는 어려운 상황속에 있지만, <br/>
              좋은날 소중한분들과 함께 하고 싶은 마음에<br/>
              무겁고 죄송한 마음으로 초대장을 보내드립니다.<br/>
              주혁이가 지혜롭고 따뜻한 아이로 자랄 수 있도록 <br/>
              부디 함께 자리하셔서 사랑과 축복을 나누어 주시기 바랍니다.</p>
          </v-responsive>
        </v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-center">오시는 길</h2>
        <Map/>
        <div class="py-12"></div>
      </section>
      <section
          id="features"
          class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

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
                    class="justify-center font-weight-black text-uppercase"
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

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                  v-for="[value, title] of stats"
                  :key="title"
                  cols="12"
                  md="3"
              >
                <div class="text-center">
                  <div
                      class="display-3 font-weight-black mb-4"
                      v-text="value"
                  ></div>

                  <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section id="blog">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
                v-for="({ src, text, title }, i) in articles"
                :key="i"
                cols="12"
                md="4"
            >
              <v-img
                  :src="src"
                  class="mb-4"
                  height="275"
                  max-width="100%"
              ></v-img>

              <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
              ></h3>

              <div
                  class="title font-weight-light mb-5"
                  v-text="text"
              ></div>

              <v-btn
                  class="ml-n4 font-weight-black"
                  text
              >
                Continue Reading
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <v-sheet
          id="contact"
          color="#333333"
          dark
          tag="section"
          tile
      >
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    flat
                    label="Name*"
                    solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    flat
                    label="Email*"
                    solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    flat
                    label="Subject*"
                    solo
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                    flat
                    label="Message*"
                    solo
                ></v-textarea>
              </v-col>

              <v-col
                  class="mx-auto"
                  cols="auto"
              >
                <v-btn
                    color="accent"
                    x-large
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-main>

    <v-footer
        class="justify-center"
        color="#292929"
        height="100"
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

export default {

  components: {
    Map,
    Footer
  },
  data() {
    return {
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Mobile first & Responsive',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Think outside the box',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Small changes, big difference',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
      ],
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Vibrant Community',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
        {
          icon: 'mdi-update',
          title: 'Frequent Updates',
          text: 'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Long-term Support',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam',
        },
      ],
      stats: [
        ['24k', 'Github Stars'],
        ['330+', 'Releases'],
        ['1m', 'Downloads/mo'],
        ['5m', 'Total Downloads'],
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
  }
};
</script>
