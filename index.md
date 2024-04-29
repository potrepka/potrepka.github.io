---
layout: default
title: Nathaniel Potrepka
permalink: /
---

<!-- Article wrapper, limit width -->
<article>

  <!-- Post title -->
  <header>
    <h1 class="amsf-title">
      {{ site.name }}
    </h1>
  </header>

  <p>
    <small>
      {% for category in site.data.categories %}<a
        href="{{ category.url }}"
        style="margin-right: 1.2em; padding: 0.229em 0; text-transform: uppercase;"
      >{{ category.title }}</a>{% endfor %}
    </small>
  </p>

  <div class="page-content">
    {% for post in site.posts %}
      {% include page-item.html %}
    {% endfor %}
  </div>
</article>
