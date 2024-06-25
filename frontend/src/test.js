
async function logMovies() {
    const fetcher = await fetch("http://127.0.0.1:8000/api/index/");
    const aa = await fetcher.json();
    console.log(aa)
  }

  logMovies()