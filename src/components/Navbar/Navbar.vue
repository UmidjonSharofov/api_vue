<template>
    <div>
        <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
            <a class="d-flex align-items-center cursor-pointer  text-dark text-decoration-none">

                <img style=" width: 100px;cursor: pointer; " @click="toHomeHandler"
                    src="https://crm-finalproject.netlify.app/img/logo-main.png" alt="logo">
            </a>

            <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'login' }">Login</RouterLink>
                <RouterLink class="me-3 py-2 text-dark text-decoration-none" :to="{ name: 'register' }">Register
                </RouterLink>
            </nav>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        toHomeHandler() {
            return this.$router.push('/');
        }
    },
}
</script>
<style>
.main {
    width: 100px;
}
</style>