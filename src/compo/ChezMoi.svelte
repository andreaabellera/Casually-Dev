<script>
    import { fly } from 'svelte/transition';
	import BlogFeat from './BlogFeat.svelte';
	import JournalFeat from './JournalFeat.svelte';
	import GirlCave from './GirlCave.svelte';

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
    <BlogFeat />
    
    {#if visibleC}
    <div transition:fly="{{ y: 200, duration: 800 }}">
        <JournalFeat />
        <GirlCave />
    </div>
    {/if}
</div>
{/if}