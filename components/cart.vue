<template>
  <div class="product__item-inner">
    <b-spinner v-if="isLoading" class="mx-auto spinner" variant="primary" />
    <div v-for="pet in arrayPets" v-else :key="`${pet.id + Math.random().toFixed(8)}`" class="product__item-inner-box">
      <img :src="require(`~/static/animal/${petImage(pet.name)}.png`)" alt="">
      <div class="product__item-box">
        <h3 class="product__item-title">
          {{ pet.name }}
        </h3>
        <div class="product__item-text">
          Status : {{ pet.status }}
        </div>
        <div class="product__item-action">
          <div class="product__item__icons" @click="addPetToWishList(pet)">
            <svg
              :class="{active : inWishList(pet) }"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="heart"
              class="svg-inline--fa fa-heart fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            ><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" /></svg>
          </div>
          <div class="product__item__icons icons-2" @click="addItemToCart(pet)">
            <svg
              :class="{active : inCart(pet) }"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 26 28"
            >
              <title>shopping-cart</title>
              <path
                d="M10 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM24 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM26 7v8c0 0.5-0.391 0.938-0.891 1l-16.312 1.906c0.078 0.359 0.203 0.719 0.203 1.094 0 0.359-0.219 0.688-0.375 1h14.375c0.547 0 1 0.453 1 1s-0.453 1-1 1h-16c-0.547 0-1-0.453-1-1 0-0.484 0.703-1.656 0.953-2.141l-2.766-12.859h-3.187c-0.547 0-1-0.453-1-1s0.453-1 1-1h4c1.047 0 1.078 1.25 1.234 2h18.766c0.547 0 1 0.453 1 1z"
              />
            </svg>
            <div v-if="inCart(pet)">
              <span :class="{activeCart : inCart(pet) }">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      cart: 'cart/cart',
      petsList: 'cart/petsList',
      pageNumber: 'cart/pageNumber',
      wishList: 'cart/wishList',
      isLoading: 'cart/isLoading'
    }),
    arrayPets () {
      const size = 12
      if (this.petsList.length <= 12) {
        return this.petsList
      } else {
        return this.petsList.slice((this.pageNumber - 1) * size, size * this.pageNumber)
      }
    }
  },
  mounted () {
    this.fetchPets()
  },
  methods: {
    ...mapActions({
      fetchPets: 'cart/fetchPets',
      filterPets: 'cart/filterPets',
      addToWishList: 'cart/addToWishList',
      addToCart: 'cart/addToCart',
      pageNumb: 'cart/pageNumb',
      deleteFromWishList: 'cart/deleteFromWishList',
      deleteFromCart: 'cart/deleteFromCart'
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
    addPetToWishList (pet) {
      if (this.wishList.includes(pet)) {
        this.deleteFromWishList(pet)
      } else {
        this.addToWishList(pet)
      }
    },
    addItemToCart (pet) {
      if (this.cart.includes(pet)) {
        this.deleteFromCart(pet)
      } else if (pet.status === 'sold') {
        this.$toast('danger', 'Sorry , this item is not available')
      } else {
        this.addToCart(pet)
      }
    },
    inWishList (pet) {
      return this.wishList.includes(pet)
    },
    inCart (pet) {
      return this.cart.includes(pet)
    }
  }
}
</script>

<style  lang="scss">
.product__item-inner  {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 20px;
    margin-left: -10px;
    .spinner {
      margin-top: 50px;
    }
    .spinner-border {
      width: 8rem;
      height: 8rem;
    }
  }
  .product__item-inner-box {
      width: 100%;
      box-shadow: 11px 6px 17px rgba(108, 111, 115,0.6 );
      border-radius: 4px;
      margin-bottom: 30px;
      min-width: 290px;
      -ms-flex-preferred-size: calc(33.333% - 30px);
      flex-basis: calc(33.333% - 10px);
      margin-left: 10px;
      text-align: center;
      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
    }
      .product__item-box {
          padding: 0 10px;
      }
          .product__item-title{
              padding: 15px 20px 10px
          }
          .product__item__icons {
           .active {
               color: red;
            }
          }
          .product__item__icons.icons-2 {
            position: relative;
              margin-left: 50px;
              .activeCart {
                display: block;
                position: absolute;
                width: 24px;
                height: 22px;
                border-radius: 50%;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                right: -11px;
                top: -8px;
                background-color: #0674ec;;
                color: #fff;
                line-height: 17px;
            }
          }
          .product__item-action {
              display: flex;
              justify-content: space-around;
              padding: 15px 20px 10px;
          }
</style>
