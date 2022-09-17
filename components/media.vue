<template>
  <div class="media my-3">
    <div>
      <nuxt-img
        v-if="type === 'nuxt-image'"
        class="media__image"
        :src="src"
        quality="75"
      ></nuxt-img>
      <div v-if="caption" class="mt-1">{{ caption }}</div>
      <div v-if="type === 'video'">
        <div class="media__video-container">
          <iframe class="media__video" :src="src" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "nuxt-image",
    },
  },
};
</script>

<style lang="scss" scoped>
.media {
  &__image {
    padding: 20px;
    background: var(--color-primary);
    border-radius: 10px;
  }

  &__video-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  }

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
}
</style>
