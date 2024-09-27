<template>
  <div class="course-detail">
    <h2>{{ course.title }}</h2>
    <img :src="course.thumbnail" :alt="course.title" class="course-image" />
    <p>{{ course.description }}</p>
    <h3>Lessons</h3>
    <ul class="lesson-list">
      <li v-for="lesson in course.lessons" :key="lesson.id">
        {{ lesson.title }}
      </li>
    </ul>
    <div class="action-buttons">
      <button @click="signUp" class="btn btn-primary">Sign Up</button>
      <button @click="downloadSyllabus" class="btn btn-secondary">Download Syllabus</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetailView',
  data() {
    return {
      course: null
    }
  },
  created() {
    // In a real application, you would fetch the course data from an API
    // using the courseId from the route params
    const courseId = this.$route.params.courseId
    this.fetchCourseDetails(courseId)
  },
  methods: {
    fetchCourseDetails(courseId) {
      // Simulating API call
      this.course = {
        id: courseId,
        title: 'Sample Course',
        description: 'This is a detailed description of the course.',
        thumbnail: 'https://via.placeholder.com/300',
        lessons: [
          { id: 1, title: 'Introduction to the Course' },
          { id: 2, title: 'Basic Concepts' },
          { id: 3, title: 'Advanced Topics' },
          { id: 4, title: 'Final Project' }
        ]
      }
    },
    signUp() {
      // Implement sign up logic
      alert('Sign up functionality to be implemented')
    },
    downloadSyllabus() {
      // Implement syllabus download logic
      alert('Download syllabus functionality to be implemented')
    }
  }
}
</script>

<style scoped>
.course-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.course-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.lesson-list {
  list-style-type: none;
  padding: 0;
}

.lesson-list li {
  margin-bottom: 10px;
}

.action-buttons {
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>
