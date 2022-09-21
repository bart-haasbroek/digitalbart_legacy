<template>
  <div id="portfolio-container">
    <app-grid columns="3" grid-gap="16px">
      <a
        class="portfolio__item"
        :href="work.src"
        v-for="work in portfolioItems"
      >
        <img class="portfolio__item__thumb" :src="work.thumb" />
      </a>
    </app-grid>
  </div>
</template>

<script>
export default {
  props: {
    portfolioItems: undefined,
    required: true,
  },
  mounted() {
    const el = document.getElementById("portfolio-container");
    window.lightGallery(el, {
      selector: ".portfolio__item",
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio__item {
  border-radius: 12px;
  border: 4px solid #c5c6c7;
}
.portfolio__item__thumb {
  border-radius: 12px;
}
</style>
