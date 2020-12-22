<template>
  <div>
    <main>
      <div class="p-6">
        <!-- <create-account></create-account> -->
        <!-- main -->
        <section class="flex flex-col p-20 justify-center items-center gap-6">
          <div class="gap-10 flex flex-col w-96">
            <div class="">
              <div class="text-3xl font-bold">Reset your password</div>
              <p class="text-sm">
                Enter your email and we will send you a link to reset your
                password.
              </p>
            </div>

            <!-- email adderess -->
            <div class="text-sm font-thin">
              <div class="flex flex-col">
                Email address
                <input
                  type="text"
                  name=""
                  id=""
                  class="border p-2 rounded w-full block"
                  placeholder="abdulbasitsaeed619@gmail.com"
                />
              </div>
            </div>
            <!-- end -->

            <div class="w-full">
              <nuxt-link
                to="sentreset"
                class="bg-primary py-2 px-6 rounded text-white w-full block text-center"
                >Send Instructions</nuxt-link
              >
            </div>
            <div class="gap-2 flex justify-center">
              I remember my password
              <nuxt-link to="/" class="text-primary"> Try Login </nuxt-link>
            </div>
          </div>
        </section>
        <!-- main -->
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>