import Api from '@/Api'

export default {
  GET_GAMES: async (context, payload) => {
    const result = await Api.get('https://api.twitch.tv/helix/games/top?first=100&')
    context.commit('SET_GAME_PREVIEW', result.data.data)
  },
  GET_GAME_STREAMS: async (context, payload) => {
    const result = await Api.get(
      `https://api.twitch.tv/helix/streams?first=100&${payload[0]}${payload[1] ? payload[1] : ''}`
    )
    context.commit('SET_STREAM_PREVIEW', result.data.data)
  },
  GET_TOP_STREAMS: async (context, payload) => {
    payload = payload ? '&language=' + payload : ''
    const result = await Api.get(
      `https://api.twitch.tv/helix/streams?first=100${payload}`
    )
    context.commit('SET_TOP_STREAM_PREVIEW', result.data.data)
  },
  GET_USER: async (context, payload) => {
    if (payload) {
      const result = await Api.get(`https://api.twitch.tv/helix/users?id=${payload}`)
      context.commit('SET_USER', result.data.data)
    }
  },
  GET_USER_BY_LOGIN: async (context, payload) => {
    if (payload) {
      const result = await Api.get(`https://api.twitch.tv/helix/users?login=${payload}`)
      context.commit('SET_USER', result.data.data)
    }
  },
  GET_SEARCH_GAME: async (context, payload) => {
    if (payload) {
      const result = await Api.get(`https://api.twitch.tv/helix/games?name=${payload}`)
      context.commit('SET_SEARCH_GAME', result.data.data)
    }
  },
  GET_SEARCH_CHANNEL: async (context, payload) => {
    if (payload) {
      const result = await Api.get(`https://api.twitch.tv/helix/users?login=${payload}`)
      context.commit('SET_SEARCH_CHANNEL', result.data.data)
    }
  }
}
