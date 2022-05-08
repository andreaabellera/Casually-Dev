<script>
    import GalerieFeat from './GalerieFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectNav(event) {
        dispatch("selection", {
            id: event.detail.id
        });
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
<div class="girlcave-ctr">
    <div class="girlCaveTitle"> Girl Cave </div>
    <div class="girlCavePromos">
        <GalerieFeat 
            title={"The Queen Moves Forward"} 
            image={"https://ipfs.fleek.co/ipfs/bafybeiffcxwaruzdgafmeusex7qr3wjcdfz57wsrruzvitbqyca3mkqtvi"}
            on:selection={selectNav}
        />
        <ProjectFeat />
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
        margin: 6vh 0 12vh 2vw;
    }

    .girlCavePromos{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

</style>