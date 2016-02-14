//These variable are for move_card_suit function
var animate_move_card_suit;
var move_card_suit_top_flag = 0;
//These variable are for move_card_single function
var animate_move_card_single;
var move_card_single_top_flag = 43;
//These variable are for move_player_1st_card function
var animate_move_player_1st_card;
var move_player_1st_card_top_flag = 39;
var move_player_1st_card_left_flag = 41.5;
var card_distribute_counter = 1;
var time_flag = 0;
var animate;
var inputFlag = -1;
var player1Call=0;
var player2Call=0;
var player3Call=0;
var player4Call=0;
var remaining_call1=0;
var remaining_call2=0;
var remaining_call3=0;
var remaining_call4=0;
var negetive_call3 =0;




function display_start(){
	//THESE ARE FOR SCROLLING TO CERTAIN HEIGHT
	//var scrollH = ;
	window.scrollTo(0, 0);
	window.scrollTo(0, window.innerHeight*0.23);    //162px is target
	
	move_card_suit();
}

function move_card_suit(){
	//This is for animating to place card_suit in center
	//DESIRED POSITION
	//top: 43%; left:  41.0156%;
	
	
	document.getElementById("card_suit").style.setProperty("-webkit-transition", "top 1s ease-out");
	document.getElementById("card_suit").style.setProperty("top", "43%");
	if(time_flag==0){
		time_flag++;
		animate_move_card_suit = setTimeout(move_card_suit,1000);
	}
	else{
		time_flag = 0;
		clearTimeout(animate_move_card_suit);
		move_card_single();
	}
	
}

function move_card_single(){
	//This is getting one card out of centered suit
	//STARTING POSITION
	//top: 43%; left:  41.5%;
	//DESIRED POSITION
	//top: 39%; left:  41.5%;

	document.getElementById("card_single").style.opacity = "1";
	move_card_single_top_flag = move_card_single_top_flag - 0.5;
	document.getElementById("card_single").style.top = move_card_single_top_flag + '%';
	if(move_card_single_top_flag<=39){
		clearTimeout(animate_move_card_single);
		move_player_1st_card("player1_card_single");
	}
	else{
		animate_move_card_single = setTimeout(move_card_single,8);
	}
}

function move_player_1st_card(img_id){
	//This is giving all players' first card


	//FOR PLAYER ONE

	//STARTING POSITION
	//top: 39%; left:  41.5%;
	//DESIRED POSITION
	//top: 18%;   left:  24%;

	//FOR PLAYER TWO

	//STARTING POSITION
	//top: 39%; left:  41.5%;
	//DESIRED POSITION
	//top: 18%;  left:  59%;

	//FOR PLAYER THREE

	//STARTING POSITION
	//top: 39%; left:  41.5%;
	//DESIRED POSITION
	//top: 60%;   left:  24%;

	//FOR PLAYER FOUR

	//STARTING POSITION
	//top: 39%; left:  41.5%;
	//DESIRED POSITION
	//top: 60%;  left:  59%;

	if(card_distribute_counter==6){
		document.getElementById("card_suit").style.opacity = "0";
	}
	if(card_distribute_counter==7){
		clearTimeout(animate_move_player_1st_card);
		document.getElementById("card_single").style.opacity = "0";
		player_card_push();
	}
	else{
		document.getElementById(img_id).style.opacity = "1";

		if(img_id==="player1_card_single"){
			if(card_distribute_counter>1){
				document.getElementById("player1_fixed_card").style.opacity = "1";
			}
			move_player_1st_card_top_flag = move_player_1st_card_top_flag - 0.6;
			move_player_1st_card_left_flag = move_player_1st_card_left_flag - 0.5;
		}
		else if(img_id==="player2_card_single"){
			if(card_distribute_counter>1){
				document.getElementById("player2_fixed_card").style.opacity = "1";
			}
			move_player_1st_card_top_flag = move_player_1st_card_top_flag - 0.6 ;
			move_player_1st_card_left_flag = move_player_1st_card_left_flag + 0.5;
		}
		else if(img_id==="player3_card_single"){
			if(card_distribute_counter>1){
				document.getElementById("player3_fixed_card").style.opacity = "1";
			}
			move_player_1st_card_top_flag = move_player_1st_card_top_flag + 0.6;
			move_player_1st_card_left_flag = move_player_1st_card_left_flag - 0.5;
		}
		else if(img_id==="player4_card_single"){
			if(card_distribute_counter>1){
				document.getElementById("player4_fixed_card").style.opacity = "1";
			}
			move_player_1st_card_top_flag = move_player_1st_card_top_flag + 0.6;
			move_player_1st_card_left_flag = move_player_1st_card_left_flag + 0.5;
		}

		document.getElementById(img_id).style.top = move_player_1st_card_top_flag + '%';
		document.getElementById(img_id).style.left = move_player_1st_card_left_flag + '%';
		if(move_player_1st_card_top_flag<=18 && img_id==="player1_card_single"){
			clearTimeout(animate_move_player_1st_card);
			move_player_1st_card_top_flag = 39;
			move_player_1st_card_left_flag = 41.5;
			move_player_1st_card("player2_card_single");
		}
		else if(move_player_1st_card_top_flag<=18 && img_id==="player2_card_single"){
			clearTimeout(animate_move_player_1st_card);
			move_player_1st_card_top_flag = 39;
			move_player_1st_card_left_flag = 41.5;
			move_player_1st_card("player3_card_single");
		}
		else if(move_player_1st_card_top_flag>=60 && img_id==="player3_card_single"){
			clearTimeout(animate_move_player_1st_card);
			move_player_1st_card_top_flag = 39;
			move_player_1st_card_left_flag = 41.5;
			move_player_1st_card("player4_card_single");
		}
		else if(move_player_1st_card_top_flag>=60 && img_id==="player4_card_single"){
			clearTimeout(animate_move_player_1st_card);
			move_player_1st_card_top_flag = 39;
			move_player_1st_card_left_flag = 41.5;
			card_distribute_counter = card_distribute_counter + 1;
			move_player_1st_card("player1_card_single");
		}
		else{
			animate_move_player_1st_card = setTimeout(function(){move_player_1st_card(img_id)},3);
		}
	}

	
}

function player_card_push(){
	//This function will push player 1,2,3,4's own card to them
	document.getElementById("player1_card_single").style.opacity = "0";
	document.getElementById("player2_card_single").style.opacity = "0";
	document.getElementById("player3_card_single").style.opacity = "0";
	document.getElementById("player4_card_single").style.opacity = "0";

	document.getElementById("player1_fixed_card").style.setProperty("-webkit-transition", "left 1s ease-out");
	document.getElementById("player1_fixed_card").style.setProperty("left", "23%");
	document.getElementById("player2_fixed_card").style.setProperty("-webkit-transition", "left 1s ease-out");
	document.getElementById("player2_fixed_card").style.setProperty("left", "60%");
	document.getElementById("player3_fixed_card").style.setProperty("-webkit-transition", "all 1s ease-out");
	document.getElementById("player3_fixed_card").style.webkitTransform = "scale(0)";
	document.getElementById("player4_fixed_card").style.setProperty("-webkit-transition", "left 1s ease-out");
	document.getElementById("player4_fixed_card").style.setProperty("left", "60%");
	player3_card_display();
}

function player3_card_display(){
	//This method will distribute and display player3's card
	//STARTING POSITION OF ALL CARDS OF PLAYER3
	//top: 60%; left:  24%;
	//DESIRED POSTION OF FIRST CARD
	//top: 80%; left:  24.0%;
	//GAP WILL BE 2.5%
	//DESIRED POSITION OF 13TH CARD
	//top: 80%;  left:  57.2%;


	if(time_flag==0){
		time_flag++;
		animate = setTimeout(player3_card_display,1500);
	}
	else{
		time_flag = 0;
		clearTimeout(animate);
		call_subwindow();
	}
	var left_flag = 22.6;
	var time_flag2 = 1;
	for (var i = 0; i < 13; i++) {
		left_flag += 2.6; 
		document.getElementById(player3Cards[i]).addEventListener("click",function(){player3_select_card(this.id);},false);
		document.getElementById(player3Cards[i]).addEventListener("mouseover",function(){mouse_over_card(this.id);},false);
		document.getElementById(player3Cards[i]).addEventListener("mouseleave",function(){mouse_out_card(this.id);},false);
		document.getElementById(player3Cards[i]).style.opacity = "1";
		document.getElementById(player3Cards[i]).style.setProperty("-webkit-transition", "all " + time_flag2 + "s ease-out");
		document.getElementById(player3Cards[i]).style.webkitTransform = "rotate(360deg)";
		document.getElementById(player3Cards[i]).style.setProperty("top", "80%");
		document.getElementById(player3Cards[i]).style.setProperty("left", left_flag+"%");
		time_flag2+=0.03;
	};
	
	
}

function player3_select_card(clicked_id){
	//This method will move the selected card to the playfield of player3
	//DESIRED POSTION FOR PLAYER1
	//top: 32%;       left:  34%;
	//DESIRED POSTION FOR PLAYER2
	//top: 32%;       left:  34%;
	//DESIRED POSTION FOR PLAYER3
	//top: 49%;       left:  34%;
	//DESIRED POSTION FOR PLAYER4
	//top: 49%;       left:  50%;


	if(inputFlag==3 && clickFlag==0){


			if(boardCards.length!=0) {
				var clickIndex = clicked_id.toString()[0]-'1';
				var suitIndex = boardCards[0].toString()[0]-'1';
				if((player3Suits[suitIndex].length!=0 && suitIndex!=clickIndex)) {

				}
				else{
					player3_card_rearrange(clicked_id);

					curClick = clicked_id;
					var temp = curClick;
					clickFlag=1;
					cardShowOnBoard(temp,"rotate(45deg)","49%","34.5%");	

				}
			}
			else{
				player3_card_rearrange(clicked_id);

				curClick = clicked_id;
				var temp = curClick;
				clickFlag=1;
				cardShowOnBoard(temp,"rotate(45deg)","49%","34.5%");	
			}

			//card rearrange
			
			
	}
}


function mouse_over_card(hovered_id){
	//This method will increase the scale to 1.2 of the hovered card of player3
	if(document.getElementById(hovered_id).style.top=="80%" && document.getElementById(hovered_id).style.left>="24%"){
		document.getElementById(hovered_id).style.setProperty("-webkit-transition","all 0.3s ease-out");
		document.getElementById(hovered_id).style.webkitTransform = "scale(1.2)";
	}
	
}

function mouse_out_card(card_id){
	//This method will decrease the scale to 1 of the hovered card of player3
	if(document.getElementById(card_id).style.top=="80%" && document.getElementById(card_id).style.left>="24%"){
		document.getElementById(card_id).style.setProperty("-webkit-transition","all 0.3s ease-out");
		document.getElementById(card_id).style.webkitTransform = "scale(1)";
	}
	
}

function call_subwindow(){
	//These method will prepare the subwindow for the player3 call
	//STARTING POSITION OF FIRST CALL BLOCK
	//top: 35%;       left:  27.8%;

	document.getElementById("play_floor").style.setProperty("-webkit-transition", "opacity 1.3s ease");
	document.getElementById("play_floor").style.setProperty("opacity", "0.6");
	document.getElementById("call_background").style.setProperty("-webkit-transition", "opacity 1.3s ease");
	document.getElementById("call_background").style.setProperty("opacity", "0.9");


	//FOR 1ST ROW FROM "NIL" TO "5"
	var left_flag_call = 27.8;
	for (var i = 0; i < 6; i++) {
		document.getElementById(i).style.opacity = "1";
		document.getElementById(i).style.top = "35%";
		document.getElementById(i).style.left = left_flag_call + "%";
		
		left_flag_call+=5.8;
	};

	//FOR 2ND ROW FROM "6" TO "10"
	left_flag_call = 30.7;
	for (var i = 6; i < 11; i++) {
		document.getElementById(i).style.opacity = "1";
		document.getElementById(i).style.left = left_flag_call + "%";
		document.getElementById(i).style.top = "42%";
		left_flag_call+=5.8;
	};

	//FOR 3RD ROW FROM "11" TO "12"
	left_flag_call = 39.5;
	for (var i = 11; i < 13; i++) {
		document.getElementById(i).style.opacity = "1";
		document.getElementById(i).style.left = left_flag_call + "%";
		document.getElementById(i).style.top = "49%";
		left_flag_call+=5.8;
	};

	//FOR 4th ROW "13"
	document.getElementById("13").style.opacity = "1";
	document.getElementById("13").style.left = "42.4%";
	document.getElementById("13").style.top = "56%";
}

function call_token_selected(call_token_id){
	//This method will move and out the selected call token of player3 and save it in player3Call variable

	document.getElementById("call_background").style.setProperty("-webkit-transition", "opacity 0.5s ease-out");
	document.getElementById("call_background").style.opacity = "0";
	document.getElementById("play_floor").style.setProperty("-webkit-transition", "opacity 0.5s ease-out");
	document.getElementById("play_floor").style.opacity = "1";

	
	for (var i = 0; i < 14; i++) {
		if(call_token_id!=i.toString()){
			document.getElementById("play_floor").style.setProperty("-webkit-transition", "opacity 0.5s ease-out");
			document.getElementById(i).style.opacity = "0";
		}
		else{
			document.getElementById(i).style.setProperty("-webkit-transition", "all 0.5s ease-in-out");
			document.getElementById(i).style.setProperty("top", "75%");
			document.getElementById(i).style.setProperty("left", "10%");
			document.getElementById(i).style.webkitTransform = "scale(0)";
			document.getElementById(i).style.opacity = "0";

			player3Call = i;
			
			
		}
	}


	
	

	//NOW PLAYER_3's BALLOONS ARE GOING TO BE DISPLAYED

	//FIRST ROW OF 7 BALLONS DISPLAY
	for(var i=0;i<player3Call;i++){
		if(i==7){
			break;
		}
		show_balloon('MyImage/CallDisplay/beer.png', 85,19-3*i,3000+player3Call-i,3);
	}

	//SECOND ROW OF OTHER BALLONS
	if(player3Call-7>0){
		for(var i=0;i<(player3Call%7);i++){
			show_balloon('MyImage/CallDisplay/beer.png', 91.3,19-3*i,(3000+(player3Call%7))-i,3);
		}
	}
	

	


	
	inputFlag = 1;    //Now player3 can move the cards to the playfield
	
}





function show_balloon(src, top, left, id, width) {

	//THIS METHOD WILL DISPLAY IMAGE ON PLAY_FLOOR

    var img = document.createElement("img");

    img.src = src;
    img.id = id;
    img.style.setProperty("position","absolute");
    img.style.setProperty("top",top+"%");
    img.style.setProperty("left",left+"%");
    img.style.setProperty("width",width+"%");
    img.style.setProperty("height","auto");
    //img.style.setProperty("opacity",opacity);


    // This next line will just add it to the PLAY_SECTION
    document.getElementById("play_section").appendChild(img);
}

function vanish_balloon(win_player){
	
	var t=win_player*1000;
	if(win_player==1){
		//remaining_call1++;
		//t+=remaining_call1;
	}
	else if(win_player==2){
		//remaining_call2++;
		//t+=remaining_call2;
	}
	else if(win_player==3){
		remaining_call3++;
		if(player3Call-remaining_call3>=0){
			//still within the limit of call
			t+=remaining_call3;
			document.getElementById(t).style.setProperty("opacity","0");
		}
		else{
			//out of call
			if(negetive_call3<7){
				//first row of skull draw
				show_balloon('MyImage/CallDisplay/skull3.png', 85,19-3*negetive_call3,3000+negetive_call3,3);	
			}
			else{
				show_balloon('MyImage/CallDisplay/skull3.png', 90,19-3*(negetive_call3-7),3000+negetive_call3,3);
			}
			negetive_call3++;
			
		}
		
	}
	else if(win_player==4){
		//remaining_call4++;
		//t+=remaining_call4;
	}
	
	//document.getElementById(t).style.setProperty("opacity","0");
	
}


function player3_card_rearrange(selected_card_id){

	//THIS METHOD WILL REARRANGE PLAYER 3'S CARDS AFTER EACH ROUND OF PLAY


	
	//Now determine how many cards have been played

	var played_cards=0;
	for(var i=0;i<4;i++){
		for(var j=0;j<player3Suits[i].length;j++){
			if(selected_card_id!=player3Suits[i][j].toString()){
				played_cards++;	
			}
			
			
		}
	}

	played_cards=13-played_cards;

	var left_start = 25.2 + (1.3*played_cards);

	//var audio = new Audio('beep2.mp3');
	//var audio2 = new Audio('beep1.mp3');
	

	
	for(var i=0;i<4;i++){
		for(var j=0;j<player3Suits[i].length;j++){
			if(selected_card_id!=player3Suits[i][j].toString()){
				document.getElementById(player3Suits[i][j]).style.setProperty("-webkit-transition","all 0.3s ease-out");
				document.getElementById(player3Suits[i][j]).style.setProperty("left", left_start+"%");
				left_start+=2.6;	
			}
		}
	}


}





window.addEventListener("load",display_start,false);