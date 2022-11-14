# @addasoft/timespan

Format milliseconds as human-readable strings.

## Install

```bash
npm install @addasoft/timespan
```

## Use

```javascript
import timespan from '@addasoft/timespan';

const time_in_ms = 1000;
console.log(timespan(time_in__ms));
// '00:01'

const hour_in_ms = 1000 * 60 * 60;
console.log(timespan(hour_in_ms));
// '01:00:00'

const humanized_hour = 1000 * 60 * 60;
console.log(timespan(humanized_hour, true));
// '1 hr'
```
