<script>
    // Props
	export let image = null;
    export let title = "Unidentified drink";
    export let detail = "You'll never know where to get this";
    export let rating = -1;
    export let blurb = "Hahahahaha empty blurb";
</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
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
        height: 15em;
		width: 42em;
        margin: 0 0 4vh 3vw;
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        display: grid;
        justify-items: center;
        align-items: center;
	}

    .cover{
        position: relative;
        z-index: 3;
        height: 12em;
        width: 41em;
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
        grid-column-gap: 4vw;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink);
        overflow: hidden;
    }

    .revueThumb{
        height: 100%;
        width: 8em;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .revueTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
    }

    .revueBlurb{
        color: var(--ink);
        font-size: 0.9em;
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
            height: 22em;
		    width: 100%;
            margin: 0 0 3vh 0;
        }

        .cover-inner{
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr 30%;
        }

        .revueThumb{
            grid-column: 1/2;
            grid-row: 1/3;
        }

        #rating{
            grid-column: 2/3;
            grid-row: 2/3;
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