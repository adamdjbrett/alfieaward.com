---
layout: base.njk
title: Event Awards
description: Update event and awards article.
image:
pagination:
  data: collections.awards
  size: 2
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: "/awards/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
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
      <h2 class="style2"><a href="{{post.url}}">{{post.data.title}}</a></h2>
      <h3 class="style1">{{post.data.description}}</h3>
      <p class="style3">
        {{content|safe}}
        <span class="p">
          <strong>Publish:</strong> <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate("dd LLLL yyyy") }}</time><br />
          <strong>Time:</strong> {{post.data.event.time}}<br />
          <strong>Location:</strong> {% for s in post.data.event.location %}
          <br />{{s.info}} {% endfor %}
          </span
        >
      </p>
    </div>
  </div>
</div>
{% endfor %}
      <ul class="style1 buttons">
        {% if pagination.href.previous %}<li>
          <a href="{{ pagination.href.previous }}" class="button n01" role="button"
            ><svg aria-labelledby="buttons01-icon-1-title">
              <title>Arrow Right (Light)</title><use xlink:href="/assets/icons.svg#arrow-right-light"></use></svg><span class="label">PREVIOUS</span></a>
        </li>{% endif %}
        {% if pagination.href.next %}<li>
          <a href="{{ pagination.href.next}}" class="button n01" role="button"
            ><svg aria-labelledby="buttons01-icon-1-title">
              <title>Arrow Right (Light)</title><use xlink:href="/assets/icons.svg#arrow-right-light"></use></svg><span class="label">NEXT</span></a>
        </li>{% endif %}
      </ul>
