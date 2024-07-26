import { computed } from "vue";

const {createApp, ref, computed} = Vue;

const app = createApp({
    setup(){
        const newItem = ref("");
        const showItem = ref(false);
        const newItemName = ref("");
        const items = ref([
            {id: 1, name: "Sword", price: 100},
            {id: 2, name: "Stone", price: 4},
            {id: 3, name: "Tear", price: 2},
            {id: 4, name: "Droplet", price: 10}
        ]);
        const addItem = () => {
            items.value.push({id: items.value.length + 1, name: newItem.value, price: newItemName.value});
            newItemName.value = "";
        }

        //Computed Property - Calculate Total Items
        const totalItems = computed(() => {
            console.log("Total Items: ", items.value.length);
            return items.value.length;
        });

        return {items, showItem, addItem, totalItems, newItem, newItemName};
    }
});

app.mount('#app');