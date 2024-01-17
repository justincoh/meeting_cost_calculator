<script>
    import Person from "$lib/person.svelte";
    import { WORKING_HOURS_PER_YEAR } from "$lib/constants";
    import { meetingStore, setStandup } from "$lib/stores";

    function setAllHands(numEngineers) {
        const meeting = {
            duration: 30,
            frequency: 1,
            attendees: {
                engineers: numEngineers,
                managers: numEngineers / 5,
            },
        };

        meetingStore.set(meeting);
    }
</script>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>to read the documentation</p>
<button on:click={setStandup}>Standup</button>
<button on:click={() => setAllHands(50)}>All hands</button>
<p>num hours</p>
<p>days per week</p>
<p>Assumes 52 weeks* 5 days * 8 hours = 2080 working hours per year</p>
<p>Teststore {JSON.stringify($meetingStore)}</p>
<!-- {#each Object.keys($meetingStore) as thing}
   <p>{thing}</p> 
{/each} -->

<Person message="props passed in"/>
