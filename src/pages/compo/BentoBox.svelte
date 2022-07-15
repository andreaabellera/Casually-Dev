<script>
    // Express artworks import
    /*import Beluga from "casually-css/@svelte/beluga.svelte"
    import Bike from "casually-css/@svelte/bike.svelte"
    import Bison from "casually-css/@svelte/bison.svelte"
    import Blossom from "casually-css/@svelte/blossom.svelte"
    import Boba from "casually-css/@svelte/boba.svelte"
    import Button from "casually-css/@svelte/button.svelte"
    import Calendar from "casually-css/@svelte/calendar.svelte"
    import Cookie from "casually-css/@svelte/cookie.svelte"
    import Dugong from "casually-css/@svelte/dugong.svelte"
    import Hippo from "casually-css/@svelte/hippo.svelte"
    import Lollipop from "casually-css/@svelte/lollipop.svelte"
    import Matcha from "casually-css/@svelte/matcha.svelte"
    import Octopus from "casually-css/@svelte/octopus.svelte"
    import Orange from "casually-css/@svelte/orange.svelte"
    import Swiss from "casually-css/@svelte/swiss.svelte"*/

    // Props
    export let height = "30vh"
    export let width = "40vw"
    export let artName
    export let codeTitle = "Code Box"
    export let codeContent
    export let htmlCode
    export let cssCode
    export let render = false

    /* Defining BentoBox layouts. Layout will be determined by props passed
    1. Single artwork (artName)
    2. Single codebox (codeTitle, codeContent)
    3. HTML and CSS codebox (htmlcontent, csscontent)
    4. Artwork, HTML and CSS codebox (htmlcontent, csscontent, render=true)
    */

</script>

<div class="bentobox" style="height:{height}; width:{width};">
    <!-- SINGLE ARTWORK -->
    {#if artName}
        <!-- import defined artwork -->

    <!-- SINGLE CODEBOX -->
    {:else if codeContent}
        {codeTitle}
        <!-- populate single codebox -->
    
    <!-- HTML AND CSS CODEBOX -->
    {:else if htmlCode && cssCode}
        <!-- populate HTML and CSS codebox -->

    <!-- ARTWORK, HTML AND CSS CODEBOX -->
    {:else if htmlCode && cssCode && render}
        <!-- render artwork from given html and css code wish me the best -->

    <!-- ERROR CODEBOX -->
    {:else}
        Invalid props passed to the BentoBox component
    {/if}
</div>

<style>
    .bentobox {
        background-color: var(--ink);
    }
</style>