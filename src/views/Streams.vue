<template>
  <div class="home-view-container">
    <b-row class="justify-content-md-center">
      <b-col cols="9">
        <b-embed
        type="iframe"
        aspect="16by9"
        :src="`https://player.twitch.tv/?channel=${streamName}`"
        allowfullscreen
        ></b-embed>
      </b-col>
      <b-col cols="3">
        <b-embed
        type="iframe"
        aspect=""
        :src="`https://www.twitch.tv/embed/${streamName}/chat`"
        ></b-embed>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'streams',
  data() {
    return {
      streamName: this.$route.params.streamname
    }
  },
  computed: {},
  methods: {},
  mounted(){}
}
</script>


<style scoped>
  .embed-responsive {
    height: 100%
  }
</style>