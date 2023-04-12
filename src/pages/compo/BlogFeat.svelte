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

    // Detect mobile
    let isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))

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
    {#if !isMobile}
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
    <div class="blog-sm" transition:fly="{{ y: 50, duration: 800 }}">
        <a href="/blog">
            <div id="blog-see-more" class="laBelleAurore"><div> see more blogs </div></div>
        </a>
    </div>
    {/if}
</div>

<style>
    .blog-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr auto;
        margin: -8vh 0 10vh 0;
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

    .blog-sm{
        grid-row: 3/4;
        grid-column: 1/3;
    }

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