<script>
    import { fly } from 'svelte/transition'
	import Heading from './compo/Heading.svelte'
    import resData from './content/resources.yml'

    // Get resources data
    let resourceList = resData.resources

    // Page transition
    let visible, listVisible = false
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{ 
        listVisible = true
        // Clip path redraw for Safari
        document.getElementById("res-index").style.clipPath = "polygon(0% 0%, 100% 0%, 100% 12%, 100vw 12%, 100vw 100%, 0% 100%)"
    },800)

    // Adjust index card position on desktop
    function checkScroll(){
        if(!globalThis.isMobile){
            let scroll = document.body.scrollTop
            let indexCard = document.getElementById("res-index");
            if(scroll > 20){
                let scrollOffset = (scroll-20)*0.05
                indexCard.style.top = Math.max(30, 45-scrollOffset) + "vh"
            }
            else
                indexCard.style.top = "45vh"
        }
    }

    // Toggle on/off index card on mobile
    $: toggle = false
    function toggleIndex(){ toggle = !toggle }

    // Shift focus on first descendant resource after href anchor click
    function shiftFocus(){
        let resId = this.innerText.toLowerCase().replaceAll(' ','-')
        let inner = this.classList.contains("inner")
        if(inner){
            let resGroup = document.getElementById(resId).parentElement.nextElementSibling
            resGroup.firstChild.focus()
        }
        else{
            let resGroup = document.getElementById(resId).parentElement
            resGroup.querySelector(".resource a").focus()
        }
    }
</script>

<svelte:body on:scroll={checkScroll}></svelte:body>

{#if visible}
<div class="resources-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}" aria-label="Resources route page content">
    {#if !globalThis.isMobile}
        <Heading title={"RESOURCES"} />
    {/if}

    {#if listVisible}
    <div 
        id="res-index" 
        role="region" 
        aria-label="Index of dev resources" 
        in:fly="{{ x: 500, duration: 600 }}" 
        class={toggle ? 'toggled' : ''} 
        on:click={toggleIndex}
    >
        <div id="mbl-hamburger" />
        <div id="res-index-inner" class="gentiumBasic">
            {#if globalThis.isMobile}
            <h2> Index of Resources </h2>
            {/if}
            {#each resourceList as res, _}
            <div class="index-list">
                <a href={'#' + res.title.toLowerCase().replaceAll(' ','-')} on:click={shiftFocus}> {res.title} </a>
                {#if res.subcategories}
                    <ul>
                    {#each res.subcategories as sub, _}
                        <li>
                            <span class="bullet"></span>
                            <a href={'#' + sub.title.toLowerCase().replaceAll(' ','-')} on:click={shiftFocus} class="inner"> {sub.title} </a>
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
            
            <!-- Categories     -->
            {#each resourceList as res, _}
                <div class="res-card" role="listitem" in:fly="{{ y: 500, duration: 600 }}">
                    <h2 
                        id={res.title.toLowerCase().replaceAll(' ','-')} 
                        class="laBelleAurore xx-large"
                    > 
                        {res.title} 
                    </h2>

                    <!-- Subcategories -->
                    {#if res.subcategories}
                        <div class="subcat">
                        {#each res.subcategories as sub, _}
                            <div>
                                <h3
                                    id={sub.title.toLowerCase().replaceAll(' ','-')}  
                                    class="taviraj subcatTitle"
                                > 
                                    {sub.title}
                                </h3>
                                {#if sub.description}
                                    <p class="subcatPar ptSans"> {sub.description} </p>
                                {/if}
                            </div>

                            <!-- Resources -->
                            <div class="resource">
                            {#each sub.resources as resChild, _}
                                <a href={resChild.link} class="ptSans {resChild.highlight ? 'highlight' : ''}" aria-label="Link to {resChild.title} website">
                                    {#if !resChild.fallback}
                                        <iframe
                                            tabindex="-1"
                                            title="{resChild.title} preview" 
                                            src={resChild.link}
                                            scrolling="no"
                                            sandbox="" 
                                            height="650px" 
                                            width="1500px" 
                                            loading="eager"
                                        />
                                    {:else}
                                        <iframe 
                                            tabindex="-1"
                                            title="Website preview" 
                                            src="/fallback.html" 
                                            scrolling="no"
                                            sandbox="" 
                                            height="650px" 
                                            width="1500px" 
                                            loading="eager"
                                        />
                                    {/if}
                                    <h4 class="ptSans"> {resChild.title} </h4>
                                    {#if resChild.description}
                                        <p> {resChild.description} </p>
                                    {/if}
                                </a>
                            {/each}
                            </div>

                        {/each}
                        </div>
                    {/if}

                </div>
            {/each}
        {/if}
    </div>
</div>
{/if}

<style>
    .resources-feat-ctr {
        height: max-content;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: -8vh 0 10vh 0;
    }

    #res-index{
        position: fixed;
        z-index: 2;
        top: 45vh;
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

    #mbl-hamburger{
        position: absolute;
        top: 3px;
        right: 3px;
        height: 50px;
        width: 50px;
        background: repeating-linear-gradient(to bottom, var(--passione), var(--passione) 10px, transparent 11px, transparent 20px);
        transform: scale(0.5);

    }

    #res-index-inner{
        font-size: 90%;
        height: max-content;
        width: 80%;
        margin: 3em 0 3em 0;
        display: flex;
        flex-direction: column;
    }

    #res-index h2{
        margin: 0 0 3vh 0;
        background: var(--blossom);
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
        width: 55vw;
        min-width: 45em;
    }

    #res-list a{
        cursor: url(https://ipfs.io/ipfs/bafybeicuryldiwjiv5qynwnswb6qxv2lujyxvcv3oodzrbegtq247jubvm), pointer;
    }

    #res-list h2{
        color: var(--coffee);
        font-weight: 400;
        margin: 9vh 0 0 0;
    }

    .subcatTitle, .subcatPar{
        margin-left: 4%;
    }

    .subcatTitle{
        margin-top: 8vh;
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
        width: 80%;
    }

    .resource a{
        height: 33vh;
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

    .highlight{
        background: var(--gold) !important;
    }

    .resource a:hover{
        border: 3px groove var(--chartreuse);
        transition: 0.1s ease-in-out;
    }

    .resource a iframe{
        grid-row: 1/2;
        border: none;
        pointer-events: none;
        transform: scale(20%) translate(-200%,-200%);
    }

    .resource a h4, .resource a p{
        width: 17%;
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
        line-height: 20px;
    }

    @media (max-width: 700px) {
        .resources-feat-ctr{
            flex-direction: column;
        }

        #res-index{
            margin: 0;
            top: 16vh;
            left: -100%;
            width: 115%;
            clip-path: polygon(0% 0%, 100% 0%, 100% 12%, 100vw 12%, 100vw 100%, 0% 100%);
        }

        #res-index.toggled{
            left: 0;
        }

        #res-index-inner{
            font-size: 100%;
            width: 92%;
            margin: 2em 0 2em 0;
        }

        .index-list{
            margin-left: 5%;
        }

        #res-list{
            width: 100%;
            margin-left: 0;
            font-size: 1.1em;
            line-height: 2em;
        }

        #res-list h2{
            font-size: 240%;
            margin-left: 3vw;
            transform: scaleY(120%);
        }

        .subcat, .resource{
            width: 100vw;
        }

        .subcatTitle, .subcatPar{
            margin-left: 10%;
            width: 80%;
        }

        .resource{
            width: 100%;
        }

        .resource a{
            height: 38vh;
        }

        .resource a h4{
            margin-top: 1%;
        }

    }
</style>