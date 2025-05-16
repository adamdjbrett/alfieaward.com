---
layout: base.njk
title: Blogs
description: Update blog article.
image:
pagination:
  data: collections.posts
  size: 2
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: "/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
show_founding: false
show_newsletter: false
show_alfie: false
---

{% for post in pagination.items | reverse %}

<div
  data-scroll-behavior="default"
  data-scroll-offset="0"
  data-scroll-speed="3"
  class="style6 container default full screen"
>
  <div class="wrapper">
    <div class="inner" data-onvisible-trigger="1">
      <h3 class="style1">{{post.data.description}}</h3>
      <h2 class="style2">{{post.data.title}}</h2>
      <p class="style3">
        <span class="p"
          >{{post.content|safe}}
      </p>
    </div>
  </div>
</div>{% endfor %}
      <ul class="style1 buttons">
       {% if pagination.href.previous %} <li>
          <a href="{{ pagination.href.previous }}" class="button n01" role="button"
            ><svg aria-labelledby="buttons01-icon-1-title">
              <title>Arrow Right (Light)</title>
              <use xlink:href="/assets/icons.svg#arrow-right-light"></use></svg
            ><span class="label">Previous</span></a
          >
        </li>{% endif %}
        {% if pagination.href.next %}<li>
          <a
            href="{{ pagination.href.next }}"
            class="button n02"
            role="button"
            ><svg aria-labelledby="buttons01-icon-1-title">
              <title>Arrow Right (Light)</title>
              <use xlink:href="/assets/icons.svg#arrow-right-light"></use></svg
            ><span class="label">Next</span></a
          >
        </li>{% endif %}
      </ul>
