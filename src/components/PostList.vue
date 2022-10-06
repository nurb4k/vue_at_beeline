<template>
  <div class="posts_card">
    <post-item
        v-for="post in posts"
        v-bind:post="post"
        :key="post.id"
    />
  </div>

</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },


}
</script>

<style scoped>
.posts_card{
 display: flex;
}

</style>