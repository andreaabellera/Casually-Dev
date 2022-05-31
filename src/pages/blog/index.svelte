<script>
    import { url } from "@roxi/routify";
    import { fly } from 'svelte/transition'
	import Heading from '../compo/Heading.svelte'
	import BlogCover from '../compo/BlogCover.svelte'
    import blogData from '../content/blogs.yml'
    import { onMount } from 'svelte';

    let ipfsNode;

    // Setup IPFS
    onMount(async () => {
		if (!globalThis.ipfsNode) {
			const IPFSmodule = await import('../../modules/ipfs-core/ipfs-core.js');
			const IPFS = IPFSmodule.default;
			ipfsNode = await IPFS.create();
			globalThis.ipfsNode = ipfsNode;
		} else {
			ipfsNode = globalThis.ipfsNode;
		}

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

    // Detect mobile
    let isMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))

    export let adjust = "-8vh"
    if (isMobile)
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
    {#if !isMobile}
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
                <div in:fly="{{ x: 500, duration: 600 }}" out:fly="{{ y: 500, duration: 800 }}">
                    <BlogCover
                        ipfsNode={ipfsNode}
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

