<template>
  <div class="post">
    <div class="title">
      <strong>Title: </strong>
      {{ post.name }}
    </div>
    <div class="description">
      <strong>Description: </strong>
      {{ post.description }}
    </div>
    <div class="link">

      {{ post.link}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,

    }
  }
}
</script>

<style scoped>
.post {
  border: 2px solid teal;
  margin: 15px;
  background-color: #DCDCDC;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 220px;
  width: 320px;
  text-align: center;
}

.title {
  font-size: 22px;
  margin-bottom: 50px;
}

.description {
  font-size: 18px;
  margin-bottom: 50px;

}


</style>