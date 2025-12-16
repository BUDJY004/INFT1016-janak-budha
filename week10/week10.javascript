

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



