---
layout: page
title: Philosophy
permalink: /philosophy/
desc: Food for thought
---

<!-- <p>
  <small>
  {% for social in site.data.social %}
    {% if social.category == "philosophy" %}
      <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
        <i class="fa {{ social.icon }}"></i>
        {{ social.desc }}
      </a><br>
    {% endif %}
  {% endfor %}
  </small>
</p> -->

<div>
{% for post in site.categories.philosophy %}
  {% include page-item.html %}
{% endfor %}
</div>

There are many great writings, and each is unique in its own right. These are
the writings I have found to be most influential in my understanding of purpose:

{% for book in site.data.books %}
  1. <a target="_blank" href="{{ book.url }}" title="{{ book.title }}">{{ book.desc }}</a>
{% endfor %}
