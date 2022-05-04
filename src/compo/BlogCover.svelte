<script>
    // Props
	export let image = "";
    export let tags = "";
    export let title = "Untitled Blog Post";
    export let date = "No date provided";
    export let content = "Cannot load content";
</script>

<div class="cover-ctr">
    <div class="cover-inner">
        <div class="blogThumb">
            <img src="{image}" alt="Blog Feature Thumbnail">
        </div>
        <div class="blogContent">
            <div class="blogTag"> {tags} </div>
            <div class="blogTitle"> {title} </div>
            <div class="blogDate"> {date} </div>
            <p class="blogContent"> {content} </p>
        </div>
    </div>
</div>

<style>
	.cover-ctr {
        height: 13em;
		width: 40em;
        border: 2px solid var(--smudge);
        margin: 0 0 3vh 6vw;
        cursor: pointer;
        display: grid;
        justify-items: center;
        align-items: center;
	}

    .cover-inner{
        height: 12em;
        width: 39em;
        display: grid;
        grid-template-columns: 25% 1fr;
        grid-column-gap: 5vw;
        border: 2px solid var(--smudge);
        background-color: var(--bark);
    }

    .blogThumb img{
        height: 100%;
        width: 100%;
    }

    .blogContent{

    }

    .blogTag{

    }

    .blogTitle{

    }

    .blogDate{

    }
</style>