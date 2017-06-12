angular
    .module('FactCtrl', [])
    .controller('FactController', function($scope, FactService) {

        let array = ['math', 'date', 'trivia']
        $scope.getMathFact = () => {

            FactService.get({
                type: 'math',
                number: $scope.number,
            }, (response) => {
                $scope.fact = response
                scopevalue = response
                $scope.printvalue = scopevalue.type.toUpperCase()
                $scope.extractnumbers = "(" + $scope.number + ")"

                $scope.data = "- " + scopevalue.text
            })
        }

        $scope.getTriviaFact = () => {
            FactService.get({
                type: 'trivia',
                number: $scope.number,
            }, (response) => {
                scopevalue = response

                $scope.printvalue = scopevalue.type.toUpperCase()
                $scope.extractnumbers = "(" + scopevalue.number + ")"
                $scope.data = "- " + scopevalue.text
            })
        }

        $scope.getDateFact = () => {

            FactService.get({
                type: 'date',
                number: $scope.number,
            }, (response) => {
                scopevalue = response
                if ($scope.number.includes('/')) {

                    $scope.printvalue = scopevalue.type.toUpperCase()
                    $scope.extractnumbers = "(" + $scope.number + "/" + scopevalue.year + ")"

                    $scope.data = "- " + scopevalue.text
                }


            })
        }

        $scope.getRandomFact = () => {
            let month = Math.floor((Math.random() * 12) + 1)
            let day = Math.floor((Math.random() * 31) + 1)
            $scope.datevalue = month + "/" + day
            let randomvalue = Math.floor(Math.random() * array.length)
            $scope.number = Math.floor(Math.random() * (100 + 1))

            if (array[randomvalue] == 'math' || array[randomvalue] == 'trivia') {
                number = $scope.number
            }
            if (array[randomvalue] == 'date') {
                $scope.number = $scope.datevalue
            }



            FactService.get({

                type: array[randomvalue],
                number: $scope.number,

            }, (response) => {

                $scope.fact = response

                scopevalue = response

                if (array[randomvalue] === 'date') {

                    $scope.printvalue = scopevalue.type.toUpperCase()
                    $scope.extractnumbers = "(" + $scope.number + "/" + scopevalue.year + ")"

                } else {

                    $scope.printvalue = scopevalue.type.toUpperCase()
                    $scope.extractnumbers = "(" + $scope.number + ")"
                }
                $scope.data = "- " + scopevalue.text
            })
        }
    })