<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <h5><i class="fas fa-stethoscope me-2"></i>عيادتي</h5>
          <p>نظام حجز المواعيد الطبية الأكثر تطوراً في مصر</p>
        </div>
        <div class="col-md-4 mb-3">
          <h5>روابط سريعة</h5>
          <ul class="list-unstyled">
            <li><router-link to="/" class="text-light">الرئيسية</router-link></li>
            <li><router-link to="/doctors" class="text-light">الأطباء</router-link></li>
            <li><router-link to="/contact" class="text-light">اتصل بنا</router-link></li>
          </ul>
        </div>
        <div class="col-md-4 mb-3">
          <h5>تواصل معنا</h5>
          <p><i class="fas fa-phone me-2"></i>60475229 10 20+</p>
          <p><i class="fas fa-envelope me-2"></i>
          <a href="mailto:ahmedsami20996@gmail.com">ahmedsami20996@gmail.com</a></p>
          <p><i class="fas fa-map-marker-alt me-2"></i>القاهرة، مصر</p>
        </div>
      </div>
      <hr class="my-4" style="border-color: rgba(255,255,255,0.3);">
      <div class="text-center">
        <p>&copy; 2024 عيادتي. جميع الحقوق محفوظة.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>