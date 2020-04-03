---
layout: page
title: Code
permalink: /code/
desc: Beep boop
---

[<i class="fa fa-github-alt"></i> GitHub](https://www.github.com/nspotrepka)

<div>
{% for post in site.categories.code %}
  {% include page-item.html %}
{% endfor %}
</div>
