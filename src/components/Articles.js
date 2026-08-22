const Articles = `
<section class="bg-white py-20 lg:py-28">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <!-- Heading -->

        <div class="text-center">

            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                Check out our latest article
            </h2>

            <div class="mx-auto mt-6 h-1 w-14 rounded-full bg-gray-900"></div>

        </div>


        <!-- Articles -->

        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">


            <!-- Article 1 -->

            <article
                class="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <img
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80"
                    alt="Disease detection"
                    class="h-52 w-full object-cover"
                >

                <div class="p-7">

                    <h3 class="text-xl font-bold leading-7 text-gray-900">
                        Disease detection, check up in the laboratory
                    </h3>

                    <p class="mt-4 leading-7 text-gray-500">
                        In this case, the role of the health laboratory
                        is very important to determine the disease.
                    </p>

                    <a
                        href="#"
                        class="mt-5 inline-flex items-center gap-2 font-semibold text-purple-500 hover:text-purple-800"
                    >
                        Read more

                        <span>
                            →
                        </span>
                    </a>

                </div>

            </article>


            <!-- Article 2 -->

            <article
                class="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Herbal medicine"
                    class="h-52 w-full object-cover"
                >

                <div class="p-7">

                    <h3 class="text-xl font-bold leading-7 text-gray-900">
                        Herbal medicines that are safe for consumption
                    </h3>

                    <p class="mt-4 leading-7 text-gray-500">
                        Herbal medicines have been widely used for
                        generations as an alternative treatment.
                    </p>

                    <a
                        href="#"
                        class="mt-5 inline-flex items-center gap-2 font-semibold text-purple-500 hover:text-purple-800"
                    >
                        Read more

                        <span>
                            →
                        </span>

                    </a>

                </div>

            </article>


            <!-- Article 3 -->

            <article
                class="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <img
                    src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80"
                    alt="Natural care"
                    class="h-52 w-full object-cover"
                >

                <div class="p-7">

                    <h3 class="text-xl font-bold leading-7 text-gray-900">
                        Natural care for your healthy lifestyle
                    </h3>

                    <p class="mt-4 leading-7 text-gray-500">
                        Healthy habits and proper healthcare can help
                        you maintain a better quality of life.
                    </p>

                    <a
                        href="#"
                        class="mt-5 inline-flex items-center gap-2 font-semibold text-purple-500 hover:text-purple-800"
                    >
                        Read more

                        <span>
                            →
                        </span>

                    </a>

                </div>

            </article>

        </div>


        <!-- View All -->

        <div class="mt-12 text-center">

            <a
                href="#"
                class="inline-flex rounded-full border-2 border-purple-500 px-8 py-3 font-semibold text-purple-500 transition hover:bg-purple-500 hover:text-white"
            >
                View all
            </a>

        </div>

    </div>

</section>
`

export default Articles
