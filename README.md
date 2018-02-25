# Slider

Carousal using react.
## API
| Name     | Type     | Default     |  Description
---------  |----------|-------------|-----------------
| list     | `Array`  | `[]`        |  pattern is [ {img: `String`, link: `String`, } ]. for Example [{img: 'img1.png', link: 'https://github.com/bazsup'}] .
| target   | `String` | `undefined` | target for link. use target equals `_blank` to open link in new tab.
| height   | `String` | `200px`     | For setting min height for SliderContainer.
| width    | `String` | `500px`     | For setting width for SliderContainer.
| interval | `String` or `Integer` | `undefined` | Interval to changing image. Example value `3000` for interval every 3 seconds.