<script>
    // Saisons pour la Ruelle Charmante

    export let title = "Unknown"
    export let image = null
    export let milestones = []
</script>

<div id="bullCtr">
    <div class="bullInner">
        <h3> {title} </h3>
        <div id = "imgCtr">
            {#if image}
                <img src="https://ipfs.fleek.co/ipfs/{image}" alt="{title}">
            {/if}
        </div>
        <div id = "msArray">
            {#each milestones as milestone, i}
                <div class="milestone">
                    I love cookies. I love cupcakes. I love muffins
                </div>
            {/each}
        </div>
    </div>
</div>

<style>

</style>