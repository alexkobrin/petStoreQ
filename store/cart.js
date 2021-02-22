export const state = () => ({
  petsList: [],
  cart: [],
  wishList: [],
  page: 1,
  isLoading: false
})
export const actions = {
  async fetchPets ({ commit }) {
    commit('IsLoading', true)
    await this.$axios.$get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
      .then(resp => (commit('addPetsList', resp)))
      .catch(err => (this.$toast('danger', `Oops something goes wrong. ${err.message}`)))
    commit('IsLoading', false)
  },
  async filterPets ({ commit }, status) {
    commit('IsLoading', true)
    await this.$axios.$get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`)
      .then(resp => (commit('filterBy', resp)))
      .catch(err => (this.$toast('danger', `Oops something goes wrong. ${err.message}`)))
    commit('IsLoading', false)
  },
  async createWishList ({ commit }) {
    await this.$axios({
      method: 'post',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      // Some fake data about user
      data: [{
        id: 0,
        username: 'string',
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        password: 'string',
        phone: 'string',
        userStatus: 0
      }]
    })
      .then((resp) => {
        commit('removeAllFromWishList')
        this.$toast('success', 'You created wish list')
      })
      .catch(err => (this.$toast('danger', `Oops something goes wrong. ${err.message}`)))
  },
  async buyPets ({ commit }, pet) {
    await this.$axios({
      method: 'post',
      url: 'https://petstore.swagger.io/v2/store/order',
      data: {
        id: 0,
        petId: 0,
        quantity: 0,
        shipDate: '2015-07-20T15:49:04-07:00',
        status: 'placed',
        complete: true
      }
    })
      .then((resp) => {
        this.$toast('success', 'You succesfully buy a new pet')
      })
      .catch(err => (this.$toast('danger', `Oops something goes wrong. ${err.message}`)))
    commit('removeFromCart', pet)
  },
  addToWishList ({ commit }, pet) {
    commit('ToWishList', pet)
    this.$toast('success', 'You succesfully added item to wish List')
  },
  deleteFromWishList ({ commit }, pet) {
    commit('removeFromWishList', pet)
    this.$toast('success', 'You succesfully remove item from wish List')
  },
  removeAllFromWishList ({ commit }) {
    commit('removeAllFromWishList')
    this.$toast('success', 'You succesfully deleted  all items from wish List')
  },
  addToCart ({ commit }, pet) {
    commit('ToCart', pet)
    this.$toast('success', 'You succesfully added item to cart')
  },
  deleteFromCart ({ commit }, pet) {
    commit('removeFromCart', pet)
    this.$toast('success', 'You succesfully remove item from cart')
  },
  removeAllCart ({ commit }) {
    commit('removeAllFromCart')
    this.$toast('success', 'You succesfully deleted  all items from cart')
  },
  pageNumb ({ commit }, num) {
    commit('pageNumber', num)
  }
}
export const mutations = {
  addPetsList (state, arr) {
    state.petsList = arr
  },
  filterBy (state, filterArr) {
    state.petsList = filterArr
  },
  ToWishList (state, pet) {
    if (!state.wishList.includes(pet)) {
      state.wishList.push(pet)
    }
  },
  removeFromWishList (state, pet) {
    const index = state.wishList.indexOf(pet)
    if (index > -1) {
      state.wishList.splice(index, 1)
    }
  },
  removeAllFromWishList (state) {
    state.wishList = []
  },
  removeFromCart (state, pet) {
    const index = state.cart.indexOf(pet)
    if (index > -1) {
      state.cart.splice(index, 1)
    }
  },
  removeAllFromCart (state) {
    state.cart = []
  },
  ToCart (state, pet) {
    if (!state.cart.includes(pet)) {
      state.cart.push(pet)
    }
  },
  pageNumber (state, num) {
    state.page = num
  },
  decrementPage (state) {
    if (state.page > 1) {
      state.page--
    }
  },
  incrementPage (state) {
    if (state.page < state.petsList.length) {
      state.page++
    }
  },
  IsLoading (state, status) {
    state.isLoading = status
  }
}

export const getters = {
  petsList: state => state.petsList,
  wishList: state => state.wishList,
  cart: state => state.cart,
  pageNumber: state => state.page,
  isLoading: state => state.isLoading
}
