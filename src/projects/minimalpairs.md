---
title: "Generated Anki decks"
url: "https://github.com/malan88/minimalpairs"
featureImage: "./anki.jpg"
short: "anki"
---
- Generated an [Anki deck][0] for recognizing phonemes difficult to hear for an
  American English speaker using “[minimal pairs][1],” words in French which
  differ by only one phoneme using the forvo.com api. Almost 600 downloads and
  3 positive reviews.
- Also generated an [Anki deck][4] for training the ear to hear difficult French
  numbers (which use a mixed vigesimal, or base-20, system) using IBM Cloud's
  Text to Speech renderer and the num2words Python library. Over 500 downloads
  and 3 positive reviews.
- Used [Requests][2] for automated downloading of the audio files
- Used [BeautifulSoup4][3], requests for scraping the list of minimal pairs in
  an IPython session

These projects are simple, but I am proud of them. I've helped a lot of people
learning French with them.

The minimal pairs deck, in particular, required a lot of strategizing for
dealing with the forvo.com api rate limits (500 requests per day) and the
combinatorial explosion of comparing minimal pairs.

[0]: https://ankiweb.net/shared/info/1347940877
[1]: https://en.wikipedia.org/wiki/Minimal_pair
[2]: https://requests.readthedocs.io/en/master/
[3]: https://www.crummy.com/software/BeautifulSoup/
[4]: https://ankiweb.net/shared/info/1704367316
