---
layout: base.njk
title: Press
description: Update press article.
image:
pagination:
  data: collections.press
  size: 15
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: "/press/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
show_founding: false
show_newsletter: false
show_alfie: false
---
<div class="container default full screen">
<div class="wrapper">
<div class="inner">
<div class="press-section">
<h2 class="style2" style="text-align: center">{{title}}</h2>
<p class="style3 mbb-5" style="text-align: center">{{description}}</p>
</div>
<div class="press-grid-5x5">
{% for post in pagination.items | reverse %}
<div class="press-grid-item5x5">
<a href="{{post.url}}">
{% if post.data.image %}<img src="{{post.data.image}}" 
class="press-image"
alt="{{post.data.title}}" width="100%" height="100%"/>{% endif %}
<h2>{{post.data.title}}</h2>
<p class="mbm">{{post.data.description}}</p>
</a>
</div>
{% endfor %}
</div>
</div>

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
	 

</div>
</div>

