<script>
    import { fly } from 'svelte/transition'
    import Heading from './compo/Heading.svelte'
    import Matcha from './compo/art/Matcha.svelte'

    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    // Content transition
    let visibleC = false
    let delay = 0
    let id2 = setInterval(loadContent, 500)
    function loadContent() {
        if(delay==1){
            visibleC = true
            clearInterval(id2)
        }
        else
            delay++
    }
</script>

{#if visible}
<div class="galerie-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
        <Heading title={"RESOURCES"} />
    {/if}

    {#if visibleC}
        <div class="galerie-inner" transition:fly="{{y:100, duration: 800}}">
            <Matcha />
            <div class="coming-soon"> Coming soon! </div>
        </div>
    {/if}
</div>
{/if}

<style>
    .galerie-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .galerie-inner {
        display: grid;
        width: 100%;
        align-items: center;
        justify-items: center;
        margin-top: -2vh;
        margin-bottom: 5vh;
    }

    .coming-soon {
        font-family: 'La Belle Aurore', cursive;
        font-size: 3em;
        margin-top: 1.5vh;
        color: var(--coffee);
    }
</style>
