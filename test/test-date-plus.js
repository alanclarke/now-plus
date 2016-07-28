var now = require('../lib/index')
var expect = require('chai').expect
var ms = {}
ms.minute = 1000 * 60
ms.hour = ms.minute * 60
ms.day = ms.hour * 24
ms.week = ms.day * 7
ms.year = ms.day * 365

describe('now-plus', function () {
  var time
  beforeEach(function () {
    time = new Date()
  })

  describe('now', function () {
    it('should return the current date', function () {
      expect(Number(now())).to.be.closeTo(Number(time), 5)
      expect(Number(now.plus(0, 'minute'))).to.be.closeTo(Number(time), 5)
      expect(Number(now.minus(0, 'minute'))).to.be.closeTo(Number(time), 5)
    })
  })

  describe('now.plus', function () {
    it('should return the current date plus 1 minute', function () {
      expect(now.get(time).plus(1, 'minute')).to.eql(datePlus(time, ms.minute))
      expect(now.get(time).plus(1, 'minutes')).to.eql(datePlus(time, ms.minute))
    })
    it('should return the current date plus 1 hour', function () {
      expect(now.get(time).plus(1, 'hour')).to.eql(datePlus(time, ms.hour))
      expect(now.get(time).plus(1, 'hours')).to.eql(datePlus(time, ms.hour))
    })
    it('should return the current date plus 1 day', function () {
      expect(now.get(time).plus(1, 'day')).to.eql(datePlus(time, ms.day))
      expect(now.get(time).plus(1, 'days')).to.eql(datePlus(time, ms.day))
    })
    it('should return the current date plus 1 week', function () {
      expect(now.get(time).plus(1, 'week')).to.eql(datePlus(time, ms.week))
      expect(now.get(time).plus(1, 'weeks')).to.eql(datePlus(time, ms.week))
    })
    it('should return the current date plus 1 year', function () {
      expect(now.get(time).plus(1, 'year')).to.eql(datePlus(time, ms.year))
      expect(now.get(time).plus(1, 'years')).to.eql(datePlus(time, ms.year))
    })
    it('should return a date object', function () {
      expect(now.plus(1, 'minute')).to.be.instanceof(Date)
    })
  })

  describe('now.minus', function () {
    it('should return the current date minus 1 minute', function () {
      expect(now.get(time).minus(1, 'minute')).to.eql(datePlus(time, -ms.minute))
      expect(now.get(time).minus(1, 'minutes')).to.eql(datePlus(time, -ms.minute))
    })
    it('should return the current date minus 1 hour', function () {
      expect(now.get(time).minus(1, 'hour')).to.eql(datePlus(time, -ms.hour))
      expect(now.get(time).minus(1, 'hours')).to.eql(datePlus(time, -ms.hour))
    })
    it('should return the current date minus 1 day', function () {
      expect(now.get(time).minus(1, 'day')).to.eql(datePlus(time, -ms.day))
      expect(now.get(time).minus(1, 'days')).to.eql(datePlus(time, -ms.day))
    })
    it('should return the current date minus 1 week', function () {
      expect(now.get(time).minus(1, 'week')).to.eql(datePlus(time, -ms.week))
      expect(now.get(time).minus(1, 'weeks')).to.eql(datePlus(time, -ms.week))
    })
    it('should return the current date minus 1 year', function () {
      expect(now.get(time).minus(1, 'year')).to.eql(datePlus(time, -ms.year))
      expect(now.get(time).minus(1, 'years')).to.eql(datePlus(time, -ms.year))
    })
    it('should return a date object', function () {
      expect(now.minus(1, 'minute')).to.be.instanceof(Date)
    })
  })
})

function datePlus (date, ms) {
  return new Date(date.getTime() + ms)
}
