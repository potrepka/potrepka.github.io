---
layout: page
title: Art
permalink: /art/
desc: Colors and shapes
---

<!-- <p>
  <small>
  {% for social in site.data.social %}
    {% if social.category == "art" %}
      <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
        <i class="fa {{ social.icon }}"></i>
        {{ social.desc }}
      </a><br>
    {% endif %}
  {% endfor %}
  </small>
</p> -->

<div>
{% for post in site.categories.art %}
  {% include page-item.html %}
{% endfor %}
</div>
