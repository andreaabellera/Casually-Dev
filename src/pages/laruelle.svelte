<script>
    import { fly } from 'svelte/transition'
    import tlData from './content/timeline.yml'
    import Bulletin from './compo/Bulletin.svelte'
    import SaisonHeading from './compo/SaisonHeading.svelte'
    import Timeline from './compo/Timeline.svelte'

    // Get timeline data
    let timeline = tlData.timeline
    
    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 300)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    // Seasons
    let seasons = {
        fall: {r:158, g:66, b:0, bulletin: "rgba(255, 219, 219, 0.4)"},
        winter: {r:241, g:250, b:255, bulletin: "rgba(108, 166, 184, 0.4)"},
        summer: {r:221, g:192, b:148, bulletin: "rgba(184,144,108,0.4)"}
    }

    // Season effects
    $: currScroll = 0
    let currBG = {r:221, g:192, b:148}
    let bulletinColor = "rgba(184,144,108,0.4)"
    function scrollY(){
        let scroll = document.body.scrollTop
        currScroll = Math.floor(scroll/500)
        if(currScroll > timeline.length-1)
            currScroll = timeline.length-1
    }

    let idS
    let steps = 80
    let step = 0
    $: currSeason = timeline[currScroll].id.split('-')[0]
    $: if(currSeason == 'fall'){
        bulletinColor = seasons.fall.bulletin
        biomeChange(seasons.fall)
    }
    $: if(currSeason == 'winter'){
        bulletinColor = seasons.winter.bulletin
        biomeChange(seasons.winter)
    }
    $: if(currSeason == 'summer'){
        bulletinColor = seasons.summer.bulletin
        biomeChange(seasons.summer)
    }

    function biomeChange(destBG){
        step = 0
        clearInterval(idS)
        idS = setInterval(biomeStep, 40)
        function biomeStep(){
            step++
            if(step == steps){
                clearInterval(idS)
                currBG.r = destBG.r
                currBG.g = destBG.g
                currBG.b = destBG.b
                return
            }
            if(destBG.r > currBG.r)
                currBG.r = Math.floor(currBG.r + (destBG.r - currBG.r)/steps*step)
            else
                currBG.r = Math.floor(currBG.r - (currBG.r - destBG.r)/steps*step)
            
            if(destBG.g > currBG.g)
                currBG.g = Math.floor(currBG.g + (destBG.g - currBG.g)/steps*step)
            else
                currBG.g = Math.floor(currBG.g - (currBG.g - destBG.g)/steps*step)

            if(destBG.b > currBG.b)
                currBG.b = Math.floor(currBG.b + (destBG.b - currBG.b)/steps*step)
            else
                currBG.b = Math.floor(currBG.b - (currBG.b - destBG.b)/steps*step)
        }
    }

</script>

<svelte:body on:scroll={scrollY}></svelte:body>

<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
{#if visible}
<div class="laruelle-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" style="background:rgb({currBG.r},{currBG.g},{currBG.b});">
    {#each timeline as tl, i}
        {#if tl && currScroll == i}
            <div class="headCtr" in:fly="{{ x: -1000, duration: 600 }}" out:fly="{{ x: -1000, duration: 600 }}">
                <SaisonHeading seasonId={tl.id} />
            </div>
            <div class="bulletinCtr" in:fly="{{ x: 1000, duration: 600 }}" out:fly="{{ x: 1000, duration: 600 }}">
                <Bulletin title="{tl.title}" image="{tl.image}" milestones="{tl.milestones}" bgColor="{bulletinColor}"></Bulletin>
            </div>
            <div class="timelineCtr">
                <Timeline />
            </div>
        {/if}
    {/each}
</div>
{/if}

<style>
    .laruelle-ctr {
        /* height: max-content; */
        height: 6100px;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
        position: relative;
    }

    .bulletinCtr{
        position: fixed;
        z-index: 4;
        top: 28vh;
        right: 10vw;
        width: max-content;
        height: max-content;
    }

    .headCtr{
        position: fixed;
        z-index: 5;
        top: 8vh;
        left: 0;
        width: max-content;
        height: max-content;
    }

    .timelineCtr{
        position: absolute;
        z-index: 3;
        background-color: rgba(255,255,255,0.1);
        top: 0;
        left: 32vw;
        width: max-content;
        height: 6000px;
        border-radius: 2em;
        padding: 2em 1em 2em 1em;
        margin: 2em 0 2em 0;
        box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
    }

    @media (max-width: 600px) {
        .bulletinCtr{
            top: 18vh;
            right: 0;
        }

        .headCtr{
            top: 7vh;
        }

        .timelineCtr{
            left: 8vw;
            padding: 1em 0.5em 1em 0.5em;
            margin: 1em 0 1em 0;
        }
    }
</style>