<template>
  <header class="top-bar js-top-bar top-bar__network _fixed" style=" font-size: 170%; font-family: vendara; background-color:blue; color:white; width:100%; margin:0px">Dashboard <span style="position:absolute; right:30px">Statusite</span></header>
  
  <div>
      <br>
      <p style="padding-left: 25px; left:30px">Welcome back! Here are the websites you are monitoring.</p>
  </div>
  <div>
        <button class="btn" id="add_website_button" @click="showAddWebsiteForm">Add Website</button><br><br>
        <br>
  </div>
  <div>
        <AddWebsite v-if="showAddWebsite" @remove-add-website-form="removeAddWebsiteForm" @add-website="addWebsite"/>
        <EditWebsite v-if="showEditWebsite" @remove-edit-website-form="removeEditWebsiteForm" @confirm-edit-website="confirmEditWebsite"/>
  </div>
  <div>
      <Websites @edit-website="editWebsite" @check-status="checkStatus" @delete-website="deleteWebsite" :websites= "websites" />
      <br>
  </div>
  <div>
      <br>
      <br>
      <router-link to="/"><button class="btn" style="left:30px; background-color: gray; border-radius: 20px">Logout</button></router-link> 
  </div>
</template>

<script>

import Websites from '../components/Websites'
import AddWebsite from '../components/AddWebsite'
import EditWebsite from '../components/EditWebsite'

export default {
    name: 'dashboard',
    components: {
        Websites,
        AddWebsite,
        EditWebsite
    },
    mounted() {

        this.axios.get('http://localhost:8080/url')
        .then((resp) => {
            console.warn(resp);
        })
    },
    
    emits: ['delete-website', 'check-status', 'add-website', 'edit-website'],

    data() {
        return {
            websites: [],
            showAddWebsite: false,
            showEditWebsite: false
        }
    },
    methods: {

        showAddWebsiteForm() {
            this.showAddWebsite = true
            this.showEditWebsite = false
        },

        removeAddWebsiteForm() {
            this.showAddWebsite = false
        },

        addWebsite(website) {
            this.websites = [...this.websites, website]
            this.showAddWebsite = false
        },
  
        removeEditWebsiteForm() {
            this.showEditWebsite = false
            this.showAddWebsite = false
            document.getElementById('add_website_button').disabled = false
        },

        editWebsite(name, url) {
            if(this.showAddWebsite === true)
                return
            else{
                this.showEditWebsite = true
                this.showAddWebsite = false
                document.getElementById('add_website_button').disabled = true
            }
        },

        confirmEditWebsite(editedWebsite) {
            this.websites = this.websites.map((website) => website.website_name === editedWebsite.old_website_name ? {website_name: editedWebsite.new_website_name, website_url: editedWebsite.new_website_url, website_status: editedWebsite.new_website_status} : website)
        },

        deleteWebsite(name){
            if(confirm('Are you sure you no longer want to monitor this website\'s status?')){
            this.websites = this.websites.filter((website) => website.website_name !== name)
            }
        },

        checkStatus(name){
            this.websites = this.websites.map((website) => website.website_name === name ? {...website, website_status: !website.website_status} : website)
        },
    },

   created() {
       this.websites = [
           {
               website_name: 'github',
               website_url: 'www.github.com',
               website_status: true
           },
           {
               website_name: 'facebook',
               website_url: 'www.facebook.com',
               website_status: false
           },
           {
               website_name: 'youtube',
               website_url: 'www.youtube.com',
               website_status: true
           }
       ]
   }
}
</script>

<style scoped>

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
}

div.absolute{
right: 40px;
}

header{
    padding: 30px;
    display: inline-block;
}
body{
margin-top: 0px;
margin-left: 0px;
margin-right: 0px;
margin-bottom: 0px;
}

h1{
    text-align: center;
    font-family: Verdana;
    font-size: 150%;
}

h3{
    display: inline-block;
    text-align: left;
    font-family: courier;
    font-size: 100%;
}

/*body {
  font-family: 'Poppins', sans-serif;
}*/
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  position: absolute;
  right: 30px;
  /*display: inline-block;*/
  background: green;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn:disabled {
  background: #999;
  color: #555;
  cursor: not-allowed;
}
</style>