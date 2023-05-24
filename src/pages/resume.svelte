<script>
    import { onMount } from 'svelte';

    onMount(()=>{ document.getElementById("resume-direct").click() })
</script>

<div class="intermission">
    <div id="last-update" class="taviraj"> 
        Last updated: May 2023 
    </div>
    <object title="Andrea Abellera's Resume" data="/resume.pdf" type="application/pdf">
        <p class="pretty-text gentiumBasic"> 
            Unable to embed PDF file <br><br>
            <a href="https://ipfs.io/ipfs/bafybeifuzl7ala7mq2btou4eggom6z6yqekrf5ekhl2br527fbbufc5fbq">View the source file instead</a>
        </p>
    </object>
</div>

<style>
    .intermission {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto auto;
        margin: 10vh 0 15vh 0;
        justify-items: center;
        text-align: center;
    }

    #last-update{
        color: var(--mocha);
        margin-bottom: 3vh;
    }

    .pretty-text {
        font-size: 1.3em;
        margin: 1vh 0 3vh 10vw;
        width: 80vw;
        text-align: center;
        color: var(--mocha);
    }

    a{
        color: var(--passione);
        text-decoration: underline;
    }

    object{
        height: 1000px;
        width: 60%;
    }

    @media (max-width: 1000px) {
        object{
            width: 100%;
        }
    }
</style>