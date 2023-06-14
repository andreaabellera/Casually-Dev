<script>
    import { fade } from 'svelte/transition';

    // Page transition
    let visible = false
    setTimeout(()=>{ visible = true }, 600)
</script>

{#if visible}
<div class="intermission" transition:fade>
    <div id="last-update" class="taviraj"> 
        Last updated: May 2023 
    </div>
    <object title="Andrea Abellera's Resume" data="/resume.pdf" type="application/pdf">
        <p class="pretty-text gentiumBasic"> 
            Unable to embed PDF file <br><br>
            <a href="https://dweb.link/ipfs/bafybeifuzl7ala7mq2btou4eggom6z6yqekrf5ekhl2br527fbbufc5fbq">View source instead</a>
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

    a{
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