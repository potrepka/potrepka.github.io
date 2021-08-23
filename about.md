---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

My life's mission is to make great contributions to computing in the creative
arts.

My interests are numerous, spanning across the disciplines of art, music,
fashion, social interaction, movement, and philosophy, and I intend to delve
into each of these areas over the course of my career. Computers have opened up
an entire world of experience for me, and my dream is to show others what I have
seen.

Right now, I am working on a music software project.

## Social

<p>
  <small>
  {% for social in site.data.social %}
    <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
      <i class="fa {{ social.icon }}"></i>
      {{ social.desc }}
    </a><br>
  {% endfor %}
  </small>
</p>

## License

<p>
  All content on this website is licensed by me under
  <a target="_blank" href="http://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.
</p>

## Theme

<p>
  <a target="_blank" href="http://sparanoid.com/lab/amsf/">Almace Scaffolding</a>
</p>
