var ms = {}
ms.second = 1000
ms.minute = ms.second * 60
ms.hour = ms.minute * 60
ms.day = ms.hour * 24
ms.week = ms.day * 7
ms.year = ms.day * 365

function create (date) {
  function now () {
    return new Date()
  }

  now.plus = function plus (quantity, unit) {
    return adder(date || now(), quantity, unit)
  }
  now.minus = function minus (quantity, unit) {
    return adder(date || now(), -quantity, unit)
  }
  now.get = function nowGet (newDate) {
    return create(newDate)
  }
  return now
}

function adder (date, quantity, unit) {
  return new Date(Number(date) + ((quantity || 0) * ms[unit.replace(/s$/, '')]))
}

module.exports = create()
