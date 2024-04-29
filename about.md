---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

Welcome to my digital space! I am a software engineer passionately exploring the
nexus of AI, agents, and creativity. My spirit thrives on computer music, where
I blend deep technical knowledge with musical artistry, aiming to pioneer in
AI-assisted music generation. Fascinated by decentralized finance, I am also
delving into how cryptographic breakthroughs, such as smart contracts and
zero-knowledge proofs, are transforming the internet.

My curiosity doesn't stop there&mdash;it extends to mathematics, philosophy,
and more, with a current focus on number theory, fractals, and language models.
While my latest projects are in stealth mode, I look forward to sharing them
soon, inviting collaboration and fresh perspectives on technology and art.

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
