export const state = () => ({
  
  singleDateData: {},
  events: [],
  prayers: [],
  music: [],
  katisashi: []
})

export const mutations = {
  SET_SINGLE_DATE_DATA(state, payload) {
    state.singleDateData = payload
  },

  SET_EVENTS(state, payload) {
    state.events = payload
  },
   
  SET_PRAYERS(state, payload) {
    state.prayers = payload
  },

  SET_MUSIC(state, payload) {
    state.music = payload
  },

  SET_KATISASHI(state, payload) {
    state.katisashi = payload
  } 
}

export const actions = {
  setSingleDateData: ({ commit }, payload) => commit('SET_SINGLE_DATE_DATA', payload),
  setEvents: ({ commit }, payload) => commit('SET_EVENTS', payload),
  setPrayers: ({ commit }, payload) => commit('SET_PRAYERS', payload),
  setMusic: ({ commit }, payload) => commit('SET_MUSIC', payload),
  setKatisashi: ({ commit }, payload) => commit('SET_KATISASHI', payload),
}

export const getters = {
  getSingleDateData(state) {
    return state.singleDateData
  },

  getEvents(state) {
    return state.events
  },

  getPrayers(state) {
    return state.prayers
  },

  getMusic(state) {
    return state.music
  },

  getKatisashi(state) {
    return state.katisashi
  }
}