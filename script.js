const questionBank = {
    // --- PAPER 1: COMPUTATIONAL THINKING ---
    "3.1.1 Representing Algorithms": [
        { q: "What is the primary purpose of 'Pseudo-code' in development?", a: "To plan programme logic without following strict language syntax", options: ["To plan programme logic without following strict language syntax", "To execute high-level instructions directly on the hardware", "To create a visual interface for end-user interaction tasks", "To compress source code files for efficient network storage"], hint: "Halfway between English and code.", why: "Pseudo-code focuses on logic rather than specific language rules." },
        { q: "In a flowchart, what does a Diamond shape represent?", a: "A decision point that branches based on a logical condition", options: ["A decision point that branches based on a logical condition", "A specific processing step where data values are modified", "An input or output operation for external data handling", "The terminal point marking the start or end of the process"], hint: "Usually an IF statement.", why: "Diamonds represent branches where the path splits based on a condition." },
        { q: "Which shape is used for Input and Output in a flowchart?", a: "A parallelogram representing data entering or leaving a system", options: ["A parallelogram representing data entering or leaving a system", "A rectangle used to define a mathematical calculation step", "An oval used to signify the starting point of the algorithm", "A diamond used to evaluate a boolean expression or choice"], hint: "Slanted sides.", why: "Parallelograms indicate data entering or leaving the system." },
        { q: "What is an algorithm?", a: "A set of step-by-step instructions to solve a task or problem", options: ["A set of step-by-step instructions to solve a task or problem", "A complex hardware component inside the central processor", "A high-level programming language used for web scripting", "A malicious software programme designed to compromise security"], hint: "Like a recipe.", why: "Algorithms are defined steps to solve a problem." },
        { q: "In flowcharts, what does a Rectangle represent?", a: "A process such as a calculation or variable assignment", options: ["A process such as a calculation or variable assignment", "A decision point requiring a Yes or No logical evaluation", "The entry or exit point for the entire set of instructions", "A manual data entry step performed by an external operator"], hint: "Calculations or assignments.", why: "Rectangles are used for general processing steps." },
        { q: "What is the term for removing unnecessary detail?", a: "Abstraction to focus only on the essential problem elements", options: ["Abstraction to focus only on the essential problem elements", "Decomposition to break a problem into smaller sub-tasks", "Iteration to repeat a block of code until a condition is met", "Selection to choose a path based on a specific input value"], hint: "Simplifying a map.", why: "Abstraction filters out details that do not help solve the core problem." },
        { q: "What is 'Decomposition'?", a: "Breaking a complex problem into smaller, manageable sub-problems", options: ["Breaking a complex problem into smaller, manageable sub-problems", "The process of removing errors from a completed programme", "Converting high-level source code into binary machine code", "Encrypting sensitive data to prevent unauthorised user access"], hint: "Sub-problems.", why: "Decomposition breaks complex tasks into manageable sub-tasks." },
        { q: "Which flowchart symbol starts and ends the diagram?", a: "A terminal oval marking the boundary of the algorithm", options: ["A terminal oval marking the boundary of the algorithm", "A process rectangle marking a specific calculation step", "A directional arrow indicating the next logical instruction", "A decision diamond evaluating the status of a variable"], hint: "The 'Stop' button.", why: "Ovals mark the entry and exit points." },
        { q: "What does an arrow represent in a flowchart?", a: "The flow of control indicating the sequence of execution", options: ["The flow of control indicating the sequence of execution", "A permanent data storage location on a secondary device", "A specific decision point where the logic must branch out", "The handling of a runtime error within the programme logic"], hint: "Direction.", why: "Arrows show the order of execution." },
        { q: "A trace table is used to...?", a: "Manually track variable values to identify logic errors", options: ["Manually track variable values to identify logic errors", "Identify syntax errors before the code is compiled", "Convert high-level code into low-level assembly language", "Establish a secure connection to a remote server database"], hint: "Dry running.", why: "Trace tables track variable values to ensure logic works." },
        { q: "What is 'Syntax'?", a: "The specific set of rules governing the grammar of a language", options: ["The specific set of rules governing the grammar of a language", "A type of loop that repeats for a fixed number of times", "A method for sorting data into a specific numerical order", "The physical speed at which a CPU processes instructions"], hint: "Grammar.", why: "Syntax refers to the grammar and spelling rules of a language." },
        { q: "Which of these is NOT a core programming construct?", a: "Data Encryption", options: ["Data Encryption", "Sequence", "Selection", "Iteration"], hint: "S.S.I.", why: "The three core constructs are Sequence, Selection, and Iteration." },
        { q: "What is a 'Variable'?", a: "A named memory location that stores data that can change", options: ["A named memory location that stores data that can change", "A fixed numerical value that remains constant during runtime", "A physical output device such as a monitor or printer", "An input peripheral used to enter data into the computer"], hint: "Stores data that can change.", why: "Variables hold data in RAM that can be modified." },
        { q: "What is 'Sequence' in algorithms?", a: "Executing instructions in the exact order they are written", options: ["Executing instructions in the exact order they are written", "Making a choice between two or more different paths", "Repeating a specific block of code using a loop structure", "Assigning a unique name to a specific memory location"], hint: "One after another.", why: "Sequence is the execution of statements in the order written." },
        { q: "Which tool is best for non-programmers to understand logic?", a: "A visual flowchart illustrating the algorithmic path", options: ["A visual flowchart illustrating the algorithmic path", "A dry-run trace table showing variable state changes", "A block of assembly code showing register movements", "A binary text file containing raw machine instructions"], hint: "Visual representation.", why: "Flowcharts provide a visual map easy for anyone to follow." }
    ],
    "3.1.2 Efficiency of Algorithms": [
        { q: "What are the two main measures of algorithm efficiency?", a: "Execution time and memory space requirements", options: ["Execution time and memory space requirements", "Retail price and aesthetic colour of the interface", "Physical weight and vertical height of the hardware", "Number of user inputs and density of visual outputs"], hint: "Speed and RAM.", why: "Efficiency is measured by speed (time) and memory usage (space)." },
        { q: "Which algorithm is most efficient for searching large, sorted lists?", a: "Binary Search", options: ["Binary Search", "Linear Search", "Bubble Sort", "Trace Table Evaluation"], hint: "It ignores half the list.", why: "Binary search halves the search area every step." },
        { q: "What is 'Space efficiency'?", a: "The amount of working memory (RAM) required by an algorithm", options: ["The amount of working memory (RAM) required by an algorithm", "The total storage capacity of the primary hard drive", "The physical dimensions of the central processing unit", "The total number of lines found in the source code"], hint: "RAM usage.", why: "Space efficiency measures working memory needed by an algorithm." },
        { q: "Why should developers prioritise efficient algorithms?", a: "To minimise execution time and conserve system resources", options: ["To minimise execution time and conserve system resources", "To make the source code significantly harder to read", "To increase the overall cost of electricity for the user", "To require the user to purchase more expensive hardware"], hint: "Performance.", why: "Efficiency ensures programmes run quickly and don't crash devices." },
        { q: "Finding a target on the very first try is called...?", a: "Best-case complexity scenario", options: ["Best-case complexity scenario", "Average-case complexity scenario", "Worst-case complexity scenario", "Standard efficiency scenario"], hint: "The luckiest outcome.", why: "Best-case refers to the minimum steps an algorithm needs." },
        { q: "If data size 'n' doubles in a linear process, what happens?", a: "The time taken to process the data also doubles", options: ["The time taken to process the data also doubles", "The time taken to process the data remains constant", "The time taken to process the data is reduced by half", "The time taken to process the data is exactly tripled"], hint: "Checking every item.", why: "In a linear process, doubling work doubles time." },
        { q: "Which sort is inefficient due to its high number of swaps?", a: "Bubble Sort", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Binary Sort"], hint: "Many swaps.", why: "Bubble sort is inefficient due to the high number of passes." },
        { q: "When measuring efficiency, 'n' usually refers to...?", a: "The total number of items within the input dataset", options: ["The total number of items within the input dataset", "The number of loops executed within the algorithm", "The number of global variables used in the programme", "The number of syntax errors identified by the compiler"], hint: "Input size.", why: "Efficiency is measured against dataset size, represented as 'n'." },
        { q: "Which uses less memory: Merge Sort or Bubble Sort?", a: "Bubble Sort (as it sorts data in-place)", options: ["Bubble Sort (as it sorts data in-place)", "Merge Sort (as it splits data into sub-lists)", "Both algorithms use identical amounts of RAM", "Neither algorithm requires any system memory"], hint: "Splitting vs Swapping.", why: "Bubble sort is 'in-place', while Merge sort creates sub-lists." },
        { q: "Why is Merge Sort generally preferred for large lists?", a: "Its divide-and-conquer approach requires fewer total steps", options: ["Its divide-and-conquer approach requires fewer total steps", "It is much simpler for a novice to programme manually", "It requires no system memory to perform the operation", "It only functions correctly on lists that are unsorted"], hint: "Speed.", why: "Merge sort's divide-and-conquer is faster than neighbor swapping." },
        { q: "What is 'Worst-case' efficiency?", a: "The maximum number of steps an algorithm could take", options: ["The maximum number of steps an algorithm could take", "The minimum number of steps theoretically possible", "The average number of steps taken over many runs", "The total time required to identify and fix logic bugs"], hint: "Target at the end.", why: "Worst-case assumes the item is at the end or missing." },
        { q: "A 'Heuristic' algorithm is used when...?", a: "Finding an exact solution takes an impractical amount of time", options: ["Finding an exact solution takes an impractical amount of time", "The computer has been disconnected from the power supply", "The list has already been sorted into the correct order", "The user is an expert in high-level programming"], hint: "A shortcut.", why: "Heuristics provide approximate solutions when the perfect one is too slow." },
        { q: "Which grows most steeply as data volume increases?", a: "Quadratic growth typically found in nested loop structures", options: ["Quadratic growth typically found in nested loop structures", "Linear growth typically found in a single loop structure", "Constant growth where time remains the same regardless", "Logarithmic growth found in binary search processes"], hint: "Curve vs Straight line.", why: "Quadratic growth increases much more rapidly than linear growth." },
        { q: "Which algorithm generally scales poorly with data?", a: "An algorithm utilising multiple nested loop layers", options: ["An algorithm utilising multiple nested loop layers", "An algorithm utilising a single pass-through loop", "An algorithm that contains no loops or repetitions", "An algorithm consisting only of a single IF statement"], hint: "Loops inside loops.", why: "Nested loops cause operations to grow faster than single loops." },
        { q: "Efficiency is critical for which type of system?", a: "Real-time systems requiring immediate data processing", options: ["Real-time systems requiring immediate data processing", "Offline backup systems used for long-term storage", "Simple calculators used for basic arithmetic tasks", "Word processors used for creating text documents"], hint: "Instant response.", why: "Real-time systems like self-driving cars need the most efficient logic." }
    ],
    "3.1.3 Searching Algorithms": [
        { q: "Which search checks every item in a sequence from the start?", a: "Linear Search", options: ["Linear Search", "Binary Search", "Bubble Search", "Merge Search"], hint: "One by one.", why: "Linear search checks every element sequentially." },
        { q: "What is the primary requirement for a Binary Search to work?", a: "The dataset must be pre-sorted in a specific order", options: ["The dataset must be pre-sorted in a specific order", "The dataset must consist entirely of integer values", "The dataset must be small enough to fit in the cache", "The dataset must be encoded in a binary format"], hint: "Order.", why: "Binary search relies on a sorted list to discard halves." },
        { q: "How does a Binary Search reduce the search area?", a: "By eliminating half of the remaining list at each step", options: ["By eliminating half of the remaining list at each step", "By checking every second item in the remaining list", "By comparing only the first and last items of the list", "By utilising multiple processors to scan the data"], hint: "Dividing.", why: "It checks the middle and eliminates the impossible half." },
        { q: "In a list of 10 items, what is the max checks for a Linear Search?", a: "10 (if the item is at the end or missing)", options: ["10 (if the item is at the end or missing)", "1 (if the item is at the very beginning)", "5 (the average number of checks required)", "100 (if the list needs to be checked ten times)"], hint: "Worst-case.", why: "You must check every item once if it is at the end." },
        { q: "Which search is better for an unordered list?", a: "Linear Search", options: ["Linear Search", "Binary Search", "Both", "Neither"], hint: "No prep.", why: "Linear search doesn't require sorted data." },
        { q: "In a sorted list of 8 items, what is the max checks for Binary Search?", a: "3", options: ["3", "8", "4", "1"], hint: "Halving 8.", why: "8-4-2-1 equals 3 steps." },
        { q: "What happens if a search target is not present in the list?", a: "The algorithm returns a flag value like -1 or False", options: ["The algorithm returns a flag value like -1 or False", "The computer hardware will experience a fatal crash", "The algorithm will delete the entire contents of the list", "The programme will continue searching in an infinite loop"], hint: "Signal failure.", why: "Algorithms return flag values to show the item wasn't found." },
        { q: "Which search is also known as a 'Sequential Search'?", a: "Linear Search", options: ["Linear Search", "Binary Search", "Bubble Search", "Quick Search"], hint: "In sequence.", why: "It looks at elements one after the other." },
        { q: "Which search utilises 'low', 'mid', and 'high' pointers?", a: "Binary Search", options: ["Binary Search", "Linear Search", "Bubble Sort", "Merge Sort"], hint: "Halving.", why: "Binary search tracks the current range with these markers." },
        { q: "Why is Binary Search considered more efficient than Linear?", a: "It performs significantly fewer comparisons on large datasets", options: ["It performs significantly fewer comparisons on large datasets", "It is much easier for a beginner to write in Python", "It does not require the use of any local variables", "It is compatible with both sorted and unsorted lists"], hint: "Efficiency.", why: "It halves remaining items with every comparison." },
        { q: "Linear search is most efficient when...?", a: "The target item is located at the very start of the list", options: ["The target item is located at the very start of the list", "The target item is located at the very end of the list", "The list has been sorted into a specific numerical order", "The list contains a very large number of data items"], hint: "Instant find.", why: "If the first item is the target, it stops immediately." },
        { q: "What is the initial step in performing a Binary Search?", a: "Calculate the middle index of the current search range", options: ["Calculate the middle index of the current search range", "Compare the target value to the first item in the list", "Sort the entire list into an ascending numerical order", "Request the search target value from the user input"], hint: "Start in the centre.", why: "The algorithm starts by checking the middle element." },
        { q: "What constitutes the 'Best Case' for a Binary Search?", a: "The middle item is the target on the first comparison", options: ["The middle item is the target on the first comparison", "The target item is located at the start of the list", "The target item is located at the end of the list", "The search is performed on a completely empty list"], hint: "First split.", why: "If the first mid-point is the target, it finishes in one step." },
        { q: "For a million sorted items, which search is most practical?", a: "Binary Search", options: ["Binary Search", "Linear Search", "Bubble Search", "Insertion Search"], hint: "Speed.", why: "Binary takes ~20 steps; Linear could take a million." },
        { q: "A physical dictionary search is most similar to which algorithm?", a: "Binary Search", options: ["Binary Search", "Linear Search", "Bubble Search", "Merge Search"], hint: "Open to the middle.", why: "Books are sorted, allowing you to skip large sections." }
    ],
    "3.1.4 Sorting Algorithms": [
        { q: "Which sort compares adjacent items and swaps them if needed?", a: "Bubble Sort", options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Quick Sort"], hint: "Bubbles rising.", why: "Bubble sort steps through the list swapping adjacent items." },
        { q: "Which algorithm follows a 'divide and conquer' methodology?", a: "Merge Sort", options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Linear Sort"], hint: "Splitting and joining.", why: "Merge sort recursively divides the list and merges it back." },
        { q: "What defines an 'In-place' sorting algorithm?", a: "It requires minimal additional memory to rearrange data", options: ["It requires minimal additional memory to rearrange data", "It only functions correctly on a single local computer", "It is the fastest possible method for sorting any list", "It deletes the original data once the sort is complete"], hint: "RAM efficiency.", why: "In-place sorts modify the original list without needing copies." },
        { q: "How is the completion of a Bubble Sort confirmed?", a: "A complete pass occurs where no swaps are performed", options: ["A complete pass occurs where no swaps are performed", "The algorithm has completed a single pass of the list", "Every item in the list is confirmed to be a positive value", "The computer sends an audio alert to the user interface"], hint: "No changes.", why: "Zero swaps in a pass means every item is in position." },
        { q: "Which sorting method is most efficient for very large datasets?", a: "Merge Sort", options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "All are equally efficient"], hint: "Splitting work.", why: "Merge sort's halving method is faster for large data." },
        { q: "Which sort builds a sorted sub-list one item at a time?", a: "Insertion Sort", options: ["Insertion Sort", "Bubble Sort", "Merge Sort", "Selection Sort"], hint: "Like sorting cards.", why: "It takes items and places them in the sorted section." },
        { q: "Which algorithm typically has the highest memory overhead?", a: "Merge Sort", options: ["Merge Sort", "Bubble Sort", "Insertion Sort", "Quick Sort"], hint: "Sub-lists.", why: "Merge sort creates many small lists, requiring more RAM." },
        { q: "Which sort is generally considered the easiest for a novice to code?", a: "Bubble Sort", options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Radix Sort"], hint: "Simple swaps.", why: "Bubble sort uses simple nested loops." },
        { q: "In Bubble Sort, where is the largest item after the first pass?", a: "It has moved to the final position in the list", options: ["It has moved to the final position in the list", "It has moved to the starting position in the list", "It has been temporarily removed from the memory", "It remains in its original position in the list"], hint: "Bubbles up.", why: "The largest item is swapped until it hits the end." },
        { q: "Which sort is highly efficient for data that is almost sorted?", a: "Insertion Sort", options: ["Insertion Sort", "Merge Sort", "Bubble Sort", "Quick Sort"], hint: "Fewer moves.", why: "Insertion sort does very little if the data is mostly in order." },
        { q: "Why is the sorting of data essential in computer science?", a: "It enables the use of efficient Binary Search algorithms", options: ["It enables the use of efficient Binary Search algorithms", "It significantly reduces the total size of the data file", "It prevents computer viruses from infecting the system", "It reduces the amount of power consumed by the CPU"], hint: "Future searching.", why: "Sorting is required for highly efficient Binary Search." },
        { q: "What occurs during the final phase of a Merge Sort?", a: "The sorted sub-lists are combined into one single list", options: ["The sorted sub-lists are combined into one single list", "The first and last items of the list are swapped", "The original list is split into two equal halves", "The sub-lists are deleted to free up system memory"], hint: "The name.", why: "The last step combines sorted halves." },
        { q: "How many passes are needed to bubble sort a list of size 'n'?", a: "A maximum of n-1 passes are required", options: ["A maximum of n-1 passes are required", "Exactly n passes are required for every list", "Only one pass is ever required for any list", "Ten passes are required regardless of list size"], hint: "n-1.", why: "You need 4 passes for 5 items to guarantee position." },
        { q: "Which is the slowest for 10,000 completely random items?", a: "Bubble Sort", options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "All methods are equal"], hint: "Inefficiency.", why: "Bubble sort's high swap count makes it very slow." },
        { q: "Which sort mimics the way people naturally sort playing cards?", a: "Insertion Sort", options: ["Insertion Sort", "Merge Sort", "Bubble Sort", "Quick Sort"], hint: "Placing cards.", why: "Humans naturally insert items into a sorted hand." }
    ],
    "3.2.1 Data Types": [
        { q: "Which data type stores a whole number?", a: "Integer", options: ["Integer", "Real", "String", "Boolean"], hint: "No decimal points.", why: "Integers are whole numbers used for counting and indexing." },
        { q: "What is the best data type for a price like £19.99?", a: "Real / Float (numbers with fractional parts)", options: ["Real / Float (numbers with fractional parts)", "Integer (whole numbers with no decimals)", "String (a sequence of alphanumeric symbols)", "Boolean (a logic gate with two distinct states)"], hint: "Needs a decimal point.", why: "Real or Float types allow for fractional numbers." },
        { q: "Which data type stores a sequence of characters?", a: "String (a collection of characters in quotes)", options: ["String (a collection of characters in quotes)", "Character (a single alphanumeric symbol unit)", "Integer (a whole numerical value in memory)", "Boolean (a binary value representing true/false)"], hint: "Used for words.", why: "A string is a collection of characters enclosed in quotes." },
        { q: "What data type would store a 'Yes/No' answer?", a: "Boolean (representing one of two logical states)", options: ["Boolean (representing one of two logical states)", "Integer (representing any whole numerical value)", "String (representing a sequence of text symbols)", "Character (representing a single keyboard unit)"], hint: "True or False.", why: "Booleans store binary logic values." },
        { q: "What is 'Casting' in programming?", a: "Converting a variable from one data type to another", options: ["Converting a variable from one data type to another", "Deleting a variable to free up system resources", "Assigning a unique identifier to a local function", "Encapsulating a method within a private class"], hint: "Changing a string into an integer.", why: "Casting allows you to treat data as a different type for calculations." },
        { q: "Which type stores a single letter or symbol?", a: "Character (a single alphanumeric data unit)", options: ["Character (a single alphanumeric data unit)", "String (a sequence of multiple character units)", "Integer (a whole number used for calculation)", "Real (a number containing a decimal fractional)"], hint: "Just one unit.", why: "A Char data type is optimised for single character storage." },
        { q: "If you add two strings '10' and '5', what is the result?", a: "'105' (due to string concatenation rules)", options: ["'105' (due to string concatenation rules)", "15 (calculated as a mathematical addition)", "50 (calculated as a mathematical product)", "An Error (due to incompatible data types)"], hint: "Joining strings.", why: "Adding strings joins them rather than performing math." },
        { q: "What is the purpose of a 'Constant'?", a: "To store a value that cannot be changed during execution", options: ["To store a value that cannot be changed during execution", "To store user input that varies with every programme run", "To create a loop that repeats until a condition is met", "To save memory by deleting variables after their use"], hint: "Think of Pi.", why: "Constants protect values from being modified during execution." },
        { q: "Which data type uses the least memory for logic?", a: "Boolean (requiring only a single bit of storage)", options: ["Boolean (requiring only a single bit of storage)", "String (requiring one byte per character stored)", "Real (requiring multiple bytes for decimal precision)", "Integer (requiring several bytes for whole values)"], hint: "Only 1 bit needed.", why: "Booleans only need a single bit to represent True or False." },
        { q: "What is a 'Global variable'?", a: "A variable accessible by any part of the programme", options: ["A variable accessible by any part of the programme", "A variable that only functions across a web network", "A variable whose value remains constant and fixed", "A variable defined only within a specific loop"], hint: "Universal scope.", why: "Global variables are declared outside subroutines." },
        { q: "What is a 'Local variable'?", a: "A variable only accessible within its own subroutine", options: ["A variable only accessible within its own subroutine", "A variable stored permanently on the hard drive", "A variable that only accepts integer data types", "A variable that updates very slowly during execution"], hint: "Limited scope.", why: "Local variables exist only while their subroutine is running." },
        { q: "Which is a valid variable name?", a: "user_score (using an underscore for clarity)", options: ["user_score (using an underscore for clarity)", "1stScore (starting with a numerical digit)", "user score (containing a space between words)", "score! (containing a restricted symbol)"], hint: "Look for underscores.", why: "Names cannot start with numbers or have spaces." },
        { q: "What is 'Assignment'?", a: "Storing a specific value in a named variable", options: ["Storing a specific value in a named variable", "Comparing two separate values for equality", "Defining the name of the entire programme file", "Printing data to the screen for user feedback"], hint: "The = symbol.", why: "Assignment gives a value to a named memory location." },
        { q: "Why use meaningful variable names?", a: "To improve code readability and maintainability", options: ["To improve code readability and maintainability", "To make the CPU process the instructions faster", "To reduce the amount of space taken on the disk", "To prevent the compiler from finding syntax errors"], hint: "Readability.", why: "Human programmers need to understand what data a variable holds." },
        { q: "What data type is used for '3.14159'?", a: "Real / Float (supporting decimal precision)", options: ["Real / Float (supporting decimal precision)", "Integer (supporting only whole number values)", "Boolean (supporting binary logic states only)", "String (supporting text-based symbol sequences)"], hint: "It has a decimal point.", why: "Decimal values require the Real/Float data type." }
    ],
    "3.2.2 Programming Constructs": [
        { q: "What are the three basic constructs?", a: "Sequence, Selection, and Iteration", options: ["Sequence, Selection, and Iteration", "Input, Process, and Output", "Hardware, Software, and Users", "Binary, Hex, and Denary"], hint: "S, S, I.", why: "These three structures form the logic of every programme." },
        { q: "Which construct is used for making decisions?", a: "Selection (such as IF or CASE statements)", options: ["Selection (such as IF or CASE statements)", "Sequence (running code in a linear order)", "Iteration (repeating code using a loop)", "Variable (storing a changing data value)"], hint: "IF... ELSE.", why: "Selection allows a programme to branch based on a condition." },
        { q: "What is 'Iteration'?", a: "The repetition of a block of code until a condition is met", options: ["The repetition of a block of code until a condition is met", "The linear execution of instructions in order", "The process of naming a variable or constant", "The identification of a logic error in a programme"], hint: "Loops.", why: "Iteration repeats instructions until a condition is met." },
        { q: "Which loop is 'Count-controlled'?", a: "FOR loop (repeating for a fixed number of times)", options: ["FOR loop (repeating for a fixed number of times)", "WHILE loop (repeating while a condition is true)", "REPEAT loop (repeating until a condition is true)", "IF statement (choosing between two paths)"], hint: "Repeat 10 times.", why: "FOR loops run for a predetermined number of times." },
        { q: "Which loop is 'Condition-controlled'?", a: "WHILE loop (repeating based on a boolean state)", options: ["WHILE loop (repeating based on a boolean state)", "FOR loop (repeating for a specific count)", "Sequence (executing code in a single line)", "Assignment (setting the value of a variable)"], hint: "Repeat until False.", why: "WHILE loops repeat as long as a test remains True." },
        { q: "What is an 'Infinite loop'?", a: "A loop whose exit condition is never satisfied", options: ["A loop whose exit condition is never satisfied", "A loop that executes exactly 100 times", "A loop placed inside another loop structure", "A loop that causes a fatal hardware crash"], hint: "Condition never fails.", why: "If the exit condition is never met, the loop runs forever." },
        { q: "What is a 'Nested' construct?", a: "A control structure placed inside another structure", options: ["A control structure placed inside another structure", "A control structure that contains no instructions", "A control structure designed for web development", "A control structure that has been deleted"], hint: "IF inside a FOR loop.", why: "Nesting allows for complex logic by layering structures." },
        { q: "What is 'Sequence'?", a: "The order in which instructions are executed", options: ["The order in which instructions are executed", "Choosing between different available paths", "The repetition of a task until finished", "The process of naming a function or method"], hint: "Top to bottom.", why: "Sequence ensures code executes in the order written." },
        { q: "What is a 'Subroutine'?", a: "A named, reusable block of code for a specific task", options: ["A named, reusable block of code for a specific task", "A small variable stored in the CPU registers", "A file saved to the secondary storage device", "A physical hardware component of the motherboard"], hint: "Functions/Procedures.", why: "Subroutines allow code reuse and organisation." },
        { q: "What is the difference between a Function and a Procedure?", a: "Functions return a value; Procedures do not", options: ["Functions return a value; Procedures do not", "Procedures return a value; Functions do not", "Functions are always longer than procedures", "Procedures are only used for mathematical tasks"], hint: "The 'Return' keyword.", why: "Functions calculate and send back data to the programme." },
        { q: "What is a 'Parameter'?", a: "A variable used in a subroutine to receive data", options: ["A variable used in a subroutine to receive data", "A numerical limit for a count-controlled loop", "The unique name given to a programme file", "A type of runtime error found in complex code"], hint: "Input for a function.", why: "Parameters allow you to pass data into a subroutine." },
        { q: "Why is indentation used in programming?", a: "To visually represent the structure and scope of code", options: ["To visually represent the structure and scope of code", "To make the CPU process instructions faster", "To save battery power on portable devices", "To prevent all syntax errors from occurring"], hint: "Readability.", why: "Indentation visually defines the scope of loops and blocks." },
        { q: "What is an 'Argument'?", a: "The actual value passed into a subroutine parameter", options: ["The actual value passed into a subroutine parameter", "A logic bug identified during programme testing", "The specific name given to a local variable", "A comment written to explain the code logic"], hint: "Data in the brackets.", why: "Arguments are specific values given to parameters." },
        { q: "Which statement handles multiple alternative conditions?", a: "ELIF / Switch (handling three or more paths)", options: ["ELIF / Switch (handling three or more paths)", "Nested Loop (repeating code inside a loop)", "Boolean Logic (evaluating only true/false)", "Constant (storing a single fixed value)"], hint: "More than two options.", why: "ELIF handles multiple different conditions." },
        { q: "What is 'Modular Programming'?", a: "Breaking a programme into smaller, independent subroutines", options: ["Breaking a programme into smaller, independent subroutines", "Writing all code in a single, long sequence", "Using only hardware components for calculation", "Encrypting code so users cannot read it"], hint: "Subroutines.", why: "Modular programming uses decomposition to improve structure." }
    ],
    "3.2.3 Arithmetic Operations": [
        { q: "Which symbol is used for Division in most languages?", a: "/ (forward slash for real division)", options: ["/ (forward slash for real division)", "\\ (backslash for integer division)", "% (percent for remainder division)", "DIV (command for quotient division)"], hint: "Forward slash.", why: "The forward slash is the standard operator for real division." },
        { q: "What does the MOD (%) operator do?", a: "Calculates the remainder of a division operation", options: ["Calculates the remainder of a division operation", "Multiplies a value by 100 for percentage", "Deletes a variable from the system memory", "Adds two whole numbers together in sequence"], hint: "10 MOD 3 is 1.", why: "Modulus returns the remainder of a division." },
        { q: "What does the DIV (//) operator do?", a: "Calculates the quotient (integer division)", options: ["Calculates the quotient (integer division)", "Calculates the remainder of the division", "Squares a numerical value automatically", "Adds text strings together in a sequence"], hint: "10 DIV 3 is 3.", why: "DIV returns the whole number of times a value goes into another." },
        { q: "What is 7 MOD 2?", a: "1 (the remainder after division)", options: ["1 (the remainder after division)", "3 (the whole number quotient)", "3.5 (the exact decimal result)", "0 (as it divides into the number)"], hint: "Remainder of 7 divided by 2.", why: "2 goes into 7 three times with 1 left over." },
        { q: "What is 7 DIV 2?", a: "3 (the integer quotient result)", options: ["3 (the integer quotient result)", "1 (the remainder result)", "3.5 (the real division result)", "4 (the rounded up result)"], hint: "Whole number only.", why: "Integer division discards the fractional remainder." },
        { q: "The symbol '**' or '^' usually means?", a: "Exponentiation (raising to a power)", options: ["Exponentiation (raising to a power)", "Multiplication of two separate values", "Division of a value into equal parts", "Modulus to find a division remainder"], hint: "3 ** 2 is 9.", why: "These symbols are used to raise a number to a power." },
        { q: "What is the result of 10 + 5 * 2?", a: "20 (due to BIDMAS/Order of Operations)", options: ["20 (due to BIDMAS/Order of Operations)", "30 (calculated from left to right)", "15 (calculated by adding first)", "10 (calculated by subtracting last)"], hint: "Order of operations (BIDMAS).", why: "Multiplication happens before addition." },
        { q: "Which operator has the lowest priority in BIDMAS?", a: "Addition / Subtraction", options: ["Addition / Subtraction", "Multiplication / Division", "Brackets / Parentheses", "Exponents / Indices"], hint: "BIDMAS.", why: "Addition and Subtraction are performed last." },
        { q: "What is the symbol for Multiplication?", a: "* (asterisk symbol)", options: ["* (asterisk symbol)", "x (lowercase x symbol)", "X (uppercase X symbol)", "MULT (command keyword)"], hint: "The asterisk.", why: "Programming languages use the asterisk for multiplication." },
        { q: "What is 15 MOD 5?", a: "0 (as there is no remainder)", options: ["0 (as there is no remainder)", "3 (as it divides three times)", "1 (as a standard remainder)", "5 (as the divisor used)"], hint: "Does it divide exactly?", why: "There is no remainder when 15 is divided by 5." },
        { q: "How do you check if a number is Even?", a: "Check if (Number MOD 2) equals 0", options: ["Check if (Number MOD 2) equals 0", "Check if (Number DIV 2) equals 1", "Check if (Number + 2) equals 4", "Check if (Number * 2) equals 10"], hint: "Remainder should be 0.", why: "If a number MOD 2 equals 0, it is even." },
        { q: "What is the result of 16 DIV 5?", a: "3 (the whole number quotient)", options: ["3 (the whole number quotient)", "1 (the remaining remainder)", "3.2 (the exact decimal value)", "0 (the integer failure)"], hint: "Whole numbers only.", why: "5 goes into 16 three times; the remainder is ignored." },
        { q: "In 10 / 4, what is the result using Real division?", a: "2.5 (the exact fractional value)", options: ["2.5 (the exact fractional value)", "2 (the integer quotient value)", "0.5 (the remainder fraction)", "10 (the numerator value)"], hint: "Decimals included.", why: "Real division calculates the exact fractional value." },
        { q: "Why are brackets used in mathematical expressions?", a: "To prioritise specific parts of the calculation", options: ["To prioritise specific parts of the calculation", "To save memory space during execution", "To make the code look more attractive", "To define a new local variable name"], hint: "BIDMAS.", why: "Brackets have the highest priority." },
        { q: "What is the result of 2 ** 3?", a: "8 (calculated as 2 x 2 x 2)", options: ["8 (calculated as 2 x 2 x 2)", "6 (calculated as 2 x 3)", "9 (calculated as 3 x 3)", "4 (calculated as 2 x 2)"], hint: "2 x 2 x 2.", why: "2 raised to the power of 3 is 8." }
    ],
    "3.2.4 Relational Operations": [
        { q: "Which symbol means 'Greater than or equal to'?", a: ">= (arrow pointing right and equals)", options: [">= (arrow pointing right and equals)", "=> (equals and arrow pointing right)", "> (arrow pointing right only)", "== (double equals for equality)"], hint: "Arrow and equals.", why: ">= checks if a value is larger than or exactly equal to another." },
        { q: "What does '==' represent in programming?", a: "Equal to (comparison operator)", options: ["Equal to (comparison operator)", "Assignment (setting a value)", "Not equal (inequality operator)", "Less than (smaller than operator)"], hint: "Comparison, not assignment.", why: "Double equals is used to compare two values for equality." },
        { q: "What does '!=' represent in programming?", a: "Not equal to (inequality operator)", options: ["Not equal to (inequality operator)", "Equal to (equality operator)", "Exclamation (logical inversion)", "Does not exist (null operator)"], hint: "Inequality.", why: "The exclamation mark often represents 'NOT' in programming." },
        { q: "What is the result of the expression (5 > 3)?", a: "True (as a boolean value)", options: ["True (as a boolean value)", "False (as a boolean value)", "8 (as an integer sum)", "2 (as an integer difference)"], hint: "Is 5 bigger than 3?", why: "The relational operation returns a Boolean value." },
        { q: "What is the result of the expression (10 < 10)?", a: "False (as they are equal values)", options: ["False (as they are equal values)", "True (as they are identical values)", "0 (as a numerical result)", "Error (as a logic failure)"], hint: "Is it strictly smaller?", why: "10 is equal to 10, so it is not less than 10." },
        { q: "Which symbol is 'Less than or equal to'?", a: "<= (arrow pointing left and equals)", options: ["<= (arrow pointing left and equals)", "=< (equals and arrow pointing left)", "< (arrow pointing left only)", "!= (not equal to operator)"], hint: "Arrow and equals.", why: "<= checks if the first value is smaller or equal to the second." },
        { q: "Relational operators always return which data type?", a: "Boolean (True or False)", options: ["Boolean (True or False)", "Integer (Whole numbers)", "String (Sequence of text)", "Real (Decimal numbers)"], hint: "True or False.", why: "Comparisons result in a logical true or false." },
        { q: "If x = 5, what is the result of (x != 5)?", a: "False (because x is equal to 5)", options: ["False (because x is equal to 5)", "True (because x is a variable)", "5 (the value of the variable)", "Error (invalid comparison)"], hint: "Is 5 NOT equal to 5?", why: "Since x is 5, the statement 'not equal to 5' is false." },
        { q: "Comparing 'apple' to 'Apple' is usually?", a: "False (due to case sensitivity)", options: ["False (due to case sensitivity)", "True (due to matching letters)", "Error (due to string comparison)", "Null (due to empty result)"], hint: "Case sensitivity.", why: "Most languages treat capital letters as different values from lowercase." },
        { q: "Which operator checks for inequality?", a: "!= (not equal operator)", options: ["!= (not equal operator)", "== (equal operator)", "<> (alternate inequality)", "Both != and <>"], hint: "Depends on language, but usually !=.", why: "!= is the standard 'Not Equal' operator." },
        { q: "Is (15 >= 15) True or False?", a: "True (it satisfies the 'equal' part)", options: ["True (it satisfies the 'equal' part)", "False (it must be strictly greater)"], hint: "It checks 'or equal'.", why: "Because 15 equals 15, the condition is satisfied." },
        { q: "Which of these is a Relational Operator?", a: "== (equality check)", options: ["== (equality check)", "+ (addition operator)", "MOD (remainder operator)", "PRINT (output command)"], hint: "Used in an IF statement.", why: "Relational operators compare two values." },
        { q: "In 'IF score > 50', what is the relational operator?", a: "> (greater than symbol)", options: ["> (greater than symbol)", "IF (selection keyword)", "score (variable name)", "50 (integer literal)"], hint: "The comparison symbol.", why: "The greater-than symbol compares the variable to the value." },
        { q: "Is (0 == False) in many languages?", a: "True (binary 0 represents False)", options: ["True (binary 0 represents False)", "False (they are different types)"], hint: "Binary logic.", why: "In many languages, 0 is used for False and 1 for True." },
        { q: "Relational operators are most commonly used in?", a: "Selection and Iteration structures", options: ["Selection and Iteration structures", "Variable and constant naming", "Printing and displaying text", "Inputting and receiving data"], hint: "Decisions and loops.", why: "They provide the conditions that control programme flow." }
    ],
    "3.2.5 Boolean Operations": [
        { q: "Which Boolean operator requires BOTH conditions to be True?", a: "AND (logical conjunction)", options: ["AND (logical conjunction)", "OR (logical disjunction)", "NOT (logical negation)", "XOR (exclusive disjunction)"], hint: "Strict requirement.", why: "AND only returns True if every input is True." },
        { q: "Which operator requires only ONE condition to be True?", a: "OR (logical disjunction)", options: ["OR (logical disjunction)", "AND (logical conjunction)", "NOT (logical negation)", "NAND (negated conjunction)"], hint: "Either/Or.", why: "OR returns True if at least one input is True." },
        { q: "Which operator reverses the current Boolean value?", a: "NOT (logical negation)", options: ["NOT (logical negation)", "AND (logical conjunction)", "OR (logical disjunction)", "IF (selection structure)"], hint: "Inverse.", why: "NOT turns True into False and vice versa." },
        { q: "What is the result of (True AND False)?", a: "False (as one input is false)", options: ["False (as one input is false)", "True (as one input is true)", "Error (as incompatible types)", "Null (as an empty result)"], hint: "Are both True?", why: "Because one is False, the AND operation fails." },
        { q: "What is the result of (True OR False)?", a: "True (as one input is true)", options: ["True (as one input is true)", "False (as one input is false)", "Error (as incompatible types)", "Null (as an empty result)"], hint: "Is at least one True?", why: "Because the first value is True, the OR operation succeeds." },
        { q: "What is the result of (NOT True)?", a: "False (the inverted logical state)", options: ["False (the inverted logical state)", "True (the original logical state)", "0 (as a numerical zero)", "1 (as a numerical one)"], hint: "The opposite.", why: "NOT inverts the Boolean value." },
        { q: "Which gate is shown by a triangle with a dot in logic diagrams?", a: "NOT gate (the logical inverter)", options: ["NOT gate (the logical inverter)", "AND gate (the logical conjunction)", "OR gate (the logical disjunction)", "XOR gate (the exclusive or)"], hint: "A single input gate.", why: "The triangle with a circle (inverter) is the NOT gate." },
        { q: "Which logic gate is shaped like a 'D'?", a: "AND gate (logical conjunction)", options: ["AND gate (logical conjunction)", "OR gate (logical disjunction)", "NOT gate (logical negation)", "NAND gate (negated and)"], hint: "Logic gate shapes.", why: "The AND gate has a flat back and a rounded front." },
        { q: "Which gate is shaped like a curved shield or rocket?", a: "OR gate (logical disjunction)", options: ["OR gate (logical disjunction)", "AND gate (logical conjunction)", "NOT gate (logical negation)", "XOR gate (exclusive or)"], hint: "Logic gate shapes.", why: "The OR gate has a curved input side and a pointed output." },
        { q: "What is the result of (False OR False)?", a: "False (as no inputs are true)", options: ["False (as no inputs are true)", "True (as it matches types)", "Error (as invalid logic)", "0 (as a numerical result)"], hint: "Are any of them True?", why: "Since neither is True, the OR operation results in False." },
        { q: "What is the result of (NOT False)?", a: "True (the inverted logical state)", options: ["True (the inverted logical state)", "False (the original state)", "1 (as a numerical one)", "0 (as a numerical zero)"], hint: "Opposite of False.", why: "The inverse of False is True." },
        { q: "What is (5 > 2 AND 10 < 20)?", a: "True (both conditions are met)", options: ["True (both conditions are met)", "False (one condition failed)", "Error (invalid comparison)", "8 (numerical remainder)"], hint: "Are both sides True?", why: "Both 5>2 and 10<20 are true, so AND is true." },
        { q: "What is (False AND True)?", a: "False (requires both to be true)", options: ["False (requires both to be true)", "True (as one is true)", "0 (numerical failure)", "1 (numerical success)"], hint: "Both must be true.", why: "One is false, so the whole expression is false." },
        { q: "A 'Truth Table' shows...?", a: "All possible outputs for given inputs", options: ["All possible outputs for given inputs", "The identity of the coder", "A list of all syntax errors", "Physical memory addresses"], hint: "Binary combinations.", why: "Truth tables map out every logical outcome." },
        { q: "How many inputs does a standard NOT gate have?", a: "1 (it is a unary operator)", options: ["1 (it is a unary operator)", "2 (it requires comparison)", "3 (it requires validation)", "Unlimited (it is flexible)"], hint: "It only flips one value.", why: "NOT is a unary operator, taking only one input." }
    ],
    "3.2.6 Data Structures": [
        { q: "What is an 'Array'?", a: "A collection of data items under one name", options: ["A collection of data items under one name", "A single variable used once", "A type of iteration structure", "A physical hardware component"], hint: "Stores lists.", why: "Arrays store multiple pieces of data that can be indexed." },
        { q: "What is an 'Index' in an array?", a: "The numerical position of an item in a list", options: ["The numerical position of an item in a list", "The unique name of the entire array", "The total size of the array structure", "The specific data type of the items"], hint: "Usually starts at 0.", why: "Indices are used to access specific elements in an array." },
        { q: "What is the first index in most languages?", a: "0 (zero-based indexing)", options: ["0 (zero-based indexing)", "1 (one-based indexing)", "-1 (negative indexing)", "10 (fixed indexing)"], hint: "Start counting from zero.", why: "Computer science typically uses zero-based indexing." },
        { q: "What is a '2D Array'?", a: "An array that contains other arrays", options: ["An array that contains other arrays", "A very large single array", "An array with two different names", "An array designed for 3D tasks"], hint: "Like a grid.", why: "2D arrays use two indices (rows and columns) to locate data." },
        { q: "Accessing 3rd item in 'Scores' array?", a: "Scores[2] (due to zero-indexing)", options: ["Scores[2] (due to zero-indexing)", "Scores[3] (direct positioning)", "Scores[1] (preceding position)", "Scores[4] (extended position)"], hint: "Start at 0.", why: "Index 0 is 1st, 1 is 2nd, 2 is 3rd." },
        { q: "What is a 'Record' in data structures?", a: "A group of related fields about one entity", options: ["A group of related fields about one entity", "A fast computer used for data", "A type of iteration loop", "A file saved to the system"], hint: "Like a database row.", why: "Records group different data types belonging to one item." },
        { q: "What is a 'Field'?", a: "A single piece of data within a record", options: ["A single piece of data within a record", "The entire record collection", "A specific type of 1D array", "The name of a local variable"], hint: "A column.", why: "Fields are the components that make up a record." },
        { q: "Why are arrays useful for iteration?", a: "You can use a loop to process every item", options: ["You can use a loop to process every item", "They make loop execution faster", "They eliminate the need for loops", "They delete data after the loop"], hint: "Going through a list.", why: "Loops use index variables to access each element in turn." },
        { q: "What is the 'Length' of an array?", a: "The total number of items it contains", options: ["The total number of items it contains", "The amount of memory used", "The unique name of the array", "The highest index value used"], hint: "Count the items.", why: "Length tells you the total number of elements." },
        { q: "A 'Static' data structure...?", a: "Has a fixed size defined at start", options: ["Has a fixed size defined at start", "Never changes its stored data", "Is saved to the system disk", "Is deleted quickly after use"], hint: "Fixed length.", why: "Static structures cannot grow or shrink during runtime." },
        { q: "A 'Dynamic' data structure...?", a: "Can change its size during programme runtime", options: ["Can change its size during programme runtime", "Is designed only for animation", "Only stores numerical data types", "Remains the same size always"], hint: "Can expand.", why: "Dynamic structures adjust memory based on data stored." },
        { q: "What is a 'Linked List'?", a: "Data items that point to the next node", options: ["Data items that point to the next node", "Variables that share a single name", "A hardware connection between PCs", "A link to an external website"], hint: "Nodes and pointers.", why: "Linked lists connect data in different memory locations." },
        { q: "In grid[row][col], what is grid[0][1]?", a: "The first row and second column", options: ["The first row and second column", "The second row and first column", "The first row and first column", "The second row and second column"], hint: "Row first, then column.", why: "Index 0 is first, index 1 is second." },
        { q: "Best structure for a simple shopping list?", a: "1D Array or List (single column)", options: ["1D Array or List (single column)", "2D Array (grid based data)", "Record (mixed field entity)", "Boolean (logical binary states)"], hint: "Single column.", why: "A 1D array is the simplest way to store a sequence." },
        { q: "What is the behaviour of a Stack?", a: "Last-In, First-Out (LIFO structure)", options: ["Last-In, First-Out (LIFO structure)", "First-In, First-Out (FIFO structure)", "Random-Access (non-linear structure)", "Never-In (empty data structure)"], hint: "Stack of plates.", why: "Stacks only allow adding/removing from the top." }
    ],
    "3.2.7 Input and Output": [
        { q: "Which command takes data from a user?", a: "input() (standard input function)", options: ["input() (standard input function)", "print() (standard output function)", "output() (hypothetical command)", "get() (alternate retrieval method)"], hint: "Keyboard entry.", why: "The input command pauses the programme to wait for the user." },
        { q: "Which command displays data on the screen?", a: "print() (standard output function)", options: ["print() (standard output function)", "input() (standard input function)", "write() (file writing command)", "show() (visual display command)"], hint: "Standard output.", why: "Print sends data to the monitor for the user to see." },
        { q: "User input is usually received as which type?", a: "String (requiring casting for math)", options: ["String (requiring casting for math)", "Integer (whole numerical value)", "Real (decimal numerical value)", "Boolean (logical binary value)"], hint: "Needs casting for math.", why: "Computers treat keyboard input as characters by default." },
        { q: "How do you output 'Hello World' in Python?", a: "print('Hello World') (with quotes)", options: ["print('Hello World') (with quotes)", "input('Hello World') (as a prompt)", "echo 'Hello World' (console command)", "console.log('Hello World') (JS)"], hint: "Standard command.", why: "Python uses the print function with parentheses." },
        { q: "What is a 'Prompt' in I/O?", a: "A message telling the user what to enter", options: ["A message telling the user what to enter", "A type of high-speed variable", "The internal clock speed of a CPU", "A specific type of syntax error"], hint: "Example: 'Enter your age'.", why: "Prompts guide the user on what data is required." },
        { q: "Which command would you use to show variable 'x'?", a: "print(x) (using the variable name)", options: ["print(x) (using the variable name)", "print('x') (printing the literal letter)", "input(x) (requesting x from user)", "show(x) (displaying the variable)"], hint: "No quotes for variables.", why: "Using quotes would print the letter 'x' instead of its value." },
        { q: "Why is 'Validation' used on user inputs?", a: "To ensure data is sensible and correct", options: ["To ensure data is sensible and correct", "To make the code execute faster", "To save battery power on devices", "To encrypt data for secure storage"], hint: "Checking for errors.", why: "Validation prevents programme crashes due to bad data." },
        { q: "A 'Type Check' validation ensures?", a: "The correct data type was provided", options: ["The correct data type was provided", "The input field was not left blank", "The data falls within a specific range", "The password meets length rules"], hint: "Integer vs String.", why: "Type checks verify the user entered a number when requested." },
        { q: "A 'Presence Check' validation ensures?", a: "A mandatory field was not left blank", options: ["A mandatory field was not left blank", "The data provided is accurate", "The data provided is a secret", "The data provided is a number"], hint: "Something is there.", why: "Presence checks stop users from skipping mandatory fields." },
        { q: "A 'Range Check' validation ensures?", a: "Numerical data is between two values", options: ["Numerical data is between two values", "The data is the correct type", "The input is not an empty string", "The referenced file currently exists"], hint: "1 to 100.", why: "Range checks ensure numbers fall within a valid boundary." },
        { q: "What is 'Sanitisation' in input handling?", a: "Cleaning input of harmful script or code", options: ["Cleaning input of harmful script or code", "Deleting the variable after its use", "Formatting the monitor screen", "Updating the system software"], hint: "Anti-hacking.", why: "Sanitisation prevents attacks like SQL injection." },
        { q: "Outputting multiple items on one line is?", a: "Concatenation (joining items together)", options: ["Concatenation (joining items together)", "Iteration (repeating the items)", "Selection (choosing between items)", "Assignment (storing the items)"], hint: "Joining.", why: "Joining strings or variables for output is concatenation." },
        { q: "Which device is a common Input device?", a: "Keyboard (sending alphanumeric data)", options: ["Keyboard (sending alphanumeric data)", "Monitor (presenting visual data)", "Printer (producing physical media)", "Speakers (producing audio data)"], hint: "Data goes in.", why: "Keyboards allow users to type data into the computer." },
        { q: "Which device is a common Output device?", a: "Monitor (displaying computer data)", options: ["Monitor (displaying computer data)", "Mouse (selecting screen items)", "Microphone (capturing audio data)", "Scanner (capturing physical media)"], hint: "Data comes out.", why: "Monitors provide visual feedback to the user." },
        { q: "Why use casting with the input() function?", a: "To use input in mathematical calculations", options: ["To use input in mathematical calculations", "To make the programme print faster", "To save space on the system disk", "To prevent all logic errors"], hint: "String to Int.", why: "Input is received as a string; casting is needed for math." }
    ],
    "3.2.8 String Handling": [
        { q: "What is 'Concatenation' in strings?", a: "Joining two separate strings together", options: ["Joining two separate strings together", "Splitting a long string into parts", "Changing the case of the letters", "Calculating the string length"], hint: "Adding 'Hello' + 'World'.", why: "Concatenation creates one longer string from two smaller ones." },
        { q: "Which function finds string length?", a: "len() (returning an integer count)", options: ["len() (returning an integer count)", "size() (returning memory usage)", "count() (returning specific symbols)", "length() (returning full size)"], hint: "Short for length.", why: "The len() function returns an integer of the string's length." },
        { q: "What is 'Slicing' in string handling?", a: "Extracting a specific part of a string", options: ["Extracting a specific part of a string", "Deleting a string from memory", "Joining two strings together", "Casting a string to an integer"], hint: "Getting 'cat' from 'caterpillar'.", why: "Slicing uses indices to pick out a specific substring." },
        { q: "In 'Computer', what is the index 1 character?", a: "'o' (due to zero-based indexing)", options: ["'o' (due to zero-based indexing)", "'C' (due to starting position)", "'m' (due to third position)", "'p' (due to fourth position)"], hint: "Starts at 0.", why: "Index 0 is 'C', index 1 is 'o'." },
        { q: "How do you convert a string to ALL CAPS?", a: ".upper() (standard uppercase method)", options: [".upper() (standard uppercase method)", ".lower() (standard lowercase method)", ".capital() (sentence case method)", ".big() (visual size method)"], hint: "Higher case.", why: "The upper method converts all characters to uppercase." },
        { q: "How do you convert a string to lowercase?", a: ".lower() (standard lowercase method)", options: [".lower() (standard lowercase method)", ".upper() (standard uppercase method)", ".small() (visual size method)", ".case() (general case method)"], hint: "Opposite of upper.", why: "The lower method converts all characters to lowercase." },
        { q: "Finding a character's position is called?", a: ".find() or .index() (search methods)", options: [".find() or .index() (search methods)", ".len() (measurement method)", ".upper() (formatting method)", ".slicing() (extraction method)"], hint: "Searching.", why: "These methods return the index of a character within a string." },
        { q: "What is the length of the string 'GCSE'?", a: "4 (counting each unique character)", options: ["4 (counting each unique character)", "3 (excluding the start index)", "5 (including a null terminator)", "0 (as it is not a sentence)"], hint: "Count the letters.", why: "There are four characters in 'GCSE'." },
        { q: "What is the last index in a string of length 10?", a: "9 (length minus one due to zero start)", options: ["9 (length minus one due to zero start)", "10 (matching the total length)", "0 (marking the start index)", "1 (marking the first unit)"], hint: "Length minus one.", why: "Because indexing starts at 0, the last index is length - 1." },
        { q: "Replacing 'cat' with 'dog' in a string is?", a: "String manipulation (editing text)", options: ["String manipulation (editing text)", "Casting (changing data types)", "Boolean logic (comparing states)", "Iteration (repeating sequences)"], hint: "Changing the text.", why: "Manipulation involves methods that modify or analyse strings." },
        { q: "Which character is at name[0] for 'Bob'?", a: "'B' (the first character in the string)", options: ["'B' (the first character in the string)", "'o' (the middle character unit)", "'b' (the final character unit)", "null (as it is not indexed)"], hint: "The first one.", why: "Index 0 is the start of the string." },
        { q: "Joining 'A' and 'B' to get 'AB' uses?", a: "The + operator (concatenation)", options: ["The + operator (concatenation)", "The * operator (multiplication)", "The / operator (division symbol)", "The - operator (subtraction)"], hint: "Plus symbol.", why: "The plus symbol is used for string concatenation." },
        { q: "Converting '123' to 123 is called?", a: "Casting to Integer (changing type)", options: ["Casting to Integer (changing type)", "Casting to String (keeping type)", "Concatenation (joining items)", "Slicing (extracting items)"], hint: "String to number.", why: "Casting changes the type while keeping literal data." },
        { q: "Can you slice a string using negative numbers?", a: "Yes, to count back from the end", options: ["Yes, to count back from the end", "No, indices must be positive", "Only for integer data types", "Only for Boolean logic tasks"], hint: "Counting from the end.", why: "Negative indices allow counting backwards from the end." },
        { q: "What is 'ASCII' in string handling?", a: "Numerical codes for every character", options: ["Numerical codes for every character", "A type of loop for repetitions", "A way to save system files", "A sorting algorithm for data"], hint: "Character encoding.", why: "Strings are stored as binary numbers based on character sets." }
    ],
    "3.2.9 Random Numbers": [
        { q: "Which library is needed for random in Python?", a: "import random (standard module)", options: ["import random (standard module)", "import math (math module)", "import time (clock module)", "import numbers (numerical module)"], hint: "The word itself.", why: "The random module contains functions for generating random data." },
        { q: "Which function generates a random integer?", a: "randint() (returning a whole value)", options: ["randint() (returning a whole value)", "random() (returning a float value)", "rand() (returning a raw value)", "getrand() (returning any value)"], hint: "Random Int.", why: "randint(a, b) returns a random whole number between a and b." },
        { q: "Why are random numbers used in games?", a: "To create unpredictable behaviours", options: ["To create unpredictable behaviours", "To make code execute faster", "To save system memory space", "To fix all syntax error types"], hint: "Rolling dice.", why: "Randomness ensures games aren't the same every time." },
        { q: "What is a 'Pseudo-random' number?", a: "A number following a complex formula", options: ["A number following a complex formula", "A truly random natural event", "A number that is always zero", "A number selected by the user"], hint: "Fake random.", why: "Computers use algorithms to generate random-looking numbers." },
        { q: "What is the range of random.randint(1, 6)?", a: "1 to 6 inclusive (both numbers included)", options: ["1 to 6 inclusive (both numbers included)", "1 to 5 (excluding the high end)", "0 to 6 (including the zero start)", "2 to 5 (excluding both ends)"], hint: "Like a standard die.", why: "randint usually includes both the start and end values." },
        { q: "A random float between 0.0 and 1.0 uses?", a: "random.random() (standard float)", options: ["random.random() (standard float)", "random.randint() (standard integer)", "random.float() (non-standard)", "random.get() (non-standard)"], hint: "No arguments needed.", why: "The random() function returns a decimal between 0 and 1." },
        { q: "To pick a random item from a list, use?", a: "random.choice() (picks one element)", options: ["random.choice() (picks one element)", "random.pick() (non-standard command)", "random.randint() (numerical only)", "random.item() (non-standard command)"], hint: "Making a choice.", why: "choice() selects one random element from an existing list." },
        { q: "Shuffling a list into a random order uses?", a: "random.shuffle() (reorders the list)", options: ["random.shuffle() (reorders the list)", "random.mix() (non-standard command)", "random.move() (non-standard command)", "random.sort() (orders the list)"], hint: "Like a deck of cards.", why: "shuffle() reorganises items in a list randomly." },
        { q: "What is a 'Seed' in random generation?", a: "The start value for the random formula", options: ["The start value for the random formula", "A type of computer virus code", "The end point of an iteration loop", "A small local variable for data"], hint: "Planting a start.", why: "Using the same seed produces the same 'random' sequence." },
        { q: "Are computers naturally good at being random?", a: "No, they are deterministic machines", options: ["No, they are deterministic machines", "Yes, they are naturally chaotic", "Only high-end gaming computers", "Only if connected to the internet"], hint: "They follow rules.", why: "Computers follow instructions; true randomness requires sensors." },
        { q: "Which to use for a coin flip simulation?", a: "randint(0, 1) (two distinct results)", options: ["randint(0, 1) (two distinct results)", "randint(1, 10) (ten distinct results)", "random() (unlimited decimal results)", "shuffle() (reordering the results)"], hint: "Two outcomes.", why: "0 for Heads, 1 for Tails represents a 50/50 chance." },
        { q: "What is the benefit of setting a random seed?", a: "To repeat 'random' results for testing", options: ["To repeat 'random' results for testing", "To make numbers even more random", "To speed up the central processor", "To save space on the system disk"], hint: "Debugging.", why: "Setting a seed allows developers to recreate bugs." },
        { q: "Random numbers are essential for which field?", a: "Cryptography (securing sensitive data)", options: ["Cryptography (securing sensitive data)", "Database design and organisation", "Web layout and graphic design", "Hardware repair and maintenance"], hint: "Secret codes.", why: "Strong encryption requires unpredictable random keys." },
        { q: "Can random.randint(5, 5) return anything else?", a: "No (the start and end are identical)", options: ["Yes (as it is still a random call)", "No (the start and end are identical)"], hint: "The range is zero.", why: "The range starts and ends at the same number." },
        { q: "Is random.randint(10, 1) valid in Python?", a: "No, it causes an error (start > end)", options: ["No, it causes an error (start > end)", "Yes, it counts backwards automatically", "Yes, it returns a zero by default", "Yes, it returns a decimal by default"], hint: "Start must be smaller than end.", why: "The start value must be less than or equal to the end." }
    ],
    "3.2.10 Subroutines": [
        { q: "What is a 'Subroutine' in programming?", a: "A named block of code for a specific task", options: ["A named block of code for a specific task", "A small variable for storing data", "A type of loop for repeating code", "A physical component of the hardware"], hint: "Functions/Procedures.", why: "Subroutines help break down complex programmes." },
        { q: "What is the main advantage of subroutines?", a: "Code reuse and improved organisation", options: ["Code reuse and improved organisation", "Making the hardware process faster", "Reducing total electricity consumption", "Preventing all types of syntax errors"], hint: "Don't repeat yourself.", why: "You can write code once and call it many times." },
        { q: "What is a 'Procedure' in programming?", a: "A subroutine that does NOT return a value", options: ["A subroutine that does NOT return a value", "A subroutine that returns a data value", "A type of constant variable for data", "A loop that executes for an infinite time"], hint: "Just performs an action.", why: "Procedures execute code but don't send data back." },
        { q: "What is a 'Function' in programming?", a: "A subroutine that RETURNS a data value", options: ["A subroutine that RETURNS a data value", "A subroutine that does not return data", "A type of physical hardware device", "A comment written to explain the code"], hint: "Calculates and sends back.", why: "Functions perform a task and 'return' a result." },
        { q: "What is a 'Parameter'?", a: "A placeholder variable for receiving data", options: ["A placeholder variable for receiving data", "An actual value sent into a subroutine", "The specific name of the subroutine", "An error message shown on the screen"], hint: "The placeholder.", why: "Parameters are variables that wait for data." },
        { q: "What is an 'Argument' in subroutines?", a: "The actual data value passed in during call", options: ["The actual data value passed in during call", "A placeholder variable in the header", "A logic error found during code testing", "A type of constant value for memory"], hint: "The real data.", why: "Arguments are the values you provide when calling." },
        { q: "What is 'Scope' in programming?", a: "The parts of code where a variable is seen", options: ["The parts of code where a variable is seen", "The physical size of the monitor screen", "The processing speed of the motherboard", "The total number of lines in a code file"], hint: "Global vs Local.", why: "Scope determines which parts can access a variable." },
        { q: "What is a 'Local Variable'?", a: "A variable declared inside a specific subroutine", options: ["A variable declared inside a specific subroutine", "A variable accessible by any part of code", "A variable stored on a remote web server", "A constant value that cannot be changed"], hint: "Limited access.", why: "Local variables only exist during subroutine execution." },
        { q: "What is a 'Global Variable'?", a: "A variable declared outside all subroutines", options: ["A variable declared outside all subroutines", "A variable only found in one function", "A variable that cannot be changed by code", "A type of physical hardware component"], hint: "Universal access.", why: "Global variables can be accessed by any part of code." },
        { q: "Why are local variables generally preferred?", a: "They prevent accidental data changes elsewhere", options: ["They prevent accidental data changes elsewhere", "They use significantly more system memory", "They are much faster for a coder to type", "They make the code much harder to read"], hint: "Safety and bugs.", why: "Encapsulating data locally makes debugging easier." },
        { q: "What does the 'return' keyword do?", a: "Sends a value back to the calling code", options: ["Sends a value back to the calling code", "Stops the entire computer hardware", "Deletes a variable from the system RAM", "Repeats the subroutine until finished"], hint: "Exit with data.", why: "Return ends the function and provides the output." },
        { q: "When a subroutine calls ITSELF, it is called?", a: "Recursion (a function calling itself)", options: ["Recursion (a function calling itself)", "Iteration (a loop repeating code)", "Selection (a choice between paths)", "Infinite (a never-ending structure)"], hint: "Mirror effect.", why: "Recursion is a technique where a function calls itself." },
        { q: "Breaking a problem using subroutines is?", a: "Decomposition (splitting into sub-tasks)", options: ["Decomposition (splitting into sub-tasks)", "Abstraction (removing unnecessary data)", "Binary (converting into base-2 values)", "Sorting (ordering data into a sequence)"], hint: "Breaking down.", why: "Decomposition is a core computational thinking skill." },
        { q: "A subroutine 'Header' contains?", a: "The unique name and any parameters needed", options: ["The unique name and any parameters needed", "The entire block of algorithmic code", "The final return value of the function", "The copyright information of the coder"], hint: "The top line.", why: "The header defines how the subroutine is identified." },
        { q: "Can a procedure have parameters?", a: "Yes (it can receive data without returning it)", options: ["Yes (it can receive data without returning it)", "No (only functions can receive data)"], hint: "Input but no output.", why: "Both functions and procedures can receive data." }
    ],
    "3.2.11 Files and Robustness": [
        { q: "Which mode is used to open a file for READING?", a: "read mode ('r' - view only access)", options: ["read mode ('r' - view only access)", "write mode ('w' - creates new file)", "append mode ('a' - adds to the end)", "open mode ('o' - generic opening)"], hint: "Standard 'r'.", why: "Read mode allows viewing data without changes." },
        { q: "Which mode OVERWRITES an existing file?", a: "write mode ('w' - deletes old content)", options: ["write mode ('w' - deletes old content)", "read mode ('r' - views the content)", "append mode ('a' - keeps old content)", "delete mode ('d' - removes the file)"], hint: "Deletes old data.", why: "Write mode clears the file before adding new data." },
        { q: "Which mode ADDS data to the end of a file?", a: "append mode ('a' - adds to the bottom)", options: ["append mode ('a' - adds to the bottom)", "write mode ('w' - starts from the top)", "read mode ('r' - only views the data)", "update mode ('u' - edits the data)"], hint: "Keep existing data.", why: "Append mode adds data without deleting anything." },
        { q: "Why must you 'Close' a file after use?", a: "To free system resources and save data", options: ["To free system resources and save data", "To make the final file size smaller", "To prevent all computer virus types", "To turn off the computer monitor"], hint: "Proper cleanup.", why: "Closing a file releases the lock on it." },
        { q: "What is 'Defensive Programming'?", a: "Writing code that handles unexpected errors", options: ["Writing code that handles unexpected errors", "Using a physical network firewall", "Writing code as quickly as possible", "Hiding the source code from other users"], hint: "Preparing for the worst.", why: "It ensures the programme doesn't crash on bad input." },
        { q: "What is a 'Syntax Error'?", a: "A mistake in the language grammar rules", options: ["A mistake in the language grammar rules", "A mistake in the logical algorithm steps", "An error that occurs during programme run", "A physical fault in the system hardware"], hint: "Spelling or punctuation.", why: "Syntax errors prevent the code from running." },
        { q: "What is a 'Logic Error'?", a: "The code runs but provides wrong results", options: ["The code runs but provides wrong results", "The code fails to start or compile", "The entire computer hardware crashes", "A variable name is spelled incorrectly"], hint: "The math is wrong.", why: "Logic errors are caused by flawed thinking in algorithms." },
        { q: "What is a 'Runtime Error'?", a: "An error that occurs while code is running", options: ["An error that occurs while code is running", "A typo found in the written source code", "A mistake made in the planning phase", "A physical problem with the printer"], hint: "e.g. Dividing by zero.", why: "Runtime errors happen when code asks for the impossible." },
        { q: "What is a 'Trace Table' used for?", a: "To manually check algorithmic logic steps", options: ["To manually check algorithmic logic steps", "To list all variables in alphabetical order", "To increase the speed of the processor", "To connect to a remote server database"], hint: "Dry running.", why: "Trace tables track values to find logic errors." },
        { q: "What is 'Input Validation'?", a: "Checking if user data meets specific rules", options: ["Checking if user data meets specific rules", "Asking a user for their private name", "Saving all user data to a local file", "Printing the results to a monitor screen"], hint: "Stopping bad data.", why: "Validation ensures only sensible data is processed." },
        { q: "A 'Range Check' ensures?", a: "A number falls between two specific values", options: ["A number falls between two specific values", "A field has not been left entirely blank", "The data provided is a text-based string", "The password used is unique and secret"], hint: "1 to 10.", why: "Range checks define acceptable boundaries." },
        { q: "A 'Length Check' ensures?", a: "Input has the correct character count", options: ["Input has the correct character count", "The system file size is kept very small", "The numerical value is extremely high", "The source code is written very briefly"], hint: "e.g. 8 digits.", why: "Length checks are common for passwords or IDs." },
        { q: "What is 'Authentication'?", a: "Verifying the identity of a system user", options: ["Verifying the identity of a system user", "Deleting a user's account permanently", "Fixing a bug found in the source code", "Printing a report for a user to view"], hint: "Passwords and logins.", why: "Authentication ensures only authorised access." },
        { q: "Why are comments used in code?", a: "To explain the logic to human readers", options: ["To explain the logic to human readers", "To make the programme execute faster", "To save system memory space", "To change how the actual code works"], hint: "Using # or //.", why: "Comments help humans understand the logic." },
        { q: "Which error is generally hardest to find?", a: "Logic Error (no crash, just wrong output)", options: ["Logic Error (no crash, just wrong output)", "Syntax Error (stops code from running)", "Runtime Error (crashes code while running)", "Compilation Error (stops the build)"], hint: "The computer thinks it's fine.", why: "Logic errors don't cause crashes, so you must notice them." }
    ],

    // --- PAPER 2: COMPUTING CONCEPTS ---
    "3.3.1 Number bases": [
        { q: "Which number base is used by computer hardware at the transistor level?", a: "Binary (Base 2) consisting only of bits 0 and 1", options: ["Binary (Base 2) consisting only of bits 0 and 1", "Denary (Base 10) consisting of digits 0 through 9", "Hexadecimal (Base 16) using digits and characters", "Octal (Base 8) consisting of digits 0 through 7"], hint: "Off and On states.", why: "Computers use bistable devices that only recognise two distinct electrical states." },
        { q: "Why is Hexadecimal frequently used by computer programmers?", a: "It provides a shorter, human-readable version of binary", options: ["It provides a shorter, human-readable version of binary", "It allows the central processor to execute code faster", "It reduces the total amount of physical RAM required", "It prevents the occurrence of complex syntax errors"], hint: "Easier for humans to read.", why: "One Hex digit represents exactly four bits (a nibble), making it easier to manage large binary values." },
        { q: "What is the maximum Denary value a 4-bit binary number can hold?", a: "15 (calculated as 2 to the power of 4, minus 1)", options: ["15 (calculated as 2 to the power of 4, minus 1)", "16 (calculated as the total number of combinations)", "8 (calculated as the highest power of two available)", "4 (calculated as the total number of bits present)"], hint: "1111 in binary.", why: "With 4 bits, you can represent 16 values (0-15)." },
        { q: "What is the Denary equivalent of the binary number 1010?", a: "10 (adding the 8-weight and the 2-weight columns)", options: ["10 (adding the 8-weight and the 2-weight columns)", "12 (adding the 8-weight and the 4-weight columns)", "5 (adding the 4-weight and the 1-weight columns)", "8 (representing only the highest weighted column)"], hint: "8 + 0 + 2 + 0.", why: "In 4-bit binary, the columns are weighted 8, 4, 2, 1." },
        { q: "In Hexadecimal, which character represents the Denary value 10?", a: "A (the first letter used after the digit nine)", options: ["A (the first letter used after the digit nine)", "F (the final letter used in the base-16 system)", "B (the second letter used to represent eleven)", "X (a non-standard character for large values)"], hint: "A-F are used for 10-15.", why: "Hexadecimal uses 0-9 and then A-F for values 10-15." },
        { q: "How many bits are represented by a single Hexadecimal digit?", a: "4 bits (commonly referred to as a binary nibble)", options: ["4 bits (commonly referred to as a binary nibble)", "8 bits (commonly referred to as a complete byte)", "2 bits (commonly referred to as a binary couplet)", "16 bits (commonly referred to as a processor word)"], hint: "Half a byte.", why: "Since 16 is 2 to the power of 4, one hex digit covers 4 bits." },
        { q: "What occurs during a binary 'Overflow' error?", a: "The result of a calculation exceeds the available bits", options: ["The result of a calculation exceeds the available bits", "The central processor loses its electrical connection", "The binary digits are inverted from zeros into ones", "The programme is deleted from the secondary storage"], hint: "Too many bits for the box.", why: "Overflow happens when a number is too large to be stored in the allocated space." },
        { q: "What is the result of shifting binary 0100 one place to the left?", a: "1000 (mathematically equivalent to doubling the value)", options: ["1000 (mathematically equivalent to doubling the value)", "0010 (mathematically equivalent to halving the value)", "0101 (mathematically equivalent to adding one unit)", "0110 (mathematically equivalent to adding two units)"], hint: "Logical shift left.", why: "A left shift doubles the number by moving digits to higher-weight columns." },
        { q: "What is the Denary value of the Hexadecimal number 10?", a: "16 (one 16-weight unit and zero 1-weight units)", options: ["16 (one 16-weight unit and zero 1-weight units)", "10 (as it appears identical to the denary system)", "1 (representing only the first digit in the pair)", "256 (representing sixteen squared in the system)"], hint: "16 + 0.", why: "In Hex, the columns are weighted ... 256, 16, 1." },
        { q: "Which of these is a valid Hexadecimal colour code?", a: "#FF5733 (using characters from the base-16 set)", options: ["#FF5733 (using characters from the base-16 set)", "#GG8811 (containing characters outside the set)", "#1010101 (containing too many numerical digits)", "#RED001 (containing non-standard English words)"], hint: "0-9 and A-F only.", why: "Hex codes are 6 characters long using only valid hex digits." },
        { q: "A binary right shift of two places performs what action?", a: "Integer division by four (discarding any remainder)", options: ["Integer division by four (discarding any remainder)", "Integer division by two (discarding any remainder)", "Multiplication by four (increasing the total value)", "Multiplication by two (increasing the total value)"], hint: "2 places = 2 squared.", why: "Each right shift halves the value; two shifts divide by four." },
        { q: "What is the largest Hexadecimal digit value?", a: "F (which is equivalent to Denary fifteen)", options: ["F (which is equivalent to Denary fifteen)", "E (which is equivalent to Denary fourteen)", "9 (which is the highest numerical digit used)", "16 (which is the base number of the system)"], hint: "The last letter.", why: "F is the 16th symbol (0-15)." },
        { q: "What is the binary representation of the Denary number 7?", a: "0111 (adding the 4, 2, and 1-weight columns)", options: ["0111 (adding the 4, 2, and 1-weight columns)", "1110 (adding the 8, 4, and 2-weight columns)", "1001 (adding the 8 and 1-weight columns only)", "0101 (adding the 4 and 1-weight columns only)"], hint: "4 + 2 + 1.", why: "7 is composed of one 4, one 2, and one 1." },
        { q: "Why do computers struggle with precise Denary decimals?", a: "Some fractions cannot be perfectly represented in binary", options: ["Some fractions cannot be perfectly represented in binary", "The processor cannot perform division on large numbers", "The monitor cannot display more than two decimal points", "The system memory is too small to hold fractional data"], hint: "Floating point errors.", why: "Binary fractions (1/2, 1/4, 1/8) cannot always sum exactly to denary decimals like 0.1." },
        { q: "What is 'MSB' in the context of binary numbers?", a: "Most Significant Bit (the bit with the highest weight)", options: ["Most Significant Bit (the bit with the highest weight)", "Main System Bus (the pathway for data transfer)", "Memory Storage Block (a unit of allocated RAM)", "Minimum Standard Binary (the simplest bit format)"], hint: "The leftmost bit.", why: "The MSB is the leftmost bit and carries the highest value." }
    ],

    "3.3.2 Converting between bases": [
        { q: "How do you convert Hexadecimal to Binary efficiently?", a: "Convert each individual Hex digit into its own 4-bit nibble", options: ["Convert each individual Hex digit into its own 4-bit nibble", "Multiply the Hex value by sixteen and then divide by two", "Convert the Hex to Denary first and then into Binary", "Add a zero to the end of the Hex value and then shift"], hint: "Nibbles.", why: "Because one Hex digit is exactly 4 bits, you can translate them directly." },
        { q: "What is binary 1100 in Hexadecimal?", a: "C (the character representing Denary twelve)", options: ["C (the character representing Denary twelve)", "B (the character representing Denary eleven)", "A (the character representing Denary ten)", "D (the character representing Denary thirteen)"], hint: "8 + 4 = 12.", why: "1100 is 12 in denary, which is 'C' in Hex." },
        { q: "What is binary 1111 1111 in Denary?", a: "255 (the maximum value for an 8-bit byte)", options: ["255 (the maximum value for an 8-bit byte)", "256 (the total number of possible combinations)", "128 (the weight of the most significant bit)", "100 (a standard rounded numerical value)"], hint: "All bits on.", why: "The sum of 128+64+32+16+8+4+2+1 is 255." },
        { q: "What is Hexadecimal '1A' in Denary?", a: "26 (one sixteen plus ten ones)", options: ["26 (one sixteen plus ten ones)", "110 (one hundred plus ten ones)", "17 (one sixteen plus one one)", "32 (two sixteens and zero ones)"], hint: "16 + 10.", why: "The '1' is in the 16s column, the 'A' (10) is in the 1s column." },
        { q: "Convert binary 0011 0101 to Hexadecimal.", a: "35 (converting the two nibbles separately)", options: ["35 (converting the two nibbles separately)", "31 (calculating the total denary value)", "53 (reversing the order of the nibbles)", "8 (adding the two nibbles together)"], hint: "0011 | 0101.", why: "0011 is 3 and 0101 is 5." },
        { q: "What is the first step to convert Denary to Binary?", a: "Find the largest power of two that fits into the number", options: ["Find the largest power of two that fits into the number", "Divide the Denary number by sixteen and note the remainder", "Multiply the Denary number by two until it reaches zero", "Add a binary prefix to the front of the Denary number"], hint: "Subtraction method.", why: "The subtraction method starts by comparing the number to the highest column weight (e.g., 128)." },
        { q: "Convert Denary 50 to Binary.", a: "0011 0010 (32 + 16 + 2)", options: ["0011 0010 (32 + 16 + 2)", "0010 1010 (32 + 8 + 2)", "0011 0100 (32 + 16 + 4)", "0110 0010 (64 + 32 + 2)"], hint: "Find the components.", why: "50 = 32 + 16 + 2." },
        { q: "What is Hexadecimal 'FF' in Denary?", a: "255 (fifteen sixteens plus fifteen ones)", options: ["255 (fifteen sixteens plus fifteen ones)", "256 (sixteen sixteens and zero ones)", "100 (a standard base-10 conversion)", "1515 (concatenating the digit values)"], hint: "15*16 + 15.", why: "F is 15. (15 * 16) + (15 * 1) = 255." },
        { q: "Convert binary 0000 1010 to Denary.", a: "10 (adding the 8-weight and 2-weight columns)", options: ["10 (adding the 8-weight and 2-weight columns)", "12 (adding the 8-weight and 4-weight columns)", "5 (adding the 4-weight and 1-weight columns)", "8 (representing the most significant bit)"], hint: "8 + 2.", why: "Columns are ... 8, 4, 2, 1. The 8 and 2 columns are 'on'." },
        { q: "Convert Hexadecimal '2B' to Binary.", a: "0010 1011 (converting 2 and B separately)", options: ["0010 1011 (converting 2 and B separately)", "0010 1100 (converting 2 and C separately)", "1011 0010 (reversing the nibble order)", "0011 1010 (non-standard digit conversion)"], hint: "2 | B(11).", why: "2 = 0010 and B(11) = 1011." },
        { q: "What is the binary for Denary 128?", a: "1000 0000 (only the 128-weight bit is on)", options: ["1000 0000 (only the 128-weight bit is on)", "0111 1111 (all bits below 128 are on)", "1111 1111 (all 8-bits are currently on)", "0000 0001 (only the 1-weight bit is on)"], hint: "The MSB only.", why: "128 is the exact weight of the 8th bit in a byte." },
        { q: "How many Hex digits are needed for an 8-bit byte?", a: "2 digits (each covering a 4-bit nibble)", options: ["2 digits (each covering a 4-bit nibble)", "1 digit (covering the entire 8-bit block)", "4 digits (covering 2 bits per character)", "8 digits (covering 1 bit per character)"], hint: "Half of 8.", why: "8 bits / 4 bits per hex digit = 2 hex digits." },
        { q: "Convert Denary 15 to Hexadecimal.", a: "F (the single digit representing fifteen)", options: ["F (the single digit representing fifteen)", "15 (retaining the denary format)", "E (representing the value fourteen)", "10 (representing the value sixteen)"], hint: "The last hex digit.", why: "15 is the highest value a single hex digit can represent." },
        { q: "What is the binary 0101 0101 in Denary?", a: "85 (64 + 16 + 4 + 1)", options: ["85 (64 + 16 + 4 + 1)", "42 (32 + 8 + 2)", "170 (128 + 32 + 8 + 2)", "255 (all bits set to one)"], hint: "64+16+4+1.", why: "Add the weights of the columns that contain a '1'." },
        { q: "Convert Denary 20 to Hexadecimal.", a: "14 (one sixteen and four ones)", options: ["14 (one sixteen and four ones)", "20 (retaining the denary digits)", "1A (one sixteen and ten ones)", "12 (one sixteen and two ones)"], hint: "16 + 4.", why: "20 / 16 = 1 remainder 4. So, 14." }
    ],

    "3.3.3 Units of information": [
        { q: "What is the smallest unit of data in a computer?", a: "Bit", options: ["Bit", "Byte", "Nibble", "Kilobyte"], hint: "Binary Digit.", why: "A bit is a single 0 or 1." },
        { q: "How many bits are in a Kilobyte (KB) using the standard power of 2?", a: "8000 bits (based on 1000 bytes)", options: ["8000 bits (based on 1000 bytes)", "1024 bits", "1000 bits", "8192 bits"], hint: "8 bits * 1000.", why: "Usually, 1 KB is defined as 1000 bytes for GCSE (or 1024 for Kibibytes)." },
        { q: "How many Megabytes (MB) are in 1 Gigabyte (GB)?", a: "1000", options: ["1000", "1024", "100", "500"], hint: "Prefix for billion / million.", why: "In SI units used in exams, 1000 MB = 1 GB." },
        { q: "What is the correct order of size from smallest to largest?", a: "Bit, Nibble, Byte, Kilobyte", options: ["Bit, Nibble, Byte, Kilobyte", "Bit, Byte, Nibble, Kilobyte", "Byte, Bit, Nibble, Kilobyte", "Kilobyte, Byte, Nibble, Bit"], hint: "B, N, B, K.", why: "Bit (1), Nibble (4), Byte (8)." },
        { q: "How many bits are in 2 bytes?", a: "16", options: ["16", "8", "32", "4"], hint: "2 * 8.", why: "Each byte is 8 bits." },
        { q: "Which unit is approximately 1,000,000 bytes?", a: "Megabyte (MB)", options: ["Megabyte (MB)", "Kilobyte (KB)", "Gigabyte (GB)", "Terabyte (TB)"], hint: "Million.", why: "Mega- is the prefix for one million." },
        { q: "Which unit is approximately 1,000,000,000 bytes?", a: "Gigabyte (GB)", options: ["Gigabyte (GB)", "Megabyte (MB)", "Terabyte (TB)", "Petabyte (PB)"], hint: "Billion.", why: "Giga- is the prefix for one billion." },
        { q: "How many nibbles are in 1 byte?", a: "2", options: ["2", "4", "8", "1"], hint: "Half + Half.", why: "A nibble is 4 bits; a byte is 8 bits." },
        { q: "What comes after Terabyte (TB)?", a: "Petabyte (PB)", options: ["Petabyte (PB)", "Gigabyte (GB)", "Exabyte (EB)", "Zettabyte (ZB)"], hint: "P...", why: "The sequence is KB, MB, GB, TB, PB." },
        { q: "How many bits are in a nibble?", a: "4", options: ["4", "8", "2", "16"], hint: "Half a byte.", why: "A nibble is a 4-bit aggregation." },
        { q: "1000 Kilobytes is equal to...?", a: "1 Megabyte", options: ["1 Megabyte", "1 Gigabyte", "100 bytes", "1 Terabyte"], hint: "Next unit up.", why: "1000 KB = 1 MB." },
        { q: "Why do computers use binary units?", a: "To reflect the underlying hardware logic", options: ["To reflect the underlying hardware logic", "Because it is easier to say", "To save money", "To make files smaller"], hint: "On/Off states.", why: "Computers are made of switches that understand two states." },
        { q: "What is the symbol for a bit?", a: "b (lowercase)", options: ["b (lowercase)", "B (uppercase)", "bt", "bit"], hint: "Lowercase.", why: "Lowercase 'b' is bit; uppercase 'B' is byte." },
        { q: "What is the symbol for a byte?", a: "B (uppercase)", options: ["B (uppercase)", "b (lowercase)", "BY", "byte"], hint: "Uppercase.", why: "By convention, B represents a byte." },
        { q: "A Terabyte is approximately how many Gigabytes?", a: "1000", options: ["1000", "1024", "100", "10"], hint: "Standard scale.", why: "1000 GB = 1 TB." }
    ],

    "3.3.4 Character encoding": [
        { q: "What is the primary purpose of a 'Character Set'?", a: "To map unique binary codes to specific visual symbols", options: ["To map unique binary codes to specific visual symbols", "To compress text files to reduce total storage space", "To encrypt sensitive data for secure network transfer", "To translate high-level code into machine instructions"], hint: "Encoding map.", why: "Character sets ensure computers represent text consistently using binary." },
        { q: "How many characters can standard 7-bit ASCII represent?", a: "128 (calculated as 2 to the power of 7 combinations)", options: ["128 (calculated as 2 to the power of 7 combinations)", "256 (calculated as 2 to the power of 8 combinations)", "64 (calculated as 2 to the power of 6 combinations)", "1024 (calculated as 2 to the power of 10 combinations)"], hint: "2^7.", why: "7 bits allow for 128 unique binary patterns for characters." },
        { q: "Why was 'Unicode' developed to replace ASCII?", a: "To represent characters from all global languages", options: ["To represent characters from all global languages", "To make the central processor execute text faster", "To reduce the amount of RAM needed for text storage", "To prevent logic errors occurring in string handling"], hint: "Global symbols.", why: "Unicode uses more bits (usually 16 or 32) to store thousands of characters." },
        { q: "What is a significant disadvantage of using Unicode?", a: "It requires more storage space per character than ASCII", options: ["It requires more storage space per character than ASCII", "It is unable to represent standard English characters", "It cannot be processed by modern computer hardware", "It causes the system to run out of electrical power"], hint: "File size.", why: "Because it uses 16+ bits instead of 7 or 8, file sizes increase." },
        { q: "In character sets, what is an 'Extended ASCII'?", a: "An 8-bit version representing 256 unique characters", options: ["An 8-bit version representing 256 unique characters", "A 16-bit version designed for complex Asian symbols", "A 4-bit version used for simple numerical digit storage", "A version that only functions on modern cloud servers"], hint: "8 bits.", why: "Extended ASCII added one bit to allow for 128 extra symbols." },
        { q: "How are characters ordered in a character set?", a: "In a continuous sequence based on their binary value", options: ["In a continuous sequence based on their binary value", "In a random order to improve the system security", "By the frequency of their use in the English language", "By the physical size of the character on the monitor"], hint: "A comes before B.", why: "Characters are mapped to binary values in order (e.g., A=65, B=66)." },
        { q: "What happens if a character is not in the character set?", a: "The system displays a placeholder symbol or box", options: ["The system displays a placeholder symbol or box", "The entire computer hardware will instantly crash", "The system will automatically download a new set", "The character is replaced by a random integer value"], hint: "The 'missing' symbol.", why: "If the binary code is not mapped, the computer cannot render it." },
        { q: "Which character set is a subset of Unicode?", a: "ASCII (making it compatible with older systems)", options: ["ASCII (making it compatible with older systems)", "Hexadecimal (representing base-16 numerical data)", "Binary (representing base-2 electrical signals)", "Extended ASCII (representing 256 European symbols)"], hint: "First 128 are the same.", why: "Unicode kept ASCII as its first 128 characters for compatibility." },
        { q: "What is the ASCII value of 'A' if 'B' is 66?", a: "65 (one value lower in the sequential mapping)", options: ["65 (one value lower in the sequential mapping)", "67 (one value higher in the sequential mapping)", "97 (the value used for lowercase 'a' characters)", "1 (representing the first letter of the alphabet)"], hint: "Sequential order.", why: "Character sets map letters to numbers in alphabetical order." },
        { q: "What is the ASCII value of 'b' if 'a' is 97?", a: "98 (one value higher in the sequential mapping)", options: ["98 (one value higher in the sequential mapping)", "96 (one value lower in the sequential mapping)", "66 (the value used for uppercase 'B' characters)", "2 (representing the second letter of the alphabet)"], hint: "Sequential order.", why: "Lowercase characters follow their own sequence in ASCII." },
        { q: "A 'Control Character' in ASCII is used to...?", a: "Perform an action like a line break or carriage return", options: ["Perform an action like a line break or carriage return", "Represent a mathematical digit from zero to nine", "Store a secret password for the system administrator", "Change the font style of the text on the monitor"], hint: "Non-printing characters.", why: "Control characters (0-31) tell the hardware to do something (like beep)." },
        { q: "How many bits are used by UTF-8 for basic symbols?", a: "8 bits (allowing for efficient standard text storage)", options: ["8 bits (allowing for efficient standard text storage)", "16 bits (allowing for thousands of global symbols)", "32 bits (allowing for millions of emoji characters)", "4 bits (allowing for simple numerical data storage)"], hint: "Single byte.", why: "UTF-8 is variable length but uses 8 bits for the standard set." },
        { q: "Which character set is best for emojis and symbols?", a: "Unicode (specifically the UTF-32 encoding standard)", options: ["Unicode (specifically the UTF-32 encoding standard)", "ASCII (which only supports standard English text)", "Binary (which only supports basic numerical states)", "Denary (which only supports base-10 numerical data)"], hint: "Rich symbols.", why: "Unicode's large bit-depth allows for thousands of modern symbols." },
        { q: "What is the relationship between 'A' and 'a' in ASCII?", a: "They have different binary values (separated by 32)", options: ["They have different binary values (separated by 32)", "They share the exact same binary value in memory", "They are stored in the same memory address location", "They are considered identical by the central processor"], hint: "Case sensitivity.", why: "Uppercase and lowercase have distinct codes to allow for sorting." },
        { q: "Why do we use standards like ASCII and Unicode?", a: "To ensure data can be exchanged between different systems", options: ["To ensure data can be exchanged between different systems", "To make the computer consume less electrical energy", "To prevent the user from making complex syntax errors", "To reduce the total number of bits required for binary"], hint: "Compatibility.", why: "Standards allow a file created on one PC to look the same on another." }
    ],
    "3.3.5 Representing images": [
        { q: "What is a 'Pixel' in the context of digital images?", a: "A single point of colour in a larger bitmap image", options: ["A single point of colour in a larger bitmap image", "A type of compression used for high-definition video", "The physical resolution of the computer monitor screen", "A piece of software used for professional photo editing"], hint: "Picture element.", why: "A pixel is the smallest identifiable area of a bitmap image." },
        { q: "What is 'Resolution' in digital image processing?", a: "The total number of pixels that make up the image", options: ["The total number of pixels that make up the image", "The total number of colours available for each pixel", "The physical size of the image when it is printed", "The amount of compression applied to the image file"], hint: "Width x Height.", why: "Resolution is usually measured in pixels (e.g., 1920x1080)." },
        { q: "What is 'Colour depth' (or Bit depth)?", a: "The number of bits used to represent each pixel", options: ["The number of bits used to represent each pixel", "The total number of pixels found within the image", "The speed at which the image is displayed on screen", "The amount of memory needed to store the metadata"], hint: "Number of colours.", why: "Colour depth determines how many unique colours a pixel can be." },
        { q: "How many colours can a 1-bit image represent?", a: "2 (representing only two distinct logical states)", options: ["2 (representing only two distinct logical states)", "1 (representing only a single solid colour state)", "256 (representing a standard range of grey shades)", "16 (representing a basic palette of vivid colours)"], hint: "2^1.", why: "A bit can only be 0 or 1, allowing for two colours (usually black and white)." },
        { q: "How many bits are needed for 256 unique colours?", a: "8 bits (calculated as 2 to the power of 8)", options: ["8 bits (calculated as 2 to the power of 8)", "16 bits (calculated as 2 to the power of 16)", "4 bits (calculated as 2 to the power of 4)", "256 bits (one bit for every unique colour needed)"], hint: "2 to the power of what is 256?", why: "8 bits provide 256 combinations (2^8 = 256)." },
        { q: "What is 'Metadata' in an image file?", a: "Extra data stored about the image like its resolution", options: ["Extra data stored about the image like its resolution", "The actual binary codes for the individual pixels", "The type of hardware used to display the image", "The physical height and weight of the computer"], hint: "Data about data.", why: "Metadata tells the computer how to render the pixel data correctly." },
        { q: "What happens to a bitmap image when enlarged?", a: "The image becomes pixelated as the pixels stretch", options: ["The image becomes pixelated as the pixels stretch", "The image becomes clearer as more pixels are added", "The image changes its file format into a vector", "The image file size is automatically reduced by half"], hint: "Blurry blocks.", why: "Bitmaps have a fixed resolution; stretching them makes pixels visible." },
        { q: "Which of these is a common metadata item?", a: "The date and time the photograph was captured", options: ["The date and time the photograph was captured", "The specific binary code for the first pixel", "The total number of bits found in the entire byte", "The username of the person who created the file"], hint: "File info.", why: "Metadata commonly includes date, time, location, and camera settings." },
        { q: "How do you calculate the file size of an image?", a: "Multiply width x height x colour depth (in bits)", options: ["Multiply width x height x colour depth (in bits)", "Divide width by height and multiply by resolution", "Add the width and height and multiply by metadata", "Multiply the total pixels by the speed of the CPU"], hint: "W x H x Depth.", why: "This gives the total bits required to store every pixel's colour." },
        { q: "What is the result of 24-bit 'True Colour'?", a: "Over 16 million unique colour combinations", options: ["Over 16 million unique colour combinations", "Exactly 24 different shades of primary colours", "Over 1,000 different levels of grey brightness", "Exactly 16,777,216 individual pixels in the image"], hint: "2^24.", why: "24-bit colour allows for 16.7 million colours (True Colour)." },
        { q: "Why would you reduce the resolution of an image?", a: "To decrease the file size for faster web transfer", options: ["To decrease the file size for faster web transfer", "To make the image look much clearer on the screen", "To increase the total number of colours available", "To prevent the image from being copied by others"], hint: "Smaller file.", why: "Fewer pixels mean less data, which makes the file smaller." },
        { q: "What is a 'Vector' image compared to a bitmap?", a: "An image made of mathematical paths and shapes", options: ["An image made of mathematical paths and shapes", "An image made of a grid of individual colour dots", "An image that only contains black and white pixels", "An image that is stored in a compressed binary format"], hint: "Infinite zoom.", why: "Vectors use geometry rather than pixels, so they never lose quality." },
        { q: "A 2x2 image with 2-bit depth has how many bits?", a: "8 bits (calculated as 2 x 2 x 2 bits total)", options: ["8 bits (calculated as 2 x 2 x 2 bits total)", "4 bits (calculated as 2 x 2 pixels only)", "16 bits (calculated as 2 to the power of 4)", "2 bits (the depth of the entire image structure)"], hint: "Area x Depth.", why: "4 pixels * 2 bits each = 8 bits total." },
        { q: "What colour depth is needed for 16 colours?", a: "4 bits (calculated as 2 to the power of 4)", options: ["4 bits (calculated as 2 to the power of 4)", "2 bits (calculated as 2 to the power of 2)", "8 bits (calculated as 2 to the power of 8)", "16 bits (one bit for every unique colour needed)"], hint: "2^x = 16.", why: "4 bits allow for 16 combinations (0-15)." },
        { q: "Which colour model uses Red, Green, and Blue?", a: "RGB (mixing three light colours for pixels)", options: ["RGB (mixing three light colours for pixels)", "CMYK (mixing four ink colours for printing)", "Binary (mixing two logical states for data)", "Hex (using sixteen characters for colours)"], hint: "Screen colours.", why: "Screens use RGB light to create the full spectrum of colours." }
    ],
    "3.3.6 Representing sound": [
        { q: "How is sound captured by a computer?", a: "By sampling the amplitude of the sound wave", options: ["By sampling the amplitude of the sound wave", "By measuring the total length of the audio file", "By counting the number of speakers in the system", "By calculating the physical weight of the air"], hint: "Measuring waves.", why: "Analogue sound is sampled at regular intervals to create digital data." },
        { q: "What is the 'Sample rate' in digital audio?", a: "The number of samples taken per second (Hz)", options: ["The number of samples taken per second (Hz)", "The total number of bits used for each sample", "The volume of the sound at a specific moment", "The total length of the sound recording in seconds"], hint: "Frequency.", why: "A higher sample rate means the digital sound is closer to the original." },
        { q: "What is 'Sample resolution' (or Bit depth)?", a: "The number of bits used to store each sample", options: ["The number of bits used to store each sample", "The total number of samples taken every second", "The number of audio channels used in the file", "The speed at which the sound travels through air"], hint: "Quality of each point.", why: "Bit depth determines how accurately the volume is recorded." },
        { q: "How do you calculate the file size of sound?", a: "Sample rate x resolution x time (in seconds)", options: ["Sample rate x resolution x time (in seconds)", "Sample rate divided by time and bit depth", "Frequency multiplied by the number of speakers", "Volume multiplied by the length of the hardware"], hint: "Rate x Depth x Time.", why: "This formula calculates the total bits needed for the recording." },
        { q: "What happens if you increase the sample rate?", a: "The audio quality improves and file size increases", options: ["The audio quality improves and file size increases", "The audio quality decreases and file size stays the same", "The sound plays back much faster than the original", "The sound becomes completely silent to the user"], hint: "More points.", why: "More samples capture more detail but require more storage space." },
        { q: "What is the standard unit for sample rate?", a: "Hertz (Hz) representing cycles per second", options: ["Hertz (Hz) representing cycles per second", "Pixels (Px) representing dots on the screen", "Bits (B) representing logical binary states", "Metres (M) representing the length of the wave"], hint: "Cycles per second.", why: "Hz is the standard unit for frequency and sampling rate." },
        { q: "Why is an ADC needed for sound recording?", a: "To convert Analogue waves into Digital data", options: ["To convert Analogue waves into Digital data", "To convert Digital data into Analogue waves", "To compress the audio file for network transfer", "To increase the volume of the sound recorded"], hint: "A to D.", why: "Analogue-to-Digital Converters turn air vibrations into binary." },
        { q: "Why is a DAC needed for sound playback?", a: "To convert Digital data into Analogue waves", options: ["To convert Digital data into Analogue waves", "To convert Analogue waves into Digital data", "To display the sound wave on the monitor screen", "To reduce the file size of the audio recording"], hint: "D to A.", why: "Digital-to-Analogue Converters turn binary back into vibrations." },
        { q: "Standard CD quality is usually sampled at?", a: "44,100 Hz (forty-four thousand times a second)", options: ["44,100 Hz (forty-four thousand times a second)", "1,000 Hz (one thousand times every second)", "60 Hz (sixty times every single second)", "440 Hz (representing the musical note A)"], hint: "44.1 kHz.", why: "44.1 kHz is the standard for high-fidelity audio CDs." },
        { q: "What is a 'Sample' in digital audio?", a: "A measurement of the wave's height at a point", options: ["A measurement of the wave's height at a point", "A small clip of a popular song used in music", "A piece of software used to edit audio files", "A physical microphone used to capture sound"], hint: "Amplitude snapshot.", why: "A sample captures the amplitude of the wave at that exact millisecond." },
        { q: "Higher bit depth in sound allows for...?", a: "A greater dynamic range and less noise", options: ["A greater dynamic range and less noise", "The sound to be heard from a further distance", "The sound to play back at a much higher speed", "The audio file to be compressed more efficiently"], hint: "Dynamic range.", why: "More bits mean the volume levels are recorded with more precision." },
        { q: "Sound file size: 10Hz, 8-bit, 2s. What size?", a: "160 bits (10 x 8 x 2 bits total)", options: ["160 bits (10 x 8 x 2 bits total)", "80 bits (10 x 8 bits total size)", "20 bits (10 x 2 seconds total size)", "16 bits (8 bits x 2 seconds total size)"], hint: "Multiply all three.", why: "Rate(10) * Depth(8) * Time(2) = 160." },
        { q: "What is 'Lossy' audio compression?", a: "Removing data that the human ear cannot hear", options: ["Removing data that the human ear cannot hear", "Keeping every single bit of the original data", "Increasing the total sample rate of the file", "Adding extra metadata to the audio structure"], hint: "MP3.", why: "Lossy compression (like MP3) discards sounds we don't notice." },
        { q: "What is 'Lossless' audio compression?", a: "Reducing file size without losing any data", options: ["Reducing file size without losing any data", "Deleting the original audio wave completely", "Converting the sound into a bitmap image", "Removing high-frequency sounds from the file"], hint: "FLAC.", why: "Lossless (like FLAC) allows the original to be perfectly rebuilt." },
        { q: "Which format is typically Lossy?", a: "MP3 (designed for efficient web storage)", options: ["MP3 (designed for efficient web storage)", "WAV (designed for raw audio storage)", "FLAC (designed for high-fidelity storage)", "MIDI (designed for instrument instructions)"], hint: "Smallest file.", why: "MP3 uses lossy compression to make files small enough for phones." }
    ],
    "3.3.7 Data compression": [
        { q: "What is the primary goal of data compression?", a: "To reduce file size for storage or transmission", options: ["To reduce file size for storage or transmission", "To make the central processor execute code faster", "To improve the visual quality of an image file", "To prevent a computer virus from infecting data"], hint: "Make it smaller.", why: "Compression saves disk space and makes downloads faster." },
        { q: "What is 'Lossy' compression?", a: "Permanently removing data to reduce file size", options: ["Permanently removing data to reduce file size", "Reducing file size without losing any data", "Increasing the resolution of an image file", "Adding extra metadata to a compressed file"], hint: "Quality loss.", why: "Lossy compression results in quality loss but very small files." },
        { q: "What is 'Lossless' compression?", a: "Reducing file size while keeping all original data", options: ["Reducing file size while keeping all original data", "Deleting data that the human eye cannot see", "Converting an image into a sound recording", "Making the file larger for higher quality"], hint: "Perfect rebuild.", why: "Lossless allows the original file to be perfectly reconstructed." },
        { q: "Which file type is best for Lossless compression?", a: "A database file containing financial records", options: ["A database file containing financial records", "A high-definition movie for streaming", "A photograph uploaded to a social network", "A background track for a video game"], hint: "Records must be exact.", why: "You cannot lose a single bit of text or numerical data." },
        { q: "Which file type is suitable for Lossy compression?", a: "A digital photograph or a music track", options: ["A digital photograph or a music track", "An executable programme file (.exe)", "A text document for a school report", "A zip file containing multiple projects"], hint: "Media files.", why: "Humans don't notice small losses in pixels or frequencies." },
        { q: "What is 'RLE' (Run Length Encoding)?", a: "Storing data as a value and a count", options: ["Storing data as a value and a count", "Replacing words with shorter binary codes", "Deleting the metadata from an image file", "Randomising the bits to save memory space"], hint: "AAAA becomes 4A.", why: "RLE is efficient for data with long runs of the same value." },
        { q: "Compress 'BBBBBAAA' using RLE.", a: "5B3A (indicating five Bs and three As)", options: ["5B3A (indicating five Bs and three As)", "B5A3 (indicating the value and the count)", "BA (simply listing the unique characters)", "8BA (listing the total and the values)"], hint: "Count then Value.", why: "RLE records the number of times a character repeats." },
        { q: "What is a 'Compression Ratio'?", a: "The size of the original file versus compressed", options: ["The size of the original file versus compressed", "The speed at which the file is compressed", "The number of errors found during compression", "The amount of power used during compression"], hint: "Original vs New.", why: "It measures how effective the compression has been." },
        { q: "What is 'Huffman Coding'?", a: "Using shorter codes for frequent data items", options: ["Using shorter codes for frequent data items", "Replacing all characters with 8-bit ASCII", "Removing the headers from a binary file", "Dividing the file into two identical halves"], hint: "Frequency based.", why: "Huffman trees give frequent characters short binary codes." },
        { q: "Which is a Lossless file format?", a: "PNG (supporting transparent backgrounds)", options: ["PNG (supporting transparent backgrounds)", "JPEG (supporting complex photography)", "MP3 (supporting audio recordings)", "MP4 (supporting video recordings)"], hint: "Graphics and text.", why: "PNG is a common lossless image format." },
        { q: "Which is a Lossy file format?", a: "JPEG (highly compressed photography)", options: ["JPEG (highly compressed photography)", "GIF (supporting basic animations)", "ZIP (supporting multiple file storage)", "FLAC (supporting high-fidelity audio)"], hint: "Photos.", why: "JPEG removes pixel detail to achieve small file sizes." },
        { q: "Why can't you use Lossy on a .exe file?", a: "Removing a single bit will break the code", options: ["Removing a single bit will break the code", "The file size would become too large to run", "The CPU cannot read compressed binary data", "The metadata would be lost during the process"], hint: "Execution needs precision.", why: "Software instructions must be 100% accurate to function." },
        { q: "What is the benefit of RLE for simple logos?", a: "It is very efficient for large areas of solid colour", options: ["It is very efficient for large areas of solid colour", "It allows the logo to be resized without losing quality", "It increases the total number of colours available", "It prevents the logo from being edited by others"], hint: "Solid blocks.", why: "Simple logos have many identical adjacent pixels." },
        { q: "What is a 'Dictionary' in compression?", a: "A table mapping short codes to long patterns", options: ["A table mapping short codes to long patterns", "A book used to check the spelling of the code", "A list of all variables used in the programme", "A hardware component used to store binary"], hint: "Substitution.", why: "Dictionary compression replaces repeating phrases with small indexes." },
        { q: "Why use ZIP files for email attachments?", a: "To group files and reduce total transfer time", options: ["To group files and reduce total transfer time", "To make the files unreadable to the recipient", "To increase the security of the local network", "To change the data types of the stored files"], hint: "Faster upload.", why: "ZIP uses lossless compression to shrink files for faster emailing." }
    ],
    "3.3.8 Huffman coding": [
        { q: "In Huffman Coding, which characters get the shortest codes?", a: "The characters that appear most frequently", options: ["The characters that appear most frequently", "The characters that appear at the start of text", "The characters that are capitalised in the file", "The characters with the highest ASCII values"], hint: "Save the most bits.", why: "Giving frequent characters short codes saves the most space." },
        { q: "What structure is used to generate Huffman codes?", a: "A binary tree built from frequencies", options: ["A binary tree built from frequencies", "A linear list of all possible characters", "A multidimensional array of integer values", "A record containing metadata and pixels"], hint: "A tree.", why: "A Huffman tree is built by combining the lowest frequencies." },
        { q: "Which character is likely to have code '0' in a book?", a: "The space character or the letter 'e'", options: ["The space character or the letter 'e'", "The letter 'z' or the letter 'q'", "The full stop or the comma symbol", "The first character of the first chapter"], hint: "The most common.", why: "Space and 'e' are usually the most frequent in English." },
        { q: "How do you build a Huffman tree?", a: "Combine the two nodes with the lowest frequency", options: ["Combine the two nodes with the lowest frequency", "Combine the two nodes with the highest frequency", "Add the characters in their alphabetical order", "Place all characters in a single vertical line"], hint: "Start small.", why: "Building from the bottom up ensures frequent items stay near the top." },
        { q: "In a Huffman tree, what does a left branch usually represent?", a: "A binary '0' in the character's code", options: ["A binary '0' in the character's code", "A binary '1' in the character's code", "The end of the entire character string", "An error identified within the coding tree"], hint: "0 or 1.", why: "Branches are labeled 0 and 1 to build the unique codes." },
        { q: "What is a 'Prefix-free' code?", a: "No code is the beginning of another code", options: ["No code is the beginning of another code", "All codes must start with a binary zero", "Every code must be exactly eight bits long", "Codes can only be used for numerical data"], hint: "No confusion.", why: "This ensures the computer knows exactly when one character ends." },
        { q: "If 'A' is 0, 'B' is 10, 'C' is 11. Decode '01110'.", a: "ACB (reading the bits from the tree)", options: ["ACB (reading the bits from the tree)", "ABC (reading the bits in order)", "BCA (reading the bits in reverse)", "AAA (reading only the first bit)"], hint: "0 | 11 | 10.", why: "0=A, 11=C, 10=B." },
        { q: "Why is Huffman better than 8-bit ASCII?", a: "It uses fewer total bits for the same message", options: ["It uses fewer total bits for the same message", "It is much easier for a human to read manually", "It prevents all possible data transmission errors", "It makes the computer processor run much faster"], hint: "Efficiency.", why: "By not using 8 bits for every character, it reduces file size." },
        { q: "Can two characters have the same Huffman code?", a: "No (every code in the tree must be unique)", options: ["No (every code in the tree must be unique)", "Yes (if they have the same frequency)"], hint: "Avoids confusion.", why: "Unique paths in the tree guarantee unique codes." },
        { q: "Huffman coding is an example of...?", a: "Lossless compression (data is perfectly kept)", options: ["Lossless compression (data is perfectly kept)", "Lossy compression (data is permanently lost)", "Data encryption (data is kept secret)", "Data sanitisation (data is cleaned of errors)"], hint: "Perfect reconstruction.", why: "The tree allows you to rebuild the text exactly as it was." },
        { q: "What data is needed to decode a Huffman file?", a: "The compressed bits and the Huffman tree", options: ["The compressed bits and the Huffman tree", "The original file size and the ASCII table", "The computer's name and the date of creation", "The password of the person who created it"], hint: "The map and the code.", why: "Without the specific tree used, the bits cannot be decoded." },
        { q: "Which bit length is NOT possible in Huffman?", a: "0 bits (every character must have a code)", options: ["0 bits (every character must have a code)", "1 bit (for the most frequent item)", "10 bits (for an extremely rare item)", "8 bits (matching the standard ASCII size)"], hint: "Must exist.", why: "Every character in the dataset must be represented in the tree." },
        { q: "What happens to the tree if frequencies change?", a: "The entire tree must be rebuilt for efficiency", options: ["The entire tree must be rebuilt for efficiency", "The tree remains the same regardless of data", "The tree is automatically deleted by the CPU", "The characters just swap their existing codes"], hint: "Customised for data.", why: "Huffman is most efficient when tailored to the specific file's frequencies." },
        { q: "In a tree with 4 items, what is the max code length?", a: "3 bits (in a very unbalanced tree)", options: ["3 bits (in a very unbalanced tree)", "8 bits (matching a standard binary byte)", "2 bits (calculated as 2 to the power of 2)", "4 bits (one bit for every unique character)"], hint: "Depth of the tree.", why: "An unbalanced tree with 4 nodes will have a path 3 deep." },
        { q: "Huffman coding is primarily used for?", a: "Text files and some image/audio formats", options: ["Text files and some image/audio formats", "Increasing the physical speed of the internet", "Organising the files on a secondary hard drive", "Preventing hardware failure in the central unit"], hint: "General data.", why: "It is a versatile tool used in ZIP, JPEG, and MP3 formats." }
    ],
    "3.4.1 Hardware and software": [
        { q: "What is the most accurate definition of 'Software'?", a: "The programmes and data that provide instructions for the hardware", options: ["The programmes and data that provide instructions for the hardware", "The physical internal components and circuitry of a computer system", "The electrical signals travelling through the motherboard copper tracks", "The peripheral devices used for manual input and visual data output"], hint: "Digital instructions.", why: "Software provides the logical instructions that tell the hardware what to do." },
        { q: "What is the most accurate definition of 'Hardware'?", a: "The physical components that make up a computer system", options: ["The physical components that make up a computer system", "The digital data stored within the secondary storage devices", "The set of rules governing how a programme should be written", "The invisible electrical signals processed by the control unit"], hint: "Physical parts.", why: "Hardware refers to any part of the computer you can physically touch." },
        { q: "What is the purpose of an 'Embedded System'?", a: "A computer built into a larger device for a specific task", options: ["A computer built into a larger device for a specific task", "A powerful server used to host complex websites and databases", "A desktop PC used by a person for general office productivity", "A type of software designed to protect against computer viruses"], hint: "Think of a microwave.", why: "Embedded systems are dedicated hardware/software combinations within larger machines." },
        { q: "Which of these is a characteristic of an Embedded System?", a: "They usually have a very limited and specific user interface", options: ["They usually have a very limited and specific user interface", "They allow the user to install a wide variety of new software", "They require high-performance cooling systems and large RAM", "They are designed to be upgraded frequently by the end user"], hint: "Minimal controls.", why: "Embedded systems often use simple buttons or dials rather than a full OS interface." },
        { q: "Which of these is an example of an Embedded System?", a: "An electronic control unit inside a modern washing machine", options: ["An electronic control unit inside a modern washing machine", "A laptop computer used for high-end video game development", "A cloud-based server used for storing gigabytes of user files", "A tablet device used for browsing social media and the web"], hint: "Household appliances.", why: "A washing machine has a dedicated computer for one specific purpose." },
        { q: "What is 'System Software'?", a: "Programmes designed to manage and maintain the computer", options: ["Programmes designed to manage and maintain the computer", "Programmes used by a person to complete a specific task", "The physical metal casing that protects the internal components", "The binary data stored in the BIOS of the motherboard"], hint: "Background tasks.", why: "System software (like the OS) manages the hardware and other software." },
        { q: "What is 'Application Software'?", a: "Programmes that allow users to complete specific tasks", options: ["Programmes that allow users to complete specific tasks", "Programmes that control the hardware and file management", "The electrical power supply unit that feeds the motherboard", "The collection of drivers used to communicate with printers"], hint: "User-facing tools.", why: "Apps like word processors or browsers are application software." },
        { q: "Which is a common example of System Software?", a: "A device driver used to operate a new piece of hardware", options: ["A device driver used to operate a new piece of hardware", "A spreadsheet programme used for financial calculations", "A professional photo editor used for digital manipulation", "A mobile game used for entertainment during leisure time"], hint: "Hardware manager.", why: "Drivers are system software that allow the OS to talk to hardware." },
        { q: "Which is a common example of Application Software?", a: "A web browser used to access and view online content", options: ["A web browser used to access and view online content", "A disk defragmenter used to reorder files on a drive", "A compiler used to translate source code into binary", "An operating system used to manage the system memory"], hint: "Browsing the net.", why: "Browsers are used by humans to perform the task of web surfing." },
        { q: "Embedded systems are often preferred because...?", a: "They are highly reliable and consume very little power", options: ["They are highly reliable and consume very little power", "They are much faster than a standard desktop CPU system", "They can be easily programmed to perform any general task", "They allow the user to multi-task between different apps"], hint: "Efficiency.", why: "Because they only do one job, they are optimised for reliability." },
        { q: "What is the 'Control Unit' in a processor?", a: "The part of the CPU that directs the flow of data", options: ["The part of the CPU that directs the flow of data", "The part of the CPU that performs all the mathematical logic", "The physical cable that connects the PC to the internet", "The secondary storage device where the OS is installed"], hint: "Directing traffic.", why: "The CU coordinates the fetch-decode-execute cycle." },
        { q: "Which of these is strictly a Hardware component?", a: "The motherboard that connects all internal components", options: ["The motherboard that connects all internal components", "The antivirus software that scans for malicious files", "The binary code that represents a high-definition image", "The spreadsheet file used to calculate the annual budget"], hint: "Physical board.", why: "The motherboard is the physical spine of the computer." },
        { q: "What happens when you 'Boot' a computer?", a: "The operating system is loaded into the system RAM", options: ["The operating system is loaded into the system RAM", "The hardware components are physically rearranged by code", "The user's files are permanently deleted from the disk", "The processor clock speed is doubled to increase speed"], hint: "Starting up.", why: "Booting (bootstrapping) loads the OS so the computer can function." },
        { q: "Why are some embedded systems 'Real-time'?", a: "They must respond to an input within a strict time limit", options: ["They must respond to an input within a strict time limit", "They only function during the daylight hours of the day", "They update their software every single hour of the day", "They are connected to an atomic clock for perfect timing"], hint: "Instant response.", why: "Real-time systems (like car brakes) must process data immediately." },
        { q: "Which is a characteristic of Application Software?", a: "It is designed to be interacted with directly by the user", options: ["It is designed to be interacted with directly by the user", "It manages the background tasks of the operating system", "It provides the interface for hardware device drivers", "It is built into the ROM of the computer's motherboard"], hint: "User interface.", why: "Applications are tools for the end user, unlike system utilities." }
    ],
    "3.4.2 Boolean logic": [
        { q: "Which logic gate outputs 1 only if both inputs are 1?", a: "AND gate (logical conjunction)", options: ["AND gate (logical conjunction)", "OR gate (logical disjunction)", "NOT gate (logical negation)", "XOR gate (exclusive or)"], hint: "Both must be True.", why: "AND is the logical equivalent of 'both' (A and B)." },
        { q: "Which gate outputs 1 if at least one input is 1?", a: "OR gate (logical disjunction)", options: ["OR gate (logical disjunction)", "AND gate (logical conjunction)", "NOT gate (logical negation)", "NAND gate (negated and)"], hint: "Either/Or.", why: "OR returns 1 if either A, B, or both are 1." },
        { q: "What is the function of a NOT gate?", a: "To invert the input value from a 1 to 0 or vice versa", options: ["To invert the input value from a 1 to 0 or vice versa", "To combine two binary inputs into a single output bit", "To add two numerical values together in the processor", "To store a single bit of data for a long period of time"], hint: "Inversion.", why: "NOT is a unary operator that flips the bit." },
        { q: "Which gate is shown as a triangle with a circle?", a: "NOT gate (the logical inverter symbol)", options: ["NOT gate (the logical inverter symbol)", "AND gate (the flat-backed D-shaped symbol)", "OR gate (the curved shield-shaped symbol)", "XOR gate (the double-backed curved symbol)"], hint: "One input.", why: "The triangle with a circle (the 'bubble') indicates inversion." },
        { q: "What is the result of (1 AND 0) in Boolean logic?", a: "0 (because both inputs are not set to one)", options: ["0 (because both inputs are not set to one)", "1 (because one of the inputs is set to zero)", "Error (because binary inputs must be identical)", "Null (because no logical result can be found)"], hint: "Both must be 1.", why: "AND requires all inputs to be true to output true." },
        { q: "What is the result of (0 OR 1) in Boolean logic?", a: "1 (because at least one input is set to one)", options: ["1 (because at least one input is set to one)", "0 (because both inputs are not set to one)", "Error (because binary inputs must be identical)", "Null (because no logical result can be found)"], hint: "Is any input 1?", why: "OR only needs one true input to result in true." },
        { q: "A 'Truth Table' for an AND gate has how many rows?", a: "4 (representing all combinations of two binary inputs)", options: ["4 (representing all combinations of two binary inputs)", "2 (representing only the zero and one input states)", "8 (representing all combinations of three binary inputs)", "1 (representing only the final logical result found)"], hint: "2 to the power of inputs.", why: "For 2 inputs (A, B), there are 2^2 = 4 combinations." },
        { q: "What is the output of an OR gate with inputs 0 and 0?", a: "0 (as no inputs are currently set to one)", options: ["0 (as no inputs are currently set to one)", "1 (as a standard default logical output)", "Error (as inputs cannot be identical in this gate)", "Null (as the logical circuit has failed to fire)"], hint: "Is either input 1?", why: "OR requires at least one 1; if both are 0, it outputs 0." },
        { q: "Which gate is shaped like a 'D' with a flat back?", a: "AND gate (the symbol for logical conjunction)", options: ["AND gate (the symbol for logical conjunction)", "OR gate (the symbol for logical disjunction)", "NOT gate (the symbol for logical negation)", "XOR gate (the symbol for exclusive or)"], hint: "D for AND.", why: "The AND gate has a flat back and a rounded front." },
        { q: "Which gate is shaped like a shield with a curved back?", a: "OR gate (the symbol for logical disjunction)", options: ["OR gate (the symbol for logical disjunction)", "AND gate (the symbol for logical conjunction)", "NOT gate (the symbol for logical negation)", "XOR gate (the symbol for exclusive or)"], hint: "Curved shield.", why: "The OR gate symbol features a curved input side." },
        { q: "What is the output of NOT(1)?", a: "0 (the logical inverse of the input)", options: ["0 (the logical inverse of the input)", "1 (the identical copy of the input)", "Error (as NOT requires two binary inputs)", "Null (as the logical inverter has failed)"], hint: "Flip it.", why: "NOT 1 is 0." },
        { q: "What is the output of NOT(0)?", a: "1 (the logical inverse of the input)", options: ["1 (the logical inverse of the input)", "0 (the identical copy of the input)", "Error (as NOT requires two binary inputs)", "Null (as the logical inverter has failed)"], hint: "Flip it.", why: "NOT 0 is 1." },
        { q: "In a circuit with AND and OR, which is processed first?", a: "The AND gate (it has a higher logical precedence)", options: ["The AND gate (it has a higher logical precedence)", "The OR gate (it has a higher logical precedence)", "The gate positioned furthest to the left in code", "The gate positioned furthest to the right in code"], hint: "Like BIDMAS.", why: "In Boolean algebra, AND takes priority over OR." },
        { q: "A 'NAND' gate is a combination of which two gates?", a: "An AND gate followed immediately by a NOT gate", options: ["An AND gate followed immediately by a NOT gate", "An OR gate followed immediately by a NOT gate", "Two AND gates connected in a parallel sequence", "Two NOT gates connected in a serial sequence"], hint: "Not AND.", why: "NAND is literally 'Not AND'." },
        { q: "How many 1s are in the output of an AND truth table?", a: "1 (only the row where both A and B are one)", options: ["1 (only the row where both A and B are one)", "3 (every row except where both A and B are zero)", "2 (the rows where at least one input is set to one)", "0 (if the logical conjunction fails to resolve)"], hint: "Strict requirement.", why: "Only 1-1 results in 1 for an AND gate." }
    ],
    "3.4.3 Software classification": [
        { q: "What is the primary role of an Operating System (OS)?", a: "To manage the hardware and provide a user interface", options: ["To manage the hardware and provide a user interface", "To provide a professional tool for editing photographs", "To store high-definition video files on the hard drive", "To protect the system from physical damage or theft"], hint: "The boss of the PC.", why: "The OS handles memory, hardware, and the interface we see." },
        { q: "Which of these is a function of the Operating System?", a: "Managing the system memory and processor scheduling", options: ["Managing the system memory and processor scheduling", "Writing a professional letter to a business contact", "Creating a high-scoring spreadsheet for accounts", "Editing a long video for a social media platform"], hint: "Background management.", why: "Memory management and multitasking are core OS tasks." },
        { q: "What is 'Utility Software'?", a: "Programmes that perform specific maintenance tasks", options: ["Programmes that perform specific maintenance tasks", "Programmes used to create digital art and animations", "The hardware components that provide electrical power", "The high-level code used to build complex websites"], hint: "Maintenance tools.", why: "Utilities (like antivirus) help maintain the computer." },
        { q: "Which of these is an example of a Utility programme?", a: "Disk Defragmenter (reorganising files for speed)", options: ["Disk Defragmenter (reorganising files for speed)", "Microsoft Word (creating text documents for school)", "Google Chrome (browsing the world wide web)", "Windows 10 (the main operating system of the PC)"], hint: "Disk maintenance.", why: "A defragmenter is a utility that optimises the hard drive." },
        { q: "What is the difference between OS and Utilities?", a: "OS is essential for use; Utilities are for maintenance", options: ["OS is essential for use; Utilities are for maintenance", "Utilities are essential; the OS is purely optional", "The OS is hardware; Utilities are strictly software", "The OS is for gaming; Utilities are for office work"], hint: "Need vs Maintenance.", why: "You can't use a PC without an OS, but you can without a defragmenter." },
        { q: "Which utility is used to reduce the size of a file?", a: "Compression software (making files easier to send)", options: ["Compression software (making files easier to send)", "Antivirus software (scanning for malicious code)", "Encryption software (making files secure and secret)", "Backup software (creating copies of important data)"], hint: "Zip files.", why: "Compression utilities shrink data to save space." },
        { q: "Which utility is used to secure data with a key?", a: "Encryption software (making data unreadable)", options: ["Encryption software (making data unreadable)", "Compression software (making data smaller in size)", "Antivirus software (identifying malicious code)", "Defragmentation software (reordering disk files)"], hint: "Keeping secrets.", why: "Encryption utilities scramble data so only those with a key can read it." },
        { q: "Why is 'Defragmentation' needed on a Hard Disk?", a: "To group file parts together for faster access", options: ["To group file parts together for faster access", "To delete all files that are no longer being used", "To scan the system for viruses and malicious code", "To prevent the computer from overheating during use"], hint: "Organising the drive.", why: "Defragmenting moves file fragments to adjacent blocks on the platter." },
        { q: "What is an 'Operating System Kernel'?", a: "The core part of the OS that manages hardware", options: ["The core part of the OS that manages hardware", "The visual interface that the user interacts with", "The hardware casing that protects the motherboard", "The battery unit that provides power to the laptop"], hint: "The heart.", why: "The kernel is the lowest level of the OS, managing the CPU and RAM." },
        { q: "What is 'Multitasking' in an Operating System?", a: "The ability to run multiple programmes at once", options: ["The ability to run multiple programmes at once", "The ability to connect several monitors to one PC", "The ability to store files on multiple hard drives", "The ability for two users to use one mouse at once"], hint: "Many apps.", why: "The OS cycles the CPU between tasks so they seem to run simultaneously." },
        { q: "What is 'GUI'?", a: "Graphical User Interface (using icons and windows)", options: ["Graphical User Interface (using icons and windows)", "General Utility Interface (using maintenance tools)", "Global Unit Identity (using unique serial numbers)", "Grand User Interaction (using advanced logic gates)"], hint: "Windows and Icons.", why: "A GUI uses visual elements rather than just text commands." },
        { q: "What is a 'CLI'?", a: "Command Line Interface (using text commands only)", options: ["Command Line Interface (using text commands only)", "Central Logic Identity (using binary state codes)", "Complex Loop Iteration (using repeating code)", "Clear Local Interaction (using simple hardware)"], hint: "Typing text.", why: "A CLI requires the user to type specific text instructions." },
        { q: "Why do experts often prefer a CLI over a GUI?", a: "It is faster and more powerful for advanced tasks", options: ["It is faster and more powerful for advanced tasks", "It is much easier for a beginner to understand", "It uses more colours and icons on the screen", "It automatically fixes all syntax errors in code"], hint: "Power and speed.", why: "Command lines allow for complex scripting and automation." },
        { q: "Which utility makes an identical copy of data?", a: "Backup software (protecting against data loss)", options: ["Backup software (protecting against data loss)", "Encryption software (protecting against theft)", "Compression software (protecting against size)", "Antivirus software (protecting against infection)"], hint: "Extra copies.", why: "Backup utilities create copies in case of hardware failure." },
        { q: "What is 'WIMP' in the context of a GUI?", a: "Windows, Icons, Menus, and Pointers", options: ["Windows, Icons, Menus, and Pointers", "Words, Images, Music, and Programmes", "Websites, Internet, Media, and Protocols", "Wires, Inputs, Motherboards, and Processors"], hint: "Standard desktop elements.", why: "WIMP describes the four main elements of a modern GUI." }
    ],
    "3.4.3 Software classification": [
        { q: "What is the primary role of an Operating System (OS)?", a: "To manage the hardware and provide a user interface", options: ["To manage the hardware and provide a user interface", "To provide a professional tool for editing photographs", "To store high-definition video files on the hard drive", "To protect the system from physical damage or theft"], hint: "The boss of the PC.", why: "The OS handles memory, hardware, and the interface we see." },
        { q: "Which of these is a function of the Operating System?", a: "Managing the system memory and processor scheduling", options: ["Managing the system memory and processor scheduling", "Writing a professional letter to a business contact", "Creating a high-scoring spreadsheet for accounts", "Editing a long video for a social media platform"], hint: "Background management.", why: "Memory management and multitasking are core OS tasks." },
        { q: "What is 'Utility Software'?", a: "Programmes that perform specific maintenance tasks", options: ["Programmes that perform specific maintenance tasks", "Programmes used to create digital art and animations", "The hardware components that provide electrical power", "The high-level code used to build complex websites"], hint: "Maintenance tools.", why: "Utilities (like antivirus) help maintain the computer." },
        { q: "Which of these is an example of a Utility programme?", a: "Disk Defragmenter (reorganising files for speed)", options: ["Disk Defragmenter (reorganising files for speed)", "Microsoft Word (creating text documents for school)", "Google Chrome (browsing the world wide web)", "Windows 10 (the main operating system of the PC)"], hint: "Disk maintenance.", why: "A defragmenter is a utility that optimises the hard drive." },
        { q: "What is the difference between OS and Utilities?", a: "OS is essential for use; Utilities are for maintenance", options: ["OS is essential for use; Utilities are for maintenance", "Utilities are essential; the OS is purely optional", "The OS is hardware; Utilities are strictly software", "The OS is for gaming; Utilities are for office work"], hint: "Need vs Maintenance.", why: "You can't use a PC without an OS, but you can without a defragmenter." },
        { q: "Which utility is used to reduce the size of a file?", a: "Compression software (making files easier to send)", options: ["Compression software (making files easier to send)", "Antivirus software (scanning for malicious code)", "Encryption software (making files secure and secret)", "Backup software (creating copies of important data)"], hint: "Zip files.", why: "Compression utilities shrink data to save space." },
        { q: "Which utility is used to secure data with a key?", a: "Encryption software (making data unreadable)", options: ["Encryption software (making data unreadable)", "Compression software (making data smaller in size)", "Antivirus software (identifying malicious code)", "Defragmentation software (reordering disk files)"], hint: "Keeping secrets.", why: "Encryption utilities scramble data so only those with a key can read it." },
        { q: "Why is 'Defragmentation' needed on a Hard Disk?", a: "To group file parts together for faster access", options: ["To group file parts together for faster access", "To delete all files that are no longer being used", "To scan the system for viruses and malicious code", "To prevent the computer from overheating during use"], hint: "Organising the drive.", why: "Defragmenting moves file fragments to adjacent blocks on the platter." },
        { q: "What is an 'Operating System Kernel'?", a: "The core part of the OS that manages hardware", options: ["The core part of the OS that manages hardware", "The visual interface that the user interacts with", "The hardware casing that protects the motherboard", "The battery unit that provides power to the laptop"], hint: "The heart.", why: "The kernel is the lowest level of the OS, managing the CPU and RAM." },
        { q: "What is 'Multitasking' in an Operating System?", a: "The ability to run multiple programmes at once", options: ["The ability to run multiple programmes at once", "The ability to connect several monitors to one PC", "The ability to store files on multiple hard drives", "The ability for two users to use one mouse at once"], hint: "Many apps.", why: "The OS cycles the CPU between tasks so they seem to run simultaneously." },
        { q: "What is 'GUI'?", a: "Graphical User Interface (using icons and windows)", options: ["Graphical User Interface (using icons and windows)", "General Utility Interface (using maintenance tools)", "Global Unit Identity (using unique serial numbers)", "Grand User Interaction (using advanced logic gates)"], hint: "Windows and Icons.", why: "A GUI uses visual elements rather than just text commands." },
        { q: "What is a 'CLI'?", a: "Command Line Interface (using text commands only)", options: ["Command Line Interface (using text commands only)", "Central Logic Identity (using binary state codes)", "Complex Loop Iteration (using repeating code)", "Clear Local Interaction (using simple hardware)"], hint: "Typing text.", why: "A CLI requires the user to type specific text instructions." },
        { q: "Why do experts often prefer a CLI over a GUI?", a: "It is faster and more powerful for advanced tasks", options: ["It is faster and more powerful for advanced tasks", "It is much easier for a beginner to understand", "It uses more colours and icons on the screen", "It automatically fixes all syntax errors in code"], hint: "Power and speed.", why: "Command lines allow for complex scripting and automation." },
        { q: "Which utility makes an identical copy of data?", a: "Backup software (protecting against data loss)", options: ["Backup software (protecting against data loss)", "Encryption software (protecting against theft)", "Compression software (protecting against size)", "Antivirus software (protecting against infection)"], hint: "Extra copies.", why: "Backup utilities create copies in case of hardware failure." },
        { q: "What is 'WIMP' in the context of a GUI?", a: "Windows, Icons, Menus, and Pointers", options: ["Windows, Icons, Menus, and Pointers", "Words, Images, Music, and Programmes", "Websites, Internet, Media, and Protocols", "Wires, Inputs, Motherboards, and Processors"], hint: "Standard desktop elements.", why: "WIMP describes the four main elements of a modern GUI." }
    ],
    "3.4.5 Memory and storage": [
        { q: "What is the main difference between RAM and ROM?", a: "RAM is volatile (lost at power-off); ROM is not", options: ["RAM is volatile (lost at power-off); ROM is not", "ROM is volatile (lost at power-off); RAM is not", "RAM is permanent storage; ROM is temporary", "RAM is much slower than ROM during execution"], hint: "Power loss.", why: "RAM is temporary working memory; ROM is permanent (non-volatile)." },
        { q: "What does 'Volatile' mean in computing?", a: "Data is lost when the power is turned off", options: ["Data is lost when the power is turned off", "Data is encrypted and cannot be read by others", "Data is compressed to save space on the disk", "Data is sent over a network at very high speeds"], hint: "Temporary.", why: "Volatile memory (like RAM) needs electricity to keep its data." },
        { q: "What is usually stored in the ROM?", a: "The BIOS and the computer's start-up instructions", options: ["The BIOS and the computer's start-up instructions", "The user's personal documents and photographs", "The high-definition videos and music files", "The operating system and installed applications"], hint: "Boot instructions.", why: "ROM contains the 'firmware' needed to start the computer." },
        { q: "What is the purpose of 'Virtual Memory'?", a: "Using the hard drive as temporary RAM when full", options: ["Using the hard drive as temporary RAM when full", "Creating a digital copy of the entire computer online", "A type of memory that only stores binary zeros", "A physical hardware component that replaces the CPU"], hint: "Emergency RAM.", why: "When RAM is full, the OS moves inactive data to a part of the disk." },
        { q: "Why is secondary storage needed?", a: "To store data permanently when the power is off", options: ["To store data permanently when the power is off", "To make the central processor run at higher speeds", "To provide a high-speed link to the internet bus", "To prevent the motherboard from overheating"], hint: "Non-volatile.", why: "We need disks/SD cards to save files for the next time we turn on the PC." },
        { q: "What is 'Magnetic' storage?", a: "Storage using spinning platters and magnets", options: ["Storage using spinning platters and magnets", "Storage using flashes of light from a laser beam", "Storage using electronic circuits with no moving parts", "Storage using physical holes punched into paper"], hint: "Hard Disk Drive.", why: "HDDs use magnetic particles on spinning disks to store bits." },
        { q: "What is 'Optical' storage?", a: "Storage using lasers to read pits and lands", options: ["Storage using lasers to read pits and lands", "Storage using magnetised needles and metal disks", "Storage using high-speed transistors and chips", "Storage using a network connection to a server"], hint: "CDs and DVDs.", why: "Optical drives use light to read reflections from a disk surface." },
        { q: "What is 'Solid State' (SSD) storage?", a: "Storage using electronic flash memory chips", options: ["Storage using electronic flash memory chips", "Storage using spinning glass disks and lasers", "Storage using large magnets and moving metal arms", "Storage using a remote cloud-based file system"], hint: "No moving parts.", why: "SSDs use transistors (flash memory), making them very fast and durable." },
        { q: "Which storage is best for a portable device?", a: "Solid State (due to durability and no moving parts)", options: ["Solid State (due to durability and no moving parts)", "Magnetic (due to the very high storage capacity)", "Optical (due to the low cost of the media disks)", "Cloud (due to the infinite storage available)"], hint: "Tough and small.", why: "SSDs don't break when shaken, unlike spinning hard drives." },
        { q: "Which storage is generally the cheapest per GB?", a: "Magnetic (HDDs provide high capacity for less)", options: ["Magnetic (HDDs provide high capacity for less)", "Solid State (SSDs provide speed for high cost)", "Optical (CDs provide very low storage capacity)", "RAM (providing high speed for the highest cost)"], hint: "Traditional hard drives.", why: "HDDs are currently the most cost-effective for large amounts of data." },
        { q: "How many bytes are in a Kilobyte (KB)?", a: "1000 bytes (standard SI decimal unit)", options: ["1000 bytes (standard SI decimal unit)", "1024 bytes (binary equivalent unit)", "100 bytes (centigrade decimal unit)", "8 bytes (the number of bits in a byte)"], hint: "1000.", why: "In modern exams, KB is 1000; KiB is 1024." },
        { q: "Place these in order: MB, KB, GB, TB.", a: "KB, MB, GB, TB", options: ["KB, MB, GB, TB", "TB, GB, MB, KB", "MB, KB, TB, GB", "GB, TB, KB, MB"], hint: "Smallest to largest.", why: "Kilo, Mega, Giga, Tera is the standard order of magnitude." },
        { q: "What is the main disadvantage of Optical storage?", a: "Low capacity and they are easily scratched", options: ["Low capacity and they are easily scratched", "They are extremely expensive to manufacture", "They use a lot of power and get very hot", "They are too fast for most computers to use"], hint: "Fragile disks.", why: "CDs/DVDs don't hold much data and break easily." },
        { q: "What is 'Cloud Storage'?", a: "Storing files on remote servers over the internet", options: ["Storing files on remote servers over the internet", "Storing files on a local SSD inside the laptop", "Storing files on a magnetic disk using a laser", "Storing files inside the CPU's cache memory"], hint: "Online storage.", why: "Cloud storage is just someone else's server accessed via the web." },
        { q: "Which has the fastest access speed?", a: "CPU Cache (located directly on the processor)", options: ["CPU Cache (located directly on the processor)", "System RAM (located on the motherboard)", "Solid State Drive (located in the casing)", "Magnetic Hard Drive (connected via a cable)"], hint: "Closest to the brain.", why: "Cache is the fastest, followed by RAM, then SSD, then HDD." }
    ],
    "3.5.1 Network topologies": [
        { q: "What is the primary definition of a computer 'Network'?", a: "Two or more computers connected together to share resources", options: ["Two or more computers connected together to share resources", "A single powerful computer used for complex mathematical tasks", "A collection of software programmes used to manage system files", "A physical hardware casing used to protect the central processor"], hint: "Connection for sharing.", why: "Networks allow for the exchange of data and sharing of peripherals like printers." },
        { q: "What is a 'Local Area Network' (LAN)?", a: "A network covering a small geographical area like a single building", options: ["A network covering a small geographical area like a single building", "A network connecting multiple cities across a large country", "A global collection of interconnected networks like the Internet", "A wireless connection between a smartphone and a pair of headphones"], hint: "Think of a school or home.", why: "LANs are confined to a small site, often owned by one person or organisation." },
        { q: "What is a 'Wide Area Network' (WAN)?", a: "A network connecting multiple sites over a large geographical area", options: ["A network connecting multiple sites over a large geographical area", "A network that only connects devices within a single small room", "A network that uses only high-speed fibre optic cables for data", "A network designed specifically for household smart appliances"], hint: "Think of the Internet.", why: "WANs connect LANs across cities or countries, often using third-party infrastructure." },
        { q: "Which topology connects all devices to a central switch?", a: "Star topology (where every cable runs to a middle hub)", options: ["Star topology (where every cable runs to a middle hub)", "Bus topology (where all devices share a single main cable)", "Ring topology (where data travels in a circle between PCs)", "Mesh topology (where every device connects to every other one)"], hint: "A central point.", why: "In a star topology, the switch manages all data traffic to the devices." },
        { q: "What is an advantage of the Star topology?", a: "The failure of one cable does not affect the rest of the network", options: ["The failure of one cable does not affect the rest of the network", "It is the cheapest topology to install due to minimal cabling", "It does not require a central switch or hub to manage the data", "It is impossible for a hacker to gain access to the central hub"], hint: "Reliability.", why: "Because each device has its own line, others stay online if one fails." },
        { q: "What is a 'Full Mesh' topology?", a: "A network where every device is connected to every other device", options: ["A network where every device is connected to every other device", "A network that uses a single cable with terminators at each end", "A network where data must pass through a central server only", "A network designed to be used only by wireless mobile devices"], hint: "Total interconnection.", why: "Mesh networks provide multiple paths for data, making them very robust." },
        { q: "What is a disadvantage of a Full Mesh topology?", a: "It is very expensive and difficult to install the cabling", options: ["It is very expensive and difficult to install the cabling", "The entire network fails if any single device is turned off", "Data collisions are very frequent on the shared main cable", "It is much slower than a standard Star or Bus network setup"], hint: "Lots of wires.", why: "The number of connections required grows rapidly as you add more devices." },
        { q: "What is a 'Partial Mesh' topology?", a: "A network where some, but not all, devices are interconnected", options: ["A network where some, but not all, devices are interconnected", "A network that is currently being repaired by a technician", "A network that only uses wireless signals for data transfer", "A network where every device is connected to a central hub"], hint: "A compromise.", why: "Partial mesh provides some redundancy without the extreme cost of full mesh." },
        { q: "Which device is used to connect a LAN to the Internet?", a: "Router (directing data packets between different networks)", options: ["Router (directing data packets between different networks)", "Switch (connecting multiple devices within a single local LAN)", "Hub (broadcasting data to every device connected to the port)", "Server (storing all the files and applications for the users)"], hint: "Gateway device.", why: "Routers forward data packets between different networks (e.g., home to ISP)." },
        { q: "What is the role of a 'Switch' in a Star network?", a: "To send data only to the specific device it is intended for", options: ["To send data only to the specific device it is intended for", "To broadcast data to every single device on the network", "To connect the local network to a wide area network site", "To provide a physical security barrier against system hackers"], hint: "Intelligent hub.", why: "Switches use MAC addresses to ensure data reaches the correct destination." },
        { q: "Which topology used a 'backbone' cable with terminators?", a: "Bus topology (where all devices share one communication line)", options: ["Bus topology (where all devices share one communication line)", "Star topology (where devices connect to a central point)", "Ring topology (where devices are connected in a loop)", "Mesh topology (where devices are all interconnected)"], hint: "A single line.", why: "A bus topology uses one central cable; terminators stop signals reflecting." },
        { q: "What is a disadvantage of a Bus topology?", a: "If the main backbone cable fails, the whole network goes down", options: ["If the main backbone cable fails, the whole network goes down", "It requires a very expensive central switch to function", "It uses the most amount of cabling of any network type", "Data can only travel in one direction around the circle"], hint: "Single point of failure.", why: "The backbone is critical; if it breaks, no devices can communicate." },
        { q: "Why are wireless networks (WLANs) popular?", a: "They allow for easy mobility and are cheaper to install", options: ["They allow for easy mobility and are cheaper to install", "They are much faster and more secure than wired networks", "They are not affected by physical walls or interference", "They do not require a router or a switch to function"], hint: "No wires.", why: "WLANs use radio waves, avoiding the need for expensive physical cabling." },
        { q: "What is 'Bandwidth'?", a: "The maximum amount of data that can be sent in a given time", options: ["The maximum amount of data that can be sent in a given time", "The physical width of the cables used in the local network", "The total number of devices currently connected to the hub", "The speed at which the central processor executes its code"], hint: "Network capacity.", why: "Bandwidth measures how much data the 'pipe' can handle (e.g., Mbps)." },
        { q: "What is a 'Network Interface Controller' (NIC)?", a: "Hardware that allows a computer to connect to a network", options: ["Hardware that allows a computer to connect to a network", "Software that manages the start-up of the operating system", "A type of logic gate used to combine two binary inputs", "A secondary storage device used for permanent data backup"], hint: "Every PC needs one.", why: "The NIC provides the physical and electrical connection to the network." }
    ],
    "3.5.2 Protocols and layers": [
        { q: "What is a 'Network Protocol'?", a: "A set of rules for how data is transmitted across a network", options: ["A set of rules for how data is transmitted across a network", "A type of hardware used to connect a PC to the internet", "A software programme used to encrypt user text documents", "A specific type of high-speed fibre optic network cable"], hint: "The rules of communication.", why: "Protocols ensure that different devices can understand each other." },
        { q: "Which protocol is used for sending and receiving emails?", a: "SMTP (used for sending) and IMAP (used for receiving)", options: ["SMTP (used for sending) and IMAP (used for receiving)", "HTTP (used for viewing) and FTP (used for downloading)", "TCP (used for packets) and IP (used for addressing)", "MAC (used for hardware) and NIC (used for connecting)"], hint: "Mail protocols.", why: "SMTP pushes mail to servers; IMAP allows you to manage it on the server." },
        { q: "What does 'HTTP' stand for?", a: "Hypertext Transfer Protocol (used for accessing web pages)", options: ["Hypertext Transfer Protocol (used for accessing web pages)", "High Tone Transfer Process (used for audio recordings)", "Hard Text Transition Protocol (used for file encryption)", "Hyper Text Total Processor (used for system software)"], hint: "Web browser protocol.", why: "HTTP is the foundation of data exchange on the World Wide Web." },
        { q: "What is the difference between HTTP and HTTPS?", a: "HTTPS is encrypted and secure; HTTP is not encrypted", options: ["HTTPS is encrypted and secure; HTTP is not encrypted", "HTTP is faster for downloading large video and image files", "HTTPS is only used for internal local area network sites", "HTTP requires a password to access any of its content"], hint: "S stands for Secure.", why: "HTTPS uses SSL/TLS to encrypt data sent between the browser and server." },
        { q: "What is the purpose of 'TCP' (Transmission Control Protocol)?", a: "To break data into packets and ensure they are delivered", options: ["To break data into packets and ensure they are delivered", "To assign a unique geographical address to every computer", "To translate web domain names into numerical IP addresses", "To manage the physical connection between the NIC and cable"], hint: "Packet management.", why: "TCP handles error checking and reassembling packets in the correct order." },
        { q: "What is the purpose of the 'IP' (Internet Protocol)?", a: "To route data packets to the correct destination address", options: ["To route data packets to the correct destination address", "To establish a secure encrypted link between two devices", "To provide a set of rules for transferring large files", "To manage the hardware signals sent over a wireless link"], hint: "Addressing.", why: "IP is responsible for addressing and routing packets across the internet." },
        { q: "What is a 'Layer' in the context of network protocols?", a: "A group of related protocols that perform a specific task", options: ["A group of related protocols that perform a specific task", "A physical sheet of plastic used to protect network cables", "A type of security software that blocks unauthorised access", "A specific frequency used for high-speed wireless data"], hint: "TCP/IP Stack.", why: "Layering breaks down communication into manageable, independent parts." },
        { q: "What is an advantage of using Layers?", a: "Changes can be made to one layer without affecting others", options: ["Changes can be made to one layer without affecting others", "It makes the network run at significantly higher speeds", "It prevents all types of hardware failure from occurring", "It reduces the total number of bits needed for binary data"], hint: "Modular design.", why: "Layering allows developers to focus on one part of the stack at a time." },
        { q: "Which protocol is used to retrieve files from a server?", a: "FTP (File Transfer Protocol)", options: ["FTP (File Transfer Protocol)", "HTTP (Hypertext Transfer Protocol)", "SMTP (Simple Mail Transfer Protocol)", "POP (Post Office Protocol)"], hint: "File transfer.", why: "FTP is specifically designed for uploading and downloading files." },
        { q: "What is the 'Application Layer' responsible for?", a: "Providing network services to software applications", options: ["Providing network services to software applications", "Breaking data into packets for transmission across wires", "Managing the physical electrical signals sent over cables", "Routing data packets to their final geographical address"], hint: "Top layer (HTTP/FTP).", why: "This is the layer users interact with via browsers or email clients." },
        { q: "What is a 'MAC Address'?", a: "A unique hardware address built into every network card", options: ["A unique hardware address built into every network card", "A temporary numerical address assigned by the internet", "A set of rules used to compress high-definition video", "A type of software used to manage the system memory"], hint: "Physical address.", why: "MAC addresses are permanent and unique to the NIC (Media Access Control)." },
        { q: "What is the difference between MAC and IP addresses?", a: "MAC is permanent hardware; IP is temporary and logical", options: ["MAC is permanent hardware; IP is temporary and logical", "IP is permanent hardware; MAC is temporary and logical", "MAC is for wireless; IP is for wired connections only", "IP is for small files; MAC is for large data transfers"], hint: "Physical vs Logical.", why: "MAC identifies the device; IP identifies its current location on a network." },
        { q: "What is the 'Link Layer' responsible for?", a: "Passing data over the physical network hardware", options: ["Passing data over the physical network hardware", "Identifying the logical address of the destination PC", "Handling the end-to-end communication and error checks", "Allowing the user to interact with the web browser app"], hint: "Bottom layer.", why: "The Link layer deals with NICs and cables (the physical medium)." },
        { q: "Which protocol is used to automatically assign IP addresses?", a: "DHCP (Dynamic Host Configuration Protocol)", options: ["DHCP (Dynamic Host Configuration Protocol)", "DNS (Domain Name System)", "TCP (Transmission Control Protocol)", "IMAP (Internet Message Access Protocol)"], hint: "Automatic IPs.", why: "DHCP saves time by assigning IP addresses to devices as they join." },
        { q: "What is 'DNS' (Domain Name System)?", a: "Translating web domain names into numerical IP addresses", options: ["Translating web domain names into numerical IP addresses", "A type of hardware used to boost wireless signal range", "A security protocol used to encrypt sensitive user data", "A method for compressing text files to save disk space"], hint: "The internet's phonebook.", why: "DNS lets humans use names (google.com) instead of numbers (142.250.x.x)." }
    ],
    "3.6.1 Fundamentals of cyber security": [
        { q: "What is the primary definition of 'Cyber Security'?", a: "Processes and controls designed to protect systems and data", options: ["Processes and controls designed to protect systems and data", "A type of hardware used to increase the speed of the internet", "The physical casing used to protect the central processor unit", "A programme used to organise and delete old user documents"], hint: "Protection of digital assets.", why: "Cyber security encompasses all measures taken to protect against digital attacks." },
        { q: "What does the 'C' stand for in the CIA triad?", a: "Confidentiality (ensuring only authorised users see data)", options: ["Confidentiality (ensuring only authorised users see data)", "Calculation (ensuring the processor performs math correctly)", "Connection (ensuring the network stays online and active)", "Compression (ensuring the file size is as small as possible)"], hint: "Secret data.", why: "Confidentiality ensures that sensitive information is not disclosed to unauthorised individuals." },
        { q: "What does the 'I' stand for in the CIA triad?", a: "Integrity (ensuring data is accurate and not tampered with)", options: ["Integrity (ensuring data is accurate and not tampered with)", "Iteration (ensuring the code repeats for a specific count)", "Input (ensuring the user provides the correct data type)", "Interface (ensuring the graphics look attractive to the user)"], hint: "Accuracy of data.", why: "Integrity guarantees that information is reliable and has not been maliciously changed." },
        { q: "What does the 'A' stand for in the CIA triad?", a: "Availability (ensuring systems are accessible when needed)", options: ["Availability (ensuring systems are accessible when needed)", "Authentication (ensuring the user has the correct password)", "Assignment (ensuring the variable has a valid data value)", "Abstraction (ensuring unnecessary details are removed)"], hint: "Access to systems.", why: "Availability ensures that systems and data are ready for use by authorised parties." },
        { q: "Why is 'Cyber Security' essential for modern businesses?", a: "To prevent financial loss and protect the company reputation", options: ["To prevent financial loss and protect the company reputation", "To make the central processor run at much higher speeds", "To allow the user to install any type of software for free", "To reduce the amount of electrical power used by the server"], hint: "Business protection.", why: "Cyber attacks can lead to massive fines, lawsuits, and loss of customer trust." },
        { q: "What is 'White-box' penetration testing?", a: "Testing where the hacker has full knowledge of the system", options: ["Testing where the hacker has full knowledge of the system", "Testing where the hacker has no prior knowledge of the system", "Testing that only focuses on the physical security of the site", "Testing that is performed only by the original programmer"], hint: "Internal view.", why: "White-box testing simulates an attack by an insider or someone with documentation." },
        { q: "What is 'Black-box' penetration testing?", a: "Testing where the hacker has no prior knowledge of the system", options: ["Testing where the hacker has no prior knowledge of the system", "Testing where the hacker has full access to the source code", "Testing that is only performed during the night-time hours", "Testing that only scans the hardware for physical defects"], hint: "External view.", why: "Black-box testing simulates an external attack where the hacker knows nothing initially." },
        { q: "What is the goal of 'Penetration Testing'?", a: "To identify and fix security vulnerabilities in a system", options: ["To identify and fix security vulnerabilities in a system", "To increase the total storage capacity of the hard drive", "To allow the user to bypass the standard login screen", "To make the operating system look more modern and sleek"], hint: "Ethical hacking.", why: "Pen-testing finds weaknesses before real hackers can exploit them." },
        { q: "A 'Shoulder Surfing' attack involves...?", a: "Physically watching someone enter their secret credentials", options: ["Physically watching someone enter their secret credentials", "Sending a malicious email to thousands of random users", "Remotely accessing a computer through a network port", "Guessing a common password like '12345' or 'password'"], hint: "Looking over someone's shoulder.", why: "This is a physical form of social engineering used to steal PINs or passwords." },
        { q: "What is the purpose of 'Cyber Security' laws?", a: "To provide a legal framework for prosecuting digital crime", options: ["To provide a legal framework for prosecuting digital crime", "To force every citizen to use a specific type of hardware", "To make the internet free for everyone around the world", "To prevent companies from making any profit from software"], hint: "Legal protection.", why: "Laws like the Computer Misuse Act make unauthorised access a criminal offence." },
        { q: "What is 'Social Engineering'?", a: "Manipulating people into giving up sensitive information", options: ["Manipulating people into giving up sensitive information", "Building a hardware connection between two server sites", "Writing a complex algorithm to sort a large dataset", "Using a mathematical formula to encrypt a text document"], hint: "Human hacking.", why: "Social engineering targets human psychology rather than technical flaws." },
        { q: "Which of these is a 'Physical' security measure?", a: "Using biometric locks or CCTV cameras on the premises", options: ["Using biometric locks or CCTV cameras on the premises", "Installing a software firewall to block network traffic", "Encrypting all user files stored on the primary hard drive", "Requiring a complex password for the administrator login"], hint: "Real-world locks.", why: "Physical security prevents unauthorised people from reaching the hardware." },
        { q: "Why is 'Staff Training' important for cyber security?", a: "To help employees recognise and avoid phishing attempts", options: ["To help employees recognise and avoid phishing attempts", "To teach employees how to fix broken hardware components", "To allow employees to write their own operating systems", "To ensure employees can type at a very high speed per minute"], hint: "Awareness.", why: "Humans are often the weakest link; training helps them spot scams." },
        { q: "What is a 'Vulnerability' in a system?", a: "A weakness that could be exploited by a cyber threat", options: ["A weakness that could be exploited by a cyber threat", "A type of high-speed cable used for network connections", "A software programme used to back up important user data", "A hardware component that increases the system memory"], hint: "A gap in the wall.", why: "Vulnerabilities can be unpatched software, weak passwords, or lack of firewalls." },
        { q: "What is a 'Cyber Threat'?", a: "A potential event that could damage or steal digital data", options: ["A potential event that could damage or steal digital data", "A type of hardware that has become outdated and slow", "A software update that improves the system performance", "A user who has forgotten their own complex password"], hint: "The danger itself.", why: "Threats include hackers, malware, and even accidental data deletion." }
    ],
    "3.6.2.1 Social engineering": [
        { q: "What is 'Phishing' in social engineering?", a: "A deceptive email designed to steal user credentials", options: ["A deceptive email designed to steal user credentials", "A phone call where the hacker pretends to be an expert", "A physical attack where the hacker steals a hard drive", "A software virus that encrypts all the files on the disk"], hint: "Fake emails.", why: "Phishing relies on the user clicking a link or providing data via email." },
        { q: "What is 'Blagging' (or Pretexting)?", a: "Creating a fake scenario to trick someone into giving data", options: ["Creating a fake scenario to trick someone into giving data", "Trying every possible password until the correct one is found", "Overloading a network server so that it crashes for users", "Using a script to redirect a user to a malicious website"], hint: "Lying to get info.", why: "Blagging involves inventing a story (e.g., 'I am from IT support') to get info." },
        { q: "What is 'Shoulder Surfing'?", a: "Looking over a person's shoulder to see their PIN or password", options: ["Looking over a person's shoulder to see their PIN or password", "Sending a malicious email to a large group of people", "Using a computer to guess passwords at high speeds", "Inserting code into a database to steal user records"], hint: "Physical spying.", why: "It is a simple but effective way to steal secrets in public places." },
        { q: "What is 'Baiting' in social engineering?", a: "Leaving an infected USB drive for someone to find and use", options: ["Leaving an infected USB drive for someone to find and use", "Sending a fake invoice to a company to get them to pay", "Calling a user and pretending to be a helpful bank clerk", "Writing a malicious script that runs inside a web browser"], hint: "A physical 'lure'.", why: "Baiting exploits curiosity; a person finds a USB and plugs it in." },
        { q: "What is 'Quid Pro Quo' in social engineering?", a: "Offering a service or prize in exchange for information", options: ["Offering a service or prize in exchange for information", "Watching a person enter their secret code at an ATM", "Using a dictionary of words to guess a user's password", "Redirecting a user to a fake version of a popular website"], hint: "Something for something.", why: "A hacker might offer 'technical support' in exchange for a login." },
        { q: "How can you identify a Phishing email?", a: "Check for poor grammar and urgent, threatening language", options: ["Check for poor grammar and urgent, threatening language", "Check if the email was sent during the morning hours", "Check if the email contains any images or attachments", "Check if the email is addressed to your correct name"], hint: "Sense of urgency.", why: "Phishing often uses panic ('Account suspended!') to make people act fast." },
        { q: "What is 'Spear Phishing'?", a: "A targeted phishing attack aimed at a specific person", options: ["A targeted phishing attack aimed at a specific person", "A phishing attack that uses a malicious telephone call", "A phishing attack that targets every user on the internet", "A phishing attack that is performed by a computer virus"], hint: "Specific target.", why: "Spear phishing uses personal details to make the scam more believable." },
        { q: "What is 'Vishing'?", a: "A phishing attack that is carried out over the telephone", options: ["A phishing attack that is carried out over the telephone", "A phishing attack that uses a high-definition video file", "A phishing attack that targets the central processor unit", "A phishing attack that involves physical shoulder surfing"], hint: "Voice Phishing.", why: "Vishing (Voice Phishing) involves a caller pretending to be from a bank or IT." },
        { q: "Why is 'Human Curiosity' a risk in social engineering?", a: "It leads people to click links or open unknown files", options: ["It leads people to click links or open unknown files", "It makes the computer hardware run much slower over time", "It prevents the software from being updated automatically", "It causes the system to run out of memory during a task"], hint: "Curiosity kills the cat.", why: "Hackers use enticing subject lines or 'free' offers to bait users." },
        { q: "What is 'Tailgating'?", a: "Following an authorised person into a restricted area", options: ["Following an authorised person into a restricted area", "Looking at someone's screen while they are working", "Sending a malicious email to everyone in an office", "Trying to guess a password using common birthdays"], hint: "Entering a building.", why: "A physical social engineering technique to gain access to a site." },
        { q: "Which of these helps prevent social engineering?", a: "Regular staff training and a strong 'Security Culture'", options: ["Regular staff training and a strong 'Security Culture'", "Installing a faster processor and more system memory", "Using a high-definition monitor to see the screen better", "Buying a new keyboard that is harder for others to see"], hint: "Education.", why: "Awareness is the best defence against psychological manipulation." },
        { q: "What should you do if you receive a suspicious email?", a: "Delete it and report it to the IT department immediately", options: ["Delete it and report it to the IT department immediately", "Click the link to see if the website looks dangerous", "Reply to the sender to ask them to stop sending emails", "Forward it to all your friends to warn them of the scam"], hint: "Don't touch it.", why: "Never interact with suspicious content; report it so others are safe." },
        { q: "What is 'Pretexting'?", a: "Using a made-up story to gain trust and information", options: ["Using a made-up story to gain trust and information", "Using a powerful computer to break a secret encryption", "Using a software firewall to monitor the network traffic", "Using a biometric scanner to verify the identity of a user"], hint: "The story before the hit.", why: "Pretexting creates a plausible reason for the hacker to ask for data." },
        { q: "Is Social Engineering a 'Technical' attack?", a: "No, it is a psychological attack on the human user", options: ["No, it is a psychological attack on the human user", "Yes, it targets the binary logic of the central processor"], hint: "Think people vs machines.", why: "Social engineering exploits human error, not code vulnerabilities." },
        { q: "Why do hackers use 'Authority' in social engineering?", a: "People are more likely to obey someone in a high position", options: ["People are more likely to obey someone in a high position", "People are more likely to ignore an email from a manager", "It allows the hacker to bypass the software firewall", "It makes the malicious code run faster on the computer"], hint: "Respect for leaders.", why: "Pretending to be a CEO or 'Police' makes victims more compliant." }
    ],

    "3.6.2.2 Malicious code (malware)": [
        { q: "What is a 'Computer Virus'?", a: "Malware that attaches to a file and needs a user to run it", options: ["Malware that attaches to a file and needs a user to run it", "Malware that can spread by itself across a network", "Hardware that has physically broken due to old age", "A type of software used to protect against cyber attacks"], hint: "Needs a host.", why: "Viruses require human action (like opening an attachment) to spread." },
        { q: "What is a 'Computer Worm'?", a: "Malware that can self-replicate and spread across networks", options: ["Malware that can self-replicate and spread across networks", "Malware that hides inside a useful-looking programme", "Hardware that consumes too much electrical energy", "A deceptive email designed to steal a user's password"], hint: "Self-spreading.", why: "Worms don't need a host file; they spread automatically via networks." },
        { q: "What is a 'Trojan Horse'?", a: "Malware disguised as legitimate or useful software", options: ["Malware disguised as legitimate or useful software", "Malware that encrypts files and demands a payment", "A physical device used to intercept network data", "A type of software used to compress large image files"], hint: "Deceptive gift.", why: "Trojans look like games or tools but contain hidden malicious code." },
        { q: "What is 'Ransomware'?", a: "Malware that encrypts files and demands money for a key", options: ["Malware that encrypts files and demands money for a key", "Malware that records every single keypress by the user", "A hardware component used to store binary data permanently", "A deceptive email that tricks a user into giving a PIN"], hint: "Paying for your files.", why: "Ransomware locks your data until you pay a fee (usually in Bitcoin)." },
        { q: "What is 'Spyware'?", a: "Malware that secretly monitors and records user activity", options: ["Malware that secretly monitors and records user activity", "Malware that deletes the operating system from the disk", "A hardware device used to speed up the central processor", "A type of software used to back up important documents"], hint: "Watching you.", why: "Spyware steals info like passwords or browsing habits without you knowing." },
        { q: "What is an 'Adware' programme?", a: "Malware that forces unwanted advertisements on the user", options: ["Malware that forces unwanted advertisements on the user", "Malware that prevents the user from accessing the internet", "A software tool used to create professional digital art", "A hardware component used to display high-quality video"], hint: "Annoying pop-ups.", why: "Adware generates revenue for hackers by showing intrusive ads." },
        { q: "What is a 'Keylogger'?", a: "Malware that records every keystroke made on a keyboard", options: ["Malware that records every keystroke made on a keyboard", "Malware that prevents the computer from starting up", "A physical lock used to secure a computer to a desk", "A type of software used to count the words in a file"], hint: "Stealing passwords.", why: "Keyloggers are often used to steal passwords as you type them." },
        { q: "What is 'Rootkit' malware?", a: "Malware that gives a hacker full control over the system", options: ["Malware that gives a hacker full control over the system", "Malware that only affects the root folder of the drive", "A hardware device used to connect a PC to the internet", "A type of software used to format a new hard disk drive"], hint: "Admin access.", why: "Rootkits allow hackers to hide their presence and stay in control." },
        { q: "How does a 'Worm' typically spread?", a: "By exploiting vulnerabilities in network protocols", options: ["By exploiting vulnerabilities in network protocols", "By a user manually copying the file onto a USB drive", "By a user opening a malicious attachment in an email", "By a hacker physically entering the server room site"], hint: "Automatic network travel.", why: "Worms travel through network 'holes' without human help." },
        { q: "What is a 'Logic Bomb'?", a: "Malware that triggers when a specific condition is met", options: ["Malware that triggers when a specific condition is met", "Malware that causes the computer to physically explode", "A software tool used to calculate complex math logic", "A hardware component used to process binary signals"], hint: "Timed attack.", why: "A logic bomb might trigger on a certain date or when a file is deleted." },
        { q: "What is 'Botnet' malware?", a: "Malware that turns a computer into a remotely controlled zombie", options: ["Malware that turns a computer into a remotely controlled zombie", "Malware that increases the storage space of the hard drive", "A type of software used to manage a local area network", "A hardware device used to boost the wireless signal range"], hint: "Network of robots.", why: "Botnets are used to launch massive DDoS attacks or send spam." },
        { q: "Which of these is a sign of a Malware infection?", a: "The computer runs slowly and shows unexpected pop-ups", options: ["The computer runs slowly and shows unexpected pop-ups", "The monitor displays a high-definition image very clearly", "The keyboard allows the user to type at a very fast speed", "The battery of the laptop lasts much longer than before"], hint: "Strange behaviour.", why: "Slowness, crashes, and pop-ups are classic signs of malware." },
        { q: "How can you prevent a 'Virus' infection?", a: "Using up-to-date antivirus software and being cautious", options: ["Using up-to-date antivirus software and being cautious", "Buying a new computer every single month for security", "Removing the battery from the laptop when not in use", "Using a high-quality cable for the internet connection"], hint: "Antivirus.", why: "Antivirus scans files for known signatures of malicious code." },
        { q: "What is 'Scareware'?", a: "Malware that tricks users into thinking they have a virus", options: ["Malware that tricks users into thinking they have a virus", "Malware that causes the screen to turn off permanently", "A hardware device that makes a loud noise when moved", "A type of software used to edit scary movie soundtracks"], hint: "Fake warnings.", why: "Scareware uses fake pop-ups to trick you into buying 'repair' software." },
        { q: "Can malware affect a smartphone?", a: "Yes (it can be infected through apps or malicious links)", options: ["Yes (it can be infected through apps or malicious links)", "No (malware only affects desktop or laptop computers)"], hint: "Phones are computers too.", why: "Smartphones run software and are connected to the internet, making them targets." }
    ],

    "3.6.3 Methods to detect and prevent": [
        { q: "What is the role of 'Antivirus' software?", a: "To scan files for known malicious code signatures", options: ["To scan files for known malicious code signatures", "To prevent unauthorised people from entering the building", "To encrypt all user files so they remain secret and safe", "To speed up the central processor by deleting large files"], hint: "Scanning and cleaning.", why: "Antivirus identifies and removes malware before it can do harm." },
        { q: "What is a 'Firewall'?", a: "Software or hardware that monitors network traffic", options: ["Software or hardware that monitors network traffic", "A physical wall made of fire-resistant material in a lab", "A type of software used to compress large image files", "A hardware component used to store binary data units"], hint: "Filtering traffic.", why: "Firewalls block unauthorised incoming and outgoing network data." },
        { q: "What is 'Encryption'?", a: "Scrambling data using a key so it cannot be read", options: ["Scrambling data using a key so it cannot be read", "Making a file smaller so that it is faster to download", "Checking if an input value is within a specific range", "Creating a copy of data in case the original is lost"], hint: "Keeping it secret.", why: "Encryption ensures that intercepted data is useless to a hacker." },
        { q: "What is 'User Authentication'?", a: "Verifying the identity of a user before granting access", options: ["Verifying the identity of a user before granting access", "Deleting a user's account once they have finished work", "Creating a new password for every single day of the week", "Allowing any person to use the computer without a login"], hint: "Who are you?", why: "Authentication (like passwords or biometrics) ensures only authorised access." },
        { q: "Which of these is 'Multi-factor Authentication' (MFA)?", a: "Requiring a password and a code sent to a phone", options: ["Requiring a password and a code sent to a phone", "Requiring a very long password with many special symbols", "Requiring a user to change their password every month", "Requiring a user to enter their password two times"], hint: "Two or more steps.", why: "MFA adds an extra layer of security beyond just a password." },
        { q: "What is a 'Biometric' security measure?", a: "Using unique physical traits like fingerprints for access", options: ["Using unique physical traits like fingerprints for access", "Using a complex numerical PIN for the entry gate", "Using a physical plastic key to open the server room", "Using a software password that is very hard to guess"], hint: "Your body is the key.", why: "Biometrics (face, iris, fingerprints) are hard to forge or steal." },
        { q: "What is the purpose of 'Automatic Updates'?", a: "To ensure security holes are fixed as soon as possible", options: ["To ensure security holes are fixed as soon as possible", "To make the software look more attractive to the user", "To reduce the amount of memory used by the programme", "To prevent the user from making any more syntax errors"], hint: "Patching holes.", why: "Updates contain 'patches' for vulnerabilities that hackers might use." },
        { q: "What is 'MAC Address Filtering'?", a: "Only allowing specific hardware devices onto a network", options: ["Only allowing specific hardware devices onto a network", "Blocking any website that has 'MAC' in the domain name", "Encrypting the data sent between the NIC and the router", "Changing the IP address of a computer every single hour"], hint: "Device control.", why: "Filters allow you to list the exact devices allowed on your Wi-Fi." },
        { q: "What is 'Input Sanitisation'?", a: "Cleaning user input of harmful characters or code", options: ["Cleaning user input of harmful characters or code", "Ensuring the user has typed their name in capital letters", "Deleting the input variable as soon as it has been used", "Printing the input value to the monitor for the user"], hint: "Safe forms.", why: "Sanitisation helps prevent attacks like SQL Injection." },
        { q: "Why is 'Staff Training' a security measure?", a: "Educated staff are less likely to fall for social engineering", options: ["Educated staff are less likely to fall for social engineering", "Educated staff can fix their own hardware if it breaks", "Educated staff can write their own complex algorithms", "Educated staff can type much faster on the keyboard"], hint: "People power.", why: "Training helps staff recognise phishing, vishing, and other scams." },
        { q: "What is an 'Access Control List' (ACL)?", a: "A list of which users have permission to see files", options: ["A list of which users have permission to see files", "A list of all the hardware components in the system", "A list of all the syntax errors found in the source code", "A list of the websites a user has visited in a day"], hint: "Permissions.", why: "ACLs define who can read, write, or delete specific data." },
        { q: "What is a 'Physical' security prevention method?", a: "Locking the server room door and using security guards", options: ["Locking the server room door and using security guards", "Installing the latest version of the antivirus software", "Using a 256-bit encryption key for all stored data", "Setting a complex 12-character password for the OS"], hint: "Real-world locks.", why: "Physical security stops thieves from touching or stealing the server." },
        { q: "What is 'Data Backup'?", a: "Making a copy of data to recover it after a loss", options: ["Making a copy of data to recover it after a loss", "Making data smaller so it takes up less space on disk", "Making data secret so that nobody else can read it", "Making data execute faster on the central processor"], hint: "Safety net.", why: "Backups are essential for recovery from ransomware or hardware failure." },
        { q: "Why use 'Penetration Testing' for prevention?", a: "To find weaknesses before an actual hacker does", options: ["To find weaknesses before an actual hacker does", "To increase the physical clock speed of the processor", "To make the operating system more user-friendly", "To allow the system to store more files on the drive"], hint: "Proactive testing.", why: "Ethical hackers try to break in to show the owner where to fix gaps." },
        { q: "What is 'Whitelisting' in security?", a: "Allowing only approved programmes or users access", options: ["Allowing only approved programmes or users access", "Blocking specific websites that are known to be safe", "Deleting all files that are not written in English", "Adding extra metadata to a compressed binary file"], hint: "Permission only.", why: "Whitelisting is safer than blacklisting because it blocks everything by default." }
    ],
    "3.7.1 Relational databases": [
        { q: "What is the primary definition of a 'Relational Database'?", a: "A collection of data tables linked together by common fields", options: ["A collection of data tables linked together by common fields", "A single large text file containing unorganised numerical data", "A hardware component used to store high-speed binary signals", "A software programme used to encrypt sensitive user documents"], hint: "Linked tables.", why: "Relational databases use keys to connect data across different tables." },
        { q: "What is a 'Primary Key' in a database table?", a: "A unique identifier for every individual record in a table", options: ["A unique identifier for every individual record in a table", "A field that contains the most important data in the record", "A secondary storage device used to back up the database file", "A password used to prevent unauthorised users from viewing data"], hint: "Unique ID.", why: "A primary key ensures that every row in a table can be uniquely identified." },
        { q: "What is a 'Foreign Key'?", a: "A primary key from one table used in another to link them", options: ["A primary key from one table used in another to link them", "A secret code used to access a database over a wide network", "A field that contains data written in a foreign human language", "A type of hardware used to connect the database to the internet"], hint: "The link between tables.", why: "Foreign keys create the relationship between two separate tables." },
        { q: "What is a 'Record' in the context of a database?", a: "A single row containing all data about one specific entity", options: ["A single row containing all data about one specific entity", "A single column containing one type of data for all users", "The name given to the entire collection of tables in a file", "The physical hardware disk where the database is stored"], hint: "A row.", why: "A record (or row) represents a single item, like a student or a product." },
        { q: "What is a 'Field' in the context of a database?", a: "A single column representing one specific category of data", options: ["A single column representing one specific category of data", "A collection of multiple records grouped together in a list", "The unique name of the person who created the database file", "The software used to perform a search within the data tables"], hint: "A column.", why: "Fields define the attributes of the records, such as 'Surname' or 'Price'." },
        { q: "What is 'Referential Integrity'?", a: "Ensuring that foreign keys always point to valid primary keys", options: ["Ensuring that foreign keys always point to valid primary keys", "Ensuring that the database is encrypted using a secret key", "Ensuring that every field in the table contains numerical data", "Ensuring that the database file is smaller than one megabyte"], hint: "Consistent links.", why: "Referential integrity prevents 'orphaned' records that point to non-existent data." },
        { q: "Which of these is a 'One-to-Many' relationship?", a: "One customer having many different individual orders", options: ["One customer having many different individual orders", "One person having one unique national insurance number", "One student being taught by one specific private tutor", "Many authors writing many different books for a library"], hint: "1 to Many.", why: "A single entity (customer) can relate to multiple entries (orders) in another table." },
        { q: "What is the purpose of 'Data Redundancy'?", a: "Repeating the same data unnecessarily in multiple places", options: ["Repeating the same data unnecessarily in multiple places", "Creating a backup copy of the data in case of hardware failure", "Organising the data into a logical and sequential numerical order", "Identifying and fixing logic errors found within the database"], hint: "Wasted space.", why: "Redundancy is generally avoided as it wastes space and causes consistency issues." },
        { q: "What is 'Data Normalisation'?", a: "The process of organising a database to reduce redundancy", options: ["The process of organising a database to reduce redundancy", "The process of converting all numerical data into binary code", "The process of scanning the database for malicious software", "The process of uploading the database to a remote web server"], hint: "Organising efficiently.", why: "Normalisation involves splitting tables to ensure data is stored only once." },
        { q: "Why use a Relational Database over a Flat File?", a: "It is easier to update data and prevents inconsistencies", options: ["It is easier to update data and prevents inconsistencies", "It is much simpler for a novice to create and maintain manually", "It requires significantly less system memory to run the software", "It does not require the use of any primary or foreign keys"], hint: "Avoids 'Flat' problems.", why: "Relational databases are more efficient for complex, linked data sets." },
        { q: "What is a 'Flat File' database?", a: "A single table that stores all data in one large block", options: ["A single table that stores all data in one large block", "A database that is stored on a very thin secondary disk", "A database that only contains two-dimensional image files", "A database that has been compressed to save storage space"], hint: "One single table.", why: "Flat files are simple but lead to redundancy in complex systems." },
        { q: "Which field would be the best Primary Key for a student?", a: "A unique Student ID number assigned by the school", options: ["A unique Student ID number assigned by the school", "The student's first name and their middle initial", "The student's date of birth and their current home address", "The student's predicted grade for their computer science exam"], hint: "Must be unique.", why: "Names and dates can be identical; an ID is guaranteed to be unique." },
        { q: "What does 'DBMS' stand for?", a: "Database Management System (the software that runs it)", options: ["Database Management System (the software that runs it)", "Data Binary Modification Speed (the processing rate)", "Digital Backup Memory Storage (the hardware capacity)", "Direct Business Messaging Service (the communication tool)"], hint: "The software controller.", why: "A DBMS (like MySQL or Access) is the software used to interact with the database." },
        { q: "What is 'Data Consistency'?", a: "Ensuring that data is the same across all related tables", options: ["Ensuring that data is the same across all related tables", "Ensuring that the database remains at a fixed physical size", "Ensuring that the database is accessible only during the day", "Ensuring that every record is written in the same language"], hint: "No conflicting info.", why: "If a name changes in one table, it should be correct in all linked tables." },
        { q: "What is a 'Compound Key'?", a: "A primary key made up of two or more combined fields", options: ["A primary key made up of two or more combined fields", "A key used to encrypt the entire database for security", "A key that connects the database to a remote cloud server", "A key that is used to sort the data in descending order"], hint: "Joined keys.", why: "Compound keys are used when no single field can uniquely identify a record." }
    ],

    "3.7.2 Structured query language (SQL)": [
        { q: "What is the purpose of the 'SELECT' command?", a: "To specify which fields you want to retrieve from a table", options: ["To specify which fields you want to retrieve from a table", "To delete a specific record from the database permanently", "To create a brand new table with a unique primary key", "To update an existing record with a new data value"], hint: "Picking columns.", why: "SELECT defines the columns that will appear in your results." },
        { q: "What is the purpose of the 'FROM' command?", a: "To specify which table the data should be retrieved from", options: ["To specify which table the data should be retrieved from", "To specify the condition that the data must meet to show", "To specify the order in which the results should be sorted", "To specify the name of the user who is performing the search"], hint: "Identifying the table.", why: "FROM tells the database which table to look into." },
        { q: "What is the purpose of the 'WHERE' command?", a: "To filter records based on a specific logical condition", options: ["To filter records based on a specific logical condition", "To select all the fields within a specific database table", "To join two separate tables using a common foreign key", "To change the name of a field within an existing record"], hint: "Filtering rows.", why: "WHERE allows you to only see data that matches your criteria." },
        { q: "What does the '*' symbol mean in a SELECT statement?", a: "Retrieve every single field from the specified table", options: ["Retrieve every single field from the specified table", "Multiply two numerical fields together in the results", "Search for records that contain a specific text string", "Delete the entire contents of the specified database table"], hint: "Select all.", why: "SELECT * is a wildcard meaning 'all columns'." },
        { q: "Which SQL command is used to add a new record?", a: "INSERT INTO (adding a new row of data to the table)", options: ["INSERT INTO (adding a new row of data to the table)", "UPDATE (modifying data that is already in the table)", "CREATE TABLE (defining a new structure for the data)", "SELECT (retrieving data from the existing records)"], hint: "Adding data.", why: "INSERT INTO adds a new row to a table." },
        { q: "Which command is used to modify existing data?", a: "UPDATE (changing values within an existing record)", options: ["UPDATE (changing values within an existing record)", "INSERT INTO (adding a new row of data to the table)", "DELETE (removing a specific record from the database)", "WHERE (filtering the results based on a condition)"], hint: "Editing data.", why: "UPDATE is used to change data that is already stored." },
        { q: "Which command is used to remove a record?", a: "DELETE FROM (removing a row based on a condition)", options: ["DELETE FROM (removing a row based on a condition)", "DROP TABLE (removing the entire table structure)", "REMOVE (a non-standard command for deleting data)", "CLEAR (a non-standard command for emptying a table)"], hint: "Removing rows.", why: "DELETE FROM is used with WHERE to remove specific rows." },
        { q: "How do you sort results in SQL?", a: "ORDER BY (followed by ASC or DESC for direction)", options: ["ORDER BY (followed by ASC or DESC for direction)", "SORT BY (followed by the name of the field to use)", "ARRANGE (followed by the numerical index of the field)", "GROUP BY (followed by the category of the data items)"], hint: "Ordering.", why: "ORDER BY sorts the output of your query." },
        { q: "What is 'ASC' and 'DESC' in SQL?", a: "Ascending (A-Z) and Descending (Z-A) sort orders", options: ["Ascending (A-Z) and Descending (Z-A) sort orders", "Ascribed and Described metadata for the search query", "Alternative and Default conditions for the WHERE clause", "Advanced and Simple commands for the database search"], hint: "Sort directions.", why: "These keywords define the direction of the ORDER BY command." },
        { q: "Which operator is used for 'Not Equal to' in most SQL?", a: "<> (or sometimes != depending on the specific system)", options: ["<> (or sometimes != depending on the specific system)", "== (used for comparing two identical values)", "NOT (used for inverting a logical boolean state)", "!! (used for expressing an urgent command to the CPU)"], hint: "Diamond operator.", why: "<> is the traditional SQL operator for inequality." },
        { q: "What is the purpose of the 'LIKE' operator?", a: "To search for a specific pattern within a text field", options: ["To search for a specific pattern within a text field", "To compare two numerical values for exact equality", "To join two different tables using a primary key link", "To increase the speed of the search across the network"], hint: "Pattern matching.", why: "LIKE is often used with wildcards to find partial text matches." },
        { q: "What is the '%' wildcard used for with LIKE?", a: "To represent any number of characters in a pattern", options: ["To represent any number of characters in a pattern", "To calculate a percentage of the total numerical values", "To find the remainder of a division operation in a query", "To hide the data from users who do not have a password"], hint: "Wildcard symbol.", why: "In SQL, '%' matches any sequence of characters." },
        { q: "Which SQL command is used to create a new table?", a: "CREATE TABLE (defining the fields and data types)", options: ["CREATE TABLE (defining the fields and data types)", "NEW TABLE (a non-standard command for structures)", "INSERT INTO (adding data to an existing structure)", "SELECT (retrieving data from an existing table)"], hint: "Building the table.", why: "CREATE TABLE defines the schema (columns and types) for new data." },
        { q: "Which keyword combines multiple WHERE conditions?", a: "AND / OR (logical operators for complex filters)", options: ["AND / OR (logical operators for complex filters)", "PLUS / MINUS (arithmetic operators for calculations)", "JOIN / LINK (relational operators for connecting tables)", "BOTH / EITHER (non-standard keywords for logic)"], hint: "Logic in filters.", why: "Just like in programming, AND/OR combine boolean logic in SQL." },
        { q: "Write a query to find students with over 90 marks.", a: "SELECT * FROM Students WHERE marks > 90", options: ["SELECT * FROM Students WHERE marks > 90", "FIND Students WHERE marks ARE GREATER THAN 90", "SELECT marks FROM Students IF marks > 90", "SEARCH Students FOR marks > 90"], hint: "SELECT, FROM, WHERE.", why: "This follows the standard SQL syntax for a filtered search." }
    ],
    "3.8 Ethical & Legal": [
        { q: "What is the 'Computer Misuse Act' concerned with?", a: "Unauthorised access to computer systems and data", options: ["Unauthorised access to computer systems and data", "The protection of personal data held by organisations", "The recycling and disposal of old hardware components", "The health and safety of employees using computers"], hint: "Hacking and viruses.", why: "This law makes hacking and creating malware illegal in the UK." },
        { q: "What is the 'Data Protection Act' concerned with?", a: "How organisations collect and use personal information", options: ["How organisations collect and use personal information", "The prevention of unauthorised access by computer hackers", "The intellectual property rights of software developers", "The environmental impact of manufacturing new hardware"], hint: "Personal data rights.", why: "This law ensures personal data is handled fairly and securely." },
        { q: "What is the 'Copyright, Designs and Patents Act'?", a: "Protecting the intellectual property of creators", options: ["Protecting the intellectual property of creators", "Protecting the privacy of individuals on the internet", "Protecting the environment from electronic waste", "Protecting the government from cyber security threats"], hint: "Illegal copying.", why: "This law makes it illegal to copy software or music without permission." },
        { q: "Which law requires data to be kept accurate and up-to-date?", a: "The Data Protection Act (GDPR principles)", options: ["The Data Protection Act (GDPR principles)", "The Computer Misuse Act (anti-hacking rules)", "The Freedom of Information Act (public access rules)", "The Health and Safety at Work Act (office rules)"], hint: "Keeping info correct.", why: "Organisations must ensure the data they hold on you is not wrong." },
        { q: "What is the 'Freedom of Information Act'?", a: "Allowing the public to request data from authorities", options: ["Allowing the public to request data from authorities", "Allowing users to download any software for free online", "Allowing hackers to access systems for testing purposes", "Allowing companies to sell user data to third parties"], hint: "Public data access.", why: "This act allows citizens to see data held by public bodies like the NHS." },
        { q: "What is 'Electronic Waste' (e-waste)?", a: "Discarded electrical or electronic devices and parts", options: ["Discarded electrical or electronic devices and parts", "The unwanted emails and spam received by a user", "The binary data that is no longer needed by a programme", "The heat generated by a processor during a complex task"], hint: "Broken hardware disposal.", why: "E-waste is a major environmental issue due to toxic chemicals in components." },
        { q: "What is the 'Digital Divide'?", a: "The gap between those with and without internet access", options: ["The gap between those with and without internet access", "The difference between binary and hexadecimal numbers", "The physical distance between two networked computers", "The split between the hardware and software departments"], hint: "Access to technology.", why: "Wealth and location can determine who has access to life-changing tech." },
        { q: "What is an 'Ethical' issue in computer science?", a: "A question of what is right or wrong, beyond the law", options: ["A question of what is right or wrong, beyond the law", "A technical problem that causes the system to crash", "A legal requirement to pay for the software you use", "A physical fault in the wiring of the local network"], hint: "Moral choices.", why: "Ethics involve the moral impact of technology on society." },
        { q: "What is a 'Legal' issue in computer science?", a: "An action that breaks a specific law or regulation", options: ["An action that breaks a specific law or regulation", "An action that is considered rude by other internet users", "An action that makes the computer run slower than usual", "An action that involves using an outdated operating system"], hint: "Breaking the law.", why: "Legal issues lead to fines or imprisonment if laws are broken." },
        { q: "What are the environmental impacts of data centres?", a: "High electricity consumption and the need for cooling", options: ["High electricity consumption and the need for cooling", "The production of large amounts of unwanted paper waste", "The noise pollution caused by the spinning hard drives", "The physical space taken up by the network cables"], hint: "Energy and heat.", why: "Servers run 24/7 and generate massive heat, requiring huge power." },
        { q: "What is 'Proprietary Software'?", a: "Software where the source code is kept secret", options: ["Software where the source code is kept secret", "Software that is free to download and edit by anyone", "Software that is used only by the government and police", "Software that has been designed for embedded systems"], hint: "Closed source.", why: "Companies like Microsoft own the code and you cannot see or change it." },
        { q: "What is 'Open Source Software'?", a: "Software where the source code is freely available", options: ["Software where the source code is freely available", "Software that requires a monthly subscription fee", "Software that only runs on high-end gaming computers", "Software that is used to create secret encrypted files"], hint: "Free to edit.", why: "Open source (like Linux) allows anyone to inspect and improve the code." },
        { q: "What is 'Stalking' or 'Harassment' online called?", a: "Cyberbullying (using technology to upset others)", options: ["Cyberbullying (using technology to upset others)", "Phishing (using technology to steal from others)", "Hacking (using technology to access other systems)", "Farming (using technology to redirect other users)"], hint: "Online abuse.", why: "Technology can be misused to target and hurt individuals." },
        { q: "Why is 'Privacy' a concern with smartphones?", a: "They track your location and collect personal data", options: ["They track your location and collect personal data", "They are too small to have a complex security password", "They use a lot of battery power to stay connected", "They are easily broken if they are dropped on the floor"], hint: "Always-on tracking.", why: "Smartphones collect vast amounts of data that can be sold or stolen." },
        { q: "What is the impact of automation on jobs?", a: "Some roles are replaced by robots and software", options: ["Some roles are replaced by robots and software", "Every person is required to work more hours per day", "The cost of living increases due to expensive hardware", "The internet becomes slower due to automated traffic"], hint: "Robots taking jobs.", why: "Automation can lead to job losses in manufacturing and administration." }
    ],
};

// --- STATE MANAGEMENT ---
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let isTestMode = false;
let currentStreak = 0;
let totalXP = 0;
let userLevel = 1;
const XP_PER_LEVEL = 1000;

// Boss Mode State
let isBossMode = false;
let bossHP = 100;
let bossMaxHP = 100;
let currentDifficulty = 'EASY';
let timeWhenQuestionStarted = 0;
let totalStartTime = 0;
let totalWrongAnswers = 0;

// Wall State
let currentWallItems = [];
let selectedTiles = [];
let solvedGroups = 0;
let currentWallData = [];
let guessingPhase = false;
let currentGuessIndex = 0;

/**
 * INITIALISATION & NAVIGATION
 */
function initMenu() {
    const gridP1 = document.getElementById('topic-grid-p1');
    const gridP2 = document.getElementById('topic-grid-p2');
    if (!gridP1 || !gridP2) return;

    gridP1.innerHTML = '';
    gridP2.innerHTML = '';

    const sortedTopics = Object.keys(questionBank).sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );

    sortedTopics.forEach(topic => {
        const btn = document.createElement('button');
        btn.className = 'topic-card';
        btn.innerText = topic;
        btn.onclick = () => startSession(topic);
        if (topic.startsWith("3.1") || topic.startsWith("3.2")) {
            btn.classList.add('p1-card');
            gridP1.appendChild(btn);
        } else {
            btn.classList.add('p2-card');
            gridP2.appendChild(btn);
        }
    });
}

function resetState() {
    clearInterval(timer);
    // Force hide every major screen to prevent splitting
    const screens = [
        'main-menu', 'quiz-area', 'results-area', 'boss-difficulty-menu',
        'wall-area', 'wall-selection-menu', 'logic-sim-area', 'header-info', 'progress-wrapper'
    ];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
    });

    score = 0;
    currentIndex = 0;
    currentStreak = 0;
    isBossMode = false;
    guessingPhase = false;
    totalWrongAnswers = 0;
    solvedGroups = 0;
    selectedTiles = [];
}

/**
 * QUIZ ENGINE
 */
function startSession(mode) {
    resetState();
    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('header-info').classList.remove('hidden');
    document.getElementById('progress-wrapper').classList.remove('hidden');

    isTestMode = mode.startsWith('MOCK_') || mode === 'TEST';
    if (isTestMode) {
        let filteredQuestions = [];
        if (mode === 'MOCK_P1') {
            Object.keys(questionBank).forEach(t => {
                if (t.startsWith("3.1") || t.startsWith("3.2")) filteredQuestions = filteredQuestions.concat(questionBank[t]);
            });
            document.getElementById('topic-display').innerText = "PAPER 1 MOCK EXAM";
        } else {
            Object.keys(questionBank).forEach(t => {
                if (!t.startsWith("3.1") && !t.startsWith("3.2")) filteredQuestions = filteredQuestions.concat(questionBank[t]);
            });
            document.getElementById('topic-display').innerText = "PAPER 2 MOCK EXAM";
        }
        currentQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, 30);
    } else {
        currentQuestions = [...questionBank[mode]].sort(() => 0.5 - Math.random());
        document.getElementById('topic-display').innerText = `TOPIC: ${mode}`;
    }
    nextQuestion();
}

function showHint() {
    const qData = currentQuestions[currentIndex - 1]; // Use currentIndex-1 as it was incremented in nextQuestion
    const correctAns = qData.a;
    const buttons = Array.from(document.querySelectorAll('.option-btn'));

    // Filter buttons to find those that are currently visible and incorrect
    const wrongButtons = buttons.filter(btn =>
        btn.innerText !== correctAns &&
        btn.style.visibility !== 'hidden' &&
        btn.disabled === false
    );

    if (wrongButtons.length > 0) {
        // Randomly pick one incorrect button to hide
        const randomIndex = Math.floor(Math.random() * wrongButtons.length);
        const targetButton = wrongButtons[randomIndex];

        // "Black out" the button
        targetButton.style.visibility = 'hidden';
        targetButton.disabled = true;

        // Disable hint button so it can only be used once per question
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) hintBtn.disabled = true;
    }
}

function nextQuestion() {
    // FIX: Removed the logic that forced currentIndex back to 0
    if (currentIndex >= currentQuestions.length) {
        showResults();
        return;
    }

    const qData = currentQuestions[currentIndex];

    // UI Resets
    document.getElementById('question-text').innerText = qData.q;
    document.getElementById('feedback-area').innerHTML = '';
    document.getElementById('continue-btn').classList.add('hidden');

    // Progress Bar
    document.getElementById('progress-bar').style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;

    renderOptions(qData);

    // Reset the Hint Button for the new question
    const hintBtn = document.getElementById('hint-btn');
    if (hintBtn) {
        hintBtn.disabled = false;
        hintBtn.style.display = 'inline-block'; // Ensure it's visible
    }

    // Reset the start time for THIS specific question
    timeWhenQuestionStarted = Date.now();
    currentIndex++;
}

function renderOptions(qData) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    [...qData.options].sort(() => 0.5 - Math.random()).forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(opt, qData.a, qData.why);
        container.appendChild(btn);
    });
}

function handleAnswer(choice, correct, why) {
    const isCorrect = (choice === correct);
    const btns = document.querySelectorAll('.option-btn');
    const f = document.getElementById('feedback-area');
    const timeTaken = (Date.now() - timeWhenQuestionStarted) / 1000;

    btns.forEach(b => {
        b.disabled = true;
        if (b.innerText === correct) b.style.backgroundColor = "var(--correct)";
        else if (b.innerText === choice) b.style.backgroundColor = "var(--wrong)";
    });

    if (isCorrect) {
        score++;
        if (isBossMode) {
            let multiplier = currentDifficulty === 'HARD' ? 5 : (currentDifficulty === 'MEDIUM' ? 2.5 : 1);
            let regen = Math.max(1, Math.floor(timeTaken * multiplier));

            bossHP -= 25;
            bossHP = Math.min(bossMaxHP, bossHP + regen);

            f.innerHTML = `✅ HIT! -25 HP. <br>⚠️ Boss regenerated ${regen} HP.`;
            updateBossUI();

            if (bossHP <= 0) {
                bossHP = 0;
                updateBossUI();
                victorySequence(); // Go to Rank screen
                return;
            }
        }
    } else {
        // INCREMENT WRONG COUNTER
        totalWrongAnswers++;

        if (isBossMode) {
            let missHeal = currentDifficulty === 'HARD' ? 40 : (currentDifficulty === 'MEDIUM' ? 30 : 20);
            bossHP = Math.min(bossMaxHP, bossHP + missHeal);
            f.innerHTML = `❌ MISS! Boss healed +${missHeal} HP!`;
            updateBossUI();
        }
    }
    document.getElementById('continue-btn').classList.remove('hidden');
}

function victorySequence() {
    // Determine accuracy based on questions answered so far
    const totalAttempted = currentIndex;
    const accuracy = ((totalAttempted - totalWrongAnswers) / totalAttempted) * 100;

    let rank = "F";
    let rankColor = "#e74c3c";

    // RANK THRESHOLDS
    if (totalWrongAnswers === 0) {
        rank = "S";
        rankColor = "#f1c40f"; // Gold
    } else if (accuracy >= 90) {
        rank = "A";
        rankColor = "#2ecc71"; // Green
    } else if (accuracy >= 70) {
        rank = "B";
        rankColor = "#3498db"; // Blue
    } else if (accuracy >= 50) {
        rank = "C";
        rankColor = "#9b59b6"; // Purple
    } else if (accuracy >= 30) {
        rank = "D";
        rankColor = "#e67e22"; // Orange
    }

    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = `
        <div class="fade-in" style="padding: 40px; text-align: center;">
            <h1 style="color: var(--logic-gold); font-size: 2.5rem;">🌟 VICTORY 🌟</h1>
            <div style="margin: 20px auto; width: 140px; height: 140px; border-radius: 50%; border: 8px solid ${rankColor}; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.2);">
                <span style="font-size: 5rem; font-weight: 900; color: ${rankColor};">${rank}</span>
            </div>
            <p style="font-size: 1.2rem;">Accuracy: <b>${accuracy.toFixed(1)}%</b></p>
            <p style="color: #888;">Questions: ${totalAttempted} | Errors: ${totalWrongAnswers}</p>
            <div id="countdown-text" style="margin-top: 30px; color: #aaa;">Returning to menu in 10s...</div>
        </div>
    `;

    let timerLeft = 10;
    const interval = setInterval(() => {
        timerLeft--;
        const el = document.getElementById('countdown-text');
        if (el) el.innerText = `Returning to menu in ${timerLeft}s...`;
        if (timerLeft <= 0) {
            clearInterval(interval);
            showMenu();
        }
    }, 1000);
}


const wallBank = {
    '3.1': [
        { cat: "Flowchart Symbols", items: ["Diamond", "Parallelogram", "Rectangle", "Oval"] },
        { cat: "Searching Algorithms", items: ["Linear", "Binary", "Search Area", "Middle Item"] },
        { cat: "Sorting Algorithms", items: ["Bubble", "Merge", "Insertion", "Divide and Conquer"] },
        { cat: "Computational Thinking", items: ["Abstraction", "Decomposition", "Algorithmic Thinking", "Pattern Recognition"] }
    ],
    '3.2': [
        { cat: "Basic Data Types", items: ["Integer", "Real", "Boolean", "String"] },
        { cat: "Arithmetic Operators", items: ["MOD", "DIV", "Exponentiation", "Quotient"] },
        { cat: "Programming Constructs", items: ["Sequence", "Selection", "Iteration", "Condition"] },
        { cat: "Subroutine Components", items: ["Parameters", "Arguments", "Return Value", "Local Variables"] }
    ],
    '3.3': [
        { cat: "Units of Information", items: ["Petabyte", "Terabyte", "Nibble", "Byte"] },
        { cat: "Character Encoding", items: ["ASCII", "Unicode", "Character Set", "7-bit"] },
        { cat: "Image Representation", items: ["Resolution", "Colour Depth", "Metadata", "Pixel"] },
        { cat: "Sound Representation", items: ["Sample Rate", "Bit Depth", "Hertz", "Amplitude"] }
    ],
    '3.4': [
        { cat: "Hardware Components", items: ["Motherboard", "CPU", "NIC", "Hard Drive"] },
        { cat: "CPU Components", items: ["Control Unit", "ALU", "Cache", "Clock"] },
        { cat: "Primary Memory", items: ["RAM", "ROM", "Virtual Memory", "Registers"] },
        { cat: "Secondary Storage", items: ["Magnetic", "Optical", "Solid State", "Cloud"] }
    ],
    '3.5': [
        { cat: "Network Topologies", items: ["Star", "Bus", "Full Mesh", "Partial Mesh"] },
        { cat: "Network Hardware", items: ["Router", "Switch", "NIC", "Hub"] },
        { cat: "Email Protocols", items: ["SMTP", "IMAP", "POP3", "Mail Server"] },
        { cat: "Web & Transfer Protocols", items: ["HTTP", "HTTPS", "FTP", "TCP/IP"] }
    ],
    '3.6': [
        { cat: "Social Engineering", items: ["Phishing", "Blagging", "Shoulder Surfing", "Pretexting"] },
        { cat: "Malware Types", items: ["Trojan Horse", "Ransomware", "Spyware", "Worm"] },
        { cat: "Technical Prevention", items: ["Firewall", "Encryption", "Authentication", "MAC Filtering"] },
        { cat: "Security Testing", items: ["Black-box", "White-box", "Vulnerability", "Penetration"] }
    ],
    '3.7': [
        { cat: "Database Components", items: ["Table", "Record", "Field", "Data Type"] },
        { cat: "Relationship Keys", items: ["Primary Key", "Foreign Key", "Unique ID", "Link Field"] },
        { cat: "SQL Data Manipulation", items: ["INSERT INTO", "UPDATE", "DELETE FROM", "CREATE TABLE"] },
        { cat: "SQL Retrieval Commands", items: ["SELECT", "FROM", "WHERE", "ORDER BY"] }
    ],
    '3.8': [
        { cat: "Legal Acts (UK Law)", items: ["Computer Misuse", "Data Protection", "Copyright Designs", "Freedom of Info"] },
        { cat: "Environmental Impacts", items: ["E-waste", "Energy Consumption", "Toxic Chemicals", "Cooling Systems"] },
        { cat: "Software Models", items: ["Open Source", "Proprietary", "Free Software", "Closed Source"] },
        { cat: "Ethical & Privacy Issues", items: ["Digital Divide", "Surveillance", "Data Privacy", "Cyberbullying"] }
    ],
    'PAPER_1': [
        { cat: "Flowchart Symbols", items: ["Diamond", "Parallelogram", "Rectangle", "Oval"] },
        { cat: "Programming Constructs", items: ["Sequence", "Selection", "Iteration", "Subroutine"] },
        { cat: "Search/Sort Algs", items: ["Bubble", "Merge", "Binary", "Linear"] },
        { cat: "Computational Thinking", items: ["Abstraction", "Decomposition", "Algorithmic Thinking", "Pattern Recognition"] }
    ],
    'PAPER_2': [
        { cat: "Network Layers (TCP/IP)", items: ["Application", "Transport", "Network", "Data Link"] },
        { cat: "Storage Media", items: ["Magnetic", "Optical", "Solid State", "Cloud"] },
        { cat: "Cyber Security Threats", items: ["Phishing", "Social Engineering", "Brute Force", "DDoS"] },
        { cat: "Data Validation", items: ["Range Check", "Presence Check", "Format Check", "Length Check"] }
    ]
};

function showWallMenu() {
    resetState();
    document.getElementById('wall-selection-menu').classList.remove('hidden');
}

function startConnectingWall(type) {
    resetState();
    document.getElementById('wall-area').classList.remove('hidden');
    document.getElementById('wall-topic-display').innerText = "CONNECTING WALL: " + type;
    document.getElementById('wall-solved-categories').innerHTML = '';

    currentWallData = wallBank[type] || wallBank['PAPER_1'];
    currentWallItems = [];
    currentWallData.forEach((group, index) => {
        group.items.forEach(item => {
            currentWallItems.push({ text: item, groupId: index, solved: false });
        });
    });

    currentWallItems.sort(() => Math.random() - 0.5);
    renderWall();
}

function renderWall() {
    const grid = document.getElementById('wall-grid');
    grid.innerHTML = '';
    currentWallItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'wall-tile';
        if (item.solved) div.classList.add('solved', `solved-group-${item.solvedGroupId}`);
        div.innerText = item.text;
        div.onclick = () => handleTileClick(div, item);
        grid.appendChild(div);
    });
}

function handleTileClick(div, item) {
    if (item.solved || guessingPhase) return;
    if (div.classList.contains('selected')) {
        div.classList.remove('selected');
        selectedTiles = selectedTiles.filter(t => t.item !== item);
    } else if (selectedTiles.length < 4) {
        div.classList.add('selected');
        selectedTiles.push({ div, item });
    }
    if (selectedTiles.length === 4) checkWallGroup();
}

function checkWallGroup() {
    const groupIds = selectedTiles.map(t => t.item.groupId);
    const firstGroup = groupIds[0];
    if (groupIds.every(id => id === firstGroup)) {
        selectedTiles.forEach(t => {
            t.item.solved = true;
            t.item.solvedGroupId = solvedGroups;
        });

        const solved = currentWallItems.filter(i => i.solved).sort((a, b) => a.solvedGroupId - b.solvedGroupId);
        const unsolved = currentWallItems.filter(i => !i.solved);
        currentWallItems = [...solved, ...unsolved];

        solvedGroups++;
        selectedTiles = [];
        renderWall();
        if (solvedGroups === 4) setTimeout(startGuessingPhase, 1000);
    } else {
        document.getElementById('wall-feedback').innerText = "Wrong! Try again.";
        setTimeout(() => {
            selectedTiles.forEach(t => t.div.classList.remove('selected'));
            selectedTiles = [];
            document.getElementById('wall-feedback').innerText = "";
        }, 800);
    }
}

function startGuessingPhase() {
    guessingPhase = true;
    currentGuessIndex = 0;
    document.getElementById('wall-feedback').innerText = "All groups found! Now, identify connections.";
    showNextConnectionGuess();
}

function showNextConnectionGuess() {
    const tiles = document.querySelectorAll('.wall-tile');
    tiles.forEach(t => t.style.opacity = "0.2");

    if (currentGuessIndex < 4) {
        for (let i = currentGuessIndex * 4; i < (currentGuessIndex * 4) + 4; i++) {
            tiles[i].style.opacity = "1";
            tiles[i].style.border = "3px solid white";
        }

        const guessArea = document.getElementById('wall-solved-categories');
        let container = guessArea.querySelector('.guess-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'guess-container fade-in';
            guessArea.appendChild(container);
        }

        container.innerHTML = `
            <p>What's the connection between these highlighted items?</p>
            <button class="mock-btn p1-btn" style="padding: 10px 20px;" onclick="revealConnection(${currentGuessIndex})">REVEAL CONNECTION</button>
        `;
    } else {
        document.getElementById('wall-feedback').innerHTML = "🌟 WALL COMPLETE! 🌟";
    }
}

function revealConnection(rowIndex) {
    const actualGroupId = currentWallItems[rowIndex * 4].groupId;
    const catName = currentWallData[actualGroupId].cat;

    const answerDiv = document.createElement('div');
    answerDiv.className = 'solved-category-info';
    answerDiv.style.backgroundColor = getComputedStyle(document.querySelectorAll('.wall-tile')[rowIndex * 4]).backgroundColor;
    answerDiv.innerHTML = `<b>CONNECTION:</b> ${catName}`;

    const container = document.getElementById('wall-solved-categories').querySelector('.guess-container');
    document.getElementById('wall-solved-categories').insertBefore(answerDiv, container);

    currentGuessIndex++;
    container.innerHTML = `
        <button class="option-btn" style="max-width: 250px;" onclick="showNextConnectionGuess()">
            ${currentGuessIndex < 4 ? "NEXT CONNECTION" : "FINISH"}
        </button>
    `;
}

/**
 * UTILITIES & OTHER MODES
 */
function showMenu() { location.reload(); }
function showBossDifficulty() { resetState(); document.getElementById('boss-difficulty-menu').classList.remove('hidden'); }
function hideBossDifficulty() { showMenu(); }
function updateBossUI() {
    const fill = document.getElementById('boss-health-fill');
    const hpText = document.getElementById('boss-hp-text');
    let percentage = (bossHP / bossMaxHP) * 100;
    fill.style.width = `${percentage}%`;
    hpText.innerText = `${bossHP} / ${bossMaxHP} HP`;
}
function updateXP(amount) {
    totalXP += amount;
    userLevel = Math.floor(totalXP / XP_PER_LEVEL) + 1;
    document.getElementById('level-display').innerText = `LVL ${userLevel}`;
    document.getElementById('xp-bar-fill').style.width = `${((totalXP % XP_PER_LEVEL) / XP_PER_LEVEL) * 100}%`;
}
function updateStreakUI() { document.getElementById('streak-display').innerText = (currentStreak >= 2) ? `🔥 ${currentStreak} STREAK` : ""; }

function startBossBattle(difficulty) {
    resetState();
    isBossMode = true;
    isTestMode = true;
    currentDifficulty = difficulty;
    totalStartTime = Date.now();

    // STRICT RESET of scoring variables
    score = 0;
    totalWrongAnswers = 0;
    currentIndex = 0;

    bossMaxHP = (difficulty === 'EASY') ? 100 : (difficulty === 'MEDIUM' ? 300 : 600);
    bossHP = bossMaxHP;

    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('boss-ui').classList.remove('hidden');
    document.getElementById('topic-display').innerText = `BOSS BATTLE: ${difficulty}`;

    // Generate 30 questions
    currentQuestions = [];
    const padding = (difficulty === 'HARD') ? 8 : 4;
    for (let i = 0; i < 30; i++) {
        let val = Math.floor(Math.random() * (padding === 8 ? 256 : 16));
        let isHexQ = (difficulty !== 'EASY' && Math.random() > 0.4);
        currentQuestions.push({
            q: isHexQ ? `CONVERT HEX: ${val.toString(16).toUpperCase()}` : `CONVERT BINARY: ${val.toString(2).padStart(padding, '0')}`,
            a: isHexQ ? val.toString(2).padStart(padding, '0') : val.toString(),
            options: generateBossOptions(val, isHexQ, padding),
            why: `${val.toString(2).padStart(padding, '0')} (Bin) = ${val} (Den)`
        });
    }
    updateBossUI();
    nextQuestion();
}

function generateBossOptions(correctVal, isHexQ, padding) {
    let opts = new Set();
    // Add the correct answer first
    opts.add(isHexQ ? correctVal.toString(2).padStart(padding, '0') : correctVal.toString());

    // Generate 3 unique wrong answers
    while (opts.size < 4) {
        let fakeVal = Math.max(0, correctVal + (Math.floor(Math.random() * 10) - 5));
        if (fakeVal === correctVal) fakeVal += 1;

        let formattedFake = isHexQ ?
            fakeVal.toString(2).padStart(padding, '0') :
            fakeVal.toString();

        opts.add(formattedFake);
    }
    return Array.from(opts);
}

function startLogicSimulator() {
    resetState();
    document.getElementById('quiz-area').classList.remove('hidden');
    document.getElementById('header-info').classList.remove('hidden');
    document.getElementById('topic-display').innerText = "LOGIC GATE LAB: EXAM CHALLENGE";

    const simArea = document.getElementById('logic-sim-area');
    simArea.classList.remove('hidden');

    // Generate the Reference Tables HTML
    simArea.innerHTML = `
        <div class="logic-flex-container fade-in">
            <table class="logic-table">
                <tr><th colspan="2">AND (.)</th></tr>
                <tr><td>0 . 0</td><td>0</td></tr>
                <tr><td>0 . 1</td><td>0</td></tr>
                <tr><td>1 . 0</td><td>0</td></tr>
                <tr><td>1 . 1</td><td>1</td></tr>
            </table>
            <table class="logic-table">
                <tr><th colspan="2">OR (+)</th></tr>
                <tr><td>0 + 0</td><td>0</td></tr>
                <tr><td>0 + 1</td><td>1</td></tr>
                <tr><td>1 + 0</td><td>1</td></tr>
                <tr><td>1 + 1</td><td>1</td></tr>
            </table>
            <table class="logic-table">
                <tr><th colspan="2">NOT (¬)</th></tr>
                <tr><td>¬0</td><td>1</td></tr>
                <tr><td>¬1</td><td>0</td></tr>
            </table>
        </div>
    `;

    // Create a robust pool of 15 advanced questions
    const advancedPool = [
        // --- TRUTH TABLE TASKS (Reference tables hidden) ---
        {
            type: "table",
            q: "Complete the Truth Table for the Boolean expression: Q = A . (B + C)",
            rows: [
                { inputs: "A=1, B=0, C=1", correct: "1" },
                { inputs: "A=1, B=0, C=0", correct: "0" },
                { inputs: "A=0, B=1, C=1", correct: "0" }
            ],
            why: "A must be 1, and at least one of B or C must be 1 for Q to be 1."
        },
        {
            type: "table",
            q: "Complete the Truth Table for the Boolean expression: Q = ¬(A + B) . C",
            rows: [
                { inputs: "A=0, B=0, C=1", correct: "1" },
                { inputs: "A=0, B=1, C=1", correct: "0" },
                { inputs: "A=1, B=1, C=1", correct: "0" }
            ],
            why: "The NOR part ¬(A+B) only outputs 1 if both A and B are 0."
        },
        // --- CIRCUIT & EXPRESSION TASKS (Reference tables visible) ---
        {
            q: "Identify the Boolean expression for a logic circuit where inputs A and B pass through a NOR gate, and the result is ANDed with input C.",
            a: "Q = ¬(A + B) . C",
            options: ["Q = ¬(A + B) . C", "Q = (¬A + ¬B) . C", "Q = ¬(A . B) + C", "Q = ¬(A + B + C)"],
            why: "NOR is represented by ¬(A + B), which is then multiplied (.) by C."
        },
        {
            q: "Simplify the following Boolean expression: Q = A . (B + 0)",
            a: "Q = A . B",
            options: ["Q = A . B", "Q = A + B", "Q = A", "Q = 0"],
            why: "Anything ORed with 0 remains itself, so (B + 0) simplifies to B."
        },
        {
            q: "Determine the output Q for the expression Q = ¬(A . B) + C, given the inputs A=1, B=1, and C=0.",
            a: "Q = 0",
            options: ["Q = 0", "Q = 1"],
            why: "¬(1 . 1) + 0 = ¬1 + 0 = 0 + 0 = 0."
        },
        {
            q: "Which Boolean expression represents a circuit where inputs A and B pass through an AND gate, and the result is then passed through a NOT gate?",
            a: "Q = ¬(A . B)",
            options: ["Q = ¬(A . B)", "Q = ¬A . ¬B", "Q = ¬A + ¬B", "Q = A . ¬B"],
            why: "This is a NAND operation, where the NOT (¬) is applied to the result of the AND (.)."
        },
        {
            q: "Calculate the output Q for the expression Q = (A + B) . ¬B, given that A=1 and B=1.",
            a: "Q = 0",
            options: ["Q = 0", "Q = 1"],
            why: "(1 + 1) . ¬1 = 1 . 0 = 0."
        },
        {
            q: "Simplify the Boolean expression: Q = (A . 1) + (B . 0)",
            a: "Q = A",
            options: ["Q = A", "Q = B", "Q = A + B", "Q = 0"],
            why: "(A . 1) is A, and (B . 0) is 0. A + 0 simplifies to A."
        },
        { q: "A safety system (S) activates if a Pressure sensor (P) is 1 AND (a Temp sensor (T) is 1 OR a Manual override (M) is 1).", a: "S = P . (T + M)", options: ["S = P . (T + M)", "S = P + (T . M)", "S = ¬P . (T + M)", "S = (P . T) + M"] },
        { q: "What is the output Q if inputs are A=1, B=0, C=1 for the expression: Q = (A . B) + ¬C?", a: "Q = 0", options: ["Q = 0", "Q = 1"], why: "(1.0) + ¬1 = 0 + 0 = 0" },
        { q: "Identify the expression for a logic circuit where A and B go into an AND gate, and the result goes into an OR gate with C.", a: "Q = (A . B) + C", options: ["Q = (A . B) + C", "Q = A . (B + C)", "Q = ¬(A . B) + C", "Q = (A + B) . C"] },
        { q: "An engine warning light (W) is 1 if the Fuel (F) is NOT 1 AND the Ignition (I) is 1.", a: "W = ¬F . I", options: ["W = ¬F . I", "W = F . ¬I", "W = ¬(F . I)", "W = F + ¬I"] },
        { q: "Simplify the Boolean expression: A . (B + 0)", a: "A . B", options: ["A . B", "A + B", "0", "1"] },
        { q: "What logic gate is represented by the Boolean expression: Q = ¬(A . B)?", a: "NAND", options: ["NAND", "NOR", "XOR", "AND"] },
        { q: "What logic gate is represented by the Boolean expression: Q = ¬(A + B)?", a: "NOR", options: ["NOR", "NAND", "XOR", "OR"] },
        { q: "Calculate Q where A=0, B=1, C=1: Q = ¬(A + B) . C", a: "Q = 0", options: ["Q = 0", "Q = 1"], why: "¬(0+1) . 1 = ¬1 . 1 = 0 . 1 = 0" },
        { q: "Which expression represents: 'The motor (M) turns on if Switch A is pressed OR Switch B is pressed, but only if the Guard (G) is closed (1)'?", a: "M = (A + B) . G", options: ["M = (A + B) . G", "M = A + B . G", "M = (A . B) + G", "M = ¬(A + B) . G"] },
        { q: "In a logic circuit, inputs A and B pass through an OR gate. The output then passes through a NOT gate. What is the expression?", a: "Q = ¬(A + B)", options: ["Q = ¬(A + B)", "Q = ¬A + ¬B", "Q = ¬(A . B)", "Q = A + ¬B"] },
        { q: "Find the output Q for A=1, B=1, C=0: Q = A . (B + C)", a: "Q = 1", options: ["Q = 1", "Q = 0"], why: "1 . (1 + 0) = 1 . 1 = 1" },
        { q: "A smart home heater (H) is 1 if the Timer (T) is 1 OR (the Temp sensor (S) is 0 AND the Override (O) is 1).", a: "H = T + (¬S . O)", options: ["H = T + (¬S . O)", "H = (T + S) . O", "H = T . (¬S + O)", "H = ¬T + (S . O)"] },
        { q: "Simplify the Boolean expression: A + (B . ¬B)", a: "A", options: ["A", "B", "A + B", "1"], why: "B . ¬B is always 0, and A + 0 is always A." },
        { q: "What is the output of a 3-input AND gate if the inputs are 1, 0, 1?", a: "0", options: ["0", "1"], why: "All inputs must be 1 for an AND gate to output 1." },
        { q: "Which logic gate outputs 1 ONLY when the inputs are different?", a: "XOR", options: ["XOR", "OR", "AND", "NAND"] }
    ];

    currentQuestions = advancedPool.sort(() => 0.5 - Math.random());
    nextQuestion();
}

initMenu();