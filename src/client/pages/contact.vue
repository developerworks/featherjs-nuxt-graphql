<template>
  <div>
    <h1>Contact</h1>
  </div>
</template>

<script>
export default {
  asyncData ({ req, isServer }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>
