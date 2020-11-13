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

  <p>
    <small>
      {% for category in site.data.categories %}
        <a href="{{ category.url }}" style="padding: 0.229em 0.6em; text-transform: uppercase;">{{ category.title }}</a>
      {% endfor %}
    </small>
  </p>

  <div class="page-content">
    {% for post in site.posts %}
      {% include page-item.html %}
    {% endfor %}
  </div>
</article>
