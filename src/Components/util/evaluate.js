const evaulate = (n1,n2,operand) => {
    switch(operand){
        case "+":
            return parseInt(n1)+parseInt(n2);
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
        default:
            return 0;
    }
}

export default evaulate;