<template>
  <form @submit="onSubmit" autocomplete="off">
      <label for="new_website_name" style="padding-left: 25px">Website Name:</label>
      <input type="text" v-model="new_website_name" name="new_website_name" id="new_website_name" placeholder="website name" size="20" required><br>
      <label for="new_website_url" style="padding-left: 25px">Website Url:</label>
      <input type="text" v-model="new_website_url" name="new_website_url" id="new_website_url" placeholder="website url" size="20" required><br>
      <input type="submit" value="Confirm"><button @click="onCancel()" style="width: 5%; padding: 9px 5px; border: none; border-radius: 10px; cursor: pointer; text-align: center; text-indent: 5%; margin-left: 45px; background-color: gray; color: black">Cancel</button><br>
  <br>
  </form>
</template>

<script>
import Website from './Website'
export default {
    name: 'EditWebsite',
    props: {
        website_name: String,
        website_url: String
    },
    data() {
        return {
            //old_website_name: website_name,
            //old_website_url: website_url,
            new_website_name: '',
            new_website_url: '',
        }
    },
    /*components: {
        Website
    },*/
    emits: ['edit-website'],
    methods: {
        onSubmit(e) {
            e.preventDefault()

            /*if(!this.website_name){
                alert('Please add a website name')
                return
            }else if(!this.website_url){
                alert('Please enter the website\'s url')
                return
            }*/

            const confirmEditWebsite = {
                old_website_name: this.website_name,
                old_website_url: this.website_url,
                new_website_name: this.new_website_name,
                new_website_url: this.new_website_url,
                new_website_status: true
            }

            this.$emit('confirm-edit-website', confirmEditWebsite)

            this.new_website_name = ''
            this.new_website_url = ''
        },
        
        onCancel() {
            this.$emit('remove-edit-website-form')
        }
    },
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

/*.container{
max-width: 350px;
margin: 30px auto;
min-height: 300px;
border: 3px solid steelblue;
padding: 30px;
border-radius: 5px;
}*/

/*div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}*/

input[type=text], select {
  width: 30%;
  padding: 12px 15px;
  /*margin: 8px 0;*/
  margin-left: 25px;
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
  width: 5%;
  background-color: #4CAF50;
  color: white;
  padding: 9px 5px;
  margin-left: 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  display: inline;
  text-align: center;
  text-indent: 5%;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>