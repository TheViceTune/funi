<template>
  <div class="courses-view">
    <h2>Các Khóa Học Có Sẵn</h2>
    <p>Khám phá nhiều khóa học để nâng cao kỹ năng của bạn!</p>
    <div class="course-cards">
      <router-link
        class="course-card"
        v-for="course in courses"
        :key="course.id"
        :to="{ name: 'course-detail', params: { courseId: course.id } }"
      >
        <img :src="course.thumbnail" alt="Hình Ảnh Khóa Học" class="thumbnail" />
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </router-link>
      <div v-if="!courses.length" class="no-courses">Không có khóa học nào!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesView',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Phát Triển Web',
          description:
            'Học các kiến thức cơ bản về phát triển web sử dụng HTML, CSS và JavaScript.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Khoa Học Dữ Liệu',
          description: 'Đắm chìm trong phân tích và trực quan hóa dữ liệu với Python và R.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Tiếp Thị Kỹ Thuật Số',
          description: 'Hiểu các nguyên tắc của tiếp thị kỹ thuật số và các chiến lược SEO.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 4,
          title: 'Thiết Kế Đồ Họa',
          description: 'Khám phá các nguyên tắc thiết kế đồ họa và phần mềm thiết kế.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 5,
          title: 'Phát Triển Ứng Dụng Di Động',
          description: 'Học cách phát triển ứng dụng cho iOS và Android.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 6,
          title: 'Quản Trị Hệ Thống',
          description: 'Nắm vững các kỹ năng quản trị hệ thống và mạng máy tính.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 7,
          title: 'An Ninh Mạng',
          description: 'Hiểu các nguyên tắc và thực hành của an ninh mạng.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 8,
          title: 'Trí Tuệ Nhân Tạo',
          description: 'Khám phá các khái niệm cơ bản về trí tuệ nhân tạo và học máy.',
          thumbnail: 'https://via.placeholder.com/150'
        },
        {
          id: 9,
          title: 'Khoa Học Thống Kê',
          description: 'Nắm vững các nguyên tắc thống kê và phân tích dữ liệu.',
          thumbnail: 'https://via.placeholder.com/150'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Styles remain the same */
</style>

<style scoped>
.courses-view {
  padding: 20px;
  max-width: 1200px; /* Limit the width of the content */
  margin: 0 auto; /* Center the content */
}

.course-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.course-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  width: calc(33.33% - 20px); /* Keep the width to fit 3 in a row with gap */
  height: 200px; /* Set a fixed height for the cards */
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Inherit text color */
}

.course-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.thumbnail {
  width: 100%;
  height: 100px; /* Set a fixed height for the thumbnails */
  border-radius: 4px;
  object-fit: cover; /* Maintain aspect ratio and cover */
}

.no-courses {
  text-align: center;
  margin-top: 20px;
}
</style>
