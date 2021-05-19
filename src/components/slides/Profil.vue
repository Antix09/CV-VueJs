<template>
  <div>
      <h1>Antoine Hamard</h1>
      <h2>Développeur web junior</h2>
      <section class="d-flex align-items-center card-back">
        <p>
          Bienvenue,<br/><br/>
          Actuellement en reconversion professionnelle, je suis à la recherche d’un emploi en tant que <span class="strong">développeur web junior</span>.<br/><br/>
          Après plusieurs années à travailler dans un autre secteur, j’ai décidé de changer de voie à la suite d’un accident en 2019. Cette longue période de convalescence m’a permis de renforcer mon caractère et de tester ma détermination. J’ai quitté mon travail en février 2020 et ai “profité” de la crise sanitaire survenue par la suite afin de <span class="strong">me former sur des technologies web et travailler sur divers projets en tant que freelance</span>.
          Vous trouverez sur ce site plus de détails sur mon parcours et les informations nécessaires pour <span class="strong">garder contact</span>.<br/><br/>
          Bonne visite<br/><br/>
          <span class="signature">Antoine</span>
        </p>
        <img src="../../assets/computer.jpg" alt="presentation">
      </section>
  </div>
</template>

<script>
export default ({
  
})
</script>

<style scoped>
  img {
    max-width: 35%;
    height: auto;
    margin-left: 60px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .signature {
    float: right;
    padding-right: 30px;
    font-family: 'Caveat', cursive;
    font-size: 1.5em;
  }

  .strong {
    font-weight: bold;
  }

  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

  @media screen and (max-width: 1200px)
    {
        img {
          display: none;
        }
    }

</style>
