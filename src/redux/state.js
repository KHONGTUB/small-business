const state = {
  username: "",
  listings: [
    {
      name: "Madam Mams Thai Cuisine",
      description:
        "An extensive menu of traditional Thai dishes from a popular, colorful local chain.",
      hours: "11:00 AM - 10:00 PM",
      address: "9911 Brodie Ln STE 600, Austin, TX 78748",
    },
    {
      name: "1618 Asian Fusion",
      description:
        "1618 Asian Fusion is a first of it’s kind locally owned and operated Family Restaurant created with an exciting vision by Kevin Le and Lynn Tran. We delight in providing a culinary exploration of Asia’s diverse food landscape. 1618 Asian Fusion serves high-quality fusion and fine casual service in a unique and thoughtfully designed space. ",
      hours: "10:00 AM - 9:30 PM",
      address: "1618 E Riverside Dr, Austin, TX  78741",
    },
    {
      name: "Ramen Tatsu-ya",
      description:
        "Ramen Tatsu-ya is the long-awaited collaboration between local chefs/DJs, Tatsu Aikawa and Takuya Matsumoto. The two of them first met as they were busy making their marks on the Austin scene as hip-hop DJs. After following an eerily parallel timeline, honing their crafts at notable Austin establishments such as Musashino and Second Bar + Kitchen, Tatsu took a leap and moved to Los Angeles. There, he worked in one of the nation’s most respected Kaiseki/Sushi bars, the two Michelin star restaurant Urasawa.",
      hours: "11:00 AM - 10:00 PM",
      address: "1600 E 6th St, Austin, TX 78702",
    },
    {
      name: "Cabo Bob's",
      description:
        "Cabo Bob's, an Austin-based burrito restaurant with a seafood twist, is expanding its presence in Houston with three new eateries. The theme of each restaurant is based on different surfing hotspots, and the food reflects the taste of Cabo.",
      hours: "10:30 AM - 9:05 PM",
      address: "500 E Ben White Blvd SUITE D-100, Austin, TX 78704",
    },
    {
      name: "Otoko",
      description:
        "OTOKO is a 12-seat japanese restaurant located at south congress hotel in austin, texas, helmed by chef yoshi okai. the multi- course omakase experience at OTOKO blends tokyo-style sushi and kyoto-style kaiseki into a unique tasting menu based on ingredient availability and seasonality.",
      hours: "5:00 PM - 11:00 PM",
      address: "1603 S Congress Ave, Austin, TX 78704",
    },
  ],
  loggedIn: false,
  coords: [],
};

export default state;
