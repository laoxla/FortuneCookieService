//Fortune Cookie Service
//Create a service that randomly returns one of three fortunes (for example, "Your luck is about to change!"). Use service with a controller and view to display the fortune.
var FortuneCookieService;
(function (FortuneCookieService) {
    angular.module("FortuneCookieService", []);
    var CookieController = (function () {
        //public fortune;...
        function CookieController(FortuneService) {
            this.FortuneService = FortuneService;
        }
        Object.defineProperty(CookieController.prototype, "fortune", {
            //this.fortune = FortuneService.getRamdomFortune();....
            get: function () {
                return this.tell = this.FortuneService.fortunes();
            },
            enumerable: true,
            configurable: true
        });
        return CookieController;
    }());
    angular.module("FortuneCookieService").controller("CookieController", CookieController);
    var FortuneService = (function () {
        function FortuneService() {
            this.fortunes = function () {
                var fortune = Math.random();
                if (fortune < 0.33) {
                    return "Today your luck will change for the better!";
                }
                else if (fortune < 0.66) {
                    return "You might not want to get out of bed today!";
                }
                else {
                    return "You future is cloudy!";
                }
            };
        }
        return FortuneService;
    }());
    angular.module("FortuneCookieService").service("FortuneService", FortuneService);
})(FortuneCookieService || (FortuneCookieService = {}));
//# sourceMappingURL=app.js.map