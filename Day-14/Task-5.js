// Task 1: Basic setTimeout
function delayedMessage(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Task 2: Basic setInterval
function countdown(start) {
    const intervalId = setInterval(() => {
        console.log(start);
        start--;
        if (start < 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

// Task 3: Clearing Intervals with a callback
function countdownWithCallback(start, callback) {
    const intervalId = setInterval(() => {
        console.log(start);
        start--;
        if (start < 0) {
            clearInterval(intervalId);
            callback(); // Execute the callback when the countdown reaches zero
        }
    }, 1000);
}

// Task 4: Using Promises with setTimeout
function wait(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

// Task 5: Promise-based Countdown
function countdownPromise(start) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            console.log(start);
            start--;
            if (start < 0) {
                clearInterval(intervalId);
                resolve(); // Resolve the promise when the countdown completes
            }
        }, 1000);
    });
}

// Task 6: Chaining Promises
function delayedLogSequence(messagesWithDelays) {
    let sequence = Promise.resolve();

    messagesWithDelays.forEach(([message, delay]) => {
        sequence = sequence.then(() => wait(delay).then(() => console.log(message)));
    });

    return sequence;
}

// Task 7: Using async/await with Promises
async function delayedLogSequenceAsync(messagesWithDelays) {
    for (const [message, delay] of messagesWithDelays) {
        await wait(delay);
        console.log(message);
    }
}

// Task 8: Combining setTimeout and Promises
function randomDelayMessage(message) {
    const randomDelay = Math.floor(Math.random() * 4000) + 1000; // Random delay between 1 and 5 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, randomDelay);
    });
}

// Task 9: Using setInterval with Promises
function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(action, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}

// Example Usage:

// Task 1
delayedMessage("Task 1: Hello after 2 seconds", 2000);

// Task 2
countdown(5);

// Task 3
countdownWithCallback(5, () => console.log("Task 3: Countdown finished!"));

// Task 4
wait(3000).then(() => console.log("Task 4: Waited for 3 seconds"));

// Task 5
countdownPromise(3).then(() => console.log("Task 5: Countdown finished with promise!"));

// Task 6
delayedLogSequence([
    ["Task 6: First message", 1000],
    ["Task 6: Second message", 2000],
    ["Task 6: Third message", 1500]
]);

// Task 7
delayedLogSequenceAsync([
    ["Task 7: Async first message", 1000],
    ["Task 7: Async second message", 2000],
    ["Task 7: Async third message", 1500]
]);

// Task 8
randomDelayMessage("Task 8: Random delay message").then(() => console.log("Task 8: Done!"));

// Task 9
repeatAction(() => console.log("Task 9: Repeating action"), 1000, 5000).then(() => console.log("Task 9: Repeating action stopped"));
