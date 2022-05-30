<script>
    import Heading from './Heading.svelte'
	import JournalCover from './JournalCover.svelte'
    import journalData from '../content/journals.yml'

    // Get journal data, limit to 5
    let journals = journalData.journals.slice(0, 5)
</script>

<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
<div class="journal-feat-ctr">
    <Heading title={"JOURNALS"} />
    <div id="journal-array">
    {#each journals as journal}
        {#if journal}
            <a href="../journals/{journal.id}">
                <JournalCover>
                    {@html journal.cover}
                </JournalCover>
            </a>
        {/if}
    {/each}
    </div>
    <a href="/journals">
        <div id="blog-see-more" class="laBelleAurore"><div> see more journals </div></div>
    </a>
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

