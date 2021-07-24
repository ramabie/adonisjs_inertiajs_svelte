<script>
  export let users
</script>

<table class="table" border="1">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
  </tr>
	{#each users.data as user}
    <tr>
      <td>{user.id}</td>
      <td>{user.first_name} {user.last_name}</td>
      <td>{user.email}</td>
    </tr>
	{/each}
</table>


<style>
  .table {
    border: black 1px solid;
  }

</style>
