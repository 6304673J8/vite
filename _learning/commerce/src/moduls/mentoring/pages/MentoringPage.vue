<template>
    <section class="flex flex-col">
        <h1>Learn <small class="text-blue-500"> Three JS </small></h1>

        <img 
        :src="`https://store.barcelonactiva.cat/zhofsgdjxfzvjra/img/${id}.png`" 
        alt="ThreeJS" 
        class="w-[200px] h-[200px] mt-5"
        width="200"
        height="200"
        />
        <RouterLink
            class="bg-blue-500 text-white p-2 rounded mt-5 text-center"
            :to="{name: 'Mentoring', params: {id: 'javascript'}}">
            3D Website
        </RouterLink>
    </section>
</template>

<script lang="ts" setup>
interface Props { //Interface/Interficie In Order To Pass Values To URL
    id: string;
}
defineProps<Props>(); //Recovering Value From URL
</script>