<script>
    import Heading from './Heading.svelte';
	import JournalCover from './JournalCover.svelte';
    import { Link } from "svelte-routing";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function selectNav() {
        dispatch("selection", {
            id: "nav-journals"
        });
    }
</script>

<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<div class="journal-feat-ctr">
    <Heading title={"JOURNALS"} />
    <div id="journal-array">
        <Link to="/journals/title0">
            <JournalCover>
                <p class="cousine" style="font-size: 75%;"> Breaking into </p>
                <p class="cousine" style="font-size: 110%;"> Competitive Programming</p>
                <p class="syncopate"> HANDBOOK </p>
            </JournalCover>
        </Link>
        <Link to="/journals/title1">
            <JournalCover>
                <p class="cousine" style="font-size: 75%;"> Breaking into </p>
                <p class="cousine" style="font-size: 110%;"> Open Source </p>
                <p class="syncopate"> HANDBOOK </p>
            </JournalCover>
        </Link>
        <Link to="/journals/title2">
            <JournalCover>
                <p class="syncopate"> ALGORITHM STUDY </p>
                <p class="cousine"> Alpha-Beta Pruning</p>
            </JournalCover>
        </Link>
        <Link to="/journals/title3">
            <JournalCover>
                <p class="syncopate"> DATA STRUCTURE STUDY </p>
                <p class="cousine"> Merkle DAG </p>
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

