---
layout: page
title: Music
permalink: /music/
desc: Auditory experiments
---

<!-- <p>
  <small>
  {% for social in site.data.social %}
    {% if social.category == "music" %}
      <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
        <i class="fa {{ social.icon }}"></i>
        {{ social.desc }}
      </a><br>
    {% endif %}
  {% endfor %}
  </small>
</p> -->

<div>
{% for post in site.categories.music %}
  {% include page-item.html %}
{% endfor %}
</div>
