---
layout: page
title: Art
permalink: /art/
desc: Colors and shapes
---

[<i class="fa fa-instagram"></i> Instagram](https://www.instagram.com/potrepka)

<div>
{% for post in site.categories.art %}
  {% include page-item.html %}
{% endfor %}
</div>
