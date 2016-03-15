

//Fortune Cookie Service
//Create a service that randomly returns one of three fortunes (for example, "Your luck is about to change!"). Use service with a controller and view to display the fortune.

namespace FortuneCookieService {
    angular.module("FortuneCookieService", [])
    class CookieController {
        public tell;
    //public fortune;...
        constructor(private FortuneService: FortuneService) {
        }

        //this.fortune = FortuneService.getRamdomFortune();....

        get fortune() {
            return this.tell = this.FortuneService.fortunes();
        }

      

    }
    angular.module("FortuneCookieService").controller("CookieController", CookieController);

    class FortuneService {

       fortunes = function() {
          let  fortune = Math.random();
            if (fortune < 0.33) {
                return "Today your luck will change for the better!";
            } else if (fortune < 0.66) {
                return "You might not want to get out of bed today!";
            } else {
                return "You future is cloudy!";
            }
        }



//Instructors Example..............
       //FortuneService = [
       //"Good news",
       //    "Bad news",
       //    "Great news"
       //];

       //getRamdomFortune() {
       //    return this.fortunes[Math.floor(Math.random() * this.fortunes.length)];
       //}







}
    angular.module("FortuneCookieService").service("FortuneService", FortuneService);



    //class CalculateController {

    //    public sum;

    //    solution = function(num1, num2) {
    //        return this.sum = num1 + num2;
    //    }

    //}

    //angular.module("FortuneCookieService").controller("CalculateController", CalculateController);


}