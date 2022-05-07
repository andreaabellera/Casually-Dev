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
            tags = {["Fresh 🌿", "Life 💃"]}
            title = {"And I became a dog"}
            date = {"May 31, 2022"}
            blurb = {contentSample}
        ></BlogCover>
        
        <BlogCover
            image = {"https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/Snapchat-576771154.jpg"}
            tags = {["Develop ⚙️"]}
            title = {"Game Jam Creation"}
            date = {"May 28, 2022"}
            blurb = {contentSample}
        ></BlogCover>
    </div>
    <div id="blog-see-more" class="laBelleAurore"><div> see more blogs </div></div>
</div>

<style>
    .blog-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
        margin-bottom: 10vh;
    }

    #blog-array{
        margin-top: -6vh;
        width: 100%;
        margin-bottom: 5vh;
    }

    #blog-see-more{
        height: 3.5em;
        width: 100%;
        max-width: 1000px;
        background-image: linear-gradient(to top, var(--bark), rgba(0,0,0,0));
        color: var(--oyster);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3em;
        border-right: 1px solid var(--bark); 
        border-bottom: 1px solid var(--smudge); 
    }

    #blog-see-more:hover{
        cursor: pointer;
        color: var(--ink);
        opacity: 70%;
        transition: 0.1s;
        transition-delay: 0.3s;
        animation: flashup 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    @keyframes flashup{
        0%{
            background-image: linear-gradient(to top, var(--bark), rgba(0,0,0,0));
        }
        5%{
            background-image: linear-gradient(to top, var(--bark) 10%, rgba(0,0,0,0));
        }
        10%{
            background-image: linear-gradient(to top, var(--bark) 20%, rgba(0,0,0,0));
        }
        15%{
            background-image: linear-gradient(to top, var(--bark) 30%, rgba(0,0,0,0));
        }
        20%{
            background-image: linear-gradient(to top, var(--bark) 40%, rgba(0,0,0,0));
        }
        25%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 10%, var(--bark) 50%, rgba(0,0,0,0));
        }
        30%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 15%, var(--bark) 60%, rgba(0,0,0,0));
        }
        35%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 30%, var(--bark) 70%, rgba(0,0,0,0));
        }
        40%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 45%, var(--bark) 80%, rgba(0,0,0,0));
        }
        45%{
            background-image: linear-gradient(to top, var(--smudge) 20%, var(--bark) 60%, var(--bark) 80%, rgba(0,0,0,0));
        }
        50%{
            background-image: linear-gradient(to top, var(--smudge) 40%, var(--bark) 75%, var(--bark) 80%, rgba(0,0,0,0));
        }
        55%{
            background-image: linear-gradient(to top, var(--smudge) 60%, var(--bark) 75%, var(--bark) 80%, rgba(0,0,0,0));
        }
        60%{
            background-image: linear-gradient(to top, var(--smudge) 40%, var(--bark) 76%, var(--bark) 79%, rgba(0,0,0,0));
        }
        65%{
            background-image: linear-gradient(to top, var(--smudge) 20%, var(--bark) 77%, var(--bark) 78%, rgba(0,0,0,0) 95%);
        }
        70%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 60%, rgba(0,0,0,0) 90%);
        }
        75%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 45%, rgba(0,0,0,0) 90%);
        }
        80%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 30%, rgba(0,0,0,0) 95%);
        }
        85%{
            background-image: linear-gradient(to top, var(--smudge), var(--bark) 15%, rgba(0,0,0,0) 95%);
        }
        90%{
            background-image: linear-gradient(to top, var(--bark), rgba(0,0,0,0));
        }
    }
</style>