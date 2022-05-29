# Card

Basis elemente für die Darstellung von Karten.

<style>
  .space {
    height: 20px;
  }
</style>

## Basis

<o-card>Einfacher Text</o-card>

```vue
<o-card>Einfacher Text</o-card>
```

## Ohne linie

<o-card :border="false">Einfacher Text mit Pfeil</o-card>

```vue
<o-card :border="false">Einfacher Text mit Pfeil</o-card>
```

## Mit Pfeildarstellung

<o-card border="arrow">Einfacher Text mit Pfeil</o-card>

```vue
<o-card border="arrow">Einfacher Text mit Pfeil</o-card>
```

## Schatten

Eine Karte hat immer einen Schattenwurf, im styl `soft`;

### Ohne Schatten

<o-card :shadow="false" :border="false">...</o-card>

```vue
<o-card :shadow="false" :border="false">...</o-card>
```

### mit harten Schatten

<o-card shadow="hard">...</o-card>

```vue
<o-card shadow="hard">...</o-card>
```

### mit weichen Schatten (standard)

<o-card shadow="soft">...</o-card>

```vue
<o-card shadow="soft">...</o-card>
```

## Beispielanwendung

Hier befinden sich einige fallbeispiele, die aber nicht final mit dem Design abgestimmt sind, da es unterschiedliche Unterobjekte referenzieren kann.

### Testimonial

<o-card border="arrow">
  <span class="f-quote l-color-primary">
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  </span>
</o-card>

### Teaser

<style>
  .card-fake-teaser {
    max-width: 260px;
    margin: auto;
  }
</style>

<div class="content custom">
  <o-card class="card-fake-teaser">
    <div class="l-centered">
      <img src="https://via.placeholder.com/120x140" />
    </div>  
        <div class="f-headline-3 l-color-primary">Headline</div>
        <div class="f-copy-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</div>

  </o-card>
</div>
