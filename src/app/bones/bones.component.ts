import { Component, OnInit } from '@angular/core';
import {BonesModule} from './bones.module';
import {BonesNumModule} from './bonesNum.module';
import {BonesTwoModule} from './bonesTwo.module';
import {BonesModel} from './bones.model';

@Component({
  selector: 'app-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent implements OnInit {

  public bonesArray: BonesModel[] = [];
  public firstSelected: BonesModel;
  public secondSelected: BonesModel;
  bones: BonesModule[];
  bonesTwo: BonesTwoModule[];
  bonesNum: BonesNumModule[];


  constructor() {
  }


  ngOnInit() {


    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    this.bonesNum = [];
    this.bones = [];
    const bonesOne = 50;
    nextPrime:
      for (let i = 2; i <= bonesOne; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            continue nextPrime;
          }
        }

        this.bones.push({number: bonesOne});
        shuffleArray(this.bonesNum)
        this.bonesNum.push({number: i})

      }

    this.bonesTwo = [];
    const bonesTwo = 50;
    nextPrime:
      for (let i = 2; i <= bonesTwo; i++) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            continue nextPrime;
          }
        }

        this.bonesTwo.push({numberTwo: bonesTwo});
        shuffleArray(this.bonesNum)
        this.bonesNum.push({numberTwo: i});
      }
  }

  onClickHandler(bones: BonesModel) {
    if (!this.firstSelected) {
      bones.show = true;
      this.firstSelected = bones;
      console.log(this.firstSelected)
      return;
    }
    if (!this.secondSelected) {
      this.secondSelected = bones;
      bones.show = true;
      console.log(this.secondSelected)
    }
    if (this.firstSelected && this.secondSelected && this.firstSelected.number || this.firstSelected.numberTwo === this.secondSelected.number || this.secondSelected.numberTwo) {
      console.log(this.firstSelected.number)
      console.log(this.firstSelected.numberTwo)
      console.log(this.secondSelected.number)
      console.log(this.secondSelected.numberTwo)
      this.firstSelected.isSelected = true;
      this.secondSelected.isCompleted = true;
      this.firstSelected = null;
      this.secondSelected = null;
    }else {
      this.firstSelected = null;
      this.secondSelected = null;
      setTimeout(() => {
        bones.show = false
      }, 1500)
    }
  }
}
