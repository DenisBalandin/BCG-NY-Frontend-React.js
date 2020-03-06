import React,{Component} from 'react';
import {Animated} from "react-animated-css";
import { db } from "../../firebase";
import 'animate.css/animate.css' 
import arrowBack from '../../img/arrow_back.png'
import suggestion_icon from '../../img/restoran/suggestions.png';
import iwant from '../../img/restoran/I_want.png';
import IamGoing from '../../img/restoran/IamGoing.png';
import i_am_going2 from '../../img/restoran/i_am_going2.png';
import hosting from '../../img/restoran/hosting.png';
import tired from '../../img/restoran/tired.png';
import friday from '../../img/restoran/friday.png';


class Restaurant extends Component{
    constructor(props){
        super(props);
        this.state = {
            part_3:false,
            part_rest:null,
            part_rest_item:true,
            restaurants:[]
        }
    }
  
    moveBackPart = (id) =>{
        document.getElementById('back_button_steps_3_catring_new').className = "show_button"; 

        this.setState({
            part_rest:null,
            part_rest_item:true,
        });
    }
    openRestaurant = (key) =>{
        
         document.getElementById('back_button_steps_3_catring_new').className = "hide_button"; 
        this.setState({
            part_rest:key,
            part_rest_item:false
        });
    }

    render(){
        console.log(this.props.nextPart);
        return(
            <div>
                <Animated animationOut="fadeOut" isVisible={this.props.nextPart == 5 ? true : false}>
                    <div id="Suggestions_block" className= { this.state.part_rest_item ? "item_block_show" : "item_block_hide" }>
                        <div className="suggestion_icon">
                            <img src={suggestion_icon}/>
                        </div>
                        <h2>bcg@10HY Concierge Restaurant Recommendations</h2>
                  
                        <strong>We’d be happy to assist with calling the restaurants to check availability. Please see the concierge or reach out through our Request Portal: http://nycrms.bcg.com.</strong> 
                        
                        <div className="suggestions_menu">
                            <div className="suggest_item" onClick={this.openRestaurant.bind(this,1)}>
                                <img src={iwant}/>
                                <p>I want something close:</p>
                            </div>
                            <div className="suggest_item" onClick={this.openRestaurant.bind(this,2)}>
                                <img src={IamGoing}/>
                                <p>I’m going to the theater:</p>
                            </div>
                            <div className="suggest_item" onClick={this.openRestaurant.bind(this,3)}>
                                <img src={i_am_going2}/>
                                <p>I’m going on a date:</p>
                            </div>
                            <div className="suggest_item" onClick={this.openRestaurant.bind(this,4)}>
                                <img src={hosting}/>
                                <p>I’m hosting clients:</p>
                            </div>
                        </div>
                        <div className="suggestions_menu_down">
                
                            <div className="suggest_item"  onClick={this.openRestaurant.bind(this,5)}>
                                <img src={tired}/>
                                <p>I’m tired and want something casual and quick:</p>
                            </div>
                            <div className="suggest_item"   onClick={this.openRestaurant.bind(this,6)}>
                                <img src={friday}/>
                                <p>It’s Friday and I want to have fun:</p>
                            </div>

                        </div>
                    </div>
                </Animated>
              
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 1? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                        </div> 
                    <div className= { this.state.part_rest == 1 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                     
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={iwant}/>
                            </div>
                            <h1>I want something close:</h1>
                            <h3>Hudson Yards (~5 mins)</h3>
                            <h4>Belcampo</h4>
                            <p>Incomparably delicious menu with meat of the highest quality — compassionately and sustainably raised on Belcampo farms. Phone (212) 244-4474</p>
                            <h4>Milos</h4>
                            <p>One of the world’s finest Mediterranean seafood restaurants by acclaimed Chef Costas Spiliadis, plus the Milos Wine Bar, two private dining rooms, and an outdoor terrace. 
                                Phone (646) 097-1970
                            </p>
                            <h4>Kawi</h4>
                            <p>Non-traditional, Korean-influenced fare including small and shareable plates from Chef Eunjo Park and Chef and Founder of Momofuku, David Chang 
                                Phone (646) 517-2699
                            </p>
                            <h4>Mar</h4>
                            <p>Seafood that emulates Spain’s diverse cultural regions and the best of the U.S. with a love of all things marine. Phone (646) 495-1242</p>
                            <h4>Queensyard </h4>
                            <p>A European-inspired all-day café, restaurant and bar from D&D London featuring original art and sweeping views. (212) 377-0780</p>
                            <h4>Spanish Diner</h4>
                            <p>An Iberian take on the classic American all-day restaurant and bar featuring Spanish favorites. Phone (617) 438-0019</p>
                            <h4>TakRoom</h4>
                            <p>Intimate bar and lounge with specialty cocktails, robust wines by the glass and light bites. Phone (929) 450-4050</p>
                            <h4>Teak Tearoom</h4>
                            <p>An all-day café with specialty teas, light fare, baked goods from Bouchon Bakery and evening tequila from Casa Dragones. Phone (212) 473-1333</p>
                            <h4>Wild Ink</h4>
                            <p>Flavors from the Far East meet Western glamour. Modern Asian fare in a stylish restaurant and lounge full of energy. Phone (646) 974-7304</p>
                            <h4>The Zodiac Room</h4>
                            <p>A classic menu of signature Neiman Marcus dishes including the famous popovers. Phone (646) 562-3599</p>
                            <h3>A walk (15 minutes or less):</h3>
                            <h4>Whitmans</h4>
                            <p>Cozy burger joint known for seasonal ingredients, 331 10th Ave at 30th St Phone (212) 837-1416</p>
                            <h4>L’Amico</h4>
                            <p>Rustic and casual Italian, Laurent Tourondel is the Chef, 849 6th Ave at 30th St Phone (212) 201-4065</p>
                            <h4>Cookshop</h4>
                            <p>Farm to Table New American, 156 10th Ave at 20th Street Phone (212) 924-4440</p>
                            <h3>A short car ride (less than 10 minutes):</h3>
                            <h4>Jean Georges </h4>
                            <p>Contemporary Dining; Modern and Chic, 1 Central Park West at 61st St Phone (212) 299-3900</p>
                            <h4>Untitled at The Whitney </h4>
                            <p>Danny Meyer’s new American restaurant, 99 Gansevoort near 10th Ave Phone (212) 570-3670</p>
                            <h4>Tao Downtown</h4>
                            <p>Modern and theatrical Pan-Asian Food, 92 9th Ave near 16th St Phone (212) 888-2724</p>
                            <h4>La Sirena</h4>
                            <p>Mario Batali, Contemporary Italian, 88 9th Ave near 16th Phone (212) 977-6096</p>
                            <h4>The Standard Grill</h4>
                            <p>Brasserie/Steakhouse 848 Washington near West 13th Phone (212) 645-4100</p>
                            <h4>Fred's at Barney's Downtown </h4>
                            <p>See and be seen lunch, New American, 101 7th Ave Phone (646) 264-6402</p>
                            <h4>The Clocktower</h4>
                            <p>New American with a great cocktail program, 5 Madison Ave near 24th St Phone (212) 413-4300</p>
                        </div>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 2? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                        <span>
                            <img src={arrowBack}/>
                        </span>
                    </div> 
                    <div className= { this.state.part_rest == 2 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                    
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={IamGoing}/>
                            </div>
                            <h1>I’m going to the theater:</h1>
                            <h4>Ocean Prime</h4>
                            <p>Classic steak & seafood menu, 123 W 52nd St near 7th Ave Phone (212) 956-1404</p>
                            <h4>La Masseria</h4>
                            <p>Hearty Southern Italian in an Old World setting, 235 W 48th St near 8th Ave Phone (212) 582-2111</p>
                            <h4>Sushi of Gari</h4>
                            <p>Creative sushi with an acclaimed omakase menu, 347 W 46th St near 9th Ave Phone (212) 957-0046</p>
                            <h4>Lamb’s Club</h4>
                            <p>Modern American with seasonal menu in Art Deco style, 132 W 44th St near 6th Phone (212) 997-5262</p>
                            <h4>Aureole</h4>
                            <p>Seasonal New American in a contemporary setting, 135 W 42nd St Phone (212) 319-1660</p>
                            <h4>db Bistro modern</h4>
                            <p>Daniel Boulud’s modern French bistro cuisine, 55 W 44th St at 6th Ave Phone (212) 391-2400</p>
                        </div>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 3? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                    </div> 
                    <div className= { this.state.part_rest == 3 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
    
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={i_am_going2}/>
                            </div>
                            <h1>I’m going on a date:</h1>
                            <h4>Le Coq Rico</h4>
                            <p>Classic steak & seafood menu, 123 W 52nd St near 7th Ave Phone (212) 267-7426</p>
                            <h4>The Little Owl</h4>
                            <p>Bold Mediterranean cuisine with an inspired menu, 90 Bedford St Phone (212) 741-4695</p>
                            <h4>Augustine</h4>
                            <p>High-end French dishes in a decorous Brasserie by Keith McNally, 5 Beekman St Phone (212) 375-0010</p>
                            <h4>Otto</h4>
                            <p>Bustling, gourmet pizzeria & wine bar from Mario Batali, One 5th Ave at 8th StPhone (212) 995-9559</p>
                            <h4>The Clocktower</h4>
                            <p>New American with a great cocktail program, 5 Madison Ave near 24th St Phone (212) 413-4300</p>
                        </div>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 4? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                    </div> 
                    <div className= { this.state.part_rest == 4 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={hosting}/>
                            </div>
                            <h1>I’m hosting clients:</h1>
                            <h4>Oceana</h4>
                            <p>Elegant upscale restaurant featuring innovative American seafood, 120 W 49th St Phone (212) 759-5941</p>
                            <h4>The Bar Room at The Modern</h4>
                            <p>French/New American fare at the MOMA, 9 W 53rd St at 5th Ave Phone (212) 333-1220</p>
                            <h4>Le Coq Rico</h4>
                            <p>Attractive French bistro & bar by Chef Westermann, 30 E 20th St at Park Ave Phone (212) 267-7426</p>
                            <h4>Ai Fiori</h4>
                            <p>Gourmet fare from the Italian & French Riviera, 400 5th Ave #2 at 37th St Phone (212) 613-8660</p>
                            <h4>Ilili</h4>
                            <p>Creative Lebanese sharing plates, 236 5th Ave near 28th St Phone (212) 683-2929</p>
                            <h4>Morimoto</h4>
                            <p>Sleek, spaceshiplike lounge by Masaharu Morimoto  88 10th Ave near 16th St Phone (212) 989-8883</p>
                        </div>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 5? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                        <span>
                            <img src={arrowBack}/>
                        </span>
                    </div> 
                    <div className= { this.state.part_rest == 5 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={tired}/>
                            </div>
                            <h1>I’m tired and want something casual and quick:</h1>
                            <h4>Market Table</h4>
                            <p>Bustling New American farm-fresh fare, 54 Carmine St at Bedford Phone (212) 255-2100</p>
                            <h4>The Smith Nomad</h4>
                            <p>American Brasserie utilizing local purveyors, 1150 Broadway at 28th St Phone (212) 685-4500</p>
                            <h4>Almond</h4>
                            <p>French comfort food in a rustic setting, 12 E 22nd St near Broadway Phone (212) 228-7557</p>
                            <h4>L’Amico</h4>
                            <p>Rustic and casual Italian, Laurent Tourondel is the Chef, 849 6th Ave at 30th St Phone (212) 201-4065</p>
                        </div>
                    </div>
                </Animated>
                <Animated animationOut="fadeOut" isVisible={this.state.part_rest == 6? true : false}>
                    <div id="back_button_steps_4" onClick={this.moveBackPart.bind(this,1)} className= { this.state.part_rest_item ?  "hide_button":"show_button"  } >
                            <span>
                                <img src={arrowBack}/>
                            </span>
                    </div> 
                    <div className= { this.state.part_rest == 6 ? "item_product_main_block_show" : "item_product_main_block_hide"  }>
                        <div id="Suggestion_content">
                            <div className="suggestion_icon">
                                <img src={friday}/>
                            </div>
                            <h1>It’s Friday and I want to have fun:</h1>
                            <h4>Beauty and Essex</h4>
                            <p>American Fare hidden behind a working pawn shop, 146 Essex St at Stanton Phone (212) 614-0146</p>
                            <h4>Tao Downtown</h4>
                            <p>American Brasserie utilizing local purveyors, 1150 Broadway at 28th St Phone (212) 685-4500</p>
                            <h4>LAVO</h4>
                            <p>Industrial-chic with a downstairs nightclub featuring DJs & bottle service 39 E 58th St Phone (212) 750-5588</p>
                        </div>
                    </div>
                </Animated>
        
                
            </div>
        )
    }
}
export default Restaurant;