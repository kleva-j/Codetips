---
title: 'CSS ":focus-within" pseudo-class.'
author: "Michael Obasi"
description: "CSS ':focus-within' pseudo-class."
banner: "https://hackernoon.com/drafts/x61qy3ts4.png"
bannerDesc: "content banner"
bannerDimension: "1050x700"
tags: "CSS, pseudo-class, pseudo-element, :focus-within, :focus, HTML"
published: "1617109730157"
updated: "1618177979351"
---

Have you ever find yourself in a situation where you have ever hoped for a [Parent Selector]()? Well here is something that should tickle your fancy. I bring to you the `:focus-within` css pseudo-class.

The `:focus-within` css pseudo-class represents an element that has received focus or contains a child element that has received focus. What this means is that it allows us the opportunity to apply stylings to an element when in focus or when any of its inner elements(decendants) has focus.

A typical example of a real world use case would be a search button that expands into/reveals a search input field when clicked and hides it when it loses focus.

HTML

```html
<form tabindex="0" class="search">
  <input
    type="text"
    class="search__input"
    aria-label="search"
    placeholder="enter your search"
  />
  <button class="search__submit" aria-label="submit search">
    <i class="fas fa-search"></i>
  </button>
</form>
```

SCSS

```scss
.search {
  border: 2px solid red;
  display: flex;
  border-radius: 100px;
  overflow: hidden;
  font-size: 1.25em;
  position: relative;
  width: 60px;
  height: 60px;
  transition: width 450ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  padding: 3px;
}

.search__input {
  border: 0;
  padding: .25em 1em;
  flex-grow: 1;
  outline: 0;
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  background: transparent;
  opacity: 0;
  cursor: pointer;
}

.search__submit {
  font-size: 1.5rem;
  margin-left: auto;
  background: 0;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  transition: background 200ms ease-out;
  width: 50px;
  height: 50px;
  color: #333;
}

.search:focus-within {
  width: 100%;
  
  .search__input {
    opacity: 1;
    width: 50px;
  }
  
  .search__submit {
    background: royalblue;
    color: white;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    
    &:hover,
    &:focus {
      outline: 0;
      box-shadow: 0 0 10px rgba(0,0,0,.65);
    }
  }
}
```

#### CAVEAT

In order for `:focus-within` to work as expected, you’ll have to make sure that the inner elements of the container are focusable. Elements that are focusable by default includes Input elements, element with [contentediable]() property set and also elements with a `tab-index`. To make an element focusable you could either set their `contenteditable` property or set its `tab-index`. The container element should also be focusable in order to receive the styling when focusing from just the container.
