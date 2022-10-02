<template>
    <div>
        <section>
            <div class="container">
                <TitleGalery1 title="Gallery" class="text-center" />
                <div class="gallery gridStyle my-10">
                    <div v-for="loop in card" :key="loop">
                        <img class="animation" :src="loop.image" alt="">
                    </div>
                </div>
                <Button1 />
            </div>
        </section>
    </div>
</template>
<script>
import TitleGalery1 from './partials/titleGalery.vue';
import Button1 from './partials/button.vue';
export default {
    data() {
        return {
            card: [
                {
                    image: "../../asset/images/galeryImg1.png",
                },
                {
                    image: "../../asset/images/galeryImg2.png",
                },
                {
                    image: "../../asset/images/galeryImg3.png",
                },
                {
                    image: "../../asset/images/galeryImg4.png",
                },
                {
                    image: "../../asset/images/galeryImg5.png",
                },
                {
                    image: "../../asset/images/galeryImg6.png",
                }
            ]
        }
    },


    components: { TitleGalery1, Button1 }
}
</script>
<style>

</style>