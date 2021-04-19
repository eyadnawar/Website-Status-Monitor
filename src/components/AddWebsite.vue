<template>
  <form @submit="onSubmit" autocomplete="off">
      <label for="website_name" style="padding-left: 25px">Website Name:</label>
      <input type="text" v-model="website_name" name="website_name" id="website_name" placeholder="website name" size="20" required><br>
      <label for="website_url" style="padding-left: 25px">Website Url:</label>
      <input type="text" v-model="website_url" name="website_url" id="website_url" placeholder="website url" size="20" required><br>
      <input type="submit" value="Add"><button @click="onCancel()" style="width: 5%; padding: 9px 5px; border: none; border-radius: 10px; cursor: pointer; text-align: center; text-indent: 5%; margin-left: 45px; background-color: gray; color: black">Cancel</button><br>
  <br>
  </form>
</template>

<script>
export default {
    name: 'EditWebsite',
    data() {
        return {
            website_name: '',
            website_url: '',
        }
    },
    emits: ['add-website'],
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

            const newWebsite = {
                website_name: this.website_name,
                website_url: this.website_url,
                website_status: true
            }

            this.$emit('add-website', newWebsite)

            this.website_name = ''
            this.website_url = ''
        },
        
        onCancel() {
            this.$emit('remove-add-website-form')
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