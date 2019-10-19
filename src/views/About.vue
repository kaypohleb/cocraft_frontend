<template>
    <div class="about">
      <Header/>
        <transition appear name="fade">
          <main>
              <section style="margin:auto;max-width:1000px;">
                  <div style="margin:0 3rem;">
                      placeholder: + logo
                      <p  class="is-family-title is-size-2 has-text-grey-dark" style="text-align:left;">
                          Who <span class="has-text-primary"> we </span> are
                          <br><br>
                      </p>
                      <p class="is-family-title is-size-3 has-text-grey-dark">
                          We are passionate people who believe in collaboration as a keystone to success in today's world – where projects require a diversity of skills and talents and it only gets more complicated.
                      </p>
                  </div>
              </section>
          </main>
        </transition>
    </div>
</template>

<script>
import Header from '../components/layout/Header.vue';

export default {
  components: {
    Header
  }
}
</script>
