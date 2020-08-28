---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

We are on the verge of a radical shift in evolution. Today, computers are faster
and smarter than ever. As technology grows, we become increasingly responsible
for teaching computers as we would teach a friend.

My mission in life is to make great contributions to creative computing.

I recently completed a Master of Science in Computer Science at University of
Southern California, with concentration in Data Science. Outside of academia, I
enjoy music, art, fitness, and philosophy. Technology has opened up worlds of
experience for me, and my dream is to show others what I have seen.

I am currently working on music and art projects.

**Explore. Learn. Create.**

## Social

<p>
  {% for social in site.data.social %}
    <a target="_blank" href="{{ social.url }}" title="{{ social.title }}">
      <i class="fa {{ social.icon }}" style="width:35px"></i>
      {{ social.desc }}
    </a><br>
  {% endfor %}
</p>

## License

<p>
  All content on this website is licensed by me under <a target="_blank" href="http://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>.
  <br>
  Theme: <a target="_blank" href="http://sparanoid.com/lab/amsf/">Almace Scaffolding</a>
</p>
