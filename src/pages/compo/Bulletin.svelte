<script>
    export let title = "Unknown"
    export let image = null
    export let milestones = []
    export let bgColor = "rgba(184,144,108,0.36)"
</script>

<div id="bulletinCtr" style="background-color:{bgColor}">
    <div class="bulletinInner">
        <div id = "imgCtr">
            {#if image}
                <img src="https://ipfs.fleek.co/ipfs/{image}" alt="{title}" style="height:100%; width:max-content;">
            {/if}
        </div>
        <div id = "msArray">
            {#each milestones as milestone, i}
                <div class="milestone">
                    {@html milestone}
                </div>
            {/each}
        </div>
    </div>
</div>
<a href="@"><span></span></a>

<style>

#bulletinCtr{
    width: 40vw;
    height: max-content;
    min-height: 30vh;
    display: grid;
    justify-items: center;
    align-items: center;
    font-family: 'PT Sans', sans-serif;
    color: black;
    padding: 3em 0 3em 0;
}

.bulletinInner{
    height: 100%;
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#msArray{
    font-size: 1.2em;
    line-height: 2em;
    margin-left: 3vw;
}

#imgCtr{
    height: 40vh;
    width: max-content;
    margin-top: -12vh;
    box-shadow: 0.1em 0.15em 0.5em rgba(0,0,0,0.3);
}


@media (max-width: 600px) {
    #bulletinCtr{
        width: 65vw;
    }

    #imgCtr{
        margin-top: -15vh;
    }

    .bulletinInner{
        flex-direction: column;
    }

    #msArray{
        text-align: right;
        font-size: 0.7em;
        margin-top: 2vh;
        line-height: 2.1em;
        margin-left: 0;
    }
}

</style>