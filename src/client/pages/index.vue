<template>
  <div>
    <h1>Welcome!</h1>
    <ul>
      <li v-for="user in allUsers">{{user.name}}</li>
    </ul>
    <nuxt-link to="/about">About page</nuxt-link>
  </div>
</template>

<script>
  import client from '~plugins/apollo';
  import gql from 'graphql-tag';

  export default {
    async asyncData() {
        let { data } = await client.query({
          query: gql`
            query {
              allUsers {
                name,
                email
              }
            }
          `
        })
        return {
          allUsers: data.allUsers
        }
    }

  }
</script>