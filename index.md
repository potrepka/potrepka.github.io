---
layout: default
title: Nathaniel S. Potrepka
permalink: /
---

<!-- Article wrapper, limit width -->
<article>

  <!-- Post title -->
  <header>
    <h1 class="amsf-title">
      Nathaniel S. Potrepka
    </h1>
  </header>

  <br>

  <div class="page-content">
    {% for post in site.posts %}
      {% include page-item.html %}
    {% endfor %}
  </div>

  <small>
    <a href="/art">ART</a><br>
    <a href="/code">CODE</a><br>
    <a href="/music">MUSIC</a><br>
    <a href="/philosophy">PHILOSOPHY</a>
  </small>
</article>
