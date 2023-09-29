---
layout: page
title: Hi, I'm Nathaniel!
permalink: /about/
---

Welcome to my website! I am a software engineer with a deep interest in AI,
agents, language models, and creativity. Here is a litle bit about me:

My primary creative outlet is computer music. Over the years, I have cultivated
an understanding of both computers and music, listening to the works of great
musicians and reading about the techniques of great music technologists. With
more than a decade of experimentation in the field, I have spent countless hours
studying functional programming, data structures, concurrency, and artificial
intelligence through the lens of computer music, and it is on the back of these
learnings that I build my magnum opus.

More recently, I have taken a liking to blockchain technology and its potential
for creating real consensus in large populations. Though no system is perfect,
blockchain technology presents an opportunity to completely defer trust to the
level of code so long as one participates in securing the network. Furthermore,
state-of-the-art cryptographic methods provide new modalities for creative and
social computing, which&mdash;much to my delight&mdash;are paving the way for
a renaissance of computer art in a new medium called "smart contracts".

The remainder of my interests span across the areas of computer graphics,
philosophy, mathematics, movement, architecture, fashion, and much more. At the
moment, I am especially interested in type theory and decision-making, as they
each delineate boundaries of the natural world that orient the individual
towards an understanding of reality.

I work hard to build tools that allow people to explore these topics, and my
hope is that the world will find my constructions and, upon engaging with them,
develop their own ways of seeing and their own ways of doing.

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
