<template>
  <div>
    <h1 style="text-align: center">Main page</h1>
    <div>
      <post-form @createPost="createPost"/>
    </div>
    <div class="content">
      <post-list
          v-bind:posts="posts"
      />
    </div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  data() {
    return {
      posts: [
        {
          id: 1, name: 'JS',
          description: 'qweqwewq',
          link: 'https://www.google.com/',
        }
      ]
    }
  },
  components: {PostForm, PostList},
  methods: {
    createPost(post) {

      this.posts.push(post);
    }
  }

}
</script>

<style scoped>
* {
  padding: 15px
}


</style>