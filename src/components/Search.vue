<template>
  <div>
    <b-form-input
      v-model="searchField"
      type="search"
      placeholder="Enter Game Name or Channel Name"
    ></b-form-input>
    <b-collapse
    v-if="SEARCH && searchField"
    v-model="SEARCH"
    id="collapse-1"
    class="mt-2"
    >
      <b-card
      id="search-card"
      :img-src="SEARCH.profile_image_url"
      img-alt="Card image"
      img-left
      class="mb-3"
      bg-variant="dark"
      text-variant="white"
      >
        <router-link :to="`/streams/${this.SEARCH.login}`">
          <b-card-text class="scrollbar">
            <h3>{{ SEARCH.display_name }}</h3>
            <span id="search-desc">{{ SEARCH.description }}</span>
          </b-card-text>
        </router-link>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      searchField: null
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH'
    ])
  },
  watch: {
    searchField: function (newSearchField, oldSearchField) {
      this.debouncedGetAnswer()
    }
  },
  created() {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer() {
      this.$store.dispatch('SEARCH_CHANNEL', this.searchField)
    }
  }
}

</script>

<style scoped lang="scss">
.form-control {
  width: 40%;
  margin-left: 30%
}
#search-card {
  width: 40%;
  margin-left: 30%;
  height: 150px
}
.card-img-left {
  height: 150px
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
.scrollbar::-webkit-scrollbar-track {
background-color: #343a40;
border-radius: 10px
}
.scrollbar::-webkit-scrollbar {
border-radius: 10px;
width: 4px;
background-color: #343a40
}
.scrollbar::-webkit-scrollbar-thumb {
border-radius: 10px;
background-color: #aa66cc
}
</style>