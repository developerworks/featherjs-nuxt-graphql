<template>
    <div class="layout">
        <Navbar />
        <main class="container content">
            <nuxt />
        </main>
        <MainFooter />
    </div>
</template>

<script>
    import Navbar from '~components/navbar';
    import MainFooter from '~components/footer';
    export default {
        components: {
            Navbar,
            MainFooter,
        }
    }
</script>

<style scoped>
    .layout {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .content {
        flex: 1;
        margin-top: 25px;
    }
</style>