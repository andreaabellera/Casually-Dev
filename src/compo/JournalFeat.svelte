<script>
    import Heading from './Heading.svelte';
	import JournalCover from './JournalCover.svelte';
    import { Link } from "svelte-routing";
    import { createEventDispatcher } from 'svelte';
    import journalData from '../content/journals.yml'; 

    const dispatch = createEventDispatcher();

    function selectNav() {
        dispatch("selection", {
            id: "nav-journals"
        });
    }

    // Get blog data
    let journals = journalData.journals
</script>

<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<div class="journal-feat-ctr">
    <Heading title={"JOURNALS"} />
    <div id="journal-array">
        <Link to="/journals/{journals[0].id}">
            <JournalCover>
                {@html journals[0].cover}
            </JournalCover>
        </Link>
        <Link to="/journals/{journals[1].id}">
            <JournalCover>
                {@html journals[1].cover}
            </JournalCover>
        </Link>
        <Link to="/journals/{journals[2].id}">
            <JournalCover>
                {@html journals[2].cover}
            </JournalCover>
        </Link>
        <Link to="/journals/{journals[3].id}">
            <JournalCover>
                {@html journals[3].cover}
            </JournalCover>
        </Link>
    </div>
    <Link to="journals">
        <div id="blog-see-more" class="laBelleAurore" on:click={selectNav}><div> see more journals </div></div>
    </Link>
</div>

<style>
    .journal-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
        margin-bottom: 10vh;
    }

    #journal-array {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 5vh;
    }

    @media (max-width: 600px) {
        #journal-array {
            flex-direction: column;
        }
    }
</style>

