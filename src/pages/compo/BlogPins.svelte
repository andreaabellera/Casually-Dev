<script>
    import Heading from './Heading.svelte'
	import BlogPage from './BlogPage.svelte'
    import blogData from '../content/blogs.yml'

    // Get blog data
    let blogs = blogData.blogs
    // Filter to pinned blogs
    blogs = blogs.filter(blog => {
        if(blog.cover)
            return blog
    })
    // Only show latest 5
    blogs = blogs.slice(0, 5)
</script>

<div class="pinned-feat-ctr">
    <Heading title={"PINNED"} />
    <div id="pinned-array">
    {#each blogs as blog}
        <a href="../blog/{blog.id}">
            <BlogPage>
                {@html blog.cover}
            </BlogPage>
        </a>
    {/each}
    </div>
    <a href="/blog">
        <div id="blog-see-more" class="laBelleAurore"><div> see more blogs </div></div>
    </a>
</div>

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

