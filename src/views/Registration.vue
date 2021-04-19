<template>
  <h1 style="text-align:center">Statusite</h1>

  <div class="container">
    <h3 style="text-align:center; font-family:verdana; font-size:100%">Sign up for free and start monitoring <br> your websites!</h3>

    <form @submit="userRegister" style="text-align:center" autocomplete="off" id="registration">
      <label for= "username">Username:</label>
      <input type="text" v-model="registration_form.username" id="username" name="username" placeholder="username" required><br>
      <label for= "email">Email:</label>
      <input type="text" v-model="registration_form.email" id="email" name="email" placeholder="email" required><br>
      <label for= "password">Password:</label>
      <input type="password" v-model="registration_form.password" id="password" name="password" placeholder="password" required><br>
      <label for= "confirm_password">Re-enter Password:</label>
      <input type="password" v-model="registration_form.confirm_password" id="confirm_password" name="confirm_password" placeholder="password" required><br>
      <input type="submit" value="Create Account" style="text-align:left; margin:auto"><br>
      <span class="LinkContainer-sc-1t58wcv-0 byHAoR">Already have an account? <router-link to="/login">Login</router-link></span>
    </form>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      registration_form: {
        username: null,
        email: null,
        password: null,
        confirm_password: null
      }
    }
  },
  methods: {
    userRegister(e) {
        if(this.registration_form.password === this.registration_form.confirm_password){
          this.axios.put('http://localhost:8080/auth/signup', this.registration_form)
          .then((result) => {
            console.log(result)
          })
          .then((response) => {
              alert('User successfully Registered!', response);
              this.$router.push('/login')
          })
          .catch((error) => {
            alert('A user with this name or email already exists.')
            this.registration_form.username = null,
            this.registration_form.email = null,
            this.registration_form.password = null,
            this.registration_form.confirm_password = null
        })
          e.preventDefault();
        }
        else {
          alert('passwords do not match')
        }
    }
  }
}
</script>

<style scoped>

input{
  border: 2px solid grey;
  border-radius: 3px;
  border-style: inset;
}

label{
  cursor: text;
  text-align: left;
  display: block;
}

.container{
max-width: 350px;
margin: 30px auto;
min-height: 300px;
border: 3px solid steelblue;
padding: 30px;
border-radius: 5px;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

input[type=text], select {
  width: 90%;
  padding: 12px 15px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
}

input[type=password], select {
  width: 90%;
  padding: 12px 15px;
  margin: 8px 0;
  display: block;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 40%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 0px;
  margin: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  text-align: center;
  text-indent: 17.5%;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
