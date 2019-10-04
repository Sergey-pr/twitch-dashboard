<template>
  <div class="home-view-container">
    <Search/>
    <b-container id="name-box" fluid>
      <b-row>
        <b-img
        rounded="circle"
        :src="USER.profile_image_url"
        fluid alt="Responsive image"
        >
        </b-img>
        <h1><b>{{ USER.display_name }}</b></h1>
      </b-row>
    </b-container>
    <hr>
    <b-container fluid>
      <b-row align-v="center">
        <b-col
        xl="9"
        lg="8"
        md="12">
          <b-embed
          type="iframe"
          aspect="16by9"
          :src="`https://player.twitch.tv/?channel=${streamName}`"
          allowfullscreen
          ></b-embed>
        </b-col>
        <b-col
        xl="3"
        lg="4"
        md="12">
          <b-embed
          type="iframe"
          aspect="9by16"
          :src="`https://www.twitch.tv/embed/${streamName}/chat?darkpopout`"
          ></b-embed>
        </b-col>
      </b-row>
    </b-container>
    <hr>
    {{ USER.description }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '@/components/Search.vue'

export default {
  name: 'streams',
  components: {
    Search
  },
  data() {
    return {
      streamName: this.$route.params.streamname
    }
  },
  computed: {
    ...mapGetters([
      'USER'
    ])
  },
  methods: {},
  mounted() {
    this.$store.dispatch('GET_USER_BY_LOGIN', this.streamName)
  }
}
</script>

<style scoped>
  .embed-responsive-9by16 {
    padding-bottom: 182%
  }
  .img-fluid {
    height: 45px
  }
  hr {
    border-top: 1px solid #6441a5
  }
  #name-box {
    margin-top: 20px
  }
</style>
