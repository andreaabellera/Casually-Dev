<script>
    import BentoBox from './BentoBox.svelte'
    // Saisons pour la Ruelle Charmante

    export let title = "Unknown"
    export let image = null
    export let milestones = []
</script>

<div id="bulletinCtr">
    <div class="bulletinInner">
        <h3> {title} </h3>
        <div id = "imgCtr">
            {#if image}
                <div id="imgCtr">
                    <img src="https://ipfs.fleek.co/ipfs/{image}" alt="{title}" style="height:100%; width:max-content;">
                </div>
            {/if}
        </div>
        <div id = "msArray">
            {#each milestones as milestone, i}
                <div class="milestone">
                    {i}. {@html milestone}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>

#bulletinCtr{
    width: 50vw;
    height: 60vh;
    background-color: var(--bark);
    display: grid;
    justify-items: center;
    align-items: center;
}

.bulletinInner{
    height: 85%;
    width: 85%;
}

#imgCtr{
    height: 8em;
    width: max-content;
}

</style>