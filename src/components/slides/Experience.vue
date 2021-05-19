<template>
  <div>
    <h1>Experience</h1>
    <h2>Quelques projets</h2>
    <section class="d-flex flex-wrap justify-content-between card-back">
      <div class="container mb-5">
        <img src="../../assets/projets/cv_vuejs.jpg" alt="CV VueJs" width="250" height="250">
        <div class="overlay">CV en VueJs</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/boutique_vuejs.jpg" alt="App Boutique VueJs" width="250" height="250">
        <div class="overlay">App Boutique VueJs</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/todo_ES6.jpg" alt="ToDoList ES6" width="250" height="250">
        <div class="overlay">ToDoList en ES6</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/simon_vuejs.jpg" alt="JeuMemo VueJs" width="250" height="250">
        <div class="overlay">Jeu Memo en VueJs</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/snake_ES6.jpg" alt="Snake ES6" width="250" height="250">
        <div class="overlay">Jeu Snake en ES6</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/web_lumy.jpg" alt="Web LumyEvents" width="250" height="250">
        <div class="overlay">Web - LumyEvents</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/print_lumy.jpg" alt="Print LumyEvents" width="250" height="250">
        <div class="overlay">Print - LumyEvents</div>
      </div>
      <div class="container mb-5">
        <img src="../../assets/projets/logo_lumy.jpg" alt="Logo LumyEvents" width="250" height="250">
        <div class="overlay">Logo - LumyEvents</div>
      </div>
    </section>
  </div>
</template>

<script>
export default ({
  
})
</script>

<style scoped>
  img {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: block;
  }

  .container{
    width: 250px;
    height: 250px;
    position: relative;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.7);
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 1.1em;
    padding: 20px;
    text-align: center;
  }

  .container:hover .overlay {
    opacity: 1;
  }
</style>
