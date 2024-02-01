# Unit 2 Block 18 Workshop: Writing Test Specifications

## Unit Test

1. A function called "multiplication" that returns the product of the two input numbers.
- Expectations
  - Take two input numbers, multiply them, and return the product
    - Expect `multiplication(5,2)` to be `10`
  - If there are not two input numbers, return an error.
    - Expect `multiplication('a',2)` to be equal to `an error`
  - Follow math rules for all integers
    - Expect `multiplication(-2,-2)` to be equal to `4`.

2. Expect function concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to result in [-1, 1, 3, 9, 15];

- Takes two arrays and puts them into a single array of odd numbers
    - Expect `concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])` to be an `Odd number`
- Orders those odd numbers in ascending order
    - Expect concatOdds`([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])` to be sorted in `acceding order`
- If they enter a string or a decimal point, then output an error message.
    - Expect `concatOdds(['a', 'b', 'c'], [0.3, 1.5])` to be an `error`
- If there are multiples of the same odd number in the arrays, output that number once
    - Expect `concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])` to be `[-1, 1, 3, 9, 15]`

## Functional Test

As a user I want to be presented with both options, check out as a guest, or sign in, when I click on 'complete my purchase'.

When user puts item in cart, items appear in the cart and user can view items in the cart.

When user clicks proceed to checkout, have new prompt with 'need anything else?' page suggesting more items to buy.

When user ignores 'need anything else?' page  proceed to continue to checkout page.

When user is on the checkout page, present user with two options: check out as a guest, or sign in.

When user user clicks 'check out as a guest', the user is brought to a new page to input their shipping, and payment information.

When user clicks 'sign in', user is brought to a new page to enter email and password information. User enters information and is brought to a new page where their shipping and payment information is saved from previous purchases. User has option to edit shipping and pa

When user has completed the shipping and payment workflow, user can final review items page, and the user places their order.


