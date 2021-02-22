<template>
  <b-row class="filter">
    <b-col class="" center sm="7" cols="12">
      Check status of your favourite pet :
    </b-col>
    <b-col class="filter-button" sm="auto" cols="12">
      <b-button :class="{active: filterByStatus === 'avaliable'}" variant="outline-primary mr-2" @click="filterPetsBy('avaliable')">
        Avalible
      </b-button>
      <b-button :class="{active: filterByStatus === 'pending'}" variant="outline-primary mr-2" @click="filterPetsBy('pending')">
        Pending
      </b-button>
      <b-button :class="{active: filterByStatus === 'sold'}" variant="outline-primary " @click="filterPetsBy('sold')">
        Sold
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      filterByStatus: 'avaliable'
    }
  },
  methods: {
    filterPetsBy (status) {
      if (status === 'sold') {
        this.filterPets(status)
        this.filterByStatus = status
        this.pageNumb(1)
      } else if (status === 'pending') {
        this.filterPets(status)
        this.filterByStatus = status
        this.pageNumb(1)
      } else {
        this.fetchPets()
        this.pageNumb(1)
        this.filterByStatus = status
      }
    },
    ...mapActions({
      filterPets: 'cart/filterPets',
      fetchPets: 'cart/fetchPets',
      pageNumb: 'cart/pageNumb'
    })
  }
}
</script>

<style>
.filter {
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
box-shadow: 2px 2px 6px 6px  rgba(108,111,115,0.1);
border-radius: 4px;
background-color: #ffffff;
font-size: 20px;
padding: 15px 5px;
margin: 0 auto;
}
.filter-button {
  margin-top: 1rem;
}
</style>
