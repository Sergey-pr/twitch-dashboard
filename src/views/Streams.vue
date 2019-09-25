<template>
  <div class="home-view-container">
    <Search/>
    <b-container fluid>
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
    <hr/>
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
        :src="`https://www.twitch.tv/embed/${streamName}/chat?darkpopout`"
        ></b-embed>
      </b-col>
    </b-row>
    <hr/>
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
  .embed-responsive {
    height: 100%
  }
  .img-fluid {
    height: 45px
  }
  hr {
    border-top: 1px solid #6441a5;
  }
</style>
