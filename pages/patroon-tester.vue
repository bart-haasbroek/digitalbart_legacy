<template>
  <div
    class="patterns__container"
    :style="[
      currentPattern
        ? { backgroundImage: 'url(' + currentPattern.image + ')' }
        : '',
    ]"
  >
    <client-only>
      <aside
        v-if="patterns"
        class="patterns__sidebar"
        :class="{ 'is-visible': isSidebarVisible }"
      >
        <div class="patterns__sidebar__header">
          <div class="d-flex align-items-center">
            <NuxtLink to="/">
              <nuxt-img class="logo" :src="$siteConfig.logo" quality="75" />
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/"> <--Terug naar de website </NuxtLink>
          </div>
          <div>Uitleg</div>
        </div>
        <div class="patterns__upload">
          <label for="pattern-upload-input">Upload eigen patroon</label>
          <input
            type="file"
            id="pattern-upload-input"
            class="patterns__upload__input"
            @change="uploadImage"
          />
        </div>

        <div
          class="patterns__preview-button"
          v-for="pattern in patterns"
          :key="pattern.id"
          :style="{ backgroundImage: 'url(' + pattern.image + ')' }"
        >
          <button
            v-if="!currentPattern || currentPattern.id !== pattern.id"
            @click="changeBackground(pattern)"
          >
            Preview
          </button>

          <button v-else @click="resetPattern(pattern)">Reset</button>
          <button @click="removePattern(pattern.id)">Remove</button>
        </div>
      </aside>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "clean",
  computed: {
    ...mapGetters({
      patterns: "patterns/getPatterns",
      currentPattern: "patterns/getCurrentPattern",
    }),
  },
  data() {
    return {
      images: [],
      isSidebarVisible: true,
    };
  },
  created() {
    this.getPatterns();
  },
  methods: {
    changeBackground(pattern) {
      this.$store.commit("patterns/setCurrentPattern", pattern);
    },
    addPattern(pattern) {
      this.$store.commit("patterns/addPattern", pattern);
    },
    resetPattern(pattern) {
      this.$store.commit("patterns/resetCurrentPattern");
    },
    getPatterns() {
      if (process.browser) {
        this.$store.commit("patterns/getPatterns");
      }
    },
    removePattern(id) {
      this.$store.commit("patterns/removePattern", id);
    },
    uploadImage(event) {
      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        const previewImage = e.target.result;
        this.addPattern({ id: +new Date(), image: previewImage });
      };
    },
  },
};
</script>

<style lang="scss">
button {
  margin: 0;
  padding: 14px 20px;
  border-radius: 10px;
  border: none;
  font-size: 15px;
  background: white;
  &:focus {
    outline: none;
  }
}

.logo {
  width: 200px;
}

.patterns {
  &__container {
    min-height: 100vh;
    background-size: contain;
    position: relative;
  }

  &__sidebar {
    width: 20%;
    background: white;
    height: 100%;
    position: absolute;

    left: -20%;
    padding: 0 10px;
    transition: left 0.4s ease;

    &.is-visible {
      left: 0;
    }
    &__header {
      padding-top: 20px;
    }
  }
  &__upload {
    width: 100%;
    margin: 20px 0;
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
      width: 100%;
      border: 1px dashed #000;
      border-radius: 10px;
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  &__preview-button {
    border-radius: 10px;
    padding: 20px 10px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    margin-bottom: 20px;
    border: 1px solid var(--color-dark);
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
