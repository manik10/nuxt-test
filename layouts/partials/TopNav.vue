<template>
   <div class="container">
        <b-navbar toggleable="lg" type="light" variant="light">
         <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <li class="nav-item">
                <nuxt-link class="nav-link" to="/about">About</nuxt-link>
            </li>
           
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
                <template v-if="authenticated">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auth/login">Logout</nuxt-link>
                     </li>
                </template>
                <template v-else>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auth/login">Login</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
                    </li>
                </template>
            </b-navbar-nav>
            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>