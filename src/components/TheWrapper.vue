<template>
  <transition name="left" appear>
    <component :is="page" class="box"></component>
  </transition>
</template>

<script>
import { eventBus } from '../main';

import Profil from './slides/Profil';
import Formation from './slides/Formations';
import Experience from './slides/Experience';
import Contact from './slides/Contact';

export default {
  name: 'app',
  components: {
    Profil,
    Formation,
    Experience,
    Contact
  },
  data() {
    return {
      page: eventBus.page
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  }
}
</script>

<style>
  .box {
    width: 70%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
  }

  h1 {
    text-align: center;
    font-size: 3em;
    font-family: 'Rubik', sans-serif;
  }

  h2 {
    text-align: center;
    font-size: 1.5em;
    font-family: 'Rubik', sans-serif;
    color: #d1d8e0;
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 1.2em;
    font-family: 'Rubik', sans-serif;
  }

  body {
    text-align: justify;
    font-size: 1.1em;
    font-family: 'Roboto', sans-serif;
    background-image: url("../assets/triangle.png");
  }

  .blue {
    color: #3867d6;
  }

  .card-back {
    background-color: white;
    border-radius: 10px;
    padding: 40px;
  }

  
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Rubik&display=swap');

  @keyframes fromright {
    from {
      transform: translateX(30px);
    }
    to {}
  }

  .left-enter-active {
    animation: fromright 1s;
  }

  @media screen and (max-width: 1050px) {
    .box {
      width: 95%;
    }

    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }

    body {
      font-size: 1rem;
      line-height: 1.6rem;
    }

  }
</style>