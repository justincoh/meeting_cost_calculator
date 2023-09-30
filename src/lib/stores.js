import { writable } from "svelte/store";

// This is morning standup
const defaultMeeting = {
    duration: 15,
    frequency: 5, // integer days per week
    attendees: {
        engineers: 5,
        productManagers: 1,
        managers: 1,
    },
};


export const meetingStore = writable(defaultMeeting);

// maybe hourly costs are a derived store?

// export const setValue = (val) => {
//     testStore.set(val);
// };

// might want a different struct for valid job titles?
// const jobs

export const setStandup = () => {
    meetingStore.set(defaultMeeting);
};
