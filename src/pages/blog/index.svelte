<script>
    import { url } from "@roxi/routify";
    import { fly } from 'svelte/transition'
	import Heading from '../compo/Heading.svelte'
	import BlogCover from '../compo/BlogCover.svelte'
    import blogData from '../content/blogs.yml'

    // Show and hide blogs based on filters
    let categories = ["Develop ⚙️", "Programming 👩🏻‍💻", "Art 🖼️", "Life 💃🏻", "Games 🎲", "Random 🍡"]
    let filters = categories
    function fselect(){
        let classes = this.classList;
        if(classes.contains("fselect")){
            this.classList.remove("fselect")
            let ind = filters.indexOf(this.innerText)
            filters.splice(ind, 1)

            if(filters.length == 0)
                filters = categories
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
    blogs = blogs.filter(blog => {  // Filter blogs by current epic
        if(blog.epic == globalThis.epic)
            return blog
    })

    // Page transition
    let visible, filterVisible = false
    setTimeout(()=>{ visible = true }, 300)
    let visibles = new Array(blogs.length)

    let id = setInterval(loadEntries, 200)
    let currV = 0 
    let delay = 0
    function loadEntries() {
        if(delay==4){
            visibles[currV] = true
            if(!globalThis.isMobile)
                filterVisible = true
            currV++
            if(currV == visibles.length) { clearInterval(id) }
        }
        else
            delay++
    }

    function activate(){ this.classList.add("epic-activated") }
    function deactivate(){ this.classList.remove("epic-activated") }
    function showFilters(){ filterVisible = !filterVisible }

</script>

{#if visible}
<div class="blog-feat-ctr" style="margin-top:-8vh;" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
    <div class="blog-heading">
        <Heading title={"BLOG"} />
    </div>
    {/if}

    <div id="mobile-btn-array">
        <a href="/epics">
            <button id="epic-btn" class="laBelleAurore large" 
                on:mouseenter={activate} 
                on:focus={activate}
                on:mouseleave={deactivate}
                on:blur={deactivate}
            > 
                switch timeline <div> ↺ </div> 
            </button>
        </a>
    
        {#if globalThis.isMobile}
        <button id="filter-btn" class="laBelleAurore large" on:click={showFilters}> 
            show filters <div> ◉ </div> 
        </button>
        {/if}
    </div>

    {#if filterVisible}
    <div class="filter" in:fly="{{ y: 500, duration: 600 }}" out:fly="{{ x: 800, duration: 400 }}">
        <div class="filter-box">
            <div class="filter-box-title gentiumBasic"> filter by tags </div>
            <div class="filter-box-content ptSans">
                {#each categories as filter}
                    <div on:click={fselect}><p>{filter}</p></div>
                {/each}
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
<span class="epic-activated"><div></div></span>

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

    #blog-array{
        margin-top: -6vh;
        width: 100%;
        margin-bottom: 5vh;
    }

    #epic-btn, #filter-btn{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 0.4em;
        margin: 10vh 0 0 -17vw;
        border: none;
        background: none;
        color: var(--mocha);
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), auto;
    }

    .epic-activated, #filter-btn:focus{
        color: var(--chartreuse) !important;
    }

    .epic-activated div{
        animation: 1.3s spin linear infinite;
    }

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-360deg);
        }
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
        border: 2px solid rgba(0,0,0,0);
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .filter-box-content div:hover{
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
        /* background: rgba(177, 120, 87, 0.45); */
        border: 2px groove var(--oyster);
        transition: 0.1s ease-in-out;
    }

    .fselect{
        background-color: rgba(141,75,38,0.45) !important;
        color: var(--oyster) !important;
        font-weight: 400 !important;
    }

    @media (max-width: 880px) {
        .blog-feat-ctr {
            display: flex;
            flex-direction: column;
        }

        #blog-array{
            margin-top: 3vh;
        }

        #mobile-btn-array{
            display: flex;
        }

        #epic-btn, #filter-btn{
            border: 1px solid var(--mocha);
            border-radius: 0.2em;
            font-size: 18px;
            margin: -1vh 0 0 6vw;
        }

        .filter{
            margin-top: 9vh;
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

