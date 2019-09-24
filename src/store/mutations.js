export default {
  SET_GAME_PREVIEW: (state, payload) => {
    let finalArray = payload.map(game => {
      let newURL = game.box_art_url
        .replace('{width}', '300')
        .replace('{height}', '300')
      game.box_art_url = newURL
      return game
    })
    state.games = finalArray
  },
  SET_STREAM_PREVIEW: (state, payload) => {
    let finalArray = payload.map(stream => {
      let newURL = stream.thumbnail_url
        .replace('{width}', '426')
        .replace('{height}', '240')
      stream.thumbnail_url = newURL
      return stream
    })
    state.gameStreams = finalArray
  }
}
