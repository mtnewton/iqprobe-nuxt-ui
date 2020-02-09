<template>
  <div class="container">
    <b-card class="mt-3" header="User Data">
      <pre class="m-0">{{ user }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$auth.user
    }
  }
}
</script>
