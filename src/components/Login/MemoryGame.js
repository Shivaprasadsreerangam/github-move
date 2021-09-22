import { Component } from "react";
import "./MemoryGame.css";
import logo from './Cobweb.png';


class MemoryGame extends Component {
  constructor(props) {
    super(props)
    
        this.bgMusic = 'Assets/Audio/creepy.mp3';
        this.flipSound = new Audio('Assets/Audio/flip.wav');
        this.matchSound = new Audio('Assets/Audio/match.wav');
        this.victorySound = new Audio('Assets/Audio/victory.wav');
        this.gameOverSound = new Audio('Assets/Audio/gameOver.wav');
        this.volume = 0.5;
        this.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
    render(){
        return(
        <div><h1 class="page-title">Mix-Or-Match</h1>
        <div >
          Click to Start
        </div>
        <div id="game-over-text" class="overlay-text">
          GAME OVER
          <span class="overlay-text-small">Click to Restart</span>
        </div>
        <div id="victory-text" class="overlay-text">
          VICTORY
          <span class="overlay-text-small">Click to Restart</span>
        </div>
      
        <div class="game-container">
          <div class="game-info-container">
            <div class="game-info">
              Time <span id="time-remaining">100</span>
            </div>
            <div class="game-info">
              Flips <span id="flips">0</span>
            </div>
          
          </div>
          <div class="card">
            <div class="card-back card-face">
            <img src={logo}  width='350'height='200'/> 
              <img  alt=""   src='./Cobweb.png'/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="./Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left"  alt="Logo"   src="./Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="./Cobweb.png"/>
              <img class="spider"  alt="Logo"   src="./Spider.png"/>
            </div>
            <div class="card-front card-face">
            
              <img  alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Bat.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider"alt="Logo"  alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"  alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value"  alt="Logo"  alt="Logo"   src="Bat.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"  alt="Logo"   src="./Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"  alt="Logo"   src="./Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"  alt="Logo"   src="./Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   alt="Logo"   src="./Cobweb.png"/>
              <img class="spider"alt="Logo"   alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"  alt="Logo"   src="./CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"  alt="Logo"   src="./CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"  alt="Logo"   src="./CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value"  alt="Logo"  alt="Logo"   src="Bones.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Bones.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Cauldron.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Cauldron.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Eye.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Eye.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Skull.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Skull.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Pumpkin.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Pumpkin.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Ghost.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Ghost.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Dracula.png"/>
            </div>
          </div>
          <div class="card">
            <div class="card-back card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="Cobweb.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="Cobweb.png"/>
              <img class="spider" alt="Logo"   src="Spider.png"/>
            </div>
            <div class="card-front card-face">
              <img class="cob-web cob-web-top-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-top-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-left" alt="Logo"   src="CobwebGrey.png"/>
              <img class="cob-web cob-web-bottom-right" alt="Logo"   src="CobwebGrey.png"/>
              <img class="card-value" alt="Logo"   src="Dracula.png"/>
            </div>
          </div>
        </div>
            
        </div>
        );
    }
}

class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining')
        this.ticker = document.getElementById('flips');
        this.MemoryGame = new MemoryGame();
    }

    startGame() {
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.cardToCheck = null;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountdown();
            this.busy = false;
        }, 500)
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    startCountdown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countdown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory() {
        clearInterval(this.countdown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck) {
                this.checkForCardMatch(card);
            } else {
                this.cardToCheck = card;
            }
        }
    }
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMismatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMismatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
        for (let i = cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            cardsArray[randIndex].style.order = i;
            cardsArray[i].style.order = randIndex;
        }
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}


export default MemoryGame;