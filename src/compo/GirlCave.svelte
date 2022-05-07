<div class="girlcave-ctr">
    <link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
    <div class="girlCaveTitle"> Girl Cave </div>
    <div class="girlCavePromos">
        <div class="galleryFeat">
            Original artwork
        </div>
        <div class="projectFeat">
            Casually CSS
        </div>
    </div>
</div>

<style>
    .girlcave-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
    }

    .girlCaveTitle{
        font-family: 'Mr De Haviland', cursive;
        font-size: 8.5em;
        color: var(--passione);
        text-shadow: -4px 4px #FFDBDB;
        margin-left: 2vw;
        margin: 12vh 0 12vh 2vw;
    }

    .girlCavePromos{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .girlCavePromos div{
        margin-bottom: 5vh;
    }

    .galleryFeat{
        background-color: var(--bark);
        height: 80vh;
        width: 100%;
    }

    .projectFeat{
        background-color: var(--smudge);
        height: 80vh;
        width: 100%;
    }
</style>