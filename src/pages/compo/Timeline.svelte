<script>
    import trData from '../content/transcript.yml'
    export let date = null

    // TBD: Append a bar if date is within start and end interval of a transcript entry
    let entries = trData.entries
    let sampleStart = new Date(entries[0].start)
    let sampleEnd = new Date(entries[0].end)
    let diffDays = (sampleEnd - sampleStart) / (1000 * 60 * 60 * 24)
    //console.log(diffDays)
</script>

<div id="tlCtr" class="arr">
    <div id="courseArr" class="arr">
        <span></span>
        <span></span>
    </div>
    <div id="volArr" class="arr">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div id="workArr" class="arr">
        <span></span>
    </div>
</div>

<style>
    .arr{
        display: flex;
        width: max-content;
        height: inherit;
    }

    #courseArr span{
        background-color: mediumseagreen;
    }

    #volArr span{
        background-color: crimson;
    }

    #workArr span{
        background-color: gold;
    }

    span{
        height: 100%;
        width: 1.8em;
        margin: 0 0.1em 0 0.1em;
        box-shadow: inset 0 0 0.8em rgba(98, 32, 6, 0.4);
    }

    span:hover{
        transition: 0.5s;
        z-index: 2;
        box-shadow: 0 0 0.8em 0.3em var(--chartreuse);
    }

    @media (max-width: 600px) {
        span{
            width: 0.8em;
            margin: 0 0.05em 0 0.05em;
        }
    }
</style>