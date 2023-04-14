<script>
    import { fade } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import EpicCover from './compo/EpicCover.svelte'
    import epicData from './content/epics.yml'

    export let adjust = "-8vh"
    if (globalThis.isMobile)
        adjust = "-20vh"

    let epics = epicData.epics
    let visible = false

    // Page transition
    let id1 = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

</script>

{#if visible}
<div class="epic-feat-ctr" style="margin-top:{adjust};" transition:fade>

    <div class="epic-heading">
        <Heading title={"CHOOSE EPIC"} />
    </div>

    <div id="epic-array">
    {#each epics as epic, i}
        <EpicCover
            id={epic.id}
            image={epic.image}
            title={epic.title}
            blurb={epic.blurb}
        />
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

