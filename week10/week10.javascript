

<!DOCTYPE html>
<html<html>
<head>
    <title>Task 1</title>
</head>
<body>
    #Click me</a>
</body>



<!DOCTYPE html>
<html>
<head>
    <title>Using the DOM</title>
</head>
<body>
    <p id="box">This is the original text.</p>
    <button onclick="changeText()">Click to Change Text</button>

    <script>
        function changeText() {
            document.getElementById('box').innerHTML = 'The text has been changed!';
        }
    </script>
</</body>


<!DOCTYPE html>
<html>
<head>
    <title>Task 2</title>
</head>
<body>
    <p id="box">This is the original text.</p>
    #
        Click me
    </a>
</body>
</html>

git add task2.html
git commit -m "Task 2: Added DOM manipulation using onclick to update paragraph text"
git push


<button onclick="countClicks()">Click me</button>
<ul id="output"></ul>

<script>
let count = 0;

function countClicks() {
    count++;
    document.getElementById("output").innerHTML =
        "<li>The link was pressed " + count + " times.</li>";
}
</script>
Updated JavaScript to dynamically insert HTML using innerHTML for click counter (Task 3)”


Refactored JavaScript into functions using script tags for cleaner and more maintainable code.”



<!DOCTYPE html>
<html>
<head>
    <title>Week 11</title>

    <script>
        // Initialize counter when the page loads
        let counter = 0;

        // Function to count clicks and update the DOM
        function countClicks() {
            counter = counter + 1;
            var output = 'The link was pressed ' + counter + ' times.';
            var element = document.getElementById('boxy');
            element.innerHTML = output;
        }
    </script>
</head>
<body>
    <h1>JavaScript Demo</h1>
    #Click me</a>
    <p id="boxy"></p>
</body>
</html>

git add task4.html
git commit -m "Task 4: Add click counter function and DOM update (innerHTML on #boxy)"
git




<!DOCTYPE html>
<html>
<head>
    <title>Task 5</title>
    <script>
        let counter = 0;

        function countClicks(element) {
            counter = counter + 1;
            var output = 'The link was pressed ' + counter + ' times.';
            element.innerHTML = output;
        }
    </script>
</head>
<body>
    <h1>JavaScript Demo - Task 5</h1>
    #Click me</a>
</body>

git add task5.html
git commit -m "Task 5: Updated countClicks to accept 'this' element and update its innerHTML"
git push


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 6 - Image Swapping</title>
</head>
<body>
    <h1>Hover over the image to see the swap!</h1>

    <img 
        src="http://www.outgrabe.net/cat01.jpg"
        alt="The default cat image"
        onmouseover="this.src='http://www.outgrabe.net/cat02.jpg'"
        onmouseout="this.src='http://www.outgrabe.net/cat01.jpg'"
    />

</body>
</html>
feat(js): Implement image swap using onmouseover and onmouseout events

This commit adds the required <img> tag with inline JavaScript event handlers.
The onmouseover event changes the src property to cat02.jpg, and the onmouseout
event restores the src property back to cat01.jpg, successfully implementing
the dynamic image swap.

http://www.outgrabe.net/cat01.jpg
http://www.outgrabe.net/cat02.jpg




<!DOCTYPE html>
<html>
<head>
    <title>Task 7</title>
    <script>
        // This variable counts how many times the link is clicked
        let counter = 0;

        /* This function updates the link text with the number of clicks */
        function countClicks(element) {
            counter = counter + 1;
            var output = 'The link was pressed ' + counter + ' times.';
            element.innerHTML = output;
        }
    </script>
</head>
<body>
    <!-- This link calls the countClicks function when clicked -->
    #Click me</a>
</</body>

git add task7.html
git commit -m "Task 7: Added HTML and JavaScript comments explaining logic"
git push

