<script>
    import GalerieFeat from './GalerieFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
<div class="girlcave-ctr">
    <div class="girlCaveTitle"> Girl Cave </div>
    <div class="girlCavePromos">
        <GalerieFeat 
            title={"The Queen Moves Forward"} 
            image={"https://ipfs.fleek.co/ipfs/bafybeiffcxwaruzdgafmeusex7qr3wjcdfz57wsrruzvitbqyca3mkqtvi"}
        />
        <ProjectFeat />
    </div>
    <div class="generic-ctr">
        <iframe id="casually-css-roadshow0" style="width:100%;" height="500" src="https://www.youtube-nocookie.com/embed/zKJXCX3J_-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        text-shadow: -4px 4px var(--blossom);
        margin-left: 2vw;
        margin: 6vh 0 12vh 2vw;
    }

    .girlCavePromos{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .generic-ctr{
        width: 100%;
        height: max-content;
        display: grid;
        justify-items: center;
    }

    #casually-css-roadshow0{
        width: 90%;
        max-width: 900px;
        margin: 4vh 0 4vh 0;
    }

</style>