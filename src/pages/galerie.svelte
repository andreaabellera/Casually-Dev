<script>
    import { fly } from 'svelte/transition'
    import Heading from './compo/Heading.svelte'
    import Collection from './compo/Collection.svelte'
    import artData from './content/artifacts.yml'

    // Get blog data
    let collections = artData.collections
    let visibles = []
    for(let i=0; i < collections.length; i++)
        visibles.push(false)
    let visible = false

    // Page transition
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    // Collections transition
    let id2 = setInterval(loadEntries, 150)
    let delay = 0
    let currV = 0
    function loadEntries() {
        if(delay==5){
            visibles[currV] = true
            currV++

            if(currV == visibles.length)
                clearInterval(id2)
        }
        else
            delay++
    }

</script>

{#if visible}
<div class="galerie-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
        <Heading title={"GALLERY"} />
    {/if}

    <div id="collections-array">
        {#each collections as collection, i}
            {#if visibles[i] && collections}
                <div in:fly="{{ x: 500, duration: 600 }}">
                    <Collection 
                        title = {collection.title}
                        images = {collection.images}
                    />
                </div>
            {/if}
        {/each}
    </div>
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

</style>
