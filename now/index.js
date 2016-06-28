var ms = {}
ms.second = 1000
ms.minute = ms.second * 60
ms.hour = ms.minute * 60
ms.day = ms.hour * 24
ms.week = ms.day * 7
ms.year = ms.day * 365

function plus (date, quantity, unit) {
  return new Date(+(date || now()) + (quantity * ms[unit.replace(/s$/, '')]))
}

function now () {
  return new Date()
}

function create (date) {
  function nowPlus (quantity, unit) {
    return plus(date, quantity, unit)
  }
  function nowMinus (quantity, unit) {
    return plus(date, -quantity, unit)
  }
  function nowGet (newDate) {
    return create(newDate)
  }
  now.plus = nowPlus
  now.minus = nowMinus
  now.get = nowGet
  return now
}

module.exports = create()
