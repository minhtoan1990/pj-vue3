<template>
    <div class="footer">
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/posts">Post</router-link>
        <router-link to="/comments">Comments</router-link>
      </nav>
    </div>
  </template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss">
    .footer {
        nav {
            a {
                display: inline-block;
                margin:  0 10px;
                color: black;
            }
        }
    }
</style>
