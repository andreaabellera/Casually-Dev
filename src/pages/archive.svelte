<script>
    import { url } from "@roxi/routify"
    import { fly } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import blogData from './content/blogs.yml'

    export let adjust = "-8vh"
    if (globalThis.isMobile)
        adjust = "-20vh"

    let blogs = blogData.blogs
    let visible = false

    // Page transition
    let id1 = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

</script>

{#if visible}
<div class="archive-feat-ctr" style="margin-top:{adjust};" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">

    <div class="blog-heading">
        <Heading title={"ARCHIVE"} />
    </div>

    <ul id="blog-array">
    {#each blogs as blog, i}
    <li>
        <a href={$url("./blog/:showId", {showId: blog.id})} class="lancelot slightLarge">
            {blog.title}
        </a>
    </li>
    {/each}
</div>
{/if}

<style>
    .archive-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    #blog-array{
        margin-top: -3vh;
        justify-self: center;
        column-count: 3;
        list-style-image: url("https://ipfs.io/ipfs/bafybeigio35caamtq4f26zhxuckrweggufjiodyzzr3gslxhkddcxznyum");
    }

    #blog-array a:hover{
        text-decoration: underline;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    @media (max-width: 1150px) {
        #blog-array{
            column-count: 2;
        }
    }
    
    @media (max-width: 800px) {
        #blog-array{
            margin-top: -12vh;
            column-count: 1;
            margin-left: 5%;
            font-size: 140%;
        }
    }
</style>

