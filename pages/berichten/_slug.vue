<template>
  <div class="page-wrapper">
    <page-header
      :image="article.image"
      :title="article.title"
      :imageOpacity="'0.6'"
    >
      <div>{{ currentDate }} - Bart Haasbroek</div>
      <template #headerBottom>
        <breadcrumbs></breadcrumbs>
      </template>
    </page-header>
    <div class="content-wrapper content-wrapper--narrow page-content py-3">
      <!-- <h2>{{ article.title }}</h2> -->
      <toc :toc="article.toc"></toc>
      <!-- <div>
        tags:
        <span v-for="(tag, index) in article.tags">
          <NuxtLink :to="{ name: 'tags-tag', params: { tag: tag } }">
            {{ tag
            }}<template v-if="index < article.tags.length - 1">,</template>
          </NuxtLink>
        </span>
      </div> -->
      <nuxt-content :document="article" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../../helpers/build-seo-head";
export default Vue.extend({
  head() {
    return buildSeoHead(this.article);
  },
  async asyncData({ $content, params }) {
    const article = await $content("blogs", params.slug).fetch();
    // console.log("article", article);

    return {
      article,
    };
  },
  computed: {
    currentDate() {
      const date = new Date(this.article.updatedAt);
      return new Intl.DateTimeFormat("nl-NL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    },
  },
});
</script>

<style lang="scss"></style>
