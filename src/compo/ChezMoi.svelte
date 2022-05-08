<script>
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
</script>

<BlogFeat on:selection={selectNav}/>
<JournalFeat on:selection={selectNav} />
<GirlCave on:selection={selectNav}/>