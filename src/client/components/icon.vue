<template>
    <div>
        <i :class="name"></i> &nbsp; <slot></slot>
    </div>
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