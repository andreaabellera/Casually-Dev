<script>
    // Props
	export let image = "";
    export let tags = "";
    export let title = "Untitled Blog Post";
    export let date = "No date provided";
    export let blurb = "Cannot load blurb";
</script>

<link href="https://fonts.googleapis.com/css2?family=Lancelot&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<div class="cover-ctr">
    <div class="cover-border"></div>
    <div class="cover">
        <div class="cover-inner">
            <div class="blogThumb" style="background-image:url({image});">
                <!-- <img src="{image}" alt="Blog Feature Thumbnail"> -->
            </div>
            <div class="blogContent">
                <div class="blogTag"> {tags} </div>
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
        height: 13em;
		width: 40em;
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
        border: 2px solid var(--smudge);
        bottom: 0;
        left: 0;
    }

    .cover-border:hover{
        height: 80%;
        width: 115%;
        transform: translate(5%, 5%);
        transition: 0.4s ease-in-out
    }

    .cover{
        position: relative;
        z-index: 3;
        height: 12em;
        width: 39em;
        display: grid;
        justify-items: center;
        align-items: center;
        border: 2px solid var(--smudge);
        background-color: var(--bark);
    }

    .cover-inner{
        height: 85%;
        width: 95%;
        display: grid;
        grid-template-columns: 25% 1fr;
        grid-column-gap: 5vw;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink);
    }

    .blogThumb{
        height: 100%;
        width: 100%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .blogContent{
        
    }

    .blogTag{
        font-size: 0.8em;
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
</style>