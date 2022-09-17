<template>
  <div class="page-wrapper">
    <page-header :title="'Over mij'"> </page-header>

    <div class="content-wrapper content-wrapper--narrow page-content text-big">
      <breadcrumbs></breadcrumbs>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
import { buildSeoHead } from "../helpers/build-seo-head";
export default {
  name: "aboutPage",
  head() {
    return buildSeoHead();
  },
  async asyncData({ $content }) {
    const page = await $content("pages", "over-mij")
      .sortBy("createdAt", "desc")
      .fetch();

    return {
      page,
    };
  },
};
</script>
