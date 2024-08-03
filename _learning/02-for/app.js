const {createApp, ref, computed} = Vue;

const app = createApp({
    setup(){
        const showItem = ref(true);
        const newItem = ref("");
        const newItemPrice = ref(0);
        const items = ref([
            {id: 1, name: "Sword", price: 100},
            {id: 2, name: "Stone", price: 4},
            {id: 3, name: "Tear", price: 2},
            {id: 4, name: "Droplet", price: 10}
        ]);
        const addItem = () => {
            items.value.push({id: items.value.length + 1, name: newItem.value, price: newItemPrice.value});
            newItem.value = '';
            newItemPrice.value = 0;
        }

        //Computed Property - Calculate Total Items
        const totalItems = computed(() => {
            console.log("Total Items: ", items.value.length);
            return items.value.length;
        });

        return {items, showItem, addItem, totalItems, newItem, newItemPrice};
    }
});

app.mount('#app');