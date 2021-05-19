<template>
  <nav class="navbar navbar-dark navbar-expand-lg">
    <a class="navbar-brand text-light" @click="changePage('Profil')">
      Antoine Hamard
    </a>
    <button class="navbar-toggler" v-trigger-collapse="'collapse'">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="collapse" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Profil'}" @click="changePage('Profil')">À propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Formation'}" @click="changePage('Formation')">Formations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Experience'}" @click="changePage('Experience')">Projets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{ active: page === 'Contact'}" @click="changePage('Contact')">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      page: eventBus.page
    }
  },
  methods: {
    changePage(page) {
      eventBus.changePage(page);
    }
  },
  created() {
    eventBus.$on('update:page', (page) => {
      this.page = page;
    })
  },
  directives: {
    triggerCollapse: {
      inserted(el, binding) {
        window.addEventListener('click', () => {
          nav.classList.remove('show');
        })
        const nav = document.querySelector('#' + binding.value);
        el.addEventListener('click', (e) => {
          if (nav.classList.contains('show')) {
            nav.classList.remove('show');
          } else {
            nav.classList.add('show');
          }
          e.stopPropagation();
        })
      }
    }
  }
}

</script>

<style scoped>
  a {
      cursor: pointer;
    }

  img {
    border-radius: 50%;
  }

  nav {
    background-color: #3867d6;
  }
</style>
