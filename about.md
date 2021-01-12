---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

My mission in life is to make great contributions to creative computing.

I recently completed a Master of Science in Computer Science at the University
of Southern California, with concentration in Data Science. My interests are
numerous, spanning across the disciplines of art, music, fashion, movement,
social interaction, and philosophy. Computer technology has opened up worlds of
experience for me, and my dream is to show others what I have seen.

Right now, I am working on [AutoCycles](/autocycles/).

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
