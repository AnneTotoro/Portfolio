---
layout: page
title: Photo
permalink: /photo/
---

<div class="gallery">
  {% for photo in site.data.photos %}
    <div class="thumb">
      <a href="{{ site.baseurl }}/assets/photos/{{ photo.folder }}/{{ photo.file }}" target="_blank">
        <img src="{{ site.baseurl }}/assets/photos/{{ photo.folder }}/{{ photo.file }}">
      </a>
      <div class="caption">
        <strong>{{ photo.title }}</strong><br>
        {{ photo.caption }} ({{ photo.year }})
      </div>
    </div>
  {% endfor %}
</div>

