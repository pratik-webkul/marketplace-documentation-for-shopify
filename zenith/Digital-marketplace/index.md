<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

const router = useRouter()

onMounted(() => {
  router.go('/zenith/introduction/')
})
</script>
