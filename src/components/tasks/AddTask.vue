<template>
  <div>
  <form  >
      <label for="name">Name:</label>
      <input type="text" name="name" v-model= "enteredName">
      <label for="desc">Details:</label>
      <textarea name="desc" id="desc" v-model= "enteredDescription"></textarea>
      <!--input type="submit" name="submit" value="Submit"  @click = "addNewTask"-->
  </form>
  <button @click = "addNewTask">Add</button>
  </div>
</template>

<script>
export default {
      data(){
          return{
              enteredName:'',
              enteredDescription:''
          };
      },
      methods:{
          addNewTask(){
            //this.$store.state.ArrTask.push({ name: this.enteredName, description: this.enteredDescription, status: 'start' });
          
            this.$store.commit('pushNewTask',{name:this.enteredName, description: this.enteredDescription})
          },
      }

}
</script>


<style scoped>
 div{
   list-style: none;
   display: flex;
   align-items: center;
   justify-content: center;
 }

 input, label,textarea {
           float: left;
           grid-column: 1 / 2;
          
      }
      form {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;}
</style>