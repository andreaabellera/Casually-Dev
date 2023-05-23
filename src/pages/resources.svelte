<script>
    import { fly, fade } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import resData from './content/resources.yml'

    // Get resources data
    let resources = resData.resources

    // Page transition
    let visible, indexVisible = false
    let visibles = new Array(resources.length)
    let currV = 0
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{
        if(!globalThis.isMobile) 
            indexVisible = true
            
        let id = setInterval(loadEntries, 100)
        function loadEntries() {
            visibles[currV] = true
            currV++
            if(currV == visibles.length) { clearInterval(id) }
        }
    }, 800)

</script>

{#if visible}
<div class="resources-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" aria-label="Resources route page content">
    {#if !globalThis.isMobile}
        <Heading title={"RESOURCES"} />
        <p><i> Kickstart your frontend web development journey or enhance your design workflow or toolbox with free online resources! </i></p>
    {/if}

    <div class="res-content">
        {#if indexVisible}
        <div id="res-index" role="region" aria-label="Index of dev resources" transition:fade>
            <div id="res-index-inner">
                <h2> Resources Index </h2>
            </div>
        </div>
        {/if}

        <div id="res-list" role="list" aria-label="Dev Resources">
        {#each resources as res, i}
            {#if visibles[i] && res}
                <div class="res-card" in:fly="{{ x: 500, duration: 600 }}" role="listitem">
                    {res.title}
                </div>
            {/if}
        {/each}
        </div>
    </div>

</div>
{/if}

<style>
    .resources-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .res-content{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    #res-index{
        background-color: var(--bark);
        color: var(--ink);
        height: max-content;
        min-height: 65vh;
        width: 25vw;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        margin: 3vh 0 3vh 6vw;
        overflow-y: hidden;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    #res-index-inner{
        height: 88%;
        width: 80%;
        margin: 1em 0 1em 0;
    }

    #res-list{
        width: 45vw;
        min-width: 45em;
        background-color: var(--bark);
    }

    @media (max-width: 700px) {
        #res-list{
            width: 100%;
            min-width: 100%;
        }
    }
</style>