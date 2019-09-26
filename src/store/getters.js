export default {
  GAMES: state => {
    return state.games
  },
  GAME_STREAMS: state => {
    return state.gameStreams
  },
  GAME_TOP_STREAMS: state => {
    return state.gameTopStreams
  },
  USER: state => {
    return state.user
  },
  SEARCH_CHANNEL: state => {
    return state.searchChannel
  },
  SEARCH_GAME: state => {
    return state.searchGame
  }
}
