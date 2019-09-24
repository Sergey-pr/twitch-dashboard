import Vue from 'vue'
import Router from 'vue-router'
import Games from './views/Games.vue'
import TopStreams from './views/TopStreams.vue'
import GameStreams from './views/GameStreams.vue'
import Streams from './views/Streams.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'games',
      component: Games
    },
    {
      path: '/top-streams',
      name: 'top-streams',
      component: TopStreams
    },
    {
      path: '/games/:id',
      name: 'gameStreams',
      component: GameStreams
    },
    {
      path: '/streams/:streamname',
      name: 'streams',
      component: Streams
    }
  ]
})
