onmessage = (e) => {
    console.log("Received message from main: ", e.data);
    console.log("Responding in 2 seconds...");

    setTimeout(() => {
        postMessage({ response: "Right back at you, main.js" });
    }, 2000)
}
