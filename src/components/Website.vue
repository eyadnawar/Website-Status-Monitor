<template>
  <div class="task">
    <h3>{{ "Website Name: " + website.website_name }} <span>{{ "Website URL: " + website.website_url }}</span><span style="left: 900px">{{"Status: " + (website.website_status === true ? 'UP' : 'DOWN')}}</span><button @click="$emit('check-status', website.website_name)" style="position: absolute; right: 130px" class="btn">Check Status</button> <button @click="$emit('edit-website', website.website_name, website.website_url)" style="position: absolute; right: 40px" class="btn">Edit</button> <i @click="$emit('delete-website', website.website_name)" class="fas fa-times"></i></h3>
  </div>
</template>

<script>
export default {
    name: 'Website',
    props: {
        website: Object
    },
    emits: ['delete-website', 'check-status', 'edit-website'],
}
</script>

<style scoped>
.fas {
  color: red;
  cursor: pointer;
}

h3{
    font-family: 'Courier New', Courier, monospace;
    font-size: 100%;
}
span{
    position: absolute;
    left: 400px;
    color: rgb(32, 32, 32);
    font-family: 'Courier New', Courier, monospace;
    font-size: 100%;
}

.btn {
  position: absolute;
  right: 60px;
  /*display: inline-block;*/
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: text;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>