<template>
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          <div class="text-lg font-semibold">
            <RouterLink to="/" class="hover:text-indigo-400 transition">
              MyStore
            </RouterLink>
          </div>
  
          <div class="flex gap-6">
            <a
              href="https://www.facebook.com/ali.elgendy.3154/"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              class="text-gray-400 hover:text-blue-500 transition"
            >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.2c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4H15c-1.2 0-1.6.8-1.6 1.5v1.8H18l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
            </svg>
            </a>
  
            <a
              href="https://github.com/Ali-LGendy"
              target="_blank"
              rel="noopener"
              aria-label="GitHub"
              class="text-gray-400 hover:text-white transition"
            >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .8 2 .8 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.8 10.8 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"
              />
            </svg>
            </a>
  
            <a
              href="https://www.linkedin.com/in/ali--elgendy/"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
              class="text-gray-400 hover:text-blue-300 transition"
            >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3V9zm7 0h3.6v1.7h.1c.5-.9 1.7-1.8 3.5-1.8 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 3.1V21h-4V9z"
              />
            </svg>
            </a>
          </div>
  
          <p class="text-sm text-gray-400 text-center md:text-right">
            &copy; 2025 MyStore. Ali Elgendy.
          </p>
        </div>
      </div>
    </footer>
</template>
  
<script>
    import { FaceSmileIcon, CodeBracketIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'

    export default {
      components: {
        FaceSmileIcon,
        CodeBracketIcon,
        BriefcaseIcon
      }
    }
</script>