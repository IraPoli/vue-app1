<template>
<div>
<ul>
<h1>start</h1>
<li v-for= "item in list.filter(el=>el.status =='start')"  :key="item.name" >{{item}}</li> 
</ul>
<ul>
 <h1>inProgress</h1>
  <li v-for= "item in list.filter(el=>el.status =='inProgress')"  :key="item.name" >{{item}}</li> 
</ul>
<ul>
 <h1>all</h1>
  <li v-for= "item in list"  :key="item.name" >{{item}}</li> 
</ul>
</div>
</template>

<script>
export default {
   
    computed:{
        list(){
            return this.$store.state.ArrTask
    }}
};
</script>
<style scoped>
ul {
   width:29%;
     margin:5px;
    
     display:inline-block;
     
}
</style>