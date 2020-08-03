<template>
  <div class="container">
    <h2>Rooms products</h2>
   <b-list-group>

  <b-list-group-item v-for="(item, index) in rooms" :key="index">
    <a to=""> Habitación N°: {{ item.name }}</a>
  </b-list-group-item>
  
</b-list-group>
  </div>
</template>

<script>
export default {
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
