import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
    props: {
      value: Number,
    },
    setup(props) {
        const counter = ref(props.value);    
        const calculateSquare = computed(() => (counter.value ?? 0) * (counter.value ?? 0));
        
        return { counter, calculateSquare };
    }
});