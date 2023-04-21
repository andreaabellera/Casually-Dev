<script>
    import { fly } from 'svelte/transition'
	import BlogFeat from './compo/BlogFeat.svelte'
	import BlogPins from './compo/BlogPins.svelte'
	import GirlCave from './compo/GirlCave.svelte'

    // Page transition
    let visible, visibleC = false
    setTimeout(()=>{ visible = true }, 300)
    setTimeout(()=>{ visibleC = true }, 1000)

</script>

{#if visible}
<div in:fly="{{ x: -2000, duration: 800 }}" out:fly="{{ x: -200, duration: 800 }}">
    <BlogFeat />
    
    {#if visibleC}
    <div in:fly="{{ y: 200, duration: 800 }}">
        <BlogPins />
        <GirlCave />
    </div>
    {/if}
</div>
{/if}