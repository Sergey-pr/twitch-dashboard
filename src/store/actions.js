import Api from '@/components/Api'

export default {
  GET_GAMES: async (context, payload) => {
    const result = await Api.get('https://api.twitch.tv/helix/games/top?first=100&')
    context.commit('SET_GAME_PREVIEW', result.data.data)
  },
  GET_GAME_STREAMS: async (context, payload) => {
    const result = await Api.get(
      `https://api.twitch.tv/helix/streams?first=100&game_id=${
        payload
      }`)
    context.commit('SET_STREAM_PREVIEW', result.data.data)
  },
  GET_TOP_STREAMS: async (context, payload) => {
    const result = await Api.get('https://api.twitch.tv/helix/streams?first=100')
    context.commit('SET_STREAM_PREVIEW', result.data.data)
  }

}
