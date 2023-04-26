# tiktok-api
An attempt to make a TikTok API by scraping

This project basically uses the data returned by the HTML file. Uses regular expression to get the required data.

# How to use
1. Install the dependencies, `npm i`.
2. Run the server with `npm start`.
3. You can send HTTP requests to that server!

You can also use the one I hosted myself at `http://aco-tiktok.cyclic.app/`. See examples for more information.

# Available endpoints and example
## Get user data
`GET {{hostname}}/tiktok/user-and-feeds/:username`

### Example for get user data
`GET https://aco-tiktok.cyclic.app/tiktok/user-and-feeds/arianagrande`
```
// 20230426200711
// https://aco-tiktok.cyclic.app/tiktok/user-and-feeds/arianagrande

{
  "message": "Successfully fetched arianagrande's feeds",
  "data": {
    "user": {
      "username": "arianagrande",
      "follower_count": 31800000,
      "following_count": 3,
      "profile_picture_url": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b5f277e22fe15192a2cde480b4675f2b~c5_1080x1080.jpeg?x-expires=1682686800&x-signature=3lrq6FwqTCdALXCW2MktW7cfxys%3D"
    },
    "feeds": [
      {
        "id": "7223640174742293806",
        "comment_count": 1342,
        "like_count": 80000,
        "play_count": 1400000,
        "caption": "happiest husks in the world @r.e.m.beauty ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/91a6c11b41104991ad333d0721b6ecd1_1681884839?x-expires=1682535600&x-signature=xn1QazuzpFylbMQA1Mr53H9uwkA%3D"
      },
      {
        "id": "7223639773250850091",
        "comment_count": 849,
        "like_count": 199400,
        "play_count": 1200000,
        "caption": "my sweet girl ",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/d9ccda5f3e7b47d4a1a521a6d6372b3a_1681884731?x-expires=1682535600&x-signature=NWCMnD1i%2FBq20VwQf3dwb1c1e%2BI%3D"
      },
      {
        "id": "7223639377707273518",
        "comment_count": 406,
        "like_count": 92200,
        "play_count": 753000,
        "caption": "🫧 :’) @r.e.m.beauty ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/bbff537afd2f4d9982ba16977e8edea5_1681884658?x-expires=1682535600&x-signature=R%2F428LCToJSfeWQnynz9rbC1Mnw%3D"
      },
      {
        "id": "7223110817120685358",
        "comment_count": 2188,
        "like_count": 154800,
        "play_count": 1600000,
        "caption": "our annual @r.e.m.beauty Q&A / get ready with me video is out now 🫧🫧🫧 love you all so much i hope you enjoy @ultabeauty ",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/4610ed20a5bf49fe8a2d082af7b5f4be_1681761553?x-expires=1682535600&x-signature=BI0v0VIx13DakizhEmGOYHMp2QA%3D"
      },
      {
        "id": "7222757462095547691",
        "comment_count": 6522,
        "like_count": 842000,
        "play_count": 5000000,
        "caption": "",
        "thumbnail_url": "https://p16-sign-va.tiktokcdn.com/tos-maliva-i-photomode-us/0e71b6b0307548aca65c4a837fc77639~tplv-photomode-image.jpeg?x-expires=1682535600&x-signature=sqMFgb3MMI2%2FIXX7lEGxoRh%2FKR4%3D"
      },
      {
        "id": "7222562505044888875",
        "comment_count": 1472,
        "like_count": 151500,
        "play_count": 2100000,
        "caption": "using our jelly sandals plumping gloss  @r.e.m.beauty 🧚🏼‍♂️🧚🏼‍♂️🧚🏼‍♂️🧚🏼‍♂️🧚🏼‍♂️ make up by the magical @manthony783 ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/af3b74198e2046c6a31e6d98ccb847cd_1681633935?x-expires=1682535600&x-signature=yxY5wRjLkE%2BH83zxY7UV5B%2FUZA8%3D"
      },
      {
        "id": "7220884832472026414",
        "comment_count": 204900,
        "like_count": 12600000,
        "play_count": 71500000,
        "caption": "♡ ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/99b29d587c844ef1b48cbc58adcdb98e_1681243276?x-expires=1682535600&x-signature=xyEqVFlMucoxbAmFD7wJTsVl7YU%3D"
      },
      {
        "id": "7206966747377782058",
        "comment_count": 9513,
        "like_count": 676900,
        "play_count": 16700000,
        "caption": "what are your favorite / must have @r.e.m.beauty products so far? ♡ these are some of mine 🌀🌀🌀🌀",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/1189d1723e2547978562f866c8d11259_1678002735?x-expires=1682535600&x-signature=cLBz5orxpjpkGUxRQ9AUidAf6Hw%3D"
      },
      {
        "id": "7204369067170385194",
        "comment_count": 13300,
        "like_count": 1400000,
        "play_count": 12400000,
        "caption": "🥺🥺🥺🥺🥺🥺🥺🥺🫧🫧🫧🫧🫧🥹🥹🥹",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/6f6ba642e91944b4b6d66069cf106624?x-expires=1682535600&x-signature=SzqK3AoJLvZ2rCfIipRs%2BpXcn4s%3D"
      },
      {
        "id": "7202717018385042734",
        "comment_count": 51100,
        "like_count": 3200000,
        "play_count": 21200000,
        "caption": "⭐️🌙",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/038c08e5e3664830b05acad1a3dd3cad?x-expires=1682535600&x-signature=M1vQ4%2FT1g6LP4LMwzo%2FZXuts5C4%3D"
      },
      {
        "id": "7197668926984162606",
        "comment_count": 27000,
        "like_count": 2900000,
        "play_count": 22400000,
        "caption": "are you team #ModBlush or #ModVanilla? ☁️ 🍨 🍪 both are now available in the UK and in Mexico at @liverpool_mexico! hope you love them!",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/8f8fc60b439c44da95bf61e23777cb03_1675837902?x-expires=1682535600&x-signature=MYPPaJhrMQUdMed0HRa6CRKswP4%3D"
      },
      {
        "id": "7197299002784615722",
        "comment_count": 1002,
        "like_count": 330200,
        "play_count": 8700000,
        "caption": "🫶🏻 gorgeous @fatimaxbeauty @_vivabella 🥹 @r.e.m.beauty ♡ ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/f2c19df311fa413b818f5d39ec4200c6?x-expires=1682535600&x-signature=R2Gwus%2FN%2BO6tZ7ZFMwJfVlqy97w%3D"
      },
      {
        "id": "7196310186921889070",
        "comment_count": 2529,
        "like_count": 249500,
        "play_count": 7500000,
        "caption": "yum @r.e.m.beauty ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/e2fc954197ac4a1dbb7e7ce40ac1d1f4_1675521551?x-expires=1682535600&x-signature=zJ%2BNtJ7RlWEEOHMnzoYeTIO63Bc%3D"
      },
      {
        "id": "7195103578900712750",
        "comment_count": 10200,
        "like_count": 778800,
        "play_count": 9300000,
        "caption": "finally 🥹 @r.e.m.beauty @sephora EU! 🫶🏻",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/6f1b0ee2458147dfb91be1197842bf4e_1675240616?x-expires=1682535600&x-signature=oIt8n6MhjqSuN2jxeFe8RQyy0Qs%3D"
      },
      {
        "id": "7194703982554729774",
        "comment_count": 490,
        "like_count": 127400,
        "play_count": 4500000,
        "caption": "🫶🏻🫶🏻🫶🏻🥹 @Shanell 🦋 Sorrells - PRO MUA 🧊🧊🧊 @r.e.m.beauty ",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/13c0dea8b833413ba9b4cafd8b9e3f76_1675147599?x-expires=1682535600&x-signature=VmBGN0mVKC%2BjPQYa0Mn5h4k7q2g%3D"
      },
      {
        "id": "7191930048981536043",
        "comment_count": 4008,
        "like_count": 286200,
        "play_count": 7000000,
        "caption": "@r.e.m.beauty “thank u, next” collection is out available at @ultabeauty & @selfridges  ♡ 🫧 it includes ~ a brand new midnight shadows eyeshadow palette, a pair of pink crystalized, faux mink lashes, an XL version of our #utmostimportance plumping gloss and of course our classic midnight black liquid liner. we hope you enjoy!!! ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/927366133dc5467ba95bda7a08d1a6d4_1674501725?x-expires=1682535600&x-signature=w6GWxWwnSZs%2FwqFqB3Ax%2BphK1yE%3D"
      },
      {
        "id": "7191159254752021802",
        "comment_count": 785,
        "like_count": 118000,
        "play_count": 5800000,
        "caption": "prettiest @r.e.m.beauty ♡ ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/4bfab3c896074ebe8a23514126b1943e_1674322254?x-expires=1682535600&x-signature=OADn3i%2FHCpqo2gocL50rIh3iwt4%3D"
      },
      {
        "id": "7191019217162865962",
        "comment_count": 4916,
        "like_count": 1100000,
        "play_count": 11900000,
        "caption": "repost @selfridgesbeauty ♡ our “thank u,next” collection is available now at @selfridges 💘 @r.e.m.beauty 💘",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/d3c3795251e74384a8e7f74f456b6b42_1674289688?x-expires=1682535600&x-signature=bBpei%2BIO1UoC%2BcJMwPx3OOAfl14%3D"
      },
      {
        "id": "7190646878030073134",
        "comment_count": 80900,
        "like_count": 8500000,
        "play_count": 61100000,
        "caption": "wanted to sing you a little something but don’t want to sing anything that is not “Ozian” at the moment :) keeping to my little bubble for now …  done with lots of love. ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/cc2cba855fbd49798e018a458e755961_1674202997?x-expires=1682535600&x-signature=UTHr%2Bc7wuVDZVpFD7VZUj2bbQXs%3D"
      },
      {
        "id": "7190102263518465323",
        "comment_count": 3077,
        "like_count": 491100,
        "play_count": 9400000,
        "caption": "🥹 a limited restock of the “thank u, next” @r.e.m.beauty collection is available now at rembeauty.com! we are so blown away by the love today 🫶🏻🫶🏻🫶🏻🫶🏻🥹 thank you all so much!",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/087dbfd11c71479887b79ed87ffa3cdd_1674076147?x-expires=1682535600&x-signature=EA2vKx3qOUrsEFXoEwh60tCDqM0%3D"
      },
      {
        "id": "7189994181992041774",
        "comment_count": 4888,
        "like_count": 360800,
        "play_count": 7100000,
        "caption": "our limited edition @r.e.m.beauty “thank u, next” collection is out now on rembeauty.com ♡ 🫧 it includes ~ a brand new midnight shadows eyeshadow palette, a pair of pink crystalized, faux mink lashes, an XL version of our #utmostimportance plumping gloss and of course our classic midnight black liquid liner. we hope you enjoy!!! ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/d179df903cb441129ae125a2f4e13134?x-expires=1682535600&x-signature=SwCNO1KcFbQ0IL%2FYyyS0irKP%2BFc%3D"
      },
      {
        "id": "7188525708111662379",
        "comment_count": 1143,
        "like_count": 108000,
        "play_count": 5200000,
        "caption": "what are you most excited to try from the @r.e.m.beauty “thank u, next” collection? dropping 1.18 ♡ 🫶🏻",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/7ddf69c6da1a456eac113ee695a44e3c_1673709095?x-expires=1682535600&x-signature=p8Dw4PX1GUa0Eu6%2BErY8Vzy8mJ8%3D"
      },
      {
        "id": "7188268179154603307",
        "comment_count": 25200,
        "like_count": 3500000,
        "play_count": 25400000,
        "caption": "limited edition @r.e.m.beauty thank u, next collection coming 1.18 ♡ one of my favorite parts? our jumbo #utmostimportance plumping gloss 🧸",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/b0e4d8f139074e5d816dcd022c87abb6_1673649119?x-expires=1682535600&x-signature=fY2X8SEReH9jR0fvUegdHKN2fwo%3D"
      },
      {
        "id": "7188045494327872814",
        "comment_count": 889,
        "like_count": 111000,
        "play_count": 4400000,
        "caption": "my limited edition @r.e.m.beauty thank u, next collection is coming jan. 18th exclusively at rembeauty.com ! 💘 it includes a delicious jumbo sized #utmostimportance plumping gloss (my favorite gloss ever), new midnight shadows palette, pink jeweled dream lashes + my favorite eyeliner marker. can’t wait for you all to enjoy ! ",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/3b2d02c09645455bbafc85ed1f4cb322_1673597277?x-expires=1682535600&x-signature=BytJdMSad%2BMM0E%2FO5hU6BBi2a2M%3D"
      },
      {
        "id": "7186232090977946923",
        "comment_count": 1530,
        "like_count": 258700,
        "play_count": 4700000,
        "caption": "💘 @rupaulsdragrace ",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/fe00b55efbfb4a4eb621551210b3ebbf_1673175117?x-expires=1682535600&x-signature=PkxVhqNnqAUvsVrNztIMueLWwLg%3D"
      },
      {
        "id": "7186219974569037099",
        "comment_count": 1805,
        "like_count": 346700,
        "play_count": 4300000,
        "caption": "🥹 sent to me by a friend. heart bursting.  sending my love to you all wherever you are ! 🫧🫧🫧🫧🫧🫧🫧🫧🫧🫧🫧🫧🫧🫧",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/1cdc1bd6227f4c319fa1a679df2e72d5?x-expires=1682535600&x-signature=7slZxMknWn9KM7f%2BSmyyNJm5cJs%3D"
      },
      {
        "id": "7185893817952800046",
        "comment_count": 4558,
        "like_count": 920000,
        "play_count": 6800000,
        "caption": "🥹 ♡ @RuPaul’s Drag Race !!!!!!!",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/bd332a32dbae44e0b3ceb9abd1b1e204_1673096332?x-expires=1682535600&x-signature=d4VhoAjLAPLNcmoYghU3TyHXiT8%3D"
      },
      {
        "id": "7172858411506289966",
        "comment_count": 8540,
        "like_count": 590000,
        "play_count": 6600000,
        "caption": "tis the season ! tune into @r.e.m.beauty’s channels next week for some fun holiday activities :) love you 🤎🦌🧸",
        "thumbnail_url": "https://p16-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/ef7a5d74766344c38b921f91646b845f?x-expires=1682535600&x-signature=9CtFxSnV2%2BI8%2B8RvIJLPnriHWMM%3D"
      },
      {
        "id": "7172299480241278251",
        "comment_count": 4333,
        "like_count": 267500,
        "play_count": 5100000,
        "caption": "Mod Vanilla & Mod Blush out now :) https://www.ulta.com/ulta/a/_/Ntt-ariana%20mod/🪺",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/bd006d4b7e6647b7884065740000d249_1669931115?x-expires=1682535600&x-signature=HXVkQd1vEDy8yRBCA6JvtERddZI%3D"
      },
      {
        "id": "7168127242068036910",
        "comment_count": 4252,
        "like_count": 326700,
        "play_count": 4200000,
        "caption": "introducing our first ever fragrance duo: Mod Vanilla and Mod Blush 🤍🍨🤎♡  available online at Ulta.com on Dec 1 @ultabeauty ",
        "thumbnail_url": "https://p19-sign.tiktokcdn-us.com/obj/tos-useast5-p-0068-tx/fe5fba65af3a4da2bd98c3b9b9568e70_1668959698?x-expires=1682535600&x-signature=xAlXohQCLvIhVZsVkD8bVdgJxD0%3D"
      }
    ]
  }
}
```
