import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { CardComponent } from './card/card.component';
import { MeldComponent } from './meld/meld.component';
import { DiscardPileComponent } from './discard-pile/discard-pile.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayerHandComponent,
    CardComponent,
    MeldComponent,
    DiscardPileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
