const movielist = [
  {
    adult: false,
    backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
    genre_ids: [878, 27, 28],
    id: 940721,
    original_language: "ja",
    original_title: "ゴジラ-1.0",
    overview:
      "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
    popularity: 951.112,
    poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
    release_date: "2023-11-03",
    title: "Godzilla Minus One",
    video: false,
    vote_average: 7.672,
    vote_count: 1168,
  },
  {
    adult: false,
    backdrop_path: "/jnE1GA7cGEfv5DJBoU2t4bZHaP4.jpg",
    genre_ids: [28, 878],
    id: 1094844,
    original_language: "en",
    original_title: "Ape vs. Mecha Ape",
    overview:
      "Recognizing the destructive power of its captive giant Ape, the military makes its own battle-ready A.I., Mecha Ape. But its first practical test goes horribly wrong, leaving the military no choice but to release the imprisoned giant ape to stop the colossal robot before it destroys downtown Chicago.",
    popularity: 573.26,
    poster_path: "/dJaIw8OgACelojyV6YuVsOhtTLO.jpg",
    release_date: "2023-03-24",
    title: "Ape vs. Mecha Ape",
    video: false,
    vote_average: 5.7,
    vote_count: 207,
  },
  {
    adult: false,
    backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
    genre_ids: [16, 28, 12, 35, 10751],
    id: 940551,
    original_language: "en",
    original_title: "Migration",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    popularity: 574.842,
    poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    release_date: "2023-12-06",
    title: "Migration",
    video: false,
    vote_average: 7.468,
    vote_count: 1365,
  },
  {
    adult: false,
    backdrop_path: "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
    genre_ids: [18, 36],
    id: 872585,
    original_language: "en",
    original_title: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    popularity: 567.454,
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2023-07-19",
    title: "Oppenheimer",
    video: false,
    vote_average: 8.1,
    vote_count: 8119,
  },
  {
    adult: false,
    backdrop_path: "/hU1Q9YVzdYhokr8a9gLywnSUMlN.jpg",
    genre_ids: [16, 12, 28, 14, 10751],
    id: 1147400,
    original_language: "fr",
    original_title:
      "Miraculous World : Paris, Les Aventures de Toxinelle et Griffe Noire",
    overview:
      "Miraculous holders from another world appear in Paris. They come from a parallel universe where everything is reversed: the holders of Ladybug and Black Cat Miraculouses, Shadybug and Claw Noir, are the bad guys, and the holder of the Butterfly Miraculous, Hesperia, is a superhero. Ladybug and Cat Noir will have to help Hesperia counter the attacks of their evil doubles and prevent them from seizing the Butterfly's Miraculous. Can our heroes also help Hesperia make Shadybug and Claw Noir better people?",
    popularity: 450.647,
    poster_path: "/7Md3nuV0ZprBTnkdR3OrUCEsrSP.jpg",
    release_date: "2023-10-21",
    title: "Miraculous World: Paris, Tales of Shadybug and Claw Noir",
    video: false,
    vote_average: 7.611,
    vote_count: 171,
  },
  {
    adult: false,
    backdrop_path: "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
    genre_ids: [28, 80, 53],
    id: 385687,
    original_language: "en",
    original_title: "Fast X",
    overview:
      "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    popularity: 589.908,
    poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    release_date: "2023-05-17",
    title: "Fast X",
    video: false,
    vote_average: 7.12,
    vote_count: 5199,
  },
  {
    adult: false,
    backdrop_path: "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    genre_ids: [35, 12],
    id: 346698,
    original_language: "en",
    original_title: "Barbie",
    overview:
      "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    popularity: 467.396,
    poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    release_date: "2023-07-19",
    title: "Barbie",
    video: false,
    vote_average: 7.058,
    vote_count: 8319,
  },
  {
    adult: false,
    backdrop_path: "/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    genre_ids: [28, 12, 878],
    id: 298618,
    original_language: "en",
    original_title: "The Flash",
    overview:
      "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
    popularity: 443.16,
    poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    release_date: "2023-06-13",
    title: "The Flash",
    video: false,
    vote_average: 6.736,
    vote_count: 3912,
  },
  {
    adult: false,
    backdrop_path: "/w4pRLYYbhHn3sh9kqRgPZM6GjyS.jpg",
    genre_ids: [878, 12, 28],
    id: 609681,
    original_language: "en",
    original_title: "The Marvels",
    overview:
      "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    popularity: 376.284,
    poster_path: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    release_date: "2023-11-08",
    title: "The Marvels",
    video: false,
    vote_average: 6.138,
    vote_count: 2330,
  },
  {
    adult: false,
    backdrop_path: "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
    genre_ids: [35, 10751, 14],
    id: 787699,
    original_language: "en",
    original_title: "Wonka",
    overview:
      "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
    popularity: 346.81,
    poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    release_date: "2023-12-06",
    title: "Wonka",
    video: false,
    vote_average: 7.168,
    vote_count: 3009,
  },
  {
    adult: false,
    backdrop_path: "/qGJASuD3fs9ZBxuEZoxCLVidVq8.jpg",
    genre_ids: [12, 28, 18],
    id: 845111,
    original_language: "fr",
    original_title: "Les trois mousquetaires : Milady",
    overview:
      "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.",
    popularity: 293.165,
    poster_path: "/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
    release_date: "2023-12-13",
    title: "The Three Musketeers: Milady",
    video: false,
    vote_average: 6.481,
    vote_count: 423,
  },
  {
    adult: false,
    backdrop_path: "/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg",
    genre_ids: [28, 14, 10752],
    id: 856289,
    original_language: "zh",
    original_title: "封神第一部：朝歌风云",
    overview:
      "Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.",
    popularity: 334.04,
    poster_path: "/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
    release_date: "2023-07-20",
    title: "Creation of the Gods I: Kingdom of Storms",
    video: false,
    vote_average: 7.1,
    vote_count: 251,
  },
  {
    adult: false,
    backdrop_path: "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
    genre_ids: [28, 12, 878],
    id: 670292,
    original_language: "en",
    original_title: "The Creator",
    overview:
      "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
    popularity: 277.618,
    poster_path: "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
    release_date: "2023-09-27",
    title: "The Creator",
    video: false,
    vote_average: 7.105,
    vote_count: 2672,
  },
  {
    adult: false,
    backdrop_path: "/ehumsuIBbgAe1hg343oszCLrAfI.jpg",
    genre_ids: [16, 10751, 14, 12],
    id: 1022796,
    original_language: "en",
    original_title: "Wish",
    overview:
      "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force – a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    popularity: 229.58,
    poster_path: "/vgJZSqKMXWDDx09iSIStGKfHMku.jpg",
    release_date: "2023-11-13",
    title: "Wish",
    video: false,
    vote_average: 6.5,
    vote_count: 1221,
  },
  {
    adult: false,
    backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
    genre_ids: [878, 10749, 35],
    id: 792307,
    original_language: "en",
    original_title: "Poor Things",
    overview:
      "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
    popularity: 238.008,
    poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    release_date: "2023-12-07",
    title: "Poor Things",
    video: false,
    vote_average: 7.8,
    vote_count: 3425,
  },
  {
    adult: false,
    backdrop_path: "/j9eOeLlTGoHoM8BNUJVNyWmIvCi.jpg",
    genre_ids: [10749, 35],
    id: 1072790,
    original_language: "en",
    original_title: "Anyone But You",
    overview:
      "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
    popularity: 242.535,
    poster_path: "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
    release_date: "2023-12-21",
    title: "Anyone But You",
    video: false,
    vote_average: 7.073,
    vote_count: 1555,
  },
  {
    adult: false,
    backdrop_path: "/uUJp5I4IbzuhdUiEx4R9OAoFpbz.jpg",
    genre_ids: [27, 53],
    id: 951491,
    original_language: "en",
    original_title: "Saw X",
    overview:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    popularity: 259.116,
    poster_path: "/aQPeznSu7XDTrrdCtT5eLiu52Yu.jpg",
    release_date: "2023-09-27",
    title: "Saw X",
    video: false,
    vote_average: 7.29,
    vote_count: 1709,
  },
  {
    adult: false,
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    genre_ids: [28, 12, 878],
    id: 667538,
    original_language: "en",
    original_title: "Transformers: Rise of the Beasts",
    overview:
      "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    popularity: 220.049,
    poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    release_date: "2023-06-06",
    title: "Transformers: Rise of the Beasts",
    video: false,
    vote_average: 7.336,
    vote_count: 4263,
  },
  {
    adult: false,
    backdrop_path: "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
    genre_ids: [18, 10749],
    id: 1010581,
    original_language: "es",
    original_title: "Culpa mía",
    overview:
      "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
    popularity: 221.312,
    poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
    release_date: "2023-06-08",
    title: "My Fault",
    video: false,
    vote_average: 7.981,
    vote_count: 2540,
  },
  {
    adult: false,
    backdrop_path: "/5i6SjyDbDWqyun8klUuCxrlFbyw.jpg",
    genre_ids: [18, 28],
    id: 677179,
    original_language: "en",
    original_title: "Creed III",
    overview:
      "After dominating the boxing world, Adonis Creed has thrived in his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter with nothing to lose.",
    popularity: 262.014,
    poster_path: "/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    release_date: "2023-03-01",
    title: "Creed III",
    video: false,
    vote_average: 7.13,
    vote_count: 2351,
  },
];

export { movielist };
