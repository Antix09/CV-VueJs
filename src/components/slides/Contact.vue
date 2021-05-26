<template>
  <div>
    <h1>Contact</h1>
    <h2>N'hésitez pas à me contacter</h2>
      <div class="card-back">
        <div class="text-center">
          <span class="icon ml-3 mr-3"><a href="https://www.linkedin.com/in/ard-hamard/" target="_blank"><i class="fab fa-linkedin"></i></a></span>
          <span class="icon ml-3 mr-3"><a href="https://github.com/Antix09" target="_blank"><i class="fab fa-github"></i></a></span>
        </div>
        <form @submit.prevent="submitForm" class="w-75 mx-auto card-back" novalidate>
          <div class="form-group">
            <label>Nom</label>
            <input v-model="name" type="text" name="name" placeholder="Votre nom" :class="{'form-control':true, 'is-invalid' : !validName(name) && nameTouched }" @blur="nameTouched = true">
            <div class="invalid-feedback">Un nom valide est requis.</div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="email" type="text" name="email" placeholder="Votre email" :class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailTouched }" @blur="emailTouched = true">
            <div class="invalid-feedback">Un email valide est requis.</div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea :class="{'form-control':true, 'is-invalid' : !validName(name) && messageTouched }" v-model="message" name="message" rows="4" @blur="messageTouched = true"></textarea>
            <div class="invalid-feedback">Un message est requis.</div>
          </div>
          <button type="submit" class="btn">Envoyer</button>
        </form>
      </div>
  </div>
</template>

<script>
  import emailjs from 'emailjs-com';
  import { service , template , user } from '../../configmail';

  export default {

    data() {
      return {
        name: '',
        email: '',
        message: '',
        emailTouched: false,
        nameTouched: false,
        messageTouched: false,
      }
    },
    methods: {
      validName (name) {
        return name.match(/^[a-z ,.'-]+$/i);
      },
      validEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
        return re.test(email.toLowerCase());
      },
      validForm(){
        this.emailTouched = this.nameTouched = this.messageTouched = true;
          if( this.validEmail(this.email) && this.validName(this.name)){
            return true;
          }
      },
      submitForm(e) {
        if (this.validForm()) {
          try {
            emailjs.sendForm( service, template, e.target,
            user, {
              name: this.name,
              email: this.email,
              message: this.message
            })

          } catch(error) {
            console.log({error})
          }
          


        } 
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

  @media screen and (max-width: 1050px)
      {
        .card-back {
          padding: 0;
        }
      }
</style>
