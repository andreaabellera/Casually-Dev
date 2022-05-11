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
    
    let id = setInterval(loadPage, 200)
    function loadPage() {
        visible = true
        clearInterval(id)
    }
</script>

{#if visible}
<div in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    <BlogFeat on:selection={selectNav}/>
    <JournalFeat on:selection={selectNav} />
    <GirlCave on:selection={selectNav}/>
</div>
{/if}