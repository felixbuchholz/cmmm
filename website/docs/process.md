# Process

## 0606 Model for the frontend

I want to model the frontend UI

### Nested object

``` js
{

	title: { english: "", serbian: "", className: "siteTitle" },
	visualization: {
		map: {
			tooltip: { english: "", serbian: "", className: "circleTooltip" }
		},
		squareChart: {
			legend: { english: "", serbian: "", className: "" }
		},
		count: {
			number: { english: "", serbian: "", className: "" }
			legend: { english: "", serbian: "", className: "" }
		}
	},
	overlay: {
		title: {}
	}
}
```

Recursive component renderer, here instead of classNames I could add the relevant components. The problem with this approach would be that I don’t necessarily want to put the whole component tree into the data structure, but I also want to keep my individual react components small. A remedy for that could be passing down the last part of the tree and a function that checks for the existence a specific attribute inside them.

### Component tree

``` js
[
	{component: "main", items: [
		{component: "titleContainer", items: [
			{component: "icon"},
			{component: "text", props: {english: "", serbian: ""}}
		]}
	]}
]
```

Could this also work with linking different states? – Maybe this is trying too much?

### Flat translation file

``` js
{
	title: { english: "", serbian: "" },
	mapTooltip: { english: "", serbian: "" }
}
```

Just a flat object / enum with the translations. Easiest for translation task at hand, pretty quick to expand. In a dynamic setup would need an error handler.

