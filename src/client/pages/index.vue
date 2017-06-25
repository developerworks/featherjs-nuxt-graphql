<template>

        <div class="box">

            <article v-for="i in 5" class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="http://placehold.it/128x128" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, ipsam.</strong> <small style="float:right;">31m</small>
                    <br>
                    <small>@johnsmith</small> 
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </div>
                <nav class="level">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>

            <hr>
            
            <nav class="pagination">
                <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
                <a class="pagination-next">Next page</a>
                <ul class="pagination-list">
                    <li>
                    <a class="pagination-link is-current">1</a>
                    </li>
                    <li>
                    <a class="pagination-link">2</a>
                    </li>
                    <li>
                    <a class="pagination-link">3</a>
                    </li>
                </ul>
            </nav>

            
        </div>

</template>

<script>
  import client from '~plugins/apollo';
  import gql from 'graphql-tag';

  export default {

    async asyncData({ store }) {

        let { data } = await client.query({
            query: gql`
                query {
                    allUsers {
                        name,
                        email
                    },

                    allTags {
                        name,
                        slug
                    }
                }
            `
        });

        store.commit('tags/set', data.allTags);

        //console.log(context);

        return {
          allUsers: data.allUsers,
        }
    },

  }
</script>