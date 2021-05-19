<template>
  <div>
    <h1>Contact</h1>
    <h2>N'hésitez pas à me contacter</h2>
      <div class="card-back">
        <div class="text-center">
          <span class="icon ml-3 mr-3"><a href="https://www.linkedin.com/in/ard-hamard/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
          <span class="icon ml-3 mr-3"><a href="https://github.com/Antix09" target="_blank"><i class="fab fa-github"></i></a></span>
        </div>
        <form @submit.prevent="sendEmail" class="w-75 mx-auto card-back" novalidate>
          <div class="form-group">
            <label>Nom</label>
            <input type="text" v-model="name" name="name" class="form-control" placeholder="Votre nom">
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" v-model="email" name="email" class="form-control" placeholder="Votre mail">
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control" v-model="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" class="btn">Envoyer</button>
        </form>
      </div>
      
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';

  export default {

    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      sendEmail(e) {
        try {
          emailjs.sendForm('service_f7c6xu8', 'template_lsjhrws', e.target,
          'user_3UleQu94mlI2L07GEu7mc', {
            name: this.name,
            email: this.email,
            message: this.message
          })

        } catch(error) {
            console.log({error})
        }
        // Reset des champs
        this.name = ''
        this.email = ''
        this.message = ''
      },
    }
  }
</script>

<style scoped>
  .btn {
    color: white;
    background-color: #3867d6;
  }

  .icon {
    font-size: 3rem;
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }

  .icon:hover{
    opacity: 1;
  }
</style>
