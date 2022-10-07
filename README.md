# hackday-data-to-csv
Fetch data from json api and convert the data to csv format

```csv
ITEM_ID,TAGS,SUMMARY,CREATION_TIMESTAMP
fa8f7273-d61b-41ac-922a-c73c39c29b3c,a9c6aef2-1cb7-401c-bdba-a4c2b3fc373c,Testi,1664179228
d874fc43-aabe-479b-bdc7-d365310f72e9,5358ed7a-a061-455a-b506-a8f4eb65e3fe|3b38e89f-f358-4b95-aa9d-4ff5c35a9d3d,Danny varautuu poismenoonsa: ”Olen ajatellut Veskun Loirin ja Elisabet II:n kuolemia”,1663815600
23971109-2259-4be3-836d-1fba36213eb6,f8652c01-26ff-4f5b-a13b-d27b8b738bc9,Tältä missiltä ei löydy biletyskuvia – Viivi Pumpanen paljastaa syyn verkkaiseen sometukseensa,1663732800
dacd47fb-91b1-4b47-8511-77351737252e,550e956a-7652-4568-9b00-dc70818f75bd|4de2cee1-90f3-4e56-91a0-4f1d0d91bd3c,Johanna Tukiaisen miesystävä Veijo Lalli muodonmuutoksestaan: Piileskelin peloissani poliiseja,1663729200
e532894e-5a7f-47bd-a6ca-fe2c5c8fe98c,37b53fe9-ce46-468a-931d-bea66186bdc1,Jarppi Leppälä entiselle opinahjolleen: Haluan vähintään kunniainsinööriksi,1663650000
06697c97-c0f5-47ae-913f-a53a093a9fef,65472160-65c6-49b1-9f72-5fa5509d0964,Kemiläismieheen yhdistetty Marika Fingerroos: En muuta miehen perässä,1663646400
84df1394-7991-4f0d-8803-85a88fb67dfb,4de2cee1-90f3-4e56-91a0-4f1d0d91bd3c|550e956a-7652-4568-9b00-dc70818f75bd,Veijo Lalli paljastaa: Näin Johanna Tukiainen napattiin kiinni,1663556400
69c9b991-ddd9-463c-9ad9-51446b3dee5a,eec847fd-32d9-4940-82ce-f75ff46af919,Kike Elomaa surutyöstään: Kimmolle on muistohuone,1663524000
```

Data fetching is a bit slow for now.

## How to run

Clone the repo with 
`git clone git@github.com:phuwin95/hackday-data-to-csv.git`

Install dependancies with
`npm install`

Run the program on watch mode with
`npm run dev`