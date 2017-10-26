<template>
    <div>
        <h2> {{ message}} </h2>
        <div id="new-todo">
            <input type="text" @keyup.enter="addTodo" v-model="todoTitle" placeholder="what needs to be done?">
        </div>
        <ul>
            <todo-item v-for="(todo, index) in mytodos" :key="index + todo" :todoText="todo" v-on:completed="completed"></todo-item>
        </ul>
    </div>
</template>

<script>
    module.exports = require('./TodoComponent');
</script>

<style scoped>
h2 {
    text-align: center;
    margin: 0;
    color: rgba(175, 47, 47, 0.50);
    padding-bottom:20px;
    font-size: 22px;
}

#new-todo {
    text-align: center;
}

#new-todo input {
    padding: 16px 16px 16px 16px;
    border: 1px solid #d6d4d4;
    width: 300px;
}

ul{
    list-style: none;
}
</style>
