<script>
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte'
	import Heading from './compo/Heading.svelte'
    import resData from './content/resources.yml'

    // Get resources data
    let resourceList = resData.resources

    // Page transition
    let visible, indexVisible, listVisible = false
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{ listVisible = true }, 800)
    setTimeout(()=>{
        if(!globalThis.isMobile) 
            indexVisible = true
    }, 800)

    // Generate resource list
    onMount(()=>{
        setTimeout(()=>{
            let list = document.getElementById("res-list")
            for(let res of resourceList){
                console.log(list)
                let category = document.createElement("div")
                category.classList.add("res-card")


                list.appendChild(category)
            }
        }, 800)
    })

</script>

{#if visible}
<div class="resources-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" aria-label="Resources route page content">
    {#if !globalThis.isMobile}
        <Heading title={"RESOURCES"} />
    {/if}

    <div class="res-content">
        {#if indexVisible}
        <div id="res-index" role="region" aria-label="Index of dev resources" in:fly="{{ x: 500, duration: 600 }}">
            <div id="res-index-inner" class="gentiumBasic">
                <!-- <h2> Index </h2> -->
                {#each resourceList as res, _}
                <div class="index-list">
                    <a href="#educational"> {res.title} </a>
                    {#if res.subcategories}
                        <ul>
                        {#each res.subcategories as sub, _}
                            <li>
                                <span class="bullet"></span>
                                <a href="#{sub.title}"> {sub.title} </a>
                            </li>
                        {/each}
                        </ul>
                    {/if}
                </div>
                {/each}
            </div>
        </div>
        {/if}

        <div id="res-list" role="list" aria-label="Dev Resources">
            {#if listVisible}
                <!-- <p in:fly="{{ y: 500, duration: 600 }}">
                    <i> Kickstart your frontend web development journey or enhance your design workflow or toolbox with free online resources! </i>
                </p> -->
                
                <!-- Categories     -->
                {#each resourceList as res, _}
                    <div class="res-card" role="listitem" in:fly="{{ y: 500, duration: 600 }}">
                        <h2 class="laBelleAurore xx-large"> {res.title} </h2>

                        <!-- Subcategories -->
                        {#if res.subcategories}
                            <div class="subcat">
                            {#each res.subcategories as sub, _}
                                {#if sub.link}
                                    <a href={sub.link}>
                                        <h3 class="taviraj subcatTitle"> {sub.title} </h3>
                                    </a>
                                {:else}
                                    <h3 class="taviraj subcatTitle"> {sub.title} </h3>
                                {/if}
                                {#if sub.description}
                                    <p class="subcatPar ptSans"> {sub.description} </p>
                                {/if}

                                <!-- Resources -->
                                {#if sub.resources}
                                    <div class="resource">
                                    {#each sub.resources as resChild, _}
                                        <a href={resChild.link} class="ptSans">
                                            <iframe title="{resChild.title} preview" src={resChild.link} scrolling="no" sandbox="" height="650px" width="1500px" loading="eager" />
                                            <h4 class="ptSans"> {resChild.title} </h4>
                                            {#if resChild.description}
                                                <p> {resChild.description} </p>
                                            {/if}
                                        </a>
                                    {/each}
                                    </div>
                                {/if}

                            {/each}
                            </div>
                        {/if}

                    </div>
                {/each}
            {/if}
        </div>
    </div>

    <script>
		// Detect mobile
		if (!globalThis.isMobile)
			document.getElementById("res-list").style.marginTop = "-30vh"
	</script>

</div>
{/if}

<style>
    .resources-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    .res-content{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    #res-index{
        background-color: var(--oyster);
        height: max-content;
        min-height: 45vh;
        width: 25vw;
        display: grid;
        justify-items: center;
        align-items: center;
        box-shadow: 0.05em 0.15em 0.5em rgba(0,0,0,0.2);
        margin: -3vh 0 3vh 6vw;
        overflow-y: hidden;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    #res-index-inner{
        font-size: 90%;
        height: max-content;
        width: 80%;
        margin: 3em 0 3em 0;
        display: flex;
        flex-direction: column;
    }

    .index-list{
        margin-left: 15%;
    }

    #res-index-inner a{
        color: var(--coffee);
    }

    #res-index-inner a:hover{
        text-decoration: underline;
    }

    #res-index-inner a, #res-index-inner ul{
        margin: 0;
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    #res-index-inner li{
        display: flex;
    }

    #res-index-inner li .bullet{
        height: 15px;
        width: 15px;
        background-image: url(https://ipfs.io/ipfs/bafybeiagcqt3aymf4ee4kekmra6gce5k3tcd7ypc6c6lxatugmdxmdhtwa);
        background-size: cover;
        transform: rotate(-90deg);
        margin-right: 10px;
    }

    #res-index-inner li a{
        color: var(--mocha);
    }

    #res-list{
        width: 45vw;
        min-width: 45em;
        margin-top: -10vh;
    }

    #res-list a{
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    #res-list h2{
        font-weight: 400;
        margin: 9vh 0 0 0;
    }

    .subcatTitle, .subcatPar{
        margin-left: 4%;
    }

    .subcatTitle{
        margin-top: 6vh;
    }

    a .subcatTitle:hover{
        text-decoration: underline;
    }

    .subcatPar{
        margin-bottom: 3vh;
    }

    .subcat{
        width: 100%;
    }

    .resource{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        width: 100%;
    }

    .resource a{
        height: 40vh;
        width: 300px;
        margin: 1em;
        display: grid;
        grid-template-rows: 50% auto 1fr;
        overflow: hidden;
        text-align: center;
        background: var(--oyster);
        box-shadow: 0.15em 0.15em 0.5em 0.1em rgba(0,0,0,0.2);
        border: 3px solid rgba(0,0,0,0);
    }

    .resource a:hover{
        border: 3px groove var(--chartreuse);
        transition: 0.1s ease-in-out;
    }

    .resource a iframe{
        border: none;
        pointer-events: none;
        transform: scale(20%) translate(-200%,-200%);
    }

    .resource a h4, .resource a p{
        width: 16%;
        margin-left: 2%;
    }

    .resource a h4{
        color: var(--ink);
        margin: 2% 0 0 0;
        width: 20%;
    }

    .resource a p{
        color: var(--ink);
        font-size: 80%;
    }

    @media (max-width: 700px) {
        #res-index{
            display: none;
        }

        .res-content{
            flex-direction: column;
        }

        #res-list{
            width: 100%;
            margin-left: 0;
            font-size: 1.1em;
            line-height: 2em;
        }

        .subcat, .resource{
            width: 100vw;
        }

        .subcatTitle, .subcatPar{
            margin-left: 10%;
            width: 80%;
        }
    }
</style>