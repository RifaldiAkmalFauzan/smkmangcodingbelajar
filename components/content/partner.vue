<template>
    <Carousel :autoplay="2000" :wrap-around="true" class="mt-14">
        <Slide v-for="slide in 3" :key="slide">
            <div class="carousel__item h-full flex p-3  ">
                <img src="../../asset/images/google.svg" alt="" class="items-center order-1">
            </div>
            <div class="carousel__item h-full flex p-3">
                <img src="../../asset/images/amazon.svg" alt="" class="items-center order-2">
            </div>
            <div class="carousel__item h-full flex p-3">
                <img src="../../asset/images/google.svg" alt="" class="items-center order-3">
            </div>
            <div class="carousel__item h-full flex p-3">
                <img src="../../asset/images/amazon.svg" alt="" class="items-center order-4">
            </div>
            <div class="carousel__item h-full flex p-3">
                <img src="../../asset/images/google.svg" alt="" class="items-center order-5">
            </div>
        </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
});
</script>