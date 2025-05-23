<script>
function makeError() {
    throw newEerror('oops');
}
</script>

<template>
    <div>
        <h1>Error on Demand</h1>

        <button @click="makeError">Make Error</button>
    </div>
</template>

<style>
</style>