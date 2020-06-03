/*eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Preference from '../model/preference/Preference'

Vue.use(Vuex);


const state = {
    config : {
        mobile : false,
        showDrawer : true
    },
    // 当前版本消息
    versionName : '3.0.6',
    // 网站设置
    preference : new Preference()
}

const gettter = {
    getConfig(state) {
        return state.config
    }
}

const mutations = {}

const actions = {}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})