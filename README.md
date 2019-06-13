# mofron-comp-radiolist
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

radio list component for [mofron](https://mofron.github.io/mofron/).

# Install

```:bash
npm install mofron mofron-comp-radiolist
```

# Sample
```html
<require>
    <tag module="mofron-comp-radiolist">RadioList</tag>
    <tag module="mofron-comp-text">Text</tag>
</require>

<script run=init>
let chg_evt = (p1,p2,p3) => { console.log(p2); }
</script>

<RadioList changeEvent=chg_evt>
    <text>
        <Text>Radio 1</Text>
        <Text>Radio 2</Text>
        <Text>Radio 3</Text>
    </text>
</Radiolist>
```

# Parameter

| Simple<br>Param | Parameter Name     | Type                               |    Description                         |
|:---------------:|:-------------------|:-----------------------------------|:---------------------------------------|
|         ◯       | text               | string/mofron-comp-text/array      | radio text contents                    |
|                 | select             | boolean                            | true: select                           |
|                 |                    |                                    | false: unselect                        |
|                 |                    | number                             | target index                           |
|                 | value              | boolean                            | same as 'select'                       |
|                 |                    | number                             | same as 'select'                       |
|                 | status             | boolean                            | true: change enable mode (default)     |
|                 |                    |                                    | false: change disable mode             |
|                 |                    | number/undefined                   | target index / all targets             |

