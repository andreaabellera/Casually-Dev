<script>
    import Heading from './Heading.svelte';
    import BlogCover from './BlogCover.svelte';
    let contentSample = "text generator lolo max princess tutu sesame seed Starbecks I want to be pilote and help everyoen tor lolo max princess tutu sesame seed Starbecks ...";
</script>

<div class="blog-feat-ctr">
    <Heading title={"BLOG"} />
    <div id="blog-array">
        <BlogCover
            image = {"https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/andrea%20libertie%20full.jpg"}
            tags = {"Fresh 🌿"}
            title = {"And I became a dog"}
            date = {"May 31, 2022"}
            blurb = {contentSample}
        ></BlogCover>
        
        <BlogCover
            image = {"https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/Snapchat-576771154.jpg"}
            title = {"Game Jam Creation"}
            date = {"May 28, 2022"}
            blurb = {contentSample}
        ></BlogCover>
    </div>
</div>

<style>
    .blog-feat-ctr {
        height: 70vh;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
        margin-bottom: 5vh;
    }

    #blog-array{
        margin-top: -6vh;
        width: 100%;
    }
</style>