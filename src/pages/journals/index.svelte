<script>
    import { url } from "@roxi/routify";
    import { fly } from 'svelte/transition'
    import { elasticOut } from 'svelte/easing'
	import Heading from '../compo/Heading.svelte'
	import JournalCover from '../compo/JournalCover.svelte'
    import journalData from '../content/journals.yml' 
    import { onMount } from 'svelte';

    onMount(() => {
        // Entries transition
        let id2 = setInterval(loadEntries, 150)
        let delay = 0
        let currV = 0
        function loadEntries() {
            if(delay==5){
                visibles[currV] = true
                currV++

                if(currV == visibles.length)
                    clearInterval(id2)
            }
            else
                delay++
        }
	})

    // Get journal data
    let journals = journalData.journals
    let visibles = []
    for(let i=0; i < journals.length; i++)
        visibles.push(false)
    
    // Page transition
    let visible = false
    let id1 = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id1)
    }

    // Zoom out
    function zoom({ duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);
				return `transform: scale(${eased});`
			}
		}
	}

</script>

{#if visible}
<div class="journal-feat-ctr" in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
	{#if !globalThis.isMobile}
        <Heading title={"JOURNALS"} />
    {/if}

    <div id="journal-array">
    {#each journals as journal, i}
        {#if visibles[i] && journal}
            <a href={$url("./:showId", {showId: journal.id})}>
                <div in:zoom="{{duration: 1000}}">
                    <JournalCover>
                        {@html journal.cover}
                    </JournalCover>
                </div>
            </a>
        {/if}
    {/each}
    </div>
    
</div>
{/if}

<style>
    .journal-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin: -8vh 0 10vh 0;
    }

    #journal-array {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 5vh;
        flex-wrap: wrap;
    }

    @media (max-width: 600px) {
        #journal-array {
            flex-direction: column;
        }
    }
</style>