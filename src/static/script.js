const app = Vue.createApp({
    data() {
        return vueData;
    },
    methods: {
        getEventData
    }
});

const vueData = Vue.reactive({
    events: []
});

app.mount('#app');



function getEventData(data) {
    return JSON.stringify(data, null, 3);
}

const LeagueClientEvents = require('./components/LeagueClientEvents');

LeagueClientEvents.connect().then(() => {
    LeagueClientEvents.listenForEvents(onEvent);
});


function onEvent(data, type, uri) {
    vueData.events.push({ data, type, uri, showData: false });
}