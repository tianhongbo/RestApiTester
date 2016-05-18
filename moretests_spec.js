var frisby = require('frisby');
frisby.create('Get Brightbit Twitter feed')
  .get( "http://account-huami-us.mi-ae.com/v1/client/login?third_name=facebook&third_token=CAAYQqhaTlW8BAAHSiE5CLkZC2al2yroAluko3K20NlJYwBssWbBmpnaPr8HZB9RWk11lRIDOiqfbyZBTU5KX1gDBEhaQqbxpKNCESgtAV1oiEYPvyTunUgwqY8ebJOoqm6lzAggWJiiLyB0BTpphbwXJ1nZCmktahaZCpZC3UUA5EPVXavB7ZCS0vhnq9OkfD0N0Mvs27AvOv5n3bqjBbLiHU0qTDvdw0MZD&app_name=com.huami-usa.amazfit&grant_type=access_token&device_id=unknown&device_model=x86_64&device_id_type=unknown&lang=en")
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .expectJSON(
    {result:"ok",
token_info:{
app_token:"TAQABAAAAAJJ98P4WBXe3P_XRDBnuMyUUm7h1ca7qjUJkZ3qUUV2AnWeNdwNpkokSUhi9lOcYcBs7JrYUgQndG-rnjO23njnuGeN2iEQhSnC7iiONvEU0_39iV8_kVidatxrQ14qdyv2Y30eEaPlxvJ9ctmAaw-335atVlNI3U17fWaVNdJQbj7UZL-jkmijNyt-Fq4spH4HCsOp1qRnTLLAbQ8lUY2ukHyVUFy6ggE69okQy_n0_OMquqxBGEbg1fXCos5Xelw",
user_id:"3000000000",
login_token:"TAQEBAAAAAC2l5Op3TQu_kt1HMIU9dXl-D4wchrlBnRaWQ-J36MWB5n70g-cmvPWmOzzgEYs0lm2WWO5whYPXSB02QTXcLg8zoNSnb_vgmi6-p7Br6RK-rxSDqXhSijRbuRcL4mt5izWVqEZH-w2LbowoyAIVrHyLJ3_tCnjdv3ovdYy2dzg_o6QblRsDKHBxKDgVwBMrXJYEfIwV61yKGaM9rFskG7W8EE_bDO3F8zlsk63Zezn-aJ9iHo2stXRDY3Y-oCu0PQ",
app_ttl:43200,
ttl:3456000},
regist_info:{
is_new_user:0,
regist_date:1457129859000,
region:"us"},
thirdparty_info:{
third_id:"10153916901359074",
nickname:"Nikita+Leonov",
icon:"http://graph.facebook.com/10153916901359074/picture?type=large"}}
  )
.toss();

