/**
 * Perimeter sequence
 * The first three stages of a sequence are shown.
 *
 * blocks
 *
 * The blocksize is a by a and a ≥ 1.
 *
 * What is the perimeter of the nth shape in the sequence (n ≥ 1) ?
 */

function perimeterSequence(a, n) {
    let perimeter = 0;

    for (let i = 1; i <= n; i++) {

        let blockSide = a * i;

        perimeter += 2 * blockSide;
    }
    return perimeter;
}