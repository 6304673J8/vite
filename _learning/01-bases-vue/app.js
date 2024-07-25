const {createApp,ref} = Vue;

const app = createApp({
    template: `
    <h1>{{testings}}</h1>
    <p>From App.js</p>
    `,
    setup(){
        const testings = "Hello Vue 3";
        return {testings};
    }
});

app.mount('#app');