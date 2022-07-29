<script>
    import { fly } from 'svelte/transition'
    import tlData from './content/timeline.yml'
    import Bulletin from './compo/Bulletin.svelte'

    // Get timeline data
    let timeline = tlData.timeline
    /*let visibles = []
    for(let i=0; i < timeline.length; i++)
        visibles.push(false)*/
    
    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    $: currScroll = 0
    function scrollY(){
        let scroll = document.body.scrollTop
        currScroll = Math.floor(scroll/400)

    }

</script>

<svelte:body on:scroll={scrollY}></svelte:body>

<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
{#if visible}
<div class="laruelle-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#each timeline as tl, i}
        {#if tl && currScroll == i}
            <div class="bulletinCtr">
                <Bulletin title="{tl.title}" image="{tl.image}" milestones="{tl.milestones}"></Bulletin>
            </div>
        {/if}
    {/each}
</div>
{/if}

<style>
    .laruelle-ctr {
        /* height: max-content; */
        height: 3000px;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
        position: relative;
    }

    .bulletinCtr{
        position: fixed;
        top: 20vh;
        left: 15vw;
        width: max-content;
        height: max-content;
    }
</style>