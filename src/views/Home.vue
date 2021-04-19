<template>
  <body style="height: 754px; width: 100%; text-align: center; color: black"><br>
    <br>
    <br>
    <header>
      <h1></h1>
          <h2 style="color: black; margin-top: 185px ; font-size: 250%; font-family: verdana; text-align: center">Statusite<br></h2>
            <h3 style="foont-size: 150%; font-family: verdana; text-align: center;">The World's Premiere Website Tracking Service<br>Start Using Statusite Now! It's Free And Easy To Use!!</h3><br>
            <router-link to="/register"><button style="width: 5%; padding: 9px 5px; border: none; border-radius: 10px; cursor: pointer; text-align: center; text-indent: 5%; margin-left: -75px; background-color: white; color: black; position: absolute">Register</button></router-link> <router-link to="/dashboard"><button style="width: 5%; padding: 9px 5px; border: none; border-radius: 10px; cursor: pointer; text-align: center; text-indent: 5%; margin-left: 25px; background-color: white; color: black; position: absolute">Login</button></router-link>
    </header>    
  </body>
  <!--<header class="top-bar js-top-bar top-bar__network _fixed" style="height: 100%; text-align: center; font-size: 170%; font-family: vendara; background-color:blue; color:white; width:100%; margin:0px">Statusite</header>
    <body style="background-color: green; text-align: center; color: white">
      Statusite is the world's premium website tracker, and it's free!
    </body>
  <div class="footer" style="background-color: red; margin-top: 30px; color: white; text-align: center">Footer
  </div>
  <div style="background-color: green; color: red; height: 100%">
  </div>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Home extends Vue {}
</script>

<style>

body{
  background-color:thistle;
  margin: auto;
}
</style>