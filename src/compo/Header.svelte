<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectNav() {
        dispatch("selection", {
            id: this.id
        });
    }
</script>

<div class="header-ctr">
    <link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <div class="title-container">
        <div class="qtrlex"> Quaintrellex </div>
        <div class="tagline"> not an existential blogspot </div>
    </div>
    <div class="nav-container">
        <div class="nav-array gentiumBasic">
            <div id="nav-chezmoi" on:click={selectNav}> chez moi </div>
            <div id="nav-blog" on:click={selectNav}> blog </div>
            <div id="nav-galerie" on:click={selectNav}> galerie </div>
            <div id="nav-journals" on:click={selectNav}> journals </div>
            <div id="nav-revues" on:click={selectNav}> revues </div>
            <div id="nav-andrea" on:click={selectNav}> andrea </div>
        </div>
        <div class="ribbon">
            <!-- <div class="bow"></div> -->
            <div class="string"></div>
        </div>
    </div>
</div>

<style>
    .header-ctr{
        position: fixed;
        z-index: 20;
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-image: linear-gradient(to bottom, var(--linen) 5%, rgba(255,255,255,0));
    }

    .title-container{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .qtrlex{
        font-family: 'Mr De Haviland', cursive;
        font-size: 5.5em;
        color: var(--coffee);
        margin-left: 2vw;
        margin: 1vh 0 0 2vw;
    }

    .tagline{
        color: var(--coffee);
        font-family: 'Gentium Basic', serif;
        font-size: 1em;
        margin-left: 4.5vw;
        transform: translateY(-2.3em);
    }

    .nav-container{
        display: relative;
        height: 8em;
        width: 50vw;
        display: grid;
        grid-template-rows: 30% 1fr;
    }

    .nav-array{
        display: relative;
        z-index: 9;
        display: flex;
        justify-content: space-evenly;
        height: 50%;
        margin: 4vh 0 0 0;
        font-size: 1.3em;
        font-weight: 600;
    }

    .nav-array div{
        cursor: pointer;
        background-color: rgba(0,0,0,0);
        color: var(--ink);
        height: 100%;
        padding: 5px;
    }

    .nav-array div:hover{
        background-color: var(--ink);
        color: var(--oyster);
        transition: 0.2s ease-in-out;
    }

    .ribbon{
        position: relative;
        height: 100%;
        width: 100%;
    }

    /* .bow{
        position: absolute;
        height: 5em;
        width: 5em;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--denim);
    } */

    .string{
        position: absolute;
        height: 0.4em;
        width: 90%;
        background-color: var(--denim);
        margin-top: 0.8vh;
        box-shadow: 0.03em 0.05em 0.1em rgba(0,0,0,0.4);
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

</style>