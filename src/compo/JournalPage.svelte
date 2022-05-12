<script>
    import { fade } from 'svelte/transition';

    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 1000)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    /*export let title = "Untitled Blog Post";
    export let date = "No date provided";
    export let blurb = "Cannot load blurb";*/
    export let title = "A sample journal post"
    export let date = "May 12, 2022"
    export let blurb = "Text generator lolo max princess tutu sesame seed Starbecks I want to be pilote and help everyoen tor lolo max princess tutu sesame seed Starbecks generator lolo max princess tutu sesame seed Starbecks I want to be pilote and help everyoen tor lolo max princess tutu sesame seed Starbecks generator lolo max princess tutu sesame seed Starbecks I want to be pilote and help everyoen tor lolo max princess tutu sesame seed Starbecks you reached the end"
</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">

{#if visible}
<div class="journal-page-ctr" transition:fade>
    <div class="journal-page-inner">
        <div class="journalTitle"> {title} </div>
        <div class="journalDate"> {date} </div>
        <p class="journalBlurb"> {blurb} </p>
    </div>
</div>
{/if}

<style>
    .journal-page-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        justify-items: center;
        margin: -8vh 0 10vh 0;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink)
    }

    .journal-page-inner {
        height: max-content;
        width: 90%;
    }

    .journalTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
    }

    .journalDate{
        font-size: 0.8em;
        margin: 1vh 0 1vh 0;
    }

    .journalBlurb{
        color: var(--ink);
        font-size: 0.9em;
    }
</style>