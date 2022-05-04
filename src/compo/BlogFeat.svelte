<script>
    import Heading from './Heading.svelte';
</script>

<div class="blog-feat-ctr">
    <Heading title={"BLOG"} />
</div>

<style>
    .blog-feat-ctr {
        height: 70vh;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
    }
</style>