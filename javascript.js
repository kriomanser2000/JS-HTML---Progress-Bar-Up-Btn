document.getElementById('increaseButton').addEventListener('click', function() 
{
    var progressBar = document.getElementById('progress');
    var currentProgress = parseFloat(progressBar.style.width) || 0;
    var newProgress = currentProgress + 5;
    if (newProgress <= 100) 
    {
        progressBar.style.width = newProgress + '%';
    }
});