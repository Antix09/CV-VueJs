<template>
  <div>
    <h1>Formation</h1>
    <h2>Mon parcours</h2>
    <section class="d-flex flex-column card-back">
      <div class="d-flex animate__animated animate__fadeInLeft mobile">
        <div class="d-flex flex-column mr-auto">
          <h3 class="mb-3">Dyma</h3>
          <div class="mb-5">Formations ES6 / VueJS / Git / NodeJS</div>
        </div>
        <div class="date">
          <span class="blue">Nov 2020 - Aujourd'hui</span>
        </div>
      </div>
      <div class="d-flex animate__animated animate__fadeInLeft animate__delay-1s mobile">
        <div class="d-flex flex-column mr-auto mt-4">
          <h3 class="mb-3">OpenClassrooms</h3>
          <div class="mb-5">Formations HTML5 / CSS3 / PHP &amp; MySQL</div>
        </div>
        <div class="date">
          <span class="blue">Juil 2020 - Oct 2021</span>
        </div>
      </div>
      <div class="d-flex animate__animated animate__fadeInLeft animate__delay-2s mobile">
        <div class="d-flex flex-column mr-auto mt-4">
          <h3 class="mb-3">UGC - Cité Internationale</h3>
          <div class="mb-5">Agent polyvalent et Assistant projection</div>
        </div>
        <div class="date">
          <span class="blue">Sep 2011 - Fév 2020</span>
        </div>
      </div>
      <div class="d-flex animate__animated animate__fadeInLeft animate__delay-3s mobile">
        <div class="d-flex flex-column mr-auto mt-4">
          <h3 class="mb-3">Master Conception et Intégration Multimédia</h3>
          <div class="mb-5">Université Lyon Lumière 2 - Parcours Direction Technique</div>
        </div>
        <div class="date">
          <span class="blue">Sep 2011 - Juil 2015</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default ({
  
})
</script>

<style scoped>
  .date {
    text-align: right;
  }

  @media screen and (max-width: 1050px)
      {
        .mobile {
          flex-direction: column;
        }

        body {
          font-size: 0.8em;
        }

        .date {
          text-align: left;
          margin-bottom: 2rem;
        }

        .mb-5 {
          margin-bottom: 1rem!important;
        }
      }

</style>
