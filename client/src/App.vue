<template>
  <PageHeader />
  <main id="main">
    <router-view></router-view>
  </main>
</template>

<script>
import PageHeader from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    PageHeader,
  },
};
</script>

<style>
#main {
  padding-top: 100px;
}
</style>
