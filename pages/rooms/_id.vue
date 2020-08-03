<template>
  <div class="container">
<br>

<div class="text-center" v-if="loading">
  <b-spinner label="Spinning"></b-spinner>
</div>

 <b-card v-else
    :title="'Habitación Número: ' + room.name"
    :img-src="room.image"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Se encuentra en el piso {{ room.floor }}
    </b-card-text>
    <strong>Precio: </strong> $ {{ room.capacity }}<br>

    <b-button href="#" variant="primary"> Agregar </b-button>
  </b-card>

  </div>
</template>

<script>
export default {
    head() {
        return {
            title : 'Numero de producto'
        }
    },
    data() {
        return {
            'room' : {},
            'loading' : true
        }
    },
    async created() {
        let id = this.$route.params.id
        const res = await this.$axios.get('/room/' + id)
        this.room = res.data
        this.loading = false
    },    
}
</script>

<style>

</style>