# Now plus
simple lib for computing relative dates

## usage
```js
now() // new Date()
now.plus(1, 'week') // new date set to exactly now plus 1 week
now.get(myDate).plus(1, 'second') // new date set to exactly myDate plus 1 second
now.minus(2, 'days') // new date set to exactly now minus 2 days
now.get(myDate).minus(2, 'minutes') // new date set to exactly myDate minus 2 minutes
```

## run tests
```js
npm test
```
