<template>
    <div>
        <section>
            <div class="gallery gridStyle my-10">
                <div class="relative animation" v-for="news in galery " :key="news">
                    <img class="animation w-full h-full" :src="news.image" alt="">
                    <div class="content absolute bottom-0 px-4 pb-6">
                        <h1 class="text-h3 text-white font-bold">{{news.title}}</h1>
                        <p class="text-p3 text-content2 mt-4 mb-6">{{news.content}}e</p>
                        <div class="flex justify-between text-content2 text-p3">
                            <span>{{ news.date}}</span>
                            <span>{{ news.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            galery: [
                {
                    image: "../../../asset/images/NewsImg1.png",
                    title: "Learning in House",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Arsali12",
                },
                {

                    image: "../../../asset/images/NewsImg2.png",
                    title: "Being An Important Person For People...",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Arsali12",

                },
                {

                    image: "../../../asset/images/NewsImg3.png",
                    title: "Study Group",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Purwa adi .W",
                },
                {

                    image: "../../../asset/images/NewsImg4.png",
                    title: "Study in Class",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Arsali12",
                },
                {

                    image: "../../../asset/images/NewsImg5.png",
                    title: "Study in House",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Admin1",
                },
                {

                    image: "../../../asset/images/NewsImg6.png",
                    title: "Study With my Freand",
                    content: "Lorem ipsum dolor sit amet, consectetur Maecenas et velit sem belajar dirumah online",
                    date: "20 Juni 2022",
                    name: "Admin2",
                },

            ],
        }
    },
}

</script>
<style>

</style>