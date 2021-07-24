<script>
  import Pagination from "../Shared/Pagination.svelte";

  export let posts
</script>

<Pagination links={posts} />

<table class="table">
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Content</th>
    <th>Slug</th>
  </tr>
  {#each posts.data as post, i (post.id)}
    <tr>
      <td>{i+1}</td>
      <td>{post.title}</td>
      <td>{post.content}</td>
      <td>{post.slug}</td>
    </tr>
  {/each}
</table>



<style>
  .table {
    margin: auto;
    width: 80%;
    font-family: sans-serif;
    color: #232323;
    border-collapse: collapse;
}

.table, th, td {
    border: 1px solid #999;
    padding: 8px 20px;
}
</style>
