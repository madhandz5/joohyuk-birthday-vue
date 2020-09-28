<template>
  <div id="map">
    <naver-maps
        :height="height"
        :width="width"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad">
      <naver-info-window
          class="info-window"
          @load="onWindowLoad"
          :isOpen="info"
          :marker="marker">
      </naver-info-window>
      <naver-marker :lat="37.5935882" :lng="127.016650" @click="onMarkerClicked" @load="onMarkerLoaded"/>
    </naver-maps>
  </div>

</template>
<script>
export default {
  name: 'Map',
  data() {
    return {
      width: "100%",
      height: 400,
      info: true,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,

      mapOptions: {
        lat: 37.5935881,
        lng: 127.016650,
        zoom: 19,
        zoomControl: true,
        zoomControlOptions: {position: 'TOP_RIGHT'},
        mapTypeControl: true,
      },
      initLayers: ['BACKGROUND', 'BACKGROUND_DETAIL', 'POI_KOREAN', 'TRANSIT', 'ENGLISH', 'CHINESE', 'JAPANESE'],
    }
  },
  computed: {

  },
  methods: {
    onLoad(vue)
    {
      this.map = vue;
    },
    onMarkerLoaded(vue) {
      this.marker = vue.marker;
    },
    onMarkerClicked(){
      window.alert("clicked");
    }
  }
}
</script>