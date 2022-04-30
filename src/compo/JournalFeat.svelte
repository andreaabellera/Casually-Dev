<script>
	import JournalCover from './JournalCover.svelte';
</script>

<div class="journal-feat-ctr">
    <h2> JOURNALS </h2>
    <div id="journal-array">
        <JournalCover>
            <h4>Hi!</h4>
            <p>I am the Journal Cover's content</p>
        </JournalCover>
        <JournalCover>
            <p>Baby don't hurt me no more</p>
        </JournalCover>
        <JournalCover>
            <p>Can I have a Venti Cafe Misto with some caramel drizzle?</p>
        </JournalCover>
        <JournalCover>
            <!-- Hehe -->
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

