<script setup>
import logodark from '@/assets/logodark.svg';
import moon from '@/assets/moon.svg';
import FlatLay from '@/assets/FlatLay.svg';
</script>

<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg bg-white px-4 shadow-sm">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img :src="logodark" alt="Moon Logo" width="145" height="38.33" class="me-2"></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
        </ul>
        <div>
          <i class="bi bi-search me-3"></i>
          <i class="bi bi-person me-3"></i>
          <i class="bi bi-cart"></i>
        </div>
      </div>
    </nav>

    
    <div class="row m-0">
      <div class="col-md-4 d-flex flex-column justify-content-center align-items-start p-5 bg-secondary text-white">
        <div class="mb-3">
          <img :src="moon.svg" alt="icon" width="40">
        </div>
        <p>Handcrafted in Viet Nam since 1650</p>
        <h2 class="fw-bold">BAT TRANG<br>DINNER SET</h2>
        <button class="btn btn-light mt-4">SHOP NOW</button>
      </div>

      <div class="col-md-8 p-0">
        <img :src="FlatLay" alt="Bat Trang Set" class="img-fluid w-100 h-100 object-fit-cover">
      </div>
    </div>
  </div>
</template>


<style scoped>
.object-fit-cover {
  object-fit: cover;
}
</style>


