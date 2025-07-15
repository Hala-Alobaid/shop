<script setup>
import logo from '@/assets/logo.svg';
</script>

<template>
  <div class="login-container d-flex min-vh-100 flex-column flex-md-row">
    <!-- Left Logo Section -->
    <div class="logo-section text-white d-flex flex-column justify-content-center align-items-center">
      <img :src="logo" alt="Logo" class="logo-img" />
    </div>

    <!-- Right Signup Section -->
    <div class="login-section bg-white d-flex flex-column justify-content-center align-items-center">
      <div class="w-75">
        <h3 class="fw-bold text-center">Create Account</h3>
        <p class="text-center">Sign up to get started</p>

        <form>
          <div class="mb-3">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-control"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input type="email" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control"/>
          </div>

          <div class="mb-3">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control"/>
          </div>

          <button type="submit" class="btn btn-dark w-100">Sign Up</button>

          <div class="text-center my-3">or</div>

          <button type="button" class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" class="me-2" />
            Sign up with Google
          </button>
        </form>

        <p class="text-center mt-3">
          Already have an account?
          <router-link to="/UserAuth" class="text-decoration-none login">Log in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.login-container {
  min-height: 100vh;
  background-color: rgb(58, 56, 69);
}

.logo-section,
.login-section {
  width: 100%;
  padding: 2rem 1rem;
  min-height: 50vh;
}

.logo-section {
  flex: 1;
  text-align: center;
}

.login-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

input.form-control {
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 6px; 
  padding: 8px 12px;
  transition: border-color 0.3s ease;
}

input.form-control:focus {
  border-color: rgba(217, 217, 217, 1);
  outline: none; 
  box-shadow: 0 0 5px rgba(217, 217, 217, 1);
}

.google-btn {
  color: rgba(0, 0, 0, 1);
}

a.text-decoration-none.small {
  color: rgba(12, 42, 146, 1); 
  font-weight: 600; 
  cursor: pointer;
  transition: color 0.3s ease;
}

a.text-decoration-none.small:hover {
  color:rgb(124, 187, 255);
  text-decoration: underline;
}

a.login {
  color: rgb(15, 61, 222);
  font-weight: 400;
  cursor: pointer;
  transition: color 0.3s ease;
}
@media (min-width: 768px) {
  .login-container {
    flex-direction: row;
  }

  .logo-section,
  .login-section {
    width: 50%;
    min-height: 100vh;
  }

  .logo-img {
    width: 532px;
    height: 136px;
  }
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}
</style>
