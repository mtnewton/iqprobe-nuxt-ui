<template>
  <div class="Header">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="#">IQProbe</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="isAuthenticated">
          <b-nav-item to="/dashboard">
            Dashboard
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="isAuthenticated" class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="logout" href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">
.Header {
  font-size: 1rem;
  .navbar {
    padding: 0.5rem 1rem;
  }
}
</style>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$auth.loggedIn
    },
    username() {
      return this.$auth.user.name
    }
  },
  methods: {
    logout() {
      this.$auth.reset()
    }
  }
}
</script>
