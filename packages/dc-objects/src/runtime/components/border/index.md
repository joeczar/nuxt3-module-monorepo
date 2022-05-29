# Border

Der Border wird immer mit der Card Komponente verwendet.

<style>
.internal-card-example {
    position: relative;
    display: inline-block;
    margin-top: 30px;
    width: 100%;
    height: 60px;
    border: 1px dotted black;
}
</style>

::: warning
Die Border muss innerhalb eines relativen Nodes definiert sein. Da er sich automatisch ausrichtet.
Der gepunktete Rahmen ist nicht Teil des Borders, sondern simuliert den Karten-Container.
:::

## Border in Linienform

<div class="internal-card-example">
    <o-border />
</div>

```vue
<o-border />
```

## Border mit Pfeil

<div class="internal-card-example">
    <o-border arrow/>
</div>

```vue
<o-border arrow />
```
