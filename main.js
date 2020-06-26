const btn = document.querySelector("#button");

if (window.Worker) {
    const myWorker = new Worker("worker.js");

    btn.addEventListener('click', event => {
        console.log("Sending message to worker");
        myWorker.postMessage({ fromMain: "Hi, worker!" });
    })

    myWorker.onmessage = (event) => {
        console.log(event.data);
    }

} else {
    console.error("Your browser doesn't support web workers <sad face>");
}
