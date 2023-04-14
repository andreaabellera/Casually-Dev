<script>
    // Props
	export let image = null;
    export let title = "Unidentified drink";
    export let detail = "You'll never know where to get this";
    export let rating = -1;
    export let blurb = "Hahahahaha empty blurb";
</script>

<div class="cover-ctr">
    <div class="cover">
        <div class="cover-inner">
            {#if image}
            <div class="revueThumb" style="background-image:url(https://ipfs.fleek.co/ipfs/{image});"></div>
            {:else}
            <div></div>
            {/if}
            <div class="revueContent">
                <div class="revueTitle"> {title} </div>
                <div class="revueDetail"> {detail} </div>
                <p class="revueBlurb"> {@html blurb} </p>
            </div>
            <div id="rating"> <span id="num">{rating}</span>/10 </div>
        </div>
    </div>
</div>

<style>
	.cover-ctr {
        position: relative;
        height: 20em;
		width: 45em;
        margin-bottom: 4vh;
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        display: grid;
        justify-items: center;
        align-items: center;
	}

    .cover{
        position: relative;
        z-index: 3;
        height: 17em;
        width: 45em;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        background-color: var(--bark);
    }

    .cover-inner{
        position: relative;
        height: 85%;
        width: 92%;
        display: grid;
        grid-template-columns: auto 1fr 20%;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink);
        overflow: hidden;
    }

    .revueContent{
        overflow-y: scroll;
    }

    .revueContent::-webkit-scrollbar-track {
		box-shadow: none; 
	}

    .revueThumb{
        height: 100%;
        width: 8em;
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        grid-column: 1/2;
        grid-row: 1/3;
        margin-right: 3vw;
    }

    .revueTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
    }

    .revueDetail{
        margin: 1vh 0 1vh 0;
        font-weight: bold;
    }

    .revueBlurb{
        color: var(--ink);
        font-size: 0.9em;
        padding-right: 1em;
        line-height: 2em;
    }

    #rating{
        font-size: 1.3em;
        font-weight: bold;
        font-family: 'Taviraj', serif;
        text-align: center;
        align-self: center;
        color: var(--mocha);
    }

    #num{
        font-size: 2.3em;
    }

    @media (max-width: 600px) {
        .cover-ctr{
            height: max-content;
		    width: 100%;
            margin: 0 0 3vh 0;
        }

        .cover{
            height: max-content;
        }

        .cover-inner{
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr 30%;
        }

        .revueThumb{
            grid-column: 1/2;
            grid-row: 1/3;
        }

        .revueContent{
            height: max-content;
        }

        #rating{
            grid-column: 2/3;
            grid-row: 2/3;
            margin: 2em 0 6em 0;
        }

        .cover{
            height: 100%;
            width: 100%;
        }

        .cover-inner{
            border-bottom: 2px solid var(--bark);
        }

        .revueThumb{
            width: 5.25em;
        }
    }
</style>