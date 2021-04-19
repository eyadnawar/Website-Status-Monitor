<template>
  <div v-for="website in websites" :key="website.name">
      <Website @edit-website="$emit('edit-website', website.website_name, website.website_url)" @check-status="$emit('check-status', website.website_name)" @delete-website="$emit('delete-website', website.website_name)" :website= "website"/>
  </div>
</template>

<script>
import Website from './Website'
export default {
    name: 'Websites',
    props: {
        websites: Array
    },
    components: {
        Website
    },
    emits: ['delete-website', 'check-status', 'edit-website'],
}
</script>

<style>

</style>