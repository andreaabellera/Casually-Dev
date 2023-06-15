<script>
    import { fade } from 'svelte/transition';
    import { params } from "@roxi/routify";
    import blogData from '../content/blogs.yml';

    // Page transition
    let visible = false
    setTimeout(()=>{ visible = true }, 300)

    export let id = ""
    if($params.showId)
        id = $params.showId
    export let tags = []
    export let title = "Untitled Blog Post"
    export let date = "No date provided"
    export let blurb = "Loading blurb..."

    // Load blog data
    let blogs = blogData.blogs
    for (let blogData of blogs){
        if (blogData.id == id){
            title = blogData.title
            date = blogData.date
            tags = blogData.tags
        }
    }

    // Load blurb
    setTimeout(async() => {
        let response = await fetch(`/blogs/${id}.txt`)
        blurb = await response.text()
    }, 1000)

    // Assign "Fresh" to new entries (Posted within 3 days from current date)
    let today = new Date()
    let blogDate = new Date(date)
    let fresh = (Math.floor(Math.abs(today - blogDate) / 86400000) <= 3)

</script>

{#if visible}
<div class="blog-page-ctr" transition:fade role="document">
    <div id="blog-page-inner" class="blog-page-inner">
        <div class="blogTitle"> {title} </div>
        <div class="blogDate"> {date} </div>
        <div class="blogTags">
            {#if fresh}
                <div class="blogTag"> Fresh 🌿 </div> 
            {/if}
            {#each tags as tag}
                <div class="blogTag"> {tag} </div> 
            {/each}
        </div>
        <p class="blogBlurb"> {@html blurb} </p>
    </div>

    <script>
		// Detect mobile
		if (!globalThis.isMobile){
			document.getElementById("blog-page-inner").style.marginTop = "15vh"
            let blogImgs = document.getElementsByClassName("blogImg")
            for(let img of blogImgs){
                img.style.height = "60%"
                img.style.width = "60%"
            }
        }
	</script>
</div>
{/if}


<style>
    .blog-page-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        justify-items: center;
        margin: -8vh 0 10vh 0;
        font-family: 'PT Sans', sans-serif;
        color: var(--ink)
    }

    .blog-page-inner {
        height: max-content;
        width: 90%;
        max-width: 900px;
    }

    .blogTitle{
        font-family: 'Lancelot', cursive;
        font-size: 2.5em;
        color: black;
    }

    .blogDate{
        font-size: 1em;
        margin: 2vh 0 3vh 0;
    }

    .blogTags{
        display: flex;
        margin: 1vh 0 5.5vh 0;
        flex-wrap: wrap;
    }

    .blogTag{
        padding: 0.1em 0.6em 0.1em 0.6em;
        font-size: 1em;
        box-shadow: 0.05em 0.1em 0.1em rgba(0,0,0,0.2);
        margin-right: 0.2em;
        margin-top: 0.75vh;
        border-radius: 2em;
        background-color: var(--mocha);
        color: var(--oyster);
    }

    .blogBlurb{
        color: black;
        font-size: 1.1em;
        line-height: 2em;
    }

</style>