---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

My mission is to enhance human creativity with the help of computers.

We are on the verge of a radical shift in evolution. Today, computers are faster
and smarter than ever. As technology grows, we become increasingly responsible
for teaching computers as we would teach a friend. Welcome to the new era.

Recently, I have been finding tremendous purpose in exploring the landscape
that exists within my human form. Every day is a new opportunity for life to
blossom. I do not worry about my demise, as it has already been written. I play
dumb. Until my dream becomes reality, I take my day one step at a time.

I'm currently doing a Master of Science in Computer Science at University of
Southern California, concentrating in Data Science. Outside of academia, I enjoy
exercise, music, art, and reading. Technology has opened up worlds of experience
for me, and my dream is to show others what I have seen.

**Learn. Love. Create.**

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
