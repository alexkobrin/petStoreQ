<template>
  <b-container fluid="xl">
    <b-row class="header">
      <div class="header-logo">
        <nuxt-link to="/">
          <img class="logo" src="../static/logo.png" alt="">
        </nuxt-link>
      </div>
      <div class="header-call">
        <div class="header-call__tel">
          +48 530-195-251
        </div>
        <div class="schedule-days__wrapper">
          <div class="schedule-days">
            Mon.-Fr:
          </div>
          <div class="schedule-values">
            8:00 - 18:00
          </div>
        </div>
        <div class="schedule-days__wrapper">
          <div class="schedule-days">
            Sat:
          </div>
          <div class="schedule-values">
            10:00 - 16:00
          </div>
        </div>
      </div>
      <div class="header-notification">
        <div v-b-toggle.wishList class="header-wishList">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="heart"
            class="svg-inline--fa fa-heart fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            color="red"
          ><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" /></svg>
          <b-collapse v-if="wishList.length" id="wishList" class="mt-2">
            <b-card>
              <div class="wishList-inner">
                <div v-for="pet in wishList" :key="pet.id" class="wishList-item">
                  <img class="petImage" :src="require(`~/static/animal/${petImage(pet.name)}.png`)" alt="">
                  <div class="wishList-info">
                    <h4> Name: {{ pet.name.substring(0,8) }}</h4>
                    <span> Status: {{ pet.status }}</span>
                  </div>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      width="10"
                      height="10"
                      data-icon="times-circle"
                      class="svg-inline--fa fa-times-circle fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      @click="deleteFromWishList(pet)"
                    ><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                  </div>
                </div>
              </div>
              <b-button block class="my-1" variant="danger" @click="removeAllFromWishList">
                Remove all
              </b-button>
              <b-button block variant="primary" @click="createWishList">
                Create wish list
              </b-button>
            </b-card>
          </b-collapse>
          <span v-if="wishList.length" class="header-wishList__number">{{ wishList.length }}</span>
        </div>
        <div v-b-toggle.cart class="header-cart">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-cart"
            class="svg-inline--fa fa-shopping-cart fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          ><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" /></svg>
          <b-collapse v-if="cart.length" id="cart" class="mt-2">
            <b-card>
              <div class="cart-inner">
                <div v-for="pet in cart" :key="pet.id" class="cart-item">
                  <img class="petImage" :src="require(`~/static/animal/${petImage(pet.name)}.png`)" alt="">
                  <div class="cart-info">
                    <p> Name: {{ pet.name }}</p>
                    <span> Status: {{ pet.status }}</span>
                  </div>
                  <div>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      width="10"
                      height="10"
                      data-icon="times-circle"
                      class="svg-inline--fa fa-times-circle fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      @click="deleteFromCart(pet)"
                    ><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" /></svg>
                  </div>
                </div>
              </div>
              <b-button v-b-modal.modalChekout block variant="primary">
                Check out
              </b-button>
              <b-button block class="my-1" variant="danger" @click="removeAllCart">
                Remove all
              </b-button>
            </b-card>
          </b-collapse>
          <span v-if="cart.length" class="header-cart__number">{{ cart.length }}</span>
        </div>
      </div>
      <b-modal id="modalChekout" hide-footer>
        <template #modal-title>
          Check out you cart
        </template>
        <div class="d-block text-center">
          <div v-for="pet in cart" :key="pet.id" class="cart-item">
            <img class="petImage" :src="require(`~/static/animal/${petImage(pet.name)}.png`)" alt="">
            <div class="cart-info">
              <h4> Name: {{ pet.name }}</h4>
              <span> Status: {{ pet.status }}</span>
            </div>
            <div class="button-modal">
              <b-button block variant="primary" class="mt-3" @click="buyNewPets(pet)">
                Buy
              </b-button>
              <b-button block variant="danger" class="mt-3" @click="checkoutDelete(pet)">
                Delete
              </b-button>
            </div>
          </div>
        </div>
      </b-modal>
    </b-row>
    <Nuxt />
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      petsList: 'cart/petsList',
      wishList: 'cart/wishList',
      cart: 'cart/cart'
    })
  },
  methods: {
    ...mapActions({
      removeAllFromWishList: 'cart/removeAllFromWishList',
      deleteFromWishList: 'cart/deleteFromWishList',
      deleteFromCart: 'cart/deleteFromCart',
      removeAllCart: 'cart/removeAllCart',
      createWishList: 'cart/createWishList',
      buyPets: 'cart/buyPets'
    }),
    petImage (image) {
      let res = ''
      switch (image) {
        case 'doggie':
          res = 'doggie'
          break
        case 'fish':
          res = 'fish'
          break
        case 'test':
          res = 'test'
          break
        case 'lion':
          res = 'lion'
          break
        default:
          res = 'default'
      }
      return res
    },
    checkoutDelete (pet) {
      this.deleteFromCart(pet)
      if (this.cart.length === 0) {
        this.$bvModal.hide('modalChekout')
      }
    },
    buyNewPets (pet) {
      if (this.cart.length === 1) {
        this.$bvModal.hide('modalChekout')
      }
      this.buyPets(pet)
    }
  }
}
</script>
<style lang="scss">
.header {
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.header-logo {
   height: 100%;
    .logo {
      width: 80px;
      height: 80px;
    }
}
.header-notification {
  position: relative;
   max-width: 150px;
   width: 100%;
   display: flex;
   justify-content: space-between;
}
.header-call {
  max-width: 180px;
  width: 100%;
  text-align: center;
  .schedule-days__wrapper {
    width: 100%;
    display: flex;
    color: #9e9e9e;
  .schedule-days {
    max-width: 70px;
    width: 100%;
    text-align: right;
    margin-right: 0.5rem;
  }
  .schedule-values {
     width: 100%;
    text-align: right;
  }
  }
}
#wishList,
#cart {
  position: absolute;
  top: 30px;
  right: 35px;
  max-width: 500px;
  min-width: 350px;
  height: auto;
  z-index: 16;
  }
  .header-wishList  {
  min-height: 100%;
  max-width: 60px;
  }
  svg {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .header-cart,
  .header-wishList {
    display: block;
    position: relative;
     max-width: 60px;
     width: 100%;
  }
     .header-cart__number,
     .header-wishList__number {
     position: absolute;
      width: 24px;
      height: 22px;
      border-radius: 50%;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      right: 13px;
      top: -13px;
      background-color: #0674ec;;
      color: #fff;
      line-height: 17px;
     }
     .wishList-item,
     .cart-item {
       display: flex;
       justify-content: space-between;
       flex-wrap: wrap;
       align-items: center;
       margin-bottom: 1.5rem;
       height: 100px;
       .petImage {
                width: 80px;
                height: 80px;
                object-fit: cover;
              }
     }
     .card-body {
    padding: .5rem;
     }
</style>
