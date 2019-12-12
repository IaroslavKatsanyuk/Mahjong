import { Component, OnInit } from '@angular/core';
import {BonesModule} from './bones.module';
import {BonesNumModule} from './bonesNum.module';
import {BonesTwoModule} from './bonesTwo.module';
import {BonesNumComponent} from './bonesNum.component';
import {getStylesConfig} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {style} from '@angular/animations';

@Component({
  selector: 'app-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss']
})
export class BonesComponent implements OnInit {

  bones: BonesModule[];
  bonesTwo: BonesTwoModule[];
  bonesNum: BonesNumModule[];
  bonesNumber: BonesNumComponent



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

        this.bones.push(bonesOne);
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

        this.bonesTwo.push(bonesTwo)
        shuffleArray(this.bonesNum)
        this.bonesNum.push({numberTwo: i});
      }
  }


  openBones(num, ev) {
    num.show = !num.show
  //   let a = ev.text;
  //   console.log(a);
    addEventListener("click",function(){
      document.a.style.border = "2px solid rebeccapurple";});
  }
}
