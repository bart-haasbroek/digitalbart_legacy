<template>
  <div class="page-wrapper">
    <page-header :title="'Portfolio'"> </page-header>

    <div class="content-wrapper content-wrapper--narrow page-content text-big">
      <breadcrumbs></breadcrumbs>
      <portfolio-items :portfolio-items="portfolio"></portfolio-items>
    </div>
  </div>
</template>

<script>
import { buildSeoHead } from "../helpers/build-seo-head";
export default {
  name: "PortfolioPage",
  head() {
    return buildSeoHead({
      title: "Portfolio pagina",
      description: "Mijn werk van digitalbart",
    });
  },
  async asyncData({ $content }) {
    const portfolio = await $content("portfolio").fetch();
    return {
      portfolio,
    };
  },
};
</script>
