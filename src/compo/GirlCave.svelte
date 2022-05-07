<script>
    import GalleryFeat from './GalleryFeat.svelte';
    import ProjectFeat from './ProjectFeat.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
<div class="girlcave-ctr">
    <div class="girlCaveTitle"> Girl Cave </div>
    <div class="girlCavePromos">
        <GalleryFeat image={"https://storageapi.fleek.co/4ce00652-7eee-4e30-ba5f-e84651fedf6e-bucket/The Queen Moves Forward.jpg"}></GalleryFeat>
        <ProjectFeat></ProjectFeat>
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