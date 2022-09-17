<template>
  <div class="blog-item" v-if="item">
    <div class="blog-item__image" v-if="item.image">
      <NuxtLink :to="{ name: 'berichten-slug', params: { slug: item.slug } }">
        <nuxt-img :src="item.image" quality="60" />
      </NuxtLink>
    </div>
    <div class="blog-item__inner">
      <div class="mb-2">
        <NuxtLink
          class="blog-item__category"
          v-for="(category, index) of item.categories"
          :key="'cat-' + index"
          :to="{
            name: 'categorie-slug',
            params: { slug: category.slug },
          }"
        >
          {{ category.title
          }}<template v-if="index < item.categories.length - 1">,</template>
        </NuxtLink>
      </div>
      <div class="blog-item__title">
        <h2>
          <NuxtLink
            :to="{ name: 'berichten-slug', params: { slug: item.slug } }"
            v-html="item.title"
          >
          </NuxtLink>
        </h2>
      </div>
      <div class="blog-item__summary">
        <p>{{ item.description }}</p>
      </div>
      <div class="blog-item__bottom">
        <NuxtLink :to="{ name: 'berichten-slug', params: { slug: item.slug } }">
          Lees meer
        </NuxtLink>
      </div>
    </div>
  </div>

  <!-- <template>
  <div class="blog-item" v-if="item">
    <div class="blog-item__inner">
      <div class="blog-item__title">
        <h2>
          <NuxtLink
            :to="{ name: 'berichten-slug', params: { slug: item.slug } }"
          >
            {{ item.title }}
          </NuxtLink>
        </h2>
      </div>
      <div class="blog-item__summary">
        <p></p>
      </div>
      <div class="blog-item__bottom">
        <NuxtLink :to="{ name: 'berichten-slug', params: { slug: item.slug } }">
          Lees meer
        </NuxtLink>
      </div>
    </div>
  </div>
</template> -->
</template>

<script>
export default {
  props: {
    item: undefined,
    slugName: {
      type: String,
      default: "berichten-slug",
    },
  },
};
</script>

<style lang="scss">
.blog-item {
  width: 100%;
  background: var(--color-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.4);

  &__title {
    margin: 14px 0 8px;

    h2 {
      font-size: 18px;
    }
  }

  &__inner {
    padding: 10px 22px 20px;
  }

  &__image {
    width: 100%;
    height: 200px;
    position: relative;

    a {
      position: relative;
      display: block;
      height: 100%;

      &:after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: var(--color-dark);
        opacity: 0.8;
        display: block;
        top: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  &__summary p {
    line-height: 22px;
    font-size: 14px;
  }

  &__bottom {
    margin-top: 8px;

    a {
      color: var(--color-primary);
      border-radius: 4px;
      font-weight: bold;
      font-size: 14px;
    }
  }
}
</style>
