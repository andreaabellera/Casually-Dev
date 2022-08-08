<script>
    import { fly, fade } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte';
    import trSData from '../content/transcript-school.yml'
    import trWData from '../content/transcript-work.yml'
    import trVData from '../content/transcript-volunteer.yml'
    export let currDate = null

    let entriesSchool = trSData.entries
    let entriesWork = trWData.entries
    let entriesVolunteer = trVData.entries

    let earliest = new Date("09/01/2019")

    // Setup transcript bar arrays
    let courseVis = []
    let volVis = []
    let workVis = []
    for(let i in entriesSchool)
        courseVis.push(false)
    for(let i in entriesVolunteer)
        volVis.push(false)
    for(let i in entriesWork)
        workVis.push(false)

    function scrollY(){
        for(let i=0; i<entriesSchool.length; i++){
            if(currentEntry(currDate, entriesSchool[i]))
                courseVis[i] = true
            else
                courseVis[i] = false
        }
        for(let i=0; i<entriesVolunteer.length; i++){
            if(currentEntry(currDate, entriesVolunteer[i]))
                volVis[i] = true
            else
                volVis[i] = false
        }
        for(let i=0; i<entriesWork.length; i++){
            if(currentEntry(currDate, entriesWork[i]))
                workVis[i] = true
            else
                workVis[i] = false
        }
    }

    // Check if current date is within start and end interval of a transcript entry
    function currentEntry(date, entry) {
        let advanceDetect = 1000 * 3600 * 24 * 60
        let start = new Date(entry.start) - advanceDetect
        let end = entry.end
        if(end)
            end = new Date(entry.end)
        else
            end = new Date()
        if (date >= start && date <= end)
                return true
        return false
    }

    // Show transcript information when bar is hovered on
    const dispatch = createEventDispatcher();
    function showCourseInfo(id){
        let theId = id.target.id
        let theEntry
        for(let i in entriesSchool)
            if(entriesSchool[i].id == theId)
                theEntry = entriesSchool[i]

        dispatch('hoverItem', {
			text: "<b>Finished Course</b> " + theEntry.title
		})
    }
    function showVolunteerInfo(id){
        let theId = id.target.id
        let theEntry
        for(let i in entriesVolunteer)
            if(entriesVolunteer[i].id == theId)
                theEntry = entriesVolunteer[i]

        dispatch('hoverItem', {
            text: "<b>Volunteered as</b> " + theEntry.title
        })
    }
    function showWorkInfo(id){
        let theId = id.target.id
        let theEntry
        for(let i in entriesWork)
            if(entriesWork[i].id == theId)
                theEntry = entriesWork[i]

        dispatch('hoverItem', {
            text: "<b>Worked at</b> " + theEntry.title
        })
    }

    function computeDiff(entry){
        let startDate = new Date(entry.start)
        let endDate = entry.end
        if(endDate)
            endDate = new Date(entry.end)
        else
            endDate = new Date()
        let diffDays = (endDate - startDate) / (1000 * 3600 * 24)
        return diffDays * 3.5
    }

    function computeDist(earliest, start){
        let startDate = new Date(start)
        let diffDays = (startDate - earliest) / (1000 * 3600 * 24)
        let today = new Date()
        let overall = (today - earliest) / (1000 * 3600 * 24)
        let timeRate = diffDays / overall
        let scrollHeight = 6000
        let adjust = 500
        return (timeRate * scrollHeight) + adjust
    }

</script>

<svelte:body on:scroll={scrollY}></svelte:body>

<div id="tlCtr" class="arr">
    <div id="courseArr" class="arr">
        {#each entriesSchool as entry, i}
            {#if courseVis[i]}
                <span 
                    id={entry.id} 
                    in:fly="{{ x: 1000, y: 3000,  duration: 800 }}" 
                    out:fade 
                    on:mouseenter={showCourseInfo}
                    style="height: {computeDiff(entry)}px; margin-top: {computeDist(earliest, entry.start)}px;"
                ></span>
            {/if}
        {/each}
    </div>
    <div id="volArr" class="arr">
        {#each entriesVolunteer as entry, i}
            {#if volVis[i]}
                <span 
                    id={entry.id} 
                    in:fly="{{ x: 1000, y: 3000, duration: 800 }}" 
                    out:fade 
                    on:mouseenter={showVolunteerInfo}
                    style="height: {computeDiff(entry)}px; margin-top: {computeDist(earliest, entry.start)}px;"
                ></span>
            {/if}
        {/each}
    </div>
    <div id="workArr" class="arr">
        {#each entriesWork as entry, i}
            {#if workVis[i]}
                <span 
                    id={entry.id} 
                    in:fly="{{ x: 1000, y: 3000, duration: 800 }}" 
                    out:fade 
                    on:mouseenter={showWorkInfo}
                    style="height: {computeDiff(entry.start, entry.end)}px; margin-top: {computeDist(earliest, entry.start)}px;"
                ></span>
            {/if}
        {/each}
    </div>
</div>

<style>
    #tlCtr {
        overflow: hidden;
    }

    .arr{
        display: flex;
        width: max-content;
        height: inherit;
        position: relative;
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
        /* height: 100%; */
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