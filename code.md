---
layout: page
title: Code
permalink: /code/
desc: Beep boop
---

<!-- <p>
  <small>
  {% for social in site.data.social %}
    {% if social.category == "code" %}
      <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
        <i class="fa {{ social.icon }}"></i>
        {{ social.desc }}
      </a><br>
    {% endif %}
  {% endfor %}
  </small>
</p> -->

<div>
{% for post in site.categories.code %}
  {% include page-item.html %}
{% endfor %}
</div>
