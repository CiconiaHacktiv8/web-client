<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="text-center">
        <h2>Post Your Item Request</h2>
      </div>
      <div class="form-group">
        <label for="inputTitle">Name of the item</label>
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          required
        />
      </div>
      <div class="form-group">
        <label for="inputPrice">Offered Price</label>
        <input
          type="number"
          class="form-control"
          id="inputPrice"
          placeholder="1000"
          required
        />
      </div>
      <div class="form-group">
        <label for="inputLocation">Location</label>
        <input
          type="text"
          class="form-control"
          id="inputLocation"
          placeholder="Singapore, SG"
          required
        />
      </div>
      <div class="form-group">
        <label for="itemImage">Item image</label>
        <b-form-file
        id="itemImage"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      </div>
      <div class="text-center form-group">
        <button type="submit" class="btn btn-primary">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  data () {
    return {
      file: null
    }
  },
  methods: {
    handleSubmit () {
      console.log('posting')
    }
  }
}
</script>

<style>
</style>
