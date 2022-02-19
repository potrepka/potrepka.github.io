---
layout: page
title: Hello, I'm Nathaniel!
permalink: /about/
---

I am on a mission to make great contributions to computing in the creative arts.

My interests are numerous, spanning across the disciplines of art, music,
fashion, social interaction, movement, and philosophy, and I intend to delve
into each of these areas over the course of my career. Computers have opened up
an entire world of experience for me, and my goal is build tools so that others
may experience the same joy that I felt when I was a child using a computer for
the first time.

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
