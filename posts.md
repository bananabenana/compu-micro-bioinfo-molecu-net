---
layout: about
title: Posts
image: assets/images/logo.png
---

## Post archive

See blog posts and associated resources

<table class="sortable">
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Snippet</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% for post in site.posts %}
    <tr>
      <!-- Image first, hyperlinked -->
      <td>
        {% if post.image %}
          <a href="{{ post.url | relative_url }}">
            <img src="{{ post.image | relative_url }}" style="max-height:400px; width:auto;">
          </a>
        {% endif %}
      </td>

      <!-- Title -->
      <td><a href="{{ post.url | relative_url }}">{{ post.title }}</a></td>

      <!-- Snippet -->
      <td>{{ post.excerpt | strip_html | truncatewords: 20 }}</td>

      <!-- Date -->
      <td>{{ post.date | date: "%Y-%m-%d" }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<br />

## Favourite posts


<figure class="centered-figure">
  <img src="{{ '/assets/images/logo.png' | relative_url }}"
    alt="compu-micro-bioinfo-molecu-net logo"
    style="height:400px; width:auto;">
  <figcaption>
    <br />
    <em></em>
  </figcaption>
</figure>
