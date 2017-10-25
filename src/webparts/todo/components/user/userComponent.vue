<template>
    <div>
        <h2> {{ message}} </h2>
        <div id="new-user">
            <select v-model="nationalityText">
                <option disabled value="">Please select one</option>
                <option v-for="nationality in nationalities" :value="nationality" :key="nationality" > {{nationality}} </option>
            </select>
            <input type="text" @keyup.enter="addUser" v-model="userTitle" placeholder="which user?">
        </div>
        <ul>
            <user-item v-for="(user, index) in myUsers" :key="index + user" :user="user"></user-item>
        </ul>
    </div>
</template>

<script>
    module.exports = require('./userComponent');
</script>

<style scoped>
h2 {
    text-align: center;
    margin: 0;
    color: rgba(175, 47, 47, 0.50);
    padding-bottom:20px;
    font-size: 22px;
}

#new-user {
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
