export default ({ app }, inject) => {
  inject('toast', (variant = null, mesage) => {
    window.$nuxt.$bvToast.toast(`${mesage}`, {
      title: 'Success',
      solid: true,
      toaster: 'b-toaster-bottom-right',
      autoHideDelay: 2000,
      variant
    })
  })
}
