import wasMod from "./87f112ed4a41cc6c.wasm"

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var _a, _b, _c, _d, _e, _f;
/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var EXP_LIMIT = 9e15, MAX_DIGITS = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -EXP_LIMIT,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: EXP_LIMIT,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: false
  // true/false
}, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", precisionLimitExceeded = decimalError + "Precision limit exceeded", cryptoUnavailable = decimalError + "crypto unavailable", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P$1 = { toStringTag: tag };
P$1.absoluteValue = P$1.abs = function() {
  var x = new this.constructor(this);
  if (x.s < 0)
    x.s = 1;
  return finalise(x);
};
P$1.ceil = function() {
  return finalise(new this.constructor(this), this.e + 1, 2);
};
P$1.clampedTo = P$1.clamp = function(min2, max2) {
  var k, x = this, Ctor = x.constructor;
  min2 = new Ctor(min2);
  max2 = new Ctor(max2);
  if (!min2.s || !max2.s)
    return new Ctor(NaN);
  if (min2.gt(max2))
    throw Error(invalidArgument + max2);
  k = x.cmp(min2);
  return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
};
P$1.comparedTo = P$1.cmp = function(y) {
  var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
  if (!xd || !yd) {
    return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
  }
  if (!xd[0] || !yd[0])
    return xd[0] ? xs : yd[0] ? -ys : 0;
  if (xs !== ys)
    return xs;
  if (x.e !== y.e)
    return x.e > y.e ^ xs < 0 ? 1 : -1;
  xdL = xd.length;
  ydL = yd.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (xd[i] !== yd[i])
      return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
};
P$1.cosine = P$1.cos = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.d)
    return new Ctor(NaN);
  if (!x.d[0])
    return new Ctor(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
};
P$1.cubeRoot = P$1.cbrt = function() {
  var e, m2, n, r2, rep, s2, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  external = false;
  s2 = x.s * mathpow(x.s * x, 1 / 3);
  if (!s2 || Math.abs(s2) == 1 / 0) {
    n = digitsToString(x.d);
    e = x.e;
    if (s2 = (e - n.length + 1) % 3)
      n += s2 == 1 || s2 == -2 ? "0" : "00";
    s2 = mathpow(n, 1 / 3);
    e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
    if (s2 == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s2.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r2 = new Ctor(n);
    r2.s = x.s;
  } else {
    r2 = new Ctor(s2.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r2;
    t3 = t.times(t).times(t);
    t3plusx = t3.plus(x);
    r2 = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r2.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).times(t).eq(x)) {
            r2 = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r2, e + 1, 1);
          m2 = !r2.times(r2).times(r2).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r2, e, Ctor.rounding, m2);
};
P$1.decimalPlaces = P$1.dp = function() {
  var w, d = this.d, n = NaN;
  if (d) {
    w = d.length - 1;
    n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
    w = d[w];
    if (w)
      for (; w % 10 == 0; w /= 10)
        n--;
    if (n < 0)
      n = 0;
  }
  return n;
};
P$1.dividedBy = P$1.div = function(y) {
  return divide(this, new this.constructor(y));
};
P$1.dividedToIntegerBy = P$1.divToInt = function(y) {
  var x = this, Ctor = x.constructor;
  return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
};
P$1.equals = P$1.eq = function(y) {
  return this.cmp(y) === 0;
};
P$1.floor = function() {
  return finalise(new this.constructor(this), this.e + 1, 3);
};
P$1.greaterThan = P$1.gt = function(y) {
  return this.cmp(y) > 0;
};
P$1.greaterThanOrEqualTo = P$1.gte = function(y) {
  var k = this.cmp(y);
  return k == 1 || k === 0;
};
P$1.hyperbolicCosine = P$1.cosh = function() {
  var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
  if (!x.isFinite())
    return new Ctor(x.s ? 1 / 0 : NaN);
  if (x.isZero())
    return one;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    n = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    n = "2.3283064365386962890625e-10";
  }
  x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
  var cosh2_x, i = k, d8 = new Ctor(8);
  for (; i--; ) {
    cosh2_x = x.times(x);
    x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
  }
  return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P$1.hyperbolicSine = P$1.sinh = function() {
  var k, pr, rm, len, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
  Ctor.rounding = 1;
  len = x.d.length;
  if (len < 3) {
    x = taylorSeries(Ctor, 2, x, x, true);
  } else {
    k = 1.4 * Math.sqrt(len);
    k = k > 16 ? 16 : k | 0;
    x = x.times(1 / tinyPow(5, k));
    x = taylorSeries(Ctor, 2, x, x, true);
    var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
    for (; k--; ) {
      sinh2_x = x.times(x);
      x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
    }
  }
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(x, pr, rm, true);
};
P$1.hyperbolicTangent = P$1.tanh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(x.s);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 7;
  Ctor.rounding = 1;
  return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
};
P$1.inverseCosine = P$1.acos = function() {
  var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
  if (k !== -1) {
    return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
  }
  if (x.isZero())
    return getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.asin();
  halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return halfPi.minus(x);
};
P$1.inverseHyperbolicCosine = P$1.acosh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (x.lte(1))
    return new Ctor(x.eq(1) ? 0 : NaN);
  if (!x.isFinite())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).minus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P$1.inverseHyperbolicSine = P$1.asinh = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite() || x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
  Ctor.rounding = 1;
  external = false;
  x = x.times(x).plus(1).sqrt().plus(x);
  external = true;
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.ln();
};
P$1.inverseHyperbolicTangent = P$1.atanh = function() {
  var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.e >= 0)
    return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  xsd = x.sd();
  if (Math.max(xsd, pr) < 2 * -x.e - 1)
    return finalise(new Ctor(x), pr, rm, true);
  Ctor.precision = wpr = xsd - x.e;
  x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
  Ctor.precision = pr + 4;
  Ctor.rounding = 1;
  x = x.ln();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(0.5);
};
P$1.inverseSine = P$1.asin = function() {
  var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
  if (x.isZero())
    return new Ctor(x);
  k = x.abs().cmp(1);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (k !== -1) {
    if (k === 0) {
      halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
      halfPi.s = x.s;
      return halfPi;
    }
    return new Ctor(NaN);
  }
  Ctor.precision = pr + 6;
  Ctor.rounding = 1;
  x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return x.times(2);
};
P$1.inverseTangent = P$1.atan = function() {
  var i, j, k, n, px, t, r2, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
  if (!x.isFinite()) {
    if (!x.s)
      return new Ctor(NaN);
    if (pr + 4 <= PI_PRECISION) {
      r2 = getPi(Ctor, pr + 4, rm).times(0.5);
      r2.s = x.s;
      return r2;
    }
  } else if (x.isZero()) {
    return new Ctor(x);
  } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
    r2 = getPi(Ctor, pr + 4, rm).times(0.25);
    r2.s = x.s;
    return r2;
  }
  Ctor.precision = wpr = pr + 10;
  Ctor.rounding = 1;
  k = Math.min(28, wpr / LOG_BASE + 2 | 0);
  for (i = k; i; --i)
    x = x.div(x.times(x).plus(1).sqrt().plus(1));
  external = false;
  j = Math.ceil(wpr / LOG_BASE);
  n = 1;
  x2 = x.times(x);
  r2 = new Ctor(x);
  px = x;
  for (; i !== -1; ) {
    px = px.times(x2);
    t = r2.minus(px.div(n += 2));
    px = px.times(x2);
    r2 = t.plus(px.div(n += 2));
    if (r2.d[j] !== void 0)
      for (i = j; r2.d[i] === t.d[i] && i--; )
        ;
  }
  if (k)
    r2 = r2.times(2 << k - 1);
  external = true;
  return finalise(r2, Ctor.precision = pr, Ctor.rounding = rm, true);
};
P$1.isFinite = function() {
  return !!this.d;
};
P$1.isInteger = P$1.isInt = function() {
  return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
};
P$1.isNaN = function() {
  return !this.s;
};
P$1.isNegative = P$1.isNeg = function() {
  return this.s < 0;
};
P$1.isPositive = P$1.isPos = function() {
  return this.s > 0;
};
P$1.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
P$1.lessThan = P$1.lt = function(y) {
  return this.cmp(y) < 0;
};
P$1.lessThanOrEqualTo = P$1.lte = function(y) {
  return this.cmp(y) < 1;
};
P$1.logarithm = P$1.log = function(base2) {
  var isBase10, d, denominator, k, inf, num, sd, r2, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
  if (base2 == null) {
    base2 = new Ctor(10);
    isBase10 = true;
  } else {
    base2 = new Ctor(base2);
    d = base2.d;
    if (base2.s < 0 || !d || !d[0] || base2.eq(1))
      return new Ctor(NaN);
    isBase10 = base2.eq(10);
  }
  d = arg.d;
  if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
    return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
  }
  if (isBase10) {
    if (d.length > 1) {
      inf = true;
    } else {
      for (k = d[0]; k % 10 === 0; )
        k /= 10;
      inf = k !== 1;
    }
  }
  external = false;
  sd = pr + guard;
  num = naturalLogarithm(arg, sd);
  denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base2, sd);
  r2 = divide(num, denominator, sd, 1);
  if (checkRoundingDigits(r2.d, k = pr, rm)) {
    do {
      sd += 10;
      num = naturalLogarithm(arg, sd);
      denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base2, sd);
      r2 = divide(num, denominator, sd, 1);
      if (!inf) {
        if (+digitsToString(r2.d).slice(k + 1, k + 15) + 1 == 1e14) {
          r2 = finalise(r2, pr + 1, 0);
        }
        break;
      }
    } while (checkRoundingDigits(r2.d, k += 10, rm));
  }
  external = true;
  return finalise(r2, pr, rm);
};
P$1.minus = P$1.sub = function(y) {
  var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (x.d)
      y.s = -y.s;
    else
      y = new Ctor(y.d || x.s !== y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.plus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (yd[0])
      y.s = -y.s;
    else if (xd[0])
      y = new Ctor(x);
    else
      return new Ctor(rm === 3 ? -0 : 0);
    return external ? finalise(y, pr, rm) : y;
  }
  e = mathfloor(y.e / LOG_BASE);
  xe = mathfloor(x.e / LOG_BASE);
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(rm === 3 ? -0 : 0);
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P$1.modulo = P$1.mod = function(y) {
  var q, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.s || y.d && !y.d[0])
    return new Ctor(NaN);
  if (!y.d || x.d && !x.d[0]) {
    return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
  }
  external = false;
  if (Ctor.modulo == 9) {
    q = divide(x, y.abs(), 0, 3, 1);
    q.s *= y.s;
  } else {
    q = divide(x, y, 0, Ctor.modulo, 1);
  }
  q = q.times(y);
  external = true;
  return x.minus(q);
};
P$1.naturalExponential = P$1.exp = function() {
  return naturalExponential(this);
};
P$1.naturalLogarithm = P$1.ln = function() {
  return naturalLogarithm(this);
};
P$1.negated = P$1.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return finalise(x);
};
P$1.plus = P$1.add = function(y) {
  var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
  y = new Ctor(y);
  if (!x.d || !y.d) {
    if (!x.s || !y.s)
      y = new Ctor(NaN);
    else if (!x.d)
      y = new Ctor(y.d || x.s === y.s ? x : NaN);
    return y;
  }
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  xd = x.d;
  yd = y.d;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (!xd[0] || !yd[0]) {
    if (!yd[0])
      y = new Ctor(x);
    return external ? finalise(y, pr, rm) : y;
  }
  k = mathfloor(x.e / LOG_BASE);
  e = mathfloor(y.e / LOG_BASE);
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = getBase10Exponent(xd, e);
  return external ? finalise(y, pr, rm) : y;
};
P$1.precision = P$1.sd = function(z) {
  var k, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  if (x.d) {
    k = getPrecision(x.d);
    if (z && x.e + 1 > k)
      k = x.e + 1;
  } else {
    k = NaN;
  }
  return k;
};
P$1.round = function() {
  var x = this, Ctor = x.constructor;
  return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
};
P$1.sine = P$1.sin = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
  Ctor.rounding = 1;
  x = sine(Ctor, toLessThanHalfPi(Ctor, x));
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
};
P$1.squareRoot = P$1.sqrt = function() {
  var m2, n, sd, r2, rep, t, x = this, d = x.d, e = x.e, s2 = x.s, Ctor = x.constructor;
  if (s2 !== 1 || !d || !d[0]) {
    return new Ctor(!s2 || s2 < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
  }
  external = false;
  s2 = Math.sqrt(+x);
  if (s2 == 0 || s2 == 1 / 0) {
    n = digitsToString(d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s2 = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s2 == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s2.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r2 = new Ctor(n);
  } else {
    r2 = new Ctor(s2.toString());
  }
  sd = (e = Ctor.precision) + 3;
  for (; ; ) {
    t = r2;
    r2 = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
    if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r2.d)).slice(0, sd)) {
      n = n.slice(sd - 3, sd + 1);
      if (n == "9999" || !rep && n == "4999") {
        if (!rep) {
          finalise(t, e + 1, 0);
          if (t.times(t).eq(x)) {
            r2 = t;
            break;
          }
        }
        sd += 4;
        rep = 1;
      } else {
        if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
          finalise(r2, e + 1, 1);
          m2 = !r2.times(r2).eq(x);
        }
        break;
      }
    }
  }
  external = true;
  return finalise(r2, e, Ctor.rounding, m2);
};
P$1.tangent = P$1.tan = function() {
  var pr, rm, x = this, Ctor = x.constructor;
  if (!x.isFinite())
    return new Ctor(NaN);
  if (x.isZero())
    return new Ctor(x);
  pr = Ctor.precision;
  rm = Ctor.rounding;
  Ctor.precision = pr + 10;
  Ctor.rounding = 1;
  x = x.sin();
  x.s = 1;
  x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
  Ctor.precision = pr;
  Ctor.rounding = rm;
  return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
};
P$1.times = P$1.mul = function(y) {
  var carry, e, i, k, r2, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  y.s *= x.s;
  if (!xd || !xd[0] || !yd || !yd[0]) {
    return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
  }
  e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r2 = xd;
    xd = yd;
    yd = r2;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r2 = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r2.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r2[k] + yd[i] * xd[k - i - 1] + carry;
      r2[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r2[k] = (r2[k] + carry) % BASE | 0;
  }
  for (; !r2[--rL]; )
    r2.pop();
  if (carry)
    ++e;
  else
    r2.shift();
  y.d = r2;
  y.e = getBase10Exponent(r2, e);
  return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
};
P$1.toBinary = function(sd, rm) {
  return toStringBinary(this, 2, sd, rm);
};
P$1.toDecimalPlaces = P$1.toDP = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return finalise(x, dp + x.e + 1, rm);
};
P$1.toExponential = function(dp, rm) {
  var str2, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str2 = finiteToString(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), dp + 1, rm);
    str2 = finiteToString(x, true, dp + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P$1.toFixed = function(dp, rm) {
  var str2, y, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str2 = finiteToString(x);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    y = finalise(new Ctor(x), dp + x.e + 1, rm);
    str2 = finiteToString(y, false, dp + y.e + 1);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P$1.toFraction = function(maxD) {
  var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r2, x = this, xd = x.d, Ctor = x.constructor;
  if (!xd)
    return new Ctor(x);
  n1 = d0 = new Ctor(1);
  d1 = n0 = new Ctor(0);
  d = new Ctor(d1);
  e = d.e = getPrecision(xd) - x.e - 1;
  k = e % LOG_BASE;
  d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
  if (maxD == null) {
    maxD = e > 0 ? d : n1;
  } else {
    n = new Ctor(maxD);
    if (!n.isInt() || n.lt(n1))
      throw Error(invalidArgument + n);
    maxD = n.gt(d) ? e > 0 ? d : n1 : n;
  }
  external = false;
  n = new Ctor(digitsToString(xd));
  pr = Ctor.precision;
  Ctor.precision = e = xd.length * LOG_BASE * 2;
  for (; ; ) {
    q = divide(n, d, 0, 1, 1);
    d2 = d0.plus(q.times(d1));
    if (d2.cmp(maxD) == 1)
      break;
    d0 = d1;
    d1 = d2;
    d2 = n1;
    n1 = n0.plus(q.times(d2));
    n0 = d2;
    d2 = d;
    d = n.minus(q.times(d2));
    n = d2;
  }
  d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
  n0 = n0.plus(d2.times(n1));
  d0 = d0.plus(d2.times(d1));
  n0.s = n1.s = x.s;
  r2 = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
  Ctor.precision = pr;
  external = true;
  return r2;
};
P$1.toHexadecimal = P$1.toHex = function(sd, rm) {
  return toStringBinary(this, 16, sd, rm);
};
P$1.toNearest = function(y, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (y == null) {
    if (!x.d)
      return x;
    y = new Ctor(1);
    rm = Ctor.rounding;
  } else {
    y = new Ctor(y);
    if (rm === void 0) {
      rm = Ctor.rounding;
    } else {
      checkInt32(rm, 0, 8);
    }
    if (!x.d)
      return y.s ? x : y;
    if (!y.d) {
      if (y.s)
        y.s = x.s;
      return y;
    }
  }
  if (y.d[0]) {
    external = false;
    x = divide(x, y, 0, rm, 1).times(y);
    external = true;
    finalise(x);
  } else {
    y.s = x.s;
    x = y;
  }
  return x;
};
P$1.toNumber = function() {
  return +this;
};
P$1.toOctal = function(sd, rm) {
  return toStringBinary(this, 8, sd, rm);
};
P$1.toPower = P$1.pow = function(y) {
  var e, k, pr, r2, rm, s2, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
  if (!x.d || !y.d || !x.d[0] || !y.d[0])
    return new Ctor(mathpow(+x, yn));
  x = new Ctor(x);
  if (x.eq(1))
    return x;
  pr = Ctor.precision;
  rm = Ctor.rounding;
  if (y.eq(1))
    return finalise(x, pr, rm);
  e = mathfloor(y.e / LOG_BASE);
  if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
    r2 = intPow(Ctor, x, k, pr);
    return y.s < 0 ? new Ctor(1).div(r2) : finalise(r2, pr, rm);
  }
  s2 = x.s;
  if (s2 < 0) {
    if (e < y.d.length - 1)
      return new Ctor(NaN);
    if ((y.d[e] & 1) == 0)
      s2 = 1;
    if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
      x.s = s2;
      return x;
    }
  }
  k = mathpow(+x, yn);
  e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
  if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
    return new Ctor(e > 0 ? s2 / 0 : 0);
  external = false;
  Ctor.rounding = x.s = 1;
  k = Math.min(12, (e + "").length);
  r2 = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
  if (r2.d) {
    r2 = finalise(r2, pr + 5, 1);
    if (checkRoundingDigits(r2.d, pr, rm)) {
      e = pr + 10;
      r2 = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
      if (+digitsToString(r2.d).slice(pr + 1, pr + 15) + 1 == 1e14) {
        r2 = finalise(r2, pr + 1, 0);
      }
    }
  }
  r2.s = s2;
  external = true;
  Ctor.rounding = rm;
  return finalise(r2, pr, rm);
};
P$1.toPrecision = function(sd, rm) {
  var str2, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = finalise(new Ctor(x), sd, rm);
    str2 = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
  }
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P$1.toSignificantDigits = P$1.toSD = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return finalise(new Ctor(x), sd, rm);
};
P$1.toString = function() {
  var x = this, Ctor = x.constructor, str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() && !x.isZero() ? "-" + str2 : str2;
};
P$1.truncated = P$1.trunc = function() {
  return finalise(new this.constructor(this), this.e + 1, 1);
};
P$1.valueOf = P$1.toJSON = function() {
  var x = this, Ctor = x.constructor, str2 = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
  return x.isNeg() ? "-" + str2 : str2;
};
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str2 = "", w = d[0];
  if (indexOfLastWord > 0) {
    str2 += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str2 += getZeroString(k);
      str2 += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str2 += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str2 + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r2, rd;
  for (k = d[0]; k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r2 = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 5e4 || rd == 0;
    } else {
      r2 = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1e3 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r2 = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r2 = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r2;
}
function convertBase(str2, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str2.length;
  for (; i < strL; ) {
    for (arrL = arr.length; arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str2.charAt(i++));
    for (j = 0; j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === void 0)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k; i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
var divide = function() {
  function multiplyInteger(x, k, base2) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % base2 | 0;
      carry = temp / base2 | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r2;
    if (aL != bL) {
      r2 = aL > bL ? 1 : -1;
    } else {
      for (i = r2 = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r2 = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r2;
  }
  function subtract(a, b, aL, base2) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * base2 + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, rm, dp, base2) {
    var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign6 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(
        // Return NaN if either NaN, or both Infinity or 0.
        !x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          xd && xd[0] == 0 || !yd ? sign6 * 0 : sign6 / 0
        )
      );
    }
    if (base2) {
      logBase = 1;
      e = x.e - y.e;
    } else {
      base2 = BASE;
      logBase = LOG_BASE;
      e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
    }
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign6);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); i++)
      ;
    if (yd[i] > (xd[i] || 0))
      e--;
    if (pr == null) {
      sd = pr = Ctor.precision;
      rm = Ctor.rounding;
    } else if (dp) {
      sd = pr + (x.e - y.e) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0) {
      qd.push(1);
      more = true;
    } else {
      sd = sd / logBase + 2 | 0;
      i = 0;
      if (yL == 1) {
        k = 0;
        yd = yd[0];
        sd++;
        for (; (i < xL || k) && sd--; i++) {
          t = k * base2 + (xd[i] || 0);
          qd[i] = t / yd | 0;
          k = t % yd | 0;
        }
        more = k || i < xL;
      } else {
        k = base2 / (yd[0] + 1) | 0;
        if (k > 1) {
          yd = multiplyInteger(yd, k, base2);
          xd = multiplyInteger(xd, k, base2);
          yL = yd.length;
          xL = xd.length;
        }
        xi = yL;
        rem = xd.slice(0, yL);
        remL = rem.length;
        for (; remL < yL; )
          rem[remL++] = 0;
        yz = yd.slice();
        yz.unshift(0);
        yd0 = yd[0];
        if (yd[1] >= base2 / 2)
          ++yd0;
        do {
          k = 0;
          cmp = compare(yd, rem, yL, remL);
          if (cmp < 0) {
            rem0 = rem[0];
            if (yL != remL)
              rem0 = rem0 * base2 + (rem[1] || 0);
            k = rem0 / yd0 | 0;
            if (k > 1) {
              if (k >= base2)
                k = base2 - 1;
              prod = multiplyInteger(yd, k, base2);
              prodL = prod.length;
              remL = rem.length;
              cmp = compare(prod, rem, prodL, remL);
              if (cmp == 1) {
                k--;
                subtract(prod, yL < prodL ? yz : yd, prodL, base2);
              }
            } else {
              if (k == 0)
                cmp = k = 1;
              prod = yd.slice();
            }
            prodL = prod.length;
            if (prodL < remL)
              prod.unshift(0);
            subtract(rem, prod, remL, base2);
            if (cmp == -1) {
              remL = rem.length;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 1) {
                k++;
                subtract(rem, yL < remL ? yz : yd, remL, base2);
              }
            }
            remL = rem.length;
          } else if (cmp === 0) {
            k++;
            rem = [0];
          }
          qd[i++] = k;
          if (cmp && rem[0]) {
            rem[remL++] = xd[xi] || 0;
          } else {
            rem = [xd[xi]];
            remL = 1;
          }
        } while ((xi++ < xL || rem[0] !== void 0) && sd--);
        more = rem[0] !== void 0;
      }
      if (!qd[0])
        qd.shift();
    }
    if (logBase == 1) {
      q.e = e;
      inexact = more;
    } else {
      for (i = 1, k = qd[0]; k >= 10; k /= 10)
        i++;
      q.e = i + e * logBase - 1;
      finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
    }
    return q;
  };
}();
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0]; k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (; k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1; k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== void 0 || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (; ; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1; j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length; xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str2 = digitsToString(x.d), len = str2.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str2 = str2.charAt(0) + "." + str2.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str2 = str2.charAt(0) + "." + str2.slice(1);
    }
    str2 = str2 + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str2 = "0." + getZeroString(-e - 1) + str2;
    if (sd && (k = sd - len) > 0)
      str2 += getZeroString(k);
  } else if (e >= len) {
    str2 += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str2 = str2 + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str2 = str2.slice(0, k) + "." + str2.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str2 += ".";
      str2 += getZeroString(k);
    }
  }
  return str2;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0]; w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r2 = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (; ; ) {
    if (n % 2) {
      r2 = r2.times(x);
      if (truncate(r2.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r2.d.length - 1;
      if (isTruncated && r2.d[n] === 0)
        ++r2.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r2;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, ltgt) {
  var y, x = new Ctor(args[0]), i = 0;
  for (; ++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    } else if (x[ltgt](y)) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow3, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow3 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (; ; ) {
    pow3 = finalise(pow3.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow3, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow3 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (; ; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str2) {
  var e, i, len;
  if ((e = str2.indexOf(".")) > -1)
    str2 = str2.replace(".", "");
  if ((i = str2.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str2.slice(i + 1);
    str2 = str2.substring(0, i);
  } else if (e < 0) {
    e = str2.length;
  }
  for (i = 0; str2.charCodeAt(i) === 48; i++)
    ;
  for (len = str2.length; str2.charCodeAt(len - 1) === 48; --len)
    ;
  str2 = str2.slice(i, len);
  if (str2) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str2.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str2.slice(i, i += LOG_BASE));
      str2 = str2.slice(i);
      i = LOG_BASE - str2.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str2 += "0";
    x.d.push(+str2);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str2) {
  var base2, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str2.indexOf("_") > -1) {
    str2 = str2.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str2))
      return parseDecimal(x, str2);
  } else if (str2 === "Infinity" || str2 === "NaN") {
    if (!+str2)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str2)) {
    base2 = 16;
    str2 = str2.toLowerCase();
  } else if (isBinary.test(str2)) {
    base2 = 2;
  } else if (isOctal.test(str2)) {
    base2 = 8;
  } else {
    throw Error(invalidArgument + str2);
  }
  i = str2.search(/p/i);
  if (i > 0) {
    p = +str2.slice(i + 1);
    str2 = str2.substring(2, i);
  } else {
    str2 = str2.slice(2);
  }
  i = str2.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str2 = str2.replace(".", "");
    len = str2.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base2), i, i * 2);
  }
  xd = convertBase(str2, base2, BASE);
  xe = xd.length - 1;
  for (i = xe; xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (; k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (; ; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== void 0) {
      for (j = k; t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base2, e, i, k, len, roundUp, str2, xd, y, Ctor = x.constructor, isExp = sd !== void 0;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str2 = nonFiniteToString(x);
  } else {
    str2 = finiteToString(x);
    i = str2.indexOf(".");
    if (isExp) {
      base2 = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base2 = baseOut;
    }
    if (i >= 0) {
      str2 = str2.replace(".", "");
      y = new Ctor(1);
      y.e = str2.length - i;
      y.d = convertBase(finiteToString(y), 10, base2);
      y.e = y.d.length;
    }
    xd = convertBase(str2, 10, base2);
    e = len = xd.length;
    for (; xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str2 = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base2);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base2 / 2;
      roundUp = roundUp || xd[sd + 1] !== void 0;
      roundUp = rm < 4 ? (i !== void 0 || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (; ++xd[--sd] > base2 - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length; !xd[len - 1]; --len)
        ;
      for (i = 0, str2 = ""; i < len; i++)
        str2 += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len; len % i; len++)
              str2 += "0";
            xd = convertBase(str2, base2, baseOut);
            for (len = xd.length; !xd[len - 1]; --len)
              ;
            for (i = 1, str2 = "1."; i < len; i++)
              str2 += NUMERALS.charAt(xd[i]);
          } else {
            str2 = str2.charAt(0) + "." + str2.slice(1);
          }
        }
        str2 = str2 + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (; ++e; )
          str2 = "0" + str2;
        str2 = "0." + str2;
      } else {
        if (++e > len)
          for (e -= len; e--; )
            str2 += "0";
        else if (e < len)
          str2 = str2.slice(0, e) + "." + str2.slice(e);
      }
    }
    str2 = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str2;
  }
  return x.s < 0 ? "-" + str2 : str2;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add$1(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r2, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r2 = new this(NaN);
  } else if (!y.d && !x.d) {
    r2 = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r2.s = y.s;
  } else if (!x.d || y.isZero()) {
    r2 = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r2.s = y.s;
  } else if (!y.d || x.isZero()) {
    r2 = getPi(this, wpr, 1).times(0.5);
    r2.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r2 = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r2 = y.s < 0 ? r2.minus(x) : r2.plus(x);
  } else {
    r2 = this.atan(divide(y, x, wpr, 1));
  }
  return r2;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v2, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0; i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v2 = obj[p]) !== void 0) {
      if (mathfloor(v2) === v2 && v2 >= ps[i + 1] && v2 <= ps[i + 2])
        this[p] = v2;
      else
        throw Error(invalidArgument + p + ": " + v2);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v2 = obj[p]) !== void 0) {
    if (v2 === true || v2 === false || v2 === 0 || v2 === 1) {
      if (v2) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v2);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v2) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v2);
    x.constructor = Decimal2;
    if (isDecimalInstance(v2)) {
      x.s = v2.s;
      if (external) {
        if (!v2.d || v2.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v2.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v2.e;
          x.d = v2.d.slice();
        }
      } else {
        x.e = v2.e;
        x.d = v2.d ? v2.d.slice() : v2.d;
      }
      return;
    }
    t = typeof v2;
    if (t === "number") {
      if (v2 === 0) {
        x.s = 1 / v2 < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v2 < 0) {
        v2 = -v2;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v2 === ~~v2 && v2 < 1e7) {
        for (e = 0, i2 = v2; i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v2];
          }
        } else {
          x.e = e;
          x.d = [v2];
        }
        return;
      } else if (v2 * 0 !== 0) {
        if (!v2)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v2.toString());
    } else if (t !== "string") {
      throw Error(invalidArgument + v2);
    }
    if ((i2 = v2.charCodeAt(0)) === 45) {
      v2 = v2.slice(1);
      x.s = -1;
    } else {
      if (i2 === 43)
        v2 = v2.slice(1);
      x.s = 1;
    }
    return isDecimal.test(v2) ? parseDecimal(x, v2) : parseOther(x, v2);
  }
  Decimal2.prototype = P$1;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add$1;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod$1;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign$1;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === void 0)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0; i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0; i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, "lt");
}
function min() {
  return maxOrMin(this, arguments, "gt");
}
function mod$1(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r2 = new this(1), rd = [];
  if (sd === void 0)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (; i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (; i < k; ) {
      n = d[i];
      if (n >= 429e7) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (; i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 214e7) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (; rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (; rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0]; n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r2.e = e;
  r2.d = rd;
  return r2;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign$1(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (; x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
P$1[Symbol.for("nodejs.util.inspect.custom")] = P$1.toString;
P$1[Symbol.toStringTag] = "Decimal";
var Decimal = P$1.constructor = clone(DEFAULTS);
LN10 = new Decimal(LN10);
PI = new Decimal(PI);
class ManifestBuilder {
  constructor() {
    __publicField(this, "instructions", []);
    __publicField(this, "blobs", []);
    __publicField(this, "idAllocator", new IdAllocator());
  }
  takeAllFromWorktop(resourceAddress, callback) {
    const instruction = {
      kind: "TakeAllFromWorktop",
      resourceAddress
    };
    this.instructions.push(instruction);
    const builderId = this.idAllocator.bucket();
    return callback(this, builderId);
  }
  takeFromWorktop(resourceAddress, amount, callback) {
    const instruction = {
      kind: "TakeFromWorktop",
      resourceAddress,
      amount
    };
    this.instructions.push(instruction);
    const builderId = this.idAllocator.bucket();
    return callback(this, builderId);
  }
  takeNonFungiblesFromWorktop(resourceAddress, ids, callback) {
    const instruction = {
      kind: "TakeNonFungiblesFromWorktop",
      resourceAddress,
      ids
    };
    this.instructions.push(instruction);
    const builderId = this.idAllocator.bucket();
    return callback(this, builderId);
  }
  returnToWorktop(bucketId) {
    const instruction = {
      kind: "ReturnToWorktop",
      bucketId
    };
    this.instructions.push(instruction);
    return this;
  }
  assertWorktopContainsAny(resourceAddress) {
    const instruction = {
      kind: "AssertWorktopContainsAny",
      resourceAddress
    };
    this.instructions.push(instruction);
    return this;
  }
  assertWorktopContains(resourceAddress, amount) {
    const instruction = {
      kind: "AssertWorktopContains",
      resourceAddress,
      amount
    };
    this.instructions.push(instruction);
    return this;
  }
  assertWorktopContainsNonFungibles(resourceAddress, ids) {
    const instruction = {
      kind: "AssertWorktopContainsNonFungibles",
      resourceAddress,
      ids
    };
    this.instructions.push(instruction);
    return this;
  }
  popFromAuthZone(callback) {
    const instruction = {
      kind: "PopFromAuthZone"
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  pushToAuthZone(proofId) {
    const instruction = {
      kind: "PushToAuthZone",
      proofId
    };
    this.instructions.push(instruction);
    return this;
  }
  dropAuthZoneProofs() {
    const instruction = {
      kind: "DropAuthZoneProofs"
    };
    this.instructions.push(instruction);
    return this;
  }
  createProofFromAuthZoneOfAmount(resourceAddress, amount, callback) {
    const instruction = {
      kind: "CreateProofFromAuthZoneOfAmount",
      resourceAddress,
      amount
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  createProofFromAuthZoneOfNonFungibles(resourceAddress, ids, callback) {
    const instruction = {
      kind: "CreateProofFromAuthZoneOfNonFungibles",
      resourceAddress,
      ids
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  createProofFromAuthZoneOfAll(resourceAddress, callback) {
    const instruction = {
      kind: "CreateProofFromAuthZoneOfAll",
      resourceAddress
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  dropAuthZoneSignatureProofs() {
    const instruction = {
      kind: "DropAuthZoneSignatureProofs"
    };
    this.instructions.push(instruction);
    return this;
  }
  createProofFromBucketOfAmount(bucketId, amount, callback) {
    const instruction = {
      kind: "CreateProofFromBucketOfAmount",
      bucketId,
      amount
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  createProofFromBucketOfNonFungibles(bucketId, ids, callback) {
    const instruction = {
      kind: "CreateProofFromBucketOfNonFungibles",
      bucketId,
      ids
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  createProofFromBucketOfAll(bucketId, callback) {
    const instruction = {
      kind: "CreateProofFromBucketOfAll",
      bucketId
    };
    this.instructions.push(instruction);
    const proofId = this.idAllocator.proof();
    return callback(this, proofId);
  }
  burnResource(bucketId) {
    const instruction = {
      kind: "BurnResource",
      bucketId
    };
    this.instructions.push(instruction);
    return this;
  }
  cloneProof(proofId, callback) {
    const instruction = {
      kind: "CloneProof",
      proofId
    };
    this.instructions.push(instruction);
    const newProofId = this.idAllocator.proof();
    return callback(this, newProofId);
  }
  dropProof(proofId) {
    const instruction = {
      kind: "DropProof",
      proofId
    };
    this.instructions.push(instruction);
    return this;
  }
  callFunction(packageAddress, blueprintName, functionName, args) {
    const instruction = {
      kind: "CallFunction",
      packageAddress: resolveManifestAddress$1(packageAddress),
      blueprintName,
      functionName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  callMethod(address2, methodName, args) {
    const instruction = {
      kind: "CallMethod",
      address: resolveManifestAddress$1(address2),
      methodName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  callRoyaltyMethod(address2, methodName, args) {
    const instruction = {
      kind: "CallRoyaltyMethod",
      address: resolveManifestAddress$1(address2),
      methodName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  callMetadataMethod(address2, methodName, args) {
    const instruction = {
      kind: "CallMetadataMethod",
      address: resolveManifestAddress$1(address2),
      methodName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  callRoleAssignmentMethod(address2, methodName, args) {
    const instruction = {
      kind: "CallRoleAssignmentMethod",
      address: resolveManifestAddress$1(address2),
      methodName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  callDirectVaultMethod(address2, methodName, args) {
    const instruction = {
      kind: "CallDirectVaultMethod",
      address: address2,
      methodName,
      args: { kind: ValueKind.Tuple, fields: args }
    };
    this.instructions.push(instruction);
    return this;
  }
  dropAllProofs() {
    const instruction = {
      kind: "DropAllProofs"
    };
    this.instructions.push(instruction);
    return this;
  }
  allocateGlobalAddress(packageAddress, blueprintName) {
    const instruction = {
      kind: "AllocateGlobalAddress",
      packageAddress,
      blueprintName
    };
    this.instructions.push(instruction);
    return this;
  }
  build() {
    return {
      instructions: {
        kind: "Parsed",
        value: this.instructions
      },
      blobs: this.blobs
    };
  }
}
class IdAllocator {
  constructor() {
    __publicField(this, "nextBucketId", 0);
    __publicField(this, "nextProofId", 0);
    __publicField(this, "nextAddressReservation", 0);
    __publicField(this, "nextNamedAddress", 0);
  }
  bucket() {
    return this.nextBucketId++;
  }
  proof() {
    return this.nextProofId++;
  }
  addressReservation() {
    return this.nextAddressReservation++;
  }
  namedAddress() {
    return this.nextNamedAddress++;
  }
}
const bool$1 = (value) => {
  return {
    kind: ValueKind.Bool,
    value
  };
};
const i8 = (value) => {
  return {
    kind: ValueKind.I8,
    value: resolveNumber(value)
  };
};
const i16 = (value) => {
  return {
    kind: ValueKind.I16,
    value: resolveNumber(value)
  };
};
const i32 = (value) => {
  return {
    kind: ValueKind.I32,
    value: resolveNumber(value)
  };
};
const i64 = (value) => {
  return {
    kind: ValueKind.I64,
    value: resolveBigInt(value)
  };
};
const i128 = (value) => {
  return {
    kind: ValueKind.I128,
    value: resolveBigInt(value)
  };
};
const u8 = (value) => {
  return {
    kind: ValueKind.U8,
    value: resolveNumber(value)
  };
};
const u16 = (value) => {
  return {
    kind: ValueKind.U16,
    value: resolveNumber(value)
  };
};
const u32 = (value) => {
  return {
    kind: ValueKind.U32,
    value: resolveNumber(value)
  };
};
const u64$1 = (value) => {
  return {
    kind: ValueKind.U64,
    value: resolveBigInt(value)
  };
};
const u128 = (value) => {
  return {
    kind: ValueKind.U128,
    value: resolveBigInt(value)
  };
};
const str$1 = (value) => {
  return {
    kind: ValueKind.String,
    value
  };
};
const enumeration = (discriminator, ...fields) => {
  return {
    kind: ValueKind.Enum,
    discriminator,
    fields
  };
};
const array = (elementKind, ...elements) => {
  return {
    kind: ValueKind.Array,
    elementValueKind: elementKind,
    elements
  };
};
const tuple = (...fields) => {
  return {
    kind: ValueKind.Tuple,
    fields
  };
};
const map = (keyKind, valueKind, ...entries) => {
  return {
    kind: ValueKind.Map,
    keyValueKind: keyKind,
    valueValueKind: valueKind,
    entries: entries.map(([key2, value]) => {
      return { key: key2, value };
    })
  };
};
const address = (value) => {
  switch (typeof value) {
    case "string":
      return {
        kind: ValueKind.Address,
        value: {
          kind: "Static",
          value
        }
      };
    case "number":
      return {
        kind: ValueKind.Address,
        value: {
          kind: "Named",
          value
        }
      };
    default:
      throw new Error();
  }
};
const bucket = (value) => {
  return {
    kind: ValueKind.Bucket,
    value
  };
};
const proof = (value) => {
  return {
    kind: ValueKind.Proof,
    value
  };
};
const expression = (value) => {
  return {
    kind: ValueKind.Expression,
    value: Expression[value]
  };
};
const decimal = (value) => {
  return {
    kind: ValueKind.Decimal,
    value: resolveDecimal$1(value)
  };
};
const preciseDecimal = (value) => {
  return {
    kind: ValueKind.PreciseDecimal,
    value: resolveDecimal$1(value)
  };
};
const blob = (value) => {
  return {
    kind: ValueKind.Blob,
    value: resolveBytes$1(value)
  };
};
const nonFungibleLocalId = (value) => {
  return {
    kind: ValueKind.NonFungibleLocalId,
    value
  };
};
const addressReservation = (value) => {
  return {
    kind: ValueKind.AddressReservation,
    value
  };
};
const resolveBigInt = (value) => {
  switch (typeof value) {
    case "string":
      return BigInt(value);
    case "number":
      return BigInt(value);
    case "bigint":
      return value;
    default:
      throw new Error();
  }
};
const resolveDecimal$1 = (value) => {
  switch (typeof value) {
    case "string":
      return new Decimal(value);
    case "number":
      return new Decimal(value);
    case "bigint":
      return new Decimal(Convert.BigInt.toString(value));
    case "object":
      return value;
    default:
      throw new Error();
  }
};
const resolveNumber = (value) => {
  switch (typeof value) {
    case "string":
      return Number(value);
    case "number":
      return value;
    default:
      throw new Error();
  }
};
const resolveManifestAddress$1 = (value) => {
  switch (typeof value) {
    case "string":
      return {
        kind: "Static",
        value
      };
    case "number":
      return {
        kind: "Named",
        value
      };
    default:
      throw new Error();
  }
};
var SerializableEntityType = /* @__PURE__ */ ((SerializableEntityType2) => {
  SerializableEntityType2["GlobalPackage"] = "GlobalPackage";
  SerializableEntityType2["GlobalConsensusManager"] = "GlobalConsensusManager";
  SerializableEntityType2["GlobalValidator"] = "GlobalValidator";
  SerializableEntityType2["GlobalTransactionTracker"] = "GlobalTransactionTracker";
  SerializableEntityType2["GlobalGenericComponent"] = "GlobalGenericComponent";
  SerializableEntityType2["GlobalAccount"] = "GlobalAccount";
  SerializableEntityType2["GlobalIdentity"] = "GlobalIdentity";
  SerializableEntityType2["GlobalAccessController"] = "GlobalAccessController";
  SerializableEntityType2["GlobalOneResourcePool"] = "GlobalOneResourcePool";
  SerializableEntityType2["GlobalTwoResourcePool"] = "GlobalTwoResourcePool";
  SerializableEntityType2["GlobalMultiResourcePool"] = "GlobalMultiResourcePool";
  SerializableEntityType2["GlobalVirtualSecp256k1Account"] = "GlobalVirtualSecp256k1Account";
  SerializableEntityType2["GlobalVirtualSecp256k1Identity"] = "GlobalVirtualSecp256k1Identity";
  SerializableEntityType2["GlobalVirtualEd25519Account"] = "GlobalVirtualEd25519Account";
  SerializableEntityType2["GlobalVirtualEd25519Identity"] = "GlobalVirtualEd25519Identity";
  SerializableEntityType2["GlobalFungibleResourceManager"] = "GlobalFungibleResourceManager";
  SerializableEntityType2["InternalFungibleVault"] = "InternalFungibleVault";
  SerializableEntityType2["GlobalNonFungibleResourceManager"] = "GlobalNonFungibleResourceManager";
  SerializableEntityType2["InternalNonFungibleVault"] = "InternalNonFungibleVault";
  SerializableEntityType2["InternalGenericComponent"] = "InternalGenericComponent";
  SerializableEntityType2["InternalKeyValueStore"] = "InternalKeyValueStore";
  return SerializableEntityType2;
})(SerializableEntityType || {});
var SerializableOlympiaNetwork = /* @__PURE__ */ ((SerializableOlympiaNetwork2) => {
  SerializableOlympiaNetwork2["Mainnet"] = "Mainnet";
  SerializableOlympiaNetwork2["Stokenet"] = "Stokenet";
  SerializableOlympiaNetwork2["Releasenet"] = "Releasenet";
  SerializableOlympiaNetwork2["RCNet"] = "RCNet";
  SerializableOlympiaNetwork2["Milestonenet"] = "Milestonenet";
  SerializableOlympiaNetwork2["Devopsnet"] = "Devopsnet";
  SerializableOlympiaNetwork2["Sandpitnet"] = "Sandpitnet";
  SerializableOlympiaNetwork2["Localnet"] = "Localnet";
  return SerializableOlympiaNetwork2;
})(SerializableOlympiaNetwork || {});
var SerializableDefaultDepositRule = /* @__PURE__ */ ((SerializableDefaultDepositRule2) => {
  SerializableDefaultDepositRule2["Accept"] = "Accept";
  SerializableDefaultDepositRule2["Reject"] = "Reject";
  SerializableDefaultDepositRule2["AllowExisting"] = "AllowExisting";
  return SerializableDefaultDepositRule2;
})(SerializableDefaultDepositRule || {});
var SerializableInstructionsKind = /* @__PURE__ */ ((SerializableInstructionsKind2) => {
  SerializableInstructionsKind2["String"] = "String";
  SerializableInstructionsKind2["Parsed"] = "Parsed";
  return SerializableInstructionsKind2;
})(SerializableInstructionsKind || {});
var SerializableSerializationMode = /* @__PURE__ */ ((SerializableSerializationMode2) => {
  SerializableSerializationMode2["Programmatic"] = "Programmatic";
  SerializableSerializationMode2["Model"] = "Model";
  SerializableSerializationMode2["Natural"] = "Natural";
  return SerializableSerializationMode2;
})(SerializableSerializationMode || {});
var SerializableResourcePreference = /* @__PURE__ */ ((SerializableResourcePreference2) => {
  SerializableResourcePreference2["Allowed"] = "Allowed";
  SerializableResourcePreference2["Disallowed"] = "Disallowed";
  return SerializableResourcePreference2;
})(SerializableResourcePreference || {});
var SerializableExpression = /* @__PURE__ */ ((SerializableExpression2) => {
  SerializableExpression2["EntireWorktop"] = "EntireWorktop";
  SerializableExpression2["EntireAuthZone"] = "EntireAuthZone";
  return SerializableExpression2;
})(SerializableExpression || {});
var SerializableManifestValueKind = /* @__PURE__ */ ((SerializableManifestValueKind2) => {
  SerializableManifestValueKind2["Bool"] = "Bool";
  SerializableManifestValueKind2["I8"] = "I8";
  SerializableManifestValueKind2["I16"] = "I16";
  SerializableManifestValueKind2["I32"] = "I32";
  SerializableManifestValueKind2["I64"] = "I64";
  SerializableManifestValueKind2["I128"] = "I128";
  SerializableManifestValueKind2["U8"] = "U8";
  SerializableManifestValueKind2["U16"] = "U16";
  SerializableManifestValueKind2["U32"] = "U32";
  SerializableManifestValueKind2["U64"] = "U64";
  SerializableManifestValueKind2["U128"] = "U128";
  SerializableManifestValueKind2["String"] = "String";
  SerializableManifestValueKind2["Enum"] = "Enum";
  SerializableManifestValueKind2["Array"] = "Array";
  SerializableManifestValueKind2["Tuple"] = "Tuple";
  SerializableManifestValueKind2["Map"] = "Map";
  SerializableManifestValueKind2["Address"] = "Address";
  SerializableManifestValueKind2["Bucket"] = "Bucket";
  SerializableManifestValueKind2["Proof"] = "Proof";
  SerializableManifestValueKind2["Expression"] = "Expression";
  SerializableManifestValueKind2["Blob"] = "Blob";
  SerializableManifestValueKind2["Decimal"] = "Decimal";
  SerializableManifestValueKind2["PreciseDecimal"] = "PreciseDecimal";
  SerializableManifestValueKind2["NonFungibleLocalId"] = "NonFungibleLocalId";
  SerializableManifestValueKind2["AddressReservation"] = "AddressReservation";
  return SerializableManifestValueKind2;
})(SerializableManifestValueKind || {});
const _GeneratedConverter = class {
};
let GeneratedConverter = _GeneratedConverter;
__publicField(GeneratedConverter, "PublicKey", class {
  static toGenerated(value) {
    return {
      kind: value.curve,
      value: Convert.Uint8Array.toHexString(value.publicKey)
    };
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Secp256k1":
        return new PublicKey.Secp256k1(
          Convert.HexString.toUint8Array(value.value)
        );
      case "Ed25519":
        return new PublicKey.Ed25519(
          Convert.HexString.toUint8Array(value.value)
        );
    }
  }
});
__publicField(GeneratedConverter, "Signature", class {
  static toGenerated(value) {
    return {
      kind: value.curve,
      value: Convert.Uint8Array.toHexString(value.signature)
    };
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Secp256k1":
        return new Signature.Secp256k1(
          Convert.HexString.toUint8Array(value.value)
        );
      case "Ed25519":
        return new Signature.Ed25519(
          Convert.HexString.toUint8Array(value.value)
        );
    }
  }
});
__publicField(GeneratedConverter, "SignatureWithPublicKey", class {
  static toGenerated(value) {
    switch (value.curve) {
      case "Ed25519":
        return {
          kind: "Ed25519",
          value: {
            public_key: Convert.Uint8Array.toHexString(value.publicKey),
            signature: Convert.Uint8Array.toHexString(value.signature)
          }
        };
      case "Secp256k1":
        return {
          kind: "Secp256k1",
          value: {
            signature: Convert.Uint8Array.toHexString(value.signature)
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Secp256k1":
        return new SignatureWithPublicKey.Secp256k1(
          Convert.HexString.toUint8Array(value.value.signature)
        );
      case "Ed25519":
        return new SignatureWithPublicKey.Ed25519(
          Convert.HexString.toUint8Array(value.value.signature),
          Convert.HexString.toUint8Array(value.value.public_key)
        );
    }
  }
});
__publicField(GeneratedConverter, "OlympiaNetwork", class {
  static toGenerated(value) {
    return SerializableOlympiaNetwork[OlympiaNetwork[value]];
  }
  static fromGenerated(value) {
    return OlympiaNetwork[SerializableOlympiaNetwork[value]];
  }
});
__publicField(GeneratedConverter, "SerializationMode", class {
  static toGenerated(value) {
    return SerializableSerializationMode[SerializationMode[value]];
  }
  static fromGenerated(value) {
    return SerializationMode[SerializableSerializationMode[value]];
  }
});
__publicField(GeneratedConverter, "ManifestSborStringRepresentation", class {
  static toGenerated(value) {
    switch (value) {
      case ManifestSborStringRepresentation.ManifestString:
        return {
          kind: "ManifestString"
        };
      case ManifestSborStringRepresentation.ProgrammaticJson:
        return {
          kind: "Json",
          value: SerializableSerializationMode.Programmatic
        };
      case ManifestSborStringRepresentation.NaturalJson:
        return {
          kind: "Json",
          value: SerializableSerializationMode.Natural
        };
      case ManifestSborStringRepresentation.ModelJson:
        return {
          kind: "Json",
          value: SerializableSerializationMode.Model
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "ManifestString":
        return ManifestSborStringRepresentation.ManifestString;
      case "Json":
        switch (value.value) {
          case SerializableSerializationMode.Programmatic:
            return ManifestSborStringRepresentation.ProgrammaticJson;
          case SerializableSerializationMode.Natural:
            return ManifestSborStringRepresentation.NaturalJson;
          case SerializableSerializationMode.Model:
            return ManifestSborStringRepresentation.ModelJson;
        }
    }
  }
});
__publicField(GeneratedConverter, "ManifestValueKind", class {
  static toGenerated(value) {
    return SerializableManifestValueKind[ValueKind[value]];
  }
  static fromGenerated(value) {
    return ValueKind[SerializableManifestValueKind[value]];
  }
});
__publicField(GeneratedConverter, "Expression", class {
  static toGenerated(value) {
    return SerializableExpression[Expression[value]];
  }
  static fromGenerated(value) {
    return Expression[SerializableExpression[value]];
  }
});
__publicField(GeneratedConverter, "ManifestAddress", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Named":
        return {
          kind: value.kind,
          value: Convert.Number.toString(value.value)
        };
      case "Static":
        return {
          kind: value.kind,
          value: value.value
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Named":
        return {
          kind: value.kind,
          value: Convert.String.toNumber(value.value)
        };
      case "Static":
        return {
          kind: value.kind,
          value: value.value
        };
    }
  }
});
__publicField(GeneratedConverter, "ManifestValue", class {
  static toGenerated(value) {
    switch (value.kind) {
      case ValueKind.Bool:
        return {
          kind: value.kind,
          value: {
            value: value.value
          }
        };
      case ValueKind.I8:
      case ValueKind.I16:
      case ValueKind.I32:
      case ValueKind.U8:
      case ValueKind.U16:
      case ValueKind.U32:
      case ValueKind.Bucket:
      case ValueKind.Proof:
      case ValueKind.AddressReservation:
        return {
          kind: ValueKind[value.kind],
          value: {
            value: Convert.Number.toString(value.value)
          }
        };
      case ValueKind.I64:
      case ValueKind.I128:
      case ValueKind.U64:
      case ValueKind.U128:
        return {
          kind: ValueKind[value.kind],
          value: {
            value: Convert.BigInt.toString(value.value)
          }
        };
      case ValueKind.Blob:
        return {
          kind: ValueKind[value.kind],
          value: {
            value: Convert.Uint8Array.toHexString(value.value)
          }
        };
      case ValueKind.String:
      case ValueKind.NonFungibleLocalId:
        return {
          kind: ValueKind[value.kind],
          value: {
            value: value.value
          }
        };
      case ValueKind.Decimal:
      case ValueKind.PreciseDecimal:
        return {
          kind: ValueKind[value.kind],
          value: {
            value: Convert.Decimal.toString(value.value)
          }
        };
      case ValueKind.Enum:
        return {
          kind: value.kind,
          value: {
            discriminator: Convert.Number.toString(value.discriminator),
            fields: value.fields.map(
              _GeneratedConverter.ManifestValue.toGenerated
            )
          }
        };
      case ValueKind.Array:
        return {
          kind: value.kind,
          value: {
            element_value_kind: SerializableManifestValueKind[value.elementValueKind],
            elements: value.elements.map(
              _GeneratedConverter.ManifestValue.toGenerated
            )
          }
        };
      case ValueKind.Tuple:
        return {
          kind: value.kind,
          value: {
            fields: value.fields.map(
              _GeneratedConverter.ManifestValue.toGenerated
            )
          }
        };
      case ValueKind.Map:
        return {
          kind: value.kind,
          value: {
            key_value_kind: SerializableManifestValueKind[value.keyValueKind],
            value_value_kind: SerializableManifestValueKind[value.valueValueKind],
            entries: value.entries.map((mapEntry) => {
              return {
                key: _GeneratedConverter.ManifestValue.toGenerated(
                  mapEntry.key
                ),
                value: _GeneratedConverter.ManifestValue.toGenerated(
                  mapEntry.value
                )
              };
            })
          }
        };
      case ValueKind.Address:
        return {
          kind: value.kind,
          value: {
            value: _GeneratedConverter.ManifestAddress.toGenerated(
              value.value
            )
          }
        };
      case ValueKind.Expression:
        return {
          kind: value.kind,
          value: {
            value: _GeneratedConverter.Expression.toGenerated(value.value)
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Bool":
        return {
          kind: ValueKind.Bool,
          value: value.value.value
        };
      case "I8":
      case "I16":
      case "I32":
      case "U8":
      case "U16":
      case "U32":
      case "Bucket":
      case "Proof":
      case "AddressReservation":
        return {
          kind: ValueKind[value.kind],
          value: Convert.String.toNumber(value.value.value)
        };
      case "I64":
      case "I128":
      case "U64":
      case "U128":
        return {
          kind: ValueKind[value.kind],
          value: Convert.String.toBigInt(value.value.value)
        };
      case "Blob":
        return {
          kind: ValueKind[value.kind],
          value: Convert.HexString.toUint8Array(value.value.value)
        };
      case "String":
      case "NonFungibleLocalId":
        return {
          kind: ValueKind[value.kind],
          value: value.value.value
        };
      case "Decimal":
      case "PreciseDecimal":
        return {
          kind: ValueKind[value.kind],
          value: Convert.String.toDecimal(value.value.value)
        };
      case "Enum":
        return {
          kind: ValueKind.Enum,
          discriminator: Convert.String.toNumber(value.value.discriminator),
          fields: value.value.fields.map(
            _GeneratedConverter.ManifestValue.fromGenerated
          )
        };
      case "Array":
        return {
          kind: ValueKind.Array,
          elementValueKind: ValueKind[value.value.element_value_kind],
          elements: value.value.elements.map(
            _GeneratedConverter.ManifestValue.fromGenerated
          )
        };
      case "Tuple":
        return {
          kind: ValueKind.Tuple,
          fields: value.value.fields.map(
            _GeneratedConverter.ManifestValue.fromGenerated
          )
        };
      case "Map":
        return {
          kind: ValueKind.Map,
          keyValueKind: ValueKind[value.value.key_value_kind],
          valueValueKind: ValueKind[value.value.value_value_kind],
          entries: value.value.entries.map((entry) => {
            return {
              key: _GeneratedConverter.ManifestValue.fromGenerated(entry.key),
              value: _GeneratedConverter.ManifestValue.fromGenerated(
                entry.value
              )
            };
          })
        };
      case "Address":
        return {
          kind: ValueKind.Address,
          value: _GeneratedConverter.ManifestAddress.fromGenerated(
            value.value.value
          )
        };
      case "Expression":
        return {
          kind: ValueKind.Expression,
          value: _GeneratedConverter.Expression.fromGenerated(
            value.value.value
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "Instruction", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "TakeAllFromWorktop":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress
          }
        };
      case "TakeFromWorktop":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: Convert.Decimal.toString(value.amount)
          }
        };
      case "TakeNonFungiblesFromWorktop":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            ids: value.ids
          }
        };
      case "ReturnToWorktop":
        return {
          kind: value.kind,
          value: {
            bucket_id: Convert.Number.toString(value.bucketId)
          }
        };
      case "AssertWorktopContainsAny":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress
          }
        };
      case "AssertWorktopContains":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: Convert.Decimal.toString(value.amount)
          }
        };
      case "AssertWorktopContainsNonFungibles":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            ids: value.ids
          }
        };
      case "PopFromAuthZone":
        return {
          kind: value.kind
        };
      case "PushToAuthZone":
        return {
          kind: value.kind,
          value: {
            proof_id: Convert.Number.toString(value.proofId)
          }
        };
      case "DropNamedProofs":
      case "DropAuthZoneProofs":
      case "DropAuthZoneRegularProofs":
      case "DropAuthZoneSignatureProofs":
        return {
          kind: value.kind
        };
      case "CreateProofFromAuthZoneOfAmount":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: Convert.Decimal.toString(value.amount)
          }
        };
      case "CreateProofFromAuthZoneOfNonFungibles":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            ids: value.ids
          }
        };
      case "CreateProofFromAuthZoneOfAll":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress
          }
        };
      case "CreateProofFromBucketOfAmount":
        return {
          kind: value.kind,
          value: {
            bucket_id: Convert.Number.toString(value.bucketId),
            amount: Convert.Decimal.toString(value.amount)
          }
        };
      case "CreateProofFromBucketOfNonFungibles":
        return {
          kind: value.kind,
          value: {
            bucket_id: Convert.Number.toString(value.bucketId),
            ids: value.ids
          }
        };
      case "CreateProofFromBucketOfAll":
        return {
          kind: value.kind,
          value: {
            bucket_id: Convert.Number.toString(value.bucketId)
          }
        };
      case "BurnResource":
        return {
          kind: value.kind,
          value: {
            bucket_id: Convert.Number.toString(value.bucketId)
          }
        };
      case "CloneProof":
        return {
          kind: value.kind,
          value: {
            proof_id: Convert.Number.toString(value.proofId)
          }
        };
      case "DropProof":
        return {
          kind: value.kind,
          value: {
            proof_id: Convert.Number.toString(value.proofId)
          }
        };
      case "CallFunction":
        return {
          kind: value.kind,
          value: {
            package_address: _GeneratedConverter.ManifestAddress.toGenerated(
              value.packageAddress
            ),
            blueprint_name: value.blueprintName,
            function_name: value.functionName,
            args: _GeneratedConverter.ManifestValue.toGenerated(value.args)
          }
        };
      case "CallMethod":
      case "CallRoyaltyMethod":
      case "CallMetadataMethod":
      case "CallRoleAssignmentMethod":
        return {
          kind: value.kind,
          value: {
            address: _GeneratedConverter.ManifestAddress.toGenerated(
              value.address
            ),
            method_name: value.methodName,
            args: _GeneratedConverter.ManifestValue.toGenerated(value.args)
          }
        };
      case "CallDirectVaultMethod":
        return {
          kind: value.kind,
          value: {
            address: value.address,
            method_name: value.methodName,
            args: _GeneratedConverter.ManifestValue.toGenerated(value.args)
          }
        };
      case "DropAllProofs":
        return {
          kind: value.kind
        };
      case "AllocateGlobalAddress":
        return {
          kind: value.kind,
          value: {
            package_address: value.packageAddress,
            blueprint_name: value.blueprintName
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "TakeAllFromWorktop":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address
        };
      case "TakeFromWorktop":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: Convert.String.toDecimal(value.value.amount)
        };
      case "TakeNonFungiblesFromWorktop":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          ids: value.value.ids
        };
      case "ReturnToWorktop":
        return {
          kind: value.kind,
          bucketId: Convert.String.toNumber(value.value.bucket_id)
        };
      case "AssertWorktopContainsAny":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address
        };
      case "AssertWorktopContains":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: Convert.String.toDecimal(value.value.amount)
        };
      case "AssertWorktopContainsNonFungibles":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          ids: value.value.ids
        };
      case "PopFromAuthZone":
        return {
          kind: value.kind
        };
      case "PushToAuthZone":
        return {
          kind: value.kind,
          proofId: Convert.String.toNumber(value.value.proof_id)
        };
      case "DropNamedProofs":
      case "DropAuthZoneProofs":
      case "DropAuthZoneRegularProofs":
      case "DropAuthZoneSignatureProofs":
        return {
          kind: value.kind
        };
      case "CreateProofFromAuthZoneOfAmount":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: Convert.String.toDecimal(value.value.amount)
        };
      case "CreateProofFromAuthZoneOfNonFungibles":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          ids: value.value.ids
        };
      case "CreateProofFromAuthZoneOfAll":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address
        };
      case "CreateProofFromBucketOfAmount":
        return {
          kind: value.kind,
          bucketId: Convert.String.toNumber(value.value.bucket_id),
          amount: Convert.String.toDecimal(value.value.amount)
        };
      case "CreateProofFromBucketOfNonFungibles":
        return {
          kind: value.kind,
          bucketId: Convert.String.toNumber(value.value.bucket_id),
          ids: value.value.ids
        };
      case "CreateProofFromBucketOfAll":
        return {
          kind: value.kind,
          bucketId: Convert.String.toNumber(value.value.bucket_id)
        };
      case "BurnResource":
        return {
          kind: value.kind,
          bucketId: Convert.String.toNumber(value.value.bucket_id)
        };
      case "CloneProof":
        return {
          kind: value.kind,
          proofId: Convert.String.toNumber(value.value.proof_id)
        };
      case "DropProof":
        return {
          kind: value.kind,
          proofId: Convert.String.toNumber(value.value.proof_id)
        };
      case "CallFunction":
        return {
          kind: value.kind,
          packageAddress: _GeneratedConverter.ManifestAddress.fromGenerated(
            value.value.package_address
          ),
          blueprintName: value.value.blueprint_name,
          functionName: value.value.function_name,
          args: _GeneratedConverter.ManifestValue.fromGenerated(
            value.value.args
          )
        };
      case "CallMethod":
      case "CallRoyaltyMethod":
      case "CallMetadataMethod":
      case "CallRoleAssignmentMethod":
        return {
          kind: value.kind,
          address: _GeneratedConverter.ManifestAddress.fromGenerated(
            value.value.address
          ),
          methodName: value.value.method_name,
          args: _GeneratedConverter.ManifestValue.fromGenerated(
            value.value.args
          )
        };
      case "CallDirectVaultMethod":
        return {
          kind: value.kind,
          address: value.value.address,
          methodName: value.value.method_name,
          args: _GeneratedConverter.ManifestValue.fromGenerated(
            value.value.args
          )
        };
      case "DropAllProofs":
        return {
          kind: value.kind
        };
      case "AllocateGlobalAddress":
        return {
          kind: value.kind,
          packageAddress: value.value.package_address,
          blueprintName: value.value.blueprint_name
        };
    }
  }
});
__publicField(GeneratedConverter, "Instructions", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "String":
        return value;
      case "Parsed":
        return {
          kind: "Parsed",
          value: value.value.map(_GeneratedConverter.Instruction.toGenerated)
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "String":
        return value;
      case "Parsed":
        return {
          kind: "Parsed",
          value: value.value.map(
            _GeneratedConverter.Instruction.fromGenerated
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "TransactionManifest", class {
  static toGenerated(value) {
    return {
      instructions: _GeneratedConverter.Instructions.toGenerated(
        value.instructions
      ),
      blobs: value.blobs.map(Convert.Uint8Array.toHexString)
    };
  }
  static fromGenerated(value) {
    return {
      instructions: _GeneratedConverter.Instructions.fromGenerated(
        value.instructions
      ),
      blobs: value.blobs.map(Convert.HexString.toUint8Array)
    };
  }
});
__publicField(GeneratedConverter, "TransactionHeader", class {
  static toGenerated(value) {
    return {
      network_id: Convert.Number.toString(value.networkId),
      start_epoch_inclusive: Convert.Number.toString(
        value.startEpochInclusive
      ),
      end_epoch_exclusive: Convert.Number.toString(value.endEpochExclusive),
      nonce: Convert.Number.toString(value.nonce),
      notary_is_signatory: value.notaryIsSignatory,
      notary_public_key: _GeneratedConverter.PublicKey.toGenerated(
        value.notaryPublicKey
      ),
      tip_percentage: Convert.Number.toString(value.tipPercentage)
    };
  }
  static fromGenerated(value) {
    return {
      networkId: Convert.String.toNumber(value.network_id),
      startEpochInclusive: Convert.String.toNumber(
        value.start_epoch_inclusive
      ),
      endEpochExclusive: Convert.String.toNumber(value.end_epoch_exclusive),
      nonce: Convert.String.toNumber(value.nonce),
      notaryPublicKey: _GeneratedConverter.PublicKey.fromGenerated(
        value.notary_public_key
      ),
      notaryIsSignatory: value.notary_is_signatory,
      tipPercentage: Convert.String.toNumber(value.tip_percentage)
    };
  }
});
__publicField(GeneratedConverter, "TransactionHash", class {
  static toGenerated(value) {
    return {
      hash: Convert.Uint8Array.toHexString(value.hash),
      id: value.id
    };
  }
  static fromGenerated(value) {
    return {
      hash: Convert.HexString.toUint8Array(value.hash),
      id: value.id
    };
  }
});
__publicField(GeneratedConverter, "Intent", class {
  static toGenerated(value) {
    return {
      header: _GeneratedConverter.TransactionHeader.toGenerated(value.header),
      manifest: _GeneratedConverter.TransactionManifest.toGenerated(
        value.manifest
      ),
      message: _GeneratedConverter.Message.toGenerated(value.message)
    };
  }
  static fromGenerated(value) {
    return {
      manifest: _GeneratedConverter.TransactionManifest.fromGenerated(
        value.manifest
      ),
      header: _GeneratedConverter.TransactionHeader.fromGenerated(
        value.header
      ),
      message: _GeneratedConverter.Message.fromGenerated(value.message)
    };
  }
});
__publicField(GeneratedConverter, "SignedIntent", class {
  static toGenerated(value) {
    return {
      intent: _GeneratedConverter.Intent.toGenerated(value.intent),
      intent_signatures: value.intentSignatures.map(
        _GeneratedConverter.SignatureWithPublicKey.toGenerated
      )
    };
  }
  static fromGenerated(value) {
    return {
      intent: _GeneratedConverter.Intent.fromGenerated(value.intent),
      intentSignatures: value.intent_signatures.map(
        _GeneratedConverter.SignatureWithPublicKey.fromGenerated
      )
    };
  }
});
__publicField(GeneratedConverter, "NotarizedTransaction", class {
  static toGenerated(value) {
    return {
      signed_intent: _GeneratedConverter.SignedIntent.toGenerated(
        value.signedIntent
      ),
      notary_signature: _GeneratedConverter.Signature.toGenerated(
        value.notarySignature
      )
    };
  }
  static fromGenerated(value) {
    return {
      signedIntent: _GeneratedConverter.SignedIntent.fromGenerated(
        value.signed_intent
      ),
      notarySignature: _GeneratedConverter.Signature.fromGenerated(
        value.notary_signature
      )
    };
  }
});
__publicField(GeneratedConverter, "EntityType", class {
  static toGenerated(value) {
    return SerializableEntityType[EntityType[value]];
  }
  static fromGenerated(value) {
    return EntityType[SerializableEntityType[value]];
  }
});
__publicField(GeneratedConverter, "MessageValidationConfig", class {
  static toGenerated(value) {
    return {
      max_plaintext_message_length: Convert.BigInt.toString(
        value.maxPlaintextMessageLength
      ),
      max_encrypted_message_length: Convert.BigInt.toString(
        value.maxEncryptedMessageLength
      ),
      max_mime_type_length: Convert.BigInt.toString(value.maxMimeTypeLength),
      max_decryptors: Convert.BigInt.toString(value.maxDecryptors)
    };
  }
  static fromGenerated(value) {
    return {
      maxPlaintextMessageLength: Convert.String.toBigInt(
        value.max_plaintext_message_length
      ),
      maxEncryptedMessageLength: Convert.String.toBigInt(
        value.max_encrypted_message_length
      ),
      maxMimeTypeLength: Convert.String.toBigInt(value.max_mime_type_length),
      maxDecryptors: Convert.String.toBigInt(value.max_decryptors)
    };
  }
});
__publicField(GeneratedConverter, "FeeSummary", class {
  static toGenerated(value) {
    return {
      execution_cost: Convert.Decimal.toString(value.executionCost),
      finalization_cost: Convert.Decimal.toString(value.finalizationCost),
      storage_expansion_cost: Convert.Decimal.toString(
        value.storageExpansionCost
      ),
      royalty_cost: Convert.Decimal.toString(value.royaltyCost)
    };
  }
  static fromGenerated(value) {
    return {
      executionCost: Convert.String.toDecimal(value.execution_cost),
      finalizationCost: Convert.String.toDecimal(value.finalization_cost),
      storageExpansionCost: Convert.String.toDecimal(
        value.storage_expansion_cost
      ),
      royaltyCost: Convert.String.toDecimal(value.royalty_cost)
    };
  }
});
__publicField(GeneratedConverter, "FeeLocks", class {
  static toGenerated(value) {
    return {
      lock: Convert.Decimal.toString(value.lock),
      contingent_lock: Convert.Decimal.toString(value.contingentLock)
    };
  }
  static fromGenerated(value) {
    return {
      lock: Convert.String.toDecimal(value.lock),
      contingentLock: Convert.String.toDecimal(value.contingent_lock)
    };
  }
});
__publicField(GeneratedConverter, "DecimalSource", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Guaranteed":
        return {
          kind: value.kind,
          value: {
            value: Convert.Decimal.toString(value.value)
          }
        };
      case "Predicted":
        return {
          kind: value.kind,
          value: {
            value: Convert.Decimal.toString(value.value),
            instruction_index: Convert.Number.toString(
              value.instructionIndex
            )
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Guaranteed":
        return {
          kind: value.kind,
          value: Convert.String.toDecimal(value.value.value)
        };
      case "Predicted":
        return {
          kind: value.kind,
          value: Convert.String.toDecimal(value.value.value),
          instructionIndex: Convert.String.toNumber(
            value.value.instruction_index
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "NonFungibleLocalIdArraySource", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Guaranteed":
        return {
          kind: value.kind,
          value: {
            value: value.value
          }
        };
      case "Predicted":
        return {
          kind: value.kind,
          value: {
            value: value.value,
            instruction_index: Convert.Number.toString(
              value.instructionIndex
            )
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Guaranteed":
        return {
          kind: value.kind,
          value: value.value.value
        };
      case "Predicted":
        return {
          kind: value.kind,
          value: value.value.value,
          instructionIndex: Convert.String.toNumber(
            value.value.instruction_index
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "ResourceTracker", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Fungible":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: _GeneratedConverter.DecimalSource.toGenerated(
              value.amount
            )
          }
        };
      case "NonFungible":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: _GeneratedConverter.DecimalSource.toGenerated(
              value.amount
            ),
            ids: _GeneratedConverter.NonFungibleLocalIdArraySource.toGenerated(
              value.ids
            )
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Fungible":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: _GeneratedConverter.DecimalSource.fromGenerated(
            value.value.amount
          )
        };
      case "NonFungible":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: _GeneratedConverter.DecimalSource.fromGenerated(
            value.value.amount
          ),
          ids: _GeneratedConverter.NonFungibleLocalIdArraySource.fromGenerated(
            value.value.ids
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "ResourceOrNonFungible", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Resource":
        return {
          kind: value.kind,
          value: value.resourceAddress
        };
      case "NonFungible":
        return {
          kind: value.kind,
          value: value.nonFungibleGlobalId
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Resource":
        return {
          kind: value.kind,
          resourceAddress: value.value
        };
      case "NonFungible":
        return {
          kind: value.kind,
          nonFungibleGlobalId: value.value
        };
    }
  }
});
__publicField(GeneratedConverter, "AuthorizedDepositorsChanges", class {
  static toGenerated(value) {
    return {
      added: value.added.map(
        _GeneratedConverter.ResourceOrNonFungible.toGenerated
      ),
      removed: value.removed.map(
        _GeneratedConverter.ResourceOrNonFungible.toGenerated
      )
    };
  }
  static fromGenerated(value) {
    return {
      added: value.added.map(
        _GeneratedConverter.ResourceOrNonFungible.fromGenerated
      ),
      removed: value.removed.map(
        _GeneratedConverter.ResourceOrNonFungible.fromGenerated
      )
    };
  }
});
__publicField(GeneratedConverter, "DefaultDepositRule", class {
  static toGenerated(value) {
    return SerializableDefaultDepositRule[DefaultDepositRule[value]];
  }
  static fromGenerated(value) {
    return DefaultDepositRule[SerializableDefaultDepositRule[value]];
  }
});
__publicField(GeneratedConverter, "ResourcePreference", class {
  static toGenerated(value) {
    return SerializableResourcePreference[ResourcePreference[value]];
  }
  static fromGenerated(value) {
    return ResourcePreference[SerializableResourcePreference[value]];
  }
});
__publicField(GeneratedConverter, "Resources", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Amount":
        return {
          kind: value.kind,
          value: Convert.Decimal.toString(value.amount)
        };
      case "Ids":
        return {
          kind: value.kind,
          value: value.nonFungibleLocalId
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Amount":
        return {
          kind: value.kind,
          amount: Convert.String.toDecimal(value.value)
        };
      case "Ids":
        return {
          kind: value.kind,
          nonFungibleLocalId: value.value
        };
    }
  }
});
__publicField(GeneratedConverter, "ResourceSpecifier", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Amount":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            amount: Convert.Decimal.toString(value.amount)
          }
        };
      case "Ids":
        return {
          kind: value.kind,
          value: {
            resource_address: value.resourceAddress,
            ids: value.ids
          }
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Amount":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          amount: Convert.String.toDecimal(value.value.amount)
        };
      case "Ids":
        return {
          kind: value.kind,
          resourceAddress: value.value.resource_address,
          ids: value.value.ids
        };
    }
  }
});
__publicField(GeneratedConverter, "ResourcePreferenceAction", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Set":
        return {
          kind: value.kind,
          value: _GeneratedConverter.ResourcePreference.toGenerated(
            value.value
          )
        };
      case "Remove":
        return {
          kind: value.kind
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Set":
        return {
          kind: value.kind,
          value: _GeneratedConverter.ResourcePreference.fromGenerated(
            value.value
          )
        };
      case "Remove":
        return {
          kind: value.kind
        };
    }
  }
});
__publicField(GeneratedConverter, "ValidationConfig", class {
  static toGenerated(value) {
    return {
      network_id: Convert.Number.toString(value.networkId),
      max_notarized_payload_size: Convert.BigInt.toString(
        value.maxNotarizedPayloadSize
      ),
      min_tip_percentage: Convert.Number.toString(value.minTipPercentage),
      max_tip_percentage: Convert.Number.toString(value.maxTipPercentage),
      max_epoch_range: Convert.BigInt.toString(value.maxEpochRange),
      message_validation: _GeneratedConverter.MessageValidationConfig.toGenerated(
        value.messageValidation
      )
    };
  }
  static fromGenerated(value) {
    return {
      networkId: Convert.String.toNumber(value.network_id),
      maxNotarizedPayloadSize: Convert.String.toBigInt(
        value.max_notarized_payload_size
      ),
      minTipPercentage: Convert.String.toNumber(value.min_tip_percentage),
      maxTipPercentage: Convert.String.toNumber(value.max_tip_percentage),
      maxEpochRange: Convert.String.toBigInt(value.max_epoch_range),
      messageValidation: _GeneratedConverter.MessageValidationConfig.fromGenerated(
        value.message_validation
      )
    };
  }
});
__publicField(GeneratedConverter, "Message", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "None":
        return { kind: value.kind };
      case "PlainText":
        return {
          kind: value.kind,
          value: _GeneratedConverter.PlainTextMessage.toGenerated(value.value)
        };
      case "Encrypted":
        return {
          kind: value.kind,
          value: _GeneratedConverter.EncryptedMessage.toGenerated(value.value)
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "None":
        return { kind: value.kind };
      case "PlainText":
        return {
          kind: value.kind,
          value: _GeneratedConverter.PlainTextMessage.fromGenerated(
            value.value
          )
        };
      case "Encrypted":
        return {
          kind: value.kind,
          value: _GeneratedConverter.EncryptedMessage.fromGenerated(
            value.value
          )
        };
    }
  }
});
__publicField(GeneratedConverter, "PlainTextMessage", class {
  static toGenerated(value) {
    return {
      mime_type: value.mimeType,
      message: _GeneratedConverter.MessageContent.toGenerated(value.message)
    };
  }
  static fromGenerated(value) {
    return {
      mimeType: value.mime_type,
      message: _GeneratedConverter.MessageContent.fromGenerated(value.message)
    };
  }
});
__publicField(GeneratedConverter, "MessageContent", class {
  static toGenerated(value) {
    switch (value.kind) {
      case "Bytes":
        return {
          kind: value.kind,
          value: Convert.Uint8Array.toHexString(value.value)
        };
      case "String":
        return {
          kind: value.kind,
          value: value.value
        };
    }
  }
  static fromGenerated(value) {
    switch (value.kind) {
      case "Bytes":
        return {
          kind: value.kind,
          value: Convert.HexString.toUint8Array(value.value)
        };
      case "String":
        return {
          kind: value.kind,
          value: value.value
        };
    }
  }
});
__publicField(GeneratedConverter, "EncryptedMessage", class {
  static toGenerated(value) {
    return {
      encrypted: Convert.Uint8Array.toHexString(value.encrypted),
      decryptors_by_curve: recordMap(
        value.decryptorsByCurve,
        (key2, value2) => {
          return [
            key2,
            _GeneratedConverter.DecryptorsByCurve.toGenerated(value2)
          ];
        }
      )
    };
  }
  static fromGenerated(value) {
    return {
      encrypted: Convert.HexString.toUint8Array(value.encrypted),
      decryptorsByCurve: recordMap(
        value.decryptors_by_curve,
        (key2, value2) => {
          return [
            key2,
            _GeneratedConverter.DecryptorsByCurve.fromGenerated(value2)
          ];
        }
      )
    };
  }
});
__publicField(GeneratedConverter, "DecryptorsByCurve", class {
  static toGenerated(value) {
    return {
      kind: value.kind,
      value: {
        dh_ephemeral_public_key: Convert.Uint8Array.toHexString(
          value.value.dhEphemeralPublicKey
        ),
        decryptors: value.value.decryptors.reduce(
          (obj, [key2, value2]) => {
            obj[Convert.Uint8Array.toHexString(key2)] = Convert.Uint8Array.toHexString(value2);
            return obj;
          },
          {}
        )
      }
    };
  }
  static fromGenerated(value) {
    return {
      kind: value.kind,
      value: {
        dhEphemeralPublicKey: Convert.HexString.toUint8Array(
          value.value.dh_ephemeral_public_key
        ),
        decryptors: Object.entries(value.value.decryptors).map(
          ([key2, value2]) => [
            Convert.HexString.toUint8Array(key2),
            Convert.HexString.toUint8Array(value2)
          ]
        )
      }
    };
  }
});
const recordMap = (record, callback) => {
  let newRecord = {};
  for (const key2 in record) {
    const value = record[key2];
    const [newKey, newValue] = callback(key2, value);
    newRecord[newKey] = newValue;
  }
  return newRecord;
};
class TransactionBuilder {
  constructor(radixEngineToolkit) {
    __publicField(this, "radixEngineToolkit");
    this.radixEngineToolkit = radixEngineToolkit;
  }
  static async new() {
    return new this(await rawRadixEngineToolkit);
  }
  header(header) {
    return new TransactionBuilderManifestStep(this.radixEngineToolkit, header);
  }
}
class TransactionBuilderManifestStep {
  constructor(radixEngineToolkit, header) {
    __publicField(this, "radixEngineToolkit");
    __publicField(this, "header");
    __publicField(this, "intentMessage", { kind: "None" });
    this.radixEngineToolkit = radixEngineToolkit;
    this.header = header;
  }
  message(message) {
    this.intentMessage = message;
    return this;
  }
  plainTextMessage(message) {
    return this.message({
      kind: "PlainText",
      value: {
        mimeType: "text/plain",
        message: { kind: "String", value: message }
      }
    });
  }
  manifest(manifest) {
    return new TransactionBuilderIntentSignaturesStep(
      this.radixEngineToolkit,
      this.header,
      manifest,
      this.intentMessage
    );
  }
}
class TransactionBuilderIntentSignaturesStep {
  constructor(radixEngineToolkit, header, manifest, message) {
    __publicField(this, "radixEngineToolkit");
    __publicField(this, "intent");
    __publicField(this, "intentSignatures");
    this.radixEngineToolkit = radixEngineToolkit;
    this.intent = {
      header,
      manifest,
      message
    };
    this.intentSignatures = [];
  }
  sign(source) {
    const intentHash = this.intentHash();
    const signature2 = resolveSignatureSource(
      source,
      intentHash.hash,
      ({ curve: curve2, signature: signature22, publicKey }) => {
        switch (curve2) {
          case "Secp256k1":
            return new SignatureWithPublicKey.Secp256k1(signature22);
          case "Ed25519":
            return new SignatureWithPublicKey.Ed25519(signature22, publicKey);
        }
      }
    );
    this.intentSignatures.push({ kind: "Signature", value: signature2 });
    return this;
  }
  signAsync(source) {
    this.intentSignatures.push({ kind: "AsyncFunction", value: source });
    return this;
  }
  async notarize(source) {
    const signedIntentHash = await this.signedIntentHash();
    const signature2 = resolveSignatureSource(
      source,
      signedIntentHash.hash,
      ({ curve: curve2, signature: signature22 }) => {
        switch (curve2) {
          case "Secp256k1":
            return new Signature.Secp256k1(signature22);
          case "Ed25519":
            return new Signature.Ed25519(signature22);
        }
      }
    );
    return {
      signedIntent: {
        intent: this.intent,
        intentSignatures: await this.resolveIntentSignatures()
      },
      notarySignature: signature2
    };
  }
  async notarizeAsync(source) {
    const signedIntentHash = await this.signedIntentHash();
    const signature2 = await source(signedIntentHash.hash);
    return {
      signedIntent: {
        intent: this.intent,
        intentSignatures: await this.resolveIntentSignatures()
      },
      notarySignature: signature2
    };
  }
  async resolveIntentSignatures() {
    return Promise.all(
      this.intentSignatures.map(async (intentSignature) => {
        switch (intentSignature.kind) {
          case "Signature":
            return Promise.resolve(intentSignature.value);
          case "AsyncFunction":
            return intentSignature.value(this.intentHash().hash);
        }
      })
    );
  }
  intentHash() {
    const input = this.intent;
    const output2 = this.radixEngineToolkit.intentHash(
      GeneratedConverter.Intent.toGenerated(input)
    );
    return GeneratedConverter.TransactionHash.fromGenerated(output2);
  }
  async signedIntentHash() {
    const input = {
      intent: this.intent,
      intentSignatures: await this.resolveIntentSignatures()
    };
    const output2 = this.radixEngineToolkit.signedIntentHash(
      GeneratedConverter.SignedIntent.toGenerated(input)
    );
    return GeneratedConverter.TransactionHash.fromGenerated(output2);
  }
}
const resolveSignatureSource = (source, messageHash, signerResponseCallback) => {
  if (typeof source === "function") {
    return source(messageHash);
  } else if ("produceSignature" in source) {
    return signerResponseCallback(
      source.produceSignature(messageHash)
    );
  } else {
    return source;
  }
};
class Convert {
}
__publicField(Convert, "String", (_a = class {
}, __publicField(_a, "toNumber", (str2) => Number(str2)), __publicField(_a, "toBigInt", (str2) => BigInt(str2)), __publicField(_a, "toDecimal", (str2) => new Decimal(str2)), _a));
__publicField(Convert, "Number", (_b = class {
}, __publicField(_b, "toString", (num) => num.toLocaleString("fullwide", { useGrouping: false })), _b));
__publicField(Convert, "Uint8Array", (_c = class {
}, __publicField(_c, "toHexString", (array2) => Array.from(array2).map((b) => b.toString(16).padStart(2, "0")).join("")), _c));
__publicField(Convert, "HexString", (_d = class {
}, __publicField(_d, "toUint8Array", (str2) => Uint8Array.from(str2.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)))), _d));
__publicField(Convert, "BigInt", (_e = class {
}, __publicField(_e, "toString", (num) => num.toLocaleString("fullwide", { useGrouping: false })), _e));
__publicField(Convert, "Decimal", (_f = class {
}, __publicField(_f, "toString", (num) => num.toFixed()), _f));
class NotImplementedException extends Error {
}
class SimpleTransactionBuilder {
  constructor(retWrapper, startEpoch, networkId, fromAccount, notaryPublicKey, nonce) {
    __publicField(this, "retWrapper");
    __publicField(this, "_startEpoch");
    __publicField(this, "_expiresAfterEpochs", 2);
    __publicField(this, "_networkId");
    __publicField(this, "_nonce");
    __publicField(this, "_tipPercentage", 0);
    __publicField(this, "_notaryPublicKey");
    __publicField(this, "_fromAccount");
    __publicField(this, "_feePayer");
    __publicField(this, "_feeAmount");
    __publicField(this, "_actions", []);
    this.retWrapper = retWrapper;
    this._startEpoch = startEpoch;
    this._networkId = networkId;
    this._fromAccount = fromAccount;
    this._feePayer = fromAccount;
    this._nonce = nonce;
    this._notaryPublicKey = notaryPublicKey;
  }
  static async new(settings) {
    const { networkId, validFromEpoch, fromAccount, signerPublicKey } = settings;
    return new SimpleTransactionBuilder(
      await rawRadixEngineToolkit,
      validFromEpoch,
      networkId,
      fromAccount,
      signerPublicKey,
      await generateRandomNonce()
    );
  }
  static async freeXrdFromFaucet(settings) {
    const { networkId, toAccount, validFromEpoch } = settings;
    const ephemeralPrivateKey = new PrivateKey.Ed25519(
      new Uint8Array(Array(32).map((_) => Math.floor(Math.random() * 255)))
    );
    const {
      components: { faucet: faucetComponentAddress },
      resources: { xrdResource: xrdResourceAddress }
    } = await LTSRadixEngineToolkit.Derive.knownAddresses(networkId);
    const manifest = new ManifestBuilder().callMethod(faucetComponentAddress, "lock_fee", [decimal("10")]).callMethod(faucetComponentAddress, "free", []).takeFromWorktop(
      xrdResourceAddress,
      new Decimal("10000"),
      (builder, bucketId) => {
        return builder.callMethod(toAccount, "try_deposit_or_abort", [
          bucket(bucketId),
          enumeration(0)
        ]);
      }
    ).build();
    const header = {
      networkId,
      startEpochInclusive: validFromEpoch,
      endEpochExclusive: validFromEpoch + 2,
      nonce: generateRandomNonce(),
      notaryPublicKey: ephemeralPrivateKey.publicKey(),
      notaryIsSignatory: false,
      tipPercentage: 0
    };
    const intent = new LTSTransactionIntent({
      header,
      manifest,
      message: { kind: "None" }
    });
    const signedIntent = new LTSSignedTransactionIntent({
      intent: { header, manifest, message: { kind: "None" } },
      intentSignatures: []
    });
    return new CompiledSignedTransactionIntent(
      await rawRadixEngineToolkit,
      await intent.transactionId(),
      {
        intent: { header, manifest, message: { kind: "None" } },
        intentSignatures: []
      },
      await signedIntent.compile(),
      await signedIntent.signedIntentHash()
    ).compileNotarized(ephemeralPrivateKey);
  }
  nonce(nonce) {
    this._nonce = nonce;
    return this;
  }
  feePayer(address2) {
    this._feePayer = address2;
    return this;
  }
  /**
   * Set the number of epochs this transaction is valid for (including the current epoch - which might nearly be over!)
   * Each epoch is approximately 5 minutes long.
   *
   * If `validFromEpoch` is set to the current epoch, then there are 0-5 minutes left of this first epoch.
   * So `expiresAfterEpochs(10)` would result in the transaction permanently rejecting after approximately 45-50 minutes.
   *
   * @param epochCount The number of epochs after with the transaction permanently rejects.
   * @returns the builder
   */
  permanentlyRejectAfterEpochs(epochCount) {
    if (epochCount < 1 || epochCount > 100) {
      throw new Error("Epochs valid must be between 1 and 100");
    }
    this._expiresAfterEpochs = epochCount;
    return this;
  }
  tipPercentage(tipPercentage) {
    this._tipPercentage = tipPercentage;
    return this;
  }
  /**
   * @param amount The amount of fee to lock. If not set, it will be 5 XRD.
   * @returns the builder
   */
  lockedFee(amount) {
    this._feeAmount = resolveDecimal(amount);
    return this;
  }
  transferFungible(transfer) {
    this._actions.push({
      kind: "FungibleResourceTransfer",
      toAccount: transfer.toAccount,
      fromAccount: this._fromAccount,
      resourceAddress: transfer.resourceAddress,
      amount: resolveDecimal(transfer.amount)
    });
    return this;
  }
  /**
   * This compiles the "signed intent" without any additional signatures (other than the notary
   * which will count as a signatory).
   * @returns the compiled intent, along with the `hashToNotarize` which needs to be signed.
   */
  compileIntent() {
    const header = this.constructTransactionHeader();
    const manifest = this.constructTransactionManifest();
    const intent = { header, manifest, message: { kind: "None" } };
    const intentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.intentHash(GeneratedConverter.Intent.toGenerated(intent))
    );
    const signedIntent = {
      intent,
      intentSignatures: []
    };
    const compiledSignedIntent = Convert.HexString.toUint8Array(
      this.retWrapper.signedIntentCompile(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    const signedIntentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.signedIntentHash(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    return new CompiledSignedTransactionIntent(
      this.retWrapper,
      intentHash,
      signedIntent,
      compiledSignedIntent,
      signedIntentHash
    );
  }
  compileIntentWithSignatures(signatureSources) {
    const header = this.constructTransactionHeader();
    const manifest = this.constructTransactionManifest();
    const intent = { header, manifest, message: { kind: "None" } };
    const intentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.intentHash(GeneratedConverter.Intent.toGenerated(intent))
    );
    const signatures = signatureSources.map(
      (source) => resolveSignatureSource(
        source,
        intentHash.hash,
        (signerResponse) => {
          switch (signerResponse.curve) {
            case "Secp256k1":
              return new SignatureWithPublicKey.Secp256k1(
                signerResponse.signature
              );
            case "Ed25519":
              return new SignatureWithPublicKey.Ed25519(
                signerResponse.signature,
                signerResponse.publicKey
              );
          }
        }
      )
    );
    const signedIntent = { intent, intentSignatures: signatures };
    const compiledSignedIntent = Convert.HexString.toUint8Array(
      this.retWrapper.signedIntentCompile(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    const signedIntentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.signedIntentHash(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    return new CompiledSignedTransactionIntent(
      this.retWrapper,
      intentHash,
      signedIntent,
      compiledSignedIntent,
      signedIntentHash
    );
  }
  async compileIntentWithSignaturesAsync(signatureSources) {
    const header = this.constructTransactionHeader();
    const manifest = this.constructTransactionManifest();
    const intent = { header, manifest, message: { kind: "None" } };
    const intentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.intentHash(GeneratedConverter.Intent.toGenerated(intent))
    );
    const signatures = await Promise.all(
      signatureSources.map((func) => func(intentHash.hash))
    );
    const signedIntent = { intent, intentSignatures: signatures };
    const compiledSignedIntent = Convert.HexString.toUint8Array(
      this.retWrapper.signedIntentCompile(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    const signedIntentHash = GeneratedConverter.TransactionHash.fromGenerated(
      this.retWrapper.signedIntentHash(
        GeneratedConverter.SignedIntent.toGenerated(signedIntent)
      )
    );
    return new CompiledSignedTransactionIntent(
      this.retWrapper,
      intentHash,
      signedIntent,
      compiledSignedIntent,
      signedIntentHash
    );
  }
  //=================
  // Private Methods
  //=================
  constructTransactionHeader() {
    const notaryIsSignatory = true;
    const endEpoch = this._startEpoch + this._expiresAfterEpochs;
    return {
      networkId: this._networkId,
      startEpochInclusive: this._startEpoch,
      endEpochExclusive: endEpoch,
      nonce: this._nonce,
      notaryPublicKey: this._notaryPublicKey,
      notaryIsSignatory,
      tipPercentage: this._tipPercentage
    };
  }
  constructTransactionManifest() {
    const feeAmount = this.resolveFeeAmount();
    const instructions = [];
    const { withdraws, deposits } = this.resolveActions();
    instructions.push({
      kind: "CallMethod",
      address: { kind: "Static", value: this._feePayer },
      methodName: "lock_fee",
      args: {
        kind: ValueKind.Tuple,
        fields: [
          {
            kind: ValueKind.Decimal,
            value: feeAmount
          }
        ]
      }
    });
    for (const [from, resourceAmountMapping] of Object.entries(withdraws)) {
      for (const [resourceAddress, amount] of Object.entries(
        resourceAmountMapping
      )) {
        instructions.push({
          kind: "CallMethod",
          address: { kind: "Static", value: from },
          methodName: "withdraw",
          args: {
            kind: ValueKind.Tuple,
            fields: [
              {
                kind: ValueKind.Address,
                value: { kind: "Static", value: resourceAddress }
              },
              {
                kind: ValueKind.Decimal,
                value: amount
              }
            ]
          }
        });
      }
    }
    let depositCounter = 0;
    for (const [to, resourceAmountMapping] of Object.entries(deposits)) {
      for (const [resourceAddress, amount] of Object.entries(
        resourceAmountMapping
      )) {
        instructions.push({
          kind: "TakeFromWorktop",
          resourceAddress,
          amount
        });
        instructions.push({
          kind: "CallMethod",
          address: { kind: "Static", value: to },
          methodName: "try_deposit_or_abort",
          args: {
            kind: ValueKind.Tuple,
            fields: [
              {
                kind: ValueKind.Bucket,
                value: depositCounter++
              },
              {
                kind: ValueKind.Enum,
                discriminator: 0,
                fields: []
              }
            ]
          }
        });
      }
    }
    return {
      instructions: {
        kind: "Parsed",
        value: instructions
      },
      blobs: []
    };
  }
  resolveActions() {
    var _a2, _b2;
    const withdraws = {};
    const deposits = {};
    for (const action of this._actions) {
      switch (action.kind) {
        case "FungibleResourceTransfer":
          const { fromAccount, toAccount, resourceAddress, amount } = action;
          if ((withdraws == null ? void 0 : withdraws[fromAccount]) === void 0) {
            withdraws[fromAccount] = {};
          }
          if (((_a2 = withdraws[fromAccount]) == null ? void 0 : _a2[resourceAddress]) === void 0) {
            withdraws[fromAccount][resourceAddress] = new Decimal(0);
          }
          withdraws[fromAccount][resourceAddress] = withdraws[fromAccount][resourceAddress].add(amount);
          if ((deposits == null ? void 0 : deposits[toAccount]) === void 0) {
            deposits[toAccount] = {};
          }
          if (((_b2 = deposits[toAccount]) == null ? void 0 : _b2[resourceAddress]) === void 0) {
            deposits[toAccount][resourceAddress] = new Decimal(0);
          }
          deposits[toAccount][resourceAddress] = deposits[toAccount][resourceAddress].add(amount);
      }
    }
    return { withdraws, deposits };
  }
  resolveFeeAmount() {
    return this._feeAmount === void 0 ? new Decimal(5) : this._feeAmount;
  }
}
function resolveDecimal(amount) {
  if (typeof amount === "string" || typeof amount === "number") {
    return new Decimal(amount);
  } else if (amount instanceof Decimal) {
    return amount;
  } else {
    throw new TypeError("Invalid type passed in for decimal");
  }
}
const _LTSRadixEngineToolkit = class {
};
let LTSRadixEngineToolkit = _LTSRadixEngineToolkit;
__publicField(LTSRadixEngineToolkit, "Transaction", class {
  /**
   * Given a transaction intent of any type, this function compiles the transaction intent
   * returning a byte array of the compiled intent.
   * @param intent Any intent or transaction part that can be compiled.
   * @returns The compiled intent
   */
  static async compile(intent) {
    return intent.compile();
  }
  /**
   * Compiles the `TransactionIntent` by calling the Radix Engine Toolkit and SBOR Encoding it.
   * @param transactionIntent The transaction intent to compile
   * @returns The compiled transaction intent
   */
  static async compileTransactionIntent(transactionIntent) {
    return transactionIntent.compile();
  }
  /**
   * Compiles the `SignedTransactionIntent` by calling the Radix Engine Toolkit and SBOR Encoding it.
   * @param signedTransactionIntent The signed transaction intent to compile
   * @returns The compiled signed transaction intent
   */
  static async compileSignedTransactionIntent(signedTransactionIntent) {
    return signedTransactionIntent.compile();
  }
  /**
   * Compiles the `NotarizedTransaction` by calling the Radix Engine Toolkit and SBOR Encoding it.
   * @param notarizedTransactionIntent The signed transaction intent to compile
   * @returns The compiled signed transaction intent
   */
  static async compileNotarizedTransactionIntent(notarizedTransactionIntent) {
    return notarizedTransactionIntent.compile();
  }
  /**
   * Decompiles and summarizes a compiled intent extracting information such as locked fees,
   * deposits, and withdrawals.
   * @param compiledIntent The compiled intent to produce a summary for. This function accepts any
   * object that we can extract the compiled intent from.
   * @returns A summary on the transaction of the various withdraws, deposits, and locked fees
   * that can be statically obtained from the manifest.
   *
   * @remarks
   * This function only works for manifests that perform simple transfers which were created
   * through the SimpleTransactionBuilder class and will not work for any other more complex
   * transactions since this information might not be available to obtain statically from the
   * manifest.
   */
  static async summarizeTransaction(transaction) {
    var _a2, _b2, _c2;
    const transactionIntent = await resolveTransactionIntent(transaction);
    const instructions = await RadixEngineToolkit.Instructions.convert(
      transactionIntent.manifest.instructions,
      transactionIntent.header.networkId,
      "Parsed"
    ).then((instructions2) => instructions2.value);
    const [faucetComponentAddress, xrdResourceAddress] = await RadixEngineToolkit.Utils.knownAddresses(
      transactionIntent.header.networkId
    ).then((knownAddresses) => [
      knownAddresses.componentAddresses.faucet,
      knownAddresses.resourceAddresses.xrd
    ]);
    const bucketAmounts = {};
    let bucketId = 0;
    let feesLocked = void 0;
    const withdraws = {};
    const deposits = {};
    for (const instruction of instructions) {
      switch (instruction.kind) {
        case "TakeFromWorktop":
          const resourceAddress = instruction.resourceAddress;
          const amount = instruction.amount;
          bucketAmounts[bucketId++] = [resourceAddress, amount];
          break;
        case "CallMethod":
          if (await isLockFeeCallMethod(instruction, faucetComponentAddress)) {
            const [amountValue] = destructManifestValueTuple(
              instruction.args
            );
            feesLocked = {
              account: resolveManifestAddress(instruction.address).value,
              amount: castValue(amountValue, "Decimal").value
            };
          } else if (await isAccountWithdrawCallMethod(instruction)) {
            const [resourceAddressValue, amountValue] = destructManifestValueTuple(instruction.args);
            const accountAddress = resolveManifestAddress(
              instruction.address
            ).value;
            const resourceAddress2 = resolveManifestAddress(
              castValue(resourceAddressValue, "Address").value
            ).value;
            const amount2 = castValue(amountValue, "Decimal").value;
            withdraws[accountAddress] ?? (withdraws[accountAddress] = {});
            (_a2 = withdraws[accountAddress])[resourceAddress2] ?? (_a2[resourceAddress2] = new Decimal("0"));
            withdraws[accountAddress][resourceAddress2] = withdraws[accountAddress][resourceAddress2].add(amount2);
          } else if (await isAccountDepositCallMethod(instruction)) {
            const [bucketValue] = destructManifestValueTuple(
              instruction.args
            );
            const accountAddress = resolveManifestAddress(
              instruction.address
            ).value;
            const bucket2 = castValue(bucketValue, "Bucket").value;
            const [resourceAddress2, amount2] = bucketAmounts[bucket2];
            deposits[accountAddress] ?? (deposits[accountAddress] = {});
            (_b2 = deposits[accountAddress])[resourceAddress2] ?? (_b2[resourceAddress2] = new Decimal("0"));
            deposits[accountAddress][resourceAddress2] = deposits[accountAddress][resourceAddress2].add(amount2);
            delete bucketAmounts[bucket2];
          } else if (await isFreeXrdCallMethod(instruction, faucetComponentAddress)) {
            withdraws[faucetComponentAddress] ?? (withdraws[faucetComponentAddress] = {});
            (_c2 = withdraws[faucetComponentAddress])[xrdResourceAddress] ?? (_c2[xrdResourceAddress] = new Decimal("0"));
            withdraws[faucetComponentAddress][xrdResourceAddress] = withdraws[faucetComponentAddress][xrdResourceAddress].add(new Decimal("10000"));
          } else {
            throw new Error(`Unsupported CallMethod: ${instruction}`);
          }
          break;
        case "TakeAllFromWorktop":
        case "TakeNonFungiblesFromWorktop":
        case "ReturnToWorktop":
        case "AssertWorktopContainsAny":
        case "AssertWorktopContains":
        case "AssertWorktopContainsNonFungibles":
        case "PopFromAuthZone":
        case "PushToAuthZone":
        case "DropAuthZoneProofs":
        case "CreateProofFromAuthZoneOfAmount":
        case "CreateProofFromAuthZoneOfNonFungibles":
        case "CreateProofFromAuthZoneOfAll":
        case "DropNamedProofs":
        case "DropAuthZoneRegularProofs":
        case "DropAuthZoneSignatureProofs":
        case "CreateProofFromBucketOfAmount":
        case "CreateProofFromBucketOfNonFungibles":
        case "CreateProofFromBucketOfAll":
        case "BurnResource":
        case "CloneProof":
        case "DropProof":
        case "CallFunction":
        case "CallRoyaltyMethod":
        case "CallMetadataMethod":
        case "CallRoleAssignmentMethod":
        case "CallDirectVaultMethod":
        case "DropAllProofs":
        case "AllocateGlobalAddress":
          throw new Error(
            `LTS resolution of resource movements does not support this instructions: ${instruction.kind}`
          );
      }
    }
    if (feesLocked !== void 0) {
      return {
        feesLocked,
        withdraws,
        deposits
      };
    } else {
      throw new Error("No lock_fee instruction found in the manifest");
    }
  }
});
__publicField(LTSRadixEngineToolkit, "Derive", class {
  /**
   * Given a public key and network id, this function deterministically calculates the address of
   * the virtual account component address associated with the public key.
   * @param publicKey An Ecdsa Secp256k1 or EdDSA Ed25519 public key to derive the virtual account
   * address for.
   * @param networkId The network that the virtual account address is meant for. This will be used
   * for the Bech32m encoding of the address.
   * @returns The address of the virtual account as a string.
   */
  static async virtualAccountAddress(publicKey, networkId) {
    return RadixEngineToolkit.Derive.virtualAccountAddressFromPublicKey(
      publicKey,
      networkId
    );
  }
  /**
   * Given an Olympia account address, this function deterministically calculates the address of
   * the associated virtual account on a Babylon network of a given network id.
   * @param olympiaAddress The Olympia account address to derive the associated Babylon virtual
   * account address for.
   * @param networkId The **Babylon** network id to derive the Babylon account address for. This is
   * primarily used for the Bech32m encoding of addresses. This argument defaults to `1` which is
   * the network id of the Babylon mainnet
   * @returns An object containing all of the mapping information of the address
   */
  static async babylonAccountAddressFromOlympiaAccountAddress(olympiaAddress, networkId) {
    const address2 = await RadixEngineToolkit.Derive.virtualAccountAddressFromOlympiaAccountAddress(
      olympiaAddress,
      networkId
    );
    const publicKey = await RadixEngineToolkit.Derive.publicKeyFromOlympiaAccountAddress(
      olympiaAddress
    );
    return {
      publicKey: new PublicKey.Secp256k1(publicKey),
      babylonAccountAddress: address2,
      olympiaAccountAddress: olympiaAddress
    };
  }
  /**
   * Given an Olympia account address, this function deterministically calculates the address of
   * the associated virtual account on a Babylon network of a given network id.
   * @param olympiaResourceAddress The Olympia account address to derive the associated Babylon virtual
   * account address for.
   * @param networkId The **Babylon** network id to derive the Babylon account address for. This is
   * primarily used for the Bech32m encoding of addresses. This argument defaults to `1` which is
   * the network id of the Babylon mainnet
   * @returns An object containing all of the mapping information of the address
   */
  static async babylonResourceAddressFromOlympiaResourceAddress(olympiaResourceAddress, networkId) {
    return RadixEngineToolkit.Derive.resourceAddressFromOlympiaResourceAddress(
      olympiaResourceAddress,
      networkId
    );
  }
  /**
   * Derives the addresses of a set of known entities on the specified network.
   * @param networkId The network id to ge the known entity addresses for.
   * @returns An object containing the entity addresses on the network with the specified id.
   */
  static async knownAddresses(networkId) {
    return RadixEngineToolkit.Utils.knownAddresses(networkId).then(
      (knownAddresses) => {
        return {
          packages: {
            faucet: knownAddresses.packageAddresses.faucetPackage,
            account: knownAddresses.packageAddresses.accountPackage
          },
          components: {
            faucet: knownAddresses.componentAddresses.faucet
          },
          resources: {
            xrdResource: knownAddresses.resourceAddresses.xrd,
            secp256k1Resource: knownAddresses.resourceAddresses.secp256k1SignatureVirtualBadge,
            ed25519Resource: knownAddresses.resourceAddresses.ed25519SignatureVirtualBadge,
            systemResource: knownAddresses.resourceAddresses.systemTransactionBadge,
            packageBadgeResource: knownAddresses.resourceAddresses.packageOfDirectCallerVirtualBadge
          }
        };
      }
    );
  }
  static async bech32mTransactionIdentifierFromIntentHash(transactionHash, networkId) {
    return RadixEngineToolkit.Derive.bech32mTransactionIdentifierFromIntentHash(
      transactionHash,
      networkId
    );
  }
});
__publicField(LTSRadixEngineToolkit, "Address", class {
  static async isGlobalAccount(address2) {
    const entityType = await RadixEngineToolkit.Address.entityType(address2);
    return entityType == EntityType.GlobalVirtualEd25519Account || entityType == EntityType.GlobalVirtualSecp256k1Account || entityType == EntityType.GlobalAccount;
  }
  static async isFungibleResource(address2) {
    const entityType = await RadixEngineToolkit.Address.entityType(address2);
    return entityType == EntityType.GlobalFungibleResourceManager;
  }
  static async isNonFungibleResource(address2) {
    const entityType = await RadixEngineToolkit.Address.entityType(address2);
    return entityType == EntityType.GlobalNonFungibleResourceManager;
  }
});
__publicField(LTSRadixEngineToolkit, "Utils", class {
  /**
   * This function hashes a given byte array of data through the hashing algorithm used by the
   * Radix Engine and Scrypto. The hashing algorithm adopted by the Radix stack is Blake2b with 32
   * byte digests.
   * @param data The data to hash
   * @returns The hash of the data
   */
  static hash(data) {
    return hash2(data);
  }
});
/**
 * A sub-API of the toolkit that includes contains utility functions used for testing.
 */
__publicField(LTSRadixEngineToolkit, "TestUtils", class {
  /**
   * Creates a new account that has a default deposit rule of disallowing resource deposits. The
   * created account is a virtual account derived from the public key of a pseudo-random private
   * key. Thus, this function should only be used for testing.
   * @param currentEpoch The current epoch of the network that this transaction will be submitted
   * to.
   * @param networkId The id of the network that this transaction is constructed for.
   * @returns An object containing the address of the soon-to-be-created account with deposits
   * disabled and the compiled notarized transaction to submit the ledger to create the account.
   */
  static async createAccountWithDisabledDeposits(currentEpoch, networkId) {
    const ephemeralPrivateKey = new PrivateKey.Ed25519(
      new Uint8Array(Array(32).map((_) => Math.floor(Math.random() * 255)))
    );
    const ephemeralPublicKey = ephemeralPrivateKey.publicKey();
    const virtualAccount = await _LTSRadixEngineToolkit.Derive.virtualAccountAddress(
      ephemeralPublicKey,
      networkId
    );
    const faucetComponentAddress = await _LTSRadixEngineToolkit.Derive.knownAddresses(networkId).then(
      (addresses) => addresses.components.faucet
    );
    const manifest = new ManifestBuilder().callMethod(faucetComponentAddress, "lock_fee", [decimal("10")]).callMethod(virtualAccount, "set_default_deposit_rule", [
      enumeration(1)
    ]).build();
    const notarizedTransaction = await TransactionBuilder.new().then(
      (builder) => builder.header({
        networkId,
        startEpochInclusive: currentEpoch,
        endEpochExclusive: currentEpoch + 10,
        nonce: generateRandomNonce(),
        notaryPublicKey: ephemeralPublicKey,
        notaryIsSignatory: true,
        tipPercentage: 0
      }).manifest(manifest).notarize(ephemeralPrivateKey)
    );
    const compiledNotarizedTransaction = new CompiledNotarizedTransaction(
      await RadixEngineToolkit.Intent.hash(
        notarizedTransaction.signedIntent.intent
      ),
      await RadixEngineToolkit.NotarizedTransaction.compile(
        notarizedTransaction
      ),
      await RadixEngineToolkit.NotarizedTransaction.hash(notarizedTransaction)
    );
    return {
      accountAddress: virtualAccount,
      compiledNotarizedTransaction
    };
  }
});
const resolveManifestAddress = (address2) => {
  if (address2.kind == "Static") {
    return address2;
  } else {
    throw new Error("Not a static address");
  }
};
const resolveTransactionIntent = (intent) => {
  if (intent.constructor === Uint8Array) {
    return resolveUnknownCompiledIntent(intent);
  } else {
    return intent.compiledIntent().then(RadixEngineToolkit.Intent.decompile);
  }
};
const resolveUnknownCompiledIntent = (intent) => {
  return RadixEngineToolkit.Intent.decompile(intent).catch(() => {
    return RadixEngineToolkit.SignedIntent.decompile(intent).then((signedIntent) => signedIntent.intent).catch(() => {
      return RadixEngineToolkit.NotarizedTransaction.decompile(intent).then(
        (transaction) => transaction.signedIntent.intent
      );
    });
  });
};
class LTSTransactionIntent {
  constructor(intent) {
    __publicField(this, "intent");
    this.intent = intent;
  }
  compile() {
    return RadixEngineToolkit.Intent.compile(this.intent);
  }
  compiledIntent() {
    return this.compile();
  }
  async transactionId() {
    return RadixEngineToolkit.Intent.hash(this.intent);
  }
}
class LTSSignedTransactionIntent {
  constructor(intent) {
    __publicField(this, "intent");
    this.intent = intent;
  }
  compile() {
    return RadixEngineToolkit.SignedIntent.compile(this.intent);
  }
  compiledIntent() {
    return new LTSTransactionIntent(this.intent.intent).compile();
  }
  async transactionId() {
    return this.intentHash();
  }
  async intentHash() {
    return RadixEngineToolkit.Intent.hash(this.intent.intent);
  }
  async signedIntentHash() {
    return RadixEngineToolkit.SignedIntent.hash(this.intent);
  }
}
class LTSNotarizedTransaction {
  constructor(transaction) {
    __publicField(this, "transaction");
    this.transaction = transaction;
  }
  compile() {
    return RadixEngineToolkit.NotarizedTransaction.compile(this.transaction);
  }
  compiledIntent() {
    return new LTSTransactionIntent(
      this.transaction.signedIntent.intent
    ).compile();
  }
  async transactionId() {
    return this.intentHash();
  }
  async intentHash() {
    return RadixEngineToolkit.Intent.hash(this.transaction.signedIntent.intent);
  }
  async signedIntentHash() {
    return RadixEngineToolkit.SignedIntent.hash(this.transaction.signedIntent);
  }
  async notarizedPayloadHash() {
    return RadixEngineToolkit.NotarizedTransaction.hash(this.transaction);
  }
}
class CompiledSignedTransactionIntent {
  constructor(retWrapper, intentHash, signedIntent, compiledSignedIntent, signedIntentHash) {
    __publicField(this, "retWrapper");
    __publicField(this, "signedIntent");
    __publicField(this, "intentHash");
    __publicField(this, "compiledSignedIntent");
    __publicField(this, "signedIntentHash");
    this.retWrapper = retWrapper;
    this.intentHash = intentHash;
    this.signedIntent = signedIntent;
    this.compiledSignedIntent = compiledSignedIntent;
    this.signedIntentHash = signedIntentHash;
  }
  compiledIntent() {
    return new LTSTransactionIntent(this.signedIntent.intent).compile();
  }
  /**
   * @returns The hash to notarize (the signed intent hash)
   */
  get hashToNotarize() {
    return this.signedIntentHash.hash;
  }
  /**
   * @returns The transaction identifier (also known as the intent hash) of the transaction.
   */
  get transactionId() {
    return this.intentHash;
  }
  toByteArray() {
    return this.compiledSignedIntent;
  }
  async compileNotarizedAsync(source) {
    const notarySignature = await source(this.hashToNotarize);
    return this.compileNotarizedInternal(notarySignature);
  }
  compileNotarized(source) {
    const notarySignature = resolveSignatureSource(
      source,
      this.hashToNotarize,
      (signerResponse) => {
        switch (signerResponse.curve) {
          case "Secp256k1":
            return new Signature.Secp256k1(signerResponse.signature);
          case "Ed25519":
            return new Signature.Ed25519(signerResponse.signature);
        }
      }
    );
    return this.compileNotarizedInternal(notarySignature);
  }
  compileNotarizedInternal(notarySignature) {
    const notarizedTransaction = {
      signedIntent: this.signedIntent,
      notarySignature
    };
    const [compiledNotarizedTransaction, notarizedPayloadHash] = (() => {
      const input = GeneratedConverter.NotarizedTransaction.toGenerated(
        notarizedTransaction
      );
      const compiled = Convert.HexString.toUint8Array(
        this.retWrapper.notarizedTransactionCompile(input)
      );
      const hash3 = GeneratedConverter.TransactionHash.fromGenerated(
        this.retWrapper.notarizedTransactionHash(input)
      );
      return [compiled, hash3];
    })();
    return new CompiledNotarizedTransaction(
      this.intentHash,
      compiledNotarizedTransaction,
      notarizedPayloadHash
    );
  }
  /**
   * @returns The transaction identifier (also known as the intent hash) of the transaction, encoded into hex.
   */
  intentHashHex() {
    return Convert.Uint8Array.toHexString(this.intentHash.hash);
  }
  /**
   * Decompiles and summarizes a compiled intent extracting information such as locked fees,
   * deposits, and withdrawals.
   */
  summarizeTransaction() {
    return LTSRadixEngineToolkit.Transaction.summarizeTransaction(this);
  }
}
class CompiledNotarizedTransaction {
  constructor(intentHash, compiled, notarizedPayloadHash) {
    __publicField(this, "compiled");
    __publicField(this, "intentHash");
    __publicField(this, "notarizedPayloadHash");
    this.intentHash = intentHash;
    this.compiled = compiled;
    this.notarizedPayloadHash = notarizedPayloadHash;
  }
  compiledIntent() {
    return RadixEngineToolkit.NotarizedTransaction.decompile(
      this.compiled
    ).then(
      (decompiled) => new LTSNotarizedTransaction(decompiled).compiledIntent()
    );
  }
  /**
   * @returns The transaction identifier (also known as the intent hash) of the transaction.
   */
  get transactionId() {
    return this.intentHash;
  }
  toByteArray() {
    return this.compiled;
  }
  toHex() {
    return Convert.Uint8Array.toHexString(this.compiled);
  }
  /**
   * @returns The transaction identifier (also known as the intent hash) of the transaction, encoded into hex.
   */
  intentHashHex() {
    return Convert.Uint8Array.toHexString(this.intentHash.hash);
  }
  /**
   * @returns The transaction identifier (also known as the intent hash) of the transaction, encoded into hex.
   */
  transactionIdHex() {
    return this.intentHashHex();
  }
  /**
   * @returns The (notarized) payload hash, encoded into hex.
   */
  notarizedPayloadHashHex() {
    return Convert.Uint8Array.toHexString(this.notarizedPayloadHash.hash);
  }
  async staticallyValidate(networkId) {
    return RadixEngineToolkit.NotarizedTransaction.decompile(this.compiled).then(
      (decompiled) => RadixEngineToolkit.NotarizedTransaction.staticallyValidate(
        decompiled,
        defaultValidationConfig(networkId)
      )
    ).then((validity) => {
      switch (validity.kind) {
        case "Valid":
          return {
            isValid: true,
            errorMessage: void 0,
            throwIfInvalid: () => {
            }
          };
        case "Invalid":
          return {
            isValid: false,
            errorMessage: validity.error,
            throwIfInvalid: () => {
              throw new Error(
                `Static validation failed with error: ${validity.error}`
              );
            }
          };
      }
    });
  }
  /**
   * Summarizes a compiled intent extracting information such as locked fees, deposits, and
   * withdrawals.
   */
  summarizeTransaction() {
    return LTSRadixEngineToolkit.Transaction.summarizeTransaction(this);
  }
}
const resolveBytes$1 = (bytes2) => {
  if (typeof bytes2 === "string") {
    return Convert.HexString.toUint8Array(bytes2);
  } else if (bytes2.constructor === Uint8Array) {
    return bytes2;
  } else {
    throw new Error(
      "Resolution of bytes can only happen on a HexString or a Uint8Array."
    );
  }
};
const resolveBytesAndCheckLength$1 = (bytes2, expectedLength) => {
  const resolvedBytes = resolveBytes$1(bytes2);
  if (resolvedBytes.length != expectedLength) {
    throw new Error(
      `Expected bytes of length ${expectedLength} but was actually: ${resolvedBytes.length}`
    );
  }
  return resolvedBytes;
};
const destructManifestValueTuple = (value) => {
  switch (value.kind) {
    case "Tuple":
      return value.fields;
    default:
      throw new Error("Can't destruct a manifest value that is not a tuple");
  }
};
const isLockFeeCallMethod = async (instruction, faucetComponentAddress) => {
  switch (instruction.address.kind) {
    case "Static":
      const entityType = await RadixEngineToolkit.Address.entityType(
        instruction.address.value
      );
      const isAddressAccepted = entityType === EntityType.GlobalAccount || entityType === EntityType.GlobalVirtualEd25519Account || entityType === EntityType.GlobalVirtualSecp256k1Account || instruction.address.value === faucetComponentAddress;
      const isMethodNameAccepted = instruction.methodName === "lock_fee";
      return isMethodNameAccepted && isAddressAccepted;
    case "Named":
      return false;
  }
};
const isFreeXrdCallMethod = async (instruction, faucetComponentAddress) => {
  switch (instruction.address.kind) {
    case "Static":
      await RadixEngineToolkit.Address.entityType(
        instruction.address.value
      );
      const isAddressAccepted = instruction.address.value === faucetComponentAddress;
      const isMethodNameAccepted = instruction.methodName === "free";
      return isMethodNameAccepted && isAddressAccepted;
    case "Named":
      return false;
  }
};
const isAccountWithdrawCallMethod = async (instruction) => {
  switch (instruction.address.kind) {
    case "Static":
      const entityType = await RadixEngineToolkit.Address.entityType(
        instruction.address.value
      );
      const isAddressAccepted = entityType === EntityType.GlobalAccount || entityType === EntityType.GlobalVirtualEd25519Account || entityType === EntityType.GlobalVirtualSecp256k1Account;
      const isMethodNameAccepted = instruction.methodName === "withdraw";
      return isMethodNameAccepted && isAddressAccepted;
    case "Named":
      return false;
  }
};
const isAccountDepositCallMethod = async (instruction) => {
  switch (instruction.address.kind) {
    case "Static":
      const entityType = await RadixEngineToolkit.Address.entityType(
        instruction.address.value
      );
      const isAddressAccepted = entityType === EntityType.GlobalAccount || entityType === EntityType.GlobalVirtualEd25519Account || entityType === EntityType.GlobalVirtualSecp256k1Account;
      const isMethodNameAccepted = instruction.methodName === "try_deposit_or_abort" || instruction.methodName === "deposit";
      return isMethodNameAccepted && isAddressAccepted;
    case "Named":
      return false;
  }
};
const castValue = (value, kind) => {
  if (value.kind === kind) {
    return value;
  } else {
    throw Error(`Failed to cast value to value of kind: ${kind}`);
  }
};
var EntityType = /* @__PURE__ */ ((EntityType2) => {
  EntityType2["GlobalPackage"] = "GlobalPackage";
  EntityType2["GlobalConsensusManager"] = "GlobalConsensusManager";
  EntityType2["GlobalValidator"] = "GlobalValidator";
  EntityType2["GlobalTransactionTracker"] = "GlobalTransactionTracker";
  EntityType2["GlobalGenericComponent"] = "GlobalGenericComponent";
  EntityType2["GlobalAccount"] = "GlobalAccount";
  EntityType2["GlobalIdentity"] = "GlobalIdentity";
  EntityType2["GlobalAccessController"] = "GlobalAccessController";
  EntityType2["GlobalOneResourcePool"] = "GlobalOneResourcePool";
  EntityType2["GlobalTwoResourcePool"] = "GlobalTwoResourcePool";
  EntityType2["GlobalMultiResourcePool"] = "GlobalMultiResourcePool";
  EntityType2["GlobalVirtualSecp256k1Account"] = "GlobalVirtualSecp256k1Account";
  EntityType2["GlobalVirtualSecp256k1Identity"] = "GlobalVirtualSecp256k1Identity";
  EntityType2["GlobalVirtualEd25519Account"] = "GlobalVirtualEd25519Account";
  EntityType2["GlobalVirtualEd25519Identity"] = "GlobalVirtualEd25519Identity";
  EntityType2["GlobalFungibleResourceManager"] = "GlobalFungibleResourceManager";
  EntityType2["InternalFungibleVault"] = "InternalFungibleVault";
  EntityType2["GlobalNonFungibleResourceManager"] = "GlobalNonFungibleResourceManager";
  EntityType2["InternalNonFungibleVault"] = "InternalNonFungibleVault";
  EntityType2["InternalGenericComponent"] = "InternalGenericComponent";
  EntityType2["InternalKeyValueStore"] = "InternalKeyValueStore";
  return EntityType2;
})(EntityType || {});
const ED25519_SIGNATURE_LENGTH = 64;
const SECP256K1_SIGNATURE_LENGTH = 65;
const ED25519_PUBLIC_KEY_LENGTH = 32;
const SECP256K1_PUBLIC_KEY_LENGTH = 33;
const ED25519_PRIVATE_KEY_LENGTH = 32;
const SECP256K1_PRIVATE_KEY_LENGTH = 32;
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const P = 2n ** 255n - 19n;
const N = 2n ** 252n + 27742317777372353535851937790883648493n;
const Gx = 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an;
const Gy = 0x6666666666666666666666666666666666666666666666666666666666666658n;
const CURVE = {
  a: -1n,
  d: 37095705934669439343138083508754565189542113879843219016388785533085940283555n,
  p: P,
  n: N,
  h: 8,
  Gx,
  Gy
  // field prime, curve (group) order, cofactor
};
const err = (m2 = "") => {
  throw new Error(m2);
};
const str = (s2) => typeof s2 === "string";
const au8 = (a, l) => (
  // is Uint8Array (of specific length)
  !(a instanceof Uint8Array) || typeof l === "number" && l > 0 && a.length !== l ? err("Uint8Array expected") : a
);
const u8n = (data) => new Uint8Array(data);
const toU8 = (a, len) => au8(str(a) ? h2b(a) : u8n(a), len);
const mod = (a, b = P) => {
  let r2 = a % b;
  return r2 >= 0n ? r2 : b + r2;
};
const isPoint = (p) => p instanceof Point$3 ? p : err("Point expected");
let Gpows = void 0;
let Point$3 = class Point {
  constructor(ex, ey, ez, et) {
    this.ex = ex;
    this.ey = ey;
    this.ez = ez;
    this.et = et;
  }
  static fromAffine(p) {
    return new Point(p.x, p.y, 1n, mod(p.x * p.y));
  }
  static fromHex(hex, strict = true) {
    const { d } = CURVE;
    hex = toU8(hex, 32);
    const normed = hex.slice();
    normed[31] = hex[31] & ~128;
    const y = b2n_LE(normed);
    if (y === 0n)
      ;
    else {
      if (strict && !(0n < y && y < P))
        err("bad y coord 1");
      if (!strict && !(0n < y && y < 2n ** 256n))
        err("bad y coord 2");
    }
    const y2 = mod(y * y);
    const u = mod(y2 - 1n);
    const v2 = mod(d * y2 + 1n);
    let { isValid, value: x } = uvRatio(u, v2);
    if (!isValid)
      err("bad y coordinate 3");
    const isXOdd = (x & 1n) === 1n;
    const isHeadOdd = (hex[31] & 128) !== 0;
    if (isHeadOdd !== isXOdd)
      x = mod(-x);
    return new Point(x, y, 1n, mod(x * y));
  }
  get x() {
    return this.toAffine().x;
  }
  // .x, .y will call expensive toAffine.
  get y() {
    return this.toAffine().y;
  }
  // Should be used with care.
  equals(other) {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const { ex: X2, ey: Y2, ez: Z2 } = isPoint(other);
    const X1Z2 = mod(X1 * Z2), X2Z1 = mod(X2 * Z1);
    const Y1Z2 = mod(Y1 * Z2), Y2Z1 = mod(Y2 * Z1);
    return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
  }
  is0() {
    return this.equals(I);
  }
  negate() {
    return new Point(mod(-this.ex), this.ey, this.ez, mod(-this.et));
  }
  double() {
    const { ex: X1, ey: Y1, ez: Z1 } = this;
    const { a } = CURVE;
    const A = mod(X1 * X1);
    const B = mod(Y1 * Y1);
    const C = mod(2n * mod(Z1 * Z1));
    const D = mod(a * A);
    const x1y1 = X1 + Y1;
    const E = mod(mod(x1y1 * x1y1) - A - B);
    const G2 = D + B;
    const F = G2 - C;
    const H = D - B;
    const X3 = mod(E * F);
    const Y3 = mod(G2 * H);
    const T3 = mod(E * H);
    const Z3 = mod(F * G2);
    return new Point(X3, Y3, Z3, T3);
  }
  add(other) {
    const { ex: X1, ey: Y1, ez: Z1, et: T1 } = this;
    const { ex: X2, ey: Y2, ez: Z2, et: T2 } = isPoint(other);
    const { a, d } = CURVE;
    const A = mod(X1 * X2);
    const B = mod(Y1 * Y2);
    const C = mod(T1 * d * T2);
    const D = mod(Z1 * Z2);
    const E = mod((X1 + Y1) * (X2 + Y2) - A - B);
    const F = mod(D - C);
    const G2 = mod(D + C);
    const H = mod(B - a * A);
    const X3 = mod(E * F);
    const Y3 = mod(G2 * H);
    const T3 = mod(E * H);
    const Z3 = mod(F * G2);
    return new Point(X3, Y3, Z3, T3);
  }
  mul(n, safe = true) {
    if (n === 0n)
      return safe === true ? err("cannot multiply by 0") : I;
    if (!(typeof n === "bigint" && 0n < n && n < N))
      err("invalid scalar, must be < L");
    if (!safe && this.is0() || n === 1n)
      return this;
    if (this.equals(G))
      return wNAF(n).p;
    let p = I, f2 = G;
    for (let d = this; n > 0n; d = d.double(), n >>= 1n) {
      if (n & 1n)
        p = p.add(d);
      else if (safe)
        f2 = f2.add(d);
    }
    return p;
  }
  multiply(scalar) {
    return this.mul(scalar);
  }
  // Aliases for compatibilty
  clearCofactor() {
    return this.mul(BigInt(CURVE.h), false);
  }
  // multiply by cofactor
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  // check if P is small order
  isTorsionFree() {
    let p = this.mul(N / 2n, false).double();
    if (N % 2n)
      p = p.add(this);
    return p.is0();
  }
  toAffine() {
    const { ex: x, ey: y, ez: z } = this;
    if (this.is0())
      return { x: 0n, y: 0n };
    const iz = invert(z);
    if (mod(z * iz) !== 1n)
      err("invalid inverse");
    return { x: mod(x * iz), y: mod(y * iz) };
  }
  toRawBytes() {
    const { x, y } = this.toAffine();
    const b = n2b_32LE(y);
    b[31] |= x & 1n ? 128 : 0;
    return b;
  }
  toHex() {
    return b2h(this.toRawBytes());
  }
  // encode to hex string
};
Point$3.BASE = new Point$3(Gx, Gy, 1n, mod(Gx * Gy));
Point$3.ZERO = new Point$3(0n, 1n, 1n, 0n);
const { BASE: G, ZERO: I } = Point$3;
const padh = (num, pad2) => num.toString(16).padStart(pad2, "0");
const b2h = (b) => Array.from(b).map((e) => padh(e, 2)).join("");
const h2b = (hex) => {
  const l = hex.length;
  if (!str(hex) || l % 2)
    err("hex invalid 1");
  const arr = u8n(l / 2);
  for (let i = 0; i < arr.length; i++) {
    const j = i * 2;
    const h = hex.slice(j, j + 2);
    const b = Number.parseInt(h, 16);
    if (Number.isNaN(b) || b < 0)
      err("hex invalid 2");
    arr[i] = b;
  }
  return arr;
};
const n2b_32LE = (num) => h2b(padh(num, 32 * 2)).reverse();
const b2n_LE = (b) => BigInt("0x" + b2h(u8n(au8(b)).reverse()));
const concatB = (...arrs) => {
  const r2 = u8n(arrs.reduce((sum2, a) => sum2 + au8(a).length, 0));
  let pad2 = 0;
  arrs.forEach((a) => {
    r2.set(a, pad2);
    pad2 += a.length;
  });
  return r2;
};
const invert = (num, md = P) => {
  if (num === 0n || md <= 0n)
    err("no inverse n=" + num + " mod=" + md);
  let a = mod(num, md), b = md, x = 0n, u = 1n;
  while (a !== 0n) {
    const q = b / a, r2 = b % a;
    const m2 = x - u * q;
    b = a, a = r2, x = u, u = m2;
  }
  return b === 1n ? mod(x, md) : err("no inverse");
};
const pow2 = (x, power) => {
  let r2 = x;
  while (power-- > 0n) {
    r2 *= r2;
    r2 %= P;
  }
  return r2;
};
const pow_2_252_3 = (x) => {
  const x2 = x * x % P;
  const b2 = x2 * x % P;
  const b4 = pow2(b2, 2n) * b2 % P;
  const b5 = pow2(b4, 1n) * x % P;
  const b10 = pow2(b5, 5n) * b5 % P;
  const b20 = pow2(b10, 10n) * b10 % P;
  const b40 = pow2(b20, 20n) * b20 % P;
  const b80 = pow2(b40, 40n) * b40 % P;
  const b160 = pow2(b80, 80n) * b80 % P;
  const b240 = pow2(b160, 80n) * b80 % P;
  const b250 = pow2(b240, 10n) * b10 % P;
  const pow_p_5_8 = pow2(b250, 2n) * x % P;
  return { pow_p_5_8, b2 };
};
const RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
const uvRatio = (u, v2) => {
  const v3 = mod(v2 * v2 * v2);
  const v7 = mod(v3 * v3 * v2);
  const pow3 = pow_2_252_3(u * v7).pow_p_5_8;
  let x = mod(u * v3 * pow3);
  const vx2 = mod(v2 * x * x);
  const root1 = x;
  const root2 = mod(x * RM1);
  const useRoot1 = vx2 === u;
  const useRoot2 = vx2 === mod(-u);
  const noRoot = vx2 === mod(-u * RM1);
  if (useRoot1)
    x = root1;
  if (useRoot2 || noRoot)
    x = root2;
  if ((mod(x) & 1n) === 1n)
    x = mod(-x);
  return { isValid: useRoot1 || useRoot2, value: x };
};
const modL_LE = (hash3) => mod(b2n_LE(hash3), N);
let _shaS;
const sha512a = (...m2) => etc.sha512Async(...m2);
const sha512s = (...m2) => (
  // Sync SHA512, not set by default
  typeof _shaS === "function" ? _shaS(...m2) : err("etc.sha512Sync not set")
);
const hash2extK = (hashed) => {
  const head = hashed.slice(0, 32);
  head[0] &= 248;
  head[31] &= 127;
  head[31] |= 64;
  const prefix = hashed.slice(32, 64);
  const scalar = modL_LE(head);
  const point5 = G.mul(scalar);
  const pointBytes = point5.toRawBytes();
  return { head, prefix, scalar, point: point5, pointBytes };
};
const getExtendedPublicKey = (priv2) => hash2extK(sha512s(toU8(priv2, 32)));
const getPublicKey = (priv2) => getExtendedPublicKey(priv2).pointBytes;
function hashFinish(asynchronous, res) {
  if (asynchronous)
    return sha512a(res.hashable).then(res.finish);
  return res.finish(sha512s(res.hashable));
}
const _sign = (e, rBytes, msg) => {
  const { pointBytes: P2, scalar: s2 } = e;
  const r2 = modL_LE(rBytes);
  const R2 = G.mul(r2).toRawBytes();
  const hashable = concatB(R2, P2, msg);
  const finish = (hashed) => {
    const S2 = mod(r2 + modL_LE(hashed) * s2, N);
    return au8(concatB(R2, n2b_32LE(S2)), 64);
  };
  return { hashable, finish };
};
const sign = (msg, privKey) => {
  const m2 = toU8(msg);
  const e = getExtendedPublicKey(privKey);
  const rBytes = sha512s(e.prefix, m2);
  return hashFinish(false, _sign(e, rBytes, m2));
};
const cr = () => (
  // We support: 1) browsers 2) node.js 19+
  typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0
);
const etc = {
  bytesToHex: b2h,
  hexToBytes: h2b,
  concatBytes: concatB,
  mod,
  invert,
  randomBytes: (len) => {
    const crypto2 = cr();
    if (!crypto2)
      err("crypto.getRandomValues must be defined");
    return crypto2.getRandomValues(u8n(len));
  },
  sha512Async: async (...messages) => {
    const crypto2 = cr();
    if (!crypto2)
      err("crypto.subtle or etc.sha512Async must be defined");
    const m2 = concatB(...messages);
    return u8n(await crypto2.subtle.digest("SHA-512", m2.buffer));
  },
  sha512Sync: void 0
  // Actual logic below
};
Object.defineProperties(etc, { sha512Sync: {
  configurable: false,
  get() {
    return _shaS;
  },
  set(f2) {
    if (!_shaS)
      _shaS = f2;
  }
} });
const W = 8;
const precompute = () => {
  const points = [];
  const windows = 256 / W + 1;
  let p = G, b = p;
  for (let w = 0; w < windows; w++) {
    b = p;
    points.push(b);
    for (let i = 1; i < 2 ** (W - 1); i++) {
      b = b.add(p);
      points.push(b);
    }
    p = b.double();
  }
  return points;
};
const wNAF = (n) => {
  const comp = Gpows || (Gpows = precompute());
  const neg4 = (cnd, p2) => {
    let n2 = p2.negate();
    return cnd ? n2 : p2;
  };
  let p = I, f2 = G;
  const windows = 1 + 256 / W;
  const wsize = 2 ** (W - 1);
  const mask = BigInt(2 ** W - 1);
  const maxNum = 2 ** W;
  const shiftBy = BigInt(W);
  for (let w = 0; w < windows; w++) {
    const off = w * wsize;
    let wbits = Number(n & mask);
    n >>= shiftBy;
    if (wbits > wsize) {
      wbits -= maxNum;
      n += 1n;
    }
    const off1 = off, off2 = off + Math.abs(wbits) - 1;
    const cnd1 = w % 2 !== 0, cnd2 = wbits < 0;
    if (wbits === 0) {
      f2 = f2.add(neg4(cnd1, comp[off1]));
    } else {
      p = p.add(neg4(cnd2, comp[off2]));
    }
  }
  return { p, f: f2 };
};
function number(n) {
  if (!Number.isSafeInteger(n) || n < 0)
    throw new Error(`Wrong positive integer: ${n}`);
}
function bool(b) {
  if (typeof b !== "boolean")
    throw new Error(`Expected boolean, not ${b}`);
}
function bytes(b, ...lengths) {
  if (!(b instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b.length}`);
}
function hash$4(hash3) {
  if (typeof hash3 !== "function" || typeof hash3.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash3.outputLen);
  number(hash3.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min2 = instance.outputLen;
  if (out.length < min2) {
    throw new Error(`digestInto() expects output buffer of length at least ${min2}`);
  }
}
const assert$h = {
  number,
  bool,
  bytes,
  hash: hash$4,
  exists,
  output
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (v2, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes(str2) {
  if (typeof str2 !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str2}`);
  }
  return new TextEncoder().encode(str2);
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh, isLE2);
  view.setUint32(byteOffset + l, wl, isLE2);
}
class SHA2 extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    assert$h.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert$h.exists(this);
    assert$h.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    const len = this.outputLen;
    if (len % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const outLen = len / 4;
    const state = this.get();
    if (outLen > state.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let i = 0; i < outLen; i++)
      oview.setUint32(4 * i, state[i], isLE2);
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
function fromBig(n, le = false) {
  if (le)
    return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
  return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
}
function split(lst, le = false) {
  let Ah = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l } = fromBig(lst[i], le);
    [Ah[i], Al[i]] = [h, l];
  }
  return [Ah, Al];
}
const toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
const shrSH = (h, l, s2) => h >>> s2;
const shrSL = (h, l, s2) => h << 32 - s2 | l >>> s2;
const rotrSH = (h, l, s2) => h >>> s2 | l << 32 - s2;
const rotrSL = (h, l, s2) => h << 32 - s2 | l >>> s2;
const rotrBH = (h, l, s2) => h << 64 - s2 | l >>> s2 - 32;
const rotrBL = (h, l, s2) => h >>> s2 - 32 | l << 64 - s2;
const rotr32H = (h, l) => l;
const rotr32L = (h, l) => h;
const rotlSH = (h, l, s2) => h << s2 | l >>> 32 - s2;
const rotlSL = (h, l, s2) => l << s2 | h >>> 32 - s2;
const rotlBH = (h, l, s2) => l << s2 - 32 | h >>> 64 - s2;
const rotlBL = (h, l, s2) => h << s2 - 32 | l >>> 64 - s2;
function add(Ah, Al, Bh, Bl) {
  const l = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
}
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
const u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
const [SHA512_Kh, SHA512_Kl] = u64.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n) => BigInt(n)));
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
let SHA512$2 = class SHA512 extends SHA2 {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    return [Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl];
  }
  // prettier-ignore
  set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl) {
    this.Ah = Ah | 0;
    this.Al = Al | 0;
    this.Bh = Bh | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh | 0;
    this.El = El | 0;
    this.Fh = Fh | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
      const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
      const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
      const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64.rotrSH(Eh, El, 14) ^ u64.rotrSH(Eh, El, 18) ^ u64.rotrBH(Eh, El, 41);
      const sigma1l = u64.rotrSL(Eh, El, 14) ^ u64.rotrSL(Eh, El, 18) ^ u64.rotrBL(Eh, El, 41);
      const CHIh = Eh & Fh ^ ~Eh & Gh;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64.add5H(T1ll, Hh, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64.rotrSH(Ah, Al, 28) ^ u64.rotrBH(Ah, Al, 34) ^ u64.rotrBH(Ah, Al, 39);
      const sigma0l = u64.rotrSL(Ah, Al, 28) ^ u64.rotrBL(Ah, Al, 34) ^ u64.rotrBL(Ah, Al, 39);
      const MAJh = Ah & Bh ^ Ah & Ch ^ Bh & Ch;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh = Gh | 0;
      Hl = Gl | 0;
      Gh = Fh | 0;
      Gl = Fl | 0;
      Fh = Eh | 0;
      Fl = El | 0;
      ({ h: Eh, l: El } = u64.add(Dh | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh = Ch | 0;
      Dl = Cl | 0;
      Ch = Bh | 0;
      Cl = Bl | 0;
      Bh = Ah | 0;
      Bl = Al | 0;
      const All = u64.add3L(T1l, sigma0l, MAJl);
      Ah = u64.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah | 0, Al | 0));
    ({ h: Bh, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh | 0, Bl | 0));
    ({ h: Ch, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch | 0, Cl | 0));
    ({ h: Dh, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh | 0, Dl | 0));
    ({ h: Eh, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh | 0, El | 0));
    ({ h: Fh, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh | 0, Fl | 0));
    ({ h: Gh, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh | 0, Gl | 0));
    ({ h: Hh, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh | 0, Hl | 0));
    this.set(Ah, Al, Bh, Bl, Ch, Cl, Dh, Dl, Eh, El, Fh, Fl, Gh, Gl, Hh, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
class SHA512_224 extends SHA512$2 {
  constructor() {
    super();
    this.Ah = 2352822216 | 0;
    this.Al = 424955298 | 0;
    this.Bh = 1944164710 | 0;
    this.Bl = 2312950998 | 0;
    this.Ch = 502970286 | 0;
    this.Cl = 855612546 | 0;
    this.Dh = 1738396948 | 0;
    this.Dl = 1479516111 | 0;
    this.Eh = 258812777 | 0;
    this.El = 2077511080 | 0;
    this.Fh = 2011393907 | 0;
    this.Fl = 79989058 | 0;
    this.Gh = 1067287976 | 0;
    this.Gl = 1780299464 | 0;
    this.Hh = 286451373 | 0;
    this.Hl = 2446758561 | 0;
    this.outputLen = 28;
  }
}
class SHA512_256 extends SHA512$2 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
}
let SHA384$1 = class SHA384 extends SHA512$2 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
};
const sha512 = wrapConstructor(() => new SHA512$2());
wrapConstructor(() => new SHA512_224());
wrapConstructor(() => new SHA512_256());
wrapConstructor(() => new SHA384$1());
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule)
    return n;
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        var args = [null];
        args.push.apply(args, arguments);
        var Ctor = Function.bind.apply(f2, args);
        return new Ctor();
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
const errors = {
  IMPOSSIBLE_CASE: "Impossible case. Please create issue.",
  TWEAK_ADD: "The tweak was out of range or the resulted private key is invalid",
  TWEAK_MUL: "The tweak was out of range or equal to zero",
  CONTEXT_RANDOMIZE_UNKNOW: "Unknow error on context randomization",
  SECKEY_INVALID: "Private Key is invalid",
  PUBKEY_PARSE: "Public Key could not be parsed",
  PUBKEY_SERIALIZE: "Public Key serialization error",
  PUBKEY_COMBINE: "The sum of the public keys is not valid",
  SIG_PARSE: "Signature could not be parsed",
  SIGN: "The nonce generation function failed, or the private key was invalid",
  RECOVER: "Public key could not be recover",
  ECDH: "Scalar was invalid (zero or overflow)"
};
function assert$g(cond, msg) {
  if (!cond)
    throw new Error(msg);
}
function isUint8Array(name2, value, length) {
  assert$g(value instanceof Uint8Array, `Expected ${name2} to be an Uint8Array`);
  if (length !== void 0) {
    if (Array.isArray(length)) {
      const numbers = length.join(", ");
      const msg = `Expected ${name2} to be an Uint8Array with length [${numbers}]`;
      assert$g(length.includes(value.length), msg);
    } else {
      const msg = `Expected ${name2} to be an Uint8Array with length ${length}`;
      assert$g(value.length === length, msg);
    }
  }
}
function isCompressed(value) {
  assert$g(toTypeString(value) === "Boolean", "Expected compressed to be a Boolean");
}
function getAssertedOutput(output2 = (len) => new Uint8Array(len), length) {
  if (typeof output2 === "function")
    output2 = output2(length);
  isUint8Array("output", output2, length);
  return output2;
}
function toTypeString(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
var lib = (secp256k12) => {
  return {
    contextRandomize(seed) {
      assert$g(
        seed === null || seed instanceof Uint8Array,
        "Expected seed to be an Uint8Array or null"
      );
      if (seed !== null)
        isUint8Array("seed", seed, 32);
      switch (secp256k12.contextRandomize(seed)) {
        case 1:
          throw new Error(errors.CONTEXT_RANDOMIZE_UNKNOW);
      }
    },
    privateKeyVerify(seckey) {
      isUint8Array("private key", seckey, 32);
      return secp256k12.privateKeyVerify(seckey) === 0;
    },
    privateKeyNegate(seckey) {
      isUint8Array("private key", seckey, 32);
      switch (secp256k12.privateKeyNegate(seckey)) {
        case 0:
          return seckey;
        case 1:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },
    privateKeyTweakAdd(seckey, tweak) {
      isUint8Array("private key", seckey, 32);
      isUint8Array("tweak", tweak, 32);
      switch (secp256k12.privateKeyTweakAdd(seckey, tweak)) {
        case 0:
          return seckey;
        case 1:
          throw new Error(errors.TWEAK_ADD);
      }
    },
    privateKeyTweakMul(seckey, tweak) {
      isUint8Array("private key", seckey, 32);
      isUint8Array("tweak", tweak, 32);
      switch (secp256k12.privateKeyTweakMul(seckey, tweak)) {
        case 0:
          return seckey;
        case 1:
          throw new Error(errors.TWEAK_MUL);
      }
    },
    publicKeyVerify(pubkey) {
      isUint8Array("public key", pubkey, [33, 65]);
      return secp256k12.publicKeyVerify(pubkey) === 0;
    },
    publicKeyCreate(seckey, compressed = true, output2) {
      isUint8Array("private key", seckey, 32);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyCreate(output2, seckey)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.SECKEY_INVALID);
        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },
    publicKeyConvert(pubkey, compressed = true, output2) {
      isUint8Array("public key", pubkey, [33, 65]);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyConvert(output2, pubkey)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },
    publicKeyNegate(pubkey, compressed = true, output2) {
      isUint8Array("public key", pubkey, [33, 65]);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyNegate(output2, pubkey)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },
    publicKeyCombine(pubkeys, compressed = true, output2) {
      assert$g(Array.isArray(pubkeys), "Expected public keys to be an Array");
      assert$g(pubkeys.length > 0, "Expected public keys array will have more than zero items");
      for (const pubkey of pubkeys) {
        isUint8Array("public key", pubkey, [33, 65]);
      }
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyCombine(output2, pubkeys)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.PUBKEY_COMBINE);
        case 3:
          throw new Error(errors.PUBKEY_SERIALIZE);
      }
    },
    publicKeyTweakAdd(pubkey, tweak, compressed = true, output2) {
      isUint8Array("public key", pubkey, [33, 65]);
      isUint8Array("tweak", tweak, 32);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyTweakAdd(output2, pubkey, tweak)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.TWEAK_ADD);
      }
    },
    publicKeyTweakMul(pubkey, tweak, compressed = true, output2) {
      isUint8Array("public key", pubkey, [33, 65]);
      isUint8Array("tweak", tweak, 32);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.publicKeyTweakMul(output2, pubkey, tweak)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.TWEAK_MUL);
      }
    },
    signatureNormalize(sig) {
      isUint8Array("signature", sig, 64);
      switch (secp256k12.signatureNormalize(sig)) {
        case 0:
          return sig;
        case 1:
          throw new Error(errors.SIG_PARSE);
      }
    },
    signatureExport(sig, output2) {
      isUint8Array("signature", sig, 64);
      output2 = getAssertedOutput(output2, 72);
      const obj = { output: output2, outputlen: 72 };
      switch (secp256k12.signatureExport(obj, sig)) {
        case 0:
          return output2.slice(0, obj.outputlen);
        case 1:
          throw new Error(errors.SIG_PARSE);
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },
    signatureImport(sig, output2) {
      isUint8Array("signature", sig);
      output2 = getAssertedOutput(output2, 64);
      switch (secp256k12.signatureImport(output2, sig)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.SIG_PARSE);
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },
    ecdsaSign(msg32, seckey, options = {}, output2) {
      isUint8Array("message", msg32, 32);
      isUint8Array("private key", seckey, 32);
      assert$g(toTypeString(options) === "Object", "Expected options to be an Object");
      if (options.data !== void 0)
        isUint8Array("options.data", options.data);
      if (options.noncefn !== void 0)
        assert$g(toTypeString(options.noncefn) === "Function", "Expected options.noncefn to be a Function");
      output2 = getAssertedOutput(output2, 64);
      const obj = { signature: output2, recid: null };
      switch (secp256k12.ecdsaSign(obj, msg32, seckey, options.data, options.noncefn)) {
        case 0:
          return obj;
        case 1:
          throw new Error(errors.SIGN);
        case 2:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },
    ecdsaVerify(sig, msg32, pubkey) {
      isUint8Array("signature", sig, 64);
      isUint8Array("message", msg32, 32);
      isUint8Array("public key", pubkey, [33, 65]);
      switch (secp256k12.ecdsaVerify(sig, msg32, pubkey)) {
        case 0:
          return true;
        case 3:
          return false;
        case 1:
          throw new Error(errors.SIG_PARSE);
        case 2:
          throw new Error(errors.PUBKEY_PARSE);
      }
    },
    ecdsaRecover(sig, recid, msg32, compressed = true, output2) {
      isUint8Array("signature", sig, 64);
      assert$g(
        toTypeString(recid) === "Number" && recid >= 0 && recid <= 3,
        "Expected recovery id to be a Number within interval [0, 3]"
      );
      isUint8Array("message", msg32, 32);
      isCompressed(compressed);
      output2 = getAssertedOutput(output2, compressed ? 33 : 65);
      switch (secp256k12.ecdsaRecover(output2, sig, recid, msg32)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.SIG_PARSE);
        case 2:
          throw new Error(errors.RECOVER);
        case 3:
          throw new Error(errors.IMPOSSIBLE_CASE);
      }
    },
    ecdh(pubkey, seckey, options = {}, output2) {
      isUint8Array("public key", pubkey, [33, 65]);
      isUint8Array("private key", seckey, 32);
      assert$g(toTypeString(options) === "Object", "Expected options to be an Object");
      if (options.data !== void 0)
        isUint8Array("options.data", options.data);
      if (options.hashfn !== void 0) {
        assert$g(toTypeString(options.hashfn) === "Function", "Expected options.hashfn to be a Function");
        if (options.xbuf !== void 0)
          isUint8Array("options.xbuf", options.xbuf, 32);
        if (options.ybuf !== void 0)
          isUint8Array("options.ybuf", options.ybuf, 32);
        isUint8Array("output", output2);
      } else {
        output2 = getAssertedOutput(output2, 32);
      }
      switch (secp256k12.ecdh(output2, pubkey, seckey, options.data, options.hashfn, options.xbuf, options.ybuf)) {
        case 0:
          return output2;
        case 1:
          throw new Error(errors.PUBKEY_PARSE);
        case 2:
          throw new Error(errors.ECDH);
      }
    }
  };
};
var elliptic$2 = {};
const name = "elliptic";
const version = "6.5.4";
const description = "EC cryptography";
const main = "lib/elliptic.js";
const files = [
  "lib"
];
const scripts = {
  lint: "eslint lib test",
  "lint:fix": "npm run lint -- --fix",
  unit: "istanbul test _mocha --reporter=spec test/index.js",
  test: "npm run lint && npm run unit",
  version: "grunt dist && git add dist/"
};
const repository = {
  type: "git",
  url: "git@github.com:indutny/elliptic"
};
const keywords = [
  "EC",
  "Elliptic",
  "curve",
  "Cryptography"
];
const author = "Fedor Indutny <fedor@indutny.com>";
const license = "MIT";
const bugs = {
  url: "https://github.com/indutny/elliptic/issues"
};
const homepage = "https://github.com/indutny/elliptic";
const devDependencies = {
  brfs: "^2.0.2",
  coveralls: "^3.1.0",
  eslint: "^7.6.0",
  grunt: "^1.2.1",
  "grunt-browserify": "^5.3.0",
  "grunt-cli": "^1.3.2",
  "grunt-contrib-connect": "^3.0.0",
  "grunt-contrib-copy": "^1.0.0",
  "grunt-contrib-uglify": "^5.0.0",
  "grunt-mocha-istanbul": "^5.0.2",
  "grunt-saucelabs": "^9.0.1",
  istanbul: "^0.4.5",
  mocha: "^8.0.1"
};
const dependencies = {
  "bn.js": "^4.11.9",
  brorand: "^1.1.0",
  "hash.js": "^1.0.0",
  "hmac-drbg": "^1.0.1",
  inherits: "^2.0.4",
  "minimalistic-assert": "^1.0.1",
  "minimalistic-crypto-utils": "^1.0.1"
};
const require$$0$1 = {
  name,
  version,
  description,
  main,
  files,
  scripts,
  repository,
  keywords,
  author,
  license,
  bugs,
  homepage,
  devDependencies,
  dependencies
};
var utils$m = {};
var bnExports = {};
var bn = {
  get exports() {
    return bnExports;
  },
  set exports(v2) {
    bnExports = v2;
  }
};
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module) {
  (function(module2, exports) {
    function assert2(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number2, base2, endian) {
      if (BN2.isBN(number2)) {
        return number2;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number2 !== null) {
        if (base2 === "le" || base2 === "be") {
          endian = base2;
          base2 = 10;
        }
        this._init(number2 || 0, base2 || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
        Buffer2 = window.Buffer;
      } else {
        Buffer2 = require$$0.Buffer;
      }
    } catch (e) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max2(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN2.min = function min2(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN2.prototype._init = function init3(number2, base2, endian) {
      if (typeof number2 === "number") {
        return this._initNumber(number2, base2, endian);
      }
      if (typeof number2 === "object") {
        return this._initArray(number2, base2, endian);
      }
      if (base2 === "hex") {
        base2 = 16;
      }
      assert2(base2 === (base2 | 0) && base2 >= 2 && base2 <= 36);
      number2 = number2.toString().replace(/\s+/g, "");
      var start = 0;
      if (number2[0] === "-") {
        start++;
        this.negative = 1;
      }
      if (start < number2.length) {
        if (base2 === 16) {
          this._parseHex(number2, start, endian);
        } else {
          this._parseBase(number2, base2, start);
          if (endian === "le") {
            this._initArray(this.toArray(), base2, endian);
          }
        }
      }
    };
    BN2.prototype._initNumber = function _initNumber(number2, base2, endian) {
      if (number2 < 0) {
        this.negative = 1;
        number2 = -number2;
      }
      if (number2 < 67108864) {
        this.words = [number2 & 67108863];
        this.length = 1;
      } else if (number2 < 4503599627370496) {
        this.words = [
          number2 & 67108863,
          number2 / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert2(number2 < 9007199254740992);
        this.words = [
          number2 & 67108863,
          number2 / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base2, endian);
    };
    BN2.prototype._initArray = function _initArray(number2, base2, endian) {
      assert2(typeof number2.length === "number");
      if (number2.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number2.length / 3);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j, w;
      var off = 0;
      if (endian === "be") {
        for (i = number2.length - 1, j = 0; i >= 0; i -= 3) {
          w = number2[i] | number2[i - 1] << 8 | number2[i - 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === "le") {
        for (i = 0, j = 0; i < number2.length; i += 3) {
          w = number2[i] | number2[i + 1] << 8 | number2[i + 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }
      return this.strip();
    };
    function parseHex4Bits(string, index) {
      var c = string.charCodeAt(index);
      if (c >= 65 && c <= 70) {
        return c - 55;
      } else if (c >= 97 && c <= 102) {
        return c - 87;
      } else {
        return c - 48 & 15;
      }
    }
    function parseHexByte(string, lowerBound, index) {
      var r2 = parseHex4Bits(string, index);
      if (index - 1 >= lowerBound) {
        r2 |= parseHex4Bits(string, index - 1) << 4;
      }
      return r2;
    }
    BN2.prototype._parseHex = function _parseHex(number2, start, endian) {
      this.length = Math.ceil((number2.length - start) / 6);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var off = 0;
      var j = 0;
      var w;
      if (endian === "be") {
        for (i = number2.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number2, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number2.length - start;
        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number2.length; i += 2) {
          w = parseHexByte(number2, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }
      this.strip();
    };
    function parseBase(str2, start, end, mul6) {
      var r2 = 0;
      var len = Math.min(str2.length, end);
      for (var i = start; i < len; i++) {
        var c = str2.charCodeAt(i) - 48;
        r2 *= mul6;
        if (c >= 49) {
          r2 += c - 49 + 10;
        } else if (c >= 17) {
          r2 += c - 17 + 10;
        } else {
          r2 += c;
        }
      }
      return r2;
    }
    BN2.prototype._parseBase = function _parseBase(number2, base2, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base2) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base2 | 0;
      var total = number2.length - start;
      var mod2 = total % limbLen;
      var end = Math.min(total, total - mod2) + start;
      var word = 0;
      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number2, i, i + limbLen, base2);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod2 !== 0) {
        var pow3 = 1;
        word = parseBase(number2, i, number2.length, base2);
        for (i = 0; i < mod2; i++) {
          pow3 *= base2;
        }
        this.imuln(pow3);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      this.strip();
    };
    BN2.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN2.prototype.clone = function clone2() {
      var r2 = new BN2(null);
      this.copy(r2);
      return r2;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN2.prototype.inspect = function inspect6() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var zeros = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString(base2, padding) {
      base2 = base2 || 10;
      padding = padding | 0 || 1;
      var out;
      if (base2 === 16 || base2 === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 16777215).toString(16);
          carry = w >>> 24 - off & 16777215;
          if (carry !== 0 || i !== this.length - 1) {
            out = zeros[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
          off += 2;
          if (off >= 26) {
            off -= 26;
            i--;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base2 === (base2 | 0) && base2 >= 2 && base2 <= 36) {
        var groupSize = groupSizes[base2];
        var groupBase = groupBases[base2];
        out = "";
        var c = this.clone();
        c.negative = 0;
        while (!c.isZero()) {
          var r2 = c.modn(groupBase).toString(base2);
          c = c.idivn(groupBase);
          if (!c.isZero()) {
            out = zeros[groupSize - r2.length] + r2 + out;
          } else {
            out = r2 + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert2(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert2(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON2() {
      return this.toString(16);
    };
    BN2.prototype.toBuffer = function toBuffer(endian, length) {
      assert2(typeof Buffer2 !== "undefined");
      return this.toArrayLike(Buffer2, endian, length);
    };
    BN2.prototype.toArray = function toArray2(endian, length) {
      return this.toArrayLike(Array, endian, length);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
      var byteLength = this.byteLength();
      var reqLength = length || Math.max(1, byteLength);
      assert2(byteLength <= reqLength, "byte array longer than desired length");
      assert2(reqLength > 0, "Requested array length <= 0");
      this.strip();
      var littleEndian = endian === "le";
      var res = new ArrayType(reqLength);
      var b, i;
      var q = this.clone();
      if (!littleEndian) {
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[i] = b;
        }
        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w) {
        var t = w;
        var r2 = 0;
        if (t >= 4096) {
          r2 += 13;
          t >>>= 13;
        }
        if (t >= 64) {
          r2 += 7;
          t >>>= 7;
        }
        if (t >= 8) {
          r2 += 4;
          t >>>= 4;
        }
        if (t >= 2) {
          r2 += 2;
          t >>>= 2;
        }
        return r2 + t;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w) {
      if (w === 0)
        return 26;
      var t = w;
      var r2 = 0;
      if ((t & 8191) === 0) {
        r2 += 13;
        t >>>= 13;
      }
      if ((t & 127) === 0) {
        r2 += 7;
        t >>>= 7;
      }
      if ((t & 15) === 0) {
        r2 += 4;
        t >>>= 4;
      }
      if ((t & 3) === 0) {
        r2 += 2;
        t >>>= 2;
      }
      if ((t & 1) === 0) {
        r2++;
      }
      return r2;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];
      var hi = this._countBits(w);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w = new Array(num.bitLength());
      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }
      return w;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r2 = 0;
      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);
        r2 += b;
        if (b !== 26)
          break;
      }
      return r2;
    };
    BN2.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg4() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }
      return this.strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b;
      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }
      this.length = b.length;
      return this.strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a;
      var b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }
      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = a.length;
      return this.strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert2(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
      }
      return this.strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert2(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r2;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r2 = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r2 = this.isub(num);
        num.negative = 1;
        return r2._normSign();
      }
      var a, b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      this.length = a.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      return this;
    };
    BN2.prototype.add = function add6(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r2 = this.iadd(num);
        num.negative = 1;
        return r2._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a, b;
      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = Math.max(this.length, i);
      if (a !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN2.prototype.sub = function sub2(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      var len = self2.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a = self2.words[0] | 0;
      var b = num.words[0] | 0;
      var r2 = a * b;
      var lo = r2 & 67108863;
      var carry = r2 / 67108864 | 0;
      out.words[0] = lo;
      for (var k = 1; k < len; k++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self2.words[i] | 0;
          b = num.words[j] | 0;
          r2 = a * b + rword;
          ncarry += r2 / 67108864 | 0;
          rword = r2 & 67108863;
        }
        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo2(self2, num, out) {
      var a = self2.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 8191;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 8191;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self2.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;
      if (c !== 0) {
        o[19] = c;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      out.length = self2.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k = 0; k < out.length - 1; k++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self2.words[i] | 0;
          var b = num.words[j] | 0;
          var r2 = a * b;
          var lo = r2 & 67108863;
          ncarry = ncarry + (r2 / 67108864 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 67108863;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self2, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self2, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N2) {
      var t = new Array(N2);
      var l = BN2.prototype._countBits(N2) - 1;
      for (var i = 0; i < N2; i++) {
        t[i] = this.revBin(i, l, N2);
      }
      return t;
    };
    FFTM.prototype.revBin = function revBin(x, l, N2) {
      if (x === 0 || x === N2 - 1)
        return x;
      var rb = 0;
      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N2) {
      for (var i = 0; i < N2; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N2, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N2);
      for (var s2 = 1; s2 < N2; s2 <<= 1) {
        var l = s2 << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);
        for (var p = 0; p < N2; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j = 0; j < s2; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s2];
            var io = itws[p + j + s2];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s2] = re - ro;
            itws[p + j + s2] = ie - io;
            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m2) {
      var N2 = Math.max(m2, n) | 1;
      var odd = N2 & 1;
      var i = 0;
      for (N2 = N2 / 2 | 0; N2; N2 = N2 >>> 1) {
        i++;
      }
      return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N2) {
      if (N2 <= 1)
        return;
      for (var i = 0; i < N2 / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N2 - i - 1];
        rws[N2 - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N2 - i - 1];
        iws[N2 - i - 1] = -t;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N2) {
      var carry = 0;
      for (var i = 0; i < N2 / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N2) * 8192 + Math.round(ws[2 * i] / N2) + carry;
        ws[i] = w & 67108863;
        if (w < 67108864) {
          carry = 0;
        } else {
          carry = w / 67108864 | 0;
        }
      }
      return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N2) {
      var carry = 0;
      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 8191;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 8191;
        carry = carry >>> 13;
      }
      for (i = 2 * len; i < N2; ++i) {
        rws[i] = 0;
      }
      assert2(carry === 0);
      assert2((carry & ~8191) === 0);
    };
    FFTM.prototype.stub = function stub(N2) {
      var ph = new Array(N2);
      for (var i = 0; i < N2; i++) {
        ph[i] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N2 = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N2);
      var _ = this.stub(N2);
      var rws = new Array(N2);
      var rwst = new Array(N2);
      var iwst = new Array(N2);
      var nrws = new Array(N2);
      var nrwst = new Array(N2);
      var niwst = new Array(N2);
      var rmws = out.words;
      rmws.length = N2;
      this.convert13b(x.words, x.length, rws, N2);
      this.convert13b(y.words, y.length, nrws, N2);
      this.transform(rws, _, rwst, iwst, N2, rbt);
      this.transform(nrws, _, nrwst, niwst, N2, rbt);
      for (var i = 0; i < N2; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }
      this.conjugate(rwst, iwst, N2);
      this.transform(rwst, iwst, rmws, _, N2, rbt);
      this.conjugate(rmws, _, N2);
      this.normalize13b(rmws, N2);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    };
    BN2.prototype.mul = function mul6(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w / 67108864 | 0;
        carry += lo >>> 26;
        this.words[i] = lo & 67108863;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow3(num) {
      var w = toBitArray(num);
      if (w.length === 0)
        return new BN2(1);
      var res = this;
      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0)
          break;
      }
      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0)
            continue;
          res = res.mul(q);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
      var i;
      if (r2 !== 0) {
        var carry = 0;
        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r2;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r2;
        }
        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }
      if (s2 !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s2] = this.words[i];
        }
        for (i = 0; i < s2; i++) {
          this.words[i] = 0;
        }
        this.length += s2;
      }
      return this.strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert2(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert2(typeof bits === "number" && bits >= 0);
      var h;
      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }
      var r2 = bits % 26;
      var s2 = Math.min((bits - r2) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r2 << r2;
      var maskedWords = extended;
      h -= s2;
      h = Math.max(0, h);
      if (maskedWords) {
        for (var i = 0; i < s2; i++) {
          maskedWords.words[i] = this.words[i];
        }
        maskedWords.length = s2;
      }
      if (s2 === 0)
        ;
      else if (this.length > s2) {
        this.length -= s2;
        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s2];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r2 | word >>> r2;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert2(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert2(typeof bit === "number" && bit >= 0);
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2)
        return false;
      var w = this.words[s2];
      return !!(w & q);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      assert2(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s2) {
        return this;
      }
      if (r2 !== 0) {
        s2++;
      }
      this.length = Math.min(s2, this.length);
      if (r2 !== 0) {
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
        this.words[i] -= 67108864;
        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }
      this.length = Math.max(this.length, i + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 67108864;
          this.words[i + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs2() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul6, shift) {
      var len = num.length + shift;
      var i;
      this._expand(len);
      var w;
      var carry = 0;
      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul6;
        w -= right & 67108863;
        carry = (w >> 26) - (right / 67108864 | 0);
        this.words[i + shift] = w & 67108863;
      }
      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 67108863;
      }
      if (carry === 0)
        return this.strip();
      assert2(carry === -1);
      carry = 0;
      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 67108863;
      }
      this.negative = 1;
      return this.strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num;
      var bhi = b.words[b.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      }
      var m2 = a.length - b.length;
      var q;
      if (mode !== "mod") {
        q = new BN2(null);
        q.length = m2 + 1;
        q.words = new Array(q.length);
        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }
      var diff = a.clone()._ishlnsubmul(b, 1, m2);
      if (diff.negative === 0) {
        a = diff;
        if (q) {
          q.words[m2] = 1;
        }
      }
      for (var j = m2 - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a._ishlnsubmul(b, qj, j);
        while (a.negative !== 0) {
          qj--;
          a.negative = 0;
          a._ishlnsubmul(b, 1, j);
          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }
        if (q) {
          q.words[j] = qj;
        }
      }
      if (q) {
        q.strip();
      }
      a.strip();
      if (mode !== "div" && shift !== 0) {
        a.iushrn(shift);
      }
      return {
        div: q || null,
        mod: a
      };
    };
    BN2.prototype.divmod = function divmod(num, mode, positive) {
      assert2(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div2, mod2, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== "mod") {
          div2 = res.div.neg();
        }
        if (mode !== "div") {
          mod2 = res.mod.neg();
          if (positive && mod2.negative !== 0) {
            mod2.iadd(num);
          }
        }
        return {
          div: div2,
          mod: mod2
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== "mod") {
          div2 = res.div.neg();
        }
        return {
          div: div2,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== "div") {
          mod2 = res.mod.neg();
          if (positive && mod2.negative !== 0) {
            mod2.isub(num);
          }
        }
        return {
          div: res.div,
          mod: mod2
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === "mod") {
          return {
            div: null,
            mod: new BN2(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN2.prototype.div = function div2(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod2(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod2 = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod2.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modn = function modn(num) {
      assert2(num <= 67108863);
      var p = (1 << 26) % num;
      var acc = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }
      return acc;
    };
    BN2.prototype.idivn = function idivn(num) {
      assert2(num <= 67108863);
      var carry = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 67108864;
        this.words[i] = w / num | 0;
        carry = w % num;
      }
      return this.strip();
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var x = this;
      var y = p.clone();
      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      }
      var A = new BN2(1);
      var B = new BN2(0);
      var C = new BN2(0);
      var D = new BN2(1);
      var g = 0;
      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }
      var yp = y.clone();
      var xp = x.clone();
      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          x.iushrn(i);
          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }
            A.iushrn(1);
            B.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          y.iushrn(j);
          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }
            C.iushrn(1);
            D.iushrn(1);
          }
        }
        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }
      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    };
    BN2.prototype._invmp = function _invmp(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var a = this;
      var b = p.clone();
      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b.clone();
      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          a.iushrn(i);
          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          b.iushrn(j);
          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }
      var res;
      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0;
      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }
      do {
        while (a.isEven()) {
          a.iushrn(1);
        }
        while (b.isEven()) {
          b.iushrn(1);
        }
        var r2 = a.cmp(b);
        if (r2 < 0) {
          var t = a;
          a = b;
          b = t;
        } else if (r2 === 0 || b.cmpn(1) === 0) {
          break;
        }
        a.isub(b);
      } while (true);
      return b.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd2() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert2(typeof bit === "number");
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2) {
        this._expand(s2 + 1);
        this.words[s2] |= q;
        return this;
      }
      var carry = q;
      for (var i = s2; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 67108863;
        this.words[i] = w;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert2(num <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b)
          continue;
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq6(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      assert2(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert2(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert2(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert2(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert2(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert2(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert2(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert2(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert2(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert2(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert2(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert2(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert2(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name2, p) {
      this.name = name2;
      this.p = new BN2(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r2 = num;
      var rlen;
      do {
        this.split(r2, this.tmp);
        r2 = this.imulK(r2);
        r2 = r2.iadd(this.tmp);
        rlen = r2.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
      if (cmp === 0) {
        r2.words[0] = 0;
        r2.length = 1;
      } else if (cmp > 0) {
        r2.isub(this.p);
      } else {
        if (r2.strip !== void 0) {
          r2.strip();
        } else {
          r2._strip();
        }
      }
      return r2;
    };
    MPrime.prototype.split = function split2(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits2(K256, MPrime);
    K256.prototype.split = function split2(input, output2) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i = 0; i < outLen; i++) {
        output2.words[i] = input.words[i];
      }
      output2.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output2.words[output2.length++] = prev & mask;
      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 977;
        num.words[i] = lo & 67108863;
        lo = w * 64 + (lo / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits2(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits2(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits2(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 19 + carry;
        var lo = hi & 67108863;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN2._prime = function prime(name2) {
      if (primes[name2])
        return primes[name2];
      var prime2;
      if (name2 === "k256") {
        prime2 = new K256();
      } else if (name2 === "p224") {
        prime2 = new P224();
      } else if (name2 === "p192") {
        prime2 = new P192();
      } else if (name2 === "p25519") {
        prime2 = new P25519();
      } else {
        throw new Error("Unknown prime " + name2);
      }
      primes[name2] = prime2;
      return prime2;
    };
    function Red(m2) {
      if (typeof m2 === "string") {
        var prime = BN2._prime(m2);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert2(m2.gtn(1), "modulus must be greater than 1");
        this.m = m2;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a) {
      assert2(a.negative === 0, "red works only with positives");
      assert2(a.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a, b) {
      assert2((a.negative | b.negative) === 0, "red works only with positives");
      assert2(
        a.red && a.red === b.red,
        "red works only with red numbers"
      );
    };
    Red.prototype.imod = function imod(a) {
      if (this.prime)
        return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg4(a) {
      if (a.isZero()) {
        return a.clone();
      }
      return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add6(a, b) {
      this._verify2(a, b);
      var res = a.add(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);
      var res = a.iadd(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub2(a, b) {
      this._verify2(a, b);
      var res = a.sub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);
      var res = a.isub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);
      return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);
      return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul6(a, b) {
      this._verify2(a, b);
      return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt2(a) {
      if (a.isZero())
        return a.clone();
      var mod3 = this.m.andln(3);
      assert2(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow3 = this.m.add(new BN2(1)).iushrn(2);
        return this.pow(a, pow3);
      }
      var q = this.m.subn(1);
      var s2 = 0;
      while (!q.isZero() && q.andln(1) === 0) {
        s2++;
        q.iushrn(1);
      }
      assert2(!q.isZero());
      var one = new BN2(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN2(2 * z * z).toRed(this);
      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }
      var c = this.pow(z, q);
      var r2 = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m2 = s2;
      while (t.cmp(one) !== 0) {
        var tmp = t;
        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }
        assert2(i < m2);
        var b = this.pow(c, new BN2(1).iushln(m2 - i - 1));
        r2 = r2.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m2 = i;
      }
      return r2;
    };
    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow3(a, num) {
      if (num.isZero())
        return new BN2(1).toRed(this);
      if (num.cmpn(1) === 0)
        return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN2(1).toRed(this);
      wnd[1] = a;
      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];
        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0))
            continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r2 = num.umod(this.m);
      return r2 === num ? r2.clone() : r2;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN2.mont = function mont2(num) {
      return new Mont(num);
    };
    function Mont(m2) {
      Red.call(this, m2);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }
      this.r = new BN2(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits2(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r2 = this.imod(num.mul(this.rinv));
      r2.red = null;
      return r2;
    };
    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }
      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul6(a, b) {
      if (a.isZero() || b.isZero())
        return new BN2(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn);
var minimalisticAssert = assert$f;
function assert$f(val, msg) {
  if (!val)
    throw new Error(msg || "Assertion failed");
}
assert$f.equal = function assertEqual(l, r2, msg) {
  if (l != r2)
    throw new Error(msg || "Assertion failed: " + l + " != " + r2);
};
var utils$l = {};
(function(exports) {
  var utils2 = exports;
  function toArray2(msg, enc) {
    if (Array.isArray(msg))
      return msg.slice();
    if (!msg)
      return [];
    var res = [];
    if (typeof msg !== "string") {
      for (var i = 0; i < msg.length; i++)
        res[i] = msg[i] | 0;
      return res;
    }
    if (enc === "hex") {
      msg = msg.replace(/[^a-z0-9]+/ig, "");
      if (msg.length % 2 !== 0)
        msg = "0" + msg;
      for (var i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    } else {
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        var hi = c >> 8;
        var lo = c & 255;
        if (hi)
          res.push(hi, lo);
        else
          res.push(lo);
      }
    }
    return res;
  }
  utils2.toArray = toArray2;
  function zero22(word) {
    if (word.length === 1)
      return "0" + word;
    else
      return word;
  }
  utils2.zero2 = zero22;
  function toHex3(msg) {
    var res = "";
    for (var i = 0; i < msg.length; i++)
      res += zero22(msg[i].toString(16));
    return res;
  }
  utils2.toHex = toHex3;
  utils2.encode = function encode2(arr, enc) {
    if (enc === "hex")
      return toHex3(arr);
    else
      return arr;
  };
})(utils$l);
(function(exports) {
  var utils2 = exports;
  var BN2 = bnExports;
  var minAssert = minimalisticAssert;
  var minUtils = utils$l;
  utils2.assert = minAssert;
  utils2.toArray = minUtils.toArray;
  utils2.zero2 = minUtils.zero2;
  utils2.toHex = minUtils.toHex;
  utils2.encode = minUtils.encode;
  function getNAF2(num, w, bits) {
    var naf = new Array(Math.max(num.bitLength(), bits) + 1);
    naf.fill(0);
    var ws = 1 << w + 1;
    var k = num.clone();
    for (var i = 0; i < naf.length; i++) {
      var z;
      var mod2 = k.andln(ws - 1);
      if (k.isOdd()) {
        if (mod2 > (ws >> 1) - 1)
          z = (ws >> 1) - mod2;
        else
          z = mod2;
        k.isubn(z);
      } else {
        z = 0;
      }
      naf[i] = z;
      k.iushrn(1);
    }
    return naf;
  }
  utils2.getNAF = getNAF2;
  function getJSF2(k1, k2) {
    var jsf = [
      [],
      []
    ];
    k1 = k1.clone();
    k2 = k2.clone();
    var d1 = 0;
    var d2 = 0;
    var m8;
    while (k1.cmpn(-d1) > 0 || k2.cmpn(-d2) > 0) {
      var m14 = k1.andln(3) + d1 & 3;
      var m24 = k2.andln(3) + d2 & 3;
      if (m14 === 3)
        m14 = -1;
      if (m24 === 3)
        m24 = -1;
      var u1;
      if ((m14 & 1) === 0) {
        u1 = 0;
      } else {
        m8 = k1.andln(7) + d1 & 7;
        if ((m8 === 3 || m8 === 5) && m24 === 2)
          u1 = -m14;
        else
          u1 = m14;
      }
      jsf[0].push(u1);
      var u2;
      if ((m24 & 1) === 0) {
        u2 = 0;
      } else {
        m8 = k2.andln(7) + d2 & 7;
        if ((m8 === 3 || m8 === 5) && m14 === 2)
          u2 = -m24;
        else
          u2 = m24;
      }
      jsf[1].push(u2);
      if (2 * d1 === u1 + 1)
        d1 = 1 - d1;
      if (2 * d2 === u2 + 1)
        d2 = 1 - d2;
      k1.iushrn(1);
      k2.iushrn(1);
    }
    return jsf;
  }
  utils2.getJSF = getJSF2;
  function cachedProperty2(obj, name2, computer) {
    var key2 = "_" + name2;
    obj.prototype[name2] = function cachedProperty3() {
      return this[key2] !== void 0 ? this[key2] : this[key2] = computer.call(this);
    };
  }
  utils2.cachedProperty = cachedProperty2;
  function parseBytes2(bytes2) {
    return typeof bytes2 === "string" ? utils2.toArray(bytes2, "hex") : bytes2;
  }
  utils2.parseBytes = parseBytes2;
  function intFromLE(bytes2) {
    return new BN2(bytes2, "hex", "le");
  }
  utils2.intFromLE = intFromLE;
})(utils$m);
var brorandExports = {};
var brorand = {
  get exports() {
    return brorandExports;
  },
  set exports(v2) {
    brorandExports = v2;
  }
};
var r$1;
brorand.exports = function rand(len) {
  if (!r$1)
    r$1 = new Rand(null);
  return r$1.generate(len);
};
function Rand(rand3) {
  this.rand = rand3;
}
brorandExports.Rand = Rand;
Rand.prototype.generate = function generate(len) {
  return this._rand(len);
};
Rand.prototype._rand = function _rand(n) {
  if (this.rand.getBytes)
    return this.rand.getBytes(n);
  var res = new Uint8Array(n);
  for (var i = 0; i < res.length; i++)
    res[i] = this.rand.getByte();
  return res;
};
if (typeof self === "object") {
  if (self.crypto && self.crypto.getRandomValues) {
    Rand.prototype._rand = function _rand2(n) {
      var arr = new Uint8Array(n);
      self.crypto.getRandomValues(arr);
      return arr;
    };
  } else if (self.msCrypto && self.msCrypto.getRandomValues) {
    Rand.prototype._rand = function _rand2(n) {
      var arr = new Uint8Array(n);
      self.msCrypto.getRandomValues(arr);
      return arr;
    };
  } else if (typeof window === "object") {
    Rand.prototype._rand = function() {
      throw new Error("Not implemented yet");
    };
  }
} else {
  try {
    var crypto$1 = require("crypto");
    if (typeof crypto$1.randomBytes !== "function")
      throw new Error("Not supported");
    Rand.prototype._rand = function _rand2(n) {
      return crypto$1.randomBytes(n);
    };
  } catch (e) {
  }
}
var curve = {};
var BN$8 = bnExports;
var utils$k = utils$m;
var getNAF = utils$k.getNAF;
var getJSF = utils$k.getJSF;
var assert$e = utils$k.assert;
function BaseCurve(type, conf) {
  this.type = type;
  this.p = new BN$8(conf.p, 16);
  this.red = conf.prime ? BN$8.red(conf.prime) : BN$8.mont(this.p);
  this.zero = new BN$8(0).toRed(this.red);
  this.one = new BN$8(1).toRed(this.red);
  this.two = new BN$8(2).toRed(this.red);
  this.n = conf.n && new BN$8(conf.n, 16);
  this.g = conf.g && this.pointFromJSON(conf.g, conf.gRed);
  this._wnafT1 = new Array(4);
  this._wnafT2 = new Array(4);
  this._wnafT3 = new Array(4);
  this._wnafT4 = new Array(4);
  this._bitLength = this.n ? this.n.bitLength() : 0;
  var adjustCount = this.n && this.p.div(this.n);
  if (!adjustCount || adjustCount.cmpn(100) > 0) {
    this.redN = null;
  } else {
    this._maxwellTrick = true;
    this.redN = this.n.toRed(this.red);
  }
}
var base = BaseCurve;
BaseCurve.prototype.point = function point() {
  throw new Error("Not implemented");
};
BaseCurve.prototype.validate = function validate() {
  throw new Error("Not implemented");
};
BaseCurve.prototype._fixedNafMul = function _fixedNafMul(p, k) {
  assert$e(p.precomputed);
  var doubles = p._getDoubles();
  var naf = getNAF(k, 1, this._bitLength);
  var I2 = (1 << doubles.step + 1) - (doubles.step % 2 === 0 ? 2 : 1);
  I2 /= 3;
  var repr = [];
  var j;
  var nafW;
  for (j = 0; j < naf.length; j += doubles.step) {
    nafW = 0;
    for (var l = j + doubles.step - 1; l >= j; l--)
      nafW = (nafW << 1) + naf[l];
    repr.push(nafW);
  }
  var a = this.jpoint(null, null, null);
  var b = this.jpoint(null, null, null);
  for (var i = I2; i > 0; i--) {
    for (j = 0; j < repr.length; j++) {
      nafW = repr[j];
      if (nafW === i)
        b = b.mixedAdd(doubles.points[j]);
      else if (nafW === -i)
        b = b.mixedAdd(doubles.points[j].neg());
    }
    a = a.add(b);
  }
  return a.toP();
};
BaseCurve.prototype._wnafMul = function _wnafMul(p, k) {
  var w = 4;
  var nafPoints = p._getNAFPoints(w);
  w = nafPoints.wnd;
  var wnd = nafPoints.points;
  var naf = getNAF(k, w, this._bitLength);
  var acc = this.jpoint(null, null, null);
  for (var i = naf.length - 1; i >= 0; i--) {
    for (var l = 0; i >= 0 && naf[i] === 0; i--)
      l++;
    if (i >= 0)
      l++;
    acc = acc.dblp(l);
    if (i < 0)
      break;
    var z = naf[i];
    assert$e(z !== 0);
    if (p.type === "affine") {
      if (z > 0)
        acc = acc.mixedAdd(wnd[z - 1 >> 1]);
      else
        acc = acc.mixedAdd(wnd[-z - 1 >> 1].neg());
    } else {
      if (z > 0)
        acc = acc.add(wnd[z - 1 >> 1]);
      else
        acc = acc.add(wnd[-z - 1 >> 1].neg());
    }
  }
  return p.type === "affine" ? acc.toP() : acc;
};
BaseCurve.prototype._wnafMulAdd = function _wnafMulAdd(defW, points, coeffs, len, jacobianResult) {
  var wndWidth = this._wnafT1;
  var wnd = this._wnafT2;
  var naf = this._wnafT3;
  var max2 = 0;
  var i;
  var j;
  var p;
  for (i = 0; i < len; i++) {
    p = points[i];
    var nafPoints = p._getNAFPoints(defW);
    wndWidth[i] = nafPoints.wnd;
    wnd[i] = nafPoints.points;
  }
  for (i = len - 1; i >= 1; i -= 2) {
    var a = i - 1;
    var b = i;
    if (wndWidth[a] !== 1 || wndWidth[b] !== 1) {
      naf[a] = getNAF(coeffs[a], wndWidth[a], this._bitLength);
      naf[b] = getNAF(coeffs[b], wndWidth[b], this._bitLength);
      max2 = Math.max(naf[a].length, max2);
      max2 = Math.max(naf[b].length, max2);
      continue;
    }
    var comb = [
      points[a],
      /* 1 */
      null,
      /* 3 */
      null,
      /* 5 */
      points[b]
      /* 7 */
    ];
    if (points[a].y.cmp(points[b].y) === 0) {
      comb[1] = points[a].add(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    } else if (points[a].y.cmp(points[b].y.redNeg()) === 0) {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].add(points[b].neg());
    } else {
      comb[1] = points[a].toJ().mixedAdd(points[b]);
      comb[2] = points[a].toJ().mixedAdd(points[b].neg());
    }
    var index = [
      -3,
      /* -1 -1 */
      -1,
      /* -1 0 */
      -5,
      /* -1 1 */
      -7,
      /* 0 -1 */
      0,
      /* 0 0 */
      7,
      /* 0 1 */
      5,
      /* 1 -1 */
      1,
      /* 1 0 */
      3
      /* 1 1 */
    ];
    var jsf = getJSF(coeffs[a], coeffs[b]);
    max2 = Math.max(jsf[0].length, max2);
    naf[a] = new Array(max2);
    naf[b] = new Array(max2);
    for (j = 0; j < max2; j++) {
      var ja = jsf[0][j] | 0;
      var jb = jsf[1][j] | 0;
      naf[a][j] = index[(ja + 1) * 3 + (jb + 1)];
      naf[b][j] = 0;
      wnd[a] = comb;
    }
  }
  var acc = this.jpoint(null, null, null);
  var tmp = this._wnafT4;
  for (i = max2; i >= 0; i--) {
    var k = 0;
    while (i >= 0) {
      var zero = true;
      for (j = 0; j < len; j++) {
        tmp[j] = naf[j][i] | 0;
        if (tmp[j] !== 0)
          zero = false;
      }
      if (!zero)
        break;
      k++;
      i--;
    }
    if (i >= 0)
      k++;
    acc = acc.dblp(k);
    if (i < 0)
      break;
    for (j = 0; j < len; j++) {
      var z = tmp[j];
      if (z === 0)
        continue;
      else if (z > 0)
        p = wnd[j][z - 1 >> 1];
      else if (z < 0)
        p = wnd[j][-z - 1 >> 1].neg();
      if (p.type === "affine")
        acc = acc.mixedAdd(p);
      else
        acc = acc.add(p);
    }
  }
  for (i = 0; i < len; i++)
    wnd[i] = null;
  if (jacobianResult)
    return acc;
  else
    return acc.toP();
};
function BasePoint(curve2, type) {
  this.curve = curve2;
  this.type = type;
  this.precomputed = null;
}
BaseCurve.BasePoint = BasePoint;
BasePoint.prototype.eq = function eq() {
  throw new Error("Not implemented");
};
BasePoint.prototype.validate = function validate2() {
  return this.curve.validate(this);
};
BaseCurve.prototype.decodePoint = function decodePoint(bytes2, enc) {
  bytes2 = utils$k.toArray(bytes2, enc);
  var len = this.p.byteLength();
  if ((bytes2[0] === 4 || bytes2[0] === 6 || bytes2[0] === 7) && bytes2.length - 1 === 2 * len) {
    if (bytes2[0] === 6)
      assert$e(bytes2[bytes2.length - 1] % 2 === 0);
    else if (bytes2[0] === 7)
      assert$e(bytes2[bytes2.length - 1] % 2 === 1);
    var res = this.point(
      bytes2.slice(1, 1 + len),
      bytes2.slice(1 + len, 1 + 2 * len)
    );
    return res;
  } else if ((bytes2[0] === 2 || bytes2[0] === 3) && bytes2.length - 1 === len) {
    return this.pointFromX(bytes2.slice(1, 1 + len), bytes2[0] === 3);
  }
  throw new Error("Unknown point format");
};
BasePoint.prototype.encodeCompressed = function encodeCompressed(enc) {
  return this.encode(enc, true);
};
BasePoint.prototype._encode = function _encode(compact) {
  var len = this.curve.p.byteLength();
  var x = this.getX().toArray("be", len);
  if (compact)
    return [this.getY().isEven() ? 2 : 3].concat(x);
  return [4].concat(x, this.getY().toArray("be", len));
};
BasePoint.prototype.encode = function encode(enc, compact) {
  return utils$k.encode(this._encode(compact), enc);
};
BasePoint.prototype.precompute = function precompute2(power) {
  if (this.precomputed)
    return this;
  var precomputed = {
    doubles: null,
    naf: null,
    beta: null
  };
  precomputed.naf = this._getNAFPoints(8);
  precomputed.doubles = this._getDoubles(4, power);
  precomputed.beta = this._getBeta();
  this.precomputed = precomputed;
  return this;
};
BasePoint.prototype._hasDoubles = function _hasDoubles(k) {
  if (!this.precomputed)
    return false;
  var doubles = this.precomputed.doubles;
  if (!doubles)
    return false;
  return doubles.points.length >= Math.ceil((k.bitLength() + 1) / doubles.step);
};
BasePoint.prototype._getDoubles = function _getDoubles(step, power) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  var doubles = [this];
  var acc = this;
  for (var i = 0; i < power; i += step) {
    for (var j = 0; j < step; j++)
      acc = acc.dbl();
    doubles.push(acc);
  }
  return {
    step,
    points: doubles
  };
};
BasePoint.prototype._getNAFPoints = function _getNAFPoints(wnd) {
  if (this.precomputed && this.precomputed.naf)
    return this.precomputed.naf;
  var res = [this];
  var max2 = (1 << wnd) - 1;
  var dbl5 = max2 === 1 ? null : this.dbl();
  for (var i = 1; i < max2; i++)
    res[i] = res[i - 1].add(dbl5);
  return {
    wnd,
    points: res
  };
};
BasePoint.prototype._getBeta = function _getBeta() {
  return null;
};
BasePoint.prototype.dblp = function dblp(k) {
  var r2 = this;
  for (var i = 0; i < k; i++)
    r2 = r2.dbl();
  return r2;
};
var inherits_browserExports = {};
var inherits_browser = {
  get exports() {
    return inherits_browserExports;
  },
  set exports(v2) {
    inherits_browserExports = v2;
  }
};
if (typeof Object.create === "function") {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  inherits_browser.exports = function inherits2(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}
var utils$j = utils$m;
var BN$7 = bnExports;
var inherits$3 = inherits_browserExports;
var Base$2 = base;
var assert$d = utils$j.assert;
function ShortCurve(conf) {
  Base$2.call(this, "short", conf);
  this.a = new BN$7(conf.a, 16).toRed(this.red);
  this.b = new BN$7(conf.b, 16).toRed(this.red);
  this.tinv = this.two.redInvm();
  this.zeroA = this.a.fromRed().cmpn(0) === 0;
  this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0;
  this.endo = this._getEndomorphism(conf);
  this._endoWnafT1 = new Array(4);
  this._endoWnafT2 = new Array(4);
}
inherits$3(ShortCurve, Base$2);
var short = ShortCurve;
ShortCurve.prototype._getEndomorphism = function _getEndomorphism(conf) {
  if (!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)
    return;
  var beta;
  var lambda;
  if (conf.beta) {
    beta = new BN$7(conf.beta, 16).toRed(this.red);
  } else {
    var betas = this._getEndoRoots(this.p);
    beta = betas[0].cmp(betas[1]) < 0 ? betas[0] : betas[1];
    beta = beta.toRed(this.red);
  }
  if (conf.lambda) {
    lambda = new BN$7(conf.lambda, 16);
  } else {
    var lambdas = this._getEndoRoots(this.n);
    if (this.g.mul(lambdas[0]).x.cmp(this.g.x.redMul(beta)) === 0) {
      lambda = lambdas[0];
    } else {
      lambda = lambdas[1];
      assert$d(this.g.mul(lambda).x.cmp(this.g.x.redMul(beta)) === 0);
    }
  }
  var basis;
  if (conf.basis) {
    basis = conf.basis.map(function(vec) {
      return {
        a: new BN$7(vec.a, 16),
        b: new BN$7(vec.b, 16)
      };
    });
  } else {
    basis = this._getEndoBasis(lambda);
  }
  return {
    beta,
    lambda,
    basis
  };
};
ShortCurve.prototype._getEndoRoots = function _getEndoRoots(num) {
  var red = num === this.p ? this.red : BN$7.mont(num);
  var tinv = new BN$7(2).toRed(red).redInvm();
  var ntinv = tinv.redNeg();
  var s2 = new BN$7(3).toRed(red).redNeg().redSqrt().redMul(tinv);
  var l1 = ntinv.redAdd(s2).fromRed();
  var l2 = ntinv.redSub(s2).fromRed();
  return [l1, l2];
};
ShortCurve.prototype._getEndoBasis = function _getEndoBasis(lambda) {
  var aprxSqrt = this.n.ushrn(Math.floor(this.n.bitLength() / 2));
  var u = lambda;
  var v2 = this.n.clone();
  var x1 = new BN$7(1);
  var y1 = new BN$7(0);
  var x2 = new BN$7(0);
  var y2 = new BN$7(1);
  var a0;
  var b0;
  var a1;
  var b1;
  var a2;
  var b2;
  var prevR;
  var i = 0;
  var r2;
  var x;
  while (u.cmpn(0) !== 0) {
    var q = v2.div(u);
    r2 = v2.sub(q.mul(u));
    x = x2.sub(q.mul(x1));
    var y = y2.sub(q.mul(y1));
    if (!a1 && r2.cmp(aprxSqrt) < 0) {
      a0 = prevR.neg();
      b0 = x1;
      a1 = r2.neg();
      b1 = x;
    } else if (a1 && ++i === 2) {
      break;
    }
    prevR = r2;
    v2 = u;
    u = r2;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;
  }
  a2 = r2.neg();
  b2 = x;
  var len1 = a1.sqr().add(b1.sqr());
  var len2 = a2.sqr().add(b2.sqr());
  if (len2.cmp(len1) >= 0) {
    a2 = a0;
    b2 = b0;
  }
  if (a1.negative) {
    a1 = a1.neg();
    b1 = b1.neg();
  }
  if (a2.negative) {
    a2 = a2.neg();
    b2 = b2.neg();
  }
  return [
    { a: a1, b: b1 },
    { a: a2, b: b2 }
  ];
};
ShortCurve.prototype._endoSplit = function _endoSplit(k) {
  var basis = this.endo.basis;
  var v1 = basis[0];
  var v2 = basis[1];
  var c1 = v2.b.mul(k).divRound(this.n);
  var c2 = v1.b.neg().mul(k).divRound(this.n);
  var p1 = c1.mul(v1.a);
  var p2 = c2.mul(v2.a);
  var q1 = c1.mul(v1.b);
  var q2 = c2.mul(v2.b);
  var k1 = k.sub(p1).sub(p2);
  var k2 = q1.add(q2).neg();
  return { k1, k2 };
};
ShortCurve.prototype.pointFromX = function pointFromX(x, odd) {
  x = new BN$7(x, 16);
  if (!x.red)
    x = x.toRed(this.red);
  var y2 = x.redSqr().redMul(x).redIAdd(x.redMul(this.a)).redIAdd(this.b);
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var isOdd2 = y.fromRed().isOdd();
  if (odd && !isOdd2 || !odd && isOdd2)
    y = y.redNeg();
  return this.point(x, y);
};
ShortCurve.prototype.validate = function validate3(point5) {
  if (point5.inf)
    return true;
  var x = point5.x;
  var y = point5.y;
  var ax = this.a.redMul(x);
  var rhs = x.redSqr().redMul(x).redIAdd(ax).redIAdd(this.b);
  return y.redSqr().redISub(rhs).cmpn(0) === 0;
};
ShortCurve.prototype._endoWnafMulAdd = function _endoWnafMulAdd(points, coeffs, jacobianResult) {
  var npoints = this._endoWnafT1;
  var ncoeffs = this._endoWnafT2;
  for (var i = 0; i < points.length; i++) {
    var split2 = this._endoSplit(coeffs[i]);
    var p = points[i];
    var beta = p._getBeta();
    if (split2.k1.negative) {
      split2.k1.ineg();
      p = p.neg(true);
    }
    if (split2.k2.negative) {
      split2.k2.ineg();
      beta = beta.neg(true);
    }
    npoints[i * 2] = p;
    npoints[i * 2 + 1] = beta;
    ncoeffs[i * 2] = split2.k1;
    ncoeffs[i * 2 + 1] = split2.k2;
  }
  var res = this._wnafMulAdd(1, npoints, ncoeffs, i * 2, jacobianResult);
  for (var j = 0; j < i * 2; j++) {
    npoints[j] = null;
    ncoeffs[j] = null;
  }
  return res;
};
function Point$2(curve2, x, y, isRed) {
  Base$2.BasePoint.call(this, curve2, "affine");
  if (x === null && y === null) {
    this.x = null;
    this.y = null;
    this.inf = true;
  } else {
    this.x = new BN$7(x, 16);
    this.y = new BN$7(y, 16);
    if (isRed) {
      this.x.forceRed(this.curve.red);
      this.y.forceRed(this.curve.red);
    }
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    this.inf = false;
  }
}
inherits$3(Point$2, Base$2.BasePoint);
ShortCurve.prototype.point = function point2(x, y, isRed) {
  return new Point$2(this, x, y, isRed);
};
ShortCurve.prototype.pointFromJSON = function pointFromJSON(obj, red) {
  return Point$2.fromJSON(this, obj, red);
};
Point$2.prototype._getBeta = function _getBeta2() {
  if (!this.curve.endo)
    return;
  var pre = this.precomputed;
  if (pre && pre.beta)
    return pre.beta;
  var beta = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
  if (pre) {
    var curve2 = this.curve;
    var endoMul = function(p) {
      return curve2.point(p.x.redMul(curve2.endo.beta), p.y);
    };
    pre.beta = beta;
    beta.precomputed = {
      beta: null,
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(endoMul)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(endoMul)
      }
    };
  }
  return beta;
};
Point$2.prototype.toJSON = function toJSON() {
  if (!this.precomputed)
    return [this.x, this.y];
  return [this.x, this.y, this.precomputed && {
    doubles: this.precomputed.doubles && {
      step: this.precomputed.doubles.step,
      points: this.precomputed.doubles.points.slice(1)
    },
    naf: this.precomputed.naf && {
      wnd: this.precomputed.naf.wnd,
      points: this.precomputed.naf.points.slice(1)
    }
  }];
};
Point$2.fromJSON = function fromJSON(curve2, obj, red) {
  if (typeof obj === "string")
    obj = JSON.parse(obj);
  var res = curve2.point(obj[0], obj[1], red);
  if (!obj[2])
    return res;
  function obj2point(obj2) {
    return curve2.point(obj2[0], obj2[1], red);
  }
  var pre = obj[2];
  res.precomputed = {
    beta: null,
    doubles: pre.doubles && {
      step: pre.doubles.step,
      points: [res].concat(pre.doubles.points.map(obj2point))
    },
    naf: pre.naf && {
      wnd: pre.naf.wnd,
      points: [res].concat(pre.naf.points.map(obj2point))
    }
  };
  return res;
};
Point$2.prototype.inspect = function inspect() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
};
Point$2.prototype.isInfinity = function isInfinity() {
  return this.inf;
};
Point$2.prototype.add = function add2(p) {
  if (this.inf)
    return p;
  if (p.inf)
    return this;
  if (this.eq(p))
    return this.dbl();
  if (this.neg().eq(p))
    return this.curve.point(null, null);
  if (this.x.cmp(p.x) === 0)
    return this.curve.point(null, null);
  var c = this.y.redSub(p.y);
  if (c.cmpn(0) !== 0)
    c = c.redMul(this.x.redSub(p.x).redInvm());
  var nx = c.redSqr().redISub(this.x).redISub(p.x);
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};
Point$2.prototype.dbl = function dbl() {
  if (this.inf)
    return this;
  var ys1 = this.y.redAdd(this.y);
  if (ys1.cmpn(0) === 0)
    return this.curve.point(null, null);
  var a = this.curve.a;
  var x2 = this.x.redSqr();
  var dyinv = ys1.redInvm();
  var c = x2.redAdd(x2).redIAdd(x2).redIAdd(a).redMul(dyinv);
  var nx = c.redSqr().redISub(this.x.redAdd(this.x));
  var ny = c.redMul(this.x.redSub(nx)).redISub(this.y);
  return this.curve.point(nx, ny);
};
Point$2.prototype.getX = function getX() {
  return this.x.fromRed();
};
Point$2.prototype.getY = function getY() {
  return this.y.fromRed();
};
Point$2.prototype.mul = function mul2(k) {
  k = new BN$7(k, 16);
  if (this.isInfinity())
    return this;
  else if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else if (this.curve.endo)
    return this.curve._endoWnafMulAdd([this], [k]);
  else
    return this.curve._wnafMul(this, k);
};
Point$2.prototype.mulAdd = function mulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2);
};
Point$2.prototype.jmulAdd = function jmulAdd(k1, p2, k2) {
  var points = [this, p2];
  var coeffs = [k1, k2];
  if (this.curve.endo)
    return this.curve._endoWnafMulAdd(points, coeffs, true);
  else
    return this.curve._wnafMulAdd(1, points, coeffs, 2, true);
};
Point$2.prototype.eq = function eq2(p) {
  return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0);
};
Point$2.prototype.neg = function neg(_precompute) {
  if (this.inf)
    return this;
  var res = this.curve.point(this.x, this.y.redNeg());
  if (_precompute && this.precomputed) {
    var pre = this.precomputed;
    var negate = function(p) {
      return p.neg();
    };
    res.precomputed = {
      naf: pre.naf && {
        wnd: pre.naf.wnd,
        points: pre.naf.points.map(negate)
      },
      doubles: pre.doubles && {
        step: pre.doubles.step,
        points: pre.doubles.points.map(negate)
      }
    };
  }
  return res;
};
Point$2.prototype.toJ = function toJ() {
  if (this.inf)
    return this.curve.jpoint(null, null, null);
  var res = this.curve.jpoint(this.x, this.y, this.curve.one);
  return res;
};
function JPoint(curve2, x, y, z) {
  Base$2.BasePoint.call(this, curve2, "jacobian");
  if (x === null && y === null && z === null) {
    this.x = this.curve.one;
    this.y = this.curve.one;
    this.z = new BN$7(0);
  } else {
    this.x = new BN$7(x, 16);
    this.y = new BN$7(y, 16);
    this.z = new BN$7(z, 16);
  }
  if (!this.x.red)
    this.x = this.x.toRed(this.curve.red);
  if (!this.y.red)
    this.y = this.y.toRed(this.curve.red);
  if (!this.z.red)
    this.z = this.z.toRed(this.curve.red);
  this.zOne = this.z === this.curve.one;
}
inherits$3(JPoint, Base$2.BasePoint);
ShortCurve.prototype.jpoint = function jpoint(x, y, z) {
  return new JPoint(this, x, y, z);
};
JPoint.prototype.toP = function toP() {
  if (this.isInfinity())
    return this.curve.point(null, null);
  var zinv = this.z.redInvm();
  var zinv2 = zinv.redSqr();
  var ax = this.x.redMul(zinv2);
  var ay = this.y.redMul(zinv2).redMul(zinv);
  return this.curve.point(ax, ay);
};
JPoint.prototype.neg = function neg2() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
JPoint.prototype.add = function add3(p) {
  if (this.isInfinity())
    return p;
  if (p.isInfinity())
    return this;
  var pz2 = p.z.redSqr();
  var z2 = this.z.redSqr();
  var u1 = this.x.redMul(pz2);
  var u2 = p.x.redMul(z2);
  var s1 = this.y.redMul(pz2.redMul(p.z));
  var s2 = p.y.redMul(z2.redMul(this.z));
  var h = u1.redSub(u2);
  var r2 = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r2.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }
  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v2 = u1.redMul(h2);
  var nx = r2.redSqr().redIAdd(h3).redISub(v2).redISub(v2);
  var ny = r2.redMul(v2.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(p.z).redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.mixedAdd = function mixedAdd(p) {
  if (this.isInfinity())
    return p.toJ();
  if (p.isInfinity())
    return this;
  var z2 = this.z.redSqr();
  var u1 = this.x;
  var u2 = p.x.redMul(z2);
  var s1 = this.y;
  var s2 = p.y.redMul(z2).redMul(this.z);
  var h = u1.redSub(u2);
  var r2 = s1.redSub(s2);
  if (h.cmpn(0) === 0) {
    if (r2.cmpn(0) !== 0)
      return this.curve.jpoint(null, null, null);
    else
      return this.dbl();
  }
  var h2 = h.redSqr();
  var h3 = h2.redMul(h);
  var v2 = u1.redMul(h2);
  var nx = r2.redSqr().redIAdd(h3).redISub(v2).redISub(v2);
  var ny = r2.redMul(v2.redISub(nx)).redISub(s1.redMul(h3));
  var nz = this.z.redMul(h);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.dblp = function dblp2(pow3) {
  if (pow3 === 0)
    return this;
  if (this.isInfinity())
    return this;
  if (!pow3)
    return this.dbl();
  var i;
  if (this.curve.zeroA || this.curve.threeA) {
    var r2 = this;
    for (i = 0; i < pow3; i++)
      r2 = r2.dbl();
    return r2;
  }
  var a = this.curve.a;
  var tinv = this.curve.tinv;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jyd = jy.redAdd(jy);
  for (i = 0; i < pow3; i++) {
    var jx2 = jx.redSqr();
    var jyd2 = jyd.redSqr();
    var jyd4 = jyd2.redSqr();
    var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
    var t1 = jx.redMul(jyd2);
    var nx = c.redSqr().redISub(t1.redAdd(t1));
    var t2 = t1.redISub(nx);
    var dny = c.redMul(t2);
    dny = dny.redIAdd(dny).redISub(jyd4);
    var nz = jyd.redMul(jz);
    if (i + 1 < pow3)
      jz4 = jz4.redMul(jyd4);
    jx = nx;
    jz = nz;
    jyd = dny;
  }
  return this.curve.jpoint(jx, jyd.redMul(tinv), jz);
};
JPoint.prototype.dbl = function dbl2() {
  if (this.isInfinity())
    return this;
  if (this.curve.zeroA)
    return this._zeroDbl();
  else if (this.curve.threeA)
    return this._threeDbl();
  else
    return this._dbl();
};
JPoint.prototype._zeroDbl = function _zeroDbl() {
  var nx;
  var ny;
  var nz;
  if (this.zOne) {
    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s2 = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s2 = s2.redIAdd(s2);
    var m2 = xx.redAdd(xx).redIAdd(xx);
    var t = m2.redSqr().redISub(s2).redISub(s2);
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    nx = t;
    ny = m2.redMul(s2.redISub(t)).redISub(yyyy8);
    nz = this.y.redAdd(this.y);
  } else {
    var a = this.x.redSqr();
    var b = this.y.redSqr();
    var c = b.redSqr();
    var d = this.x.redAdd(b).redSqr().redISub(a).redISub(c);
    d = d.redIAdd(d);
    var e = a.redAdd(a).redIAdd(a);
    var f2 = e.redSqr();
    var c8 = c.redIAdd(c);
    c8 = c8.redIAdd(c8);
    c8 = c8.redIAdd(c8);
    nx = f2.redISub(d).redISub(d);
    ny = e.redMul(d.redISub(nx)).redISub(c8);
    nz = this.y.redMul(this.z);
    nz = nz.redIAdd(nz);
  }
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype._threeDbl = function _threeDbl() {
  var nx;
  var ny;
  var nz;
  if (this.zOne) {
    var xx = this.x.redSqr();
    var yy = this.y.redSqr();
    var yyyy = yy.redSqr();
    var s2 = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
    s2 = s2.redIAdd(s2);
    var m2 = xx.redAdd(xx).redIAdd(xx).redIAdd(this.curve.a);
    var t = m2.redSqr().redISub(s2).redISub(s2);
    nx = t;
    var yyyy8 = yyyy.redIAdd(yyyy);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    yyyy8 = yyyy8.redIAdd(yyyy8);
    ny = m2.redMul(s2.redISub(t)).redISub(yyyy8);
    nz = this.y.redAdd(this.y);
  } else {
    var delta = this.z.redSqr();
    var gamma = this.y.redSqr();
    var beta = this.x.redMul(gamma);
    var alpha = this.x.redSub(delta).redMul(this.x.redAdd(delta));
    alpha = alpha.redAdd(alpha).redIAdd(alpha);
    var beta4 = beta.redIAdd(beta);
    beta4 = beta4.redIAdd(beta4);
    var beta8 = beta4.redAdd(beta4);
    nx = alpha.redSqr().redISub(beta8);
    nz = this.y.redAdd(this.z).redSqr().redISub(gamma).redISub(delta);
    var ggamma8 = gamma.redSqr();
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ggamma8 = ggamma8.redIAdd(ggamma8);
    ny = alpha.redMul(beta4.redISub(nx)).redISub(ggamma8);
  }
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype._dbl = function _dbl() {
  var a = this.curve.a;
  var jx = this.x;
  var jy = this.y;
  var jz = this.z;
  var jz4 = jz.redSqr().redSqr();
  var jx2 = jx.redSqr();
  var jy2 = jy.redSqr();
  var c = jx2.redAdd(jx2).redIAdd(jx2).redIAdd(a.redMul(jz4));
  var jxd4 = jx.redAdd(jx);
  jxd4 = jxd4.redIAdd(jxd4);
  var t1 = jxd4.redMul(jy2);
  var nx = c.redSqr().redISub(t1.redAdd(t1));
  var t2 = t1.redISub(nx);
  var jyd8 = jy2.redSqr();
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  jyd8 = jyd8.redIAdd(jyd8);
  var ny = c.redMul(t2).redISub(jyd8);
  var nz = jy.redAdd(jy).redMul(jz);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.trpl = function trpl() {
  if (!this.curve.zeroA)
    return this.dbl().add(this);
  var xx = this.x.redSqr();
  var yy = this.y.redSqr();
  var zz = this.z.redSqr();
  var yyyy = yy.redSqr();
  var m2 = xx.redAdd(xx).redIAdd(xx);
  var mm = m2.redSqr();
  var e = this.x.redAdd(yy).redSqr().redISub(xx).redISub(yyyy);
  e = e.redIAdd(e);
  e = e.redAdd(e).redIAdd(e);
  e = e.redISub(mm);
  var ee = e.redSqr();
  var t = yyyy.redIAdd(yyyy);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  t = t.redIAdd(t);
  var u = m2.redIAdd(e).redSqr().redISub(mm).redISub(ee).redISub(t);
  var yyu4 = yy.redMul(u);
  yyu4 = yyu4.redIAdd(yyu4);
  yyu4 = yyu4.redIAdd(yyu4);
  var nx = this.x.redMul(ee).redISub(yyu4);
  nx = nx.redIAdd(nx);
  nx = nx.redIAdd(nx);
  var ny = this.y.redMul(u.redMul(t.redISub(u)).redISub(e.redMul(ee)));
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  ny = ny.redIAdd(ny);
  var nz = this.z.redAdd(e).redSqr().redISub(zz).redISub(ee);
  return this.curve.jpoint(nx, ny, nz);
};
JPoint.prototype.mul = function mul3(k, kbase) {
  k = new BN$7(k, kbase);
  return this.curve._wnafMul(this, k);
};
JPoint.prototype.eq = function eq3(p) {
  if (p.type === "affine")
    return this.eq(p.toJ());
  if (this === p)
    return true;
  var z2 = this.z.redSqr();
  var pz2 = p.z.redSqr();
  if (this.x.redMul(pz2).redISub(p.x.redMul(z2)).cmpn(0) !== 0)
    return false;
  var z3 = z2.redMul(this.z);
  var pz3 = pz2.redMul(p.z);
  return this.y.redMul(pz3).redISub(p.y.redMul(z3)).cmpn(0) === 0;
};
JPoint.prototype.eqXToP = function eqXToP(x) {
  var zs = this.z.redSqr();
  var rx = x.toRed(this.curve.red).redMul(zs);
  if (this.x.cmp(rx) === 0)
    return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(zs);
  for (; ; ) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0)
      return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
};
JPoint.prototype.inspect = function inspect2() {
  if (this.isInfinity())
    return "<EC JPoint Infinity>";
  return "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
};
JPoint.prototype.isInfinity = function isInfinity2() {
  return this.z.cmpn(0) === 0;
};
var BN$6 = bnExports;
var inherits$2 = inherits_browserExports;
var Base$1 = base;
var utils$i = utils$m;
function MontCurve(conf) {
  Base$1.call(this, "mont", conf);
  this.a = new BN$6(conf.a, 16).toRed(this.red);
  this.b = new BN$6(conf.b, 16).toRed(this.red);
  this.i4 = new BN$6(4).toRed(this.red).redInvm();
  this.two = new BN$6(2).toRed(this.red);
  this.a24 = this.i4.redMul(this.a.redAdd(this.two));
}
inherits$2(MontCurve, Base$1);
var mont = MontCurve;
MontCurve.prototype.validate = function validate4(point5) {
  var x = point5.normalize().x;
  var x2 = x.redSqr();
  var rhs = x2.redMul(x).redAdd(x2.redMul(this.a)).redAdd(x);
  var y = rhs.redSqrt();
  return y.redSqr().cmp(rhs) === 0;
};
function Point$1(curve2, x, z) {
  Base$1.BasePoint.call(this, curve2, "projective");
  if (x === null && z === null) {
    this.x = this.curve.one;
    this.z = this.curve.zero;
  } else {
    this.x = new BN$6(x, 16);
    this.z = new BN$6(z, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
  }
}
inherits$2(Point$1, Base$1.BasePoint);
MontCurve.prototype.decodePoint = function decodePoint2(bytes2, enc) {
  return this.point(utils$i.toArray(bytes2, enc), 1);
};
MontCurve.prototype.point = function point3(x, z) {
  return new Point$1(this, x, z);
};
MontCurve.prototype.pointFromJSON = function pointFromJSON2(obj) {
  return Point$1.fromJSON(this, obj);
};
Point$1.prototype.precompute = function precompute3() {
};
Point$1.prototype._encode = function _encode2() {
  return this.getX().toArray("be", this.curve.p.byteLength());
};
Point$1.fromJSON = function fromJSON2(curve2, obj) {
  return new Point$1(curve2, obj[0], obj[1] || curve2.one);
};
Point$1.prototype.inspect = function inspect3() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
Point$1.prototype.isInfinity = function isInfinity3() {
  return this.z.cmpn(0) === 0;
};
Point$1.prototype.dbl = function dbl3() {
  var a = this.x.redAdd(this.z);
  var aa = a.redSqr();
  var b = this.x.redSub(this.z);
  var bb = b.redSqr();
  var c = aa.redSub(bb);
  var nx = aa.redMul(bb);
  var nz = c.redMul(bb.redAdd(this.curve.a24.redMul(c)));
  return this.curve.point(nx, nz);
};
Point$1.prototype.add = function add4() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.diffAdd = function diffAdd(p, diff) {
  var a = this.x.redAdd(this.z);
  var b = this.x.redSub(this.z);
  var c = p.x.redAdd(p.z);
  var d = p.x.redSub(p.z);
  var da = d.redMul(a);
  var cb = c.redMul(b);
  var nx = diff.z.redMul(da.redAdd(cb).redSqr());
  var nz = diff.x.redMul(da.redISub(cb).redSqr());
  return this.curve.point(nx, nz);
};
Point$1.prototype.mul = function mul4(k) {
  var t = k.clone();
  var a = this;
  var b = this.curve.point(null, null);
  var c = this;
  for (var bits = []; t.cmpn(0) !== 0; t.iushrn(1))
    bits.push(t.andln(1));
  for (var i = bits.length - 1; i >= 0; i--) {
    if (bits[i] === 0) {
      a = a.diffAdd(b, c);
      b = b.dbl();
    } else {
      b = a.diffAdd(b, c);
      a = a.dbl();
    }
  }
  return b;
};
Point$1.prototype.mulAdd = function mulAdd2() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.jumlAdd = function jumlAdd() {
  throw new Error("Not supported on Montgomery curve");
};
Point$1.prototype.eq = function eq4(other) {
  return this.getX().cmp(other.getX()) === 0;
};
Point$1.prototype.normalize = function normalize() {
  this.x = this.x.redMul(this.z.redInvm());
  this.z = this.curve.one;
  return this;
};
Point$1.prototype.getX = function getX2() {
  this.normalize();
  return this.x.fromRed();
};
var utils$h = utils$m;
var BN$5 = bnExports;
var inherits$1 = inherits_browserExports;
var Base = base;
var assert$c = utils$h.assert;
function EdwardsCurve(conf) {
  this.twisted = (conf.a | 0) !== 1;
  this.mOneA = this.twisted && (conf.a | 0) === -1;
  this.extended = this.mOneA;
  Base.call(this, "edwards", conf);
  this.a = new BN$5(conf.a, 16).umod(this.red.m);
  this.a = this.a.toRed(this.red);
  this.c = new BN$5(conf.c, 16).toRed(this.red);
  this.c2 = this.c.redSqr();
  this.d = new BN$5(conf.d, 16).toRed(this.red);
  this.dd = this.d.redAdd(this.d);
  assert$c(!this.twisted || this.c.fromRed().cmpn(1) === 0);
  this.oneC = (conf.c | 0) === 1;
}
inherits$1(EdwardsCurve, Base);
var edwards = EdwardsCurve;
EdwardsCurve.prototype._mulA = function _mulA(num) {
  if (this.mOneA)
    return num.redNeg();
  else
    return this.a.redMul(num);
};
EdwardsCurve.prototype._mulC = function _mulC(num) {
  if (this.oneC)
    return num;
  else
    return this.c.redMul(num);
};
EdwardsCurve.prototype.jpoint = function jpoint2(x, y, z, t) {
  return this.point(x, y, z, t);
};
EdwardsCurve.prototype.pointFromX = function pointFromX2(x, odd) {
  x = new BN$5(x, 16);
  if (!x.red)
    x = x.toRed(this.red);
  var x2 = x.redSqr();
  var rhs = this.c2.redSub(this.a.redMul(x2));
  var lhs = this.one.redSub(this.c2.redMul(this.d).redMul(x2));
  var y2 = rhs.redMul(lhs.redInvm());
  var y = y2.redSqrt();
  if (y.redSqr().redSub(y2).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var isOdd2 = y.fromRed().isOdd();
  if (odd && !isOdd2 || !odd && isOdd2)
    y = y.redNeg();
  return this.point(x, y);
};
EdwardsCurve.prototype.pointFromY = function pointFromY(y, odd) {
  y = new BN$5(y, 16);
  if (!y.red)
    y = y.toRed(this.red);
  var y2 = y.redSqr();
  var lhs = y2.redSub(this.c2);
  var rhs = y2.redMul(this.d).redMul(this.c2).redSub(this.a);
  var x2 = lhs.redMul(rhs.redInvm());
  if (x2.cmp(this.zero) === 0) {
    if (odd)
      throw new Error("invalid point");
    else
      return this.point(this.zero, y);
  }
  var x = x2.redSqrt();
  if (x.redSqr().redSub(x2).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  if (x.fromRed().isOdd() !== odd)
    x = x.redNeg();
  return this.point(x, y);
};
EdwardsCurve.prototype.validate = function validate5(point5) {
  if (point5.isInfinity())
    return true;
  point5.normalize();
  var x2 = point5.x.redSqr();
  var y2 = point5.y.redSqr();
  var lhs = x2.redMul(this.a).redAdd(y2);
  var rhs = this.c2.redMul(this.one.redAdd(this.d.redMul(x2).redMul(y2)));
  return lhs.cmp(rhs) === 0;
};
function Point2(curve2, x, y, z, t) {
  Base.BasePoint.call(this, curve2, "projective");
  if (x === null && y === null && z === null) {
    this.x = this.curve.zero;
    this.y = this.curve.one;
    this.z = this.curve.one;
    this.t = this.curve.zero;
    this.zOne = true;
  } else {
    this.x = new BN$5(x, 16);
    this.y = new BN$5(y, 16);
    this.z = z ? new BN$5(z, 16) : this.curve.one;
    this.t = t && new BN$5(t, 16);
    if (!this.x.red)
      this.x = this.x.toRed(this.curve.red);
    if (!this.y.red)
      this.y = this.y.toRed(this.curve.red);
    if (!this.z.red)
      this.z = this.z.toRed(this.curve.red);
    if (this.t && !this.t.red)
      this.t = this.t.toRed(this.curve.red);
    this.zOne = this.z === this.curve.one;
    if (this.curve.extended && !this.t) {
      this.t = this.x.redMul(this.y);
      if (!this.zOne)
        this.t = this.t.redMul(this.z.redInvm());
    }
  }
}
inherits$1(Point2, Base.BasePoint);
EdwardsCurve.prototype.pointFromJSON = function pointFromJSON3(obj) {
  return Point2.fromJSON(this, obj);
};
EdwardsCurve.prototype.point = function point4(x, y, z, t) {
  return new Point2(this, x, y, z, t);
};
Point2.fromJSON = function fromJSON3(curve2, obj) {
  return new Point2(curve2, obj[0], obj[1], obj[2]);
};
Point2.prototype.inspect = function inspect4() {
  if (this.isInfinity())
    return "<EC Point Infinity>";
  return "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
};
Point2.prototype.isInfinity = function isInfinity4() {
  return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0);
};
Point2.prototype._extDbl = function _extDbl() {
  var a = this.x.redSqr();
  var b = this.y.redSqr();
  var c = this.z.redSqr();
  c = c.redIAdd(c);
  var d = this.curve._mulA(a);
  var e = this.x.redAdd(this.y).redSqr().redISub(a).redISub(b);
  var g = d.redAdd(b);
  var f2 = g.redSub(c);
  var h = d.redSub(b);
  var nx = e.redMul(f2);
  var ny = g.redMul(h);
  var nt = e.redMul(h);
  var nz = f2.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};
Point2.prototype._projDbl = function _projDbl() {
  var b = this.x.redAdd(this.y).redSqr();
  var c = this.x.redSqr();
  var d = this.y.redSqr();
  var nx;
  var ny;
  var nz;
  var e;
  var h;
  var j;
  if (this.curve.twisted) {
    e = this.curve._mulA(c);
    var f2 = e.redAdd(d);
    if (this.zOne) {
      nx = b.redSub(c).redSub(d).redMul(f2.redSub(this.curve.two));
      ny = f2.redMul(e.redSub(d));
      nz = f2.redSqr().redSub(f2).redSub(f2);
    } else {
      h = this.z.redSqr();
      j = f2.redSub(h).redISub(h);
      nx = b.redSub(c).redISub(d).redMul(j);
      ny = f2.redMul(e.redSub(d));
      nz = f2.redMul(j);
    }
  } else {
    e = c.redAdd(d);
    h = this.curve._mulC(this.z).redSqr();
    j = e.redSub(h).redSub(h);
    nx = this.curve._mulC(b.redISub(e)).redMul(j);
    ny = this.curve._mulC(e).redMul(c.redISub(d));
    nz = e.redMul(j);
  }
  return this.curve.point(nx, ny, nz);
};
Point2.prototype.dbl = function dbl4() {
  if (this.isInfinity())
    return this;
  if (this.curve.extended)
    return this._extDbl();
  else
    return this._projDbl();
};
Point2.prototype._extAdd = function _extAdd(p) {
  var a = this.y.redSub(this.x).redMul(p.y.redSub(p.x));
  var b = this.y.redAdd(this.x).redMul(p.y.redAdd(p.x));
  var c = this.t.redMul(this.curve.dd).redMul(p.t);
  var d = this.z.redMul(p.z.redAdd(p.z));
  var e = b.redSub(a);
  var f2 = d.redSub(c);
  var g = d.redAdd(c);
  var h = b.redAdd(a);
  var nx = e.redMul(f2);
  var ny = g.redMul(h);
  var nt = e.redMul(h);
  var nz = f2.redMul(g);
  return this.curve.point(nx, ny, nz, nt);
};
Point2.prototype._projAdd = function _projAdd(p) {
  var a = this.z.redMul(p.z);
  var b = a.redSqr();
  var c = this.x.redMul(p.x);
  var d = this.y.redMul(p.y);
  var e = this.curve.d.redMul(c).redMul(d);
  var f2 = b.redSub(e);
  var g = b.redAdd(e);
  var tmp = this.x.redAdd(this.y).redMul(p.x.redAdd(p.y)).redISub(c).redISub(d);
  var nx = a.redMul(f2).redMul(tmp);
  var ny;
  var nz;
  if (this.curve.twisted) {
    ny = a.redMul(g).redMul(d.redSub(this.curve._mulA(c)));
    nz = f2.redMul(g);
  } else {
    ny = a.redMul(g).redMul(d.redSub(c));
    nz = this.curve._mulC(f2).redMul(g);
  }
  return this.curve.point(nx, ny, nz);
};
Point2.prototype.add = function add5(p) {
  if (this.isInfinity())
    return p;
  if (p.isInfinity())
    return this;
  if (this.curve.extended)
    return this._extAdd(p);
  else
    return this._projAdd(p);
};
Point2.prototype.mul = function mul5(k) {
  if (this._hasDoubles(k))
    return this.curve._fixedNafMul(this, k);
  else
    return this.curve._wnafMul(this, k);
};
Point2.prototype.mulAdd = function mulAdd3(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, false);
};
Point2.prototype.jmulAdd = function jmulAdd2(k1, p, k2) {
  return this.curve._wnafMulAdd(1, [this, p], [k1, k2], 2, true);
};
Point2.prototype.normalize = function normalize2() {
  if (this.zOne)
    return this;
  var zi = this.z.redInvm();
  this.x = this.x.redMul(zi);
  this.y = this.y.redMul(zi);
  if (this.t)
    this.t = this.t.redMul(zi);
  this.z = this.curve.one;
  this.zOne = true;
  return this;
};
Point2.prototype.neg = function neg3() {
  return this.curve.point(
    this.x.redNeg(),
    this.y,
    this.z,
    this.t && this.t.redNeg()
  );
};
Point2.prototype.getX = function getX3() {
  this.normalize();
  return this.x.fromRed();
};
Point2.prototype.getY = function getY2() {
  this.normalize();
  return this.y.fromRed();
};
Point2.prototype.eq = function eq5(other) {
  return this === other || this.getX().cmp(other.getX()) === 0 && this.getY().cmp(other.getY()) === 0;
};
Point2.prototype.eqXToP = function eqXToP2(x) {
  var rx = x.toRed(this.curve.red).redMul(this.z);
  if (this.x.cmp(rx) === 0)
    return true;
  var xc = x.clone();
  var t = this.curve.redN.redMul(this.z);
  for (; ; ) {
    xc.iadd(this.curve.n);
    if (xc.cmp(this.curve.p) >= 0)
      return false;
    rx.redIAdd(t);
    if (this.x.cmp(rx) === 0)
      return true;
  }
};
Point2.prototype.toP = Point2.prototype.normalize;
Point2.prototype.mixedAdd = Point2.prototype.add;
(function(exports) {
  var curve2 = exports;
  curve2.base = base;
  curve2.short = short;
  curve2.mont = mont;
  curve2.edwards = edwards;
})(curve);
var curves$2 = {};
var hash$3 = {};
var utils$g = {};
var assert$b = minimalisticAssert;
var inherits = inherits_browserExports;
utils$g.inherits = inherits;
function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 64512) !== 55296) {
    return false;
  }
  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }
  return (msg.charCodeAt(i + 1) & 64512) === 56320;
}
function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === "string") {
    if (!enc) {
      var p = 0;
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = c >> 6 | 192;
          res[p++] = c & 63 | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 65536 + ((c & 1023) << 10) + (msg.charCodeAt(++i) & 1023);
          res[p++] = c >> 18 | 240;
          res[p++] = c >> 12 & 63 | 128;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        } else {
          res[p++] = c >> 12 | 224;
          res[p++] = c >> 6 & 63 | 128;
          res[p++] = c & 63 | 128;
        }
      }
    } else if (enc === "hex") {
      msg = msg.replace(/[^a-z0-9]+/ig, "");
      if (msg.length % 2 !== 0)
        msg = "0" + msg;
      for (i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
utils$g.toArray = toArray;
function toHex$1(msg) {
  var res = "";
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils$g.toHex = toHex$1;
function htonl(w) {
  var res = w >>> 24 | w >>> 8 & 65280 | w << 8 & 16711680 | (w & 255) << 24;
  return res >>> 0;
}
utils$g.htonl = htonl;
function toHex32(msg, endian) {
  var res = "";
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === "little")
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
utils$g.toHex32 = toHex32;
function zero2(word) {
  if (word.length === 1)
    return "0" + word;
  else
    return word;
}
utils$g.zero2 = zero2;
function zero8(word) {
  if (word.length === 7)
    return "0" + word;
  else if (word.length === 6)
    return "00" + word;
  else if (word.length === 5)
    return "000" + word;
  else if (word.length === 4)
    return "0000" + word;
  else if (word.length === 3)
    return "00000" + word;
  else if (word.length === 2)
    return "000000" + word;
  else if (word.length === 1)
    return "0000000" + word;
  else
    return word;
}
utils$g.zero8 = zero8;
function join32(msg, start, end, endian) {
  var len = end - start;
  assert$b(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === "big")
      w = msg[k] << 24 | msg[k + 1] << 16 | msg[k + 2] << 8 | msg[k + 3];
    else
      w = msg[k + 3] << 24 | msg[k + 2] << 16 | msg[k + 1] << 8 | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
utils$g.join32 = join32;
function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m2 = msg[i];
    if (endian === "big") {
      res[k] = m2 >>> 24;
      res[k + 1] = m2 >>> 16 & 255;
      res[k + 2] = m2 >>> 8 & 255;
      res[k + 3] = m2 & 255;
    } else {
      res[k + 3] = m2 >>> 24;
      res[k + 2] = m2 >>> 16 & 255;
      res[k + 1] = m2 >>> 8 & 255;
      res[k] = m2 & 255;
    }
  }
  return res;
}
utils$g.split32 = split32;
function rotr32$1(w, b) {
  return w >>> b | w << 32 - b;
}
utils$g.rotr32 = rotr32$1;
function rotl32$2(w, b) {
  return w << b | w >>> 32 - b;
}
utils$g.rotl32 = rotl32$2;
function sum32$3(a, b) {
  return a + b >>> 0;
}
utils$g.sum32 = sum32$3;
function sum32_3$1(a, b, c) {
  return a + b + c >>> 0;
}
utils$g.sum32_3 = sum32_3$1;
function sum32_4$2(a, b, c, d) {
  return a + b + c + d >>> 0;
}
utils$g.sum32_4 = sum32_4$2;
function sum32_5$2(a, b, c, d, e) {
  return a + b + c + d + e >>> 0;
}
utils$g.sum32_5 = sum32_5$2;
function sum64$1(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
utils$g.sum64 = sum64$1;
function sum64_hi$1(ah, al, bh, bl) {
  var lo = al + bl >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}
utils$g.sum64_hi = sum64_hi$1;
function sum64_lo$1(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}
utils$g.sum64_lo = sum64_lo$1;
function sum64_4_hi$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}
utils$g.sum64_4_hi = sum64_4_hi$1;
function sum64_4_lo$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}
utils$g.sum64_4_lo = sum64_4_lo$1;
function sum64_5_hi$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = lo + bl >>> 0;
  carry += lo < al ? 1 : 0;
  lo = lo + cl >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = lo + dl >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = lo + el >>> 0;
  carry += lo < el ? 1 : 0;
  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}
utils$g.sum64_5_hi = sum64_5_hi$1;
function sum64_5_lo$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;
  return lo >>> 0;
}
utils$g.sum64_5_lo = sum64_5_lo$1;
function rotr64_hi$1(ah, al, num) {
  var r2 = al << 32 - num | ah >>> num;
  return r2 >>> 0;
}
utils$g.rotr64_hi = rotr64_hi$1;
function rotr64_lo$1(ah, al, num) {
  var r2 = ah << 32 - num | al >>> num;
  return r2 >>> 0;
}
utils$g.rotr64_lo = rotr64_lo$1;
function shr64_hi$1(ah, al, num) {
  return ah >>> num;
}
utils$g.shr64_hi = shr64_hi$1;
function shr64_lo$1(ah, al, num) {
  var r2 = ah << 32 - num | al >>> num;
  return r2 >>> 0;
}
utils$g.shr64_lo = shr64_lo$1;
var common$5 = {};
var utils$f = utils$g;
var assert$a = minimalisticAssert;
function BlockHash$4() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = "big";
  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
common$5.BlockHash = BlockHash$4;
BlockHash$4.prototype.update = function update(msg, enc) {
  msg = utils$f.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;
  if (this.pending.length >= this._delta8) {
    msg = this.pending;
    var r2 = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r2, msg.length);
    if (this.pending.length === 0)
      this.pending = null;
    msg = utils$f.join32(msg, 0, msg.length - r2, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }
  return this;
};
BlockHash$4.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert$a(this.pending === null);
  return this._digest(enc);
};
BlockHash$4.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes2 = this._delta8;
  var k = bytes2 - (len + this.padLength) % bytes2;
  var res = new Array(k + this.padLength);
  res[0] = 128;
  for (var i = 1; i < k; i++)
    res[i] = 0;
  len <<= 3;
  if (this.endian === "big") {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = len >>> 24 & 255;
    res[i++] = len >>> 16 & 255;
    res[i++] = len >>> 8 & 255;
    res[i++] = len & 255;
  } else {
    res[i++] = len & 255;
    res[i++] = len >>> 8 & 255;
    res[i++] = len >>> 16 & 255;
    res[i++] = len >>> 24 & 255;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    for (t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }
  return res;
};
var sha = {};
var common$4 = {};
var utils$e = utils$g;
var rotr32 = utils$e.rotr32;
function ft_1$1(s2, x, y, z) {
  if (s2 === 0)
    return ch32$1(x, y, z);
  if (s2 === 1 || s2 === 3)
    return p32(x, y, z);
  if (s2 === 2)
    return maj32$1(x, y, z);
}
common$4.ft_1 = ft_1$1;
function ch32$1(x, y, z) {
  return x & y ^ ~x & z;
}
common$4.ch32 = ch32$1;
function maj32$1(x, y, z) {
  return x & y ^ x & z ^ y & z;
}
common$4.maj32 = maj32$1;
function p32(x, y, z) {
  return x ^ y ^ z;
}
common$4.p32 = p32;
function s0_256$1(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
common$4.s0_256 = s0_256$1;
function s1_256$1(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
common$4.s1_256 = s1_256$1;
function g0_256$1(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ x >>> 3;
}
common$4.g0_256 = g0_256$1;
function g1_256$1(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ x >>> 10;
}
common$4.g1_256 = g1_256$1;
var utils$d = utils$g;
var common$3 = common$5;
var shaCommon$1 = common$4;
var rotl32$1 = utils$d.rotl32;
var sum32$2 = utils$d.sum32;
var sum32_5$1 = utils$d.sum32_5;
var ft_1 = shaCommon$1.ft_1;
var BlockHash$3 = common$3.BlockHash;
var sha1_K = [
  1518500249,
  1859775393,
  2400959708,
  3395469782
];
function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();
  BlockHash$3.call(this);
  this.h = [
    1732584193,
    4023233417,
    2562383102,
    271733878,
    3285377520
  ];
  this.W = new Array(80);
}
utils$d.inherits(SHA1, BlockHash$3);
var _1 = SHA1;
SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;
SHA1.prototype._update = function _update(msg, start) {
  var W2 = this.W;
  for (var i = 0; i < 16; i++)
    W2[i] = msg[start + i];
  for (; i < W2.length; i++)
    W2[i] = rotl32$1(W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16], 1);
  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  for (i = 0; i < W2.length; i++) {
    var s2 = ~~(i / 20);
    var t = sum32_5$1(rotl32$1(a, 5), ft_1(s2, b, c, d), e, W2[i], sha1_K[s2]);
    e = d;
    d = c;
    c = rotl32$1(b, 30);
    b = a;
    a = t;
  }
  this.h[0] = sum32$2(this.h[0], a);
  this.h[1] = sum32$2(this.h[1], b);
  this.h[2] = sum32$2(this.h[2], c);
  this.h[3] = sum32$2(this.h[3], d);
  this.h[4] = sum32$2(this.h[4], e);
};
SHA1.prototype._digest = function digest2(enc) {
  if (enc === "hex")
    return utils$d.toHex32(this.h, "big");
  else
    return utils$d.split32(this.h, "big");
};
var utils$c = utils$g;
var common$2 = common$5;
var shaCommon = common$4;
var assert$9 = minimalisticAssert;
var sum32$1 = utils$c.sum32;
var sum32_4$1 = utils$c.sum32_4;
var sum32_5 = utils$c.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;
var BlockHash$2 = common$2.BlockHash;
var sha256_K = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
function SHA256$1() {
  if (!(this instanceof SHA256$1))
    return new SHA256$1();
  BlockHash$2.call(this);
  this.h = [
    1779033703,
    3144134277,
    1013904242,
    2773480762,
    1359893119,
    2600822924,
    528734635,
    1541459225
  ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils$c.inherits(SHA256$1, BlockHash$2);
var _256 = SHA256$1;
SHA256$1.blockSize = 512;
SHA256$1.outSize = 256;
SHA256$1.hmacStrength = 192;
SHA256$1.padLength = 64;
SHA256$1.prototype._update = function _update2(msg, start) {
  var W2 = this.W;
  for (var i = 0; i < 16; i++)
    W2[i] = msg[start + i];
  for (; i < W2.length; i++)
    W2[i] = sum32_4$1(g1_256(W2[i - 2]), W2[i - 7], g0_256(W2[i - 15]), W2[i - 16]);
  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f2 = this.h[5];
  var g = this.h[6];
  var h = this.h[7];
  assert$9(this.k.length === W2.length);
  for (i = 0; i < W2.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f2, g), this.k[i], W2[i]);
    var T2 = sum32$1(s0_256(a), maj32(a, b, c));
    h = g;
    g = f2;
    f2 = e;
    e = sum32$1(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32$1(T1, T2);
  }
  this.h[0] = sum32$1(this.h[0], a);
  this.h[1] = sum32$1(this.h[1], b);
  this.h[2] = sum32$1(this.h[2], c);
  this.h[3] = sum32$1(this.h[3], d);
  this.h[4] = sum32$1(this.h[4], e);
  this.h[5] = sum32$1(this.h[5], f2);
  this.h[6] = sum32$1(this.h[6], g);
  this.h[7] = sum32$1(this.h[7], h);
};
SHA256$1.prototype._digest = function digest3(enc) {
  if (enc === "hex")
    return utils$c.toHex32(this.h, "big");
  else
    return utils$c.split32(this.h, "big");
};
var utils$b = utils$g;
var SHA256 = _256;
function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();
  SHA256.call(this);
  this.h = [
    3238371032,
    914150663,
    812702999,
    4144912697,
    4290775857,
    1750603025,
    1694076839,
    3204075428
  ];
}
utils$b.inherits(SHA224, SHA256);
var _224 = SHA224;
SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;
SHA224.prototype._digest = function digest4(enc) {
  if (enc === "hex")
    return utils$b.toHex32(this.h.slice(0, 7), "big");
  else
    return utils$b.split32(this.h.slice(0, 7), "big");
};
var utils$a = utils$g;
var common$1 = common$5;
var assert$8 = minimalisticAssert;
var rotr64_hi = utils$a.rotr64_hi;
var rotr64_lo = utils$a.rotr64_lo;
var shr64_hi = utils$a.shr64_hi;
var shr64_lo = utils$a.shr64_lo;
var sum64 = utils$a.sum64;
var sum64_hi = utils$a.sum64_hi;
var sum64_lo = utils$a.sum64_lo;
var sum64_4_hi = utils$a.sum64_4_hi;
var sum64_4_lo = utils$a.sum64_4_lo;
var sum64_5_hi = utils$a.sum64_5_hi;
var sum64_5_lo = utils$a.sum64_5_lo;
var BlockHash$1 = common$1.BlockHash;
var sha512_K = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
function SHA512$1() {
  if (!(this instanceof SHA512$1))
    return new SHA512$1();
  BlockHash$1.call(this);
  this.h = [
    1779033703,
    4089235720,
    3144134277,
    2227873595,
    1013904242,
    4271175723,
    2773480762,
    1595750129,
    1359893119,
    2917565137,
    2600822924,
    725511199,
    528734635,
    4215389547,
    1541459225,
    327033209
  ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils$a.inherits(SHA512$1, BlockHash$1);
var _512 = SHA512$1;
SHA512$1.blockSize = 1024;
SHA512$1.outSize = 512;
SHA512$1.hmacStrength = 192;
SHA512$1.padLength = 128;
SHA512$1.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W2 = this.W;
  for (var i = 0; i < 32; i++)
    W2[i] = msg[start + i];
  for (; i < W2.length; i += 2) {
    var c0_hi = g1_512_hi(W2[i - 4], W2[i - 3]);
    var c0_lo = g1_512_lo(W2[i - 4], W2[i - 3]);
    var c1_hi = W2[i - 14];
    var c1_lo = W2[i - 13];
    var c2_hi = g0_512_hi(W2[i - 30], W2[i - 29]);
    var c2_lo = g0_512_lo(W2[i - 30], W2[i - 29]);
    var c3_hi = W2[i - 32];
    var c3_lo = W2[i - 31];
    W2[i] = sum64_4_hi(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo
    );
    W2[i + 1] = sum64_4_lo(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo
    );
  }
};
SHA512$1.prototype._update = function _update3(msg, start) {
  this._prepareBlock(msg, start);
  var W2 = this.W;
  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];
  assert$8(this.k.length === W2.length);
  for (var i = 0; i < W2.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W2[i];
    var c4_lo = W2[i + 1];
    var T1_hi = sum64_5_hi(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo,
      c4_hi,
      c4_lo
    );
    var T1_lo = sum64_5_lo(
      c0_hi,
      c0_lo,
      c1_hi,
      c1_lo,
      c2_hi,
      c2_lo,
      c3_hi,
      c3_lo,
      c4_hi,
      c4_lo
    );
    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);
    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);
    hh = gh;
    hl = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);
    dh = ch;
    dl = cl;
    ch = bh;
    cl = bl;
    bh = ah;
    bl = al;
    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }
  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};
SHA512$1.prototype._digest = function digest5(enc) {
  if (enc === "hex")
    return utils$a.toHex32(this.h, "big");
  else
    return utils$a.split32(this.h, "big");
};
function ch64_hi(xh, xl, yh, yl, zh) {
  var r2 = xh & yh ^ ~xh & zh;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r2 = xl & yl ^ ~xl & zl;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function maj64_hi(xh, xl, yh, yl, zh) {
  var r2 = xh & yh ^ xh & zh ^ yh & zh;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r2 = xl & yl ^ xl & zl ^ yl & zl;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);
  var c2_hi = rotr64_hi(xl, xh, 7);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);
  var c2_lo = rotr64_lo(xl, xh, 7);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);
  var c2_hi = shr64_hi(xh, xl, 6);
  var r2 = c0_hi ^ c1_hi ^ c2_hi;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);
  var c2_lo = shr64_lo(xh, xl, 6);
  var r2 = c0_lo ^ c1_lo ^ c2_lo;
  if (r2 < 0)
    r2 += 4294967296;
  return r2;
}
var utils$9 = utils$g;
var SHA5122 = _512;
function SHA3842() {
  if (!(this instanceof SHA3842))
    return new SHA3842();
  SHA5122.call(this);
  this.h = [
    3418070365,
    3238371032,
    1654270250,
    914150663,
    2438529370,
    812702999,
    355462360,
    4144912697,
    1731405415,
    4290775857,
    2394180231,
    1750603025,
    3675008525,
    1694076839,
    1203062813,
    3204075428
  ];
}
utils$9.inherits(SHA3842, SHA5122);
var _384 = SHA3842;
SHA3842.blockSize = 1024;
SHA3842.outSize = 384;
SHA3842.hmacStrength = 192;
SHA3842.padLength = 128;
SHA3842.prototype._digest = function digest6(enc) {
  if (enc === "hex")
    return utils$9.toHex32(this.h.slice(0, 12), "big");
  else
    return utils$9.split32(this.h.slice(0, 12), "big");
};
sha.sha1 = _1;
sha.sha224 = _224;
sha.sha256 = _256;
sha.sha384 = _384;
sha.sha512 = _512;
var ripemd = {};
var utils$8 = utils$g;
var common = common$5;
var rotl32 = utils$8.rotl32;
var sum32 = utils$8.sum32;
var sum32_3 = utils$8.sum32_3;
var sum32_4 = utils$8.sum32_4;
var BlockHash = common.BlockHash;
function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();
  BlockHash.call(this);
  this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  this.endian = "little";
}
utils$8.inherits(RIPEMD160, BlockHash);
ripemd.ripemd160 = RIPEMD160;
RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;
RIPEMD160.prototype._update = function update2(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]
      ),
      E
    );
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]
      ),
      Eh
    );
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};
RIPEMD160.prototype._digest = function digest7(enc) {
  if (enc === "hex")
    return utils$8.toHex32(this.h, "little");
  else
    return utils$8.split32(this.h, "little");
};
function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return x & y | ~x & z;
  else if (j <= 47)
    return (x | ~y) ^ z;
  else if (j <= 63)
    return x & z | y & ~z;
  else
    return x ^ (y | ~z);
}
function K(j) {
  if (j <= 15)
    return 0;
  else if (j <= 31)
    return 1518500249;
  else if (j <= 47)
    return 1859775393;
  else if (j <= 63)
    return 2400959708;
  else
    return 2840853838;
}
function Kh(j) {
  if (j <= 15)
    return 1352829926;
  else if (j <= 31)
    return 1548603684;
  else if (j <= 47)
    return 1836072691;
  else if (j <= 63)
    return 2053994217;
  else
    return 0;
}
var r = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
];
var rh = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
];
var s = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
];
var sh = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
];
var utils$7 = utils$g;
var assert$7 = minimalisticAssert;
function Hmac(hash3, key2, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash3, key2, enc);
  this.Hash = hash3;
  this.blockSize = hash3.blockSize / 8;
  this.outSize = hash3.outSize / 8;
  this.inner = null;
  this.outer = null;
  this._init(utils$7.toArray(key2, enc));
}
var hmac = Hmac;
Hmac.prototype._init = function init(key2) {
  if (key2.length > this.blockSize)
    key2 = new this.Hash().update(key2).digest();
  assert$7(key2.length <= this.blockSize);
  for (var i = key2.length; i < this.blockSize; i++)
    key2.push(0);
  for (i = 0; i < key2.length; i++)
    key2[i] ^= 54;
  this.inner = new this.Hash().update(key2);
  for (i = 0; i < key2.length; i++)
    key2[i] ^= 106;
  this.outer = new this.Hash().update(key2);
};
Hmac.prototype.update = function update3(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};
Hmac.prototype.digest = function digest8(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};
(function(exports) {
  var hash3 = exports;
  hash3.utils = utils$g;
  hash3.common = common$5;
  hash3.sha = sha;
  hash3.ripemd = ripemd;
  hash3.hmac = hmac;
  hash3.sha1 = hash3.sha.sha1;
  hash3.sha256 = hash3.sha.sha256;
  hash3.sha224 = hash3.sha.sha224;
  hash3.sha384 = hash3.sha.sha384;
  hash3.sha512 = hash3.sha.sha512;
  hash3.ripemd160 = hash3.ripemd.ripemd160;
})(hash$3);
var secp256k1;
var hasRequiredSecp256k1;
function requireSecp256k1() {
  if (hasRequiredSecp256k1)
    return secp256k1;
  hasRequiredSecp256k1 = 1;
  secp256k1 = {
    doubles: {
      step: 4,
      points: [
        [
          "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
          "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
        ],
        [
          "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
          "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
        ],
        [
          "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
          "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
        ],
        [
          "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
          "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
        ],
        [
          "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
          "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
        ],
        [
          "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
          "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
        ],
        [
          "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
          "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
        ],
        [
          "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
          "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
        ],
        [
          "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
          "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
        ],
        [
          "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
          "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
        ],
        [
          "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
          "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
        ],
        [
          "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
          "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
        ],
        [
          "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
          "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
        ],
        [
          "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
          "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
        ],
        [
          "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
          "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
        ],
        [
          "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
          "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
        ],
        [
          "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
          "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
        ],
        [
          "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
          "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
        ],
        [
          "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
          "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
        ],
        [
          "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
          "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
        ],
        [
          "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
          "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
        ],
        [
          "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
          "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
        ],
        [
          "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
          "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
        ],
        [
          "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
          "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
        ],
        [
          "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
          "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
        ],
        [
          "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
          "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
        ],
        [
          "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
          "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
        ],
        [
          "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
          "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
        ],
        [
          "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
          "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
        ],
        [
          "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
          "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
        ],
        [
          "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
          "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
        ],
        [
          "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
          "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
        ],
        [
          "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
          "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
        ],
        [
          "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
          "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
        ],
        [
          "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
          "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
        ],
        [
          "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
          "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
        ],
        [
          "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
          "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
        ],
        [
          "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
          "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
        ],
        [
          "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
          "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
        ],
        [
          "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
          "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
        ],
        [
          "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
          "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
        ],
        [
          "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
          "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
        ],
        [
          "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
          "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
        ],
        [
          "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
          "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
        ],
        [
          "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
          "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
        ],
        [
          "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
          "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
        ],
        [
          "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
          "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
        ],
        [
          "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
          "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
        ],
        [
          "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
          "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
        ],
        [
          "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
          "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
        ],
        [
          "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
          "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
        ],
        [
          "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
          "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
        ],
        [
          "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
          "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
        ],
        [
          "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
          "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
        ],
        [
          "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
          "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
        ],
        [
          "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
          "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
        ],
        [
          "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
          "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
        ],
        [
          "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
          "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
        ],
        [
          "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
          "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
        ],
        [
          "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
          "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
        ],
        [
          "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
          "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
        ],
        [
          "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
          "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
        ],
        [
          "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
          "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
        ],
        [
          "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
          "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
        ],
        [
          "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
          "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
        ]
      ]
    },
    naf: {
      wnd: 7,
      points: [
        [
          "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
          "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
        ],
        [
          "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
          "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
        ],
        [
          "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
          "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
        ],
        [
          "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
          "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
        ],
        [
          "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
          "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
        ],
        [
          "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
          "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
        ],
        [
          "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
          "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
        ],
        [
          "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
          "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
        ],
        [
          "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
          "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
        ],
        [
          "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
          "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
        ],
        [
          "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
          "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
        ],
        [
          "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
          "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
        ],
        [
          "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
          "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
        ],
        [
          "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
          "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
        ],
        [
          "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
          "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
        ],
        [
          "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
          "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
        ],
        [
          "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
          "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
        ],
        [
          "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
          "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
        ],
        [
          "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
          "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
        ],
        [
          "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
          "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
        ],
        [
          "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
          "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
        ],
        [
          "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
          "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
        ],
        [
          "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
          "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
        ],
        [
          "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
          "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
        ],
        [
          "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
          "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
        ],
        [
          "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
          "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
        ],
        [
          "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
          "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
        ],
        [
          "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
          "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
        ],
        [
          "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
          "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
        ],
        [
          "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
          "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
        ],
        [
          "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
          "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
        ],
        [
          "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
          "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
        ],
        [
          "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
          "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
        ],
        [
          "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
          "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
        ],
        [
          "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
          "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
        ],
        [
          "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
          "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
        ],
        [
          "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
          "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
        ],
        [
          "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
          "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
        ],
        [
          "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
          "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
        ],
        [
          "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
          "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
        ],
        [
          "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
          "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
        ],
        [
          "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
          "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
        ],
        [
          "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
          "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
        ],
        [
          "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
          "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
        ],
        [
          "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
          "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
        ],
        [
          "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
          "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
        ],
        [
          "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
          "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
        ],
        [
          "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
          "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
        ],
        [
          "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
          "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
        ],
        [
          "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
          "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
        ],
        [
          "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
          "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
        ],
        [
          "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
          "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
        ],
        [
          "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
          "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
        ],
        [
          "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
          "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
        ],
        [
          "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
          "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
        ],
        [
          "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
          "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
        ],
        [
          "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
          "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
        ],
        [
          "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
          "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
        ],
        [
          "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
          "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
        ],
        [
          "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
          "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
        ],
        [
          "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
          "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
        ],
        [
          "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
          "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
        ],
        [
          "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
          "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
        ],
        [
          "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
          "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
        ],
        [
          "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
          "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
        ],
        [
          "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
          "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
        ],
        [
          "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
          "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
        ],
        [
          "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
          "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
        ],
        [
          "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
          "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
        ],
        [
          "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
          "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
        ],
        [
          "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
          "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
        ],
        [
          "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
          "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
        ],
        [
          "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
          "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
        ],
        [
          "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
          "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
        ],
        [
          "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
          "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
        ],
        [
          "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
          "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
        ],
        [
          "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
          "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
        ],
        [
          "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
          "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
        ],
        [
          "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
          "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
        ],
        [
          "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
          "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
        ],
        [
          "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
          "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
        ],
        [
          "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
          "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
        ],
        [
          "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
          "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
        ],
        [
          "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
          "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
        ],
        [
          "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
          "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
        ],
        [
          "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
          "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
        ],
        [
          "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
          "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
        ],
        [
          "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
          "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
        ],
        [
          "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
          "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
        ],
        [
          "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
          "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
        ],
        [
          "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
          "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
        ],
        [
          "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
          "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
        ],
        [
          "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
          "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
        ],
        [
          "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
          "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
        ],
        [
          "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
          "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
        ],
        [
          "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
          "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
        ],
        [
          "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
          "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
        ],
        [
          "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
          "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
        ],
        [
          "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
          "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
        ],
        [
          "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
          "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
        ],
        [
          "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
          "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
        ],
        [
          "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
          "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
        ],
        [
          "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
          "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
        ],
        [
          "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
          "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
        ],
        [
          "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
          "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
        ],
        [
          "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
          "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
        ],
        [
          "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
          "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
        ],
        [
          "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
          "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
        ],
        [
          "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
          "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
        ],
        [
          "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
          "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
        ],
        [
          "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
          "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
        ],
        [
          "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
          "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
        ],
        [
          "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
          "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
        ],
        [
          "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
          "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
        ],
        [
          "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
          "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
        ],
        [
          "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
          "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
        ],
        [
          "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
          "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
        ],
        [
          "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
          "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
        ],
        [
          "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
          "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
        ],
        [
          "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
          "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
        ],
        [
          "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
          "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
        ],
        [
          "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
          "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
        ],
        [
          "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
          "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
        ],
        [
          "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
          "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
        ],
        [
          "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
          "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
        ],
        [
          "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
          "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
        ],
        [
          "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
          "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
        ]
      ]
    }
  };
  return secp256k1;
}
(function(exports) {
  var curves2 = exports;
  var hash3 = hash$3;
  var curve$1 = curve;
  var utils2 = utils$m;
  var assert2 = utils2.assert;
  function PresetCurve(options) {
    if (options.type === "short")
      this.curve = new curve$1.short(options);
    else if (options.type === "edwards")
      this.curve = new curve$1.edwards(options);
    else
      this.curve = new curve$1.mont(options);
    this.g = this.curve.g;
    this.n = this.curve.n;
    this.hash = options.hash;
    assert2(this.g.validate(), "Invalid curve");
    assert2(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
  }
  curves2.PresetCurve = PresetCurve;
  function defineCurve(name2, options) {
    Object.defineProperty(curves2, name2, {
      configurable: true,
      enumerable: true,
      get: function() {
        var curve2 = new PresetCurve(options);
        Object.defineProperty(curves2, name2, {
          configurable: true,
          enumerable: true,
          value: curve2
        });
        return curve2;
      }
    });
  }
  defineCurve("p192", {
    type: "short",
    prime: "p192",
    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
      "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
    ]
  });
  defineCurve("p224", {
    type: "short",
    prime: "p224",
    p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
    a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
    b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
    n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
      "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
    ]
  });
  defineCurve("p256", {
    type: "short",
    prime: null,
    p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
    a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
    b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
    n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
      "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
    ]
  });
  defineCurve("p384", {
    type: "short",
    prime: null,
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
    a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
    b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
    n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
    hash: hash3.sha384,
    gRed: false,
    g: [
      "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
      "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
    ]
  });
  defineCurve("p521", {
    type: "short",
    prime: null,
    p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
    a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
    b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
    n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
    hash: hash3.sha512,
    gRed: false,
    g: [
      "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
      "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
    ]
  });
  defineCurve("curve25519", {
    type: "mont",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "76d06",
    b: "1",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "9"
    ]
  });
  defineCurve("ed25519", {
    type: "edwards",
    prime: "p25519",
    p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
    a: "-1",
    c: "1",
    // -121665 * (121666^(-1)) (mod P)
    d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
    n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
    hash: hash3.sha256,
    gRed: false,
    g: [
      "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
      // 4/5
      "6666666666666666666666666666666666666666666666666666666666666658"
    ]
  });
  var pre;
  try {
    pre = requireSecp256k1();
  } catch (e) {
    pre = void 0;
  }
  defineCurve("secp256k1", {
    type: "short",
    prime: "k256",
    p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
    a: "0",
    b: "7",
    n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
    h: "1",
    hash: hash3.sha256,
    // Precomputed endomorphism
    beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
    lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
    basis: [
      {
        a: "3086d221a7d46bcde86c90e49284eb15",
        b: "-e4437ed6010e88286f547fa90abfe4c3"
      },
      {
        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
        b: "3086d221a7d46bcde86c90e49284eb15"
      }
    ],
    gRed: false,
    g: [
      "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
      "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
      pre
    ]
  });
})(curves$2);
var hash$2 = hash$3;
var utils$6 = utils$l;
var assert$6 = minimalisticAssert;
function HmacDRBG$1(options) {
  if (!(this instanceof HmacDRBG$1))
    return new HmacDRBG$1(options);
  this.hash = options.hash;
  this.predResist = !!options.predResist;
  this.outLen = this.hash.outSize;
  this.minEntropy = options.minEntropy || this.hash.hmacStrength;
  this._reseed = null;
  this.reseedInterval = null;
  this.K = null;
  this.V = null;
  var entropy = utils$6.toArray(options.entropy, options.entropyEnc || "hex");
  var nonce = utils$6.toArray(options.nonce, options.nonceEnc || "hex");
  var pers = utils$6.toArray(options.pers, options.persEnc || "hex");
  assert$6(
    entropy.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  );
  this._init(entropy, nonce, pers);
}
var hmacDrbg = HmacDRBG$1;
HmacDRBG$1.prototype._init = function init2(entropy, nonce, pers) {
  var seed = entropy.concat(nonce).concat(pers);
  this.K = new Array(this.outLen / 8);
  this.V = new Array(this.outLen / 8);
  for (var i = 0; i < this.V.length; i++) {
    this.K[i] = 0;
    this.V[i] = 1;
  }
  this._update(seed);
  this._reseed = 1;
  this.reseedInterval = 281474976710656;
};
HmacDRBG$1.prototype._hmac = function hmac2() {
  return new hash$2.hmac(this.hash, this.K);
};
HmacDRBG$1.prototype._update = function update4(seed) {
  var kmac = this._hmac().update(this.V).update([0]);
  if (seed)
    kmac = kmac.update(seed);
  this.K = kmac.digest();
  this.V = this._hmac().update(this.V).digest();
  if (!seed)
    return;
  this.K = this._hmac().update(this.V).update([1]).update(seed).digest();
  this.V = this._hmac().update(this.V).digest();
};
HmacDRBG$1.prototype.reseed = function reseed(entropy, entropyEnc, add6, addEnc) {
  if (typeof entropyEnc !== "string") {
    addEnc = add6;
    add6 = entropyEnc;
    entropyEnc = null;
  }
  entropy = utils$6.toArray(entropy, entropyEnc);
  add6 = utils$6.toArray(add6, addEnc);
  assert$6(
    entropy.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  );
  this._update(entropy.concat(add6 || []));
  this._reseed = 1;
};
HmacDRBG$1.prototype.generate = function generate2(len, enc, add6, addEnc) {
  if (this._reseed > this.reseedInterval)
    throw new Error("Reseed is required");
  if (typeof enc !== "string") {
    addEnc = add6;
    add6 = enc;
    enc = null;
  }
  if (add6) {
    add6 = utils$6.toArray(add6, addEnc || "hex");
    this._update(add6);
  }
  var temp = [];
  while (temp.length < len) {
    this.V = this._hmac().update(this.V).digest();
    temp = temp.concat(this.V);
  }
  var res = temp.slice(0, len);
  this._update(add6);
  this._reseed++;
  return utils$6.encode(res, enc);
};
var BN$4 = bnExports;
var utils$5 = utils$m;
var assert$5 = utils$5.assert;
function KeyPair$3(ec2, options) {
  this.ec = ec2;
  this.priv = null;
  this.pub = null;
  if (options.priv)
    this._importPrivate(options.priv, options.privEnc);
  if (options.pub)
    this._importPublic(options.pub, options.pubEnc);
}
var key$1 = KeyPair$3;
KeyPair$3.fromPublic = function fromPublic(ec2, pub2, enc) {
  if (pub2 instanceof KeyPair$3)
    return pub2;
  return new KeyPair$3(ec2, {
    pub: pub2,
    pubEnc: enc
  });
};
KeyPair$3.fromPrivate = function fromPrivate(ec2, priv2, enc) {
  if (priv2 instanceof KeyPair$3)
    return priv2;
  return new KeyPair$3(ec2, {
    priv: priv2,
    privEnc: enc
  });
};
KeyPair$3.prototype.validate = function validate6() {
  var pub2 = this.getPublic();
  if (pub2.isInfinity())
    return { result: false, reason: "Invalid public key" };
  if (!pub2.validate())
    return { result: false, reason: "Public key is not a point" };
  if (!pub2.mul(this.ec.curve.n).isInfinity())
    return { result: false, reason: "Public key * N != O" };
  return { result: true, reason: null };
};
KeyPair$3.prototype.getPublic = function getPublic(compact, enc) {
  if (typeof compact === "string") {
    enc = compact;
    compact = null;
  }
  if (!this.pub)
    this.pub = this.ec.g.mul(this.priv);
  if (!enc)
    return this.pub;
  return this.pub.encode(enc, compact);
};
KeyPair$3.prototype.getPrivate = function getPrivate(enc) {
  if (enc === "hex")
    return this.priv.toString(16, 2);
  else
    return this.priv;
};
KeyPair$3.prototype._importPrivate = function _importPrivate(key2, enc) {
  this.priv = new BN$4(key2, enc || 16);
  this.priv = this.priv.umod(this.ec.curve.n);
};
KeyPair$3.prototype._importPublic = function _importPublic(key2, enc) {
  if (key2.x || key2.y) {
    if (this.ec.curve.type === "mont") {
      assert$5(key2.x, "Need x coordinate");
    } else if (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") {
      assert$5(key2.x && key2.y, "Need both x and y coordinate");
    }
    this.pub = this.ec.curve.point(key2.x, key2.y);
    return;
  }
  this.pub = this.ec.curve.decodePoint(key2, enc);
};
KeyPair$3.prototype.derive = function derive(pub2) {
  if (!pub2.validate()) {
    assert$5(pub2.validate(), "public point not validated");
  }
  return pub2.mul(this.priv).getX();
};
KeyPair$3.prototype.sign = function sign2(msg, enc, options) {
  return this.ec.sign(msg, this, enc, options);
};
KeyPair$3.prototype.verify = function verify(msg, signature2) {
  return this.ec.verify(msg, signature2, this);
};
KeyPair$3.prototype.inspect = function inspect5() {
  return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var BN$3 = bnExports;
var utils$4 = utils$m;
var assert$4 = utils$4.assert;
function Signature$4(options, enc) {
  if (options instanceof Signature$4)
    return options;
  if (this._importDER(options, enc))
    return;
  assert$4(options.r && options.s, "Signature without r or s");
  this.r = new BN$3(options.r, 16);
  this.s = new BN$3(options.s, 16);
  if (options.recoveryParam === void 0)
    this.recoveryParam = null;
  else
    this.recoveryParam = options.recoveryParam;
}
var signature$1 = Signature$4;
function Position() {
  this.place = 0;
}
function getLength(buf, p) {
  var initial = buf[p.place++];
  if (!(initial & 128)) {
    return initial;
  }
  var octetLen = initial & 15;
  if (octetLen === 0 || octetLen > 4) {
    return false;
  }
  var val = 0;
  for (var i = 0, off = p.place; i < octetLen; i++, off++) {
    val <<= 8;
    val |= buf[off];
    val >>>= 0;
  }
  if (val <= 127) {
    return false;
  }
  p.place = off;
  return val;
}
function rmPadding(buf) {
  var i = 0;
  var len = buf.length - 1;
  while (!buf[i] && !(buf[i + 1] & 128) && i < len) {
    i++;
  }
  if (i === 0) {
    return buf;
  }
  return buf.slice(i);
}
Signature$4.prototype._importDER = function _importDER(data, enc) {
  data = utils$4.toArray(data, enc);
  var p = new Position();
  if (data[p.place++] !== 48) {
    return false;
  }
  var len = getLength(data, p);
  if (len === false) {
    return false;
  }
  if (len + p.place !== data.length) {
    return false;
  }
  if (data[p.place++] !== 2) {
    return false;
  }
  var rlen = getLength(data, p);
  if (rlen === false) {
    return false;
  }
  var r2 = data.slice(p.place, rlen + p.place);
  p.place += rlen;
  if (data[p.place++] !== 2) {
    return false;
  }
  var slen = getLength(data, p);
  if (slen === false) {
    return false;
  }
  if (data.length !== slen + p.place) {
    return false;
  }
  var s2 = data.slice(p.place, slen + p.place);
  if (r2[0] === 0) {
    if (r2[1] & 128) {
      r2 = r2.slice(1);
    } else {
      return false;
    }
  }
  if (s2[0] === 0) {
    if (s2[1] & 128) {
      s2 = s2.slice(1);
    } else {
      return false;
    }
  }
  this.r = new BN$3(r2);
  this.s = new BN$3(s2);
  this.recoveryParam = null;
  return true;
};
function constructLength(arr, len) {
  if (len < 128) {
    arr.push(len);
    return;
  }
  var octets = 1 + (Math.log(len) / Math.LN2 >>> 3);
  arr.push(octets | 128);
  while (--octets) {
    arr.push(len >>> (octets << 3) & 255);
  }
  arr.push(len);
}
Signature$4.prototype.toDER = function toDER(enc) {
  var r2 = this.r.toArray();
  var s2 = this.s.toArray();
  if (r2[0] & 128)
    r2 = [0].concat(r2);
  if (s2[0] & 128)
    s2 = [0].concat(s2);
  r2 = rmPadding(r2);
  s2 = rmPadding(s2);
  while (!s2[0] && !(s2[1] & 128)) {
    s2 = s2.slice(1);
  }
  var arr = [2];
  constructLength(arr, r2.length);
  arr = arr.concat(r2);
  arr.push(2);
  constructLength(arr, s2.length);
  var backHalf = arr.concat(s2);
  var res = [48];
  constructLength(res, backHalf.length);
  res = res.concat(backHalf);
  return utils$4.encode(res, enc);
};
var BN$2 = bnExports;
var HmacDRBG = hmacDrbg;
var utils$3 = utils$m;
var curves$1 = curves$2;
var rand2 = brorandExports;
var assert$3 = utils$3.assert;
var KeyPair$2 = key$1;
var Signature$3 = signature$1;
function EC$1(options) {
  if (!(this instanceof EC$1))
    return new EC$1(options);
  if (typeof options === "string") {
    assert$3(
      Object.prototype.hasOwnProperty.call(curves$1, options),
      "Unknown curve " + options
    );
    options = curves$1[options];
  }
  if (options instanceof curves$1.PresetCurve)
    options = { curve: options };
  this.curve = options.curve.curve;
  this.n = this.curve.n;
  this.nh = this.n.ushrn(1);
  this.g = this.curve.g;
  this.g = options.curve.g;
  this.g.precompute(options.curve.n.bitLength() + 1);
  this.hash = options.hash || options.curve.hash;
}
var ec$1 = EC$1;
EC$1.prototype.keyPair = function keyPair(options) {
  return new KeyPair$2(this, options);
};
EC$1.prototype.keyFromPrivate = function keyFromPrivate(priv2, enc) {
  return KeyPair$2.fromPrivate(this, priv2, enc);
};
EC$1.prototype.keyFromPublic = function keyFromPublic(pub2, enc) {
  return KeyPair$2.fromPublic(this, pub2, enc);
};
EC$1.prototype.genKeyPair = function genKeyPair(options) {
  if (!options)
    options = {};
  var drbg = new HmacDRBG({
    hash: this.hash,
    pers: options.pers,
    persEnc: options.persEnc || "utf8",
    entropy: options.entropy || rand2(this.hash.hmacStrength),
    entropyEnc: options.entropy && options.entropyEnc || "utf8",
    nonce: this.n.toArray()
  });
  var bytes2 = this.n.byteLength();
  var ns2 = this.n.sub(new BN$2(2));
  for (; ; ) {
    var priv2 = new BN$2(drbg.generate(bytes2));
    if (priv2.cmp(ns2) > 0)
      continue;
    priv2.iaddn(1);
    return this.keyFromPrivate(priv2);
  }
};
EC$1.prototype._truncateToN = function _truncateToN(msg, truncOnly) {
  var delta = msg.byteLength() * 8 - this.n.bitLength();
  if (delta > 0)
    msg = msg.ushrn(delta);
  if (!truncOnly && msg.cmp(this.n) >= 0)
    return msg.sub(this.n);
  else
    return msg;
};
EC$1.prototype.sign = function sign3(msg, key2, enc, options) {
  if (typeof enc === "object") {
    options = enc;
    enc = null;
  }
  if (!options)
    options = {};
  key2 = this.keyFromPrivate(key2, enc);
  msg = this._truncateToN(new BN$2(msg, 16));
  var bytes2 = this.n.byteLength();
  var bkey = key2.getPrivate().toArray("be", bytes2);
  var nonce = msg.toArray("be", bytes2);
  var drbg = new HmacDRBG({
    hash: this.hash,
    entropy: bkey,
    nonce,
    pers: options.pers,
    persEnc: options.persEnc || "utf8"
  });
  var ns1 = this.n.sub(new BN$2(1));
  for (var iter = 0; ; iter++) {
    var k = options.k ? options.k(iter) : new BN$2(drbg.generate(this.n.byteLength()));
    k = this._truncateToN(k, true);
    if (k.cmpn(1) <= 0 || k.cmp(ns1) >= 0)
      continue;
    var kp = this.g.mul(k);
    if (kp.isInfinity())
      continue;
    var kpX = kp.getX();
    var r2 = kpX.umod(this.n);
    if (r2.cmpn(0) === 0)
      continue;
    var s2 = k.invm(this.n).mul(r2.mul(key2.getPrivate()).iadd(msg));
    s2 = s2.umod(this.n);
    if (s2.cmpn(0) === 0)
      continue;
    var recoveryParam = (kp.getY().isOdd() ? 1 : 0) | (kpX.cmp(r2) !== 0 ? 2 : 0);
    if (options.canonical && s2.cmp(this.nh) > 0) {
      s2 = this.n.sub(s2);
      recoveryParam ^= 1;
    }
    return new Signature$3({ r: r2, s: s2, recoveryParam });
  }
};
EC$1.prototype.verify = function verify2(msg, signature2, key2, enc) {
  msg = this._truncateToN(new BN$2(msg, 16));
  key2 = this.keyFromPublic(key2, enc);
  signature2 = new Signature$3(signature2, "hex");
  var r2 = signature2.r;
  var s2 = signature2.s;
  if (r2.cmpn(1) < 0 || r2.cmp(this.n) >= 0)
    return false;
  if (s2.cmpn(1) < 0 || s2.cmp(this.n) >= 0)
    return false;
  var sinv = s2.invm(this.n);
  var u1 = sinv.mul(msg).umod(this.n);
  var u2 = sinv.mul(r2).umod(this.n);
  var p;
  if (!this.curve._maxwellTrick) {
    p = this.g.mulAdd(u1, key2.getPublic(), u2);
    if (p.isInfinity())
      return false;
    return p.getX().umod(this.n).cmp(r2) === 0;
  }
  p = this.g.jmulAdd(u1, key2.getPublic(), u2);
  if (p.isInfinity())
    return false;
  return p.eqXToP(r2);
};
EC$1.prototype.recoverPubKey = function(msg, signature2, j, enc) {
  assert$3((3 & j) === j, "The recovery param is more than two bits");
  signature2 = new Signature$3(signature2, enc);
  var n = this.n;
  var e = new BN$2(msg);
  var r2 = signature2.r;
  var s2 = signature2.s;
  var isYOdd = j & 1;
  var isSecondKey = j >> 1;
  if (r2.cmp(this.curve.p.umod(this.curve.n)) >= 0 && isSecondKey)
    throw new Error("Unable to find sencond key candinate");
  if (isSecondKey)
    r2 = this.curve.pointFromX(r2.add(this.curve.n), isYOdd);
  else
    r2 = this.curve.pointFromX(r2, isYOdd);
  var rInv = signature2.r.invm(n);
  var s1 = n.sub(e).mul(rInv).umod(n);
  var s22 = s2.mul(rInv).umod(n);
  return this.g.mulAdd(s1, r2, s22);
};
EC$1.prototype.getKeyRecoveryParam = function(e, signature2, Q, enc) {
  signature2 = new Signature$3(signature2, enc);
  if (signature2.recoveryParam !== null)
    return signature2.recoveryParam;
  for (var i = 0; i < 4; i++) {
    var Qprime;
    try {
      Qprime = this.recoverPubKey(e, signature2, i);
    } catch (e2) {
      continue;
    }
    if (Qprime.eq(Q))
      return i;
  }
  throw new Error("Unable to find valid recovery factor");
};
var utils$2 = utils$m;
var assert$2 = utils$2.assert;
var parseBytes$2 = utils$2.parseBytes;
var cachedProperty$1 = utils$2.cachedProperty;
function KeyPair$1(eddsa2, params) {
  this.eddsa = eddsa2;
  this._secret = parseBytes$2(params.secret);
  if (eddsa2.isPoint(params.pub))
    this._pub = params.pub;
  else
    this._pubBytes = parseBytes$2(params.pub);
}
KeyPair$1.fromPublic = function fromPublic2(eddsa2, pub2) {
  if (pub2 instanceof KeyPair$1)
    return pub2;
  return new KeyPair$1(eddsa2, { pub: pub2 });
};
KeyPair$1.fromSecret = function fromSecret(eddsa2, secret2) {
  if (secret2 instanceof KeyPair$1)
    return secret2;
  return new KeyPair$1(eddsa2, { secret: secret2 });
};
KeyPair$1.prototype.secret = function secret() {
  return this._secret;
};
cachedProperty$1(KeyPair$1, "pubBytes", function pubBytes() {
  return this.eddsa.encodePoint(this.pub());
});
cachedProperty$1(KeyPair$1, "pub", function pub() {
  if (this._pubBytes)
    return this.eddsa.decodePoint(this._pubBytes);
  return this.eddsa.g.mul(this.priv());
});
cachedProperty$1(KeyPair$1, "privBytes", function privBytes() {
  var eddsa2 = this.eddsa;
  var hash3 = this.hash();
  var lastIx = eddsa2.encodingLength - 1;
  var a = hash3.slice(0, eddsa2.encodingLength);
  a[0] &= 248;
  a[lastIx] &= 127;
  a[lastIx] |= 64;
  return a;
});
cachedProperty$1(KeyPair$1, "priv", function priv() {
  return this.eddsa.decodeInt(this.privBytes());
});
cachedProperty$1(KeyPair$1, "hash", function hash() {
  return this.eddsa.hash().update(this.secret()).digest();
});
cachedProperty$1(KeyPair$1, "messagePrefix", function messagePrefix() {
  return this.hash().slice(this.eddsa.encodingLength);
});
KeyPair$1.prototype.sign = function sign4(message) {
  assert$2(this._secret, "KeyPair can only verify");
  return this.eddsa.sign(message, this);
};
KeyPair$1.prototype.verify = function verify3(message, sig) {
  return this.eddsa.verify(message, sig, this);
};
KeyPair$1.prototype.getSecret = function getSecret(enc) {
  assert$2(this._secret, "KeyPair is public only");
  return utils$2.encode(this.secret(), enc);
};
KeyPair$1.prototype.getPublic = function getPublic2(enc) {
  return utils$2.encode(this.pubBytes(), enc);
};
var key = KeyPair$1;
var BN$1 = bnExports;
var utils$1 = utils$m;
var assert$1 = utils$1.assert;
var cachedProperty = utils$1.cachedProperty;
var parseBytes$1 = utils$1.parseBytes;
function Signature$2(eddsa2, sig) {
  this.eddsa = eddsa2;
  if (typeof sig !== "object")
    sig = parseBytes$1(sig);
  if (Array.isArray(sig)) {
    sig = {
      R: sig.slice(0, eddsa2.encodingLength),
      S: sig.slice(eddsa2.encodingLength)
    };
  }
  assert$1(sig.R && sig.S, "Signature without R or S");
  if (eddsa2.isPoint(sig.R))
    this._R = sig.R;
  if (sig.S instanceof BN$1)
    this._S = sig.S;
  this._Rencoded = Array.isArray(sig.R) ? sig.R : sig.Rencoded;
  this._Sencoded = Array.isArray(sig.S) ? sig.S : sig.Sencoded;
}
cachedProperty(Signature$2, "S", function S() {
  return this.eddsa.decodeInt(this.Sencoded());
});
cachedProperty(Signature$2, "R", function R() {
  return this.eddsa.decodePoint(this.Rencoded());
});
cachedProperty(Signature$2, "Rencoded", function Rencoded() {
  return this.eddsa.encodePoint(this.R());
});
cachedProperty(Signature$2, "Sencoded", function Sencoded() {
  return this.eddsa.encodeInt(this.S());
});
Signature$2.prototype.toBytes = function toBytes2() {
  return this.Rencoded().concat(this.Sencoded());
};
Signature$2.prototype.toHex = function toHex() {
  return utils$1.encode(this.toBytes(), "hex").toUpperCase();
};
var signature = Signature$2;
var hash$1 = hash$3;
var curves = curves$2;
var utils = utils$m;
var assert = utils.assert;
var parseBytes = utils.parseBytes;
var KeyPair = key;
var Signature$1 = signature;
function EDDSA(curve2) {
  assert(curve2 === "ed25519", "only tested with ed25519 so far");
  if (!(this instanceof EDDSA))
    return new EDDSA(curve2);
  curve2 = curves[curve2].curve;
  this.curve = curve2;
  this.g = curve2.g;
  this.g.precompute(curve2.n.bitLength() + 1);
  this.pointClass = curve2.point().constructor;
  this.encodingLength = Math.ceil(curve2.n.bitLength() / 8);
  this.hash = hash$1.sha512;
}
var eddsa = EDDSA;
EDDSA.prototype.sign = function sign5(message, secret2) {
  message = parseBytes(message);
  var key2 = this.keyFromSecret(secret2);
  var r2 = this.hashInt(key2.messagePrefix(), message);
  var R2 = this.g.mul(r2);
  var Rencoded2 = this.encodePoint(R2);
  var s_ = this.hashInt(Rencoded2, key2.pubBytes(), message).mul(key2.priv());
  var S2 = r2.add(s_).umod(this.curve.n);
  return this.makeSignature({ R: R2, S: S2, Rencoded: Rencoded2 });
};
EDDSA.prototype.verify = function verify4(message, sig, pub2) {
  message = parseBytes(message);
  sig = this.makeSignature(sig);
  var key2 = this.keyFromPublic(pub2);
  var h = this.hashInt(sig.Rencoded(), key2.pubBytes(), message);
  var SG = this.g.mul(sig.S());
  var RplusAh = sig.R().add(key2.pub().mul(h));
  return RplusAh.eq(SG);
};
EDDSA.prototype.hashInt = function hashInt() {
  var hash3 = this.hash();
  for (var i = 0; i < arguments.length; i++)
    hash3.update(arguments[i]);
  return utils.intFromLE(hash3.digest()).umod(this.curve.n);
};
EDDSA.prototype.keyFromPublic = function keyFromPublic2(pub2) {
  return KeyPair.fromPublic(this, pub2);
};
EDDSA.prototype.keyFromSecret = function keyFromSecret(secret2) {
  return KeyPair.fromSecret(this, secret2);
};
EDDSA.prototype.makeSignature = function makeSignature(sig) {
  if (sig instanceof Signature$1)
    return sig;
  return new Signature$1(this, sig);
};
EDDSA.prototype.encodePoint = function encodePoint(point5) {
  var enc = point5.getY().toArray("le", this.encodingLength);
  enc[this.encodingLength - 1] |= point5.getX().isOdd() ? 128 : 0;
  return enc;
};
EDDSA.prototype.decodePoint = function decodePoint3(bytes2) {
  bytes2 = utils.parseBytes(bytes2);
  var lastIx = bytes2.length - 1;
  var normed = bytes2.slice(0, lastIx).concat(bytes2[lastIx] & ~128);
  var xIsOdd = (bytes2[lastIx] & 128) !== 0;
  var y = utils.intFromLE(normed);
  return this.curve.pointFromY(y, xIsOdd);
};
EDDSA.prototype.encodeInt = function encodeInt(num) {
  return num.toArray("le", this.encodingLength);
};
EDDSA.prototype.decodeInt = function decodeInt(bytes2) {
  return utils.intFromLE(bytes2);
};
EDDSA.prototype.isPoint = function isPoint2(val) {
  return val instanceof this.pointClass;
};
(function(exports) {
  var elliptic2 = exports;
  elliptic2.version = require$$0$1.version;
  elliptic2.utils = utils$m;
  elliptic2.rand = brorandExports;
  elliptic2.curve = curve;
  elliptic2.curves = curves$2;
  elliptic2.ec = ec$1;
  elliptic2.eddsa = eddsa;
})(elliptic$2);
const EC = elliptic$2.ec;
const ec = new EC("secp256k1");
const ecparams = ec.curve;
const BN = ecparams.n.constructor;
function loadCompressedPublicKey(first, xbuf) {
  let x = new BN(xbuf);
  if (x.cmp(ecparams.p) >= 0)
    return null;
  x = x.toRed(ecparams.red);
  let y = x.redSqr().redIMul(x).redIAdd(ecparams.b).redSqrt();
  if (first === 3 !== y.isOdd())
    y = y.redNeg();
  return ec.keyPair({ pub: { x, y } });
}
function loadUncompressedPublicKey(first, xbuf, ybuf) {
  let x = new BN(xbuf);
  let y = new BN(ybuf);
  if (x.cmp(ecparams.p) >= 0 || y.cmp(ecparams.p) >= 0)
    return null;
  x = x.toRed(ecparams.red);
  y = y.toRed(ecparams.red);
  if ((first === 6 || first === 7) && y.isOdd() !== (first === 7))
    return null;
  const x3 = x.redSqr().redIMul(x);
  if (!y.redSqr().redISub(x3.redIAdd(ecparams.b)).isZero())
    return null;
  return ec.keyPair({ pub: { x, y } });
}
function loadPublicKey(pubkey) {
  const first = pubkey[0];
  switch (first) {
    case 2:
    case 3:
      if (pubkey.length !== 33)
        return null;
      return loadCompressedPublicKey(first, pubkey.subarray(1, 33));
    case 4:
    case 6:
    case 7:
      if (pubkey.length !== 65)
        return null;
      return loadUncompressedPublicKey(first, pubkey.subarray(1, 33), pubkey.subarray(33, 65));
    default:
      return null;
  }
}
function savePublicKey(output2, point5) {
  const pubkey = point5.encode(null, output2.length === 33);
  for (let i = 0; i < output2.length; ++i)
    output2[i] = pubkey[i];
}
var elliptic$1 = {
  contextRandomize() {
    return 0;
  },
  privateKeyVerify(seckey) {
    const bn2 = new BN(seckey);
    return bn2.cmp(ecparams.n) < 0 && !bn2.isZero() ? 0 : 1;
  },
  privateKeyNegate(seckey) {
    const bn2 = new BN(seckey);
    const negate = ecparams.n.sub(bn2).umod(ecparams.n).toArrayLike(Uint8Array, "be", 32);
    seckey.set(negate);
    return 0;
  },
  privateKeyTweakAdd(seckey, tweak) {
    const bn2 = new BN(tweak);
    if (bn2.cmp(ecparams.n) >= 0)
      return 1;
    bn2.iadd(new BN(seckey));
    if (bn2.cmp(ecparams.n) >= 0)
      bn2.isub(ecparams.n);
    if (bn2.isZero())
      return 1;
    const tweaked = bn2.toArrayLike(Uint8Array, "be", 32);
    seckey.set(tweaked);
    return 0;
  },
  privateKeyTweakMul(seckey, tweak) {
    let bn2 = new BN(tweak);
    if (bn2.cmp(ecparams.n) >= 0 || bn2.isZero())
      return 1;
    bn2.imul(new BN(seckey));
    if (bn2.cmp(ecparams.n) >= 0)
      bn2 = bn2.umod(ecparams.n);
    const tweaked = bn2.toArrayLike(Uint8Array, "be", 32);
    seckey.set(tweaked);
    return 0;
  },
  publicKeyVerify(pubkey) {
    const pair = loadPublicKey(pubkey);
    return pair === null ? 1 : 0;
  },
  publicKeyCreate(output2, seckey) {
    const bn2 = new BN(seckey);
    if (bn2.cmp(ecparams.n) >= 0 || bn2.isZero())
      return 1;
    const point5 = ec.keyFromPrivate(seckey).getPublic();
    savePublicKey(output2, point5);
    return 0;
  },
  publicKeyConvert(output2, pubkey) {
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 1;
    const point5 = pair.getPublic();
    savePublicKey(output2, point5);
    return 0;
  },
  publicKeyNegate(output2, pubkey) {
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 1;
    const point5 = pair.getPublic();
    point5.y = point5.y.redNeg();
    savePublicKey(output2, point5);
    return 0;
  },
  publicKeyCombine(output2, pubkeys) {
    const pairs = new Array(pubkeys.length);
    for (let i = 0; i < pubkeys.length; ++i) {
      pairs[i] = loadPublicKey(pubkeys[i]);
      if (pairs[i] === null)
        return 1;
    }
    let point5 = pairs[0].getPublic();
    for (let i = 1; i < pairs.length; ++i)
      point5 = point5.add(pairs[i].pub);
    if (point5.isInfinity())
      return 2;
    savePublicKey(output2, point5);
    return 0;
  },
  publicKeyTweakAdd(output2, pubkey, tweak) {
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 1;
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0)
      return 2;
    const point5 = pair.getPublic().add(ecparams.g.mul(tweak));
    if (point5.isInfinity())
      return 2;
    savePublicKey(output2, point5);
    return 0;
  },
  publicKeyTweakMul(output2, pubkey, tweak) {
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 1;
    tweak = new BN(tweak);
    if (tweak.cmp(ecparams.n) >= 0 || tweak.isZero())
      return 2;
    const point5 = pair.getPublic().mul(tweak);
    savePublicKey(output2, point5);
    return 0;
  },
  signatureNormalize(sig) {
    const r2 = new BN(sig.subarray(0, 32));
    const s2 = new BN(sig.subarray(32, 64));
    if (r2.cmp(ecparams.n) >= 0 || s2.cmp(ecparams.n) >= 0)
      return 1;
    if (s2.cmp(ec.nh) === 1) {
      sig.set(ecparams.n.sub(s2).toArrayLike(Uint8Array, "be", 32), 32);
    }
    return 0;
  },
  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureExport(obj, sig) {
    const sigR = sig.subarray(0, 32);
    const sigS = sig.subarray(32, 64);
    if (new BN(sigR).cmp(ecparams.n) >= 0)
      return 1;
    if (new BN(sigS).cmp(ecparams.n) >= 0)
      return 1;
    const { output: output2 } = obj;
    let r2 = output2.subarray(4, 4 + 33);
    r2[0] = 0;
    r2.set(sigR, 1);
    let lenR = 33;
    let posR = 0;
    for (; lenR > 1 && r2[posR] === 0 && !(r2[posR + 1] & 128); --lenR, ++posR)
      ;
    r2 = r2.subarray(posR);
    if (r2[0] & 128)
      return 1;
    if (lenR > 1 && r2[0] === 0 && !(r2[1] & 128))
      return 1;
    let s2 = output2.subarray(6 + 33, 6 + 33 + 33);
    s2[0] = 0;
    s2.set(sigS, 1);
    let lenS = 33;
    let posS = 0;
    for (; lenS > 1 && s2[posS] === 0 && !(s2[posS + 1] & 128); --lenS, ++posS)
      ;
    s2 = s2.subarray(posS);
    if (s2[0] & 128)
      return 1;
    if (lenS > 1 && s2[0] === 0 && !(s2[1] & 128))
      return 1;
    obj.outputlen = 6 + lenR + lenS;
    output2[0] = 48;
    output2[1] = obj.outputlen - 2;
    output2[2] = 2;
    output2[3] = r2.length;
    output2.set(r2, 4);
    output2[4 + lenR] = 2;
    output2[5 + lenR] = s2.length;
    output2.set(s2, 6 + lenR);
    return 0;
  },
  // Copied 1-to-1 from https://github.com/bitcoinjs/bip66/blob/master/index.js
  // Adapted for Uint8Array instead Buffer
  signatureImport(output2, sig) {
    if (sig.length < 8)
      return 1;
    if (sig.length > 72)
      return 1;
    if (sig[0] !== 48)
      return 1;
    if (sig[1] !== sig.length - 2)
      return 1;
    if (sig[2] !== 2)
      return 1;
    const lenR = sig[3];
    if (lenR === 0)
      return 1;
    if (5 + lenR >= sig.length)
      return 1;
    if (sig[4 + lenR] !== 2)
      return 1;
    const lenS = sig[5 + lenR];
    if (lenS === 0)
      return 1;
    if (6 + lenR + lenS !== sig.length)
      return 1;
    if (sig[4] & 128)
      return 1;
    if (lenR > 1 && sig[4] === 0 && !(sig[5] & 128))
      return 1;
    if (sig[lenR + 6] & 128)
      return 1;
    if (lenS > 1 && sig[lenR + 6] === 0 && !(sig[lenR + 7] & 128))
      return 1;
    let sigR = sig.subarray(4, 4 + lenR);
    if (sigR.length === 33 && sigR[0] === 0)
      sigR = sigR.subarray(1);
    if (sigR.length > 32)
      return 1;
    let sigS = sig.subarray(6 + lenR);
    if (sigS.length === 33 && sigS[0] === 0)
      sigS = sigS.slice(1);
    if (sigS.length > 32)
      throw new Error("S length is too long");
    let r2 = new BN(sigR);
    if (r2.cmp(ecparams.n) >= 0)
      r2 = new BN(0);
    let s2 = new BN(sig.subarray(6 + lenR));
    if (s2.cmp(ecparams.n) >= 0)
      s2 = new BN(0);
    output2.set(r2.toArrayLike(Uint8Array, "be", 32), 0);
    output2.set(s2.toArrayLike(Uint8Array, "be", 32), 32);
    return 0;
  },
  ecdsaSign(obj, message, seckey, data, noncefn) {
    if (noncefn) {
      const _noncefn = noncefn;
      noncefn = (counter) => {
        const nonce = _noncefn(message, seckey, null, data, counter);
        const isValid = nonce instanceof Uint8Array && nonce.length === 32;
        if (!isValid)
          throw new Error("This is the way");
        return new BN(nonce);
      };
    }
    const d = new BN(seckey);
    if (d.cmp(ecparams.n) >= 0 || d.isZero())
      return 1;
    let sig;
    try {
      sig = ec.sign(message, seckey, { canonical: true, k: noncefn, pers: data });
    } catch (err2) {
      return 1;
    }
    obj.signature.set(sig.r.toArrayLike(Uint8Array, "be", 32), 0);
    obj.signature.set(sig.s.toArrayLike(Uint8Array, "be", 32), 32);
    obj.recid = sig.recoveryParam;
    return 0;
  },
  ecdsaVerify(sig, msg32, pubkey) {
    const sigObj = { r: sig.subarray(0, 32), s: sig.subarray(32, 64) };
    const sigr = new BN(sigObj.r);
    const sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0)
      return 1;
    if (sigs.cmp(ec.nh) === 1 || sigr.isZero() || sigs.isZero())
      return 3;
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 2;
    const point5 = pair.getPublic();
    const isValid = ec.verify(msg32, sigObj, point5);
    return isValid ? 0 : 3;
  },
  ecdsaRecover(output2, sig, recid, msg32) {
    const sigObj = { r: sig.slice(0, 32), s: sig.slice(32, 64) };
    const sigr = new BN(sigObj.r);
    const sigs = new BN(sigObj.s);
    if (sigr.cmp(ecparams.n) >= 0 || sigs.cmp(ecparams.n) >= 0)
      return 1;
    if (sigr.isZero() || sigs.isZero())
      return 2;
    let point5;
    try {
      point5 = ec.recoverPubKey(msg32, sigObj, recid);
    } catch (err2) {
      return 2;
    }
    savePublicKey(output2, point5);
    return 0;
  },
  ecdh(output2, pubkey, seckey, data, hashfn, xbuf, ybuf) {
    const pair = loadPublicKey(pubkey);
    if (pair === null)
      return 1;
    const scalar = new BN(seckey);
    if (scalar.cmp(ecparams.n) >= 0 || scalar.isZero())
      return 2;
    const point5 = pair.getPublic().mul(scalar);
    if (hashfn === void 0) {
      const data2 = point5.encode(null, true);
      const sha256 = ec.hash().update(data2).digest();
      for (let i = 0; i < 32; ++i)
        output2[i] = sha256[i];
    } else {
      if (!xbuf)
        xbuf = new Uint8Array(32);
      const x = point5.getX().toArray("be", 32);
      for (let i = 0; i < 32; ++i)
        xbuf[i] = x[i];
      if (!ybuf)
        ybuf = new Uint8Array(32);
      const y = point5.getY().toArray("be", 32);
      for (let i = 0; i < 32; ++i)
        ybuf[i] = y[i];
      const hash3 = hashfn(xbuf, ybuf, data);
      const isValid = hash3 instanceof Uint8Array && hash3.length === output2.length;
      if (!isValid)
        return 2;
      output2.set(hash3);
    }
    return 0;
  }
};
var elliptic = lib(elliptic$1);
const resolveBytes = (bytes2) => {
  if (typeof bytes2 === "string") {
    return Convert.HexString.toUint8Array(bytes2);
  } else if (bytes2.constructor === Uint8Array) {
    return bytes2;
  } else {
    throw new Error(
      "Resolution of bytes can only happen on a HexString or a Uint8Array."
    );
  }
};
const resolveBytesAndCheckLength = (bytes2, expectedLength) => {
  const resolvedBytes = resolveBytes(bytes2);
  if (resolvedBytes.length != expectedLength) {
    throw new Error(
      `Expected bytes of length ${expectedLength} but was actually: ${resolvedBytes.length}`
    );
  }
  return resolvedBytes;
};
etc.sha512Sync = (...m2) => sha512(etc.concatBytes(...m2));
const _PrivateKey = class {
  produceSignature(messageHash) {
    let signature2 = this.sign(messageHash);
    let publicKey = this.publicKeyBytes();
    return {
      curve: this.curve,
      signature: signature2,
      publicKey
    };
  }
};
let PrivateKey = _PrivateKey;
__publicField(PrivateKey, "Secp256k1", class extends _PrivateKey {
  constructor(privateKey) {
    super();
    __publicField(this, "curve", "Secp256k1");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(
      privateKey,
      SECP256K1_PRIVATE_KEY_LENGTH
    );
  }
  publicKey() {
    return new PublicKey.Secp256k1(this.publicKeyBytes());
  }
  publicKeyBytes() {
    return elliptic.publicKeyCreate(this.bytes, true);
  }
  publicKeyHex() {
    return Convert.Uint8Array.toHexString(this.publicKeyBytes());
  }
  sign(messageHash) {
    const { signature: signature2, recid } = elliptic.ecdsaSign(messageHash, this.bytes);
    return new Uint8Array([recid, ...signature2]);
  }
  signToSignature(messageHash) {
    return new Signature.Secp256k1(this.sign(messageHash));
  }
  signToSignatureWithPublicKey(messageHash) {
    return new SignatureWithPublicKey.Secp256k1(this.sign(messageHash));
  }
  produceSignature(messageHash) {
    return super.produceSignature(messageHash);
  }
});
__publicField(PrivateKey, "Ed25519", class extends _PrivateKey {
  constructor(privateKey) {
    super();
    __publicField(this, "curve", "Ed25519");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(
      privateKey,
      ED25519_PRIVATE_KEY_LENGTH
    );
  }
  publicKey() {
    return new PublicKey.Ed25519(this.publicKeyBytes());
  }
  publicKeyBytes() {
    return getPublicKey(this.bytes);
  }
  publicKeyHex() {
    return Convert.Uint8Array.toHexString(this.publicKeyBytes());
  }
  sign(messageHash) {
    return sign(messageHash, this.bytes);
  }
  signToSignature(messageHash) {
    return new Signature.Ed25519(this.sign(messageHash));
  }
  signToSignatureWithPublicKey(messageHash) {
    return new SignatureWithPublicKey.Ed25519(
      this.sign(messageHash),
      this.publicKeyBytes()
    );
  }
  produceSignature(messageHash) {
    return super.produceSignature(messageHash);
  }
});
const _PublicKey = class {
  constructor() {
    __publicField(this, "rawBytes", () => this.bytes);
    __publicField(this, "hexString", () => Convert.Uint8Array.toHexString(this.bytes));
    __publicField(this, "toString", this.hexString);
    __publicField(this, "hex", this.hexString);
  }
  get publicKey() {
    return this.rawBytes();
  }
};
let PublicKey = _PublicKey;
__publicField(PublicKey, "Secp256k1", class extends _PublicKey {
  constructor(bytes2) {
    super();
    __publicField(this, "curve", "Secp256k1");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(
      bytes2,
      SECP256K1_PUBLIC_KEY_LENGTH
    );
  }
});
__publicField(PublicKey, "Ed25519", class extends _PublicKey {
  constructor(bytes2) {
    super();
    __publicField(this, "curve", "Ed25519");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(bytes2, ED25519_PUBLIC_KEY_LENGTH);
  }
});
const _Signature = class {
  constructor() {
    __publicField(this, "rawBytes", () => this.bytes);
    __publicField(this, "hexString", () => Convert.Uint8Array.toHexString(this.bytes));
    __publicField(this, "toString", this.hexString);
    __publicField(this, "hex", this.hexString);
  }
  get signature() {
    return this.rawBytes();
  }
};
let Signature = _Signature;
__publicField(Signature, "Secp256k1", class extends _Signature {
  constructor(bytes2) {
    super();
    __publicField(this, "curve", "Secp256k1");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(
      bytes2,
      SECP256K1_SIGNATURE_LENGTH
    );
  }
});
__publicField(Signature, "Ed25519", class extends _Signature {
  constructor(bytes2) {
    super();
    __publicField(this, "curve", "Ed25519");
    __publicField(this, "bytes");
    this.bytes = resolveBytesAndCheckLength(bytes2, ED25519_SIGNATURE_LENGTH);
  }
});
const _SignatureWithPublicKey = class {
};
let SignatureWithPublicKey = _SignatureWithPublicKey;
__publicField(SignatureWithPublicKey, "Secp256k1", class extends _SignatureWithPublicKey {
  constructor(signature2) {
    super();
    __publicField(this, "curve", "Secp256k1");
    __publicField(this, "signature");
    __publicField(this, "publicKey");
    this.signature = resolveBytesAndCheckLength(
      signature2,
      SECP256K1_SIGNATURE_LENGTH
    );
  }
});
__publicField(SignatureWithPublicKey, "Ed25519", class extends _SignatureWithPublicKey {
  constructor(signature2, publicKey) {
    super();
    __publicField(this, "curve", "Ed25519");
    __publicField(this, "signature");
    __publicField(this, "publicKey");
    this.signature = resolveBytesAndCheckLength(
      signature2,
      ED25519_SIGNATURE_LENGTH
    );
    this.publicKey = resolveBytesAndCheckLength(
      publicKey,
      ED25519_PUBLIC_KEY_LENGTH
    );
  }
});
var SerializationMode = /* @__PURE__ */ ((SerializationMode2) => {
  SerializationMode2["Programmatic"] = "Programmatic";
  SerializationMode2["Model"] = "Model";
  SerializationMode2["Natural"] = "Natural";
  return SerializationMode2;
})(SerializationMode || {});
var ManifestSborStringRepresentation = /* @__PURE__ */ ((ManifestSborStringRepresentation2) => {
  ManifestSborStringRepresentation2["ManifestString"] = "ManifestString";
  ManifestSborStringRepresentation2["ProgrammaticJson"] = "ProgrammaticJson";
  ManifestSborStringRepresentation2["ModelJson"] = "ModelJson";
  ManifestSborStringRepresentation2["NaturalJson"] = "NaturalJson";
  return ManifestSborStringRepresentation2;
})(ManifestSborStringRepresentation || {});
var OlympiaNetwork = /* @__PURE__ */ ((OlympiaNetwork2) => {
  OlympiaNetwork2["Mainnet"] = "Mainnet";
  OlympiaNetwork2["Stokenet"] = "Stokenet";
  OlympiaNetwork2["Releasenet"] = "Releasenet";
  OlympiaNetwork2["RCNet"] = "RCNet";
  OlympiaNetwork2["Milestonenet"] = "Milestonenet";
  OlympiaNetwork2["Devopsnet"] = "Devopsnet";
  OlympiaNetwork2["Sandpitnet"] = "Sandpitnet";
  OlympiaNetwork2["Localnet"] = "Localnet";
  return OlympiaNetwork2;
})(OlympiaNetwork || {});
var ResourcePreference = /* @__PURE__ */ ((ResourcePreference2) => {
  ResourcePreference2["Allowed"] = "Allowed";
  ResourcePreference2["Disallowed"] = "Disallowed";
  return ResourcePreference2;
})(ResourcePreference || {});
var DefaultDepositRule = /* @__PURE__ */ ((DefaultDepositRule2) => {
  DefaultDepositRule2["Accept"] = "Accept";
  DefaultDepositRule2["Reject"] = "Reject";
  DefaultDepositRule2["AllowExisting"] = "AllowExisting";
  return DefaultDepositRule2;
})(DefaultDepositRule || {});
var ReservedInstruction = /* @__PURE__ */ ((ReservedInstruction2) => {
  ReservedInstruction2["AccountLockFee"] = "AccountLockFee";
  ReservedInstruction2["AccountSecurify"] = "AccountSecurify";
  ReservedInstruction2["IdentitySecurify"] = "IdentitySecurify";
  ReservedInstruction2["AccountUpdateSettings"] = "AccountUpdateSettings";
  ReservedInstruction2["AccessController"] = "AccessController";
  return ReservedInstruction2;
})(ReservedInstruction || {});
var InstructionsKind = /* @__PURE__ */ ((InstructionsKind2) => {
  InstructionsKind2["String"] = "String";
  InstructionsKind2["Parsed"] = "Parsed";
  return InstructionsKind2;
})(InstructionsKind || {});
const defaultValidationConfig = (networkId) => {
  return {
    networkId,
    maxNotarizedPayloadSize: BigInt(1048576),
    minTipPercentage: 0,
    maxTipPercentage: 65535,
    maxEpochRange: BigInt(8640),
    messageValidation: {
      maxPlaintextMessageLength: BigInt(2048),
      maxEncryptedMessageLength: BigInt(2076),
      maxMimeTypeLength: BigInt(128),
      maxDecryptors: BigInt(20)
    }
  };
};
var ValueKind = /* @__PURE__ */ ((ValueKind2) => {
  ValueKind2["Bool"] = "Bool";
  ValueKind2["I8"] = "I8";
  ValueKind2["I16"] = "I16";
  ValueKind2["I32"] = "I32";
  ValueKind2["I64"] = "I64";
  ValueKind2["I128"] = "I128";
  ValueKind2["U8"] = "U8";
  ValueKind2["U16"] = "U16";
  ValueKind2["U32"] = "U32";
  ValueKind2["U64"] = "U64";
  ValueKind2["U128"] = "U128";
  ValueKind2["String"] = "String";
  ValueKind2["Enum"] = "Enum";
  ValueKind2["Array"] = "Array";
  ValueKind2["Tuple"] = "Tuple";
  ValueKind2["Map"] = "Map";
  ValueKind2["Address"] = "Address";
  ValueKind2["Bucket"] = "Bucket";
  ValueKind2["Proof"] = "Proof";
  ValueKind2["Expression"] = "Expression";
  ValueKind2["Blob"] = "Blob";
  ValueKind2["Decimal"] = "Decimal";
  ValueKind2["PreciseDecimal"] = "PreciseDecimal";
  ValueKind2["NonFungibleLocalId"] = "NonFungibleLocalId";
  ValueKind2["AddressReservation"] = "AddressReservation";
  return ValueKind2;
})(ValueKind || {});
var Expression = /* @__PURE__ */ ((Expression2) => {
  Expression2["EntireWorktop"] = "EntireWorktop";
  Expression2["EntireAuthZone"] = "EntireAuthZone";
  return Expression2;
})(Expression || {});
var NetworkId;
((NetworkId2) => {
  NetworkId2.Mainnet = 1;
  NetworkId2.Stokenet = 2;
  NetworkId2.Alphanet = 10;
  NetworkId2.Betanet = 11;
  NetworkId2.Kisharnet = 12;
  NetworkId2.Ansharnet = 13;
  NetworkId2.Zabanet = 14;
  NetworkId2.RCNetV1 = NetworkId2.Kisharnet;
  NetworkId2.RCNetV2 = NetworkId2.Ansharnet;
  NetworkId2.RCNetV3 = NetworkId2.Zabanet;
  NetworkId2.Gilganet = 32;
  NetworkId2.Enkinet = 33;
  NetworkId2.Hammunet = 34;
  NetworkId2.Nergalnet = 35;
  NetworkId2.Mardunet = 36;
  NetworkId2.LocalNet = 240;
  NetworkId2.InternalTestNet = 241;
  NetworkId2.Simulator = 242;
})(NetworkId || (NetworkId = {}));
const ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
function normalizeInput(input) {
  let ret;
  if (input instanceof Uint8Array) {
    ret = input;
  } else if (typeof input === "string") {
    const encoder = new TextEncoder();
    ret = encoder.encode(input);
  } else {
    throw new Error(ERROR_MSG_INPUT);
  }
  return ret;
}
function toHex2(bytes2) {
  return Array.prototype.map.call(bytes2, function(n) {
    return (n < 16 ? "0" : "") + n.toString(16);
  }).join("");
}
function uint32ToHex(val) {
  return (4294967296 + val).toString(16).substring(1);
}
function debugPrint(label, arr, size) {
  let msg = "\n" + label + " = ";
  for (let i = 0; i < arr.length; i += 2) {
    if (size === 32) {
      msg += uint32ToHex(arr[i]).toUpperCase();
      msg += " ";
      msg += uint32ToHex(arr[i + 1]).toUpperCase();
    } else if (size === 64) {
      msg += uint32ToHex(arr[i + 1]).toUpperCase();
      msg += uint32ToHex(arr[i]).toUpperCase();
    } else
      throw new Error("Invalid size " + size);
    if (i % 6 === 4) {
      msg += "\n" + new Array(label.length + 4).join(" ");
    } else if (i < arr.length - 2) {
      msg += " ";
    }
  }
  console.log(msg);
}
function testSpeed(hashFn, N2, M) {
  let startMs = (/* @__PURE__ */ new Date()).getTime();
  const input = new Uint8Array(N2);
  for (let i = 0; i < N2; i++) {
    input[i] = i % 256;
  }
  const genMs = (/* @__PURE__ */ new Date()).getTime();
  console.log("Generated random input in " + (genMs - startMs) + "ms");
  startMs = genMs;
  for (let i = 0; i < M; i++) {
    const hashHex = hashFn(input);
    const hashMs = (/* @__PURE__ */ new Date()).getTime();
    const ms = hashMs - startMs;
    startMs = hashMs;
    console.log("Hashed in " + ms + "ms: " + hashHex.substring(0, 20) + "...");
    console.log(
      Math.round(N2 / (1 << 20) / (ms / 1e3) * 100) / 100 + " MB PER SECOND"
    );
  }
}
var util$2 = {
  normalizeInput,
  toHex: toHex2,
  debugPrint,
  testSpeed
};
const util$1 = util$2;
function ADD64AA(v2, a, b) {
  const o0 = v2[a] + v2[b];
  let o1 = v2[a + 1] + v2[b + 1];
  if (o0 >= 4294967296) {
    o1++;
  }
  v2[a] = o0;
  v2[a + 1] = o1;
}
function ADD64AC(v2, a, b0, b1) {
  let o0 = v2[a] + b0;
  if (b0 < 0) {
    o0 += 4294967296;
  }
  let o1 = v2[a + 1] + b1;
  if (o0 >= 4294967296) {
    o1++;
  }
  v2[a] = o0;
  v2[a + 1] = o1;
}
function B2B_GET32(arr, i) {
  return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
}
function B2B_G(a, b, c, d, ix, iy) {
  const x0 = m$1[ix];
  const x1 = m$1[ix + 1];
  const y0 = m$1[iy];
  const y1 = m$1[iy + 1];
  ADD64AA(v$1, a, b);
  ADD64AC(v$1, a, x0, x1);
  let xor0 = v$1[d] ^ v$1[a];
  let xor1 = v$1[d + 1] ^ v$1[a + 1];
  v$1[d] = xor1;
  v$1[d + 1] = xor0;
  ADD64AA(v$1, c, d);
  xor0 = v$1[b] ^ v$1[c];
  xor1 = v$1[b + 1] ^ v$1[c + 1];
  v$1[b] = xor0 >>> 24 ^ xor1 << 8;
  v$1[b + 1] = xor1 >>> 24 ^ xor0 << 8;
  ADD64AA(v$1, a, b);
  ADD64AC(v$1, a, y0, y1);
  xor0 = v$1[d] ^ v$1[a];
  xor1 = v$1[d + 1] ^ v$1[a + 1];
  v$1[d] = xor0 >>> 16 ^ xor1 << 16;
  v$1[d + 1] = xor1 >>> 16 ^ xor0 << 16;
  ADD64AA(v$1, c, d);
  xor0 = v$1[b] ^ v$1[c];
  xor1 = v$1[b + 1] ^ v$1[c + 1];
  v$1[b] = xor1 >>> 31 ^ xor0 << 1;
  v$1[b + 1] = xor0 >>> 31 ^ xor1 << 1;
}
const BLAKE2B_IV32 = new Uint32Array([
  4089235720,
  1779033703,
  2227873595,
  3144134277,
  4271175723,
  1013904242,
  1595750129,
  2773480762,
  2917565137,
  1359893119,
  725511199,
  2600822924,
  4215389547,
  528734635,
  327033209,
  1541459225
]);
const SIGMA8 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3
];
const SIGMA82 = new Uint8Array(
  SIGMA8.map(function(x) {
    return x * 2;
  })
);
const v$1 = new Uint32Array(32);
const m$1 = new Uint32Array(32);
function blake2bCompress(ctx, last) {
  let i = 0;
  for (i = 0; i < 16; i++) {
    v$1[i] = ctx.h[i];
    v$1[i + 16] = BLAKE2B_IV32[i];
  }
  v$1[24] = v$1[24] ^ ctx.t;
  v$1[25] = v$1[25] ^ ctx.t / 4294967296;
  if (last) {
    v$1[28] = ~v$1[28];
    v$1[29] = ~v$1[29];
  }
  for (i = 0; i < 32; i++) {
    m$1[i] = B2B_GET32(ctx.b, 4 * i);
  }
  for (i = 0; i < 12; i++) {
    B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
    B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
    B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
    B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
    B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
    B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
    B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
    B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
  }
  for (i = 0; i < 16; i++) {
    ctx.h[i] = ctx.h[i] ^ v$1[i] ^ v$1[i + 16];
  }
}
const parameterBlock = new Uint8Array([
  0,
  0,
  0,
  0,
  //  0: outlen, keylen, fanout, depth
  0,
  0,
  0,
  0,
  //  4: leaf length, sequential mode
  0,
  0,
  0,
  0,
  //  8: node offset
  0,
  0,
  0,
  0,
  // 12: node offset
  0,
  0,
  0,
  0,
  // 16: node depth, inner length, rfu
  0,
  0,
  0,
  0,
  // 20: rfu
  0,
  0,
  0,
  0,
  // 24: rfu
  0,
  0,
  0,
  0,
  // 28: rfu
  0,
  0,
  0,
  0,
  // 32: salt
  0,
  0,
  0,
  0,
  // 36: salt
  0,
  0,
  0,
  0,
  // 40: salt
  0,
  0,
  0,
  0,
  // 44: salt
  0,
  0,
  0,
  0,
  // 48: personal
  0,
  0,
  0,
  0,
  // 52: personal
  0,
  0,
  0,
  0,
  // 56: personal
  0,
  0,
  0,
  0
  // 60: personal
]);
function blake2bInit(outlen, key2, salt, personal) {
  if (outlen === 0 || outlen > 64) {
    throw new Error("Illegal output length, expected 0 < length <= 64");
  }
  if (key2 && key2.length > 64) {
    throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
  }
  if (salt && salt.length !== 16) {
    throw new Error("Illegal salt, expected Uint8Array with length is 16");
  }
  if (personal && personal.length !== 16) {
    throw new Error("Illegal personal, expected Uint8Array with length is 16");
  }
  const ctx = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0,
    // input count
    c: 0,
    // pointer within buffer
    outlen
    // output length in bytes
  };
  parameterBlock.fill(0);
  parameterBlock[0] = outlen;
  if (key2)
    parameterBlock[1] = key2.length;
  parameterBlock[2] = 1;
  parameterBlock[3] = 1;
  if (salt)
    parameterBlock.set(salt, 32);
  if (personal)
    parameterBlock.set(personal, 48);
  for (let i = 0; i < 16; i++) {
    ctx.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameterBlock, i * 4);
  }
  if (key2) {
    blake2bUpdate(ctx, key2);
    ctx.c = 128;
  }
  return ctx;
}
function blake2bUpdate(ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 128) {
      ctx.t += ctx.c;
      blake2bCompress(ctx, false);
      ctx.c = 0;
    }
    ctx.b[ctx.c++] = input[i];
  }
}
function blake2bFinal(ctx) {
  ctx.t += ctx.c;
  while (ctx.c < 128) {
    ctx.b[ctx.c++] = 0;
  }
  blake2bCompress(ctx, true);
  const out = new Uint8Array(ctx.outlen);
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
  }
  return out;
}
function blake2b(input, key2, outlen, salt, personal) {
  outlen = outlen || 64;
  input = util$1.normalizeInput(input);
  if (salt) {
    salt = util$1.normalizeInput(salt);
  }
  if (personal) {
    personal = util$1.normalizeInput(personal);
  }
  const ctx = blake2bInit(outlen, key2, salt, personal);
  blake2bUpdate(ctx, input);
  return blake2bFinal(ctx);
}
function blake2bHex(input, key2, outlen, salt, personal) {
  const output2 = blake2b(input, key2, outlen, salt, personal);
  return util$1.toHex(output2);
}
var blake2b_1 = {
  blake2b,
  blake2bHex,
  blake2bInit,
  blake2bUpdate,
  blake2bFinal
};
const util = util$2;
function B2S_GET32(v2, i) {
  return v2[i] ^ v2[i + 1] << 8 ^ v2[i + 2] << 16 ^ v2[i + 3] << 24;
}
function B2S_G(a, b, c, d, x, y) {
  v[a] = v[a] + v[b] + x;
  v[d] = ROTR32(v[d] ^ v[a], 16);
  v[c] = v[c] + v[d];
  v[b] = ROTR32(v[b] ^ v[c], 12);
  v[a] = v[a] + v[b] + y;
  v[d] = ROTR32(v[d] ^ v[a], 8);
  v[c] = v[c] + v[d];
  v[b] = ROTR32(v[b] ^ v[c], 7);
}
function ROTR32(x, y) {
  return x >>> y ^ x << 32 - y;
}
const BLAKE2S_IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SIGMA = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0
]);
const v = new Uint32Array(16);
const m = new Uint32Array(16);
function blake2sCompress(ctx, last) {
  let i = 0;
  for (i = 0; i < 8; i++) {
    v[i] = ctx.h[i];
    v[i + 8] = BLAKE2S_IV[i];
  }
  v[12] ^= ctx.t;
  v[13] ^= ctx.t / 4294967296;
  if (last) {
    v[14] = ~v[14];
  }
  for (i = 0; i < 16; i++) {
    m[i] = B2S_GET32(ctx.b, 4 * i);
  }
  for (i = 0; i < 10; i++) {
    B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]]);
    B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]]);
    B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]]);
    B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]]);
    B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]]);
    B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]]);
    B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]]);
    B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]]);
  }
  for (i = 0; i < 8; i++) {
    ctx.h[i] ^= v[i] ^ v[i + 8];
  }
}
function blake2sInit(outlen, key2) {
  if (!(outlen > 0 && outlen <= 32)) {
    throw new Error("Incorrect output length, should be in [1, 32]");
  }
  const keylen = key2 ? key2.length : 0;
  if (key2 && !(keylen > 0 && keylen <= 32)) {
    throw new Error("Incorrect key length, should be in [1, 32]");
  }
  const ctx = {
    h: new Uint32Array(BLAKE2S_IV),
    // hash state
    b: new Uint8Array(64),
    // input block
    c: 0,
    // pointer within block
    t: 0,
    // input count
    outlen
    // output length in bytes
  };
  ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
  if (keylen > 0) {
    blake2sUpdate(ctx, key2);
    ctx.c = 64;
  }
  return ctx;
}
function blake2sUpdate(ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 64) {
      ctx.t += ctx.c;
      blake2sCompress(ctx, false);
      ctx.c = 0;
    }
    ctx.b[ctx.c++] = input[i];
  }
}
function blake2sFinal(ctx) {
  ctx.t += ctx.c;
  while (ctx.c < 64) {
    ctx.b[ctx.c++] = 0;
  }
  blake2sCompress(ctx, true);
  const out = new Uint8Array(ctx.outlen);
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> 8 * (i & 3) & 255;
  }
  return out;
}
function blake2s(input, key2, outlen) {
  outlen = outlen || 32;
  input = util.normalizeInput(input);
  const ctx = blake2sInit(outlen, key2);
  blake2sUpdate(ctx, input);
  return blake2sFinal(ctx);
}
function blake2sHex(input, key2, outlen) {
  const output2 = blake2s(input, key2, outlen);
  return util.toHex(output2);
}
var blake2s_1 = {
  blake2s,
  blake2sHex,
  blake2sInit,
  blake2sUpdate,
  blake2sFinal
};
const b2b = blake2b_1;
const b2s = blake2s_1;
var blakejs = {
  blake2b: b2b.blake2b,
  blake2bHex: b2b.blake2bHex,
  blake2bInit: b2b.blake2bInit,
  blake2bUpdate: b2b.blake2bUpdate,
  blake2bFinal: b2b.blake2bFinal,
  blake2s: b2s.blake2s,
  blake2sHex: b2s.blake2sHex,
  blake2sInit: b2s.blake2sInit,
  blake2sUpdate: b2s.blake2sUpdate,
  blake2sFinal: b2s.blake2sFinal
};
const hash2 = (data) => blakejs.blake2b(data, void 0, 32);
const generateRandomNonce = () => Math.floor(Math.random() * 4294967295);
const wasmBindgenImports = {
  __wbindgen_placeholder__: {
    __wbindgen_describe: () => {
    },
    __wbindgen_throw: () => {
    }
  },
  __wbindgen_externref_xform__: {
    __wbindgen_externref_table_grow: () => {
    },
    __wbindgen_externref_table_set_null: () => {
    }
  }
};
const _RadixEngineToolkit = class {
};
let RadixEngineToolkit = _RadixEngineToolkit;
/* Build Module */
/**
 * A module of the Radix Engine Toolkit which exposes information relating to the build of the
 * toolkit in use.
 */
__publicField(RadixEngineToolkit, "Build", class {
  /**
   * Returns information on the core Radix Engine Toolkit WASM such as it's version and the
   * version of the Scrypto dependency in it.
   * @returns Information on the version of the Radix Engine Toolkit's WASM and information on the
   * Scrypto dependency that was used to build the toolkit.
   */
  static async information() {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.buildInformation({});
    return {
      version: output2.version,
      scryptoDependency: output2.scrypto_dependency
    };
  }
});
/**
 * A module of the Radix Engine Toolkit concerned with performing derivations.
 */
__publicField(RadixEngineToolkit, "Derive", class {
  /**
   * Derives the virtual account address associated with the provided public key on the given
   * network.
   * @param publicKey The public key to derive virtual account address for.
   * @param networkId The id of the network that this address is to be used for. This is an 8-bit
   * unsigned integer in the range [0x00, 0xFF]
   * @returns A string of the bech32m encoded address of the virtual account address derived from
   * the public key.
   */
  static async virtualAccountAddressFromPublicKey(publicKey, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const input = {
      network_id: Convert.Number.toString(networkId),
      public_key: GeneratedConverter.PublicKey.toGenerated(publicKey)
    };
    const output2 = rawRet.deriveVirtualAccountAddressFromPublicKey(input);
    return output2;
  }
  /**
   * Derives the virtual identity address associated with the provided public key on the given
   * network.
   * @param publicKey The public key to derive virtual identity address for.
   * @param networkId The id of the network that this address is to be used for. This is an 8-bit
   * unsigned integer in the range [0x00, 0xFF]
   * @returns A string of the bech32m encoded address of the virtual identity address derived from
   * the public key.
   */
  static async virtualIdentityAddressFromPublicKey(publicKey, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const input = {
      network_id: Convert.Number.toString(networkId),
      public_key: GeneratedConverter.PublicKey.toGenerated(publicKey)
    };
    const output2 = rawRet.deriveVirtualIdentityAddressFromPublicKey(input);
    return output2;
  }
  /**
   * Derives the address of the account on the Babylon network associated with an account on the
   * Olympia network.
   * @param olympiaAccountAddress The address of the account on the Olympia network.
   * @param networkId The id of the network that this address is to be used for. This is an 8-bit
   * unsigned integer in the range [0x00, 0xFF].
   * @returns A string of the bech32m encoded address of the virtual account address derived from
   * the olympia account address.
   */
  static async virtualAccountAddressFromOlympiaAccountAddress(olympiaAccountAddress, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.deriveVirtualAccountAddressFromOlympiaAccountAddress({
      olympia_account_address: olympiaAccountAddress,
      network_id: Convert.Number.toString(networkId)
    });
    return output2;
  }
  /**
   * Derives the resource address on the Babylon network associated with a resource from the
   * Olympia network.
   * @param olympiaResourceAddress The address of the resource on the Olympia network.
   * @param networkId The id of the network that this address is to be used for. This is an 8-bit
   * unsigned integer in the range [0x00, 0xFF].
   * @returns A string of the bech32m encoded address of the resource address on the Babylon
   * network derived from the resource address form the Olympia network.
   */
  static async resourceAddressFromOlympiaResourceAddress(olympiaResourceAddress, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.deriveResourceAddressFromOlympiaResourceAddress({
      network_id: Convert.Number.toString(networkId),
      olympia_resource_address: olympiaResourceAddress
    });
    return output2;
  }
  /**
   * Derives the public key of an Olympia account.
   * @param olympiaAccountAddress The address of the account on the Olympia network.
   * @returns A byte array of the Ecdsa Secp256k1 public key associated with the Olympia account.
   */
  static async publicKeyFromOlympiaAccountAddress(olympiaAccountAddress) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.derivePublicKeyFromOlympiaAccountAddress(
      olympiaAccountAddress
    );
    return Convert.HexString.toUint8Array(output2);
  }
  /**
   * Derives the Olympia account address associated with a public key.
   * @param publicKey The Ecdsa Secp256k1 public key to derive the Olympia account address for.
   * @param olympiaNetwork The Olympia network to derive the account address for.
   * @returns The derived Olympia account address.
   */
  static async olympiaAccountAddressFromPublicKey(publicKey, olympiaNetwork) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.deriveOlympiaAccountAddressFromPublicKey({
      olympia_network: GeneratedConverter.OlympiaNetwork.toGenerated(olympiaNetwork),
      public_key: Convert.Uint8Array.toHexString(publicKey)
    });
    return output2;
  }
  /**
   * Derives the node address from an Ecdsa Secp256k1 public key.
   * @param publicKey The Ecdsa Secp256k1 public key to derive the node address for.
   * @param networkId The network id of the node.
   * @returns The derived node address.
   */
  static async nodeAddressFromPublicKey(publicKey, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    return rawRet.deriveNodeAddressFromPublicKey({
      network_id: Convert.Number.toString(networkId),
      public_key: Convert.Uint8Array.toHexString(publicKey)
    });
  }
  static async bech32mTransactionIdentifierFromIntentHash(transactionHash, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    return rawRet.deriveBech32mTransactionIdentifierFromIntentHash({
      network_id: Convert.Number.toString(networkId),
      hash: Convert.Uint8Array.toHexString(transactionHash)
    });
  }
});
/**
 * A module of the Radix Engine Toolkit concerned with functions that can be applied to
 * instructions.
 */
__publicField(RadixEngineToolkit, "Instructions", class {
  /**
   * Converts {@link Instructions} from one format to another. Currently, the supported formats
   * are `String` and `Parsed`.
   * @param instructions The instructions the format should be changed for.
   * @param networkId The id of the network that the instructions are meant for.
   * @param instructionsKind The kind of instructions to get out.
   * @returns The converted instructions.
   */
  static async convert(instructions, networkId, instructionsKind) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.instructionsConvert({
      instructions: GeneratedConverter.Instructions.toGenerated(instructions),
      network_id: Convert.Number.toString(networkId),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.Instructions.fromGenerated(output2);
  }
  static async compile(instructions, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.instructionsCompile({
      instructions: GeneratedConverter.Instructions.toGenerated(instructions),
      network_id: Convert.Number.toString(networkId)
    });
    return Convert.HexString.toUint8Array(output2);
  }
  static async decompile(compiledInstructions, networkId, instructionsKind = "Parsed") {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.instructionsDecompile({
      compiled: Convert.Uint8Array.toHexString(compiledInstructions),
      network_id: Convert.Number.toString(networkId),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.Instructions.fromGenerated(output2);
  }
  static async extractAddresses(instructions, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.instructionsExtractAddresses({
      instructions: GeneratedConverter.Instructions.toGenerated(instructions),
      network_id: Convert.Number.toString(networkId)
    });
    return output2.addresses;
  }
  static async staticallyValidate(instructions, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.instructionsStaticallyValidate({
      instructions: GeneratedConverter.Instructions.toGenerated(instructions),
      network_id: Convert.Number.toString(networkId)
    });
    return toStaticValidationResult(output2);
  }
});
__publicField(RadixEngineToolkit, "TransactionManifest", class {
  static async compile(transactionManifest, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.manifestCompile({
      manifest: GeneratedConverter.TransactionManifest.toGenerated(
        transactionManifest
      ),
      network_id: Convert.Number.toString(networkId)
    });
    return Convert.HexString.toUint8Array(output2);
  }
  static async decompile(compiledTransactionManifest, networkId, instructionsKind = "Parsed") {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.manifestDecompile({
      compiled: Convert.Uint8Array.toHexString(compiledTransactionManifest),
      network_id: Convert.Number.toString(networkId),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.TransactionManifest.fromGenerated(output2);
  }
  static async staticallyValidate(transactionManifest, networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.manifestStaticallyValidate({
      manifest: GeneratedConverter.TransactionManifest.toGenerated(
        transactionManifest
      ),
      network_id: Convert.Number.toString(networkId)
    });
    return toStaticValidationResult(output2);
  }
});
__publicField(RadixEngineToolkit, "Intent", class {
  static async intentHash(intent) {
    return this.hash(intent);
  }
  static async hash(intent) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.intentHash(
      GeneratedConverter.Intent.toGenerated(intent)
    );
    return GeneratedConverter.TransactionHash.fromGenerated(output2);
  }
  static async compile(intent) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.intentCompile(
      GeneratedConverter.Intent.toGenerated(intent)
    );
    return Convert.HexString.toUint8Array(output2);
  }
  static async decompile(compiledIntent, instructionsKind = "Parsed") {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.intentDecompile({
      compiled: Convert.Uint8Array.toHexString(compiledIntent),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.Intent.fromGenerated(output2);
  }
  static async staticallyValidate(intent, validationConfig) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.intentStaticallyValidate({
      intent: GeneratedConverter.Intent.toGenerated(intent),
      validation_config: GeneratedConverter.ValidationConfig.toGenerated(validationConfig)
    });
    return toStaticValidationResult(output2);
  }
});
__publicField(RadixEngineToolkit, "SignedIntent", class {
  static async hash(signedIntent) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.signedIntentHash(
      GeneratedConverter.SignedIntent.toGenerated(signedIntent)
    );
    return GeneratedConverter.TransactionHash.fromGenerated(output2);
  }
  static async signedIntentHash(signedIntent) {
    return this.hash(signedIntent);
  }
  static async intentHash(signedIntent) {
    return _RadixEngineToolkit.Intent.hash(signedIntent.intent);
  }
  static async compile(signedIntent) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.signedIntentCompile(
      GeneratedConverter.SignedIntent.toGenerated(signedIntent)
    );
    return Convert.HexString.toUint8Array(output2);
  }
  static async decompile(compiledSignedIntent, instructionsKind = "Parsed") {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.signedIntentDecompile({
      compiled: Convert.Uint8Array.toHexString(compiledSignedIntent),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.SignedIntent.fromGenerated(output2);
  }
  static async staticallyValidate(signedIntent, validationConfig) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.signedIntentStaticallyValidate({
      signed_intent: GeneratedConverter.SignedIntent.toGenerated(signedIntent),
      validation_config: GeneratedConverter.ValidationConfig.toGenerated(validationConfig)
    });
    return toStaticValidationResult(output2);
  }
});
__publicField(RadixEngineToolkit, "NotarizedTransaction", class {
  static async hash(notarizedTransaction) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.notarizedTransactionHash(
      GeneratedConverter.NotarizedTransaction.toGenerated(
        notarizedTransaction
      )
    );
    return GeneratedConverter.TransactionHash.fromGenerated(output2);
  }
  static async notarizedTransactionHash(notarizedTransaction) {
    return this.hash(notarizedTransaction);
  }
  static async signedIntentHash(notarizedTransaction) {
    return _RadixEngineToolkit.SignedIntent.hash(
      notarizedTransaction.signedIntent
    );
  }
  static async intentHash(notarizedTransaction) {
    return _RadixEngineToolkit.Intent.hash(
      notarizedTransaction.signedIntent.intent
    );
  }
  static async compile(notarizedTransaction) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.notarizedTransactionCompile(
      GeneratedConverter.NotarizedTransaction.toGenerated(
        notarizedTransaction
      )
    );
    return Convert.HexString.toUint8Array(output2);
  }
  static async decompile(compiledNotarizedTransaction, instructionsKind = "Parsed") {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.notarizedTransactionDecompile({
      compiled: Convert.Uint8Array.toHexString(compiledNotarizedTransaction),
      instructions_kind: SerializableInstructionsKind[instructionsKind]
    });
    return GeneratedConverter.NotarizedTransaction.fromGenerated(output2);
  }
  static async staticallyValidate(notarizedTransaction, validationConfig) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.notarizedTransactionStaticallyValidate({
      notarized_transaction: GeneratedConverter.NotarizedTransaction.toGenerated(
        notarizedTransaction
      ),
      validation_config: GeneratedConverter.ValidationConfig.toGenerated(validationConfig)
    });
    return toStaticValidationResult(output2);
  }
});
__publicField(RadixEngineToolkit, "ManifestSbor", class {
  static async decodeToString(payload, networkId, representation) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.manifestSborDecodeToString({
      encoded_payload: Convert.Uint8Array.toHexString(payload),
      network_id: Convert.Number.toString(networkId),
      representation: GeneratedConverter.ManifestSborStringRepresentation.toGenerated(
        representation
      )
    });
    return output2;
  }
});
__publicField(RadixEngineToolkit, "ScryptoSbor", class {
  static async decodeToString(payload, networkId, representation) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.scryptoSborDecodeToString({
      encoded_payload: Convert.Uint8Array.toHexString(payload),
      network_id: Convert.Number.toString(networkId),
      representation: GeneratedConverter.SerializationMode.toGenerated(representation)
    });
    return output2;
  }
  static async encodeProgrammaticJson(object) {
    const encoded = JSON.stringify(object);
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.scryptoSborEncodeStringRepresentation({
      kind: "ProgrammaticJson",
      value: encoded
    });
    return Convert.HexString.toUint8Array(output2);
  }
});
__publicField(RadixEngineToolkit, "Address", class {
  static async entityType(address2) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.addressEntityType(address2);
    return GeneratedConverter.EntityType.fromGenerated(output2);
  }
  static async decode(address2) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.addressDecode(address2);
    return {
      networkId: Convert.String.toNumber(output2.network_id),
      entityType: GeneratedConverter.EntityType.fromGenerated(
        output2.entity_type
      ),
      hrp: output2.hrp,
      data: Convert.HexString.toUint8Array(output2.data)
    };
  }
});
__publicField(RadixEngineToolkit, "Utils", class {
  static async knownAddresses(networkId) {
    const rawRet = await rawRadixEngineToolkit;
    const output2 = rawRet.utilsKnownAddresses(
      Convert.Number.toString(networkId)
    );
    return {
      resourceAddresses: {
        xrd: output2.resource_addresses.xrd,
        secp256k1SignatureVirtualBadge: output2.resource_addresses.secp256k1_signature_virtual_badge,
        ed25519SignatureVirtualBadge: output2.resource_addresses.ed25519_signature_virtual_badge,
        packageOfDirectCallerVirtualBadge: output2.resource_addresses.package_of_direct_caller_virtual_badge,
        globalCallerVirtualBadge: output2.resource_addresses.global_caller_virtual_badge,
        systemTransactionBadge: output2.resource_addresses.system_transaction_badge,
        packageOwnerBadge: output2.resource_addresses.package_owner_badge,
        validatorOwnerBadge: output2.resource_addresses.validator_owner_badge,
        accountOwnerBadge: output2.resource_addresses.account_owner_badge,
        identityOwnerBadge: output2.resource_addresses.identity_owner_badge
      },
      packageAddresses: {
        packagePackage: output2.package_addresses.package_package,
        resourcePackage: output2.package_addresses.resource_package,
        accountPackage: output2.package_addresses.account_package,
        identityPackage: output2.package_addresses.identity_package,
        consensusManagerPackage: output2.package_addresses.consensus_manager_package,
        accessControllerPackage: output2.package_addresses.access_controller_package,
        poolPackage: output2.package_addresses.pool_package,
        transactionProcessorPackage: output2.package_addresses.transaction_processor_package,
        metadataModulePackage: output2.package_addresses.metadata_module_package,
        royaltyModulePackage: output2.package_addresses.royalty_module_package,
        roleAssignmentModulePackage: output2.package_addresses.role_assignment_module_package,
        genesisHelperPackage: output2.package_addresses.genesis_helper_package,
        faucetPackage: output2.package_addresses.faucet_package
      },
      componentAddresses: {
        consensusManager: output2.component_addresses.consensus_manager,
        genesisHelper: output2.component_addresses.genesis_helper,
        faucet: output2.component_addresses.faucet
      }
    };
  }
});
const toStaticValidationResult = (input) => {
  switch (input.kind) {
    case "Valid":
      return {
        kind: "Valid"
      };
    case "Invalid":
      return {
        kind: "Invalid",
        error: input.value
      };
  }
};
class Host {
  constructor(exports) {
    /**
     * The exports of the Radix Engine Toolkit as defined by the calling code that defines what
     * functions exist on the toolkit.
     */
    __publicField(this, "exports");
    /** Used for UTF-8 encoding text */
    __publicField(this, "textEncoder", new TextEncoder());
    /** Used for UTF-8 decoding text */
    __publicField(this, "textDecoder", new TextDecoder());
    this.exports = exports;
  }
  /**
   * Provides an abstract way of calling functions on the Radix Engine Toolkit handling memory
   * allocation/deallocation and input/output encoding/decoding on behalf of the caller. Allowing
   * for a higher-level API for calling into the RET and getting responses.
   * @param input The input of the Radix Engine Toolkit function.
   * @param fn The Radix Engine Toolkit function to invoke.
   * @returns An object of the generic type {@link O} of the expected output from the function.
   */
  callFunction(input, fn) {
    const inputPointer = this.writeObjectToMemory(input);
    const outputPointer = fn(inputPointer);
    const output2 = this.readObjectFromMemory(outputPointer);
    return output2;
  }
  /**
   * Writes an object to the WASM's linear memory in the standard Radix Engine Toolkit serialization
   * format and returns a pointer to the object in memory.
   *
   * During communication with the Radix Engine Toolkit, objects are expected to be serialized in
   * the following way:
   * - Serialized to JSON.
   * - UTF-8 Encoded with a null terminator at the end.
   *
   * Thus, this function writes the null-terminated utf-8 encoded JSON serialization of the object
   * to memory and returns it's address.
   *
   * This function performs all of the necessary memory allocations through the memory allocator
   * exposed by the Radix Engine Toolkit. No memory allocation happens outside this function.
   * @param obj The JS object to write to memory, can be of any type.
   * @returns A pointer to the object in the memory of the WASM instance.
   */
  writeObjectToMemory(obj) {
    const serializedObject = JSON.stringify(obj);
    const encodedObject = this.textEncoder.encode(serializedObject);
    const nullTerminatedEncodedObject = new Uint8Array([...encodedObject, 0]);
    const requiredCapacity = nullTerminatedEncodedObject.length;
    const memoryPointer = this.allocateMemory(requiredCapacity);
    const view = new Uint8Array(
      this.memory().buffer,
      memoryPointer
    );
    view.set(nullTerminatedEncodedObject);
    return memoryPointer;
  }
  /**
   * Reads objects from the WASM's memory in the standard Radix Engine Toolkit serialization format
   * which is identical to that described in the {@link writeObjectToMemory} function documentation.
   *
   * After reading the memory, this function deallocates the provided pointer meaning that the
   * calling code is no-longer able to read or write to this memory pointer any-longer.
   *
   * Note that this function offers no guarantees that the output of the Radix Engine Toolkit
   * conforms to {@link T}, the generic in this function is provided only as a type hint to the
   * client and not for verification.
   *
   * @param pointer A pointer to the location in memory to read from.
   * @returns A parsed object of type {@link T} that has been read from the WASM memory. See note
   * above on the guaranteed provided by the RET for this.
   * @throws This function throws an exception in the following cases:
   * - If we fail to find the null terminator of the object in memory.
   * - If we fail to UTF-8 decode the data that's been read.
   */
  readObjectFromMemory(pointer) {
    const memoryBuffer = this.memory().buffer;
    const view = new Uint8Array(memoryBuffer, pointer);
    const length = view.findIndex((byte) => byte === 0);
    if (length === -1) {
      throw new Error(
        "Failed to find the null-terminator in the response from the RET."
      );
    }
    const nullTerminatedEncodedObject = new Uint8Array(
      memoryBuffer,
      pointer,
      length
    );
    let output2;
    try {
      const decodedOutput = this.textDecoder.decode(
        nullTerminatedEncodedObject
      );
      output2 = JSON.parse(decodedOutput);
    } catch {
      throw new Error(
        `Attempted to UTF-8 decode the response from the RET but failed: ${nullTerminatedEncodedObject}`
      );
    }
    this.deallocateMemory(pointer);
    return output2;
  }
}
function _loadWasmModule(sync, filepath, src, imports) {
  function _instantiateOrCompile(source, imports2, stream) {
    var instantiateFunc = stream ? WebAssembly.instantiateStreaming : WebAssembly.instantiate;
    var compileFunc = stream ? WebAssembly.compileStreaming : WebAssembly.compile;
    if (imports2) {
      return instantiateFunc(source, imports2);
    } else {
      return compileFunc(source);
    }
  }
  var buf = null;
  if (filepath) {
    // return _instantiateOrCompile(fetch(filepath), imports, true);
    return WebAssembly.instantiate(wasMod, imports);
  }
  var raw = globalThis.atob(src);
  var rawLength = raw.length;
  buf = new Uint8Array(new ArrayBuffer(rawLength));
  for (var i = 0; i < rawLength; i++) {
    buf[i] = raw.charCodeAt(i);
  }
  if (sync) {
    var mod2 = new WebAssembly.Module(buf);
    return imports ? new WebAssembly.Instance(mod2, imports) : mod2;
  } else {
    return _instantiateOrCompile(buf, imports, false);
  }
}
function wasmModule(imports) {
  return _loadWasmModule(0, "87f112ed4a41cc6c.wasm", null, imports);
}
class RawRadixEngineToolkit extends Host {
  buildInformation(input) {
    return this.callFunction(input, this.exports.build_information);
  }
  deriveVirtualAccountAddressFromPublicKey(input) {
    return this.callFunction(
      input,
      this.exports.derive_virtual_account_address_from_public_key
    );
  }
  deriveVirtualIdentityAddressFromPublicKey(input) {
    return this.callFunction(
      input,
      this.exports.derive_virtual_identity_address_from_public_key
    );
  }
  derivePublicKeyFromOlympiaAccountAddress(input) {
    return this.callFunction(
      input,
      this.exports.derive_public_key_from_olympia_account_address
    );
  }
  deriveVirtualAccountAddressFromOlympiaAccountAddress(input) {
    return this.callFunction(
      input,
      this.exports.derive_virtual_account_address_from_olympia_account_address
    );
  }
  deriveResourceAddressFromOlympiaResourceAddress(input) {
    return this.callFunction(
      input,
      this.exports.derive_resource_address_from_olympia_resource_address
    );
  }
  deriveOlympiaAccountAddressFromPublicKey(input) {
    return this.callFunction(
      input,
      this.exports.derive_olympia_account_address_from_public_key
    );
  }
  deriveBech32mTransactionIdentifierFromIntentHash(input) {
    return this.callFunction(
      input,
      this.exports.derive_bech32m_transaction_identifier_from_intent_hash
    );
  }
  deriveNodeAddressFromPublicKey(input) {
    return this.callFunction(
      input,
      this.exports.derive_node_address_from_public_key
    );
  }
  executionAnalyze(input) {
    return this.callFunction(input, this.exports.execution_analyze);
  }
  instructionsHash(input) {
    return this.callFunction(input, this.exports.instructions_hash);
  }
  instructionsConvert(input) {
    return this.callFunction(input, this.exports.instructions_convert);
  }
  instructionsCompile(input) {
    return this.callFunction(input, this.exports.instructions_compile);
  }
  instructionsDecompile(input) {
    return this.callFunction(input, this.exports.instructions_decompile);
  }
  instructionsExtractAddresses(input) {
    return this.callFunction(
      input,
      this.exports.instructions_extract_addresses
    );
  }
  instructionsStaticallyValidate(input) {
    return this.callFunction(
      input,
      this.exports.instructions_statically_validate
    );
  }
  manifestHash(input) {
    return this.callFunction(input, this.exports.manifest_hash);
  }
  manifestCompile(input) {
    return this.callFunction(input, this.exports.manifest_compile);
  }
  manifestDecompile(input) {
    return this.callFunction(input, this.exports.manifest_decompile);
  }
  manifestStaticallyValidate(input) {
    return this.callFunction(input, this.exports.manifest_statically_validate);
  }
  intentHash(input) {
    return this.callFunction(input, this.exports.intent_hash);
  }
  intentCompile(input) {
    return this.callFunction(input, this.exports.intent_compile);
  }
  intentDecompile(input) {
    return this.callFunction(input, this.exports.intent_decompile);
  }
  intentStaticallyValidate(input) {
    return this.callFunction(input, this.exports.intent_statically_validate);
  }
  signedIntentHash(input) {
    return this.callFunction(input, this.exports.signed_intent_hash);
  }
  signedIntentCompile(input) {
    return this.callFunction(input, this.exports.signed_intent_compile);
  }
  signedIntentDecompile(input) {
    return this.callFunction(input, this.exports.signed_intent_decompile);
  }
  signedIntentStaticallyValidate(input) {
    return this.callFunction(
      input,
      this.exports.signed_intent_statically_validate
    );
  }
  notarizedTransactionHash(input) {
    return this.callFunction(input, this.exports.notarized_transaction_hash);
  }
  notarizedTransactionCompile(input) {
    return this.callFunction(input, this.exports.notarized_transaction_compile);
  }
  notarizedTransactionDecompile(input) {
    return this.callFunction(
      input,
      this.exports.notarized_transaction_decompile
    );
  }
  notarizedTransactionStaticallyValidate(input) {
    return this.callFunction(
      input,
      this.exports.notarized_transaction_statically_validate
    );
  }
  manifestSborDecodeToString(input) {
    return this.callFunction(
      input,
      this.exports.manifest_sbor_decode_to_string
    );
  }
  scryptoSborDecodeToString(input) {
    return this.callFunction(input, this.exports.scrypto_sbor_decode_to_string);
  }
  scryptoSborEncodeStringRepresentation(input) {
    return this.callFunction(
      input,
      this.exports.scrypto_sbor_encode_string_representation
    );
  }
  utilsKnownAddresses(input) {
    return this.callFunction(input, this.exports.utils_known_addresses);
  }
  addressEntityType(input) {
    return this.callFunction(input, this.exports.address_entity_type);
  }
  addressDecode(input) {
    return this.callFunction(input, this.exports.address_decode);
  }
  allocateMemory(capacity) {
    return this.exports.toolkit_alloc(capacity);
  }
  deallocateMemory(pointer) {
    this.exports.toolkit_free_c_string(pointer);
  }
  memory() {
    return this.exports.memory;
  }
  /**
   * Calls a method on the Radix Engine Toolkit and returns the output from the function invocation.
   *
   * This function is an extension {@link Host<Exports>#callFunction} that adds support for detecting when a
   * function invocation has errored out and throwing an exception in this case with the error that
   * was returned.
   *
   * @param input The input of the Radix Engine Toolkit function.
   * @param fn The Radix Engine Toolkit function to invoke.
   * @returns An object of the generic type {@link O} of the expected output from the function.
   */
  callFunction(input, fn) {
    const output2 = super.callFunction(input, fn);
    if (this.isErrorResponse(output2)) {
      const inputString = JSON.stringify(input);
      const outputString = JSON.stringify(output2);
      throw new Error(
        `Radix Engine Toolkit error for invocation ${inputString} response is ${outputString}`
      );
    }
    return output2;
  }
  /**
   * Determines if the output of the Radix Engine Toolkit is an error response or not. This is used
   * to determine if the Radix Engine Toolkit should throw an exception or not.
   * @param output The Radix Engine Toolkit output to check if it's an error or not.
   * @returns A boolean indicating whether this is an error response or not.
   */
  isErrorResponse(output2) {
    const topLevelErrors = [
      "InvocationHandlingError",
      "InvocationInterpretationError"
    ];
    return output2 === void 0 ? false : topLevelErrors.includes(output2 == null ? void 0 : output2["kind"]);
  }
}
const rawRadixEngineToolkit = wasmModule(
  wasmBindgenImports
).then((instance) => {
  console.log(instance)
  const exports = instance.exports;
  return new RawRadixEngineToolkit(exports);
});
Decimal.config({ precision: 64 });
export {
  CompiledNotarizedTransaction,
  CompiledSignedTransactionIntent,
  Convert,
  DefaultDepositRule,
  ED25519_PRIVATE_KEY_LENGTH,
  ED25519_PUBLIC_KEY_LENGTH,
  ED25519_SIGNATURE_LENGTH,
  EntityType,
  Expression,
  Host,
  InstructionsKind,
  LTSNotarizedTransaction,
  LTSRadixEngineToolkit,
  LTSSignedTransactionIntent,
  LTSTransactionIntent,
  ManifestBuilder,
  ManifestSborStringRepresentation,
  NetworkId,
  NotImplementedException,
  OlympiaNetwork,
  PrivateKey,
  PublicKey,
  RadixEngineToolkit,
  RawRadixEngineToolkit,
  ReservedInstruction,
  ResourcePreference,
  SECP256K1_PRIVATE_KEY_LENGTH,
  SECP256K1_PUBLIC_KEY_LENGTH,
  SECP256K1_SIGNATURE_LENGTH,
  SerializationMode,
  Signature,
  SignatureWithPublicKey,
  SimpleTransactionBuilder,
  TransactionBuilder,
  TransactionBuilderIntentSignaturesStep,
  TransactionBuilderManifestStep,
  ValueKind,
  address,
  addressReservation,
  array,
  blob,
  bool$1 as bool,
  bucket,
  castValue,
  decimal,
  defaultValidationConfig,
  destructManifestValueTuple,
  enumeration,
  expression,
  generateRandomNonce,
  hash2 as hash,
  i128,
  i16,
  i32,
  i64,
  i8,
  isAccountDepositCallMethod,
  isAccountWithdrawCallMethod,
  isFreeXrdCallMethod,
  isLockFeeCallMethod,
  map,
  nonFungibleLocalId,
  preciseDecimal,
  proof,
  rawRadixEngineToolkit,
  resolveBytes$1 as resolveBytes,
  resolveBytesAndCheckLength$1 as resolveBytesAndCheckLength,
  resolveDecimal,
  resolveSignatureSource,
  str$1 as str,
  tuple,
  u128,
  u16,
  u32,
  u64$1 as u64,
  u8,
  wasmBindgenImports
};
