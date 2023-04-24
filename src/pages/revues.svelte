<script>
    import { fly, fade } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import revData from './content/revues.yml'
    import Leaderboard from './compo/Leaderboard.svelte'
    import RevueCover from './compo/RevueCover.svelte'
    import SearchBar from './compo/SearchBar.svelte'

    // Get review data
    let reviews = revData.reviews

    // Page transition
    let visible, leadVisible = false
    let visibles = new Array(reviews.length)
    let currV = 0
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{
        if(!globalThis.isMobile) 
            leadVisible = true
            
        let id = setInterval(loadEntries, 100)
        function loadEntries() {
            visibles[currV] = true
            currV++
            if(currV == visibles.length) { clearInterval(id) }
        }
    }, 800)

    // Search Logic
    let ids = Object.values(reviews).map(x => x.id.replaceAll('-', ' '))
    function handleInput(event) {
        let text = event.detail.text.toLowerCase();
        for(let i=0; i < ids.length; i++) {
            if(ids[i].includes(text))
                visibles[i] = true
            else
                visibles[i] = false
        }
	}

    // Show/Hide Leaderboard on mobile
    function showLead(){ leadVisible = !leadVisible }

</script>

{#if visible}
<div class="revues-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" aria-label="Reviews route page content">
    {#if !globalThis.isMobile}
        <Heading title={"REVIEWS"} />
    {/if}

    {#if globalThis.isMobile}
    <div id="mobile-btn-array" role="menu" aria-label="Toggle complementary page widgets and navigation hidden from narrowed screens">
        <button id="lead-btn" class="laBelleAurore large" on:click={showLead} role="menuitem" aria-label="Toggle on/off leaderboard component"> 
            show top drinks ◉
        </button>
    </div>
    {/if}

    <div class="revueContent">
        <section id="flexy" transition:fade>
            <SearchBar 
                placeholder = "🧋 Search for a Drink.. "
                on:drinkInput = {handleInput} 
            />
            {#if leadVisible}
                <div id="leaderboard" role="region" aria-label="Leaderboard that cycles featuring one of top 10 drinks in sequence">
                    <Leaderboard 
                        set = {reviews}
                    />
                </div>
            {/if}
        </section>

        <div id="revueArray" role="list" aria-label="Reviews">
        {#each reviews as rev, i}
            {#if visibles[i] && rev}
                <div in:fly="{{ x: 500, duration: 600 }}" role="listitem">
                        <RevueCover
                            image = {rev.thumb}
                            title = {rev.title}
                            detail = {rev.detail}
                            rating = {rev.rating}
                            blurb = {rev.blurb}
                        />
                </div>
            {/if}
        {/each}
        </div>
    </div>

</div>
{/if}

<style>
    .revues-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .revueContent{
        display: flex;
        justify-content: space-evenly;
        /* margin-top: -5vh; */
    }

    #mobile-btn-array{
        display: flex;
    }

    #lead-btn{
        width: max-width;
        border: 1px solid var(--mocha);
        border-radius: 0.2em;
        font-size: 18px;
        margin: -1vh 0 0 6vw;
        background: rgba(0,0,0,0);
        color: var(--mocha);
    }

    #revueArray{
        width: max-content;
        min-width: 45em;
    }

    #flexy{
        display: flex;
        flex-direction: column;
        margin-bottom: 3vh;
    }

    @media (max-width: 700px) {
        .revueContent{
            flex-direction: column;
        }

        #leaderboard{
            width: max-content;
        }

        #revueArray{
            width: 100%;
            min-width: 100%;
        }

        #flexy{
            flex-direction: column-reverse;
            margin-top: 7vh;
        }
    }
</style>