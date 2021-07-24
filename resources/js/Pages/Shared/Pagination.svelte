<script>
  import { inertia } from '@inertiajs/inertia-svelte'

  export let links = []
</script>


coba

{console.log(links)}

{#each {length: (links.meta.last_page / 1000)} as n, i}
  {i}
{/each}
