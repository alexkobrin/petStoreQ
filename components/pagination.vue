<template>
  <b-row>
    <div v-if="petsList.length > 12" class="pagination mx-auto">
      <ul class="pagination__list">
        <li class="mr-1">
          <span
            :class="activeLeftArrow"
            @click="decrementPage(pageNumber)"
          ><svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            class="svg-inline--fa fa-arrow-left fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          ><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" /></svg></span>
        </li>
        <li> Page {{ pageNumber }} of total pages {{ totalPages }}</li>
        <li class="ml-1">
          <span
            :class="activeRightArrow"
            @click="incrementPage(pageNumber)"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            ><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" /></svg></span>
        </li>
      </ul>
    </div>
  </b-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      petsList: 'cart/petsList',
      pageNumber: 'cart/pageNumber'
    }),
    activeLeftArrow () {
      return {
        'active-arrow': this.pageNumber > 1,
        'disabled-arrow': this.pageNumber === 1
      }
    },
    activeRightArrow () {
      return {
        'active-arrow': this.pageNumber >= 1 && this.pageNumber < this.petsList.length,
        'disabled-arrow': this.pageNumber === Math.ceil(this.petsList.length / 12)
      }
    },
    totalPages () {
      return Math.ceil(this.petsList.length / 12)
    }
  },
  methods: {
    ...mapActions({
      pageNumb: 'cart/pageNumb'
    }),
    ...mapMutations({
      decrementPage: 'cart/decrementPage',
      incrementPage: 'cart/incrementPage'
    })
  }
}
</script>

<style lang="scss">
    .pagination {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 120px;
        .pagination__list{
            li {
                display: inline-block;
              svg {
                  width: 16px;
                  height: 16px;
              }
            }
            span {
                font-size: 16px;
                margin-right: 6px;
                background-color: #fff ;
                display: flex;
                justify-content:center ;
                align-items: center;
                width: 50px;
                height: 40px;
                border-radius: 30px;
                border: none;
                color:#333;
                box-shadow: 0px 1px 2px 0px rgba(205, 214, 222, 0.75);
                cursor: pointer;
                &.active {
                    background-color: #0674ec;
                    color: #fff;
                }

                &.active-arrow {
                    color: #fff;
                    background-color:#7347c1;
                }
                &.disabled-arrow {
                    display: none;
                }
                }
                .lnr-arrow-left {
                    margin-right: 20px;
                }
                .lnr-arrow-right {
                    margin-left: 15px;
                    margin-right: 0;
                  }
            }

    }

</style>
