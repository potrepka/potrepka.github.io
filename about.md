---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

My mission is to make great contributions to computing in the creative arts.

The direction of my career is multifaceted, spanning across the disciplines of
art, music, fashion, social interaction, movement, and philosophy; I intend to
delve into each of these areas over the course of my life.

Computers have opened up the world for me, and my goal is build tools for others
to experience the same wonder and joy that I felt as a child when I was first
introduced to computers.

## Social

<p>
  <small>
  {% for social in site.data.social %}
    <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
      <i class="fa {{ social.icon }}" style="min-width: 1.8vw"></i>
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
