<template>

    <div class="">

        <!-- About -->
        <div class="box">
            <figure class="image is-128x128 image-center">
                <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" class="hvr-hollow" />
            </figure>
            <h4 class="has-text-centered">Admin</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
        </div>

        <!-- Tag Cloud -->
        <div class="box">
            <p class="title is-5">Tags</p>
            <span class="tag hvr-grow" v-for="tag in $store.state.tags.list">
                <nuxt-link :to="{ path: '/tags/' + tag.slug }">{{ tag.name }}</nuxt-link>
            </span>
        </div>
        
        
    </div>

</template>

<style lang="stylus" scoped>
    .tag {
        margin: 0 2px;
        padding-top: 3px;
        //background: rgb(100%, 98%, 80.4%);
        &:hover {
            background: #23d160;
            a {
                color: #fff;
            }
        }
    }
    .image-center {
        display: block;
        //text-align: center;
        margin: 0 auto; 
        margin-bottom: 10px;
    }
    .title {
        margin-bottom: 0.7rem;
    }
</style>