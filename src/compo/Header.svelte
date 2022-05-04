<div class="header-ctr">
    <link href="https://fonts.googleapis.com/css2?family=Mr+De+Haviland&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Gentium+Basic:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <div class="title-container">
        <div class="qtrlex"> Quaintrellex </div>
        <div class="tagline"> not an existential blogspot </div>
    </div>
    <div class="nav-container">
        Navigation
    </div>
</div>

<style>
    .header-ctr{
        position: fixed;
        z-index: 20;
        display: flex;
        width: 100%;
        justify-content: space-between;
        background-image: linear-gradient(to bottom, var(--linen), rgba(255,238,223,0.35), rgba(255,255,255,0));
    }

    .title-container{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .nav-container{
        display: flex;
        flex-direction: column;
    }

    .qtrlex{
        font-family: 'Mr De Haviland', cursive;
        font-size: 6em;
        color: var(--coffee);
        margin-left: 2vw;
        margin: 1vh 0 0 2vw;
    }

    .tagline{
        color: var(--mocha);
        font-family: 'Gentium Basic', serif;
        font-size: 0.8em;
        margin-left: 4.5vw;
        transform: translateY(-3em);
    }
</style>