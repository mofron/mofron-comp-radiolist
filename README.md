# mofron-comp-radiolist
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

radiobutton list component for mofron


# Install
```
npm install mofron mofron-comp-radiolist
```

# Sample
```html
<setting>
    <tag load="mofron-comp-radiolist">RadioList</tag>
    <tag load="mofron-layout-margin">Margin</tag>
</setting>

<RadioList layout=Margin:("left","0.2rem")>
    <radio>radio_1</radio>
    <radio>radio_2</radio>
</RadioList>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | text | mixed | array: radio contents list  |
| | | | string: radio text string |
| | | | mofron-comp-text: radio text component |
| | radio | mixed | string: text contents string |
| | | | mofron-comp-text: text contents component |
| | | | array: radio-button text contents list |
| | | | undefined: call as getter |
| | select | boolean | true: select |
| | | | false: unselect |
| | | | undefined: call as getter |
| | | number | select target index |
| | value | boolean | same as 'select' parameter |
| | | number | same as 'select' parameter |
| | status | boolean | true: change enable mode (default) |
| | | | false: change disable mode |
| | | | undefined: call as getter |
| | clear | ||
