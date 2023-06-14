<script>
    import { url } from "@roxi/routify"
    import { fly, fade } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import blogData from './content/blogs.yml'

    export let adjust = "-8vh"
    if (globalThis.isMobile)
        adjust = "-20vh"

    // Get blog data
    let blogs = blogData.blogs
    blogs = blogs.filter(blog => {  // Filter blogs by not current epic
        if(blog.epic != globalThis.epic)
            return blog
    })

    // Page transition
    let visible, visibleC = false
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{ visibleC = true }, 1000)

</script>

{#if visible}
<div class="archive-feat-ctr" style="margin-top:{adjust};" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" aria-label="Archive route page content">

    <div class="blog-heading">
        <Heading title={"ARCHIVE"} />
    </div>

    {#if visibleC}
        <ul id="blog-array" transition:fade aria-label="Archived blogs list">
            {#each blogs as blog}
            <li>
                <a href={$url("./blog/:showId", {showId: blog.id})} class="lancelot slightLarge">
                    {blog.title}
                </a>
            </li>
            {/each}
        </ul>
    {/if}
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
        list-style-image: url("https://dweb.link/ipfs/bafybeigio35caamtq4f26zhxuckrweggufjiodyzzr3gslxhkddcxznyum");
    }

    #blog-array a:hover{
        text-decoration: underline;
        cursor: url(https://dweb.link/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    @media (max-width: 1150px) {
        #blog-array{
            column-count: 2;
        }
    }
    
    @media (max-width: 800px) {
        #blog-array{
            margin-top: -12vh;
            margin-left: 0;
            column-count: 1;
            width: 70%;
            font-size: 140%;
        }
    }
</style>

