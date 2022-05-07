<script>
    // Props
	export let image = "";
    export let tags = [];
    export let title = "Untitled Blog Post";
    export let date = "No date provided";
    export let blurb = "Cannot load blurb";
</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">
<div class="cover-ctr">
    <div class="cover-border"> <p style="margin-right: 2vw;"> read more </p> </div>
    <div class="cover">
        <div class="cover-inner">
            <div class="blogThumb" style="background-image:url({image});"></div>
            <div class="blogContent">
                <div class="blogTags">
                    {#each tags as tag}
                        <div class="blogTag"> {tag} </div> 
                    {/each}
                </div>
                <div class="blogTitle"> {title} </div>
                <div class="blogDate"> {date} </div>
                <p class="blogBlurb"> {blurb} </p>
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
        cursor: pointer;
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
        border-color: rgba(132,121,121,0.5);
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
        /* border: 1px solid var(--smudge); */
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        background-color: var(--bark);
    }

    .cover-inner{
        height: 85%;
        width: 92%;
        display: grid;
        grid-template-columns: 25% 1fr;
        grid-column-gap: 4vw;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink);
    }

    .blogThumb{
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
    }

    .blogContent{
        
    }

    .blogTags{
        display: flex;
        margin-bottom: 1.5vh;
    }

    .blogTag{
        padding: 0.1em 0.6em 0.1em 0.6em;
        font-size: 0.8em;
        box-shadow: 0.05em 0.1em 0.1em rgba(0,0,0,0.2);
        margin-right: 0.2em;
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
        margin-bottom: 1vh;
    }

    .blogBlurb{
        color: var(--oyster);
    }

    @media (max-width: 600px) {
        .cover-ctr{
            height: 22em;
		    width: 90%;
        }

        .cover{
            height: 20em;
            width: 85%;
        }

        .cover-border{
            display: none;
        }
    }

</style>