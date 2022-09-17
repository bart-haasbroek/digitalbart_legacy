<template>
  <div class="page-wrapper">
    <page-header :title="'Creatief blog'"> </page-header>
    <div class="content-wrapper">
      <breadcrumbs></breadcrumbs>
      <app-grid partion="3-1">
        <app-grid>
          <blog-item
            v-for="(blog, index) in blogs"
            :item="blog"
            :key="'blog' + index"
          ></blog-item>
        </app-grid>
        <div>
          <h4 class="border-title">Categorieën</h4>
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
import { buildSeoHead } from "../../helpers/build-seo-head";
import { getCategoryList } from "../../helpers/get-category-list";
export default {
  name: "IndexPage",
  head() {
    return buildSeoHead();
  },
  async asyncData({ $content }) {
    const categories = await $content("blogs").only(["categories"]).fetch();
    const categoryList = getCategoryList(categories);

    const blogs = await $content("blogs").sortBy("createdAt", "desc").fetch();
    return {
      blogs,
      categoryList: categoryList,
    };
  },
};
</script>

<style lang="scss">
.category-link {
  padding: 3px 0;
  display: block;
}

.header-text {
  font-size: 18px;
  font-weight: 600;
}

.border-title {
  border-bottom: 1px solid;
  padding-bottom: 10px;
  margin-bottom: 5px;
}
</style>
