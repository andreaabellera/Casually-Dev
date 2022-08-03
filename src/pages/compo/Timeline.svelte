<script>

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
        background-color: salmon;
    }

    #workArr span{
        background-color: gold;
    }

    span{
        height: 100%;
        width: 1.8em;
        margin: 0 0.1em 0 0.1em;
    }

    @media (max-width: 600px) {
        span{
            width: 0.8em;
            margin: 0 0.05em 0 0.05em;
        }
    }
</style>