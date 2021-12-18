const db = require('../db');
const Trail = require('../models/trail');
//Connect to DB

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const trails = [
    {
      name: 'Berthoud Pass',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tx4jdq-75k8r0Tw8yQXavwHaEj%26pid%3DApi&f=1',
      area: 'Clear Creek County, CO',
      difficulty: 'All Levels',
      details:
        'Once home to the now-defunct Berthoud Pass Ski Area, the pass is a destination for local backcountry skiers, snowboarders, and snowshoers due to its abundance of steep and challenging terrain and plentiful snow averaging 500 inches annually. The twisting road on both sides of the pass also makes "car shuttles" possible, eliminating the need for skiers and snowboarders to hike back to the top of the pass after each run.The ski resort was closed in 2002 due to financial problems caused by lack of water and sewage at the top of the pass. In 2003 the lifts were taken down, while some people continued to ski using snowcats for lift transportation. In 2005 the Colorado DOT began using a fund to restore the area to its natural state. First on the list was the demolition of the historic lodge.A new warming hut was opened at the top of the pass in May 2008, along with an expanded parking area, two scenic viewing areas and a new summit marker sign. The ski lodge and facilities had been in use since the early 1950s and the new warming hut includes modern features such as composting toilets, radiant floor heating and green construction.'
    },
    {
      name: 'Caribou Approach',
      image:
        'https://cdn2.apstatic.com/photos/ski/7000589_large_1553889096.jpg',
      area: 'Indian Peaks',
      difficulty: 'Easy',
      details:
        'The approach is mellow and flat for about 1.75 miles. Take the second fork in the trail, to the right. From the broken down cabins on the left, follow the trail to the right. Here you will start your ascent up the base of the slope. This hike takes about 10 minutes and there should be a distinct skin track when no fresh snow has fallen. At the top of the knob, head right to the open meadow and choose your line.'
    },
    {
      name: 'Hidden Valley Ski Area',
      image:
        'https://boc123.com/backcountry-guide/Hidden-Valley-Ski-Area/hiddenvalleyNow.jpg',
      area: 'Rocky Mountain National Park',
      difficulty: 'All Levels',
      details:
        'Hidden Valley Ski Area is now closed. The lifts have been removed. What is left are fantastic runs for the backcountry enthusiasts. Rocky Mountain National Park has a visitor center and just past the visitor center is where you will need to pay an entrance fee. To see current park entrance fees, please see RMNP Entrance Fees. Hidden Valley ski area opened in 1955 and closed as a ski area in 1991. The lower area of the valley, below Trail Ridge Road is great for beginner and intermediate skiers/boarders. Above Trail Ridge road is where you find the expert runs. Trail Ridge Road is closed in the winter from roughly November to May or June.'
    },
    {
      name: 'Loveland Pass',
      image:
        'https://yellowscene.com/wp-content/uploads/2020/12/bgautrea_loveland_pass_YellowScene_Skiing_2020_Nov..jpg',
      area: 'Summit County, CO',
      difficulty: 'All Levels',
      details:
        'You know it, I know it, even your neighbor knows it. We’ve all seen people hitch-hiking along Route 6 for another run and to be honest, we can’t blame them. Yeah, it’s famous and well known and easily accessible, but for good reason. There are lines for the beginners and chutes for the pros, trees for me, and open bowls for you, and with Route 6 right there you’ll be taking laps all day. Covid is still around so hitch-hiking is more difficult this season, we recommend taking two cars and going with your pod.'
    },
    {
      name: 'Vail Pass',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-assets.alltrails.com%2Fuploads%2Fphoto%2Fimage%2F20023232%2Fextra_large_e8dd44b7069eb0a51fa378ee695bffd9.jpg&f=1&nofb=1',
      area: 'Eagle County, CO',
      difficulty: 'All Levels',
      details:
        'Vail, land of the glamorous. Good thing Vail Pass is 20 minutes east of Vail, and for most just a passing point for those driving by. This area is also used by snowmobilers so lookout and head to the less populated non-motorized routes. Shrine Pass Ski Trail is easier, Corral Creek is intermediate, and if you’re looking for a challenge take the 4.5-mile route to Janet’s Cabin via Wilder Gulch. For the pros, head to the chutes on the southeast side of Uneva Peak.'
    }
  ];

  await Trail.insertMany(trails);
  console.log('Created some Trails!');
};

const run = async () => {
  await main();
  db.close();
};

run();
