<script>
    import { fly } from 'svelte/transition'

    export let set = []
    export let ranks = 10
    let top = []
    let visibles = []

    // Get items and their ratings
    let ratings = Object.values(set).map(x => [x.rating, x])
    
    // Sort items by rating in descending order
    ratings.sort((a, b) => b[0] - a[0])
    for(let i=0; i < ranks; i++) {
        let item = ratings[i][1]
        item.rank = i + 1
        top.push(ratings[i][1])
        if(i!=0)
            visibles.push(false)
        else
            visibles.push(true)
    }

    // Change displayed card
    let currVisible = 0
    function nextCard(){
        visibles[currVisible] = false
        if(currVisible < ranks-1)
            currVisible++
        else
            currVisible = 0
        visibles[currVisible] = true
    }

    function nextRank(){ // Manually trigger next ranking card by click
        nextCard()
        clearInterval(id)
        id = setInterval(nextCard, 8000)
    }
    let id = setInterval(nextCard, 8000)  // Automatically swap ranking cards every 8 seconds

</script>

{#each top as item, i}
    {#if visibles[i] && item}
        <div class="cover-ctr" 
            in:fly="{{ x: -200, duration: 100, delay: 300 }}" 
            out:fly="{{ x:-200, duration: 300 }}" 
            on:click={nextRank}
            on:keypress={nextRank}
            role="complementary"
            aria-label="Leaderboard drink cover changes every 8 seconds to feature next-in-rank drink. Click to change now"
            tabindex="0"
        >
            <div class="cover-inner">
                <h2 id="leaderboard"> LEADERBOARD </h2>
                <div id="img-ctr">
                    <div id="rankBadgeCtr">
                        <div class="rankBadgeInner">
                            <div id="rank"> {item.rank} </div>
                        </div>
                    </div>
                    {#if item.thumb}
                        <div id="lbImage" style="background-image:url(https://ipfs.io/ipfs/{item.thumb});"></div>
                    {:else}
                        <div id="lbImage" style="background-image:url(https://ipfs.io/ipfs/bafybeietxv3j7ap373tsqtcl5p4mcbo6vyamyrwajlw4ib3n25zxjqp3xi);">
                            <div> No Picture </div>
                        </div>
                    {/if}
                </div>
                <div id="lbTitle"> {item.title} </div>
                <div id="lbDetail"> {item.detail} </div>
                <div id="lbBlurb"> {item.blurb} </div>
            </div>
        </div>
    {/if}
{/each}

<style>
    .cover-ctr{
        background-color: var(--bark);
        color: var(--ink);
        height: max-content;
        min-height: 65vh;
        width: 25em;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        margin: 3vh 0 3vh 6vw;
        overflow-y: hidden;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    .cover-inner{
        height: 88%;
        width: 80%;
        margin: 1em 0 1em 0;
    }

    #leaderboard{
        width: 100%;
        text-align: center;
        font-family: 'Taviraj', serif;
        color: var(--oyster);
        text-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
        font-weight: 800;
        font-size: 1.8em;
    }

    #rankBadgeCtr{
        position: absolute;
        top: 0;
        left: -1.5em;
        height: 4em;
        width: 4em;
        border: 0.3em solid var(--chartreuse);
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.3);
        background-image: var(--pearl);
        border-radius: 50%;
    }

    .rankBadgeInner{
        height: 100%;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: inset 0.05em 0.1em 0.3em rgba(0,0,0,0.3);
        border-radius: 50%;
    }

    #rank{
        height: 90%;
        width: 90%;
        color: var(--mocha);
        overflow: hidden;
        display: grid;
        justify-items: center;
        align-items: center;
        text-align: center;
        font-family: 'Taviraj', serif;
        font-size: 1.8em;
        font-weight: bold;
    }

    #lbTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.4em;
    }

    #lbImage{
        height: 20vh;
        width: 100%;
        box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: grid;
        justify-items: center;
        align-items: center;
        font-size: 1em;
        color: var(--coffee);
        font-family: 'Lancelot', cursive;
    }

    #img-ctr {
        position: relative;
        height: 23vh;
		width: 100%;
        margin: 3vh 0 3vh 0;
        display: grid;
        justify-items: flex-end;
        align-items: flex-end;
	}

    #lbDetail{
        font-family: 'PT Sans', sans-serif;
        font-size: 1em;
        margin: 1vh 0 4vh 0.2em;
    }

    #lbBlurb{
        font-family: 'PT Sans', sans-serif;
        font-size: 1.2em;
        margin-bottom: 3em;
    }

    @media (max-width: 700px) {
        .cover-ctr{
            width: 85vw;
        }

        #lbBlurb{
            display: none;
            /* font-size: 0.8em; */
        }
    }

</style>