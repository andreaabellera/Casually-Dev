<script>
    import { url } from '@roxi/routify'
</script>

<div class="e404">
  <div class="huge">404</div>
  <div class="big gentiumBasic">Page not found. 
  <!-- link to the parent folder of _fallback.svelte -->
  <a href={$url('../')} class="gentiumBasic">Click here to go back</a>
  </div>
</div>

<style>
  .huge {
    font-size: 12rem;
    color: var(--coffee);
  }
  .e404 {
    margin-top: 9vh;
    margin-bottom: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--mocha);
  }
  a{
    text-decoration: underline;
    color: var(--passione);
  }
</style>
