<template>
  <div>

    <button
        class="btn"
        @click="count += 1"
    >
      Click
    </button>
    <h3 style="margin-left: 60px">Count: {{ count }}</h3>

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {},
  watch: {
    count(newValue) {
      if(newValue >10){
          alert('Count greater than 10')
      }
    }
  }


}
</script>

<style scoped>
.btn {

  align-self: flex-end;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  text-align: center;
  padding: 10px;
  border: 2px solid red;
  color: red;
  font-size: 22px;
}
.btn:hover{
  background-color: beige;
}
</style>