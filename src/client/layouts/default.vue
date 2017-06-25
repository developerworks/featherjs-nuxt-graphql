<template>
    <div class="layout">
        <Navbar />
        <section class="section main">
            <div class="container">

                <div class="columns">
                    <div class="column is-3">
                        <Sidebar />
                    </div>
                    <div class="column">
                        <nuxt />
                    </div>
                </div>

            </div>
        </section>
        <MainFooter />
    </div>
</template>

<script>
    import Navbar from '~components/navbar';
    import MainFooter from '~components/footer';
    import Sidebar from '~components/sidebar';
    export default {
        components: {
            Navbar,
            MainFooter,
            Sidebar,
        }
    }
</script>

<style scoped>
    .layout {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
    .main {
        flex: 1;
        
    }
</style>