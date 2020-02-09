<template>
  <div class="Login">
    <b-card class="mt-3" header="Login">
      <b-form @submit="onSubmit">
        <b-form-group label="Email:">
          <b-form-input
            v-model="form.username"
            type="email"
            required
            placeholder="Email Address"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password:">
          <b-form-input
            v-model="form.password"
            type="password"
            required
            placeholder="Password"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$auth.login({ data: this.form })
    }
  }
}
</script>
