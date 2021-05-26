<template>
    <layout-base>
        <template #default>
            <div>
                <div class="container mx-auto py-16 flex flex-row justify-between">
                    <div>
                        <h1>Portfolio</h1>
                        <p>Years of hardwork, documented.</p>
                    </div>
                    <div class="hidden md:flex space-x-6">
                        <img class="arrow mirror" src="~/assets/icons/arrow-key.svg" @click="scrollHorizontal('left')" alt="" />
                        <img class="arrow" src="~/assets/icons/arrow-key.svg" @click="scrollHorizontal('right')" alt="" />
                    </div>
                </div>
                <div tabindex="1" id="pfolio" class="flex flex-row gap-24 flex-nowrap overflow-auto px-24">
                    <div v-for="(portfolio, index) in portfolios" :key="index">
                        <portfolio-item :data="portfolio" />
                    </div>
                </div>
            </div>
        </template>
    </layout-base>
</template>

<script>
import LayoutBase from '~/components/layout/LayoutBase.vue'
import PortfolioItem from '~/components/portfolio/portfolio-item.vue'
export default {
    components: {
        PortfolioItem,
        LayoutBase
    },
    data() {
        return {
            portfolios: [
                {
                    image_url: require('~/assets/images/youthventure.png'),
                    title: 'YouthVentures Website',
                    type: 'webapp',
                    url: null,
                    description: 'Developed the website for YouthVentures, a youth community builder based in Cyberjaya ',
                    year: '2021',
                    stack: 'NextJS & Strapi', //
                    status: 'Active' // values: active / discontinued
                },
                {
                    image_url: 'https://runcloud.io/images/irfan.png?066a7e1b7ed74c266de56be53ce43e50',
                    title: 'Joined RunCloud',
                    type: 'career',
                    url: null,
                    description: 'Currently working for RunCloud as their Front End Engineer. Responsible for the front end development of RunCloud related projects.',
                    year: '2021',
                    stack: 'Laravel & Vue', //
                    status: 'Active' // values: active / discontinued
                },
                {
                    image_url: 'https://images.prismic.io/ombak/bb9de2ee-f13e-4fdb-8715-4469803abc4c_WhatsApp+Image+2019-12-20+at+3.49.16+PM.jpeg?auto=compress,format',
                    title: 'Interactive Wall System',
                    type: 'iot',
                    url: null,
                    description: 'Developed an interactive wall system for an Airbnb establishment based in Sabah using Raspberry Pis, touch sensors and projectors',
                    year: '2019',
                    stack: 'OpenFrameworks, Raspberry Pis', //
                    status: 'Done' // values: active / discontinued
                },
                {
                    image_url: require('~/assets/images/ombak.png'),
                    title: 'ombak devhouse',
                    type: 'webapp',
                    url: 'https://ombak.dev',
                    description: 'Cofounded a software development house as a side hustle while studying for my Bachelors degree.',
                    year: '2019',
                    stack: 'Gatsby, Netlify', //
                    status: 'Inactive' // values: active / discontinued
                },
                {
                    image_url: 'https://images.prismic.io/ombak/43489afb-a09a-4d52-87e5-bd20c1218c25_Screenshot+2020-04-16+at+2.31.34+AM.png?auto=compress,format',
                    type: 'webapp',
                    title: 'Founders Malaysia',
                    url: null,
                    description:
                        'Cofounded a startup community builder based in Miri. We run early stage startup programs such as Techstars Startup Weekends and hackathons all over Sarawak, Malaysia',
                    year: '2018-2020',
                    stack: 'NextJS, Strapi', //
                    status: 'Discontinued' // values: active / discontinued
                },
                {
                    image_url: 'https://images.prismic.io/ombak/486b842b-bac1-47ca-86ba-2da7c3617e9d_Screenshot+2020-02-09+at+1.58.52+AM.png?auto=compress,format',
                    title: 'MyCurtin',
                    type: 'mobile',
                    url: null,
                    description:
                        'Developed a student companion application with bus tracking functionality for Curtin Malaysia campus. However, only the Android version of the application is released. ',
                    year: '2017',
                    stack: 'Android', //
                    status: 'Discontinued' // values: active / discontinued
                }
            ]
        }
    },
    methods: {
        scrollHorizontal(direction) {
            const pfolio = document.getElementById('pfolio')
            switch (direction) {
                case 'right':
                    pfolio.scrollLeft = pfolio.scrollLeft + 800
                    break
                default:
                    pfolio.scrollLeft = pfolio.scrollLeft - 800
                    break
            }
        }
    }
}
</script>

<style scoped>
h1 {
    @apply text-7xl font-extrabold text-gray-50;
}
p {
    @apply text-3xl text-gray-50 font-normal pt-12;
}
.arrow {
    @apply h-28 w-auto;
}

#pfolio {
    scroll-behavior: smooth;
}

#pfolio::-webkit-scrollbar:horizontal {
    display: none;
    background: transparent;
}

.mirror {
    transform: scale(-1, 1);
}
</style>