<script>
    import Bike from "./art/Bike.svelte";
    import { fade } from 'svelte/transition';
    import { Link } from "svelte-routing";

    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 1000)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

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

<link href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap" rel="stylesheet">

{#if visible}
    <div class="intermission" transition:fade>
        <div id="ridin"> <Bike /> </div>
        <div class="filler"></div>
        <div class="pretty-text"> Travelling... </div>
        <Link to="andrea/portfolio">
            <div id="teleporter"></div>
        </Link>
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