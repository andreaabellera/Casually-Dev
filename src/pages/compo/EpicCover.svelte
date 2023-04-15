<script>
    export let id = globalThis.epic
	export let image = null
    export let title = "Untitled Epic"
    export let blurb = "No description given."

    function selectEpic(){ globalThis.epic = id }
</script>

<a href="/blog" class="cover-ctr" on:click={selectEpic}>
    <a href="/blog" class="cover-border" on:click={selectEpic}> <p style="margin-right: 2vw;"> time travel </p> </a>
    <div class="cover">
        <div class="cover-inner">
            {#if image}
                <div class="epicThumb" style="background-image:url(https://ipfs.io/ipfs/{image});"></div>
            {/if}
            <div class="epicContent">
                <div class="epicTitle"> {title} </div>
                <p class="epicBlurb"> {@html blurb} </p>
            </div>
            <div class="readMore">
                <span style="padding: 0 1em 6em 0;"> select epic </span>
            </div>
        </div>
    </div>
</a>

<style>
	.cover-ctr {
        position: relative;
        height: 13em;
		width: 42em;
        margin: 0 0 3vh 6vw;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        display: grid;
        justify-items: center;
        align-items: center;
	}

    .cover-border{
        position: absolute;
        z-index: 4;
        height: 100%;
        width: 100%;
        border: 1px solid var(--smudge);
        bottom: -1px;
        left: -1px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: rgba(0,0,0,0);
        font-family: 'La Belle Aurore', cursive;
        font-size: 1.75em;
    }

    .cover-border:hover{
        height: 94%;
        width: 120%;
        transform: translate(2.8%, 2.3%);
        transition: 0.4s ease-in-out;
        color: rgb(111, 102, 102);
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
        grid-template-columns: auto 1fr;
        grid-template-rows: 1fr auto;
        grid-column-gap: 4vw;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink);
        overflow: hidden;
    }

    .epicThumb{
        height: 100%;
        width: 8em;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .epicTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
    }

    .epicBlurb{
        color: var(--ink);
        font-size: 0.9em;
    }

    .readMore{
        display: none;
        position: absolute;
        bottom: 0;
        z-index: 5;
        grid-column: 1/3;
        grid-row: 2/3;
        color: var(--ink);
        font-family: 'La Belle Aurore', cursive;
        text-align: right;
        background-image: linear-gradient(to top, var(--linen), rgba(0,0,0,0));
        opacity: 60%;
        width: 100%;
    }

    .readMore:hover{
        opacity: 100%;
        transition: 0.3s;
    }

    @media (max-width: 600px) {
        .cover-ctr{
		    width: 100%;
            margin: 0 0 3vh 0;
        }

        .cover-border{
            display: none;
        }

        .cover{
            height: 100%;
            width: 100%;
        }

        .cover-inner{
            border-bottom: 2px solid var(--bark);
        }

        .epicThumb{
            width: 5.25em;
            box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        }

        .readMore{
            display: block;
        }
    }
</style>