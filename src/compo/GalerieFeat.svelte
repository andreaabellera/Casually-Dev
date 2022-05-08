<script>
    export let title = "Collection of Artworks";
    export let image = "";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectNav() {
        dispatch("selection", {
            id: "nav-galerie"
        });
    }
</script>

<div class="gallery-feat-ctr" on:click={selectNav}>
    <div class="original-text syncopate"> ORIGINAL ARTWORKS </div>
    <div class="title-text mrDeHaviland"> {title} </div>
    <div class="view-text lancelot"> view gallery </div>
    <div class="grad"></div>
    <div class="img-ctr" style="background-image:url({image});"></div>
</div>

<style>
    .gallery-feat-ctr {
        position: relative;
        background-color: var(--bark);
        height: 70vh;
        width: 100%;
        margin-bottom: 5vh;
        cursor: pointer;
    }

    .gallery-feat-ctr:hover {
        opacity: 96%;
        transition: 0.15s;
    }

    .img-ctr{
        position: absolute;
        z-index: 3;
        height: 100%;
        width: 100%;
        background-position: 0 10%;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: inset 1.5em 1em 6em rgba(0,0,0,0.8);
        filter: brightness(1);
        animation: brighten 3s ease-in-out;
    }

    .original-text{
        position: absolute;
        z-index: 5;
        top: 1em;
        left: 1em;
        font-size: 1.5em;
        color: var(--oyster);
        font-weight: 400;
        opacity: 60%;
    }

    .title-text{
        position: absolute;
        z-index: 6;
        width: 100%;
        top: 50%;
        left: 70%;
        transform: translate(-50%, -30%);
        font-size: 9em;
        color: var(--oyster);
        text-shadow: -4px 4px var(--passione);
        opacity: 70%;
        animation: fadeFlyInTitle 3.5s ease-in-out;
    }

    .view-text{
        position: absolute;
        z-index: 7;
        bottom: 2em;
        right: 25vw;
        font-size: 3em;
        color: var(--mocha);
        animation: fadeFlyInText 3.5s ease-in-out;
        opacity: 80%;
    }

    .grad{
        position: absolute;
        z-index: 4;
        bottom: 0;
        height: 90%;
        width: 100%;
        background-image: linear-gradient(to top, black, rgba(0,0,0,0));
        animation: riseGrad 3.5s ease-in-out;
    }

    @keyframes brighten {
        0% {
            filter: brightness(0.1);
        }
        100% {
            filter: brightness(1);
        }
    }

    @keyframes riseGrad {
        0% {
            height: 0%;
        }
        90% {
            height: 0%;
        }
        100% {
            height: 70%;
        }
    }

    @keyframes fadeFlyInTitle {
        0% {
            opacity: 0%;
            top: 70%;
        }
        90% {
            opacity: 0%;
            top: 70%;
        }
        100% {
            opacity: 70%;
            top: 50%;
        }
    }

    @keyframes fadeFlyInText {
        0% {
            opacity: 0%;
            bottom: 0em;
        }
        90% {
            opacity: 0%;
            bottom: 0em;
        }
        100% {
            opacity: 70%;
            bottom: 2em;
        }
    }

    @media (max-width: 1200px) {
        .title-text{
            font-size: 7em;
            left: 55%;
        }
    }

    @media (max-width: 600px) {
        .original-text{
            font-size: 0.8em;
        }

        .title-text{
            width: auto;
            font-size: 4.5em;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }

        .view-text{
            font-size: 1.5em;
            bottom: 3em;
            transform: translateY(1.5em);
        }
    }

</style>