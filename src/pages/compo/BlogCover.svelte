<script>
    import Boba from "casually-css/@svelte/boba.svelte"

    // Props
	export let image = null
    export let tags = []
    export let title = "Untitled Blog Post"
    export let date = "No date provided"
    export let link = null;
    export let loading = false
    let blurb = "Loading blurb..."

    // Load blurb from IPFS
    setTimeout(async() => {
        let response = await fetch(`https://fleek.ipfs.io/ipfs/${link}`)
        let text = await response.text()
        blurb = text.substring(0, 100) + "..."
    }, 100)

    function randTime() {
        return (Math.random()*5 + 2) + "s";
    }

    function randRGB() {
        let blue = Math.floor(Math.random() * (255 - 100) + 100)
        let red = Math.floor(Math.random() * (255 - 100) + 100)
        let green = Math.floor(Math.random() * (255 - 100) + 100)
        
        // Tweak color if it looks disgusting to drink
        let snotty = Math.abs(red-green)<120 && red>blue && green>blue
        let linty = blue>red && blue>green && Math.abs(blue-red)<70 && Math.abs(blue-green)<70
        if(snotty)
            red = 255
        if(linty)
            blue = 255
        
        return `rgb(${red}, ${green}, ${blue})`;
    }

</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
<div class="cover-ctr">
    <div class="cover-border"> <p style="margin-right: 2vw;"> read more </p> </div>
    <div class="cover">
        <div class="cover-inner">
            {#if image}
                <div class="blogThumb" style="background-image:url(https://ipfs.fleek.co/ipfs/{image});"></div>
            {:else if loading}
                <div class="blogThumb" style="opacity:0.4; box-shadow:none;" > 
                    <Boba
                        lidColor={"mediumorchid"}
                        drinkColor={randRGB()} 
                        slurp={{duration:randTime()}}
                    /> 
                </div>
            {/if}
            <div class="blogContent">
                <div class="blogTags">
                    {#each tags as tag}
                        <div class="blogTag"> {tag} </div> 
                    {/each}
                </div>
                <div class="blogTitle"> {title} </div>
                <div class="blogDate"> {date} </div>
                <p class="blogBlurb"> {@html blurb} </p>
            </div>
            <div class="readMore">
                <span style="padding: 0 1em 6em 0;"> tap to read </span>
            </div>
        </div>
    </div>
</div>

<style>
	.cover-ctr {
        position: relative;
        height: 15em;
		width: 42em;
        margin: 0 0 3vh 6vw;
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
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
        height: 14em;
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

    .blogThumb{
        height: 100%;
        width: 8em;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .blogTags{
        display: flex;
        margin: 1vh 0 1.5vh 0;
        flex-wrap: wrap;
    }

    .blogTag{
        padding: 0.1em 0.6em 0.1em 0.6em;
        font-size: 0.8em;
        box-shadow: 0.05em 0.1em 0.1em rgba(0,0,0,0.2);
        margin-right: 0.2em;
        margin-bottom: 0.25vh;
        border-radius: 2em;
        background-color: var(--mocha);
        color: var(--oyster);
    }

    .blogTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
    }

    .blogDate{
        font-size: 0.8em;
        margin: 1vh 0 1vh 0;
    }

    .blogBlurb{
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
            height: 22em;
		    width: 100%;
            margin: 0 0 3vh 0;
        }

        .cover{
            height: 20em;
            width: 85%;
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

        .blogThumb{
            width: 5.25em;
            box-shadow: inset 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        }

        .readMore{
            display: block;
        }
    }
</style>