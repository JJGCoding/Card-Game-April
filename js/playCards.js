$(document).ready(function(){
    var cardDeck = $("#cardDeck").playingCards();
    cardDeck.spread(); // show it


    var hand = [];
    var hand1 = [];
    var showError = function(msg){
        $('#error').html(msg).show();
        setTimeout(function(){
            $('#error').fadeOut('slow');
        },3000);
    }
    var showHand = function(){
        var el = $('#yourHand');
        el.html('');
        for(var i=0;i<hand.length;i++){
            el.append(hand[i].getHTML());}
        el = $('#CompHand');
        el.html('');
        for(var i=0;i<hand1.length;i++){
            el.append(hand1[i].getHTML());}    
              el = $('#Discard');
        el.html('');
        for(var i=0;i<hand1.length;i++){
            el.append(hand1[i].getHTML());}  
    }
    var doShuffle = function(){
        cardDeck.shuffle();
        cardDeck.spread(); // update card table
    }
    var doDrawCard = function(){
        var c = cardDeck.draw();
        if(!c){
            showError('You are out of Cards!');
            return;
        }
        hand[hand.length] = c;
        cardDeck.spread();
        showHand();
    }
    
    var doDrawCard1 = function(){
        var c = cardDeck.draw();
        if(!c){
            showError('You are out of Cards!');
            return;
        }
        hand1[hand1.length] = c;
        cardDeck.spread();
        showHand();
    }

    var doDeal = function(){
      for(var i=0;i<7;i++){
       doDrawCard1();
        doDrawCard();
        cardDeck.spread();
        }
    }
    var doOrderByRank = function(){
        cardDeck.orderByRank();
        cardDeck.spread(); // update card table
    }
    var doOrderBySuit = function(){
        cardDeck.orderBySuit();
        cardDeck.spread(); // update card table
    }
    $('#deal').click(doDeal);
    $('#shuffler').click(doShuffle);
    $('#draw').click(doDrawCard);
    $('#draw1').click(doDrawCard1);
    $('#shuffleDraw').click(function(){
        doShuffle();
        doDrawCard();
    });
    $('#addCard').click(function(){
        if(!hand.length){
            showError('your hand is empty');
            return;
        }
        var c = hand.pop();
        showHand();
        cardDeck.addCard(c);
        cardDeck.spread();
    });
  
     $('#addCard1').click(function(){
        if(!hand1.length){
            showError('your hand is empty');
            return;
        }
        var c = hand1.pop();
        showHand();
        cardDeck.addCard(c);
        cardDeck.spread();
    });
    
     $('#takeCard').click(function(){
        if(!hand1.length){
            showError('your hand is empty');
            return;
        }
        var c = hand1.pop();
        showHand();
         hand[hand.length] = c;
            showHand();
        
    });
    
    $('#takeCard1').click(function(){
        if(!hand.length){
            showError('your hand is empty');
            return;
        }
        var c = hand.pop();
        showHand();
        hand1[hand1.length] = c;
           showHand();
    });
   
   
    $('#orderByRank').click(doOrderByRank);
    $('#orderBySuit').click(doOrderBySuit);

});
/*
// if we weren't using jquery to handle the document ready state, we would do this:
if (window.addEventListener) {
    window.addEventListener("load",initPlayingCards,false);
} else if (window.attachEvent) {
    window.attachEvent("onload",initPlayingCards);
} else {
    window.onload = function() {initPlayingCards();}
}
function initPlayingCards() {
    cardDeck = new playingCards();
}
*/
