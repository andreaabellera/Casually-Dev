<script>
    import { fly } from 'svelte/transition'
    import Heading from './Heading.svelte'
    import BlogCover from './BlogCover.svelte'
    import blogData from '../content/blogs.yml' 
    import { onMount } from 'svelte';

    onMount(() => {
        // Blog covers transition effect
        let currV = 0
        let id = setInterval(loadEntries, 200)
        function loadEntries() {
            visibles[currV] = true
            currV++

            if(currV == visibles.length)
                clearInterval(id)
        }
	})

    // Get blog data
    let blogs = blogData.blogs
    // Filter blogs by current epic
    blogs = blogs.filter(blog => {
        if(blog.epic == globalThis.epic)
            return blog
    })
    // Limit blogs to 6 posts
    blogs = blogs.slice(0, 6)
    let visibles = [false, false, false, false, false, false]

    // Assign "Fresh" to new entries (Posted within 3 days from current date)
    // Bad programming haha but I'll optimize later
    const curr = new Date()
    let len = blogs.length
    for (let i=0; i<len; i++){
        if (!blogs[i].tags.includes("Fresh 🌿")){
            let date = new Date(blogs[i].date)
            let diff = Math.abs(curr - date)
            let days = Math.floor(diff / (1000 * 60 * 60 * 24))
            if (days <= 3)
                blogs[i].tags.unshift("Fresh 🌿")
        }
    }

    if(!visibles[0]){
        // Blog covers transition effect
        let currV = 0
        let id = setInterval(loadEntries, 200)
        function loadEntries() {
            visibles[currV] = true
            currV++

            if(currV == visibles.length)
                clearInterval(id)
        }
    }
</script>

<div class="blog-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    {#if !globalThis.isMobile}
    <div class="blog-heading">
        <Heading title={"BLOG"} />
    </div>
    {/if}

    <div id="blog-array">
    {#each blogs as blog, i}
        {#if visibles[i] && blog}
            <a href="../blog/{blog.id}">
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
        {:else}
        <div in:fly="{{ x: 500, duration: 1600 }}">
            <BlogCover
                loading = {true}
                title = {"Loading Content..."}
                date = {""}
                link = {blog.blurb}
            />
        </div>
        {/if}
    {/each}
    </div>

    <div class="filter">
        <div class="filter-box">
            <div class="filter-box-title lancelot"> FILTER  </div>
            <div class="filter-box-content ptSans"> 
               An introductory plaque to the blog perhaps
            </div>
        </div>
    </div>

    {#if visibles[3]}
    <!-- <div class="blog-sm" transition:fly="{{ y: 50, duration: 800 }}">
        <a href="/blog">
            <div id="blog-see-more" class="laBelleAurore"><div> see more blogs </div></div>
        </a>
    </div> -->
    {/if}
</div>

<style>
    .blog-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr auto;
        margin-top: -8vh;
    }

    #blog-array{
        margin-top: -6vh;
        margin-left: -6vw;
        width: 100%;
        margin-bottom: 5vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        justify-self: center;
    }

    .blog-heading{
        grid-row: 1/2;
        grid-column: 1/3;
    }

    /* .blog-sm{
        grid-row: 3/4;
        grid-column: 1/3;
    } */

    .filter{
        display: none;
        justify-items: center;
    }

    @media (max-width: 600px) {
        #blog-array{
            width: 100%;
            margin-top: 0vh;
            margin-left: 0vw;
            grid-column: 1/3;
        }

        .filter{
            display: none;
        }
    }
</style>