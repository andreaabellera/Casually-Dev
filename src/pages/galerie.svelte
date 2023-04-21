<script>
    import { fly } from 'svelte/transition'
    import Heading from './compo/Heading.svelte'
    import Collection from './compo/Collection.svelte'
    import artData from './content/artifacts.yml'

    // Get blog data
    let collections = artData.collections
    
    // Page transition
    let visible = false
    let visibles = new Array(collections.length)
    let currV = 0

    setTimeout(()=>{ visible = true }, 300)
    let id = setInterval(loadEntries, 600)
    function loadEntries() {
        visibles[currV] = true
        currV++
        if(currV == visibles.length) { clearInterval(id) }
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
