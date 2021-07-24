<script>

  // i want to use pagination like https://mauricius.dev/effective-pagination-in-adonisjs/
  //  but not reached

  export let posts
</script>

<br><br>
<div class="box">
  {#each posts.data as post, i (post.id)}
      <h3>{post.title}</h3>
      <small><i>{post.slug}</i></small>
      <p>{post.content}</p>
  {/each}
</div>

<style>
  .box {
    margin: auto;
    width: 80%;
  }
</style>
