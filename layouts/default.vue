<template>
  <main>
    <div class="layout-wrapper">
      <div class="top-bar hide-sm w-100">
        <div class="d-flex content-wrapper align-items-center">
          <div class="logo">
            <NuxtLink to="/">
              <nuxt-img :src="$siteConfig.logo" quality="75" />
            </NuxtLink>
          </div>
          <div class="d-flex justify-content-end flex-grow-1">
            <main-navigation :menuItems="menu"></main-navigation>
          </div>
        </div>
      </div>
      <Nuxt />
      <mobile-navigation
        class="hide-md"
        :menuItems="menu"
        :menuIsOpen="menuIsOpen"
        @onMenuClick="toggleMenu"
        @onNavigate="menuIsOpen = false"
      ></mobile-navigation>
      <footer class="footer py-4">
        <div class="content-wrapper">
          <app-grid :columns="3">
            <div>
              <h3>Laatste berichten</h3>
              <ul class="footer__list">
                <li
                  v-for="article of articles"
                  :key="'footer-article-' + article.slug"
                >
                  <NuxtLink
                    :to="{
                      name: 'berichten-slug',
                      params: { slug: article.slug },
                    }"
                    >{{ article.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div>
              <h3>Categorieën</h3>
              <ul class="footer__list" v-if="categoryList.length">
                <li
                  v-for="(category, index) in categoryList"
                  :key="'footer-categorie-list' + index"
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
              <!-- <subscribe-to-newsletter
                :isColumn="true"
                title="Inschrijven voor de nieuwsbrief"
              >
              </subscribe-to-newsletter> -->
            </div>
          </app-grid>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
import { getCategoryList } from "../helpers/get-category-list";
export default {
  async fetch() {
    const categories = await this.$content("blogs")
      .only(["categories"])
      .fetch();
    this.categoryList = getCategoryList(categories);
    this.articles = await this.$content("blogs")
      .limit(3)
      .only(["title", "slug"])
      .fetch();
  },
  data($siteConfig) {
    return {
      menuIsOpen: false,
      articles: [],
      categoryList: [],
      menu: this.$siteConfig.mainMenu,
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-dark);
  color: white;
  h3 {
    margin-bottom: 16px;
  }
  &__list {
    padding: 0;
    li {
      & + li {
        margin-top: 10px;
      }
      margin-left: 16px;
    }
  }
}
.logo {
  width: 250px;
  img {
    max-height: 100%;
  }
}

.layout-wrapper {
  height: 100vh;
  grid-template-rows: auto 1fr;
  display: grid;

  @media only screen and (max-width: 767px) {
    padding-top: 60px;
  }
}

.top-bar {
  padding-top: 34px;
  padding-bottom: 24px;
}

.footer__list a {
  color: #adadad;
  &:hover {
    text-decoration: underline;
  }
}
</style>
