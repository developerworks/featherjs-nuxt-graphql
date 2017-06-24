<template>
    <span class="icon">
        <i :class="name"></i>
    </span>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
            }
        }
    }
</script>