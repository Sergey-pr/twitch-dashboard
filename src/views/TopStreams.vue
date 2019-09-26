<template>
  <div class="home-view-container">
    <b-dropdown
    id="dropdown-1"
    :text="`Language: ${realLang}`"
    class="m-md-2"
    >
      <b-dropdown-item @click="changeLang('all')" v-if="lang !== 'all'">
        All
      </b-dropdown-item>
      <b-dropdown-item @click="changeLang('ru')" v-if="lang !== 'ru'">
        Russian
      </b-dropdown-item>
      <b-dropdown-item @click="changeLang('en')" v-if="lang !== 'en'">
        English
      </b-dropdown-item>
    </b-dropdown>
    <h1>Top 100 Streamers</h1>
    <Search/>
    <b-row>
      <b-col
      v-for="stream in GAME_TOP_STREAMS"
      :key="stream.id"
      xl="2"
      lg="3"
      md="4"
      sm="8"
      mt="5"
      >
        <b-card
        bg-variant="dark"
        text-variant="white"
        :title="stream.user_name"
        :img-src="stream.thumbnail_url"
        img-alt="Image"
        >
        <b-card-text>
          <p v-if="stream.game_id" class="gameName">
            {{ gameName(stream.game_id) }}
          </p>
          <h5>{{ stream.title }}</h5>
          <h6>Currently watching: {{ stream.viewer_count }}</h6>
        </b-card-text>
        <b-button
        @click="getUserName(stream.user_id)"
        variant="primary">
          {{ stream.user_name }} Stream
        </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '@/components/Search.vue'

export default {
  name: 'top-streams',
  components: {
    Search
  },
  data() {
    return {
      lang: 'all'
    }
  },
  computed: {
    ...mapGetters([
      'GAME_TOP_STREAMS',
      'GAMES',
      'USER'
    ]),
    realLang() {
      let langDict = {
        'all': 'All',
        'ru': 'Russian',
        'en': 'English'
      }
      return langDict[this.lang]
    }
  },
  created() {
    this.$store.dispatch('GET_GAMES')
    this.$store.dispatch('GET_TOP_STREAMS')
  },
  methods: {
    gameName(game) {
      if (this.GAMES) {
        for (let i = 0; i < this.GAMES.length; i++) {
          if (this.GAMES[i]['id'] === game) {
            return this.GAMES[i]['name']
          }
        }
      }
    },
    getUserName(userID) {
      this.$store.dispatch('GET_USER', userID)
        .then(() => {
          this.$router.push({
            path: `/streams/${this.USER.login}`
          })
        })
    },
    changeLang(langVar) {
      this.lang = langVar
      if (this.lang !== 'all') {
        this.$store.dispatch('GET_TOP_STREAMS', this.lang)
      } else {
        this.$store.dispatch('GET_TOP_STREAMS')
      }
    }
  }
}
</script>

<style scoped>
  .gameName {
    border: 1px solid #6441a5;
    border-radius: 25px;
    padding: 2px
  }
</style>