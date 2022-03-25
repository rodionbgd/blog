<template>
  <nav
    class="bg-green-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"
  >
    <div class="container flex flex-wrap justify-start items-center mx-auto">
      <MyAnchor @click="$router.push('/')" class="flex items-center">
        <img
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-blog-web-development-flaticons-flat-flat-icons.png"
          class="mr-3 h-6 sm:h-9"
          alt=""
        />
      </MyAnchor>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <MyAnchor @click="$router.push('/posts')"> Posts </MyAnchor>
          </li>
          <li>
            <MyAnchor @click="$router.push('/about')">About</MyAnchor>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MyNavbar",
};
</script>
