**\### `Html`**

**\###### `Table` --- HTML Table**

> What is it?
<br/> Ans:- The `<table>` tag is used to create a table in
HTML. A table is used to display data in rows and columns.

A table normally contains rows using `<tr>`, table headings using
`<th>`, and table data using `<td>`.

**\*Example:-\***

``` html
<!-- this is example -->

<!DOCTYPE html>

<html>

<head>

    <title>HTML Table Example</title>

</head>

<body>

    <h1>HTML Table Example</h1>

    <table border="1">

        <tr>

            <th>Name</th>

            <th>Age</th>

            <th>City</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

            <td>Mumbai</td>

        </tr>

        <tr>

            <td>Priya</td>

            <td>22</td>

            <td>Pune</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
HTML Table Example

┌────────┬─────┬────────┐
│ Name   │ Age │ City   │
├────────┼─────┼────────┤
│ Rahul  │ 21  │ Mumbai │
├────────┼─────┼────────┤
│ Priya  │ 22  │ Pune   │
└────────┴─────┴────────┘
```

------------------------------------------------------------------------

**\###### `Table Border`**

> What is it?
<br/> Ans:- The table border is used to visually separate the
table, rows, and cells. In modern HTML, borders are normally added using
CSS.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Border Example</title>

    <style>

        table, th, td {

            border: 1px solid black;

        }

        table {

            border-collapse: collapse;

        }

    </style>

</head>

<body>

    <h1>Table Border Example</h1>

    <table>

        <tr>

            <th>Name</th>

            <th>Age</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

        </tr>

        <tr>

            <td>Priya</td>

            <td>22</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Border Example

┌────────┬─────┐
│ Name   │ Age │
├────────┼─────┤
│ Rahul  │ 21  │
├────────┼─────┤
│ Priya  │ 22  │
└────────┴─────┘
```

------------------------------------------------------------------------

**\###### `Table Size`**

> What is it?
<br/> Ans:- Table size means controlling the width and height
of a table using CSS.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Size Example</title>

    <style>

        table {

            width: 600px;

            height: 200px;

            border-collapse: collapse;

        }

        th, td {

            border: 1px solid black;

        }

    </style>

</head>

<body>

    <h1>Table Size Example</h1>

    <table>

        <tr>

            <th>Name</th>

            <th>Age</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

        </tr>

        <tr>

            <td>Priya</td>

            <td>22</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Size Example

┌─────────────────────────────────────┐
│ Name                    Age         │
├─────────────────────────────────────┤
│ Rahul                   21          │
├─────────────────────────────────────┤
│ Priya                   22          │
└─────────────────────────────────────┘

Table width = 600px
Table height = 200px
```

------------------------------------------------------------------------

**\###### `Table Header`**

> What is it?
<br/> Ans:- The `<th>` tag is used to create a heading cell in
a table. It tells the user what type of data is present in each column
or row.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Header Example</title>

</head>

<body>

    <h1>Table Header Example</h1>

    <table border="1">

        <tr>

            <th>Name</th>

            <th>Age</th>

            <th>City</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

            <td>Mumbai</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Header Example

┌────────┬─────┬────────┐
│ Name   │ Age │ City   │  ← Table Headers
├────────┼─────┼────────┤
│ Rahul  │ 21  │ Mumbai │  ← Table Data
└────────┴─────┴────────┘
```

------------------------------------------------------------------------

**\###### `Table Caption`**

> What is it?
<br/> Ans:- The `<caption>` tag is used to give a title or
description to the entire table.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Caption Example</title>

</head>

<body>

    <h1>Table Caption Example</h1>

    <table border="1">

        <caption>Student Information</caption>

        <tr>

            <th>Name</th>

            <th>Age</th>

            <th>City</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

            <td>Mumbai</td>

        </tr>

        <tr>

            <td>Priya</td>

            <td>22</td>

            <td>Pune</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Caption Example

       Student Information

┌────────┬─────┬────────┐
│ Name   │ Age │ City   │
├────────┼─────┼────────┤
│ Rahul  │ 21  │ Mumbai │
├────────┼─────┼────────┤
│ Priya  │ 22  │ Pune   │
└────────┴─────┴────────┘
```

------------------------------------------------------------------------

**\###### `Table Colgroup`**

> What is it?
<br/> Ans:- The `<colgroup>` tag is used to group one or more
columns in a table. It is commonly used together with the `<col>` tag to
apply styling or properties to specific columns.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Colgroup Example</title>

    <style>

        table {

            border-collapse: collapse;

        }

        th, td {

            border: 1px solid black;

            padding: 10px;

        }

    </style>

</head>

<body>

    <h1>Table Colgroup Example</h1>

    <table>

        <colgroup>

            <col>

            <col>

            <col style="background-color: lightblue;">

        </colgroup>

        <tr>

            <th>Name</th>

            <th>Age</th>

            <th>City</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

            <td>Mumbai</td>

        </tr>

        <tr>

            <td>Priya</td>

            <td>22</td>

            <td>Pune</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Colgroup Example

┌────────┬─────┬────────┐
│ Name   │ Age │ City   │
├────────┼─────┼────────┤
│ Rahul  │ 21  │ Mumbai │  ← 3rd column styled
├────────┼─────┼────────┤
│ Priya  │ 22  │ Pune   │
└────────┴─────┴────────┘
```

------------------------------------------------------------------------

**\###### `Table Colspan And Rowspan`**

> What is it?
<br/> Ans:- `colspan` is used when one cell needs to cover
multiple columns.

`rowspan` is used when one cell needs to cover multiple rows.

**\*Example:- `colspan`\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Colspan Example</title>

</head>

<body>

    <h1>Colspan Example</h1>

    <table border="1">

        <tr>

            <th colspan="3">Student Information</th>

        </tr>

        <tr>

            <th>Name</th>

            <th>Age</th>

            <th>City</th>

        </tr>

        <tr>

            <td>Rahul</td>

            <td>21</td>

            <td>Mumbai</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Colspan Example

┌──────────────────────────────┐
│      Student Information     │
├────────┬─────────┬───────────┤
│ Name   │ Age     │ City      │
├────────┼─────────┼───────────┤
│ Rahul  │ 21      │ Mumbai    │
└────────┴─────────┴───────────┘

The first cell covers 3 columns.
```

**\*Example:- `rowspan`\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Rowspan Example</title>

</head>

<body>

    <h1>Rowspan Example</h1>

    <table border="1">

        <tr>

            <th>Name</th>

            <th>Subject</th>

        </tr>

        <tr>

            <td rowspan="2">Rahul</td>

            <td>HTML</td>

        </tr>

        <tr>

            <td>CSS</td>

        </tr>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Rowspan Example

┌────────┬─────────┐
│ Name   │ Subject │
├────────┼─────────┤
│        │ HTML    │
│ Rahul  ├─────────┤
│        │ CSS     │
└────────┴─────────┘

The Rahul cell covers 2 rows.
```

------------------------------------------------------------------------

**\###### `Table Structure – Thead, Tbody, Tfoot`**

> What is it?
<br/>Ans:- `<thead>`, `<tbody>`, and `<tfoot>` are used to
divide a table into three logical sections.

-   `<thead>` → Contains the table heading.
-   `<tbody>` → Contains the main table data.
-   `<tfoot>` → Contains the table footer, usually totals or summary
    information.

**\*Example:-\***

``` html
<!DOCTYPE html>

<html>

<head>

    <title>Table Structure Example</title>

    <style>

        table {

            border-collapse: collapse;

            width: 600px;

        }

        th, td {

            border: 1px solid black;

            padding: 10px;

        }

    </style>

</head>

<body>

    <h1>Table Structure Example</h1>

    <table>

        <caption>Student Information</caption>

        <thead>

            <tr>

                <th>Name</th>

                <th>Age</th>

                <th>City</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td>Rahul</td>

                <td>21</td>

                <td>Mumbai</td>

            </tr>

            <tr>

                <td>Priya</td>

                <td>22</td>

                <td>Pune</td>

            </tr>

        </tbody>

        <tfoot>

            <tr>

                <th colspan="2">Total Students</th>

                <th>2</th>

            </tr>

        </tfoot>

    </table>

</body>

</html>
```

**\*\*output\*\***

``` txt
Table Structure Example

             Student Information

┌────────┬─────┬────────┐
│ Name   │ Age │ City   │  ← <thead>
├────────┼─────┼────────┤
│ Rahul  │ 21  │ Mumbai │  ← <tbody>
├────────┼─────┼────────┤
│ Priya  │ 22  │ Pune   │  ← <tbody>
├────────┴─────┼────────┤
│ Total Students│  2   │  ← <tfoot>
└───────────────────────┘
```

------------------------------------------------------------------------

**\###### `Quick Revision`**

``` txt
<table>       → Creates the table

<tr>           → Creates a table row

<td>           → Creates normal table data

<th>           → Creates table heading

<caption>      → Gives a title to the table

<colgroup>     → Groups table columns

<col>          → Defines/properties of a column

colspan        → One cell covers multiple columns

rowspan        → One cell covers multiple rows

<thead>        → Table header section

<tbody>        → Main table data section

<tfoot>        → Table footer/summary section
```
