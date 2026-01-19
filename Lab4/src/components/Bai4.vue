<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row">
      <div
        class="col-md-4 mb-3"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="card h-100">
          <img
            :src="item.image"
            class="card-img-top post-img"
            alt="Hình ảnh bài viết"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import img1 from '../assets/images/8loairaucugiaucanxi.webp'
import img2 from '../assets/images/8loaigiavitotchosuckhoe.jpg'
import img3 from '../assets/images/9loaidautotchosuckhoe.jpeg'

const items = [
  {
    title: '8 loại rau củ quả giàu canxi',
    content: `Canxi là khoáng chất cần thiết đối với cơ thể con người, đóng vai trò quan trọng trong việc hình thành và duy trì hệ xương, răng chắc khỏe. Ngoài ra, canxi còn tham gia vào quá trình co cơ, dẫn truyền thần kinh và hỗ trợ hoạt động của tim mạch. Khi cơ thể thiếu canxi có thể gây ra tình trạng loãng xương, đau nhức xương khớp và ảnh hưởng xấu đến sức khỏe lâu dài.
    Để bổ sung canxi tự nhiên, bạn nên tăng cường các loại rau củ quả giàu canxi như cải xoăn, bông cải xanh, cải thìa, rau dền, đậu bắp, cà rốt, cam và sung. Đây là những thực phẩm dễ tìm, an toàn và rất tốt cho sức khỏe hằng ngày.`,
    image: img1
  },
  {
    title: 'Các loại gia vị tốt cho sức khỏe',
    content: `Gia vị không chỉ giúp món ăn thêm thơm ngon mà còn mang lại nhiều lợi ích cho sức khỏe. Nhiều loại gia vị chứa hàm lượng polyphenol và các chất chống oxy hóa cao, giúp giảm viêm, tăng cường hệ miễn dịch và phòng ngừa một số bệnh mãn tính.
    Các gia vị quen thuộc như gừng, nghệ, tỏi, quế, ớt, tiêu và hành có tác dụng hỗ trợ tiêu hóa, cải thiện tuần hoàn máu và tăng sức đề kháng cho cơ thể. Việc sử dụng gia vị hợp lý trong bữa ăn hằng ngày sẽ góp phần nâng cao sức khỏe và chất lượng cuộc sống.`,
    image: img2
  },
  {
    title: '9 loại đậu bổ dưỡng nên dùng nhiều',
    content: `Đậu là nhóm thực phẩm giàu dinh dưỡng, cung cấp nhiều protein thực vật, chất xơ, vitamin và khoáng chất cần thiết cho cơ thể. Các loại đậu như đậu lăng, đậu nành, đậu phộng, đậu Hà Lan, đậu xanh, đậu đỏ, đậu đen, đậu trắng và đậu gà giúp cung cấp năng lượng, hỗ trợ phát triển cơ bắp và tạo cảm giác no lâu.
    Bên cạnh đó, đậu còn giúp giảm cholesterol xấu, ổn định lượng đường trong máu và tốt cho hệ tim mạch. Bổ sung các loại đậu vào chế độ ăn uống hằng ngày sẽ giúp xây dựng lối sống lành mạnh và cân bằng dinh dưỡng.`,
    image: img3
  }
]


</script>

<style scoped>
.post-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-text {
  text-align: left;
  line-height: 1.6;
}
</style>
