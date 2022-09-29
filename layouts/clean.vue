<template>
  <main>
    <div class="layout-wrapper">
      <Nuxt />
      <footer class="footer"></footer>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-dark);
  color: white;
  height: 30px;
}
</style>
