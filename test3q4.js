/* Q4) Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
Example: 
Input: exp = “[()]{}{[()()]()}” 
Output: Balanced
Input: exp = “[(])” 
Output: Not Balanced 
 */



let exp = "[()]{}{[()()]()}";

function areBracketsBalanced(exp) {


    let stack = [];


    for (let i = 0; i < exp.length; i++) {
        let x = exp[i];

        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }

        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }
    return (stack.length == 0);
}


if (areBracketsBalanced(exp))
    console.log("Balanced ");
else
    console.log("Not Balanced ");