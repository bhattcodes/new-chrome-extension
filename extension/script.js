var url = "https://official-joke-api.appspot.com/random_joke";

fetch(url)
    .then((data) => data.json())
    .then(jokedata => {
        console.log(jokedata);
        var joke = jokedata;
        document.getElementById("setup").innerHTML = joke.setup;

        document.getElementById("btn").onclick = () => {
            document.getElementById("punchline").innerHTML = joke.punchline;
            document.getElementById("haha").innerHTML = "hahahahahhaaaa";


        }

    })