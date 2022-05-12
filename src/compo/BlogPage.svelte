<script>
    import { fade } from 'svelte/transition';

    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">

{#if visible}
<div class="blog-page-ctr" transition:fade>}
    <div class="coming-soon"> I'm a blog entry </div>
</div>
{/if}

<style>
    .blog-page-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .coming-soon {
        font-family: 'La Belle Aurore', cursive;
        font-size: 3em;
        margin-top: 1.5vh;
        color: var(--coffee);
    }
</style>