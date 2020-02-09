<template>
  <div class="container">
    <b-row align-h="center">
      <Login class="col-sm-10 col-md-8 col-lg-6 col-xl-4" />
    </b-row>
  </div>
</template>

<script>
import Login from '~/components/Login'
export default {
  auth: 'guest',
  components: {
    Login
  }
}
</script>

<style scoped lang="scss"></style>
