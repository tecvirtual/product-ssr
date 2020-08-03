<template>
  <div class="container">
    <h2>Rooms products</h2>
   <b-list-group>
  <b-list-group-item v-for="(item, index) in rooms" :key="index">    
     <b-link :to="'/rooms/'+ item.id"> Habitación N°: {{ item.name }}</b-link>
  </b-list-group-item>
  
</b-list-group>
  </div>
</template>

<script>
export default {
  head() {
    return {
      'title' : 'Productos SSR'
    }
  },  
  data() {
    return {
      'rooms' : []
    }
  },
  async created() {
    const res = await this.$axios.get('/rooms')
    this.rooms = res.data
  },
  methods: {
    
  },
}
</script>

<style>

</style>
