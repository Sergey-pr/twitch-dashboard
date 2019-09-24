<template>
  <div class="home-view-container">
    <h1>Most Popular Games</h1>
    <b-row>
      <b-col 
      v-for="game in GAMES"
      :key="game.id" 
      xl="2" 
      lg="3" 
      md="4" 
      sm="8" 
      mt="5">
        <b-card
        :img-src="game.box_art_url"
        img-alt="Image"
        >
        <b-button @click="$router.push({ path: `/games/${game.id}` })" variant="primary">{{ game.name }}</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'games',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'GAMES'
    ])
  },
  methods: {
  },
  mounted(){
    this.$store.dispatch('GET_GAMES')
}
}
</script>


