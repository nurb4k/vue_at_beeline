<template>
  <div class="content">
    <form @submit.prevent>
      <h2>Create post</h2>
      <input class="input"
             required
             v-model="post.name"
             type="text"
             placeholder="Name">

      <input class="input"
             required
             v-model="post.description"
             type="text"
             placeholder="Description"
      >
      <input class="input"
             required
             v-model="post.link"
             type="text"
             placeholder="Link"
      >
      <button
          class="btn"
          type="submit"
          @click="checkForm"
      >Publish
      </button>
    </form>

  </div>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: '',
        description: '',
        link: '',
      }
    }
  },
  methods: {
    checkForm: function (e) {

      if (this.post.name !== '' && this.post.description !== '' && this.post.link !== '') {

        this.createPost();
      } else {
        alert('Input error')
      }
      e.preventDefault();
    },

    createPost() {
      this.post.id = Date.now();
      this.$emit('createPost', this.post) /* EVENT  */
      this.post = {

        title: '',
        body: '',

      }
    }
  }
}
</script>

<style scoped>
form {

  display: flex;
  flex-direction: column; /* Row - column | */
  justify-content: space-between;

  padding: 5px;

  width: 80%;

}

.input {
  padding: 10px;
  font-size: 15px;
  margin: 5px 0;
}

.content {

  display: flex;
  justify-content: center;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
  border: 2px solid teal;
  color: teal;
}

</style>