<template>
  <div class="page-wrapper">
    <div class="homepage-header">
      <div class="content-wrapper h-100">
        <div class="row h-100">
          <div class="col-6 d-flex align-items-center">
            <div>
              <h1>Leer mooie creaties maken met pro create</h1>
              <!-- <app-button class="mt-3 button" color="white">
                Naar berichten
              </app-button> -->
            </div>
          </div>
          <div class="col-6 h-100 pt-2 pb-5">
            <img class="mx-auto" src="images/test-img1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <stroke title="Creatief blog" data-aos="fade-in">
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
        <app-button @click="$router.push('/berichten')"
          >Naar de creatieve blog</app-button
        >
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
    return buildSeoHead();
  },
  name: "IndexPage",
  async asyncData({ $content }) {
    const blogs = await $content("blogs").sortBy("createdAt", "desc").fetch();
    return {
      blogs,
    };
  },
};
</script>

<style lang="scss">
.homepage-header {
  height: 550px;
  max-height: 80vh;
  background: #f0f8ff;
  border-radius: 0 0 40px 40px;

  h1 {
    font-size: 62px;
    font-weight: 600;
  }
}
</style>
