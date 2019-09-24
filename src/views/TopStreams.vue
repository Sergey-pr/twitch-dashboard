<template>
  <div class="home-view-container">
    <h1>Top Streamers</h1>
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
        :title="stream.user_name"
        :img-src="stream.thumbnail_url"
        img-alt="Image"
        >
        <b-card-text>
          <h4>{{ gameName(GAMES, stream.game_id) }}</h4>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'top-streams',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'GAME_STREAMS',
      'GAMES'
    ])
  },
  mounted() {
    const gameId = this.$route.params.id
    this.$store.dispatch('GET_TOP_STREAMS', gameId)
    this.$store.dispatch('GET_GAMES')
  },
  methods: {
    gameName(games, game) {
      for (let i = 0; i < games.length; i++) {
        if (games[i]['id'] === game) {
          return games[i]['name']
        }
      }
    }
  }
}
</script>
