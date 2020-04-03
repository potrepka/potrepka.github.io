---
layout: page
title: Music
permalink: /music/
desc: Auditory experiments
---

[<i class="fa fa-soundcloud"></i> SoundCloud](https://www.soundcloud.com/potrepka)

<div>
{% for post in site.categories.music %}
  {% include page-item.html %}
{% endfor %}
</div>
