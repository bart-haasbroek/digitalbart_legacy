<template>
  <header class="header" :class="{ 'is-big': isBig, 'header--image': !!image }">
    <div class="header__inner">
      <div
        class="header__title d-flex align-items-center content-wrapper"
        :class="'justify-content-' + titlePos"
      >
        <div class="text-center">
          <h1 v-if="title" class="mb-0">{{ title }}</h1>
          <slot></slot>
          <p v-if="payoffText" class="payoffText" v-html="payoffText"></p>
        </div>
      </div>
      <div
        v-if="$slots.headerBottom"
        class="header-bottom content-wrapper pb-2"
      >
        <slot name="headerBottom"></slot>
      </div>
      <div
        class="header__image"
        v-if="image"
        :style="{ opacity: imageOpacity }"
      >
        <nuxt-img
          :src="image"
          quality="60"
          alt="featured-image of the current page"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isBig: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    payoffText: {
      type: String,
      default: "",
    },
    titleLeft: {
      type: Boolean,
      default: false,
    },
    titlePosition: {
      type: String,
      default: "center",
    },
    image: {
      type: String,
      default: "",
    },
    imageOpacity: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      items: [
        {
          label: "Home",
          slug: "/",
          key: "home",
        },
        {
          label: "Blog",
          slug: "/blog",
          key: "blog",
        },
        {
          label: "spullen",
          slug: "/products",
          key: "spullen",
        },
      ],
    };
  },
  computed: {
    titlePos() {
      const posKeys = {
        center: "center",
        left: "start",
        right: "end",
      };
      const key = posKeys[this.titlePosition] ? this.titlePosition : "center";
      return posKeys[key];
    },
  },
};
</script>

<style lang="scss">
.header {
  position: relative;
  width: 100%;

  &--image {
    .header__title {
      padding-top: 30px;
    }
  }

  &__top {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  h1,
  h2 {
    color: #efefef;
  }

  &.is-big {
    .header__inner {
      height: 350px;
    }
  }

  &__inner {
    position: relative;
    border-radius: 0 0 40px 40px;
    background: aliceblue;
  }

  &__title {
    height: 100%;
    width: 100%;
    position: relative;
    // text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
    padding-bottom: 30px;

    @media only screen and (max-width: 767px) {
      padding-top: 30px;
    }

    h1 {
      color: var(--color-dark);
      font-size: 46px;
      line-height: 1.3;

      @media only screen and (max-width: 767px) {
        font-size: 30px;
      }
    }
  }

  .header-bottom {
    position: relative;
    z-index: 10;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      // background: var(--color-dark);
      width: 100%;
      height: 100%;
      opacity: 0.7;
    }
  }
}

@media screen and (max-width: 640px) {
  .header {
    &__top {
      padding-top: 10px;
      padding-bottom: 10px;
    }

    &__logo {
      width: 120px;
    }
  }
}
</style>
