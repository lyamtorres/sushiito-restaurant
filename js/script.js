/* Activates smooth scroll for navigation in the Events section */

var smoothScroll = (target, duration) => {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition;
    var startTime = null; 

    var animation = (currentTime) => {
        if(startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
            };

    var ease = (t, b, c, d) => {
    t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
	return -c/2 * (t*t*t*t - 2) + b;
    };

    requestAnimationFrame(animation);
};

const eventsLinkOne = document.querySelector('.events-link-one');
eventsLinkOne.addEventListener('click', () => {
    smoothScroll('.main-events', 1000);
});

const eventsLinkTwo = document.querySelector('.events-link-two');
eventsLinkTwo.addEventListener('click', () => {
    smoothScroll('.main-events', 1000);
});

const birthdayLinkOne = document.querySelector('.birthday-link-one');
birthdayLinkOne.addEventListener('click', () => {
    smoothScroll('.birthday', 1000);
});

const birthdayLinkTwo = document.querySelector('.birthday-link-two');
birthdayLinkTwo.addEventListener('click', () => {
    smoothScroll('.birthday', 1000);
});

const poolLinkOne = document.querySelector('.pool-link-one');
poolLinkOne.addEventListener('click', () => {
    smoothScroll('.pool', 1000);
});

const poolLinkTwo = document.querySelector('.pool-link-two');
poolLinkTwo.addEventListener('click', () => {
    smoothScroll('.pool', 1000);
});

