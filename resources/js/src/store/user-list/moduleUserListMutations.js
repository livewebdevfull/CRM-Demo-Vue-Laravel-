/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  ADD_USER(state, item) {
    state.users.unshift(item)
  },
  SET_USERS(state, users) {
    state.users = users
  },
  UPDATE_USER(state, user) {
      const userIndex = state.users.findIndex((p) => p.id == user.id)
      Object.assign(state.users[userIndex], user)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.users.findIndex((p) => p.id == itemId)
      state.users.splice(ItemIndex, 1)
  },
}
