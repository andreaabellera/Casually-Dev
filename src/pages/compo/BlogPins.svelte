<script>
    import Heading from './Heading.svelte'
	import BlogPage from './BlogPage.svelte'
    import blogData from '../content/blogs.yml'
    import { fly } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'

    // Maximum number of blogs to show
    let cap = 5

    // Get blog data
    let blogs = blogData.blogs
    blogs = blogs.filter(blog => {  // Filter to pinned blogs
        if(blog.cover)
            return blog
    })
    blogs = blogs.slice(0, cap)  // Limit blogs to n posts

    // Page transition
    let visible = false
    let visibles = new Array(cap)
    let currV = 0

    setTimeout(()=>{ visible = true }, 200)
    let id = setInterval(loadEntries, 400)
    function loadEntries() {
        visibles[currV] = true
        currV++
        if(currV == visibles.length) { clearInterval(id) }
    }

    function zoom({ duration }) {
        return {
            duration,
            css: t => {
                const eased = elasticOut(t)
                return `transform: scale(${eased});`
            }
        }
    }
    
</script>

{#if visible}
<div class="pinned-feat-ctr" transition:fly="{{ y: 600, duration: 800 }}" role="article" aria-label="Feature of author-pinned blog posts">
    <Heading title={"PINNED"} />
    <div id="pinned-array" role="list" aria-label="Pinned Blogs">
    {#each blogs as blog, i}
        {#if visibles[i] && blog}
            <a href="../blog/{blog.id}" in:zoom="{{duration: 1000}}" aria-label="Read blog post for {blog.title}">
                <BlogPage>
                    {@html blog.cover}
                </BlogPage>
            </a>
        {/if}
    {/each}
    </div>
    <a href="/blog">
        <div id="blog-see-more" class="laBelleAurore"><div> see more blogs </div></div>
    </a>
</div>
{/if}

<style>
    .pinned-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin-bottom: 10vh;
    }

    #pinned-array {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        align-items: center;
        margin-bottom: 5vh;
    }

    @media (max-width: 600px) {
        #pinned-array {
            flex-direction: column;
        }
    }
</style>

