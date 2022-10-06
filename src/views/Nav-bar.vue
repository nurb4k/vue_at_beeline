<template>
  <div class="navbar">
    <div class="navbar__btns">
      <button class="btn" @click="$router.push('/')">Main page</button>
      <button class="btn" @click="$router.push('/second')">Second page</button>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.navbar {
  padding: 0 15px;
  align-items: center;
  height: 80px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;

}

.navbar__btns {
  margin-left: auto;
  display: flex;

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