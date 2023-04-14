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

    // Get time interval for date to scroll binding
    let today = new Date();
    let earliest = new Date("09/01/2019");
    let diffTime = today.getTime() - earliest.getTime();
    let diffDay = diffTime / (1000 * 3600 * 24);
    let currDate

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

        // Get the date bound to the current scroll position
        let scrollRate = (scroll/6500)
        currDate = new Date(earliest.getTime() + (diffTime * scrollRate))
        //console.log(currDate.toLocaleDateString())
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

    function loadThis(){
        let laRuelle = document.getElementsByClassName("laruelle-ctr")[0]
        if (laRuelle)
            laRuelle.style.display = "grid"

        const duration = 1200;

		return {
			duration,
			tick: t => {
                laRuelle.style.opacity = t
            },
            done: t => void 0,
		};
    }

    function removeThis(){
        let laRuelle = document.getElementsByClassName("laruelle-ctr")[0]
        if (laRuelle)
            laRuelle.style.display = "none"
        const duration = 400;

		return {
			duration,
			tick: t => {
                laRuelle.style.opacity = 1 - t
            },
            done: t => void 0,
		};
    }

    let barTitle = ""
    function handleInput(event){
        barTitle = event.detail.text;
    }

</script>

<svelte:body on:scroll={scrollY}></svelte:body>

{#if visible}
<div class="laruelle-ctr" in:loadThis style="background:rgb({currBG.r},{currBG.g},{currBG.b});" out:removeThis>
    {#each timeline as tl, i}
        {#if i == 0}
            <div class="entranceCtr" in:fly="{{ y: -1000, duration: 400 }}" out:fly="{{ y: -800, duration: 1200 }}">
                <div id="intro">scroll down to explore!</div>
                <div id="arrowee">
                    <img src="https://ipfs.io/ipfs/bafybeihegepawf6wdpxfxlarq5gmiiqsysztywgsot3jigsewvlpyg3z3q" alt="Casino pattern vector created by macrovector - www.freepik.com" style="height:100%; width:max-content;">
                </div>
            </div>
        {:else if tl && currScroll == i}
            <div class="headCtr" in:fly="{{ x: -1000, duration: 600 }}" out:fly="{{ x: -1000, duration: 600 }}">
                <SaisonHeading 
                    seasonId={tl.id}
                    barTitle={barTitle}
                />
            </div>
            <div class="bulletinCtr" in:fly="{{ x: 1000, duration: 600 }}" out:fly="{{ x: 1000, duration: 600 }}">
                <Bulletin title="{tl.title}" image="{tl.image}" milestones="{tl.milestones}" bgColor="{bulletinColor}"></Bulletin>
            </div>
        {/if}
    {/each}
    {#if currScroll > 0}
    <div class="timelineCtr" in:fly="{{ y: 1000, duration: 600 }}" out:fly="{{ y: 1000, duration: 600 }}">
        <Timeline 
            currDate={currDate}
            on:hoverItem = {handleInput} 
        />
    </div>
    {/if}
    <div id="texture"></div>
</div>
{/if}

<style>
    .laruelle-ctr {
        /* height: max-content; */
        height: 6200px;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -15vh 0 10vh 0;
        position: relative;
    }

    #texture{
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: inherit;
        height: inherit;
        background: url(https://ipfs.io/ipfs/bafybeic4n4jj6y7abasp7dv2zq63bjddocrhclpc23cy3aqnuojdzwcusq);
        background-size: auto;
        background-repeat: repeat;
        opacity: 0.1;
    }

    .entranceCtr{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: max-content;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

    #intro{
        font-family: 'La Belle Aurore', cursive;
        font-size: 3em;
        margin-top: 25vh;
        color: var(--coffee);
        text-align: center;
    }

    #arrowee{
        margin-top: 5vh;
        height: 20vh;
        width: max-content;
        animation: arrowing 4s ease-in-out;
        animation-iteration-count: infinite;
    }

    @media (max-width: 600px) {
        .laruelle-ctr{
            margin-top: -30vh;
        }

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

    @keyframes arrowing {
        0% {
            transform: translateY(0vh);
        }
        50%{
            transform: translateY(5vh);
        }
        100% {
            transform: translateY(0vh);
        }
    }
</style>