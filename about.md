---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

Welcome to my website! I am a software engineer with a deep interest in AI,
agents, language models, and creativity. Here is a litle bit about me:

My primary creative outlet is computer music. Over the years, I have cultivated
an understanding of both computers and music, listening to the works of great
musicians and reading about the techniques of great music technologists. I am
most interested in the applications of AI to music generation, specifically
generation of symbolic notation and signal graphs. I also believe that these
learnings will inform other applications, such as graphics shaders or hardware
design.

More recently, I have taken a liking to blockchain technology and its potential
for creating real consensus in large populations. Though no system is perfect,
blockchain technology presents an opportunity to completely defer trust to the
level of code so long as one participates in securing the network. Furthermore,
state-of-the-art cryptographic methods provide new modalities for social
computing, which&mdash;much to my delight&mdash;are paving the way for a
renaissance of computer art in a new medium called "smart contracts".

The remainder of my interests span across the areas of mathematics, philosophy,
movement, architecture, and much more. At the moment, I am especially
interested in type theory and decision-making, as they delineate boundaries of
the natural world that orient the individual towards an understanding of truth.

Currently, my projects are in stealth mode, but I intend to have some updates
in the coming months. I hope that others will engage with my work and, upon
doing so, develop their own ways of seeing and their own ways of doing.

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
