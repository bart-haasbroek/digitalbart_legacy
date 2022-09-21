<template>
  <div>handig</div>
</template>

<script>
import Vue from "vue";
import { buildSeoHead } from "../helpers/build-seo-head";
export default Vue.extend({
  head() {
    return buildSeoHead({
      title: "Digitalbart handig pagina",
      description: "Allerlei handige resources voor je creativiteit",
    });
  },
});
</script>
