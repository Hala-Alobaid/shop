<script setup>
import logodark from '@/assets/logodark.svg';
import moon from '@/assets/moon.svg';
import FlatLay from '@/assets/FlatLay.svg';
import tableware from '@/assets/tableware.svg';
import homedecor from '@/assets/homedecor.svg';
import holiday from '@/assets/holiday.svg';
import collection from '@/assets/collection.svg';
import { useRouter } from 'vue-router'

const cards = [
  { image: tableware, title: 'Tableware', route: '/UserAuth' },
  { image: homedecor, title: 'Home Decor', route: '/UserSignup' },
  { image: holiday, title: 'Holiday Specials', route: '/UserAuth' },
  { image: collection, title: 'New Collection', route: '/UserSignup' }
];

const router = useRouter()
const handleCardClick = (route) => {
  router.push(route)
}
</script>

<template>
  <div class="container-fluid p-0">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-white px-4 shadow-sm">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img :src="logodark" alt="Moon Logo" width="145" height="38.33" class="me-2" />
      </a>
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

    <!-- Banner -->
    <div class="banner-wrapper position-relative">
      <img :src="FlatLay" alt="Bat Trang Set" class="banner-bg" />
      <div class="handcrafted-box text-white p-5 d-flex flex-column justify-content-center gap-3">
        <div>
          <img :src="moon" alt="icon" width="40" />
        </div>
        <p>Handcrafted in Viet Nam since 1650</p>
        <h2 class="Hand-font">BAT TRANG<br />DINNER SET</h2>
        <button class="btn btn-light mt-4">SHOP NOW</button>
      </div>
    </div>

    <!-- Cards -->
    <div class="cards-grid">
      <div
        class="card"
        v-for="(item, index) in cards"
        :key="index"
        @click="handleCardClick(item.route)"
        role="button"
        tabindex="0"
      >
        <img :src="item.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  max-width: 100vw;
  height: 642px;
  overflow: hidden;
  position: relative;
}

.banner-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.handcrafted-box {
  position: absolute;
  top: 50%;
  left: 250px; 
  transform: translateY(-50%);
  width: 273px;
  height: 640px; 
  background-color: rgba(130, 111, 102, 1);
  z-index: 2;
  text-align: center;
  align-items: center;
}

.Hand-font {
  color: rgba(255, 253, 251, 1);
  font-family: Garamond, serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  width: 245px;
  height: 80px;
}

.btn {
  background-color: rgba(255, 255, 255, 1);
  color:rgba(130, 111, 102, 1);
  size: 14px;
  line-height: 20px;
  width: 220px;
  border-radius: 0;
  padding: 15px 18px 15px 18px;
  font-weight: 600;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 255px);
  gap: 25px;
  justify-content: center;
  padding: 40px 20px;
  border-radius: 0;
  margin-top: 10px;
}

.card {
  width: 255px;
  border: none;
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.02);
}

.card-img-top {
  width: 255px;
  height: 255px;
  object-fit: cover;
  border-radius: 0;
}

@media (max-width: 1300px) {
  .banner-wrapper {
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .banner-bg {
    position: static;
    height: 398px; 
    height: auto;
  }

  .handcrafted-box {
    position: static;
    transform: none;
    width: 100%;
    height: 354px; 
    text-align: center;
    align-items: center;
  }

  .Hand-front {
   font: Garamond;
}

  .cards-grid {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 16px;
    
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }
  
  .card:first-child {
    margin-left: 700px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .card {
    flex: 0 0 80%;
    max-width: 255px;
    scroll-snap-align: start;
  }
}
</style>
