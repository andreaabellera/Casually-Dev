<script>
    import Heading from './Heading.svelte';
	import JournalCover from './JournalCover.svelte';
</script>

<link href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap" rel="stylesheet">
<div class="journal-feat-ctr">
    <Heading title={"JOURNALS"} />
    <div id="journal-array">
        <JournalCover>
            <p class="cousine" style="font-size: 75%;"> Breaking into </p>
            <p class="cousine" style="font-size: 110%;"> Competitive Programming</p>
            <p class="syncopate"> HANDBOOK </p>
        </JournalCover>
        <JournalCover>
            <p class="cousine" style="font-size: 75%;"> Breaking into </p>
            <p class="cousine" style="font-size: 110%;"> Open Source </p>
            <p class="syncopate"> HANDBOOK </p>
        </JournalCover>
        <JournalCover>
            <p class="syncopate"> ALGORITHM STUDY </p>
            <p class="cousine"> Alpha-Beta Pruning</p>
        </JournalCover>
        <JournalCover>
            <p class="syncopate"> DATA STRUCTURE STUDY </p>
            <p class="cousine"> Merkle DAG </p>
        </JournalCover>
    </div>
</div>

<style>
    .journal-feat-ctr {
        height: max-content;
        width: 100%;
        display: grid;
        grid-template-rows: auto 1fr;
    }

    #journal-array {
        display: flex;
        width: 100%;
        align-items: center;
    }

    @media (max-width: 600px) {
        #journal-array {
            flex-direction: column;
        }
    }
</style>

