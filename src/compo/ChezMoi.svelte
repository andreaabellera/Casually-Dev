<script>
    import { fly } from 'svelte/transition';
	import BlogFeat from './BlogFeat.svelte';
	import JournalFeat from './JournalFeat.svelte';
	import GirlCave from './GirlCave.svelte';
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

	function selectNav(event) {
        dispatch("selection", {
            id: event.detail.id
        });
    }

    let visible = false
    
    // Page Transition
    let id = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id)
    }

    // Content transition
    let visibleC = false
    let delay = 0
    let id2 = setInterval(loadContent, 900)
    function loadContent() {
        if(delay==1){
            visibleC = true
            clearInterval(id2)
        }
        else
            delay++
    }
</script>

{#if visible}
<div in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    <BlogFeat on:selection={selectNav}/>
    
    {#if visibleC}
    <div transition:fly="{{ y: 200, duration: 800 }}">
        <JournalFeat on:selection={selectNav} />
        <GirlCave on:selection={selectNav}/>
    </div>
    {/if}
</div>
{/if}