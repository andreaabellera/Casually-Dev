<script>
    import { url } from "@roxi/routify";
    import { fly } from 'svelte/transition'
	import Heading from '../compo/Heading.svelte'
	import BlogCover from '../compo/BlogCover.svelte'
    import blogData from '../content/blogs.yml'
    import { onMount } from 'svelte';

    onMount(() => {
        // Entries transition
        let id2 = setInterval(loadEntries, 200)
        let delay = 0
        let currV = 0
        function loadEntries() {
            if(delay==4){
                visibles[currV] = true
                filterVisible = true
                currV++

                if(currV == visibles.length)
                    clearInterval(id2)
            }
            else
                delay++
        }
	});

    export let adjust = "-8vh"
    if (globalThis.isMobile)
        adjust = "-20vh"

    // Show and hide blogs based on filters
    let filters = ["Develop ⚙️", "Programming 👩🏻‍💻", "Art 🖼️", "Life 💃🏻", "Games 🎲", "Random 🍡"]
    function fselect(){
        let classes = this.classList;
        if(classes.contains("fselect")){
            this.classList.remove("fselect")
            let ind = filters.indexOf(this.innerText)
            filters.splice(ind, 1)

            if(filters.length == 0)
                filters = ["Develop ⚙️", "Programming 👩🏻‍💻", "Art 🖼️", "Life 💃🏻", "Games 🎲", "Random 🍡"]
        }
        else{
            if(filters.length == 6)
                filters = []

            this.classList.add("fselect")
            filters.push(this.innerText)
        }

        for(let v in visibles)
            visibles[v] = false
            
        for(let i=0; i < blogs.length; i++){
            let blogTags = blogs[i].tags
            for(let f of filters){
                if(blogTags.includes(f))
                    visibles[i] = true
            }
        }
    }

    // Get blog data
    let blogs = blogData.blogs
    // Filter blogs by current epic
    blogs = blogs.filter(blog => {
        if(blog.epic == globalThis.epic)
            return blog
    })
    // Fly-in visibility animations
    let visibles = []
    for(let i=0; i < blogs.length; i++)
        visibles.push(false)
    let visible = false
    let filterVisible = false

    // Page transition
    let id1 = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

</script>

{#if visible}
<div class="blog-feat-ctr" style="margin-top:{adjust};" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
    <div class="blog-heading">
        <Heading title={"BLOG"} />
    </div>
    {/if}

    {#if filterVisible}
    <div class="filter" in:fly="{{ y: 500, duration: 600 }}" out:fly="{{ x: 800, duration: 400 }}">
        <div class="filter-box">
            <div class="filter-box-title gentiumBasic"> filter by tags </div>
            <div class="filter-box-content ptSans"> 
                <div on:click={fselect}><p>Develop ⚙️</p></div>
                <div on:click={fselect}><p>Programming 👩🏻‍💻</p></div>
                <div on:click={fselect}><p>Art 🖼️</p></div>
                <div on:click={fselect}><p>Life 💃🏻</p></div>
                <div on:click={fselect}><p>Games 🎲</p></div>
                <div on:click={fselect}><p>Random 🍡</p></div>
            </div>
        </div>
    </div>
    {/if}

    <div id="blog-array">
    {#each blogs as blog, i}
        {#if visibles[i] && blog}
            <a href={$url("./:showId", {showId: blog.id})}>
                <div in:fly="{{ x: 500, duration: 600 }}">
                    <BlogCover
                        image = {blog.image}
                        tags = {blog.tags}
                        title = {blog.title}
                        date = {blog.date}
                        link = {blog.blurb}
                    />
                </div>
            </a>
        {:else if !filterVisible}
        <div in:fly="{{ x: 500, duration: 1600 }}">
            <BlogCover
                loading={true}
                title = {"Loading Content..."}
                date = {""}
                link = {blog.blurb}
            />
        </div>
        {/if}
    {/each}
    </div>

</div>
{/if}

<span class="fselect"></span>

<style>
    .blog-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
        grid-template-columns: auto 1fr;
        margin-bottom: 10vh;
    }

    .blog-heading{
        grid-row: 1/2;
        grid-column: 1/3;
    }

    #blog-array{
        margin-top: -6vh;
        width: 100%;
        margin-bottom: 5vh;
    }

    .filter{
        display: grid;
        justify-items: center;
        transform: translateY(-5vh);
        margin-left: 5vw;
    }

    .filter-box{
        width: 25vw;
    }

    .filter-box-title{
        font-size: 2em;
        margin-bottom: 2vh;
        width: 100%;
        padding-bottom: 0.2em;
        color: var(--ink);
        text-align: center;
        /* border-bottom: solid 1px var(--smudge); */
    }

    .filter-box-content{
        display: grid;
        grid-template-rows: 3em 3em 3em 3em 3em 3em;
        grid-gap: 1.5vh;
        text-align: center;
    }

    .filter-box-content div{
        width: 100%;
        height: 100%;
        background-color: var(--bark);
        color: var(--ink);
        font-weight: 500;
        margin-bottom: 2vh;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .filter-box-content p{
        width: 100%;
    }

    .filter-box-content div:hover{
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    .filter-box-content p:hover{
        cursor: url(https://ipfs.fleek.co/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        font-size: 1.5em;
        transform: translateY(-0.6em);
        transition: 0.1s ease-in-out;
    }

    .fselect{
        background-color: rgba(141,75,38,0.45) !important;
        color: var(--oyster) !important;
        font-weight: 400 !important;
    }

    @media (max-width: 700px) {
        .blog-feat-ctr {
            display: flex;
            flex-direction: column;
        }

        #blog-array{
            margin-top: 3vh;
        }

        .filter{
            margin-top: 13vh;
            margin-left: 0;
        }

        .filter-box{
            width: 90%;
        }

        .filter-box-title{
            font-size: 1.7em;
            margin-bottom: 0.5vh;
            color: var(--mocha);
        }

        .filter-box-content{
            display: grid;
            grid-template-rows: auto auto;
            grid-template-columns: 30% 1fr 30%;
            grid-row-gap: 1.5vh;
            text-align: center;
        }

        .filter-box-content p {
            font-size: 0.8em;
            transform: translateY(0);
        }

        .filter-box-content p:hover{
            font-size: 0.8em;
            transform: translateY(0);
        }
    }
</style>

