window.onload = function() {
    /* array of 'signs' for first part of message output */
    const signsArray = ['Sun', 'Moon', 'Mountain', 'Tree', 'Thunder', 'Earth'];

    /* array of 'predictions' for second part of message output */
    const predictionsArray = ['You are due good luck', 'Troublesome times are coming', 
        'A close friend is going to betray you', 'A new door is going to open for you', 
        'Lately, your sleep has been restless', 'In the near future you are going to have a choice to make'];

    /* array of 'advice' for final part of message output (preceeded by 'You should ') */
    const adviceArray = ['trust no one', 'keep your friends close', 'be generous', 'eat as much as possible',
        'get more sleep', 'learn a new skill'];

    /* function to select random element in provided array */
    const randomise = (array) => {
        let i = Math.floor(Math.random() * array.length);
        return array[i];
    }

    /* function to construct 3 part message using randomise() function */
    const generateMessage = () => {
        let part1 = `Your sign is ${randomise(signsArray)}`;
        let part2 = `${randomise(predictionsArray)}`;
        let part3 = `You should ${randomise(adviceArray)}.`;
        // setting the text output divs to display to messages
        document.getElementById('div1').innerHTML = part1;
        document.getElementById('div2').innerText = part2;
        document.getElementById('div3').innerText = part3;
        // this is a reset of the CSS animation, so that it fires on each click (CSS-tricks.com)
        elm = document.getElementById('div1');
        newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        elm = document.getElementById('div2')
        newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        elm = document.getElementById('div3')
        newone = elm.cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);
        // applying the animation to each text div
        document.getElementById('div1').setAttribute('class', 'div1animate');
        document.getElementById('div2').setAttribute('class', 'div2animate');
        document.getElementById('div3').setAttribute('class', 'div3animate');
    };

    document.getElementById('generateButton').addEventListener('click', function(){
        generateMessage();
    });
};

