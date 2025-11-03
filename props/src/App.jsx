import React from "react";
import Card from "./components/Card";

const App = () =>
{
  return(
    
    
    <div className="Parent">
    
    <Card user='EFootball' RD={2025} img="https://www.konami.com/efootball/s/img/main_page_1_sp.png?v=850"  desc="You have a ton of options on how to play, such as the 'Authentic Team' that lets you use real clubs and national teams. There is also the 'Dream Team' where you can choose your favourite footballers, whether they are active players or football legends, to create your original team. This is the game where real-life football and your wildest football dreams unite!"></Card>
    <Card user='EA FC' RD={2025} img="https://cdn1.epicgames.com/offer/1d4d85b1051e41ee8f1a099e99d59f3f/EGS_EASPORTSFC26StandardEdition_EACANADA_S2_1200x1600-effee280c00b9890a0c5249d4b0e5c97" desc="The Club is Yours. Play EA SPORTS FC™ 26 now, with an overhauled gameplay experience powered by community feedback, Manager Live Challenges that bring fresh scenarios to the new season, and Archetypes inspired by greats of the game."></Card>
    
    </div>
  )
}

export default App