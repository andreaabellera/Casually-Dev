<script>
    import Bike from "./compo/art/Bike.svelte"
    import { fade } from 'svelte/transition'

    // Page transition
    let visible
    setTimeout(()=>{ visible = true }, 1000)

    let id2 = setInterval(ridin, 40)
    let perc = 0
    function ridin() {
        if(perc == 70)
            document.getElementById("teleporter").click()
        else if (perc == 80)
            clearInterval(id2)
        else if (perc > 25)
            document.getElementById("ridin").style.left = perc + "%"
        perc += 1
    }
</script>

{#if visible}
    <div class="intermission" transition:fade>
        <div id="ridin"> <Bike /> </div>
        <div class="filler"></div>
        <div class="pretty-text"> Travelling... </div>
        <a href="/laruelle">
            <div id="teleporter"></div>
        </a>
    </div>
{/if}

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

    .pretty-text {
        font-family: 'La Belle Aurore', cursive;
        font-size: 3em;
        margin-top: 1.5vh;
        width: 90%;
        color: var(--coffee);
    }

    #ridin{
        position: fixed;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 0%;
    }

    .filler{
        height: 35vh;
    }

</style>