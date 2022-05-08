<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectNav() {
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        this.classList.add("selected");
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
        <div class="tagline"> Bonne nouvelle journée </div>
    </div>
    <div class="nav-container">
        <div class="nav-array gentiumBasic">
            <div id="nav-chezmoi" class="nav selected" on:click={selectNav}> chez moi </div>
            <div id="nav-blog" class="nav" on:click={selectNav}> blog </div>
            <div id="nav-galerie" class="nav" on:click={selectNav}> galerie </div>
            <div id="nav-journals" class="nav" on:click={selectNav}> journals </div>
            <div id="nav-revues" class="nav" on:click={selectNav}> revues </div>
            <div id="nav-andrea" class="nav" on:click={selectNav}> andrea </div>
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
        width: 60%;
    }

    .qtrlex{
        font-family: 'Mr De Haviland', cursive;
        font-size: 5.5em;
        color: var(--coffee);
        padding: 1vh 0 0 2vw;
    }

    .tagline{
        color: var(--mocha);
        font-family: 'Gentium Basic', serif;
        font-size: 0.9em;
        margin-left: 4.5vw;
        width: 100%;
        transform: translateY(-2.2em);
    }

    .nav-container{
        position: relative;
        height: 8em;
        width: 50vw;
        display: grid;
        grid-template-rows: 30% 1fr;
    }

    .nav-array{
        display: relative;
        z-index: 9;
        display: grid;
        grid-template-columns: 20% 16% 16% 16% 16% 16%;
        justify-items: center;
        height: 50%;
        margin: 4vh 0 0 10vw;
        font-size: 1.3em;
    }

    .nav-array div{
        cursor: pointer;
        background-image: radial-gradient(rgba(0,0,0,0));
        color: var(--ink);
        height: 100%;
        padding: 5px;
        mix-blend-mode: difference;
    }

    .nav-array div:hover{
        font-weight: 600;
        font-size: 120%;
        transition: 0.2s ease-in-out;
        animation: mark 0.4s ease-in-out;
    }

    @keyframes mark{
        0%{
            background-image: radial-gradient(circle, var(--mocha) 5%, rgba(0,0,0,0) 5%, rgba(0,0,0,0));
        }
        15%{
            background-image: radial-gradient(circle, var(--mocha) 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0));
        }
        30%{
            background-image: radial-gradient(circle, var(--mocha) 20%, rgba(0,0,0,0) 20%, rgba(0,0,0,0));
        }
        45%{
            background-image: radial-gradient(circle, var(--mocha) 30%, rgba(0,0,0,0) 30%, rgba(0,0,0,0));
        }
        60%{
            background-image: radial-gradient(circle, var(--mocha) 20%, rgba(0,0,0,0) 20%, rgba(0,0,0,0));
        }
        75%{
            background-image: radial-gradient(circle, var(--mocha) 10%, rgba(0,0,0,0) 10%, rgba(0,0,0,0));
        }
        90%{
            background-image: radial-gradient(circle, var(--mocha) 5%, rgba(0,0,0,0) 5%, rgba(0,0,0,0));
        }
    }

    .nav-array div:nth-of-type(1):hover, .nav-array div:nth-of-type(1).selected{
        transform: rotateZ(5deg);
    }

    .nav-array div:nth-of-type(3):hover, .nav-array div:nth-of-type(3).selected{
        transform: rotateZ(-3deg);
    }

    .nav-array div:nth-of-type(4):hover, .nav-array div:nth-of-type(4).selected{
        transform: rotateZ(6deg);
    }
    .nav-array div:nth-of-type(5):hover, .nav-array div:nth-of-type(5).selected{
        transform: rotateZ(-4deg);
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

    .selected{
        font-weight: 600;
        font-size: 120%;
    }

    @media (max-width: 600px) {
        .nav-container{
            display: none;
        }

        .tagline{
            margin-left: 13vw;
        }
    }

</style>