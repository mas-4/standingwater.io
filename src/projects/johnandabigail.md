---
title: "Letters of John and Abigail Adams Twitterbot"
url: "https://github.com/malan88/johnandabigail"
featureImage: "./johnandabigail.jpg"
short: "john"
---
- Twitter handle [@john\_and\_abbie][10]
- Bot to tweet the corpus of letters between [John and Abigail Adams][0]
- Data scraped from NARA's [The Adams Papers][1] using [requests][2] and
  [BeautifulSoup4][3]
- Built using [Tweepy][4]
- Hosted as a lambda function on [AWS Lambda][5]
- Use [AWS DynamoDB][6] to track place in corpus
- Use [Netlify][7] to host the letters as static text files
- [urllib3][8] to access the static text files
- [Boto3][9] to access the DynamoDB tracking

[0]: https://www.masshist.org/digitaladams/archive/letter/
[1]: https://founders.archives.gov/about/Adams
[2]: https://requests.readthedocs.io/en/master/
[3]: https://www.crummy.com/software/BeautifulSoup/
[4]: https://www.tweepy.org/
[5]: https://aws.amazon.com/lambda/
[6]: https://aws.amazon.com/dynamodb/
[7]: https://johnandabigail.netlify.app/1777-04-02-0-john.txt
[8]: https://urllib3.readthedocs.io/en/latest/
[9]: https://boto3.amazonaws.com/v1/documentation/api/latest/index.html
[10]: https://github.com/malan88/johnandabigail
