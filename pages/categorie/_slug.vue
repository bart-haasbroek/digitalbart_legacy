<template>
  <div class="page-wrapper">
    <page-header :title="'Categorie: ' + categoryTitle"> </page-header>
    <div class="content-wrapper">
      <breadcrumbs :adjustments="breadCrumbsChanges"></breadcrumbs>
      <app-grid partion="3-1">
        <app-grid>
          <blog-item
            v-for="(blog, index) in articles"
            :item="blog"
            :key="'blog' + index"
          ></blog-item>
        </app-grid>
        <div>
          <h4 class="border-title">Andere categorieën</h4>
          <div class="category-list mb-3">
            <ul class="nav-list">
              <li
                v-for="(category, index) in categoryList"
                :key="'categorie-list' + index"
              >
                <NuxtLink
                  class="category-link"
                  :to="{
                    name: 'categorie-slug',
                    params: { slug: category.slug },
                  }"
                >
                  {{ category.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </app-grid>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../../helpers/build-seo-head";
import { getCategoryList } from "../../helpers/get-category-list";
export default Vue.extend({
  head() {
    return buildSeoHead();
  },
  computed: {
    breadCrumbsChanges() {
      return [
        {
          word: `categorie`,
          replace: "",
        },
      ];
    },
    categoryTitle() {
      const slug = this.$route.params.slug || "";
      const categorySlug = slug.charAt(0).toUpperCase() + slug.slice(1);
      return categorySlug.replace(/-/g, " ");
    },
  },
  async asyncData({ $content, params }) {
    const categorySlug = params.slug || "";
    const blogs = await $content("blogs").fetch();
    const categories = await $content("blogs").only(["categories"]).fetch();

    const allCategories = getCategoryList(categories);
    const categoryList = allCategories.filter(
      (category) => category.slug !== categorySlug
    );

    const articles = blogs.filter((article) => {
      if (!article["categories"]) {
        return false;
      }
      return article.categories.some((category) => {
        return category.slug === categorySlug;
      });
    });

    return {
      articles,
      categoryList,
    };
  },
});
</script>
