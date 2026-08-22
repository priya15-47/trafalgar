const Navbar = `
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
`

export default Navbar
