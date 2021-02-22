<template>
  <div>
    <Carousel />
    <FilterPets />
    <Cart />
    <Pagination />
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  layout: 'header',
  data () {
    return {
      carouselOptions: {
        navButtons: true,
        dots: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false
            }
          }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    makeToast (append = false) {
      this.$bvToast.toast({
        title: 'BootstrapVue Toastxcvxvxvv',
        autoHideDelay: 3000,
        appendToast: append
      })
    }
  }
}
</script>
<style   lang="scss">

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 500px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.agile {
  &__dots {
      bottom: 10px;
      flex-direction: column;
      right: 30px;
      position: absolute;
    }
  &__dot {
      margin: 5px 0;
      }
  button  {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: .3s;
    width: 10px;
    }
}
.slide {
    display: block;
    object-fit: cover;
    width: 100%;
    img {
      max-width: 100%;
      width: 500px;
    }
    }
</style>
