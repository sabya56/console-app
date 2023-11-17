<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <li>
        <RouterLink :to="{ name: 'home' }">Home (Console App)</RouterLink> |
        <RouterLink :to="{ name: 'page2' }">Page 2 (Console App)</RouterLink> |
        <a href="/dashboard">Dashboard (Admin App)</a>
      </li>
    </nav>
    <div style="margin: 50px;">
      <RouterView />
    </div>
  </div>
</template>
