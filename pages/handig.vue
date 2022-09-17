<template>
  <div>handig</div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../helpers/build-seo-head";
export default Vue.extend({
  head() {
    return buildSeoHead();
  },
});
</script>
