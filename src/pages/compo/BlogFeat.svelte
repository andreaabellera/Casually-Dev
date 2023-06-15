<script>
    import { fly } from 'svelte/transition'
    import Heading from './Heading.svelte'
    import BlogCover from './BlogCover.svelte'
    import blogData from '../content/blogs.yml' 

    // Maximum number of blogs to show
    let cap = 6

    // Get blog data
    let blogs = blogData.blogs
    blogs = blogs.filter(blog => {  // Filter blogs by current epic
        if(blog.epic == globalThis.epic)
            return blog
    })
    blogs = blogs.slice(0, cap)  // Limit blogs to n posts

    // Page transition
    let visibles = new Array(cap)
    let currV = 0

    let id = setInterval(loadEntries, 200)
    function loadEntries() {
        visibles[currV] = true
        currV++
        if(currV == visibles.length) { clearInterval(id) }
    }

</script>

<div class="blog-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" role="article" aria-label="Feature of latest {cap} blog posts">
    {#if !globalThis.isMobile}
    <div class="blog-heading">
        <Heading title={"BLOG"} />
    </div>
    {/if}

    <div id="blog-array" role="list" aria-label="Blogs">
    {#each blogs as blog, i}
        {#if visibles[i] && blog}
            <a href="../blog/{blog.id}">
                <div in:fly="{{ x: 500, duration: 600 }}" role="listitem" aria-label="Read blog post for {blog.title}">
                    <BlogCover
                        id = {blog.id}
                        image = {blog.image}
                        tags = {blog.tags}
                        title = {blog.title}
                        date = {blog.date}
                    />
                </div>
            </a>
        {:else}
        <div in:fly="{{ x: 500, duration: 1600 }}" role="listitem" aria-label="Blog posts loading">
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