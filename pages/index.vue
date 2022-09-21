<template>
  <div class="page-wrapper">
    <div class="homepage-header">
      <div class="content-wrapper h-100">
        <div class="row h-100">
          <div
            class="col-12 col-md-6 d-flex align-items-center homepage-header__text"
          >
            <div>
              <h1>Leer mooie creaties maken met pro create</h1>
              <!-- <app-button class="mt-3 button" color="white">
                Naar berichten
              </app-button> -->
            </div>
          </div>
          <div
            class="col-12 col-md-6 h-md-100 pt-2 d-flex align-items-center homepage-header__image"
          >
            <img class="mx-auto" src="images/home-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <stroke title="Laatste werk" data-aos="fade-in">
      <portfolio-items :portfolio-items="portfolio"></portfolio-items>
      <div class="text-center mt-4">
        <app-button @click="$router.push('/portfolio')">
          Bekijk al mijn werk
        </app-button>
      </div>
    </stroke>
    <stroke title="Creatief blog" data-aos="fade-in" :is-blue="true">
      <app-grid :columns="3">
        <blog-item
          v-for="(post, index) in blogs"
          :key="'blog' + index"
          :item="post"
          data-aos="fade-up"
          data-aos-offset="-250"
          :data-aos-delay="(index + 1) * 100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        ></blog-item>
      </app-grid>
      <div class="text-center mt-4">
        <app-button @click="$router.push('/berichten')">
          Naar de creatieve blog
        </app-button>
      </div>
    </stroke>
    <!-- <div class="content-wrapper">
      <app-grid columns="3">
        <blog-item
          v-for="(blog, index) in blogs"
          :item="blog"
          :key="'blog' + index"
        ></blog-item>
      </app-grid>
    </div> -->
  </div>
</template>

<script>
import { buildSeoHead } from "../helpers/build-seo-head";
export default {
  head() {
    return buildSeoHead({
      title: "Digitalbart homepagina",
      description: "Digitalbart portfolio website",
    });
  },
  name: "IndexPage",
  async asyncData({ $content }) {
    const blogs = await $content("blogs").sortBy("createdAt", "desc").fetch();
    const portfolio = await $content("portfolio").limit(3).fetch();
    return {
      blogs,
      portfolio,
    };
  },
};
</script>

<style lang="scss">
.homepage-header {
  height: 500px;
  max-height: 80vh;
  background: #f0f8ff;
  border-radius: 0 0 40px 40px;

  h1 {
    font-size: 62px;
    font-weight: 600;
    line-height: 78px;

    @media only screen and (max-width: 1024px) {
      font-size: 55px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 26px;
      line-height: 48px;
    }
  }

  @media only screen and (max-width: 767px) {
    height: auto;
    max-height: none;

    .homepage-header__text {
      order: 2;
      margin-bottom: 30px;
    }
    .homepage-header__image {
      height: 240px;
      padding: 0px 0;
      margin: 10px 0;
    }
  }
}
</style>
