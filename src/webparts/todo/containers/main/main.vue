<template>
    <div>
        <h1>{{message}}</h1>
          <ul>
             <li><router-link to="/">/Tasks</router-link></li>
             <li><router-link to="/users" exact>/Users)</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    module.exports = require('./main');
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 0;
    color: rgba(175, 47, 47, 0.15);
    font-size: 80px;
}

ul{
    list-style: none;
    display:inline-flex;
    padding: 20px;
}
li{
    padding: 20px;
}
</style>
