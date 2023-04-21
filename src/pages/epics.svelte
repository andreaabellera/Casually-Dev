<script>
    import { fly, fade } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import EpicCover from './compo/EpicCover.svelte'
    import epicData from './content/epics.yml'

    export let adjust = "-8vh"
    if (globalThis.isMobile)
        adjust = "-20vh"

    // Get epics data
    let epics = epicData.epics

    // Page transition
    let visible = false
    let visibles = new Array(epics.length)
    let currV = 0

    setTimeout(()=>{ visible = true }, 300)
    let id = setInterval(loadEntries, 800)
    function loadEntries() {
        visibles[currV] = true
        currV++
        if(currV == visibles.length) { clearInterval(id) }
    }

</script>

{#if visible}
<div class="epic-feat-ctr" style="margin-top:{adjust};" in:fly="{{ x: -300, duration: 600 }}" out:fade>

    <div class="epic-heading">
        <Heading title={"CHOOSE EPIC"} />
    </div>

    <div id="epic-array">
    {#each epics as epic}
        <div in:fly="{{ x: -1000, duration: 600 }}" out:fade>
            <EpicCover
                id={epic.id}
                image={epic.image}
                title={epic.title}
                blurb={epic.blurb}
            />
        </div>
    {/each}
    </div>
</div>
{/if}

<style>
    .epic-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    #epic-array{
        margin-top: -6vh;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    
    @media (max-width: 800px) {
        #epic-array{
            width: 100%;
            flex-direction: column;
        }
    }
</style>

