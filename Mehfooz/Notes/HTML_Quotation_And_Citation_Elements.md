**\### `Html`**

**\###### `HTML Quotation And Citation Elements`**

> What is it?
<br/> Ans:- HTML provides special elements for quotations,
citations, contact information, abbreviations, and text direction.

These elements help give meaning and structure to text instead of using
normal text tags only.

The main elements covered here are:

-   `<blockquote>` --- Block Quotation
-   `<q>` --- Short Quotation
-   `<address>` --- Contact Information
-   `<abbr>` --- Abbreviation
-   `<cite>` --- Citation
-   `<bdo>` --- Bi-Directional Override

------------------------------------------------------------------------

**\###### `<blockquote>` --- Block Quotation**

> What is it?
<br/>  Ans:- `<blockquote>` is used when you are quoting a large
section of text from another source.

The browser normally displays the quoted content as a separate block
with indentation.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>Blockquote Example</title>

</head>

<body>

    <h1>Blockquote Example</h1>

    <p>Here is a quote from Albert Einstein:</p>

    <blockquote>

        Life is like riding a bicycle. To keep your balance,
        you must keep moving.

    </blockquote>

</body>

</html>
```

**\*\*output\*\***

``` txt
Blockquote Example

Here is a quote from Albert Einstein:

    Life is like riding a bicycle. To keep your balance,
    you must keep moving.
```

------------------------------------------------------------------------

**\###### `<q>` --- Short Quotations**

> What is it?
<br/> Ans:- `<q>` is used for a short quotation inside a
sentence or paragraph.

The browser normally adds quotation marks around the text.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>Short Quotation Example</title>

</head>

<body>

    <h1>Short Quotation Example</h1>

    <p>

        Albert Einstein said,

        <q>Life is like riding a bicycle.</q>

    </p>

</body>

</html>
```

**\*\*output\*\***

``` txt
Short Quotation Example

Albert Einstein said, "Life is like riding a bicycle."
```

### Difference between `<blockquote>` and `<q>`

``` txt
<blockquote>
    ↓
Large / block quotation

<q>
    ↓
Short / inline quotation
```

------------------------------------------------------------------------

**\###### `<blockquote>` --- `cite` Attribute**

> What is it?
<br/> Ans:- The `cite` attribute can be used with
`<blockquote>` to specify the URL of the source from where the quoted
information came.

The URL is normally not displayed directly on the page. It provides
source information for the quotation.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Blockquote Cite Attribute</title>

</head>

<body>

    <h1>Blockquote Cite Attribute</h1>

    <blockquote cite="https://www.example.com/source">

        This is a quotation taken from another source.

    </blockquote>

</body>

</html>
```

**\*\*output\*\***

``` txt
Blockquote Cite Attribute

    This is a quotation taken from another source.
```

> The `cite` attribute stores the source URL, but the browser does not
> normally show that URL as visible text.

------------------------------------------------------------------------

**\###### `<address>` --- Contact Information**

> What is it?
<br/> Ans:- `<address>` is used to provide contact information
for the author, owner, or organization related to a document or article.

The browser normally displays the address in italic text.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>Address Example</title>

</head>

<body>

    <h1>Address Example</h1>

    <address>

        Written by John Smith<br>

        Email: john@example.com<br>

        Phone: +91 98765 43210<br>

        Mumbai, Maharashtra, India

    </address>

</body>

</html>
```

**\*\*output\*\***

``` txt
Address Example

Written by John Smith
Email: john@example.com
Phone: +91 98765 43210
Mumbai, Maharashtra, India
```

------------------------------------------------------------------------

**\###### `<abbr>` --- Abbreviations**

> What is it?
<br/> Ans:- `<abbr>` is used to represent an abbreviation or
acronym.

The `title` attribute can be used to provide the complete meaning of the
abbreviation. When the user moves the mouse over the abbreviation, the
full meaning can be shown as a tooltip.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>Abbreviation Example</title>

</head>

<body>

    <h1>Abbreviation Example</h1>

    <p>

        I am learning

        <abbr title="HyperText Markup Language">HTML</abbr>.

    </p>

</body>

</html>
```

**\*\*output\*\***

``` txt
Abbreviation Example

I am learning HTML.
```

When you move the mouse over `HTML`, the browser can show:

``` txt
HyperText Markup Language
```

### Important

``` html
<abbr title="HyperText Markup Language">HTML</abbr>
```

means:

``` txt
HTML
 ↑
Short form

title
  ↓
Full form
```

------------------------------------------------------------------------

**\###### `<cite>` --- Citation**

> What is it?
<br/> Ans:- `<cite>` is used to identify the title of a
creative work, such as a book, movie, painting, song, or other work.

Browsers normally display `<cite>` content in italic text.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>Cite Example</title>

</head>

<body>

    <h1>Cite Example</h1>

    <p>

        My favorite book is

        <cite>The Alchemist</cite>.

    </p>

</body>

</html>
```

**\*\*output\*\***

``` txt
Cite Example

My favorite book is The Alchemist.
                 ───────────────
                    italic
```

### Important Difference

Do not confuse the `<cite>` tag with the `cite` attribute.

**`<cite>` tag**

``` html
<cite>The Alchemist</cite>
```

It identifies the **title of a creative work**.

**`cite` attribute**

``` html
<blockquote cite="https://www.example.com/source">
    Quoted text
</blockquote>
```

It identifies the **source URL of the quotation**.

------------------------------------------------------------------------

**\###### `<bdo>` --- Bi-Directional Override**

> What is it?
<br/> Ans:- `<bdo>` stands for **Bi-Directional Override**.

It is used to override the normal text direction.

The `dir` attribute controls the direction of the text.

Two common values are:

``` txt
ltr → Left To Right

rtl → Right To Left
```

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>BDO Example</title>

</head>

<body>

    <h1>Bi-Directional Override Example</h1>

    <p>

        Normal Text:

        Hello World

    </p>

    <p>

        Right To Left:

        <bdo dir="rtl">Hello World</bdo>

    </p>

</body>

</html>
```

**\*\*output\*\***

``` txt
Bi-Directional Override Example

Normal Text:

Hello World

Right To Left:

dlroW olleH
```

### How `<bdo>` works

``` html
<bdo dir="rtl">Hello World</bdo>
```

means:

``` txt
<bdo>
  ↓
Override text direction

dir="rtl"
      ↓
Right To Left
```

Another example:

``` html
<bdo dir="ltr">Hello World</bdo>
```

Here:

``` txt
ltr
 ↓
Left To Right
```

------------------------------------------------------------------------

**\###### `Quick Revision`**

``` txt
<blockquote>   → Large/block quotation

<q>            → Short/inline quotation

<address>      → Contact information

<abbr>         → Abbreviation or acronym

<cite>         → Title of a creative work

cite attribute → Source URL of a quotation

<bdo>          → Overrides text direction

dir="ltr"      → Left To Right

dir="rtl"      → Right To Left
```

------------------------------------------------------------------------

**\###### \`Important Difference --- Citation**

``` txt
<blockquote>
        ↓
Used for a large quotation

<q>
        ↓
Used for a short quotation

<cite>
        ↓
Identifies the title of a creative work

cite=""
        ↓
Specifies the source URL of quoted content
```

------------------------------------------------------------------------

**\###### `Complete Example`**

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Quotation And Citation Elements</title>

</head>

<body>

    <h1>HTML Quotation And Citation Elements</h1>

    <h2>Blockquote</h2>

    <blockquote>

        Learning never stops when you keep asking questions.

    </blockquote>


    <h2>Short Quotation</h2>

    <p>

        My teacher always says,

        <q>Practice makes progress.</q>

    </p>


    <h2>Address</h2>

    <address>

        Written by John Smith<br>

        Email: john@example.com<br>

        Mumbai, Maharashtra, India

    </address>


    <h2>Abbreviation</h2>

    <p>

        I am learning

        <abbr title="HyperText Markup Language">HTML</abbr>.

    </p>


    <h2>Cite</h2>

    <p>

        My favorite book is

        <cite>The Alchemist</cite>.

    </p>


    <h2>Bi-Directional Override</h2>

    <p>

        <bdo dir="rtl">Hello World</bdo>

    </p>

</body>

</html>
```

**\*\*output\*\***

``` txt
HTML Quotation And Citation Elements

Blockquote

    Learning never stops when you keep asking questions.


Short Quotation

My teacher always says, "Practice makes progress."


Address

Written by John Smith
Email: john@example.com
Mumbai, Maharashtra, India


Abbreviation

I am learning HTML.


Cite

My favorite book is The Alchemist.


Bi-Directional Override

dlroW olleH
```
