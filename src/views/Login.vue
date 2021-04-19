<template>
  <h1 style="text-align:center">Statusite</h1>

  <div class="container">
    <h3 style="text-align:center; font-family:verdana; font-size:100%">Login and track your website's status!</h3>

    <form @submit="fetchUser" style="text-align:center" autocomplete="off" id="login">
      <label for= "email">Email:</label>
      <input type="text" v-model="login_form.email" id="email" name="email" placeholder="email" required><br>
      <label for= "password">Password:</label>
      <input type="password" v-model="login_form.password" id="password" name="password" placeholder="password" required><br>
      <input type="submit" value="Login" style="text-align:left; margin:auto"><br>
      <span class="LinkContainer-sc-1t58wcv-0 byHAoR">Don't have an account? Create one! <router-link to="/register">Register</router-link></span>
    </form>
  </div>
</template>

<script>
//import Registration from './Registration'
export default {
  name: 'Login',
  //components: {
    //Registration
  //},
  data() {
    return {
      login_form: {
        email: null,
        password: null
      },
      info: null
    }
  },

  methods: {
      async fetchUser(e) {
          await this.axios.get('http://localhost:8080/auth/signin', {
            headers: {
              'Content-Type' : 'application/json'
              },
            data: {
              email: this.login_form.email,
            password: this.login_form.password
            }
          })
          .then((result) => {
            console.warn(result)
          })
          .then((response) => {
            //this.returned.token = response.data.token;
            //console.warn(this.returned.token)
            console.warn(response)
            //alert('Logged in!', response);
            //this.$router.push('/dashboard')
          })
          e.preventDefault();
    }
  }
}
</script>

<style scoped>

input{
  border: 2px solid grey;
  border-radius: 20px;
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
  width: 20%;
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
  text-indent: 22.5%;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>
