<template>
  <div class="content">
    <label for="gender">Enter gender: </label>
    select

    <select name="" id="" v-model="userGender">
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <label for="age">Enter age:</label>
    <input v-model.lazy="userAge" type="number" name="age" id="age">

  </div>
</template>

<script>
export default {
  data() {
    return {
      userAge: "",
      userGender: "",
    };
  },
  watch: {
    userGender(value) {
      if (value === 'Female') {
        alert('Hi!,Mises')
      } else if (value === 'Male') {
        alert('Hi!,Mister')
      }

    },
    userAge(value){
      if (value < 16) {
        alert('Content hidden')
      }
    }

  },
  methods: {

  }

}
</script>

<style scoped>
* {
  padding: 30px;
}
</style>