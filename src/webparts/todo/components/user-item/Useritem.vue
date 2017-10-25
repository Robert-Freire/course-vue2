<template>
    <li>
        <div class="view">
            <label>{{user.name}}</label>
            ----
            <label>{{user.nationality}}</label>
        </div>
    </li>
</template>

<script>
    module.exports = require('./UserItem');
</script>

<style scoped>
    li {
        font-size: 20px;
    }
</style>
