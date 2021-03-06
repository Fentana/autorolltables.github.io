//  subrolls.js
//
//  Note:
//    percent_to is the percent to roll at all
//    percent_of is the percent of the total to roll

// names = ["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", ];

town_npcs = [

  {"title":"Alchemist", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thealchemistis", "npcs/d4thealchemistislookingfor", "npcs/d4thealchemistcarries", ],"sub_rolls":[],},
  {"title":"Apprentice Crafter", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theapprenticeis", "npcs/d4theapprenticeseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Apprentice Crafter", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theapprenticeis", "npcs/d4theapprenticeseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Apprentice Crafter", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theapprenticeis", "npcs/d4theapprenticeseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Artisan", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6theartisanis", "npcs/d8theartisanhas", "npcs/d8theartisanhas", "npcs/d6theartisanisparticularlyskilledat", "npcs/d8theartisanislookingfor", "npcs/d6theartisaniscarrying", "npcs/d6theartisanis", "npcs/d6theartisandreamsof", ],"sub_rolls":[],},
  {"title":"Bard", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d20thebardis", "npcs/d20alwayspreparedtomakeamelodyorrhythmthebardcarrieshisher", "npcs/d10thebardsmusicalinstrumentis", "npcs/d12ifthingsgetroughthebardhas", "npcs/d12thebardalsocarries", "npcs/d12thebardiswearing", "npcs/d12thebardhas", "npcs/d12thebardislookingfor", "npcs/d10thebardisalwaysabighitamong", "npcs/d12thebardtellsataleofarecentvisitto", ],"sub_rolls":[],},
  {"title":"Bard", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d20thebardis", "npcs/d20alwayspreparedtomakeamelodyorrhythmthebardcarrieshisher", "npcs/d10thebardsmusicalinstrumentis", "npcs/d12ifthingsgetroughthebardhas", "npcs/d12thebardalsocarries", "npcs/d12thebardiswearing", "npcs/d12thebardhas", "npcs/d12thebardislookingfor", "npcs/d10thebardisalwaysabighitamong", "npcs/d12thebardtellsataleofarecentvisitto", ],"sub_rolls":[],},
  {"title":"Barkeep/Barmaid", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8theservergreetsyouwith", "npcs/d6theserverislookingfor", "npcs/d4theservercarries", ],"sub_rolls":[],},
  {"title":"Barkeep/Barmaid", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8theservergreetsyouwith", "npcs/d6theserverislookingfor", "npcs/d4theservercarries", ],"sub_rolls":[],},
  {"title":"Barkeep/Barmaid", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8theservergreetsyouwith", "npcs/d6theserverislookingfor", "npcs/d4theservercarries", ],"sub_rolls":[],},
  {"title":"Boyer/Fletcher", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4thebowyeris", "npcs/d4thebowyerislookingfor", "npcs/d4thebowyercarries", ],"sub_rolls":[],},
  {"title":"Cook", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thecookislookingfor", ],"sub_rolls":[],},
  {"title":"Cook", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thecookislookingfor", ],"sub_rolls":[],},
  {"title":"Cook", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thecookislookingfor", ],"sub_rolls":[],},
  {"title":"Criminal", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thecriminalis", "npcs/d6thecriminalislookingfor", "npcs/d6thecriminalcarries", ],"sub_rolls":[],},
  {"title":"Farmfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thepeasantis", "npcs/d8thepeasantseekssomeoneto", "npcs/d6thepeasantsprimarycropsandmarketfareinclude", ],"sub_rolls":[],},
  {"title":"Farmfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thepeasantis", "npcs/d8thepeasantseekssomeoneto", "npcs/d6thepeasantsprimarycropsandmarketfareinclude", ],"sub_rolls":[],},
  {"title":"Farmfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thepeasantis", "npcs/d8thepeasantseekssomeoneto", "npcs/d6thepeasantsprimarycropsandmarketfareinclude", ],"sub_rolls":[],},
  {"title":"Farmfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thepeasantis", "npcs/d8thepeasantseekssomeoneto", "npcs/d6thepeasantsprimarycropsandmarketfareinclude", ],"sub_rolls":[],},
  {"title":"Farmfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thepeasantis", "npcs/d8thepeasantseekssomeoneto", "npcs/d6thepeasantsprimarycropsandmarketfareinclude", ],"sub_rolls":[],},
  {"title":"Fisherfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10thefishermanfishesin", "npcs/d6thefishermantypicallyfishesfrom", "npcs/d8thefishermanuses", "npcs/d6thefishermanpreferstofish", "npcs/d8thefishermanisseeking", "npcs/d8tattoothefishermanhas", "npcs/d10distinguishingfeaturethefishermanhas", ],"sub_rolls":[],},
  {"title":"Fisherfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10thefishermanfishesin", "npcs/d6thefishermantypicallyfishesfrom", "npcs/d8thefishermanuses", "npcs/d6thefishermanpreferstofish", "npcs/d8thefishermanisseeking", "npcs/d8tattoothefishermanhas", "npcs/d10distinguishingfeaturethefishermanhas", ],"sub_rolls":[],},
  {"title":"Fisherfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10thefishermanfishesin", "npcs/d6thefishermantypicallyfishesfrom", "npcs/d8thefishermanuses", "npcs/d6thefishermanpreferstofish", "npcs/d8thefishermanisseeking", "npcs/d8tattoothefishermanhas", "npcs/d10distinguishingfeaturethefishermanhas", ],"sub_rolls":[],},
  {"title":"Fisherfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10thefishermanfishesin", "npcs/d6thefishermantypicallyfishesfrom", "npcs/d8thefishermanuses", "npcs/d6thefishermanpreferstofish", "npcs/d8thefishermanisseeking", "npcs/d8tattoothefishermanhas", "npcs/d10distinguishingfeaturethefishermanhas", ],"sub_rolls":[],},
  {"title":"Fisherfolk", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10thefishermanfishesin", "npcs/d6thefishermantypicallyfishesfrom", "npcs/d8thefishermanuses", "npcs/d6thefishermanpreferstofish", "npcs/d8thefishermanisseeking", "npcs/d8tattoothefishermanhas", "npcs/d10distinguishingfeaturethefishermanhas", ],"sub_rolls":[],},
  {"title":"Harlot", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10theharlotis", "npcs/d6everyoneisbeautifultheharlothas", "npcs/d8nooneisflawlesstheharlothas", "npcs/d4theharlotsflawis", "npcs/d6theharlotisparticularlyskilledat", "npcs/d6theharlotislookingto", ],"sub_rolls":[],},
  {"title":"Harlot", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10theharlotis", "npcs/d6everyoneisbeautifultheharlothas", "npcs/d8nooneisflawlesstheharlothas", "npcs/d4theharlotsflawis", "npcs/d6theharlotisparticularlyskilledat", "npcs/d6theharlotislookingto", ],"sub_rolls":[],},
  {"title":"Harlot", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10theharlotis", "npcs/d6everyoneisbeautifultheharlothas", "npcs/d8nooneisflawlesstheharlothas", "npcs/d4theharlotsflawis", "npcs/d6theharlotisparticularlyskilledat", "npcs/d6theharlotislookingto", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d20theknightshousescolorsare", "npcs/d8theknightshousessymbolis", "npcs/d6theknighthassworntoanoblelordorladyto", "npcs/d8aboveallelsetheknightvalues", "npcs/d4theknightisarmoredin", "npcs/d6theknightsarmoris", "npcs/d12theknightiswielding", "npcs/d6theknightsmountis", "npcs/d12theknightis", "npcs/d12ontheknightsfaceis", "npcs/d10theknightcarries", ],"sub_rolls":[],},
  {"title":"Law Official", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4thelawofficialis", "npcs/d6thelawofficialseekssomeoneto", "npcs/d4thelawofficialcarries", ],"sub_rolls":[],},
  {"title":"Noble", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thenobleis", "npcs/d6thenobleseekssomeoneto", "npcs/d6thenoblecarries", ],"sub_rolls":[],},
  {"title":"Noble", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thenobleis", "npcs/d6thenobleseekssomeoneto", "npcs/d6thenoblecarries", ],"sub_rolls":[],},
  {"title":"Priest", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thepriestis", "npcs/d4thepriestislookingfor", "npcs/d4thepriestcarries", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Shopkeeper", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4theshopkeeperis", "npcs/d4theshopkeeperseekssomeoneto", ],"sub_rolls":[],},
  {"title":"Smith", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4thesmithis", "npcs/d4thesmithislookingfor", "npcs/d4thesmithcarries", ],"sub_rolls":[],},
  {"title":"Squire", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d12theservantis", "npcs/d6theservantworksfor", "npcs/d8ontheservantsfaceis", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Traveler", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d8thetraveleris", "npcs/d10thetravelerisseeking", ],"sub_rolls":[],},
  {"title":"Tutor/Sage", "main_rolls":["npcs/dxfirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d6thetutoris", "npcs/d4thetutorschargesviewhimheras", "npcs/d12thetutorisparticularlywellversedin", ],"sub_rolls":[],},
  {"title":"Woodsmen", "main_rolls":["npcs/dxmalefirstname", "npcs/dxsurname", "npcs/dxpersonality","npcs/d10facialfeaturethewoodsmanhas", "npcs/d8apparelthewoodsmanwears", "npcs/d8mannerismthewoodsmanhas", "npcs/d8professionthewoodsmanis", "npcs/d10goalthewoodsmanislookingto", "npcs/d10possessionsthewoodsmancarriesorwears", ],"sub_rolls":[],},

];

castle_npcs = [

  {"title":"Nobleman", "main_rolls":["npcs/dxmalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thelordis", "npcs/d6thelordseekssomeoneto", "npcs/d6thelordcarries", ],"sub_rolls":[],},
  {"title":"Noblewoman", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theladyis", "npcs/d6theladyseekssomeoneto", "npcs/d4theladycarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Guard", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theguardserveshisliegefor", "npcs/d6ontheguardsfaceis", "npcs/d4theguardcarries", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theknightis", "npcs/d6theknighthasswornto", "npcs/d6theknightcarries", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/dxpersonality", "npcs/d6theknightis", "npcs/d6theknighthasswornto", "npcs/d6theknightcarries", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theknightis", "npcs/d6theknighthasswornto", "npcs/d6theknightcarries", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theknightis", "npcs/d6theknighthasswornto", "npcs/d6theknightcarries", ],"sub_rolls":[],},
  {"title":"Knight", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theknightis", "npcs/d6theknighthasswornto", "npcs/d6theknightcarries", ],"sub_rolls":[],},
  {"title":"Squire/Valet", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theretaineris", "npcs/d4theretainerhas", "npcs/d6theretainerwantsto", ],"sub_rolls":[],},
  {"title":"Squire/Valet", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theretaineris", "npcs/d4theretainerhas", "npcs/d6theretainerwantsto", ],"sub_rolls":[],},
  {"title":"Squire/Valet", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theretaineris", "npcs/d4theretainerhas", "npcs/d6theretainerwantsto", ],"sub_rolls":[],},
  {"title":"Squire/Valet", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theretaineris", "npcs/d4theretainerhas", "npcs/d6theretainerwantsto", ],"sub_rolls":[],},
  {"title":"Squire/Valet", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6theretaineris", "npcs/d4theretainerhas", "npcs/d6theretainerwantsto", ],"sub_rolls":[],},
  {"title":"Archer", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thearcheris", "npcs/d4thearcherislookingto", "npcs/d4thearchercarries", ],"sub_rolls":[],},
  {"title":"Archer", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thearcheris", "npcs/d4thearcherislookingto", "npcs/d4thearchercarries", ],"sub_rolls":[],},
  {"title":"Archer", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thearcheris", "npcs/d4thearcherislookingto", "npcs/d4thearchercarries", ],"sub_rolls":[],},
  {"title":"Archer", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thearcheris", "npcs/d4thearcherislookingto", "npcs/d4thearchercarries", ],"sub_rolls":[],},
  {"title":"Archer", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thearcheris", "npcs/d4thearcherislookingto", "npcs/d4thearchercarries", ],"sub_rolls":[],},
  {"title":"Armorer / Smith", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/dxpersonality", "npcs/d4thesmithis", "npcs/d4thesmithislookingfor", "npcs/d4thesmithcarries", ],"sub_rolls":[],},
  {"title":"Steward", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestewardis", "npcs/d4thestewardseekssomeoneto", "npcs/d4thestewardisconcernedabout", ],"sub_rolls":[],},
  {"title":"Chaplain", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thechaplainis", "npcs/d4thechaplainislookingfor", "npcs/d4thechaplaincarries", ],"sub_rolls":[],},
  {"title":"Cook", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thecookgreetsyouwith", "npcs/d4thecookislookingfor", ],"sub_rolls":[],},
  {"title":"Fool/Jester", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thefoolis", "npcs/d8thefoolgetsthemostlaughsfrom", "npcs/d6thefoolwantsnothingmorethanto", ],"sub_rolls":[],},
  {"title":"Tutor/Sage", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thetutoris", "npcs/d4thetutorschargesviewhimheras", "npcs/d12thetutorisparticularlywellversedin", ],"sub_rolls":[],},
  {"title":"Tutor/Sage", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thetutoris", "npcs/d4thetutorschargesviewhimheras", "npcs/d12thetutorisparticularlywellversedin", ],"sub_rolls":[],},
  {"title":"Tutor/Sage", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thetutoris", "npcs/d4thetutorschargesviewhimheras", "npcs/d12thetutorisparticularlywellversedin", ],"sub_rolls":[],},
  {"title":"Maidservant", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theservantis", "npcs/d4theservanthas", "npcs/d4theservantwantsto", ],"sub_rolls":[],},
  {"title":"Maidservant", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theservantis", "npcs/d4theservanthas", "npcs/d4theservantwantsto", ],"sub_rolls":[],},
  {"title":"Maidservant", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theservantis", "npcs/d4theservanthas", "npcs/d4theservantwantsto", ],"sub_rolls":[],},
  {"title":"Maidservant", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theservantis", "npcs/d4theservanthas", "npcs/d4theservantwantsto", ],"sub_rolls":[],},
  {"title":"Maidservant", "main_rolls":["npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4theservantis", "npcs/d4theservanthas", "npcs/d4theservantwantsto", ],"sub_rolls":[],},
  {"title":"Guard Captain", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thecaptainis", "npcs/d4thecaptainisconcernedabout", "npcs/d4thecaptainislookingfor", "npcs/d6thecaptaincarries", ],"sub_rolls":[],},
  {"title":"Horsemaster", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thehorsemasteris", "npcs/d4thehorsemasterhas", "npcs/d4thehorsemasterwantsto", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Stable Hand", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thestablehandis", "npcs/d4thestablehandhas", "npcs/d4thestablehandwantsto", ],"sub_rolls":[],},
  {"title":"Huntsman", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d6thehuntsmanis", "npcs/d4thehuntsmanisconcernedabout", "npcs/d4thehuntsmanislookingto", "npcs/d4thehuntsmancarries", ],"sub_rolls":[],},
  {"title":"Kennelmaster", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thekennelmasteris", "npcs/d4thekennelmasterislookingto", "npcs/d4thekennelmastercarries", ],"sub_rolls":[],},
  {"title":"Boyer/Fletcher", "main_rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d4thebowyeris", "npcs/d4thebowyerislookingfor", "npcs/d4thebowyercarries", ],"sub_rolls":[],},

];

pantheon = [
  {"title":"God of the Sun/Sky", "main_rolls":["objects/d6thisgodofthesunandorskyisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"Earth Mother/Goddess", "main_rolls":["objects/d6thisearthandormothergoddessisoftencalled", "objects/d6sheholdsdominionover", "objects/d6herfollowersmust", ],"sub_rolls":[],},
  {"title":"God of Craft/Knowledge", "main_rolls":["objects/d6thisgodofcraftingandorknowledgeisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"God of Darkness/Secrets", "main_rolls":["objects/d6thisgodofdarknessandorsecretsisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"God of Death/Evil", "main_rolls":["objects/d6thisgodofdeathandorevilisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"Goddess of Love/Fertility", "main_rolls":["objects/d6thisgoddessofloveandorfertilityisoftencalled", "objects/d6sheholdsdominionover", "objects/d6herfollowersmust", ],"sub_rolls":[],},
  {"title":"Goddess of Moon/Magic", "main_rolls":["objects/d6thisgoddessofthemoonandormagicisoftencalled", "objects/d6sheholdsdominionover", "objects/d6herfollowersmust", ],"sub_rolls":[],},
  {"title":"Goddess of the Hunt/Woodlands", "main_rolls":["objects/d6thisgoddessthehuntandorwoodlandsisoftencalled", "objects/d6sheholdsdominionover", "objects/d6herfollowersmust", ],"sub_rolls":[],},
  {"title":"God of the Storm/Seas", "main_rolls":["objects/d6thisgodisofstormsandorseasoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"The Trickster Messenger God", "main_rolls":["objects/d8thistricksterandormessengergodisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
  {"title":"The War/Tyrant God", "main_rolls":["objects/d6thiswartyrantgodisoftencalled", "objects/d6heholdsdominionover", "objects/d6hisfollowersmust", ],"sub_rolls":[],},
];

fishing_catch = [
  {"title":"- Cold Ocean Fishing", "main_rolls":["objects/d10nearshorecatchyouhaulin", "objects/d10deepseacatchyouhaulin", "objects/d6rarecatchyouhaulin", ],"sub_rolls":[],},
  {"title":"- Warm Ocean Fishing", "main_rolls":["objects/d8nearshorecatchyouhaulin", "objects/d10deepseacatchyouhaulin", "objects/d8rarecatchyouhaulin", ],"sub_rolls":[],},
  {"title":"- Freshwater Fishing", "main_rolls":["objects/d10coldwatercatchyouhaulin", "objects/d10warmwatercatchyouhaulin", "objects/d6swampwatercatchyouhaulin", ],"sub_rolls":[],},
  {"title":"- Seafood Harvesting", "use":"To harvest seafood the player must have a hunting trap, and must succeed on a skill check vs a DC 12. If he or she has proficiency in Survival then the player can make this check with advantage. The player can only harvest their traps after 24 hours have passed.", "main_rolls":[ "objects/d12seafood",],"sub_rolls":[],},
];


top.subrolls = [

  // dungeons/locations
  {"title":"2d6 Castle Rooms", "id":"castle2d6rooms", "roll_type":"amount", "number":"2d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/d20roomsthischamberis", "dungeons/castled20featuresyounotice",],},
  {"title":"4d6 Amount of d50 Castle Inhabitants", "id":"castle4d6amountofd50inhabitants", "roll_type":"type", "number":"4d6", "percent_to":"100", "percent_of":"100", "roll":castle_npcs,},
  {"title":"5d6 Castle Rooms", "id":"castle5d6rooms", "roll_type":"amount", "number":"5d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/d20roomsthischamberis", "dungeons/castled20featuresyounotice",],},
  {"title":"10d6 Amount of d50 Castle Inhabitants", "id":"castle10d6amountofd50inhabitants", "roll_type":"type", "number":"10d6", "percent_to":"100", "percent_of":"100", "roll":castle_npcs,},
  {"title":"8d6 Castle Rooms", "id":"castle8d6rooms", "roll_type":"amount", "number":"8d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/d20roomsthischamberis", "dungeons/castled20featuresyounotice",],},
  {"title":"16d6 Amount of d50 Castle Inhabitants", "id":"castle16d6amountofd50inhabitants", "roll_type":"type", "number":"16d6", "percent_to":"100", "percent_of":"100", "roll":castle_npcs,},
  {"title":"15d6 Castle Rooms", "id":"castle15d6rooms", "roll_type":"amount", "number":"15d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/d20roomsthischamberis", "dungeons/castled20featuresyounotice",],},
  {"title":"30d6 Amount of d50 Castle Inhabitants", "id":"castle30d6amountofd50inhabitants", "roll_type":"type", "number":"30d6", "percent_to":"100", "percent_of":"100", "roll":castle_npcs,},
  {"title":"4d6 Monastery Rooms", "id":"monastery4d6rooms", "roll_type":"amount", "number":"4d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/d12thisbuildingchamberis", "dungeons/monasteryd20featuresyounotice",],},
  {"title":"4d6 Prison Rooms", "id":"prison4d6rooms", "roll_type":"amount", "number":"4d6", "percent_to":"100", "percent_of":"100", "rolls":["subrolls/prisond10roomsthischamberis", "dungeons/prisond20featuresyounotice",],},
  {"title":"4d4 Jailers", "id":"prison4d4jailers", "roll_type":"amount", "number":"4d4", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "dungeons/d8thejaileris", "dungeons/d4thejailerisconcernedabout", "dungeons/d4thejailerislookingto", "dungeons/d8thejailercarries",],},
  {"title":"10d6 Prisoners ", "id":"prison10d6prisoners", "roll_type":"amount", "number":"10d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "dungeons/d4theprisonerhas", "dungeons/d6theprisonerisherebecause",],},
  {"title":"6d6 Temple Rooms", "id":"temple6d6rooms", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/templed20thepurposeofthisroomis", "dungeons/templed20featuresyounotice",],},
  {"title":"6d6 Tomb Rooms", "id":"tomb6d6rooms", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["dungeons/tombd20thepurposeofthisroomis", "dungeons/tombd20featuresyounotice", ],},

  // factions
  {"title":"6d6 Artisan", "id":"guild6d6artisan", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/guildd6theartisanis", "factions/guildd8theartisanhas", "factions/guildd8theartisanhas2", "factions/d6theartisanisparticularlyskilledat", "factions/d8theartisanislookingfor", "factions/d6theartisaniscarrying", "factions/guildd6theartisanis2", "factions/d6theartisandreamsof", ],},
  {"title":"6d6 Apprentice", "id":"guild6d6apprentice", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d4theapprenticeis", "factions/d4theapprenticeseekssomeoneto", ],},
  {"title":"6d6 Cultist", "id":"6d6cultist", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d6thecultist", "factions/d10thecultistwears", "factions/d10thecultisthas", "factions/d10thecultistis", "factions/d10thecultistislookingfor", ],},
  {"title":"1d4 Trading Company", "id":"1d4tradingcompany", "roll_type":"amount", "number":"1d4", "percent_to":"100", "percent_of":"100", "rolls":["factions/d6thistradingcompanysspecificspecialtyorpurposeis", "factions/d8thistradingcompanyiscontrolledby", ],},
  {"title":"6d6 Shopkeeper", "id":"6d6shopkeeper", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d4theshopkeeperis", "factions/d4theshopkeeperseekssomeoneto", ],},
  {"title":"6d6 Merchant", "id":"6d6merchant", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d6themerchantis", "factions/d4themerchantwears", "factions/d4themerchantseekssomeoneto", "factions/d6themerchantcarries", "factions/d6currencybesidescointhemerchantwilltradein", ],},
  {"title":"6d6 Soldiers", "id":"6d6soldier", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d12thesoldieris", "factions/d12thesoldierfightsfor", "factions/d12onthesoldiersfaceis", "factions/d10thesoldiercarries", ],},
  {"title":"6d6 Nobles", "id":"6d6nobles", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d6thenobleis", "factions/d8thenobleseekssomeoneto", "factions/d6thenoblecarries", "factions/d8thenoblewears", "factions/d8thenoblehas",  ],},
  {"title":"6d6 Poachers", "id":"6d6poachers", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d8thepoachersfavoritepreyincludes", "factions/d6thepoachershunt", ],},
  {"title":"6d6 Robbers", "id":"6d6robbers", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d6therobberstypicallystrikewith", "factions/d8therobbersarenotoriousfor", ],},
  {"title":"6d6 Smugglers", "id":"6d6smugglers", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d6thesmugglingringsprimarymodusoperandiinvolves", "factions/d8theringissupportedby", ],},
  {"title":"6d6 Pirates", "id":"6d6pirates", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d12tattoothepiratehas", "factions/d12distinguishingfeaturethepiratehas", ],},
  {"title":"6d6 Barbarians", "id":"6d6barbarians", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "npcs/d8thewarriorisarmoredin", "npcs/d12thewarrioriswielding", "npcs/d8thewarriorisalsocarrying", "npcs/d6thewarriorfightswith", "npcs/d12thewarrioris", "npcs/d12onthewarriorsfaceis", "npcs/d10onthewarriorsbodyis", ],},
  {"title":"4d4 Investigators", "id":"4d4investigators", "roll_type":"amount", "number":"4d4", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d10theconstableis", "factions/d6theconstableworksfor", "factions/d12ontheconstablesfaceis", "factions/d10theconstablecarries", ],},
  {"title":"6d6 Guards", "id":"6d6guards", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxmalefirstname", "npcs/dxfemalefirstname", "npcs/dxsurname", "npcs/dxpersonality", "factions/d10theguardis", "factions/d6theguardworksfor", "factions/d12ontheguardsfaceis", "factions/d10theguardcarries", ],},

  // objects
  {"title":"1d12 Gods", "id":"1d12gods", "roll_type":"type", "number":"1d12", "percent_to":"100", "percent_of":"100", "roll":pantheon,},
  {"title":"3d6 Relationships", "id":"3d6relationships", "roll_type":"amount", "number":"3d6", "percent_to":"100", "percent_of":"100", "rolls":["objects/d10intrapantheonrelationshipsthisdeityisthe_____ofthatdeity", "objects/d6thegodsare", "objects/d6thegodsrelationshipwiththeirfollowers", ],},
  {"title":"6d6 Books", "id":"6d6books", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["objects/d20thebookssubjectis", "objects/d10thebooksconditionis", "objects/d12thebookscoveris", "objects/d10thebookis", ],},
  {"title":"6d6 Sailors", "id":"6d6sailors", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/d12thesailoris", "npcs/d20tattoothesailorhas", "npcs/d20thesailorstattooisamementoof", "npcs/d12distinguishingfacialfeaturethesailorhas", "npcs/d12accessoriesthesailoriswearingorcarrying", "npcs/d12attheendofalongvoyagethesailoriseagerto", "npcs/d12whendrunkthesailorisproneto", "npcs/d12whatthesailorreallywantsisto", ],},
  {"title":"1d4 Days Fishing", "id":"1d4catch", "roll_type":"type", "number":"1d4", "percent_to":"100", "percent_of":"100", "roll":fishing_catch,},

  // monsters
  {"title":"6d6 Goblins", "id":"6d6goblins", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["npcs/dxpersonality", "monsters/d12thegoblinisparticularlyskilledat", "monsters/d12thegoblinwields", "monsters/d12thegoblinwears", "monsters/d12thegoblinsfacehas", "monsters/d8thegoblinhas", ],},
  {"title":"6d6 Lycanthropes", "id":"6d6lycanthropes", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["monsters/d12thebeastshiftertransformsinto", "monsters/d6thebeastshiftertransformsinvoluntarily", "monsters/d8whiletransformedthebeastshifterbehaves", "monsters/d8thebeastshifterlives", "monsters/d12thebeastshiftermakesitshome", "monsters/d8thebeastshifterhasatendencyto", "monsters/d8inhumanoidformthebeastshifterfightswith", "monsters/d12inhumanoidformthebeastshifterpresentsitselfas", "monsters/d12inhumanoidformthebeastshiftersfacehas", "monsters/d20thebeastshiftersfavoritepreyare",],},
  {"title":"1d4 Uncommon Lycanthropes", "id":"1d4uncommonlycanthropes", "roll_type":"amount", "number":"1d4", "percent_to":"100", "percent_of":"100", "rolls":["monsters/d20thebeastshiftertransformsinto", "monsters/d6thebeastshiftertransformsinvoluntarily", "monsters/d8whiletransformedthebeastshifterbehaves", "monsters/d8thebeastshifterlives", "monsters/d12thebeastshiftermakesitshome", "monsters/d8thebeastshifterhasatendencyto", "monsters/d8inhumanoidformthebeastshifterfightswith", "monsters/d12inhumanoidformthebeastshifterpresentsitselfas", "monsters/d12inhumanoidformthebeastshiftersfacehas", "monsters/d20thebeastshiftersfavoritepreyare",],},
  {"title":"6d6 Orcs", "id":"6d6orcs", "roll_type":"amount", "number":"6d6", "percent_to":"100", "percent_of":"100", "rolls":["monsters/d8appearancetheorchas", "monsters/d6tattootheorchas", "monsters/d8roletheorcis", "monsters/d8skillevenamongorcstheorcisparticularlygoodat", "monsters/d8armortheorcisarmoredin", "monsters/d8weapontheorciswielding", "monsters/d6motivationtheorcislookingfor", ],},
  {"title":"1 Orc Warlord", "id":"1orcwarlord", "roll_type":"amount", "number":"1d1", "percent_to":"100", "percent_of":"100", "rolls":["monsters/d4racethisorcisa", "monsters/d10skintheyhaveskincoloured", "monsters/d20appearancethewarlordhas", "monsters/d20traittheorcwarlordisknownbecause", "monsters/d20combatthewarlordisknowntofightwith", "monsters/d100bannertheorcclanhasabannerthatshows", "monsters/d20soldiersthewarlordsmainsoldiersandwarriorsare", "monsters/d20minionstheorcsarmyalsohas", "monsters/d20basewhennotontheoffensivetheclanisbasedoutof", ],},
  {"title":"4d6 Wolves", "id":"4d6wolves", "roll_type":"amount", "number":"4d6", "percent_to":"100", "percent_of":"100", "rolls":["monsters/d10colorthewolfscoatis", "monsters/d10markingsthewolfhas", "monsters/d12eyesthewolfseyesare", "monsters/d12mannerthewolfis", "monsters/d6huntingthewolfprefersto", "monsters/d10favoritepreyifgiventhechoicethewolfwillopttoeat", "monsters/d10packthewolfis", ],},

  // settlements
  // settlements - city generation
  {"title":"8d4 Landmarks/Districts", "id":"8d4landmarks", "roll_type":"amount", "number":"8d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20landmarkyouseeaan", "settlements/d20thispartofthecityisthe", ],},
  {"title":"4d4 Landmarks/Districts", "id":"4d4landmarks", "roll_type":"amount", "number":"4d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20landmarkyouseeaan", "settlements/d20thispartofthecityisthe", ],},
  {"title":"2d4 Landmarks/Districts", "id":"2d4landmarks", "roll_type":"amount", "number":"2d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20landmarkyouseeaan", "settlements/d20thispartofthecityisthe", ],},
  {"title":"1d4 Landmarks/Districts", "id":"1d4landmarks", "roll_type":"amount", "number":"1d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20landmarkyouseeaan", "settlements/d20thispartofthecityisthe", ],},
  {"title":"10d4 Street Names", "id":"10d4streetnames", "roll_type":"amount", "number":"10d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20thelocalscallthisstreet", ],},
  {"title":"8d4 Street Names", "id":"8d4streetnames", "roll_type":"amount", "number":"8d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20thelocalscallthisstreet", ],},
  {"title":"4d4 Street Names", "id":"4d4streetnames", "roll_type":"amount", "number":"4d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20thelocalscallthisstreet", ],},
  {"title":"2d4 Street Names", "id":"2d4streetnames", "roll_type":"amount", "number":"2d4", "percent_to":"100", "percent_of":"100", "rolls":["settlements/d20thelocalscallthisstreet", ],},
  {"title":"10d6 Amount of d50 Town Inhabitants", "id":"10d6amountofd50towninhabitants", "roll_type":"type", "number":"10d6", "percent_to":"100", "percent_of":"100", "roll":town_npcs,},
  {"title":"8d6 Amount of d50 Town Inhabitants", "id":"8d6amountofd50towninhabitants", "roll_type":"type", "number":"8d6", "percent_to":"100", "percent_of":"100", "roll":town_npcs,},
  {"title":"6d6 Amount of d50 Town Inhabitants", "id":"6d6amountofd50towninhabitants", "roll_type":"type", "number":"6d6", "percent_to":"100", "percent_of":"100", "roll":town_npcs,},
  {"title":"4d6 Amount of d50 Town Inhabitants", "id":"4d6amountofd50towninhabitants", "roll_type":"type", "number":"4d6", "percent_to":"100", "percent_of":"100", "roll":town_npcs,},











  {"title": "d20 Rooms: This chamber is...", "id":"prisond10roomsthischamberis", "roll":[
  "A prison cell.",
  "A prison cell.",
  "A prison cell.",
  "A prison cell.",
  "Another prison cell.",
  "Another prison cell.",
  "Another prison cell.",
  "Another prison cell.",
  "A passageway connecting cell blocks.",
  "A guardroom.",
  "A guardroom.",
  "A barracks.",
  "A jailer’s quarters.",
  "A jailer’s quarters.",
  "A jailer’s quarters.",
  "A yard or large indoor space for exercise.",
  "A yard or large indoor space for exercise.",
  "A dining hall.",
  "An interrogation room.",
  "A torture chamber.",
  ]},

];
``
