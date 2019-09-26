<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col cols="12" md="6">
        <b-form-input
          v-model="searchField"
          type="search"
          placeholder="Enter Game Name or Channel Name"
        ></b-form-input>
        <b-collapse
        v-if="SEARCH_CHANNEL && searchField"
        v-model="SEARCH_CHANNEL"
        id="collapse-1"
        class="mt-2"
        >
          <b-card
          id="search-card"
          :img-src="SEARCH_CHANNEL.profile_image_url"
          img-alt="Card image"
          img-left
          class="mb-3"
          bg-variant="dark"
          text-variant="white"
          >
            <router-link :to="`/streams/${this.SEARCH_CHANNEL.login}`">
              <b-card-text>
                <p>Channel: {{ SEARCH_CHANNEL.display_name }}</p>
              </b-card-text>
            </router-link>
          </b-card>
        </b-collapse>
        <b-collapse
        v-if="SEARCH_GAME && searchField"
        v-model="SEARCH_GAME"
        id="collapse-1"
        class="mt-2"
        >
          <b-card
          id="search-card"
          :img-src="SEARCH_GAME.box_art_url"
          img-alt="Card image"
          img-left
          class="mb-3"
          bg-variant="dark"
          text-variant="white"
          >
            <router-link :to="`/games/${SEARCH_GAME.id}`">
              <b-card-text>
                <p>Game: {{ SEARCH_GAME.name }}</p>
              </b-card-text>
            </router-link>
          </b-card>
        </b-collapse>
        <b-collapse
        v-if="games.length > 0 && searchField"
        v-model="games"
        id="collapse-1"
        class="mt-2"
        >
          <b-card
          v-for="game in games"
          :key="game.id"
          id="search-card"
          :img-src="game.box_art_url"
          img-alt="Card image"
          img-left
          class="mb-3"
          bg-variant="dark"
          text-variant="white"
          >
            <router-link :to="`/games/${game.id}`">
              <b-card-text>
                <p>Game: {{ game.name }}</p>
              </b-card-text>
            </router-link>
          </b-card>
        </b-collapse>
        <b-collapse
        v-if="channels.length > 0 && searchField"
        v-model="channels"
        id="collapse-1"
        class="mt-2"
        >
          <b-card
          v-for="channel in channels"
          :key="channel.id"
          id="search-card"
          :img-src="(channel.thumbnail_url)"
          img-alt="Card image"
          img-left
          class="mb-3"
          bg-variant="dark"
          text-variant="white"
          >
            <router-link :to="`/streams/${channel.user_name}`">
              <b-card-text>
                <p>Channel: {{ channel.user_name }}</p>
              </b-card-text>
            </router-link>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchField: null,
      games: [],
      channels: []
    }
  },
  computed: {
    ...mapGetters({
      SEARCH_CHANNEL: 'SEARCH_CHANNEL',
      SEARCH_GAME: 'SEARCH_GAME',
      SEARCH_GAMES: 'GAMES',
      SEARCH_STREAMS: 'GAME_STREAMS'
    })
  },
  watch: {
    searchField: function (newSearchField, oldSearchField) {
      this.debouncedGetAnswer()
    }
  },
  created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
      this.$store.dispatch('GET_GAMES')
      this.$store.dispatch('GET_TOP_STREAMS',[])
  },
  methods: {
    getAnswer() {
      this.$store.dispatch('GET_SEARCH_CHANNEL', this.searchField)
      this.$store.dispatch('GET_SEARCH_GAME', this.searchField)
      this.games = []
      this.channels = []
      if (this.searchField.length > 2) {
        this.SEARCH_GAMES.map((x) => {
          if (x.name.toLowerCase().includes(this.searchField.toLowerCase())) {
            this.games.push(x)
          }
        }),
        this.SEARCH_STREAMS.map((x) => {
          if (x.user_name.toLowerCase().includes(this.searchField.toLowerCase())) {
            this.channels.push(x)
          }
        })
      }
    }
  }
}

</script>

<style scoped lang="scss">
#search-card {
  height: 75px
}
.card-img-left {
  height: 75px
}
#search-desc {
  font-size: 14px;
}
.card-text {
  height: 110px;
  overflow: auto;
  color: #ffffff;
  &:link {
    color: #ffffff
  }
  &:hover {
    color: #aaaaaa
  }
  &:visited {
    color: #666666
  }
}
a{
  color: #aaaaaa
}
h3 {
  margin-top: 0px;
  padding-top: 0px
}

</style>