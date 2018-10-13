<template>
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">RustWeb</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link to="/" class="nav-item nav-link active">Home</router-link>
      <router-link to="/about" class="nav-item nav-link active">About</router-link>
      <router-link to="/contact" class="nav-item nav-link active">Contact</router-link>
    </div>
  </div>
</nav>
</div>    
</template>
