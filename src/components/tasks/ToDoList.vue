<template>
<div>
 <add-task></add-task>
 <task-list></task-list>

</div>
</template>

<script>

import AddTask from './AddTask.vue';
import TaskList from './TaskList.vue';

export default {
 
  components: {
    TaskList,
    AddTask
  }}; 
  </script>