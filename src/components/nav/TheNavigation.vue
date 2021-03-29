<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to = "/toDoList">TO DO LIST</router-link>
        </li>
        <li>
          <router-link to = "/budget">Budget</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
  methods: {
    
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #137e03;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #106703;
}
</style>