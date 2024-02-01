<script>
    import { fade } from 'svelte/transition';

    // Page transition
    let visible = false
    setTimeout(()=>{ visible = true }, 600)

    let lastUpdated = "February 2024"

    function download(){
        fetch("resume.pdf").then(resp => resp.arrayBuffer()).then(resp => {
            let file = new Blob([resp], {type: 'application/pdf'});
            let url = window.URL.createObjectURL(file)
            let link = document.createElement('a')
            link.href = url;
            link.download = "Andrea Abellera - Resume " + lastUpdated
            link.click()
            window.URL.revokeObjectURL(url)
        })
    }
</script>

{#if visible}
<div class="intermission" transition:fade>
    <div id="last-update" class="taviraj"> 
        Last updated: {lastUpdated}
    </div>
    <object title="Andrea Abellera's Resume" data="/resume.pdf" type="application/pdf">
        <p class="pretty-text gentiumBasic"> 
            Unable to embed PDF file <br><br>
            <span on:click={download} on:keypress={download} role="link" tabindex="0">
                Click here to download instead
            </span>
        </p>
    </object>
</div>
{/if}

<style>
    .intermission {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto auto;
        justify-items: center;
        text-align: center;
    }

    #last-update{
        color: var(--mocha);
        margin-bottom: 3vh;
    }

    .pretty-text {
        font-size: 1.3em;
        margin: 1vh 0 3vh 0;
        text-align: center;
        color: var(--coffee);
    }

    p span{
        color: var(--passione);
        text-decoration: underline;
    }

    object{
        height: 1000px;
        width: 60%;
        object-fit: contain;
    }

    @media (max-width: 1000px) {
        object{
            width: 100%;
            height: 750px;
        }
    }
</style>