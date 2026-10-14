// Hand-authored revision aids for Class 8 ICSE Mathematics (Understanding Mathematics, M.L. Aggarwal).
// Per chapter: top (cram list), groups (title -> items [text, sectionTitleKeyword]), words (one-word cards),
// map (mind-map branches: [label, [concepts], sectionTitleKeyword]). `at` keywords link to the chapter section whose title contains them.
const r = String.raw;
module.exports = {
  1: {
    top: [
      r`A rational number is $\frac{p}{q}$ where $p, q$ are integers and $q \neq 0$.`,
      r`Rational numbers are closed under addition, subtraction and multiplication — but NOT under division (division by $0$ is undefined).`,
      r`Addition and multiplication are commutative and associative; subtraction and division are neither.`,
      r`Additive identity is $0$; multiplicative identity is $1$.`,
      r`Additive inverse of $\frac{a}{b}$ is $-\frac{a}{b}$; multiplicative inverse (reciprocal) is $\frac{b}{a}$ for $a \neq 0$.`,
      r`$0$ has no reciprocal; only $1$ and $-1$ are their own reciprocals.`,
      r`Distributive property: $a(b + c) = ab + ac$.`,
      r`To compare, make the denominators positive and equal (use the LCM) and compare numerators.`,
      r`Between any two rational numbers there are infinitely many rational numbers; their mean lies between them.`,
      r`Standard form: denominator positive and numerator and denominator have no common factor other than $1$.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Two rational numbers $\frac{p}{q}$ and $\frac{r}{s}$ are equal if $p \times s = q \times r$.`, 'RATIONAL NUMBERS'],
        [r`Multiplying or dividing numerator and denominator by the same non-zero integer gives an equivalent rational number.`, 'RATIONAL NUMBERS'],
        [r`A rational number is positive if numerator and denominator have the same sign, negative if the signs differ.`, 'RATIONAL NUMBERS'],
        [r`Division: $\frac{p}{q} \div \frac{r}{s} = \frac{p}{q} \times \frac{s}{r}$, with $r \neq 0$.`, 'DIVISION']
      ]],
      ['🧮 Formulas & identities', [
        [r`$\frac{p}{q} + \frac{r}{q} = \frac{p + r}{q}$`, 'ADDITION'],
        [r`$\frac{p}{q} \times \frac{r}{s} = \frac{p \times r}{q \times s}$`, 'MULTIPLICATION'],
        [r`$\frac{p}{q} - \frac{r}{s} = \frac{p}{q} + \left(-\frac{r}{s}\right)$`, 'PROPERTIES OF ADDITION'],
        [r`Mean of $a, b$ $= \frac{a + b}{2}$ lies between $a$ and $b$.`, 'Rational numbers between'],
        [r`$a \times (b + c) = a \times b + a \times c$`, 'Distributive']
      ]]
    ],
    words: [
      ['Rational number', r`A number of the form $\frac{p}{q}$ with integers $p, q$ and $q \neq 0$.`],
      ['Reciprocal', r`The multiplicative inverse: $\frac{a}{b} \to \frac{b}{a}$.`],
      ['Additive inverse', r`The number which added to $a$ gives $0$, i.e. $-a$.`],
      ['Closure', 'A set is closed under an operation if the result is always in the set.'],
      ['Commutative', r`Order does not matter: $a + b = b + a$.`],
      ['Associative', r`Grouping does not matter: $(a + b) + c = a + (b + c)$.`],
      ['Standard form', 'Positive denominator and no common factor other than 1.'],
      ['Identity', r`$0$ for addition, $1$ for multiplication.`]
    ],
    map: [
      ['What is a rational number', [r`$\frac{p}{q}$, $q \neq 0$`, 'Equivalent and standard forms', 'Positive / negative rational numbers'], 'RATIONAL NUMBERS'],
      ['Operations', ['Add, subtract, multiply, divide', 'Make denominators positive first', 'LCM for unlike denominators'], 'OPERATIONS'],
      ['Properties', ['Closure, commutative, associative', 'Identity and inverse', 'Distributive'], 'PROPERTIES'],
      ['Number line and order', ['Plot by dividing unit length', 'Compare using the LCM', 'Infinitely many between two'], 'Representation']
    ]
  },
  2: {
    top: [
      r`$a^{-m} = \frac{1}{a^m}$ for non-zero $a$; $a^{-m}$ is the reciprocal of $a^m$.`,
      r`$a^0 = 1$ for every non-zero $a$.`,
      r`$a^m \times a^n = a^{m+n}$.`,
      r`$\frac{a^m}{a^n} = a^{m-n}$.`,
      r`$(a^m)^n = a^{mn}$.`,
      r`$(ab)^m = a^m b^m$ and $\left(\frac{a}{b}\right)^m = \frac{a^m}{b^m}$.`,
      r`$\left(\frac{p}{q}\right)^{-m} = \left(\frac{q}{p}\right)^m$.`,
      r`$(-1)^n = 1$ if $n$ is even, $-1$ if $n$ is odd.`,
      r`Standard form: $a \times 10^n$ with $1 \le a < 10$ and $n$ an integer.`,
      r`To compare numbers in standard form, compare the powers of $10$ first.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`In $a^n$, $a$ is the base and $n$ the exponent (power).`, 'POWERS WITH NEGATIVE'],
        [r`Same base: add exponents when multiplying, subtract when dividing.`, 'LAWS OF EXPONENTS'],
        [r`Very small numbers use negative powers of $10$, e.g. $0.00052 = 5.2 \times 10^{-4}$.`, 'STANDARD']
      ]],
      ['🧮 Formulas & identities', [
        [r`$a^m \times a^n = a^{m+n}$`, 'LAWS OF EXPONENTS'],
        [r`$\frac{a^m}{a^n} = a^{m-n}$`, 'LAWS OF EXPONENTS'],
        [r`$(a^m)^n = a^{mn}$`, 'LAWS OF EXPONENTS'],
        [r`$(ab)^m = a^m \cdot b^m$`, 'LAWS OF EXPONENTS'],
        [r`$a^{-m} = \frac{1}{a^m}$`, 'POWERS WITH NEGATIVE']
      ]]
    ],
    words: [
      ['Base', r`The number being multiplied, $a$ in $a^n$.`],
      ['Exponent', r`How many times the base is used, $n$ in $a^n$.`],
      ['Reciprocal', r`$a^{-m}$ is the reciprocal of $a^m$.`],
      ['Zero exponent', r`$a^0 = 1$ for $a \neq 0$.`],
      ['Standard form', r`A number written as $a \times 10^n$, $1 \le a < 10$.`],
      ['Multiplicative inverse', r`The number which multiplied with $a$ gives $1$.`]
    ],
    map: [
      ['Negative exponents', [r`$a^{-m} = 1/a^m$`, r`$a^0 = 1$`], 'POWERS WITH NEGATIVE'],
      ['Laws of exponents', ['Add / subtract / multiply exponents', 'Power of a product and a quotient'], 'LAWS OF EXPONENTS'],
      ['Standard form', [r`$a \times 10^n$`, 'Write very large and very small numbers'], 'STANDARD']
    ]
  },
  3: {
    top: [
      r`A perfect square is the square of a natural number.`,
      r`A square number ends in $0, 1, 4, 5, 6$ or $9$ — never in $2, 3, 7, 8$.`,
      r`A number ending in an odd number of zeros is never a perfect square.`,
      r`There are $2n$ non-square numbers between $n^2$ and $(n+1)^2$.`,
      r`Sum of first $n$ odd numbers $= n^2$.`,
      r`$(n+1)^2 - n^2 = 2n + 1$.`,
      r`Pythagorean triplet: $(2m,\ m^2 - 1,\ m^2 + 1)$ for $m > 1$.`,
      r`Square root is the inverse of squaring; use prime factorisation or the long-division method.`,
      r`Long division: pair digits from the right (units), and for decimals pair outward from the decimal point.`,
      r`$\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`A perfect square can be written as a product of pairs of equal prime factors.`, 'SQUARE NUMBERS'],
        [r`The square root of $n$ is the number which multiplied by itself gives $n$.`, 'SQUARE ROOTS'],
        [r`Squares of even numbers are even; squares of odd numbers are odd.`, 'Property 3']
      ]],
      ['🧮 Formulas & identities', [
        [r`$1 + 3 + 5 + \dots + (2n - 1) = n^2$`, 'PATTERNS'],
        [r`$(n+1)^2 - n^2 = 2n + 1$`, 'PATTERNS'],
        [r`$(a+b)^2 = a^2 + 2ab + b^2$ — shortcut for squaring numbers like $35^2$.`, 'PATTERNS']
      ]]
    ],
    words: [
      ['Perfect square', 'A number that is the square of a natural number.'],
      ['Square root', r`The number $m$ with $m^2 = n$, written $\sqrt{n}$.`],
      ['Pythagorean triplet', r`Three numbers $a, b, c$ with $a^2 + b^2 = c^2$.`],
      ['Prime factorisation', 'Writing a number as a product of primes.'],
      ['Radicand', r`The number under the root sign.`]
    ],
    map: [
      ['Square numbers', ['Perfect squares', 'Unit digits 0,1,4,5,6,9', 'Even/odd squares'], 'SQUARE NUMBERS'],
      ['Patterns', ['Sum of odd numbers', r`$2n$ numbers between squares`, 'Pythagorean triplets'], 'PATTERNS'],
      ['Square roots', ['Inverse of squaring', 'Prime factorisation', 'Long division', 'Decimals and fractions'], 'SQUARE ROOTS']
    ]
  },
  4: {
    top: [
      r`A perfect cube is the cube of a natural number: $1, 8, 27, 64, 125, \dots$`,
      r`Cube of an even number is even; cube of an odd number is odd.`,
      r`$a^3$ ends in the same digit as $a$ for $a$ ending in $0, 1, 4, 5, 6, 9$; $2 \leftrightarrow 8$ and $3 \leftrightarrow 7$ swap.`,
      r`A number is a perfect cube if every prime factor occurs in groups of three.`,
      r`To find a cube root: prime-factorise and take one factor from each triplet.`,
      r`$\sqrt[3]{a \times b} = \sqrt[3]{a} \times \sqrt[3]{b}$.`,
      r`$\sqrt[3]{\frac{a}{b}} = \frac{\sqrt[3]{a}}{\sqrt[3]{b}}$.`,
      r`$\sqrt[3]{-a} = -\sqrt[3]{a}$.`,
      r`Cube root is the inverse of cubing.`,
      r`To make a number a perfect cube, multiply or divide by the leftover prime factors to complete triplets.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`If $a \times a \times a = a^3$, then $\sqrt[3]{a^3} = a$.`, 'CUBE'],
        [r`Volume of a cube of side $a$ is $a^3$.`, 'CUBE']
      ]],
      ['🧮 Formulas & identities', [
        [r`$(ab)^3 = a^3 b^3$`, 'CUBE'],
        [r`$\sqrt[3]{-n} = -\sqrt[3]{n}$`, 'CUBE ROOT']
      ]]
    ],
    words: [
      ['Perfect cube', r`The cube of a natural number, e.g. $27 = 3^3$.`],
      ['Cube root', r`$\sqrt[3]{n}$ — the number which cubed gives $n$.`],
      ['Triplet', 'A group of three equal prime factors.']
    ],
    map: [
      ['Cubes', ['Perfect cubes', 'Even/odd cubes', 'Unit digits of cubes'], 'CUBE'],
      ['Cube roots', ['Prime factorisation', 'Group in triplets', 'Negative numbers'], 'CUBE ROOT'],
      ['Making perfect cubes', ['Multiply by missing factors', 'Divide out extra factors']]
    ]
  },
  5: {
    top: [
      r`A two-digit number $ab = 10a + b$; a three-digit number $abc = 100a + 10b + c$.`,
      r`Divisible by $2$: unit digit is $0, 2, 4, 6$ or $8$.`,
      r`Divisible by $3$: sum of digits divisible by $3$; by $9$: sum of digits divisible by $9$.`,
      r`Divisible by $4$: last two digits divisible by $4$; by $8$: last three digits divisible by $8$.`,
      r`Divisible by $5$: unit digit $0$ or $5$.`,
      r`Divisible by $6$: divisible by both $2$ and $3$.`,
      r`Divisible by $11$: difference of sum of digits at odd places and even places is $0$ or a multiple of $11$.`,
      r`Divisible by $10$: unit digit is $0$.`,
      r`Cryptarithm: letters stand for digits — check units place first and use carry.`,
      r`If a number is divisible by $a$ and $b$ (co-prime), it is divisible by $a \times b$.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Numbers in general form: $ab = 10a + b$ and reverse $ba = 10b + a$.`, 'GENERAL'],
        [r`Sum of a two-digit number and its reverse is $11(a + b)$.`, 'GENERAL'],
        [r`Difference of a two-digit number and its reverse is $9(a - b)$.`, 'GENERAL']
      ]]
    ],
    words: [
      ['Divisibility', 'A number is divisible by another if the remainder is zero.'],
      ['Co-prime', 'Two numbers with no common factor other than 1.'],
      ['Cryptarithm', 'A puzzle where letters represent digits.'],
      ['General form', r`Writing a number using place values, e.g. $10a + b$.`]
    ],
    map: [
      ['Number in general form', [r`$10a + b$`, r`$100a + 10b + c$`], 'GENERAL'],
      ['Divisibility tests', ['2, 3, 4, 5, 6, 8, 9, 10, 11'], 'TESTS'],
      ['Puzzles', ['Cryptarithms', 'Carry and units place']]
    ]
  },
  6: {
    top: [
      r`Union: $A \cup B = \{x : x \in A \text{ or } x \in B\}$.`,
      r`Intersection: $A \cap B = \{x : x \in A \text{ and } x \in B\}$.`,
      r`Difference: $A - B = \{x : x \in A \text{ and } x \notin B\}$.`,
      r`Complement: $A' = \xi - A$ (elements of the universal set not in $A$).`,
      r`Overlapping sets: $A \cap B \neq \emptyset$; disjoint sets: $A \cap B = \emptyset$.`,
      r`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$.`,
      r`For disjoint sets $n(A \cup B) = n(A) + n(B)$.`,
      r`$n(A - B) = n(A) - n(A \cap B)$.`,
      r`$n(A') = n(\xi) - n(A)$.`,
      r`Venn diagrams: draw the universal set as a rectangle and sets as circles; fill the smallest region first.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`$A \cup A' = \xi$ and $A \cap A' = \emptyset$.`, 'Complement'],
        [r`$A - B \neq B - A$ in general.`, 'Difference'],
        [r`$(A')' = A$, $\emptyset' = \xi$, $\xi' = \emptyset$.`, 'Complement']
      ]],
      ['🧮 Formulas & identities', [
        [r`$n(A \cup B) = n(A) + n(B) - n(A \cap B)$`, 'OPERATIONS'],
        [r`$n(A \cup B) = n(A - B) + n(A \cap B) + n(B - A)$`, 'OPERATIONS'],
        [r`$n(A) = n(A - B) + n(A \cap B)$`, 'OPERATIONS']
      ]]
    ],
    words: [
      ['Universal set', r`The set $\xi$ containing all elements under consideration.`],
      ['Complement', r`$A'$ — elements of $\xi$ not in $A$.`],
      ['Disjoint sets', 'Sets with no common element.'],
      ['Overlapping sets', 'Sets with at least one common element.'],
      ['Cardinal number', r`The number of elements, $n(A)$.`]
    ],
    map: [
      ['Union and intersection', [r`$A \cup B$`, r`$A \cap B$`], 'Union'],
      ['Difference and complement', [r`$A - B$`, r`$A'$`], 'Difference'],
      ['Types of sets', ['Overlapping', 'Disjoint'], 'Overlapping'],
      ['Counting', [r`$n(A \cup B)$ formula`, 'Venn diagrams'], 'OPERATIONS']
    ]
  },
  7: {
    top: [
      r`Percentage means "per hundred": $x\% = \frac{x}{100}$.`,
      r`Fraction to %: multiply by $100$; % to fraction: divide by $100$.`,
      r`$x\%$ of a number $N$ $= \frac{x}{100} \times N$.`,
      r`Profit $=$ S.P. $-$ C.P.; Loss $=$ C.P. $-$ S.P.`,
      r`Profit $\% = \frac{\text{Profit}}{\text{C.P.}} \times 100$; Loss $\% = \frac{\text{Loss}}{\text{C.P.}} \times 100$ — always on C.P.`,
      r`S.P. $= \text{C.P.} \times \frac{100 + \text{gain}\%}{100}$; S.P. $= \text{C.P.} \times \frac{100 - \text{loss}\%}{100}$.`,
      r`Discount $=$ Marked price $-$ Selling price; Discount $\% = \frac{\text{Discount}}{\text{M.P.}} \times 100$.`,
      r`Discount is always on the marked price.`,
      r`VAT/GST: price with tax $=$ price $\times \left(1 + \frac{\text{rate}}{100}\right)$.`,
      r`Percentage change $= \frac{\text{change}}{\text{original}} \times 100$.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`C.P. $= \frac{100 \times \text{S.P.}}{100 + \text{gain}\%}$`, 'PROFIT'],
        [r`C.P. $= \frac{100 \times \text{S.P.}}{100 - \text{loss}\%}$`, 'PROFIT'],
        [r`S.P. $=$ M.P. $\times \frac{100 - \text{discount}\%}{100}$`, 'DISCOUNT'],
        [r`Successive discounts: apply one after another, not by adding.`, 'DISCOUNT']
      ]]
    ],
    words: [
      ['Cost price (C.P.)', 'The price at which an article is bought.'],
      ['Selling price (S.P.)', 'The price at which it is sold.'],
      ['Marked price (M.P.)', 'The listed price before discount.'],
      ['Discount', 'Reduction on the marked price.'],
      ['Overheads', 'Extra expenses added to the cost price.'],
      ['GST', 'Goods and services tax charged on the sale price.']
    ],
    map: [
      ['Percentages', ['Fraction ↔ percent', r`$x\%$ of $N$`], 'PERCENT'],
      ['Profit and loss', ['Always on C.P.', 'S.P. = C.P. ± profit or loss'], 'PROFIT'],
      ['Discount', ['On marked price', 'Successive discounts'], 'DISCOUNT'],
      ['Tax', ['GST / VAT', 'Bill amount'], 'TAX']
    ]
  },
  8: {
    top: [
      r`Simple interest: $\text{S.I.} = \frac{P \times R \times T}{100}$.`,
      r`Amount: $A = P + \text{S.I.}$.`,
      r`Compound interest: $A = P\left(1 + \frac{R}{100}\right)^n$ and $\text{C.I.} = A - P$.`,
      r`Time must be in years; if time is in months, divide by $12$.`,
      r`Half-yearly compounding: rate $\frac{R}{2}$ and number of periods $2n$.`,
      r`Quarterly compounding: rate $\frac{R}{4}$ and number of periods $4n$.`,
      r`For one year, S.I. and C.I. are equal (annual compounding).`,
      r`C.I. is always greater than S.I. for time more than one year.`,
      r`Growth and depreciation also use the compound formula (use $-R$ for depreciation).`,
      r`Difference of C.I. and S.I. for $2$ years $= P\left(\frac{R}{100}\right)^2$.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`$P = \frac{100 \times \text{S.I.}}{R \times T}$`, 'SIMPLE'],
        [r`$R = \frac{100 \times \text{S.I.}}{P \times T}$`, 'SIMPLE'],
        [r`$T = \frac{100 \times \text{S.I.}}{P \times R}$`, 'SIMPLE'],
        [r`$A = P\left(1 + \frac{R}{100}\right)^n$`, 'COMPOUND']
      ]]
    ],
    words: [
      ['Principal (P)', 'The money borrowed or lent.'],
      ['Rate (R)', 'Interest per ₹100 per year.'],
      ['Time (T)', 'Duration in years.'],
      ['Amount (A)', 'Principal plus interest.'],
      ['Compound interest', 'Interest on principal plus interest already earned.'],
      ['Depreciation', 'Decrease in value over time.']
    ],
    map: [
      ['Simple interest', [r`$\frac{PRT}{100}$`, 'Amount = P + S.I.'], 'SIMPLE'],
      ['Compound interest', [r`$A = P(1 + R/100)^n$`, 'Yearly, half-yearly, quarterly'], 'COMPOUND'],
      ['Applications', ['Growth', 'Depreciation']]
    ]
  },
  9: {
    top: [
      r`Direct variation: if $x$ increases, $y$ increases in the same ratio; $\frac{x}{y}$ is constant ($y = kx$).`,
      r`Inverse variation: if $x$ increases, $y$ decreases; $xy$ is constant ($y = \frac{k}{x}$).`,
      r`Direct: $\frac{x_1}{y_1} = \frac{x_2}{y_2}$.`,
      r`Inverse: $x_1 y_1 = x_2 y_2$.`,
      r`More men, same work → less time (inverse).`,
      r`More articles, more cost (direct).`,
      r`More speed, less time for the same distance (inverse).`,
      r`Distance travelled is directly proportional to time at constant speed.`,
      r`Decide the type of variation first, then set the proportion.`,
      r`Time and work: men × days $=$ constant.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Two quantities vary directly if the ratio of their values stays constant.`, 'DIRECT'],
        [r`Two quantities vary inversely if the product of their values stays constant.`, 'INVERSE']
      ]]
    ],
    words: [
      ['Direct variation', r`$y = kx$; both increase or decrease together.`],
      ['Inverse variation', r`$xy = k$; one increases, the other decreases.`],
      ['Constant of variation', r`The fixed value $k$.`]
    ],
    map: [
      ['Direct variation', [r`$x/y = $ constant`, 'Cost and quantity'], 'DIRECT'],
      ['Inverse variation', [r`$xy = $ constant`, 'Men and days, speed and time'], 'INVERSE']
    ]
  },
  10: {
    top: [
      r`A variable has no fixed value; a constant does.`,
      r`Monomial: one term; binomial: two terms; trinomial: three terms.`,
      r`Like terms have the same variables with the same powers; only like terms can be added or subtracted.`,
      r`$a^m \times a^n = a^{m+n}$ when multiplying terms.`,
      r`$(a + b)^2 = a^2 + 2ab + b^2$`,
      r`$(a - b)^2 = a^2 - 2ab + b^2$`,
      r`$(a + b)(a - b) = a^2 - b^2$`,
      r`$(x + a)(x + b) = x^2 + (a + b)x + ab$`,
      r`Multiply every term of one expression by every term of the other.`,
      r`Degree of a polynomial is the highest power of the variable.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`$(a + b)^2 = a^2 + 2ab + b^2$`, 'IDENTIT'],
        [r`$(a - b)^2 = a^2 - 2ab + b^2$`, 'IDENTIT'],
        [r`$(a + b)(a - b) = a^2 - b^2$`, 'IDENTIT'],
        [r`$(x + a)(x + b) = x^2 + (a + b)x + ab$`, 'IDENTIT'],
        [r`$a^2 + b^2 = (a + b)^2 - 2ab$`, 'IDENTIT']
      ]]
    ],
    words: [
      ['Constant', 'A quantity with a fixed value.'],
      ['Variable', 'A quantity that can take different values.'],
      ['Coefficient', r`The numerical factor of a term, e.g. $5$ in $5x$.`],
      ['Like terms', 'Terms with the same variable parts.'],
      ['Identity', 'An equation true for every value of the variable.'],
      ['Polynomial', 'An expression with whole-number powers of variables.']
    ],
    map: [
      ['Terms and expressions', ['Constant, variable', 'Monomial, binomial, trinomial'], 'ALGEBRAIC'],
      ['Operations', ['Add/subtract like terms', 'Multiply expressions'], 'MULTIPLICATION'],
      ['Identities', [r`$(a \pm b)^2$`, r`$a^2 - b^2$`], 'IDENTIT']
    ]
  },
  11: {
    top: [
      r`Factorising means writing an expression as a product of its factors.`,
      r`Take the highest common factor (H.C.F.) of all terms first.`,
      r`Grouping: arrange terms in pairs that share a common factor.`,
      r`$a^2 + 2ab + b^2 = (a + b)^2$`,
      r`$a^2 - 2ab + b^2 = (a - b)^2$`,
      r`$a^2 - b^2 = (a + b)(a - b)$`,
      r`$x^2 + (a + b)x + ab = (x + a)(x + b)$`,
      r`Split the middle term: find two numbers with sum $=$ coefficient of $x$ and product $=$ constant.`,
      r`Always check by multiplying the factors back.`,
      r`Division of polynomials: factorise first and cancel common factors.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`$a^2 - b^2 = (a + b)(a - b)$`, 'DIFFERENCE'],
        [r`$a^2 + 2ab + b^2 = (a + b)^2$`, 'PERFECT'],
        [r`$x^2 + (a + b)x + ab = (x + a)(x + b)$`, 'TRINOMIAL']
      ]]
    ],
    words: [
      ['Factor', 'An expression that divides another exactly.'],
      ['H.C.F.', 'The highest common factor of the terms.'],
      ['Factorisation', 'Writing an expression as a product of factors.'],
      ['Perfect square trinomial', r`An expression of the form $(a \pm b)^2$.`]
    ],
    map: [
      ['Common factor', ['Take out H.C.F.', 'Grouping'], 'COMMON'],
      ['Identities', [r`$a^2 - b^2$`, r`$(a \pm b)^2$`], 'IDENTIT'],
      ['Trinomials', ['Split the middle term', r`$x^2 + px + q$`], 'TRINOMIAL']
    ]
  },
  12: {
    top: [
      r`A linear equation in one variable has the form $ax + b = 0$, $a \neq 0$.`,
      r`Balance rule: do the same operation on both sides.`,
      r`Transposition: a term moves to the other side with its sign changed.`,
      r`Check the solution by substituting back.`,
      r`For word problems: define the unknown, form the equation, solve, and check against the story.`,
      r`Inequalities use $<, >, \le, \ge$.`,
      r`Multiplying or dividing an inequality by a negative number reverses the sign.`,
      r`Adding or subtracting the same number keeps the inequality sign.`,
      r`Replacement set decides the solution set (natural numbers, whole numbers, integers).`,
      r`Show the solution of an inequality on the number line.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Equation: two expressions joined by $=$; inequality: joined by $<, >, \le, \ge$.`, 'LINEAR'],
        [r`Cross multiplication: $\frac{a}{b} = \frac{c}{d} \Rightarrow ad = bc$.`, 'LINEAR']
      ]]
    ],
    words: [
      ['Linear equation', 'An equation where the highest power of the variable is 1.'],
      ['Solution (root)', 'The value that satisfies the equation.'],
      ['Transposition', 'Moving a term to the other side with the sign changed.'],
      ['Inequality', 'A statement comparing two expressions with <, >, ≤ or ≥.'],
      ['Replacement set', 'The set from which values of the variable are taken.']
    ],
    map: [
      ['Linear equations', ['Balance method', 'Transposition', 'Verify'], 'LINEAR'],
      ['Word problems', ['Define x', 'Form equation', 'Solve']],
      ['Inequalities', ['Sign reverses on negative multiplier', 'Number line graph'], 'INEQUAL']
    ]
  },
  13: {
    top: [
      r`Sum of interior angles of a polygon with $n$ sides $= (n - 2) \times 180^\circ$.`,
      r`Sum of exterior angles of any convex polygon $= 360^\circ$.`,
      r`Each interior angle of a regular polygon $= \frac{(n - 2) \times 180^\circ}{n}$; each exterior angle $= \frac{360^\circ}{n}$.`,
      r`Interior angle $+$ exterior angle $= 180^\circ$.`,
      r`Number of diagonals of an $n$-sided polygon $= \frac{n(n - 3)}{2}$.`,
      r`Angle sum of a quadrilateral $= 360^\circ$.`,
      r`Parallelogram: opposite sides parallel and equal, opposite angles equal, diagonals bisect each other.`,
      r`Rectangle: parallelogram with all angles $90^\circ$; diagonals equal.`,
      r`Rhombus: all sides equal; diagonals bisect each other at $90^\circ$.`,
      r`Square: all sides equal and all angles $90^\circ$; diagonals equal and perpendicular.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`Sum of interior angles $= (n - 2) \times 180^\circ$`, 'POLYGON'],
        [r`Each exterior angle (regular) $= \frac{360^\circ}{n}$`, 'POLYGON'],
        [r`Diagonals $= \frac{n(n - 3)}{2}$`, 'POLYGON']
      ]],
      ['📘 Definitions & rules', [
        [r`Trapezium: one pair of parallel sides.`, 'QUADRILATERAL'],
        [r`Kite: two pairs of adjacent equal sides; one diagonal bisects the other at $90^\circ$.`, 'QUADRILATERAL'],
        [r`Adjacent angles of a parallelogram are supplementary.`, 'QUADRILATERAL']
      ]]
    ],
    words: [
      ['Polygon', 'A simple closed figure made of line segments.'],
      ['Regular polygon', 'A polygon with equal sides and equal angles.'],
      ['Diagonal', 'A line joining two non-adjacent vertices.'],
      ['Convex', 'A polygon with all interior angles less than 180°.'],
      ['Parallelogram', 'A quadrilateral with both pairs of opposite sides parallel.'],
      ['Rhombus', 'A parallelogram with all four sides equal.']
    ],
    map: [
      ['Polygons', ['Angle sum', 'Exterior angles', 'Diagonals'], 'POLYGON'],
      ['Special quadrilaterals', ['Trapezium', 'Kite', 'Parallelogram', 'Rhombus', 'Rectangle', 'Square'], 'QUADRILATERAL'],
      ['Properties', ['Diagonals', 'Angles', 'Sides']]
    ]
  },
  14: {
    top: [
      r`A quadrilateral has $4$ sides, $4$ angles and $2$ diagonals; it needs $5$ independent measurements to construct.`,
      r`Four sides and one diagonal.`,
      r`Three sides and two diagonals.`,
      r`Three sides and two included angles.`,
      r`Two adjacent sides and three angles.`,
      r`Parallelogram: two adjacent sides and one diagonal (or the angle between them).`,
      r`Rhombus: one side and one diagonal, or both diagonals.`,
      r`Rectangle: two adjacent sides, or one side and a diagonal.`,
      r`Square: one side, or one diagonal.`,
      r`Always draw a rough sketch first, mark given measures, then use ruler and compass accurately.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Construction of a special quadrilateral needs fewer measurements because of its properties.`, 'CONSTRUCTION']
      ]]
    ],
    words: [
      ['Diagonal', 'A line joining opposite vertices of a quadrilateral.'],
      ['Included angle', 'The angle between two given sides.'],
      ['Adjacent sides', 'Sides that meet at a vertex.']
    ],
    map: [
      ['General quadrilateral', ['4 sides + 1 diagonal', '3 sides + 2 diagonals', '3 sides + 2 included angles', '2 adjacent sides + 3 angles']],
      ['Special quadrilaterals', ['Parallelogram', 'Rhombus', 'Rectangle', 'Square']]
    ]
  },
  15: {
    top: [
      r`Circle: all points at a fixed distance (radius) from a fixed point (centre).`,
      r`Diameter $= 2 \times$ radius; it is the longest chord.`,
      r`A chord joins two points on a circle; a tangent touches it at exactly one point.`,
      r`A secant cuts the circle at two points.`,
      r`Perpendicular from the centre to a chord bisects the chord.`,
      r`Equal chords are equidistant from the centre.`,
      r`Angle in a semicircle is $90^\circ$.`,
      r`Angles in the same segment are equal.`,
      r`Angle at the centre is twice the angle at the circumference on the same arc.`,
      r`Opposite angles of a cyclic quadrilateral are supplementary.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Arc: part of the circumference; sector: region between two radii and an arc; segment: region between a chord and an arc.`, 'CIRCLE'],
        [r`Concentric circles share the same centre.`, 'CIRCLE']
      ]]
    ],
    words: [
      ['Radius', 'Distance from the centre to the circle.'],
      ['Chord', 'A line segment joining two points of a circle.'],
      ['Tangent', 'A line touching the circle at one point.'],
      ['Secant', 'A line cutting the circle at two points.'],
      ['Arc', 'A part of the circumference.'],
      ['Cyclic quadrilateral', 'A quadrilateral with all vertices on a circle.']
    ],
    map: [
      ['Parts of a circle', ['Radius, diameter', 'Chord, arc', 'Sector, segment'], 'CIRCLE'],
      ['Chord properties', ['Perpendicular from centre bisects chord', 'Equal chords equidistant']],
      ['Angle properties', ['Semicircle $90^\\circ$', 'Same segment', 'Centre = 2 × circumference']]
    ]
  },
  16: {
    top: [
      r`A point is written as $(x, y)$: $x$ is the abscissa, $y$ the ordinate.`,
      r`The axes divide the plane into four quadrants.`,
      r`Quadrant I: $(+, +)$; II: $(-, +)$; III: $(-, -)$; IV: $(+, -)$.`,
      r`Origin is $(0, 0)$.`,
      r`Points on the $x$-axis have $y = 0$; points on the $y$-axis have $x = 0$.`,
      r`Plot $x$ along the horizontal axis first, then $y$ vertically.`,
      r`A graph of a linear equation is a straight line.`,
      r`Choose three values of $x$ to find three points; the third checks the work.`,
      r`Choose a suitable scale for both axes.`,
      r`Read values from a graph by following lines to the axes.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Abscissa is the $x$-coordinate; ordinate is the $y$-coordinate.`, 'COORDINATE'],
        [r`Distance of $(x, y)$ from the $x$-axis is $|y|$ and from the $y$-axis is $|x|$.`, 'COORDINATE']
      ]]
    ],
    words: [
      ['Origin', r`The point $(0, 0)$ where the axes meet.`],
      ['Abscissa', r`The $x$-coordinate.`],
      ['Ordinate', r`The $y$-coordinate.`],
      ['Quadrant', 'One of the four parts of the plane.'],
      ['Ordered pair', r`A pair $(x, y)$ where order matters.`]
    ],
    map: [
      ['Coordinate plane', ['Axes and origin', 'Quadrants', 'Ordered pairs'], 'COORDINATE'],
      ['Plotting', ['Choose scale', 'Plot points', 'Join points']],
      ['Graphs', ['Linear graph is a line', 'Reading values']]
    ]
  },
  17: {
    top: [
      r`A figure has line (reflection) symmetry if it can be folded so that both halves coincide.`,
      r`The fold line is the line / axis of symmetry.`,
      r`A square has $4$ lines of symmetry; a rectangle $2$; an equilateral triangle $3$; a circle infinitely many.`,
      r`A regular $n$-gon has $n$ lines of symmetry.`,
      r`The image in a mirror is the same distance behind the mirror as the object is in front.`,
      r`A figure has rotational symmetry if it looks the same after a turn less than $360^\circ$ about a point.`,
      r`Order of rotational symmetry is the number of times it fits in one full turn.`,
      r`Angle of rotation $= \frac{360^\circ}{\text{order}}$.`,
      r`Reflection reverses orientation; rotation preserves it.`,
      r`Point symmetry: figure looks the same after $180^\circ$ turn.`
    ],
    groups: [
      ['📘 Definitions & rules', [
        [r`Order of rotational symmetry: how many times the figure matches itself in a full turn.`, 'ROTATIONAL'],
        [r`Reflection in a line: the line is the perpendicular bisector of each point and its image.`, 'REFLECTION']
      ]]
    ],
    words: [
      ['Line of symmetry', 'A line which divides a figure into two mirror halves.'],
      ['Reflection', 'The mirror image of a figure.'],
      ['Rotational symmetry', 'A figure matches itself after a turn about a point.'],
      ['Order of rotation', 'The number of matches in a full turn.'],
      ['Centre of rotation', 'The fixed point about which a figure turns.']
    ],
    map: [
      ['Line symmetry', ['Fold test', 'Number of lines for shapes'], 'SYMMETRY'],
      ['Reflection', ['Mirror image', 'Equal distance from the mirror'], 'REFLECTION'],
      ['Rotation', ['Centre, angle, order', 'Point symmetry'], 'ROTATION']
    ]
  },
  18: {
    top: [
      r`Solid shapes have length, breadth and height; flat shapes have only two dimensions.`,
      r`Polyhedron: a solid made of polygon faces; vertices (corners), edges and faces.`,
      r`Euler's formula: $F + V - E = 2$.`,
      r`Prism: two identical parallel bases and rectangular side faces; pyramid: one base and triangular faces meeting at the apex.`,
      r`A cube has $6$ faces, $12$ edges and $8$ vertices.`,
      r`A cuboid also has $6$ faces, $12$ edges and $8$ vertices.`,
      r`A triangular prism has $5$ faces, $9$ edges and $6$ vertices.`,
      r`A square pyramid has $5$ faces, $8$ edges and $5$ vertices.`,
      r`A net is a flat pattern that folds into a solid.`,
      r`Solids are viewed from the front, side and top (different views).`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`Euler: $F + V - E = 2$`, 'FACES, EDGES']
      ]],
      ['📘 Definitions & rules', [
        [r`Regular polyhedron: all faces are identical regular polygons.`, 'POLYHEDRON'],
        [r`Cylinder, cone and sphere are not polyhedra (curved surfaces).`, 'POLYHEDRON']
      ]]
    ],
    words: [
      ['Face', 'A flat surface of a solid.'],
      ['Edge', 'A line where two faces meet.'],
      ['Vertex', 'A point where edges meet.'],
      ['Polyhedron', 'A solid bounded by polygons.'],
      ['Net', 'A flat pattern that folds into a solid.'],
      ['Apex', 'The top point of a pyramid or cone.']
    ],
    map: [
      ['Solid shapes', ['Faces, edges, vertices', 'Prism, pyramid'], 'POLYHEDRON'],
      ['Euler\'s formula', [r`$F + V - E = 2$`], 'FACES, EDGES'],
      ['Nets and views', ['Nets of solids', 'Front, side, top view']]
    ]
  },
  19: {
    top: [
      r`Area of a rectangle $= l \times b$; perimeter $= 2(l + b)$.`,
      r`Area of a square $= a^2$; perimeter $= 4a$.`,
      r`Area of a triangle $= \frac{1}{2} \times \text{base} \times \text{height}$.`,
      r`Area of a parallelogram $= \text{base} \times \text{height}$.`,
      r`Area of a rhombus $= \frac{1}{2} d_1 d_2$.`,
      r`Area of a trapezium $= \frac{1}{2}(a + b) \times h$.`,
      r`Circle: circumference $= 2\pi r$; area $= \pi r^2$.`,
      r`Cuboid: volume $= l \times b \times h$; total surface area $= 2(lb + bh + lh)$.`,
      r`Cube: volume $= a^3$; total surface area $= 6a^2$.`,
      r`Cylinder: volume $= \pi r^2 h$; curved surface area $= 2\pi r h$.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`Lateral surface area of a cuboid $= 2h(l + b)$`, 'VOLUME'],
        [r`Lateral surface area of a cube $= 4a^2$`, 'cube'],
        [r`Total surface area of a cylinder $= 2\pi r(r + h)$`, 'CYLINDER'],
        [r`$1\ \text{m}^3 = 1000\ \text{litres}$`, 'VOLUME'],
        [r`Area of a quadrilateral $= \frac{1}{2} \times \text{diagonal} \times (h_1 + h_2)$`, 'QUADRILATERAL']
      ]]
    ],
    words: [
      ['Perimeter', 'The total length of the boundary.'],
      ['Area', 'The surface enclosed by a figure.'],
      ['Volume', 'The space occupied by a solid.'],
      ['Lateral surface area', 'Area of the side faces only.'],
      ['Total surface area', 'Area of all faces.'],
      ['Capacity', 'The volume a container can hold.']
    ],
    map: [
      ['Plane figures', ['Triangle', 'Quadrilaterals', 'Circle'], 'AREA'],
      ['Cuboid and cube', ['Volume', 'Lateral and total surface area'], 'VOLUME'],
      ['Cylinder', ['Curved surface area', 'Total surface area', 'Volume'], 'CYLINDER']
    ]
  },
  20: {
    top: [
      r`Data are collected facts and figures; raw data should be organised.`,
      r`Frequency is the number of times an observation occurs.`,
      r`Class interval: range of values in a group; class size $=$ upper limit $-$ lower limit.`,
      r`Tally marks make counting easier; each fifth tally crosses the four.`,
      r`Range $=$ highest value $-$ lowest value.`,
      r`Mean $= \frac{\text{sum of observations}}{\text{number of observations}}$.`,
      r`Median: middle value after arranging in order; for even count, average of the two middle values.`,
      r`Mode: the most frequent observation.`,
      r`A bar graph compares categories; a histogram shows continuous class intervals (no gaps).`,
      r`A pie chart shows parts of a whole: central angle $= \frac{\text{value}}{\text{total}} \times 360^\circ$.`
    ],
    groups: [
      ['🧮 Formulas & identities', [
        [r`Mean $= \frac{\sum x}{n}$`, 'MEAN'],
        [r`Mean from a frequency table $= \frac{\sum fx}{\sum f}$`, 'MEAN'],
        [r`Probability of an event $= \frac{\text{favourable outcomes}}{\text{total outcomes}}$`, 'PROBAB']
      ]]
    ],
    words: [
      ['Frequency', 'How many times a value occurs.'],
      ['Class interval', 'A group of values such as 10–20.'],
      ['Mean', 'The average of the observations.'],
      ['Median', 'The middle observation.'],
      ['Mode', 'The most frequent observation.'],
      ['Histogram', 'A graph of grouped continuous data with touching bars.'],
      ['Pie chart', 'A circle divided into sectors showing parts of a whole.']
    ],
    map: [
      ['Collecting data', ['Raw data', 'Tally marks', 'Frequency table'], 'DATA'],
      ['Averages', ['Mean', 'Median', 'Mode', 'Range'], 'MEAN'],
      ['Graphs', ['Bar graph', 'Histogram', 'Pie chart'], 'GRAPH'],
      ['Chance', ['Probability from equally likely outcomes'], 'PROBAB']
    ]
  }
};
