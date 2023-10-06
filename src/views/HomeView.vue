<script setup>
import Button from '../components/Button.vue';
import List from '../components/List.vue';

</script>

<template>
  <main>
    <h1 class="title">CRUDIER</h1>
    <div class="button-list">
      <Button text="Add new user" />
    </div>
    <Suspense>      
      <List />
    </Suspense>
  </main>
</template>

<style scoped>
  main {
    margin: auto;
    margin-top: 5em;
    max-width: 1040px;

    width: 90%;
  }
  .title {
    color: white;
    text-align: center;
    font-size: 36pt;
    
    margin-bottom: 0.3em;
    /* background-color: aqua; */

  }
</style>
