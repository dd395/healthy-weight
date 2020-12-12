$(document).ready(
    function() {
        // Object containing the validation rules
        var myRules =
            {
                numHeight:
                    {
                        min: 59,
                        max: 79,
                        digits: true

                    },

                numWeight:
                    {
                        min: 88,
                        max: 353,
                        digits: true
                    },

                numWaist:
                    {
                        min: 20,
                        max: 100,
                        digits: true
                    },
                numAge:
                    {
                        min: 18,
                        max: 85,
                        digits: true
                    },
                numWater:
                    {
                        min: 0,
                        max: 20,
                        digits: true
                    }


            };

        // Object containing the error messages
        var myMessages =
            {
                numHeight:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your height in inches between 59 and 79."
                    },

                numWeight:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your weight in pounds between 88 and 353."
                    },

                numWaist:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your waist in inches between 20 and 100."
                    },
                numAge:
                    {
                        min: "too low",
                        max: "too high",
                        digits: "Please enter age in years between 16 and 85."
                    },
                numWater:
                    {
                        min: "too low",
                        max: "too high",
                        digits: "Please enter number of cups between 0 and 20."
                    }

            };

        // Pass the configuration to the form's validate() method
        // Needs submitHandler, rules, and messages properties
        $("form").validate(
            {
                submitHandler: calcBMI,
                rules: myRules,
                messages: myMessages
            }
        );

        //add event handlers
        // $("form").submit(calcBMI);
        $("#calcButton").click(calcBMI)


        //add program logic


        function calcBMI(event) {
            let BMR;
            event.preventDefault();


            //get data from

            var calculateWeight = parseFloat($("#numWeight").val());
            var calculateHeight = parseFloat($("#numHeight").val());
            var calculateWaist = parseFloat($("#numWaist").val());
            var calculateAge = parseFloat($("#numAge").val());
            var calculateWater = parseFloat($("#numWater").val());



            // do the math


            //Calculate BMI
            var calcBMI = (calculateWeight * 703) / (calculateHeight * calculateHeight);


            //calculate healthy weight based on BMI of 24.9 and healthy BMI

            var weight = (calculateHeight * calculateHeight) * 24.9 / 703;

            output.innerHTML = weight.toFixed(0) + " lbs.";

            // Weeks to weight loss goal at a 500 calorie deficit per day, and  lose of 1 pound (0.45 kg) of body weight per week

            var weightLoss = Math.abs(calculateWeight - weight);
            loss.innerHTML = weightLoss.toFixed(0) + " lbs";

            var weeks = weightLoss;
            weeksLoss.innerHTML = weeks.toFixed(0) + " weeks";

            //calculate waist based on gender; women<35 inches and men<40 inches;healthy waist

            var selectedRadio = $("input[name=gender]:checked");

            // get the data-gender from the radio button
            var selectedGender = selectedRadio.data("gender");

            //get the data-waist from the radio button
            var selectedWaist = selectedRadio.data("waist");

            // get the value from the radio button
            var selectedValue = selectedRadio.val();

            var waist = calculateWaist;

            $("#genderOutput").text(`${selectedValue}'s with a waist measurement greater than ${selectedWaist} inches are at risk for health problems even with a healthy weight. Your waist is ${calculateWaist} inches.`);

            //calculate calorie needs
            /*One of the most accurate methods of estimating your basal metabolic rate is the Harris-Benedict formula:
            Adult male: 66 + (6.3 x body weight in lbs.) + (12.9 x height in inches) - (6.8 x age in years) = BMR
            Adult female: (655 + (4.3 x weight in lbs.) + (4.7 x height in inches) - (4.7 x age in years) = BMR */

            if (selectedGender==2) {
                //male
                BMR = (66 + (6.3 * calculateWeight) + (12.9 * calculateHeight) - (6.8 * calculateAge));
                resultsBMR.innerHTML = BMR.toFixed(0) + " calories";
            } else{
                //female BMR
                BMR = (655 + (4.3 * calculateWeight) + (4.7 * calculateHeight) - (4.7 * calculateAge));
                resultsBMR.innerHTML = BMR.toFixed(0) + " calories";
            }



            //TDEE = BMR x Activity Level

            //get selected activity radio button

            var selectedActivityRadio = $("input[name=activityLevel]:checked");

            //get the data-activity from the radio button
            var activity= selectedActivityRadio.data("activity");

            var TDEE = BMR * activity;

            resultsTDEE.innerHTML = TDEE.toFixed(0)+" calories";

            //Daily caloric intake to loss weight
            var caloriesWeight = Math.abs(TDEE-500)

            resultsCaloriesWeight.innerHTML = caloriesWeight.toFixed(0) +" calories per day to loss one pound per week";

            //Daily caloric intake to gain weight

            var caloriesGain = Math.abs(TDEE + 500)

            resultsCaloriesGain.innerHTML = caloriesGain.toFixed(0) +" calories per day to gain one pound per week";

            //Determine water intake



            var water = calculateWater;

            $("#waterOutput").text(`Recommended daily water intake:   15.5 cups for men and 11.5 cups for woman. Your water intake is ${water}  cups.`);






            //put results in spans


            //show results

            if (calcBMI <= 18.5) {
                results.innerHTML = calcBMI.toFixed(1) + " - Underweight";
            } else if (calcBMI <= 24.9) {
                results.innerHTML = calcBMI.toFixed(1) + " - Healthy";
            } else if (calcBMI <= 29.9) {
                results.innerHTML = calcBMI.toFixed(1) + " - Overweight";
            } else if (calcBMI >= 30) {
                results.innerHTML = calcBMI.toFixed(1) + " - Obese";
            } else {
                results.innerHTML = " You must enter height and weight";
            }

            return false;
        }


    })








