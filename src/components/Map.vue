<template>
  <div id="map">
    <naver-maps
        :height="height"
        :mapOptions="mapOptions"
        :initLayers="initLayers"
        @load="onLoad">
      <naver-marker :lat="37.5935882" :lng="127.016650" @click="onMarkerClicked" @load="onMarkerLoaded"></naver-marker>
    </naver-maps>
  </div>

</template>
<script>
export default {
  name: 'Map',
  data() {
    return {
      height: 400,
      info: true,
      marker: null,
      count: 1,
      map: null,
      isCTT: false,

      mapOptions: {
        lat: 37.5935881,
        lng: 127.016650,
        zoom: 17,
        zoomControl: false,
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
    onMarkerLoaded(marker) {
      this.marker = marker;
      this.marker.setAnimation("BOUNCE");
    },
    onMarkerClicked(){
      window.open('about:blank').location.href = "https://map.naver.com/v5/search/%EC%95%84%EB%A6%AC%EB%9E%91%ED%9E%90%ED%98%B8%ED%85%94/place/37082113?c=14135638.1828914,4522520.9886634,13,0,0,0,dh&placePath=%3Fentry%253Dpll%2526";
    }
  }
}
</script>