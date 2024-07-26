const {createApp,ref} = Vue;

const app = createApp({
    /*template: `
    <h1>{{testings}}</h1>
    <p>From App.js</p>
    `,*/
    setup(){
        const testings = ref("Hello Vue 3");
        const showcase = ref("");

        const showcasing = () => {
            showcase.value = "Vue Learning Showcased";
            console.log("Showcased");
        }
        setTimeout(() => {
            testings.value = "Hello Vue 3 - Updated";
            console.log("Updated");
        }, 2000);
        return {testings, showcase, showcasing};
    }
});

app.mount('#app');