<template>
  <div class="home-view-container">
    <h1>{{ gameNameVal }}</h1>
    Total Viewers: {{ totalViewersCount }}
    <b-dropdown id="dropdown-1" :text="`Language: ${lang}`" class="m-md-2">
      <b-dropdown-item v-if="lang !== 'all'">All</b-dropdown-item>
      <b-dropdown-item v-if="lang !== 'ru'">Russian</b-dropdown-item>
      <b-dropdown-item v-if="lang !== 'en'">English</b-dropdown-item>
    </b-dropdown>
    <b-row>
      <b-col
      v-for="stream in GAME_STREAMS"
      :key="stream.id"
      xl="2"
      lg="3"
      md="4"
      sm="8"
      mt="5">
        <b-card
        bg-variant="dark"
        text-variant="white"
        :title="stream.user_name"
        :img-src="stream.thumbnail_url"
        img-alt="Image"
        >
        <b-card-text>
          <h5>{{ stream.title }}</h5>
          <h6>Currently watching: {{ stream.viewer_count }}</h6>
        </b-card-text>
        <b-button @click="$router.push({ path: `/streams/${stream.user_name}` })" variant="primary">{{ stream.user_name }} Stream</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'gameStreams',
  data() {
    return {
      lang: 'all',
      totalViewersCount: 0,
      gameNameVal: null
    }
  },
  computed: {
    ...mapGetters([
      'GAME_STREAMS',
      'GAMES'
    ])
  },
  mounted() {
    const gameId = this.$route.params.id
    let payload = 'game_id=' + gameId
    this.$store.dispatch('GET_GAME_STREAMS', payload)
      .then(() => {
        this.totalViewers()
      })
    this.$store.dispatch('GET_GAMES')
      .then(() => {
        this.gameName()
      })
  },
  methods: {
    totalViewers() {
      this.totalViewersCount = this.GAME_STREAMS.reduce((acc, val) => {
        return acc + val.viewer_count
      }, 0)
    },
    gameName() {
      for (let i = 0; i < this.GAMES.length; i++) {
        if (this.GAMES[i]['id'] === this.$route.params.id) {
          this.gameNameVal = this.GAMES[i]['name']
        }
      }
    }
  }
}
</script>
