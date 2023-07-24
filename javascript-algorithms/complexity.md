# Big O Notation

The Big O Notation is used to determining the time and space complexity of algorithms. There are infinitely many example notations of complexities however in this text I'll show 5 of them that used very widely : 

    1. O(1) : Constant Time. The running time of algorithm is constant and doesn't depend of input amount.
    2. O(log(n)) : Logarithmic Time. The running time of algorithm is grows logarithmically with input amount. 
    3. O(n) : Linear Time. The running time of algorithm is grows as linear as input amount. Inputs are checked one by one.
    2. O(n log(n)) : Merge Sort algorithm can be given as an example. To sort every item you mergin the items according to input size.
    4. O(n^2) : Quadratic Time. The running time of algorithm is grows quadratically with the input amount. To give an example, we can create a for loop that checks all the inputs to every single input within the another for loop.
    5. O(n^3) : Cubic Time. To give an example, nested 3 for loops to control every single inputs upon the same input group. 