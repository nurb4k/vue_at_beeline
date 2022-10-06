<template>
  <div class="content">
    <h1>Second page</h1>

    <div class="tabs">
      <button class="btn" :key="tab.id" v-for="tab in tabs" @click="currentTab = tab">
        {{ tab }}
      </button>
      <component
          :is="currentTab"></component>
    </div>

  </div>
</template>

<script>
import CounterClick from "@/components/CounterClick";
import TestForm from "@/components/TestForm";

export default {

  data() {
    return {

      tabs: ['CounterClick', 'TestForm'],
      currentTab: 'CounterClick'
    };
  },

  components: {
    CounterClick, TestForm
  }


}
</script>

<style scoped>
* {
  padding: 15px
}

.btn {

  align-self: flex-end;
  margin: 15px;
  width: 100px;
  height: 60px;
  text-align: center;
  padding: 10px;
  border: 2px solid teal;
  color: teal;
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>