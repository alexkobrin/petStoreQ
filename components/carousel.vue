<template>
  <b-row class="my-4 px-3">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        img-src="~/static/slide/slide1.webp"
      />
      <b-carousel-slide img-src="~/static/slide/slide2.webp" />
      <b-carousel-slide img-src="~/static/slide/slide3.webp" />
    </b-carousel>
  </b-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
