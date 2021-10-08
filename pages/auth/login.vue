<template>
   <div class="container">
       <div class="col-md-6 offset-md-3">
           <div class="card mt-4">
               <div class="card-header">
                   <p>Login</p>
               </div>
               <div class="card-body">
                   <form @submit.prevent="login">
                       <div class="form-group">
                           <label>Email</label>
                           <input type="email" v-model="form.email"  class="form-control" placeholder="Email">
                       </div>
                       <div class="form-group">
                           <label>Password</label>
                           <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                       </div>
                       <div class="form-group">
                           <input type="submit" value="Login" class="btn btn-secondary w-100">
                       </div>
                   </form>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async login() {
                await this.$auth.login({ data: this.form });
                
                this.$router.push({ name:'index' });
            }
        }
    }
</script>
