<template>
  <div id="app">
    <the-header></the-header>
    <the-wrapper></the-wrapper>
  </div>
</template>

<script>
import { eventBus } from './main';

import TheHeader from './components/TheHeader';
import TheWrapper from './components/TheWrapper';


export default {
  name: 'app',
  components: {
    TheHeader,
    TheWrapper
  },
  data(){
    return {
      page: eventBus.page
    }
  },
  created(){
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  }
}
</script>

<style scoped>

</style>