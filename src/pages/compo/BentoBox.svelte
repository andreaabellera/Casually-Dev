<script>
    /* Defining BentoBox layouts. Layout will be determined by props passed
    1. Single artwork (art)
    2. Single codebox (title, code)
    3. HTML and CSS codebox (htmlCode, cssCode)
    4. Artwork, HTML and CSS codebox (htmlCode, cssCode, render=true)
    */

    // Express artworks import
    import Beluga from "casually-css/@svelte/beluga.svelte"
    import Bike from "casually-css/@svelte/bike.svelte"
    import Bison from "casually-css/@svelte/bison.svelte"
    import Blossom from "casually-css/@svelte/blossom.svelte"
    import Boba from "casually-css/@svelte/boba.svelte"
    import Button from "casually-css/@svelte/button.svelte"
    import Calendar from "casually-css/@svelte/calendar.svelte"
    import Cookie from "casually-css/@svelte/cookie.svelte"
    import Dugong from "casually-css/@svelte/dugong.svelte"
    import Hippo from "casually-css/@svelte/hippo.svelte"
    import Lollipop from "casually-css/@svelte/lollipop.svelte"
    import Matcha from "casually-css/@svelte/matcha.svelte"
    import Octopus from "casually-css/@svelte/octopus.svelte"
    import Orange from "casually-css/@svelte/orange.svelte"
    import Swiss from "casually-css/@svelte/swiss.svelte"

    // Props
    export let art = null
    export let title = "Code Box"
    export let code = null
    export let htmlCode = null
    export let cssCode = null
    export let render = false

    let renderCode = () => {
        return htmlCode + "<style>" + cssCode + "</style>"
    }

</script>

<div class="bentoBox">
    <div class="bentoContent">
        <div class="bentoArt">
            {#if art}
                <!-- Fow now we have uglie list while I research strings to tags -->
                {#if art == "beluga"}
                    <Beluga />
                {:else if art == "bike"}
                    <Bike />
                {:else if art == "bison"}
                    <Bison />
                {:else if art == "blossom"}
                    <Blossom />
                {:else if art == "boba"}
                    <Boba />
                {:else if art == "button"}
                    <Button />
                {:else if art == "calendar"}
                    <Calendar />
                {:else if art == "cookie"}
                    <Cookie />
                {:else if art == "dugong"}
                    <Dugong />
                {:else if art == "hippo"}
                    <Hippo snap = {{iterationCount:0}} />
                {:else if art == "lollipop"}
                    <Lollipop />
                {:else if art == "matcha"}
                    <Matcha />
                {:else if art == "octopus"}
                    <Octopus />
                {:else if art == "orange"}
                    <Orange />
                {:else if art == "swiss"}
                    <Swiss />
                {/if}
            {:else if render}
                {@html renderCode()}
            {/if}
        </div>

        {#if htmlCode && cssCode}
            <div class="bentoCode">
                <h3> HTML </h3>
                <textarea class="codeInner">
                    {htmlCode}
                </textarea>
            </div>
            <div class="bentoCode">
                <h3> CSS </h3>
                <textarea class="codeInner">
                    {cssCode}
                </textarea>
            </div>
        {:else if code}
            <div class="bentoCode">
                <h3> {title} </h3>
                <textarea class="codeInner">
                    {code}
                </textarea>
            </div>
        {/if}
    </div>
</div>


<style>
    .bentoBox {
        height: max-content;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .bentoContent{
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: max-content max-content;
        grid-column-gap: 5vw;
        grid-row-gap: 2em;
    }

    .bentoArt{
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .bentoCode{
        background-color: #3e3e3e;
        border-radius: 0.5em;
        border: 0.4em groove #4e4e4e;
        display: grid;
        justify-items: center;
        align-items: center;
        width: max-content;
        min-width: 35em;
    }

    .bentoCode h3{
        font-size: 1.5em;
        font-weight: bold;
        color: var(--oyster);
        margin: 2vh 0 2vh 0;
        font-family: 'Syncopate', sans-serif;
    }

    textarea{
        resize: none;
    }

    .codeInner{
        background-color: #2a2a2a;
        text-align: left;
        height: auto;
        min-height: 80%;
        width: 95%;
        color: var(--chartreuse);
        padding: 1em;
        margin: 4em 0 4em 0;
        font-family: 'Cousine', monospace;
        border-color: #4e4e4e;
    }

    .codeInner::selection{
        background-color: #3e3e3e;
    }

    @media (max-width: 700px) {
        .bentoContent{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .bentoArt{
            max-width: 90vw;
            margin-bottom: 3vw;
        }

        .bentoCode{
            min-width: 90vw;
        }

        .codeInner{
            width: 90%;
        }

        textarea::-webkit-scrollbar {
            width: 8px;
        }
        
        textarea::-webkit-scrollbar-track {
            box-shadow: inset 0 0 4px rgba(0,0,0,0.3); 
            border-radius: 10px;
        }
        
        textarea::-webkit-scrollbar-thumb {
            background: var(--chartreuse); 
            box-shadow: inset -1px -2px 8px rgba(0,0,0,0.3); 
            border-radius: 10px;
        }
    }


</style>