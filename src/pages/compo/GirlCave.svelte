<script>
    import GalerieFeat from './GalerieFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
<div class="ladycave-ctr">
    <div class="ladyCaveTitle"> The Cave </div>
    <div class="ladyCavePromos">
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
    .ladycave-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-column-gap: 6vh;
        grid-template-rows: auto 1fr;
    }

    .ladyCaveTitle{
        font-family: 'Mr De Haviland', cursive;
        font-size: 10em;
        color: var(--passione);
        text-shadow: -4px 4px var(--blossom);
        width: 100%;
        margin: 6vh 0 12vh 12vw;
    }

    .ladyCavePromos{
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

    @media (max-width: 600px) {
        .ladyCaveTitle{
            text-align: center;
            font-size: 7em;
            margin: 6vh 0 12vh 0vw;
        }
    }

</style>