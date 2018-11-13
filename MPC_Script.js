function alertAge(age, thresh) {
    var isAdult = (age < thresh) ? "too young": "old enough";

    alert("you are " + isAdult + " (" + age + "). Theshold is " + thresh +".");
}

