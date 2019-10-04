<template>
  <div class="home-view-container">
    <h1>Most Popular Games</h1>
    <Search/>
    <b-row>
      <b-col
      v-for="game in GAMES"
      :key="game.id"
      xl="2"
      lg="3"
      md="4"
      cols="6"
      >
        <b-card
        bg-variant="dark"
        text-variant="white"
        :img-src="game.box_art_url"
        img-alt="Image"
        >
        <b-button
        @click="$router.push({ path: `/games/${game.id}` })"
        variant="primary">
          {{ game.name }}
        </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Search from '@/components/Search.vue'

export default {
  name: 'games',
  components: {
    Search
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'GAMES'
    ])
  },
  created() {
    this.$store.dispatch('GET_GAMES')
  },
  methods: {}
}
</script>
