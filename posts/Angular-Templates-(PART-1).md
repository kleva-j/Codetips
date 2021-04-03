---
title: "Angular Templates; <ng-container>, <ng-template><ng-content> and *ngTemplateOutlet. (PART 1)"
author: "Michael Obasi"
description: "Angular Templates; <ng-container>, <ng-template><ng-content> and *ngTemplateOutlet. (PART 1)"
banner: "https://hackeruna.com/wp-content/uploads/2020/05/angular-card.png"
bannerDesc: "content banner"
tags: "JavaScript, Angular, Templates, HTML"
date: "1590260849918"
---

A number of Angular developers have come across these core Angular directives like the `ng-template` and are quite stuck on how to effectively use them in their codebase. We are going to dive a little bit into these core Angular directives and get an understanding of how they work.

## Table Of Contents

- `ng-template` directive.
- Template Input Variables.
- The `ng-template` directive use with `*ngIf`.
- When to / How to use the `ng-container` directive.
- Dynamic Template with the ngTemplateOutlet custom directive

### <ng-template>

This is a template element in Angular usually used with structural directives like `*ngIf`, `*ngFor`, `[ngSwitch]` and also with custom directives. The content of this tag/element will be part of a template that can be composed together with other templates in order to form a final component template.

Angular uses this `ng-template` element under the hood in many structural directives that we use.

Below are some good examples.

```js
<div *ngIf="loading" class="spinner">...loading</div>

<!-- Converted under the hood to -->

<ng-template [ngIf]="loading">
    <div class="spinner">...loading</div>
</ng-template>
```

Let create another template element example.

```js
@Component({
  selector: "app-hello",
  template: `
    <ng-template>
      <h1 class="say-hello">{{ Title }}</h1>
    </ng-template>
  `,
})
export class HelloComponent {
  title: "Hello World";
}
```

You should be surprised that there isn't any bug in this piece of code if it does not get displayed on your web page. This is normal and is the expected behaviour. The thing is that we were only defining a template that would be used later on in our code.

Let's create another example where we render from a defined template.

```html
<div class="listitem" *ngIf="list else loading">...</div>

<ng-template #loading>
  <div class="spinner">Loading...</div>
</ng-template>
```

In this piece, we are displaying an alternative loading template while waiting for let say a response from an API call made somewhere in our codebase. If you look closely you would notice that we are able to reference the designed `ng-template` template there with the help of a reference variable `#loading`.

Let's take a look under the hood to see what Angular does with our template.

```html
<ng-template [ngIf]="list" [ngIfElse]="loading">
   <div class="listitem">
     ...
   </div>
</ng-template>

<ng-template #loading>
    <div class="spinner">Loading...</div>
</ng-template>
```

As we can see, the else clause points to a template, which has the name `loading`. The name was assigned to it via a template reference using the `#loading` syntax.
