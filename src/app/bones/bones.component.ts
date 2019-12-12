import { Component, OnInit } from '@angular/core';
import {BonesModule} from './bones.module';
import {BonesNumModule} from './bonesNum.module';
import {BonesTwoModule} from './bonesTwo.module';

@Component({
  selector: 'app-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent implements OnInit {

  bones: BonesModule[];
  bonesTwo: BonesTwoModule[];
  bonesNum: BonesNumModule[];



  constructor() {
  }



  ngOnInit() {

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


        function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
          return array;
        }

        this.bones.push(bonesOne);
        shuffleArray(this.bonesNum)
        this.bonesNum.push(shuffleArray({number: i}))

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
        this.bonesTwo.push(bonesTwo)
        this.bonesNum.push({numberTwo: i});
      }
  }


  openBones(num, ev) {
// num.show = !num.show
console.log(ev.text)
    console.log(ev)
    if (ev.text != ev.text){
      num.show = false
    }else{
      num.show = true
    }

  }

}
