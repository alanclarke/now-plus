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

  now.plus = function nowPlus (quantity, unit) {
    return plus(date || now(), quantity, unit)
  }
  now.minus = function nowMinus (quantity, unit) {
    return plus(date || now(), -quantity, unit)
  }
  now.get = function nowGet (newDate) {
    return create(newDate)
  }
  return now
}

function plus (date, quantity, unit) {
  return new Date(Number(date) + ((quantity || 0) * ms[unit.replace(/s$/, '')]))
}

module.exports = create()
