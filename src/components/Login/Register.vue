<template>
    <main class="form-signin w-25 m-auto">
        <form>
            <img style="width:120px;" src="https://crm-finalproject.netlify.app/img/logo-main.png" alt="logo" />
            <h1 class="h3 mb-3 mt-3 fw-normal">Sign up</h1>

            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Your name">
                <label for="floatingInput">Name</label>
            </div>

            <div class="form-floating mt-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating mt-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start  my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    Remember me
                </label>
            </div>

            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
    </main>
</template>
<script>
export default {

}
</script>
<style ></style>
    