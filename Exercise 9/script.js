

function move(button)
{
    let answerBox = button.parentElement.parentElement.getElementsByClassName("answer")[0];
    let buttonIcon = button.children[0];

    if(answerBox.style.maxHeight)
    {
        answerBox.style.maxHeight = null;
        buttonIcon.style.transform = "rotate(180deg)";
    }
    else
    {
        answerBox.style.maxHeight = answerBox.scrollHeight + "px";
        buttonIcon.style.transform = "rotate(0deg)";
    }

}