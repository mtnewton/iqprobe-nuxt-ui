<template>
  <div class="layout-wrapper">
    <Header class="header" />
    <div class="body-wrapper header-offset">
      <nuxt class="content" />
      <Footer class="footer" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped lang="scss">
.header-offset {
  margin-top: 3.5rem;
}
.body-wrapper {
  min-height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
  }
}
</style>
