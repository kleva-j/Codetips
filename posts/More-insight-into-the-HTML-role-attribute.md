---
title: "More insight into the HTML role attribute"
author: "Michael Obasi"
description: "More insight into the HTML role attribute"
banner: "https://cdn.hashnode.com/res/hashnode/image/upload/v1581437210540/3ro-FJzTs.jpeg"
bannerDesc: "content banner"
bannerDimension: "1024x792"
tags: "HTML, role, accessibility, aria-role"
published: "1590260849918"
updated: "1618177979351"
---

The `role` attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.

**Usage Example:**

```html
<a href="#" role="button">Button Link</a>
```

Screen Readers will read this element as “button” instead of “link”.

There are four categories of roles:

- Abstract Roles
- Widget Roles
- Document Structure Roles
- Landmark Roles

#### More info about HTML attributes:

[<script src> attribute]()

[<a href> attribute]()

[<a target> attribute]()

[<body background> attribute]()

[<p align> attribute]()

[<img src> attribute]()

[<font> attribute]()

More info about **HTML** attributes

HTML elements can have attributes, which contain additional information about the element.

**HTML** attributes generally come in name-value pairs, and always go in the opening tag of an element. The attribute name says what type of information you’re providing about the element, and the attribute value is the actual information.

For example, an anchor `(<a>)` element in an **HTML** document creates links to other pages or other parts of the page. You use the `href` attribute in the opening `<a>` tag to tell the browser where the link sends a user.

Here’s an example of a link that sends users to freeCodeCamp’s home page:

```html
<a href="www.freecodecamp.org">Click here to go to freeCodeCamp!</a>
```

Notice that the attribute name `(href)` and value `(“www.freeCodeCamp.org”)` are separated with an equals sign, and quotes surround the value.

There are many different **HTML** attributes, but most of them only work on certain **HTML** elements. For example, the `href` attribute won’t work if it’s placed in an opening `<h1>` tag.

In the example above, the value supplied to the `href` attribute could be any valid link. However, some attributes only have a set of valid options you can use, or values need to be in a specific format. The lang attribute tells the browser the default language of the contents in an **HTML** element. The values for the lang attribute should use standard language or country codes, such as en for English, or it for Italian.

### Boolean Attributes

Some **HTML** attributes don’t need a value because they only have one option. These are called Boolean attributes. The presence of the attribute in a tag will apply it to that **HTML** element. However, it’s okay to write out the attribute name and set it equal to the one option of the value. In this case, the value is usually the same as the attribute name.

For example, the `<input>` element in a form can have a required attribute. This requires users to fill out that item before they can submit the form.

Here are examples that do the same thing:

```html
<input type="text" required /> <input type="text" required="required" />
```
