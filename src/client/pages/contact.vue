<template>
  <div>
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  asyncData (context) {
    console.log(context);
    // return {
    //   name: req ? 'server' : 'client'
    // }
  },

  head() {
      return {
          title: 'Contact',
      }
  }

}
</script>
