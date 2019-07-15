function isBalanced(input) {
    var counter = 0;
    while (!input.hasMoreChar) {
        var c = input.readNextChar();
        if (c == OPEN_PARENTHESIS) {
            counter++;
        } else if (c == CLOSE_PARENTHESIS) {
            if (counter == 0) {
                return false;    // Close parenthesis appear without a corresponding open
            } else {
                counter--;
            }
        }
    }

    return counter == 0;
}
isBalanced("[][[]{}{()}]")