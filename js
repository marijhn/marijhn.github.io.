var displayScript = document.getElementById("displayScript");
var myButton = document.getElementById("myButton");

myButton.addEventListener("click", generateScript);

  function generateScript(){
    var name = document.getElementById("name").value;
      var state = document.getElementById("state").value;

    displayScript.innerHTML = "To the Senators of " + state + 
      ": I am writing to express my concern about the threat climate change poses to our country, to our people and the future of our children. An overwhelming number of scientists agree, and signs abound that climate change is occurring much faster than was initially predicted. The government should be reducing greenhouse gas emissions by reducing carbon dioxide emissions from coal fired power plants, reducing emissions from the transport sector, funding initiatives for alternative and renewable energy technology , endorsing incentives for the uptake of renewable energy,removing of subsidies for fossil based fuel sources. We can not wait until tomorrow we must take strong action now to address the daunting issues that climate change poses. - " + name;
  }
var factList = [
  "Global warming is the result of an increase in the earth’s average surface temperature due to greenhouse gases like carbon dioxide and methane. These gases are required for the presence of human life on earth. However, global warming is happening due to the over-emittance of these gases.",
  "Emissions like carbon dioxide, nitrous oxide, and other greenhouses gases will remain in the atmosphere for many years, making it impossible to eliminate global warming for several decades.",
  "According to the IPCC 2007 report, sea levels will rise by 7-23 inches by the end of this century due to global warming.",
  "Since 1880, the average temperature has risen by 1.4-Fahrenheit degrees.",
  "The last two decades of the 20th century have been hottest in the past 400 years, according to climate studies.",
  "The Arctic is one of the worst places to be affected by global warming.",
  "According to the multinational Arctic Climate Impact Assessment report compiled between 2000 and 2004, the average temperature in Alaska, Western Canada, and Russia have risen at twice the global average.",
  "The Arctic ice is melting rapidly. By 2040 the region is expected to have a completely ice-free summer or even earlier",
  "The Montana Glacier National Park has only 25 glaciers instead of 150 that were there in the year 1910.",
  "Due to global warming and pollution, coral reefs are suffering the worst bleaching with the highest dying record since 1980.",
  "Global warming that is causing extreme weather changes has shown its implications in the way of forest fires, heatwaves and severe tropical storms throughout the world.",
  "There has been a tremendous increase in water vapor, carbon dioxide, methane, nitrous oxide and other greenhouse gases due to polluting substances emitted as a result of industrialization, pollution, deforestation.",
  "Humans are emitting more carbon dioxide in the atmosphere, faster than the absorbing rates of plants and the oceans.",
  "Sea levels have risen about 7 inches in the last 100 years, which is more than the previous 2000 years combined. The rising sea levels due to global warming could threaten the lives of people living along with the coastal areas.",
  "Around 100 million people live with 3 feet of sea level, and many cities of the world are located near such vulnerable coastal areas.",
  "Melting of glaciers will cause sea levels to rise, on the one hand, and water shortages in areas that depend on natural sources of water on the other.",
  "More than 1 million species have become extinct due to disappearing habitats, ecosystems, acidic oceans, all caused due to global warming.",
  "Global warming will completely alter the ocean’s conveyer belt, which will cause a mini ice age in Europe.",
  "Increasing temperatures will release more greenhouse gases, unlock methane, and cause more evaporation of water.",
  "2000-2009 has been the hottest decade of the earth",
  "The rate at which carbon dioxide is being dumped into the environment is 1000 tons per second until the 2011 records.",
  "The carbon dioxide levels in the 20th century have been highest in 650,000 years.  Till 1950, the levels rose by 11% and recently the levels have risen by 40%.",
  "Due to the industrial revolution, the burning of fossil fuels like coal, oil, and gas started on a massive scale. This not only increased greenhouse gases but was also responsible for large scale deaths due to asthma and other respiratory diseases.",
  "Human activities release around 37 billion metric tons of carbon dioxide per year.",
  "Since the industrial revolution in 1700, the level of carbon dioxide on earth has increased by 34%",
  "By the year 2100, the average temperature will rise by 5.8 degrees as a result of global warming.",
  "Each year of the 21st century ranks amongst 14 hottest years since 1880.",
  "In the last 30 years, the average consumption of fossil fuel by the United States has been 80%.",
  "Fossil fuels are the most dangerous contributors to global warming.",
  "Between 2000-2100, the heat-related deaths will rise by 150,000.",
  "Global warming is causing colder areas of the world to become hotter, thereby becoming more vulnerable to diseases.",
  "A failure in preventing global warming can cause a major economic collapse causing 20% of global domestic output to fix.",
  "Droughts, hurricanes, wildfires, extinction of endangered species, melting of polar ice caps, storms are few of the effects of global warming",
  "The NRDC (Natural Resources Defense Council) proposed the Clean Air Act to cut power plant emissions by 26 percent in the next 7 years.",
  "The heat-trapping gases have been increasing in the atmosphere at an alarming rate. The presence of a large number of these gases has resulted in an enhanced greenhouse effect. Heatwaves caused by global warming is responsible for many heat-related illness and deaths.",
  "Global warming can lead to massive food and water shortages and has a life-threatening impact on wildlife.",
  "America contributes only about 4% of the world’s population, but they are responsible for a staggering 25% of the total carbon dioxide emissions. In recent years, however, China has taken the lead by producing 28% of carbon dioxide emissions. This makes them the top contributing country.",
  "Many scientists have now pointed out that global warming is the biggest latent health threat of the 21st century. It is a problem that affects us all- from the young to the old and from the rich to the poor. All this means that this would give a steep rise to the death rates across the globe.",
  "A 2015 study reveals that vertebrate species are going extinct at a rate that is 114 times elevated than it actually should be. The situations could become worse if the situations are not controlled at the earliest.",
  "Global warming also messes with the air pollution levels. With the increase in the mean temperature conditions, the ground level of ozone also rises steeply. It is this ozone that forms a significant component of the smog.",
  "The costs incurred on natural disasters will keep increasing drastically if the global warming levels are not controlled at the earliest. A little survey into the fact will help us understand better. From 1980 to 2011, the average cost was $5.2 billion. Now, between the years 2011 and 2015, the average cost was $10.8 billion"];

var fact = document.getElementById("fact");
var btn = document.getElementById("btn");
var count = 0;

btn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
