---
layout: default
title: Projects
permalink: /projects/
---
<div class="wrap block"><h1>Projects</h1>
<p class="mute">Each project follows one pattern: a natural system, our engineered analog, and the essential physics.</p>
<div class="filters">
  <button class="on" data-k="status" data-v="all">All</button>
  <button data-k="status" data-v="ongoing">Ongoing</button>
  <button data-k="status" data-v="past">Past</button>
  <span class="sep"></span>
  <button class="on" data-k="theme" data-v="all">Any physics</button>
  {% for t in site.data.themes %}<button data-k="theme" data-v="{{ t.key }}" style="--c:{{ t.color }}"><i></i>{{ t.label }}</button>{% endfor %}
</div>
{% include atlas.html %}</div>
