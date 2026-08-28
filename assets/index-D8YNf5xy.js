(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=`
<nav class="bg-white">

    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <!-- Logo -->

        <a href="#" class="flex items-center gap-2">

            <div
                class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-xl font-bold text-white"
            >
                T
            </div>

            <span class="text-2xl font-bold text-gray-900">
                Trafalgar
            </span>

        </a>


        <!-- Desktop Menu -->

        <div class="hidden items-center gap-10 md:flex">

            <a
                href="#"
                class="font-medium text-gray-900 hover:text-purple-500"
            >
                Home
            </a>

            <a
                href="#services"
                class="text-gray-500 hover:text-purple-500"
            >
                Find a doctor
            </a>

            <a
                href="#apps"
                class="text-gray-500 hover:text-purple-500"
            >
                Apps
            </a>

            <a
                href="#testimonials"
                class="text-gray-500 hover:text-purple-500"
            >
                Testimonials
            </a>

            <a
                href="#about"
                class="text-gray-500 hover:text-purple-500"
            >
                About us
            </a>

        </div>


        <!-- Mobile Button -->

        <button
            id="menu-button"
            class="text-2xl md:hidden"
        >
            ☰
        </button>

    </div>


    <!-- Mobile Menu -->

    <div
        id="mobile-menu"
        class="hidden border-t border-gray-100 px-6 pb-6 md:hidden"
    >

        <div class="flex flex-col gap-4 pt-4">

            <a href="#" class="font-medium">
                Home
            </a>

            <a href="#services" class="text-gray-500">
                Find a doctor
            </a>

            <a href="#apps" class="text-gray-500">
                Apps
            </a>

            <a href="#testimonials" class="text-gray-500">
                Testimonials
            </a>

            <a href="#about" class="text-gray-500">
                About us
            </a>

        </div>

    </div>

</nav>
`,o=`
<section class="bg-white">

    <div
        class="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 lg:px-8 lg:py-24"
    >

        <!-- Left -->

        <div>

            <h1
                class="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
                Virtual healthcare
                <br>
                for you
            </h1>

            <p
                class="mt-6 max-w-xl text-lg leading-8 text-gray-500"
            >
                Trafalgar provides progressive, and affordable
                healthcare, accessible on mobile and online
                for everyone.
            </p>

            <a
                href="#services"
                class="mt-8 inline-flex rounded-full bg-purple-500 px-8 py-4 font-semibold text-white hover:bg-purple-700"
            >
                Consult today
            </a>

        </div>


        <!-- Right -->

        <div class="flex justify-center md:justify-end">

            <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"
                alt="Healthcare professional"
                class="w-full max-w-xl rounded-2xl object-cover"
            >

        </div>

    </div>

</section>
`,n=`
<section id="services" class="relative overflow-hidden bg-white py-20 lg:py-28">

    <div class="mx-auto max-w-7xl px-6 lg:px-8">

        <!-- Section Heading -->

        <div class="mx-auto max-w-2xl text-center">

            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our services
            </h2>

            <div class="mx-auto mt-6 h-1 w-14 rounded-full bg-gray-900"></div>

            <p class="mt-6 text-lg leading-8 text-gray-500">
                We provide to you the best choices for you.
                Adjust it to your health needs and make sure
                you undergo treatment with our highly qualified doctors.
            </p>

        </div>


        <!-- Services Grid -->

        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


            <!-- Search Doctor -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    🔍
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Search doctor
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    Choose your doctor from thousands of specialist,
                    general, and trusted hospitals.
                </p>

            </article>


            <!-- Online Pharmacy -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    💊
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Online pharmacy
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    Buy your medicines with our mobile application
                    with a simple delivery system.
                </p>

            </article>


            <!-- Consultation -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    📱
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Consultation
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    Free consultation with our trusted doctors
                    and get the best recommendations.
                </p>

            </article>


            <!-- Details Info -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    📋
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Details info
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    Get detailed information about doctors,
                    hospitals, treatments, and healthcare services.
                </p>

            </article>


            <!-- Emergency Care -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    🚑
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Emergency care
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    You can get 24/7 urgent care support from
                    our emergency healthcare team.
                </p>

            </article>


            <!-- Tracking -->

            <article
                class="rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

                <div class="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-50 text-3xl">
                    📊
                </div>

                <h3 class="mt-6 text-xl font-bold text-gray-900">
                    Tracking
                </h3>

                <p class="mt-4 leading-7 text-gray-500">
                    Track your treatment history, appointments,
                    and healthcare progress easily.
                </p>

            </article>

        </div>


        <!-- Learn More Button -->

        <div class="mt-12 text-center">

            <a
                href="#"
                class="inline-flex rounded-full border-2 border-purple-500 px-8 py-3 font-semibold text-purple-500 transition hover:bg-purple-500 hover:text-white"
            >
                Learn more
            </a>

        </div>

    </div>

</section>
`,d=`
<section id="about" class="bg-white py-20 lg:py-28">

    <div
        class="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:px-8"
    >

        <!-- Image -->

        <div class="order-2 md:order-1">

            <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                alt="Healthcare provider"
                class="w-full rounded-3xl object-cover"
            >

        </div>


        <!-- Content -->

        <div class="order-1 md:order-2">

            <h2
                class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            >
                Leading healthcare providers
            </h2>

            <div class="mt-6 h-1 w-14 rounded-full bg-gray-900"></div>

            <p class="mt-6 text-lg leading-8 text-gray-500">
                Trafalgar provides progressive, and affordable
                healthcare, accessible on mobile and online
                for everyone. We provide world-class healthcare
                services with highly qualified professionals.
            </p>

            <a
                href="#"
                class="mt-8 inline-flex rounded-full border-2 border-purple-500 px-8 py-3 font-semibold text-purple-500 transition hover:bg-purple-500 hover:text-white"
            >
                Learn more
            </a>

        </div>

    </div>

</section>
`,c=`
<section id="apps" class="bg-white py-20 lg:py-28">

    <div
        class="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2 lg:px-8"
    >

        <!-- Content -->

        <div>

            <h2
                class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
            >
                Download our mobile apps
            </h2>

            <div class="mt-6 h-1 w-14 rounded-full bg-gray-900"></div>

            <p class="mt-6 text-lg leading-8 text-gray-500">
                Our dedicated patient engagement app and
                web portal allow you to access information
                instantaneously with no hassle.
            </p>

            <a
                href="#"
                class="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-purple-500 px-8 py-3 font-semibold text-purple-500 transition hover:bg-purple-500 hover:text-white"
            >
                Download

                <span class="text-xl">
                    ↓
                </span>
            </a>

        </div>


        <!-- Image -->

        <div class="flex justify-center">

            <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80"
                alt="Mobile healthcare application"
                class="w-full max-w-xl rounded-3xl object-cover"
            >

        </div>

    </div>

</section>
`,h=`
<section
    id="testimonials"
    class="py-20 lg:py-28"
>

    <div class="mx-auto max-w-6xl px-6 lg:px-8">

        <div
            class="overflow-hidden rounded-3xl bg-purple-500 px-8 py-14 text-white sm:px-12 lg:px-16"
        >

            <!-- Heading -->

            <div class="text-center">

                <h2 class="text-3xl font-bold sm:text-4xl">
                    What our customers are saying
                </h2>

                <div class="mx-auto mt-6 h-1 w-14 rounded-full bg-white"></div>

            </div>


            <!-- Testimonial -->

            <div
                class="mt-12 grid items-center gap-10 md:grid-cols-[auto_1fr]"
            >

                <!-- Person -->

                <div class="flex items-center justify-center gap-5 md:justify-start">

                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                        alt="Edward Newgate"
                        class="h-20 w-20 rounded-full object-cover ring-4 ring-white/30"
                    >

                    <div>

                        <h3 class="text-xl font-bold">
                            Edward Newgate
                        </h3>

                        <p class="mt-1 text-white/80">
                            Founder Circle
                        </p>

                    </div>

                </div>


                <!-- Quote -->

                <blockquote
                    class="text-center text-lg leading-8 text-white/90 md:text-left"
                >
                    “Our dedicated patient engagement app and
                    web portal allow you to access information
                    instantaneously with no hassle.”
                </blockquote>

            </div>

        </div>

    </div>

</section>
`,p=`
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
`,x=`
<footer
    class="bg-purple-700 text-white"
>

    <div
        class="mx-auto max-w-7xl px-6 py-16 lg:px-8"
    >

        <div
            class="grid gap-12 md:grid-cols-2 lg:grid-cols-5"
        >


            <!-- Brand -->

            <div class="lg:col-span-2">

                <a
                    href="#"
                    class="flex items-center gap-2"
                >

                    <div
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-purple-700"
                    >
                        T
                    </div>

                    <span class="text-2xl font-bold">
                        Trafalgar
                    </span>

                </a>


                <p
                    class="mt-6 max-w-md leading-7 text-white/80"
                >
                    Trafalgar provides progressive, and affordable
                    healthcare, accessible on mobile and online
                    for everyone.
                </p>


                <p class="mt-6 text-sm text-white/70">
                    © Trafalgar PTY LTD 2026. All rights reserved.
                </p>

            </div>


            <!-- Company -->

            <div>

                <h3 class="text-lg font-bold">
                    Company
                </h3>

                <ul class="mt-5 space-y-3 text-white/80">

                    <li>
                        <a href="#" class="hover:text-white">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Testimonials
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Find a doctor
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Apps
                        </a>
                    </li>

                </ul>

            </div>


            <!-- Region -->

            <div>

                <h3 class="text-lg font-bold">
                    Region
                </h3>

                <ul class="mt-5 space-y-3 text-white/80">

                    <li>
                        <a href="#" class="hover:text-white">
                            Indonesia
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Singapore
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Hongkong
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Canada
                        </a>
                    </li>

                </ul>

            </div>


            <!-- Help -->

            <div>

                <h3 class="text-lg font-bold">
                    Help
                </h3>

                <ul class="mt-5 space-y-3 text-white/80">

                    <li>
                        <a href="#" class="hover:text-white">
                            Help center
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Contact support
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            Instructions
                        </a>
                    </li>

                    <li>
                        <a href="#" class="hover:text-white">
                            How it works
                        </a>
                    </li>

                </ul>

            </div>

        </div>

    </div>

</footer>
`;document.querySelector("#app").innerHTML=`
    ${i}
    ${o}
    ${n}
    ${d}
    ${c}
    ${h}
    ${p}
    ${x}

`;const u=document.querySelector("#menu-button"),g=document.querySelector("#mobile-menu");u.addEventListener("click",()=>{g.classList.toggle("hidden")});
